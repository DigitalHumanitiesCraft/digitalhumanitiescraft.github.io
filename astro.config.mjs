import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro/GFM erzeugt den Fußnoten-Block mit englischem Label ("Footnotes") und
// englischen Back-Reference-aria-labels, unabhängig von der Sprache. Dieses
// rehype-Plugin lokalisiert beides zur Build-Zeit anhand der Inhaltssprache
// (citation.language der Frontmatter; Default Deutsch).
function rehypeLocalizeFootnotes() {
  return (tree, file) => {
    const lang = file?.data?.astro?.frontmatter?.citation?.language === 'en' ? 'en' : 'de';
    const t =
      lang === 'en'
        ? { label: 'Footnotes', backref: 'Back to reference' }
        : { label: 'Fußnoten', backref: 'Zurück zu Referenz' };
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'element' && node.properties) {
        if (node.properties.id === 'footnote-label') {
          node.children = [{ type: 'text', value: t.label }];
        }
        const aria = node.properties.ariaLabel;
        if (typeof aria === 'string' && aria.startsWith('Back to reference')) {
          node.properties.ariaLabel = aria.replace('Back to reference', t.backref);
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://dhcraft.org',
  // YouTube-Vorschaubilder lädt der Build herunter und liefert sie von dhcraft.org aus,
  // damit der Besucher-Browser keine Anfrage an Google stellt.
  image: {
    domains: ['i.ytimg.com'],
  },
  markdown: {
    rehypePlugins: [rehypeLocalizeFootnotes],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  // Alte Excellence-Guides-URL (extern verlinkt); static output erzeugt daraus
  // eine Meta-Refresh-Seite mit noindex + canonical.
  // /promptotyping: GitHub Pages ist case-sensitive, die Projekt-Site heißt /Promptotyping/.
  // /fancy-research-tools/en/: englische Adressen aus der Zeit als eigenes Repo, EN lebt jetzt unter /en/.
  redirects: {
    '/excellence/guides': '/#excellence',
    '/promptotyping': '/Promptotyping/',
    '/fancy-research-tools/en': '/en/fancy-research-tools/',
    '/fancy-research-tools/en/privacy': '/en/fancy-research-tools/privacy/',
  },
  integrations: [
    sitemap({
      // Redirect-Stubs (noindex) gehören nicht in die Sitemap
      filter: (page) =>
        !page.includes('/excellence/promptotyping') &&
        !page.includes('/excellence/guides') &&
        page !== 'https://dhcraft.org/promptotyping/' &&
        page !== 'https://dhcraft.org/excellence/' &&
        page !== 'https://dhcraft.org/en/excellence/' &&
        !page.startsWith('https://dhcraft.org/fancy-research-tools/en/'),
    }),
  ],
});
