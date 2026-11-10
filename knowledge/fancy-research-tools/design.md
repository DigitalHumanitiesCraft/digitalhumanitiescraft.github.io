---
title: Design
project:
  name: fancy (research) tools & workflows
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: draft
language: en
created: 2026-10-01
updated: 2026-11-10
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Design
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/design
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-design
related: [specification, project, method-images]
---

How the page looks and behaves as built in the dhcraft.org site, where `src/components/fancy/FancyPage.astro` renders it with scoped styles inside the site's layout, navigation and footer.

## Design stance

The page speaks to academic readers and to clients outside academia. It argues with examples to try, maturity chips and repository links, and keeps marketing gestures to the name and its purple ampersand.

## Design system

The page uses the tokens of the site and adds local ones only where the site has none.

- Site tokens from `src/styles/global.css`: paper `--paper` `#fdfcf8`, ink navy `--ink` `#1e2749`, purple `--purple` `#8a4fa3` as the one accent for links, focus, the hover of buttons and the accent line, and the watercolour palette of the logo, `--pink`, `--green`, `--lime`, `--orange`, `--gold` and `--blue` with their deep variants. Fonts are `--font-display` (Sora) for headings and `--font-body` (Instrument Sans) for running text, bundled by the site.
- Local tokens on `main.fancy`: rule and muted text colours, a white raised surface, the purple hero wash, radii, a reading measure, a shadow, a fluid type scale from `--step--1` to `--step-3` and a fluid spacing scale from `--space-xs` to `--space-section`.
- Shapes: pill buttons and chips, cards with a thin border, and the hexagon of the logo as the icon shape, navy for the offer icons.
- Grounds: the sections `#angebot` and `#methoden` stand on white with paper cards, `#werkzeuge` and `#kontakt` on paper, so that the grounds alternate.
- Hero: a purple radial wash and an extra-bold title "fancy (research) tools & workflows" with a purple ampersand, followed by the purple accent line "Agentic Engineering für alle, die mit Wissen arbeiten." as its own paragraph outside the h1, so that the heading reads as the name alone, and by the lede. The hero has no button row since 2026-11-10, the contact button stands in the site navigation. The hero takes the height of its text. From 64rem width the right half holds the advert video where the page shows one, with rounded corners, the thin rule and the shadow of the tool screenshots, and a one-line caption in muted text below it. On narrower screens the video follows the lede. The video has no caption, because every frame carries its label, and a link to YouTube below it once the address is entered ([ADR-019](specification.md#adr-019-advert-video-in-the-hero-and-licence-in-the-tool-rows)).
- Theme: light only, because dhcraft.org has no dark theme.
- Brand: the logo, wordmark and favicon of the site. The page carries no logo of its own.

## Interaction patterns

1. User task: understand what fancy (research) tools & workflows are, see how a team learns to build them, try the examples and get in touch by conversation or by sending material.
2. First decision: title, accent line and lede beside the video. These are the three levels above the first entry.
3. Depth: the offer cards Lernen, Gemeinsam entwickeln and Im Auftrag entwickeln with a hexagon icon each, then the plain block Kosten, then the examples and the methods with their maturity, the methods opened by one sentence that ties them to the examples, then the contact. The section order is listed in [specification](specification.md#scope-of-the-page).
4. Every recurring entry, tool row and method card alike, has three levels of text. The first is the title with the [maturity chip](INDEX.md#maturity-chip) beside it. The second is one paragraph, which ends with the not-finished note for a Forschungsvorschau or Experiment. The third is one row of text links in one form and a fixed order, for a tool Demo öffnen, Repository and Video followed by the licence as muted text, for a method Methodenseite, Repository and Video. A link that does not exist is left out. Entries carry no button and no icon.
5. Method cards show a figure above these levels, a simplified card version of the method's own main figure as inline SVG with the fonts of the page and the four hues of the DHCraft mark, green, blue, orange and purple, on white. The figures are not linked, the method page is the first link of the card.
6. Maturity chips follow the hues of the mark. Im Einsatz and Bestand gesichert are green, Laufende Demo blue, Experiment and Forschungsvorschau orange. Purple stays with links and actions. The word carries the meaning, the colour repeats it.
8. Contact: two cards with even padding, Problem oder Idee besprechen with the buttons E-Mail schreiben and telephone, Material schicken with the button Material senden. The e-mail address stands once below both. The block Wer wir sind left the page on 2026-10-21, the home page carries the team.
9. Layout: each tool row places screenshot and text side by side once the row is wider than 52rem, alternating sides, and stacks them below. Offers run in one column below 56rem and in three above, the four methods in one column below 48rem and in two above, so that no grid leaves a single card in a second row. The site navigation folds into a menu button below 1240 pixels, where the German header with the pill fancy (research) tools & workflows no longer fits in one line. In the open menu on phones the pill may wrap.
10. Method figures are not linked. Their accessible name describes terms and flow in words.
11. Motion: buttons lift slightly on hover only when the user allows motion. The video never starts by itself and loads nothing before it is played.
12. Language: the site navigation switches between the German and the English page.

## Operator feedback

Kept verbatim as requirements and read before every rebuild.

- 2026-11-10, on the hero video: "das Video finde ich sehr gut."
- 2026-11-10, on the published page, as passed on by the coordinating session: the CorrespExplorer screenshot with the small demo dataset and the bar chart is too weak, he wants a clearly more impressive one with a really good dataset and visualisation. The SZD card shows the statistics page, small and pale, and should show what makes the tool, facsimile and transcription side by side with the checking status, cropped so that the writing is readable on the card. The new figure of the Agentic Edition Pipeline is pale and schematic and does not show what is special about the pipeline. It should be one clear way from left to right without a break into two rows, stations with a small icon and one word, a visible difference between what the agent does and where people check, the return of the correction as one arrow and the result recognisable as a result.
- 2026-11-10, on the section Methoden und Frameworks, as passed on by the coordinating session: he sees too many levels there again. A card held image, the line "Generiert mit gpt-image", title, description, a status mark, a main button and below it a row of two to four text links. Every entry is to have at most three levels and its references one form, on the whole page, the examples included. The generated images are to give way to the main figures programmed that day, Second Brain Vault is to join as a method card, and the Agentic Edition Pipeline is to get a new hand-written figure in the same style.

## Generated images

No generated image is on the page since 2026-11-10 ([ADR-020](specification.md#adr-020-three-levels-per-entry-and-code-figures-for-four-methods)). Until then generated images appeared only on the method cards, under [ADR-012](specification.md#adr-012-generated-illustrations-for-the-method-cards). Tool rows show real screenshots, or a schematic diagram where a demo's image licence forbids a screenshot ([ADR-004](specification.md#adr-004-schematic-diagrams-for-third-party-images)). Every generated image is labelled in its caption as generated with the model named, its prompt log is committed under `knowledge/fancy-research-tools/image-prompts/`, and its row in [data](data.md#images) names model and date. Style, prompts and delivery follow [method images](method-images.md).

## Design history

- Until 2026-10-02 the standalone page existed in five looks, Prisma as main variant and DHCraft, Edition, Labor and Raster as themes. The operator chose the DHCraft look ([ADR-011](specification.md#adr-011-one-design-after-dhcraftorg)). Commit [54a6fff](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/54a6fff) keeps all variants, and the other four looks are kept as design documents in the operator's vault.
- A hand-drawn SVG prism splitting a ray into the watercolour palette sat in the hero until the operator removed it on 2026-10-02 ([ADR-010](specification.md#adr-010-hand-drawn-motif-instead-of-generated-images)).
- The standalone stylesheet with cascade layers and OKLCH tokens was ported into the scoped styles of the site component on the move into the site ([ADR-014](specification.md#adr-014-the-page-moves-into-the-dhcraftorg-site)). Its last published state is commit [8648a35](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/8648a35).
- A section `#qualitaet` stood after the methods until 2026-10-21. Until 2026-10-02 it was titled Qualität and made quality claims, three of which a check of the tool repositories found too strong. It then became Grundsätze, six expandable principles on project knowledge and method choice, the frame for coding agents, declared maturity, open formats, expert control of model output and handover with archiving in GAMS. The section, the process steps, the fit lists and the block on models and data left the page with [ADR-017](specification.md#adr-017-page-slimmed-to-offer-examples-methods-and-contact). Their last wording stands in `src/i18n/fancy.ts` at commit 38bb309 of the site repository.
- Until 2026-11-05 the hero title read "fancy (research) tools!" with a purple exclamation mark, and the site navigation folded below 1120 pixels with 26 pixels between its links ([ADR-018](specification.md#adr-018-page-renamed-to-tools-and-workflows)).

## Binding to the action layer

The section on this page in `CLAUDE.md` at the root of the site repository applies this document through these rules.

- No eyebrows, no decorative counters, no standing explanatory prose, also where a model such as dhcraft.org uses them ([ADR-006](specification.md#adr-006-house-rules-over-the-dhcraftorg-pattern)). The one sentence that opens `#methoden` is the single exception ([ADR-018](specification.md#adr-018-page-renamed-to-tools-and-workflows)).
- Colours come from site tokens or the local tokens on `main.fancy`. A new token goes to the page root unless the site needs it too.
- No runtime CDN, no analytics and no third-party request in the page content.
