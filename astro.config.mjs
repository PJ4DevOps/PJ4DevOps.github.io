// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://patriciajohnson.me',
  redirects: { '/work': '/writing/' },
});
