// Compares the UFL workshop deck with the structure of the KCAE blog post, either its outline or the
// finished post. Every section heading that carries a slide marker must match the deck title of its
// first slide, every deck slide must be accounted for exactly once, and the slides must appear in deck
// order. Sections without a marker are the post's own (opening, close) and are only listed.
//
// Marker syntax, on the line after the heading (HTML comments, so they do not render in the post):
//   <!-- slides: <slideId> [<slideId> ...] -->            heading equals the deck title of the first slide
//   <!-- slides: <slideId> ...; renamed -->               deliberate new heading, reported but accepted
//   <!-- omitted: <slideId> ... -->                       slides deliberately left out of the post
//
//   node scripts/kcae-blogpost/check-structure.mjs [file.md ...]
// Defaults to knowledge/kcae-blogpost/outline.md. Exit code 1 on any error.
import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
if (!files.length) files.push("knowledge/kcae-blogpost/outline.md");
const deck = JSON.parse(readFileSync("knowledge/kcae-blogpost/deck-slides.json", "utf8")).slides;
const byId = new Map(deck.map((s) => [s.id, s]));

// Typographic variants on the slides (curly quotes, spacing before punctuation, soft breaks) are not
// differences of title.
const norm = (s) =>
  s.normalize("NFC").toLowerCase().replace(/[“”„"‘’']/g, "").replace(/\s+([!?.,:])/g, "$1").replace(/\s+/g, " ").trim();

for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  const errors = [];
  const info = [];
  const seen = new Map();
  let lastN = 0;
  let inFence = false;

  const account = (id, where) => {
    const slide = byId.get(id);
    if (!slide) return errors.push(`${where}: unknown slide ID ${id}`), null;
    if (seen.has(id)) errors.push(`${where}: slide ${slide.n} "${slide.title}" already used at ${seen.get(id)}`);
    seen.set(id, where);
    return slide;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;

    const omitted = line.match(/^<!--\s*omitted:\s*(.+?)\s*-->/);
    if (omitted) {
      for (const id of omitted[1].split(/\s+/)) account(id, `${file}:${i + 1} (omitted)`);
      continue;
    }

    const h = line.match(/^(#{2,4})\s+(.+?)\s*$/);
    if (!h) continue;
    const heading = h[2];
    let j = i + 1;
    while (j < lines.length && !lines[j].trim()) j++;
    const m = lines[j]?.match(/^<!--\s*slides:\s*([^;]+?)\s*(;\s*renamed\s*)?-->/);
    const where = `${file}:${i + 1}`;
    if (!m) {
      info.push(`own section: ${h[1]} ${heading}`);
      continue;
    }
    const slides = m[1].split(/\s+/).map((id) => account(id, where)).filter(Boolean);
    if (!slides.length) continue;
    for (const s of slides) {
      if (s.n <= lastN) errors.push(`${where}: slide ${s.n} "${s.title}" out of deck order (after slide ${lastN})`);
      lastN = Math.max(lastN, s.n);
    }
    const first = slides[0];
    if (norm(heading) !== norm(first.title)) {
      if (m[2]) info.push(`renamed: slide ${first.n} "${first.title}" -> "${heading}"`);
      else errors.push(`${where}: heading "${heading}" differs from slide ${first.n} title "${first.title}" (mark it "; renamed" if deliberate)`);
    }
    const drafts = slides.filter((s) => s.status === "draft").map((s) => s.n);
    if (drafts.length) info.push(`draft slides under "${heading}": ${drafts.join(", ")}`);
  }

  for (const s of deck) if (!seen.has(s.id)) errors.push(`missing: slide ${s.n} "${s.title}" (${s.id})`);

  console.log(`# ${file}`);
  for (const line of info) console.log(`  ${line}`);
  for (const line of errors) console.log(`  ERROR ${line}`);
  console.log(errors.length ? `  ${errors.length} error(s)` : "  structure matches the deck");
  if (errors.length) process.exitCode = 1;
}
