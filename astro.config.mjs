// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://patriciajohnson.me',
  redirects: { '/work': '/writing/' },
  integrations: [sitemap({
    // Archived blog posts point search engines to Moderne's originals, so they stay out of the sitemap.
    filter: page => !/\/writing\/.+\/$/.test(new URL(page).pathname) && !page.endsWith('/work/'),
  })],
});
