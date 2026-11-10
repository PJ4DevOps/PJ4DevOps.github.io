// Turns one of the photos into abstract contour-line art for the home page hero.
// The photo is blurred and traced like a topographic map: each line follows a
// level of brightness, so big shapes (petals, wings, hills) come through as
// smooth outlines and fine texture drops away. Output is an SVG whose strokes
// use `currentColor`, so CSS sets the color.
//
//   node scripts/make-outline.mjs <photo-id> [levels] [out.svg] [crop-top]
//   crop-top is the fraction of the photo to cut from the top before tracing.
//   The home page uses (golden hills, top quarter cropped):
//   node scripts/make-outline.mjs img_3494 10 src/assets/outline.svg 0.25
import sharp from 'sharp';
import { contours } from 'd3-contour';
import fs from 'node:fs/promises';

const [id = 'img_0787', levelsArg = '12', out = 'src/assets/outline.svg', cropArg = '0'] = process.argv.slice(2);
const levels = Number(levelsArg);
const W = 320;  // trace on a small grid: smoother lines, smaller file

const small = await sharp(`src/assets/photos/${id}.jpg`).resize(W).toBuffer({ resolveWithObject: true });
const cut = Math.round(small.info.height * Number(cropArg));
const { data, info } = await sharp(small.data)
  .extract({ left: 0, top: cut, width: small.info.width, height: small.info.height - cut })
  .greyscale().blur(5).normalise()
  .toColourspace('b-w').raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;

const thresholds = Array.from({ length: levels }, (_, i) => 255 * (i + 1) / (levels + 1));
const shapes = contours().size([w, h]).smooth(true).thresholds(thresholds)(Array.from(data));

// Contours close themselves along the image border; drop those border segments
// so the drawing has no frame, and write the rest as open polylines.
const onEdge = ([x, y]) => x <= 0.6 || y <= 0.6 || x >= w - 1.6 || y >= h - 1.6;
const pt = ([x, y]) => `${+x.toFixed(1)} ${+y.toFixed(1)}`;
function pathFor(multiPolygon) {
  let d = '';
  for (const polygon of multiPolygon.coordinates)
    for (const ring of polygon) {
      let drawing = false;
      for (let i = 1; i < ring.length; i++) {
        const a = ring[i - 1], b = ring[i];
        if (onEdge(a) && onEdge(b)) { drawing = false; continue; }
        d += drawing ? `L${pt(b)}` : `M${pt(a)}L${pt(b)}`;
        drawing = true;
      }
    }
  return d;
}

const paths = shapes
  .map((s, i) => ({ d: pathFor(s), i }))
  .filter(p => p.d)
  .map(p => `<path d="${p.d}" opacity="${(0.55 + 0.45 * p.i / levels).toFixed(2)}"/>`);

// Show the whole photo (sky, hills and road) and fade it out toward its own edges,
// so it reads as a landscape at any screen shape.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" ` +
  `fill="none" stroke="currentColor" stroke-width="0.7" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet">` +
  `<defs><radialGradient id="outline-fade"><stop offset="0.7" stop-color="#fff"/>` +
  `<stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>` +
  `<mask id="outline-mask"><rect width="${w}" height="${h}" fill="url(#outline-fade)"/></mask></defs>` +
  `<g mask="url(#outline-mask)">${paths.join('')}</g></svg>\n`;
await fs.writeFile(out, svg);
console.log(`${id}: ${paths.length} contour levels, ${(svg.length / 1024).toFixed(0)} KB → ${out}`);
