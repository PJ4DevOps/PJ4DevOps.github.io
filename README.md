# Pat Johnson — portfolio site

Writing (books, briefs, and blogs), photographs, and résumé. Built with [Astro](https://astro.build) and published to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Working on it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Content

Source material lives outside this repository, next to it in `../content` and `../archive`. Original photos there carry GPS data and are never committed. `npm run import` copies everything in: photos are resized and stripped of all metadata, PDFs and covers go to `public/pdfs` and `src/assets/covers`, blog posts to `src/content/writing`, and the résumé to `src/data/resume.json`.

Design notes (palette, type, gallery rules) are in `../design/aesthetic.md`.
