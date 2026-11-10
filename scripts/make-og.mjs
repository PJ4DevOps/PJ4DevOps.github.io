// Builds public/og.png, the preview card shown when a link to the site is
// shared (LinkedIn, Slack, iMessage, email). 1200x630, the standard size.
// Text is drawn as vector shapes from the site's own fonts, so it matches the site.
// Usage: node scripts/make-og.mjs
import sharp from 'sharp';
import opentype from 'opentype.js';
import { readFileSync } from 'node:fs';

const W = 1200, H = 630;
const C = { bg: '#f4f6f1', ink: '#36302b', muted: '#5a534d', accent: '#9a3622', outline: '#d06a3c' };
const load = f => {
  const b = readFileSync(`node_modules/@fontsource/${f}.woff`);
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.length));  // Node may share the underlying buffer
};
const fraunces = load('fraunces/files/fraunces-latin-400-normal');
const frauncesItalic = load('fraunces/files/fraunces-latin-400-italic');
const alegreya = load('alegreya-sans/files/alegreya-sans-latin-500-normal');

// Draw runs of [text, font, color] along one baseline; returns SVG paths and the end x.
function line(runs, x, baseline, size, tracking = 0) {
  let out = '';
  for (const [text, font, color] of runs) {
    out += `<path fill="${color}" d="${font.getPath(text, x, baseline, size, { letterSpacing: tracking }).toPathData(2)}"/>`;
    x += font.getAdvanceWidth(text, size, { letterSpacing: tracking });
  }
  return { svg: out, end: x };
}

// The hills contour art from the home page, tinted orange, filling the top of the card.
const art = readFileSync('src/assets/outline.svg', 'utf8')
  .replace('stroke="currentColor"', `stroke="${C.outline}"`)
  .replace('<svg ', `<svg x="-150" y="-110" width="1500" height="840" `);

const S = 84, T = -0.025 * 1;  // headline size and a touch of negative tracking, as on the site
const head1 = line([['Every product has a ', fraunces, C.ink], ['story', frauncesItalic, C.accent], ['.', fraunces, C.ink]], 72, 470, S, T);
const head2 = line([['I find it', fraunces, C.ink], ['.', fraunces, C.accent]], 72, 562, S, T);
const name = line([['Pat Johnson', fraunces, C.ink], ['.', fraunces, C.accent]], 72, 96, 36);
const urlText = 'patriciajohnson.me';
const url = line([[urlText, alegreya, C.muted]], W - 72 - alegreya.getAdvanceWidth(urlText, 28), 96, 28);

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs><filter id="soft" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="36"/></filter></defs>
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  ${art}
  <!-- soft washes so the words read cleanly over the lines -->
  <rect x="10" y="360" width="${Math.round(head1.end) + 40}" height="250" rx="110" fill="${C.bg}" opacity=".9" filter="url(#soft)"/>
  <rect x="30" y="40" width="1140" height="80" rx="40" fill="${C.bg}" opacity=".85" filter="url(#soft)"/>
  ${head1.svg}${head2.svg}${name.svg}${url.svg}
</svg>`;

await sharp(Buffer.from(card)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('wrote public/og.png');
