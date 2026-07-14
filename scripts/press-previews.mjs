// Erzeugt die Vorschaubilder der Presse-Seite: transparente Ränder der Logo-PNGs
// trimmen und auf einheitliche Höhe verkleinern, damit die Karten gleich groß wirken.
// Aufruf: node scripts/press-previews.mjs (nach Änderungen an public/press/*.png)
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const srcDir = 'public/press';
const outDir = 'public/press/preview';

await mkdir(outDir, { recursive: true });
const files = (await readdir(srcDir, { withFileTypes: true }))
  .filter((e) => e.isFile() && e.name.endsWith('.png'))
  .map((e) => e.name);

for (const f of files) {
  const base = path.basename(f, '.png');
  const out = path.join(outDir, `${base}.webp`);
  await sharp(path.join(srcDir, f))
    .trim()
    .resize({ height: 240, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(out);
  const { width, height } = await sharp(out).metadata();
  console.log(`${base}.webp ${width}x${height}`);
}
