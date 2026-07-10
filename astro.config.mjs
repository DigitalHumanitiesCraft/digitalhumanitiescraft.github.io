import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dhcraft.org',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  // Alte Excellence-Guides-URL (extern verlinkt); static output erzeugt daraus
  // eine Meta-Refresh-Seite mit noindex + canonical.
  redirects: {
    '/excellence/guides': '/#excellence',
  },
  integrations: [
    sitemap({
      // Redirect-Stubs (noindex) gehören nicht in die Sitemap
      filter: (page) =>
        !page.includes('/excellence/promptotyping') &&
        !page.includes('/excellence/guides') &&
        page !== 'https://dhcraft.org/excellence/' &&
        page !== 'https://dhcraft.org/en/excellence/',
    }),
  ],
});
