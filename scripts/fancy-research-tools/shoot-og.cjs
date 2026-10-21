// Renders the link preview images for sharing (JPEG, 1200 by 630) from the hero of the German and the
// English subpage, og.jpg and og-en.jpg, and writes them into public/fancy-research-tools/img/ of this
// site. Needs Playwright from an existing installation and the site served, by default the site's
// `npx astro preview --port 4399`:
//   PLAYWRIGHT=/path/to/node_modules/playwright CHANNEL=chrome node scripts/fancy-research-tools/shoot-og.cjs
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT || "playwright");

const site = process.env.SITE || path.join(__dirname, "..", "..");

const base = process.env.BASE || "http://localhost:4399";

(async () => {
  const browser = await chromium.launch({ channel: process.env.CHANNEL || undefined });
  for (const [url, file] of [["/fancy-research-tools/", "og.jpg"], ["/en/fancy-research-tools/", "og-en.jpg"]]) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
    await page.goto(base + url, { waitUntil: "networkidle" });
    // The floating back-to-top button of the site does not belong in a preview image, and a smaller
    // hero padding keeps the buttons inside the 630 pixels the image has.
    await page.addStyleTag({ content: ".to-top { display: none !important; } .hero { padding-block: 2.5rem !important; }" });
    await page.screenshot({ path: path.join(site, "public", "fancy-research-tools", "img", file), type: "jpeg", quality: 85 });
    await page.close();
  }
  await browser.close();
})();
