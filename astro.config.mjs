// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Sam's Menswear — static editorial site.
// React is used only for the animated hero ("The Tailor's Notebook"),
// mounted as a client island. Everything else is static HTML/CSS.
export default defineConfig({
  site: 'https://customsuitandshirt.com',
  integrations: [
    react(),
    // Exclude the staging suit-builder from the sitemap — it's noindex until it
    // replaces the SVG configurator on /design (after Ingrid's colour pass).
    sitemap({
      // Keep noindex pages out of the sitemap: /suit-builder is staging,
      // and the review ask + its print sheet are handed out in person,
      // not search surfaces. A noindex URL in a sitemap is a mixed signal.
      filter: (page) =>
        !page.includes('/suit-builder') &&
        !/\/review\/?$/.test(page) &&
        !page.includes('/review-card'),
    }),
  ],
  server: { port: 4321 },
});
