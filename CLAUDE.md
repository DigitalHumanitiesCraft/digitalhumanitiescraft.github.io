# Project instructions for dhcraft.org

The site of Digital Humanities Craft OG, built with Astro, see `README.md`. Commit messages in English, imperative mood, staging specific paths. The blog's editorial journal is `knowledge/journal.md`.

## fancy (research) tools!

The subpage at `/fancy-research-tools/` and `/en/fancy-research-tools/` is the agentic engineering offer. Its knowledge base, image prompt logs and scripts live in this repository since 2026-10-03, see ADR-015 in `knowledge/fancy-research-tools/specification.md`. Document names below refer to `knowledge/fancy-research-tools/`.

### Knowledge base

Read `knowledge/fancy-research-tools/INDEX.md` first, then its `handoff.md`, then the document the task needs. INDEX lists the storage zones and the reading path per task.

### Where to edit what

- Copy, links, maturity and ability icons of tools and methods: `src/i18n/fancy.ts`, after the facts in `data.md`. German and English stand in the same file and change together.
- Look and markup: `src/components/fancy/FancyPage.astro`, after `design.md`.
- Privacy statement: `privacy` in `src/i18n/fancy.ts`, rendered by `src/components/fancy/FancyPrivacy.astro`.
- Screenshots, share image and encoded method images: the scripts in `scripts/fancy-research-tools/`, which write into `public/fancy-research-tools/img/`.
- Method image prompts: `knowledge/fancy-research-tools/image-prompts/`, after `method-images.md`. Commit the `.txt` prompt logs, never the PNG files.
- Decisions, facts and findings: the responsible document in `knowledge/fancy-research-tools/`, and one journal entry per coherent transition.

### Copy rules

The content rules CR-01 to CR-07 in `specification.md` bind every text on the page. In short:

- Never claim that the provider reviews client code. The provider designs the context in which coding agents work, and productive use needs a professional revision and an independent review of the code.
- Present Promptotyping as one context engineering method among several, chosen per project.
- Back every claim by all tools shown, or phrase it as the working method for client projects.
- Call language models frontier language models and never name them by provider.
- State billing per hour, per working day or as a flat fee, starting from the client's budget, and show no price.
- Never invent prices, promises, conditions or client names.
- Write in a formal scholarly register, with traceability, provenance and reuse as terms, no dash or colon as connector, no trailing negation, no ornamental triad, no marketing adjectives.
- Take maturity from the tool's own knowledge base, record source and check date in `data.md`, and verify every link answers HTTP 200.
- Tool rows show real screenshots from `scripts/fancy-research-tools/shoot-tools.cjs`. Generated images appear only on the method cards and follow `design.md#generated-images`.
- Knowledge documents name third parties by role and institution, never by personal name.

### Design rules

`design.md` is the source of values.

- No eyebrows, no decorative counters, no standing explanatory prose, also where dhcraft.org uses kicker labels.
- Colours come from site tokens or the local tokens on `main.fancy`, components consume `var()` only.
- No runtime CDN, no analytics, no third-party request in the page content.

### Checks before a push

Run `npm run build` and `npx tsc --noEmit`, start `npx astro preview --port 4399`, then run `scripts/fancy-research-tools/check.cjs` with `LINKS=1`. It must end with `all checks passed`. After a change of a script there, run `for f in scripts/fancy-research-tools/*.cjs; do node --check "$f" || exit 1; done`, because `node --check` reads only its first file. Commands and environment variables are in `testing.md`.

### Publication

A push to main deploys dhcraft.org through GitHub Actions and needs the operator's authorisation for the change at hand. The earlier standalone page remains in the history of the former repository DigitalHumanitiesCraft/fancy-research-tools, the last published state at commit 8648a35, the design variants at commit 54a6fff. Do not restore it.
