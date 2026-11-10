// Copies content from the project folder (one level up) into the site.
// Originals stay outside the repo; only web-ready copies come in.
//
//   ../content/pictures/*        → src/assets/photos/<id>.jpg  (rotated, ≤2400px, all metadata stripped)
//   ../content/gallery.json      → src/data/gallery.json
//   ../content/publications/     → public/pdfs/*.pdf, src/assets/covers/*.png, src/data/publications.json
//   ../archive/blogs/posts/<slug> → src/content/writing/<slug>.md, public/writing/<slug>/*
//   ../content/resume.json       → src/data/resume.json
//
// Run with: npm run import
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const site = path.resolve(import.meta.dirname, '..');
const root = path.resolve(site, '..');
const rel = p => path.relative(site, p);

async function reset(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

async function photos() {
  const src = path.join(root, 'content/pictures');
  const out = path.join(site, 'src/assets/photos');
  await reset(out);
  const files = (await fs.readdir(src)).filter(f => /\.(jpe?g|png|heic|webp)$/i.test(f));
  const list = [];
  for (const f of files) {
    const id = path.parse(f).name.toLowerCase();
    const dest = path.join(out, id + '.jpg');
    // sharp drops EXIF (including GPS) unless told to keep it; rotate() bakes in the orientation first.
    const info = await sharp(path.join(src, f))
      .rotate()
      .resize(2400, 2400, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(dest);
    const meta = await sharp(dest).metadata();
    if (meta.exif || meta.xmp || meta.iptc) throw new Error(`metadata left in ${dest}`);
    list.push({ id, w: info.width, h: info.height });
  }
  const gallery = JSON.parse(await fs.readFile(path.join(root, 'content/gallery.json'), 'utf8'));
  const untagged = list.filter(p => !gallery.photos[p.id]).map(p => p.id);
  await fs.mkdir(path.join(site, 'src/data'), { recursive: true });
  await fs.writeFile(path.join(site, 'src/data/gallery.json'), JSON.stringify({ ...gallery, sizes: list }, null, 2));
  console.log(`photos: ${list.length} → ${rel(out)} (metadata stripped)`);
  if (untagged.length) console.log(`  untagged, add to content/gallery.json: ${untagged.join(', ')}`);
}

async function publications() {
  const src = path.join(root, 'content/publications');
  const pdfOut = path.join(site, 'public/pdfs');
  const coverOut = path.join(site, 'src/assets/covers');
  await reset(pdfOut);
  await reset(coverOut);
  const pubs = JSON.parse(await fs.readFile(path.join(src, 'publications.json'), 'utf8'));
  for (const p of pubs) {
    if (p.hostPdf && p.pdf) await fs.copyFile(path.join(src, p.pdf), path.join(pdfOut, p.pdf));
    if (p.cover) await fs.copyFile(path.join(src, p.cover), path.join(coverOut, p.cover));
  }
  await fs.writeFile(path.join(site, 'src/data/publications.json'), JSON.stringify(pubs, null, 2));
  console.log(`publications: ${pubs.length} → ${rel(pdfOut)}, ${rel(coverOut)}`);
}

async function writing() {
  const src = path.join(root, 'archive/blogs/posts');
  const mdOut = path.join(site, 'src/content/writing');
  const imgOut = path.join(site, 'public/writing');
  await reset(mdOut);
  await reset(imgOut);
  const slugs = (await fs.readdir(src, { withFileTypes: true })).filter(d => d.isDirectory()).map(d => d.name);
  for (const slug of slugs) {
    let md = await fs.readFile(path.join(src, slug, 'index.md'), 'utf8');
    // Point image references (Markdown and raw HTML) at the copies served from /writing/<slug>/.
    md = md.replace(/\]\(images\//g, `](/writing/${slug}/`)
           .replace(/src="images\//g, `src="/writing/${slug}/`)
           .replace(/^hero: "images\//m, `hero: "/writing/${slug}/`)
           // Site-relative links left in raw HTML blocks pointed at moderne.ai pages.
           .replace(/href="\/(?!writing\/)/g, 'href="https://moderne.ai/');
    // Pat wrote or co-wrote everything on the site; Moderne credits some posts to "The Moderne Team".
    md = md.replace(/^author: "The Moderne Team"$/m, 'author: "Pat Johnson"');
    // Drop Moderne's marketing call-to-action blocks.
    md = md.split('\n\n').filter(b => !/^<(div|aside) class="post-cta"/.test(b)).join('\n\n');
    await fs.writeFile(path.join(mdOut, slug + '.md'), md);
    await fs.cp(path.join(src, slug, 'images'), path.join(imgOut, slug), { recursive: true });
  }
  console.log(`writing: ${slugs.length} posts → ${rel(mdOut)}`);
}

async function resume() {
  await fs.copyFile(path.join(root, 'content/resume.json'), path.join(site, 'src/data/resume.json'));
  console.log('resume: copied → src/data/resume.json');
}

await photos();
await publications();
await writing();
await resume();
