// Takes the tool screenshots of the page from the live demos, each in its most telling state,
// at 1440 by 900 CSS pixels, or a smaller 16:10 window where a view carries text, and double pixel density, and writes WebP files in 1440 and 720 width
// into public/fancy-research-tools/img/ of this site.
// Needs Playwright from an existing installation and network access to the demos:
//   PLAYWRIGHT=/path/to/node_modules/playwright CHANNEL=chrome node scripts/fancy-research-tools/shoot-tools.cjs [id ...]
const fs = require("fs");
const path = require("path");
const { chromium } = require(process.env.PLAYWRIGHT || "playwright");

const site = process.env.SITE || path.join(__dirname, "..", "..");
const out = path.join(site, "public", "fancy-research-tools", "img");
// A smaller window for the tools whose view carries text a card must keep readable. Every shot is 16:10.
const viewports = { teicrafter: { width: 1200, height: 750 }, correspexplorer: { width: 1200, height: 750 }, "szd-htr": { width: 1120, height: 700 } };
const wait = (page, ms) => page.waitForTimeout(ms);

// Each recipe only chooses a state of the real tool. It never alters the tool's interface.
const recipes = {
  "coocr-htr": async (page) => {
    await page.goto("https://dhcraft.org/co-ocr-htr/", { waitUntil: "networkidle" });
    await page.getByText("Überspringen").click().catch(() => {});
    await page.locator("#btnSamples").evaluate((el) => el.click());
    await wait(page, 800);
    // A printed page of 1617. Other samples are left out of the page on purpose, see knowledge/data.md.
    await page.locator("#samplesMenu").getByText("Antidotarium (1617), p. 15").first()
      .evaluate((el) => (el.closest("button,li,a") || el).click());
    await wait(page, 6000);
    await page.mouse.click(5, 450);
  },
  // The one example the public editor offers, a letter of Stefan Zweig Digital, opened by the deep link
  // the page uses as well. The third page shows the letter itself, the first two its envelope.
  teicrafter: async (page) => {
    await page.goto("https://dhcraft.org/teiCrafter/editor.html#example=szd", { waitUntil: "networkidle" });
    await wait(page, 4000);
    await page.locator("#btn-next").click();
    await wait(page, 1500);
    await page.locator("#btn-next").click();
    await wait(page, 4000);
  },
  // The map of the reference dataset, the CMIF export of the Hugo Schuchardt Archiv (CC BY 4.0), which the
  // tool bundles as its extended example. The address loads the dataset and opens the view without a tour.
  correspexplorer: async (page) => {
    await page.goto("https://dhcraft.org/CorrespExplorer/explore.html?view=map&json=data%2Fhsa-letters.json", { waitUntil: "networkidle", timeout: 120000 });
    await page.locator(".maplibregl-canvas").waitFor({ timeout: 60000 });
    await wait(page, 8000);
  },
  // One object in the viewer, facsimile beside transcription with its checking status. The object is a
  // handwritten letter by Stefan Zweig of June 1939 that a person has checked. The facsimile comes from
  // GAMS, its rights lie with the Literaturarchiv Salzburg, see knowledge/fancy-research-tools/data.md.
  "szd-htr": async (page) => {
    await page.goto("https://chpollin.github.io/szd-htr-ocr-pipeline/#view/o_szd.1641_gemini-3.1-flash-lite-preview", { waitUntil: "networkidle" });
    await wait(page, 6000);
  },
  klawiter: async (page) => {
    await page.goto("https://chpollin.github.io/klawiter-rescue/", { waitUntil: "networkidle" });
    await wait(page, 2000);
  },
};

async function encode(page, png, width, file) {
  const data = await page.evaluate(async ([b64, width]) => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = Math.round(img.naturalHeight * width / img.naturalWidth);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/webp", 0.82).split(",")[1];
  }, [png, width]);
  fs.writeFileSync(path.join(out, file), Buffer.from(data, "base64"));
}

(async () => {
  const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(recipes);
  const browser = await chromium.launch({ channel: process.env.CHANNEL || undefined });
  let failures = 0;
  for (const id of ids) {
    const page = await browser.newPage({ viewport: viewports[id] || { width: 1440, height: 900 }, deviceScaleFactor: 2, colorScheme: "light", reducedMotion: "reduce" });
    try {
      await recipes[id](page);
      const png = (await page.screenshot({ type: "png" })).toString("base64");
      const blank = await browser.newPage();
      await encode(blank, png, 1440, `${id}-1440.webp`);
      await encode(blank, png, 720, `${id}-720.webp`);
      await blank.close();
      console.log(`ok   ${id}`);
    } catch (e) {
      failures++;
      console.log(`FAIL ${id} ${e.message}`);
    }
    await page.close();
  }
  await browser.close();
  process.exit(failures ? 1 : 0);
})();
