// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://pj4devops.github.io',  // switch to the custom domain once it's connected
  redirects: { '/work': '/writing/' },
});
