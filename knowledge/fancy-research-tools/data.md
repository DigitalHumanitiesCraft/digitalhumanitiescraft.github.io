---
title: Data
project:
  name: fancy (research) tools & workflows
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: draft
language: en
created: 2026-10-01
updated: 2026-11-11
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
related: [project, specification, testing, method-images]
---

The facts the page states about its provider, tools, methods and images, with the source each fact is taken from. Every link the page gives answered HTTP 200 on 2026-11-10. Licence, maturity and description of every tool and method were checked against the default branch of its repository on the same day. The page text and the structured tool and method data stand in `src/i18n/fancy.ts`, and a change of a fact starts here and is then carried there.

## Provider

| Fact on the page | Source |
|---|---|
| Name, seat, telephone, e-mail | imprint of the site repository, `src/pages/imprint.astro`, published at https://dhcraft.org/imprint/ |
| Billing per hour, per working day or as a flat fee, starting from the client's budget, decision after every work step | operator statement, 2026-10-02, replacing the statement of 2026-10-01, wording of 2026-10-21 |
| Costs for the use of language models may be added depending on the scope, no licence fees for the software | operator statement, 2026-10-02, wording of 2026-10-21 |
| Applications and workflows built with coding agents, the applications mostly running statically in the browser without a server, other solutions possible | operator statement, 2026-10-21, refining the statement of 2026-10-02, extended to workflows on 2026-11-05 |
| The tools shown are built with the methods and workflows of the section `#methoden` | operator statement, 2026-11-05 |
| Empowerment through workshops and training as the main idea, development together from a first prototype to the finished tool, code and knowledge base stay with the client, support after handover on request | operator statement, 2026-10-21 |
| Training formats (workshops, intensive days) | excellence section of dhcraft.org, `src/i18n/excellence.ts` of the site repository, linked from the card Lernen |
| Privacy statement | the page's own behaviour (no cookies, no third-party request, see NFR-03 in [specification](specification.md#non-functional-requirements)), delivery by GitHub Pages, contact by e-mail and telephone |

Facts withdrawn from the page on 2026-10-21 with [ADR-017](specification.md#adr-017-page-slimmed-to-offer-examples-methods-and-contact) and with the block Wer wir sind the same day. They stay true and may return, the sources are unchanged.

| Fact no longer on the page | Source |
|---|---|
| Target groups by sector | `src/i18n/content.ts` of the site repository |
| Teaching at universities in Austria and Germany, role as technical partner in funded projects | operator's records in the vault (teaching portfolio data, Business/Horizon Europe Learnings, offers in Business/Angebote), checked 2026-10-02 |
| The effort lies mainly in understanding the project together with the client and making the resulting systems comprehensible | operator statement, 2026-10-02 |
| Frontier language models, commercial and open from any origin, never named by provider, used by coding agents and inside tools, model and access chosen per project | operator statement, 2026-10-02 |
| Long-term archiving of research data in the certified repository GAMS | offered through the framework agreement with the Department of Digital Humanities of the University of Graz, conditions undocumented, see [plan](plan.md#open-points) |

## Tools

The anchor is the fragment identifier on the page. The licence column names what the repository's licence file and README state, and the page shows it in the row of each tool.

| Tool | Anchor | Maturity on the page | Demo | Repository | Licence | Maturity source |
|---|---|---|---|---|---|---|
| coOCR/HTR | `#t-coocr` | Experiment | https://dhcraft.org/co-ocr-htr/ | https://github.com/DigitalHumanitiesCraft/co-ocr-htr | CC BY 4.0 for the whole repository, code included. Whether the code returns to MIT is open, see [plan](plan.md#open-points) | https://github.com/DigitalHumanitiesCraft/co-ocr-htr/blob/main/README.md, which calls the tool a research preview in beta. The page says Experiment by [ADR-016](specification.md#adr-016-uniform-links-no-ability-icons-research-mission-control-withdrawn) |
| teiCrafter | `#t-tei` | Experiment | https://dhcraft.org/teiCrafter/editor.html#example=szd, the deep link that opens the editor with its one public example. Without it the editor starts empty | https://github.com/DigitalHumanitiesCraft/teiCrafter | MIT for code, no licence declared for documentation | https://github.com/DigitalHumanitiesCraft/teiCrafter/blob/main/knowledge/INDEX.md and the README, which calls the tool a research preview. The page says Experiment by ADR-016 |
| CorrespExplorer | `#t-corresp` | Laufende Demo | https://dhcraft.org/CorrespExplorer/ | https://github.com/DigitalHumanitiesCraft/CorrespExplorer | MIT, docs CC BY 4.0 | https://github.com/DigitalHumanitiesCraft/CorrespExplorer/blob/main/README.md |
| SZD-HTR, named SZD OCR/HTR Pipeline on the page until 2026-11-10 | `#t-szd` | Experiment | https://chpollin.github.io/szd-htr-ocr-pipeline/ | https://github.com/chpollin/szd-htr-ocr-pipeline | MIT for code, documentation CC BY 4.0. The rights in the facsimiles and in the transcriptions derived from them remain with the Literaturarchiv Salzburg | https://github.com/chpollin/szd-htr-ocr-pipeline/blob/main/knowledge/INDEX.md, state from its README (experimental sub-project, four checking tiers recorded per object, tier 0 implemented end to end), checked on 2026-11-05 |
| Stefan-Zweig-Bibliographie (Klawiter-Rescue) | `#t-klawiter` | Bestand gesichert | https://chpollin.github.io/klawiter-rescue/ | https://github.com/chpollin/klawiter-rescue | MIT, documentation and data CC BY 4.0 | https://github.com/chpollin/klawiter-rescue/blob/main/knowledge/status.md |

The Stefan-Zweig-Bibliographie row also links the video https://youtu.be/KG35VGVctJw. Every tool row links Demo öffnen, Repository and Video where one exists. Tools and methods with the maturity Forschungsvorschau or Experiment carry the note that they are not finished. The page links the maturity source only through the repository, which holds the tool's knowledge base.

## Methods and frameworks

Each method card links its method page, its repository and one video, in this order and only where they exist. Every address answered HTTP 200 on 2026-11-10.

| Method | Anchor | Maturity on the page | Method page | Repository | Video | Maturity source |
|---|---|---|---|---|---|---|
| Promptotyping | `#m-pt` | Im Einsatz | https://dhcraft.org/Promptotyping/ | https://github.com/DigitalHumanitiesCraft/Promptotyping | https://youtu.be/8sUe4Jkh3uQ | the method page and repository. The second video https://youtu.be/hd_a-NBO_S4 and the article https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin left the card on 2026-11-10 and are reached from the method page |
| Grounded Vault | `#m-gv` | Im Einsatz | https://dhcraft.org/grounded-vault/ | https://github.com/DigitalHumanitiesCraft/grounded-vault | https://youtu.be/K1sZBOUSZ_0 | the project page, video and repository |
| Second Brain Vault | `#m-sbv` | Im Einsatz | https://chpollin.github.io/second-brain-vault/ | https://github.com/chpollin/second-brain-vault | none | the README of the repository, which describes a template whose structure its author uses as a personal research environment. The repository states no maturity word of its own. Text and documentation CC BY 4.0, code MIT |
| Agentic Edition Pipeline | `#m-aep` | Forschungsvorschau | none | https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline | https://youtu.be/krL-xMxTa_c | the README, research preview, version 0.10.0 |

The local clones of Promptotyping, Grounded Vault and Second Brain Vault held unpushed revisions of their method pages on 2026-11-10. The addresses above exist in public, and the figures the cards are derived from appear on those pages only after their repositories are pushed.

### Method figures

The cards show hand-written SVG figures in `src/components/fancy/MethodFigure.astro`, inline in the page so that they carry its fonts. Each is a simplified card version of the method's own main figure and shows its terms only. The method repositories were read and not changed.

| Card | Source figure, read on 2026-11-10 | What the card version keeps |
|---|---|---|
| Promptotyping | `assets/img/promptotyping-practice.svg` of the local clone `Promptotyping` | researchers who direct and validate, the four forms of work in the order of a first pass, the promptotype made of artefact, project knowledge and research data, knowledge curation |
| Grounded Vault | `docs/images/grounded-vault-provenance-chain.svg` of the local clone `grounded-vault` | the chain from Output to Sources, the three checks with who performs them, the status ladder |
| Second Brain Vault | `docs/images/second-brain-figure-de.svg` and `second-brain-figure.svg` of the local clone `second-brain-vault` | vault, agent session and project repository with their blocks, the three steps, reading and writing, the Repo Directory |
| Agentic Edition Pipeline | none exists. Drawn from the workflow table and the section on models and methods in the README of the repository, redrawn on 2026-11-10 after the operator found the first version pale and schematic | one row of six stations with an icon and one word each, the four the agent runs in blue and the two that rest with the editorial team in purple, the return of corrections as one arrow, the project knowledge in orange and the result, TEI XML and a static reading view, in green |

Language. Each language version of the page labels all four figures in its own language, by the operator's correction of 2026-11-11. The methods' own terms stay English on both versions: Preparation, Exploration, Distillation, Implementation, Promptotype and knowledge curation in Promptotyping, and in Grounded Vault the layers Output and Assertions, the three checks Validation, Machine review and Verification, whose naming is an open decision of the operator, and the status values grounded, validated and verified. The German figure of Grounded Vault takes Destillate, Markdown-Fassungen and Quellen from the method's own German page, the German figure of Second Brain Vault says Repo-Verzeichnis.

The arrow knowledge curation of the Promptotyping card ends at the lower edge of the frame of the four forms of work. In figure 1 of the manuscript repository (`figures/figure-1-promptotyping-practice.svg`, read on 2026-11-11) the arrow ends at Distillation, and the description of that figure says that what checking and use reveal returns to Distillation. Whether the card follows it is with the operator.

## Images

All published images lie in `public/fancy-research-tools/img/` of the site repository, the screenshots and method images as WebP in 1440 and 720 pixel width.

| File | Shows | Rights basis |
|---|---|---|
| `coocr-htr-*.webp` | coOCR/HTR with a printed page of 1617 from the bundled sample | own tool, print of 1617. The tool's repository records neither the source of the scan nor its terms of use, see [plan](plan.md#open-points) |
| `teicrafter-*.webp` | teiCrafter with the one example its public editor offers, a letter by Stefan Zweig of 1901 from Stefan Zweig Digital, third page, reading text beside the facsimile | own tool. The example lies in the tool's repository under CC BY 4.0 per its notice file, the facsimile is loaded from GAMS, and the SZD pipeline states that rights in facsimiles and transcriptions remain with the Literaturarchiv Salzburg, see [plan](plan.md#open-points) |
| `correspexplorer-*.webp` | CorrespExplorer map of the reference dataset, the CMIF export of the Hugo Schuchardt Archiv with more than eleven thousand letters, bundled by the tool as its extended example | own tool. Data CC BY 4.0 per `knowledge/data.md` of the tool's repository, base map from OpenFreeMap with OpenStreetMap data, whose attribution the screenshot shows |
| `szd-htr-*.webp` | SZD OCR/HTR Pipeline viewer with object `o:szd.1641`, a handwritten letter by Stefan Zweig of June 1939, facsimile beside transcription with the note Geprüft | own tool. The facsimile is shown on the operator's request of 2026-11-10. Its rights and those of the transcription lie with the Literaturarchiv Salzburg, and no repository records the archive's consent to this use, see [plan](plan.md#open-points). The view names the person who checked the object and the transcription model, as the public viewer does |
| `klawiter-*.webp` | start page of the Stefan Zweig Bibliography with search, the overview of how the data is built and the sections of the bibliography | own tool, data CC BY 4.0 |
| none | the generated method infographics `method-*.webp` left `public/` on 2026-11-10, replaced by the [method figures](#method-figures). Their prompt logs stay in `image-prompts/` | not published |
| `og.jpg`, `og-en.jpg` | hero of the German and the English page for link previews, 1200 by 630 | rendered by `scripts/fancy-research-tools/shoot-og.cjs` from the site preview on 2026-11-05 |

All five tool screenshots were retaken on 2026-11-10, those of teiCrafter, CorrespExplorer and the SZD OCR/HTR Pipeline a second time the same day in a smaller window and a more telling state, after the operator found the first ones weak. Tool screenshots are taken by `scripts/fancy-research-tools/shoot-tools.cjs` at double pixel density from the live demos, each recipe choosing a state of the real tool without altering its interface. The coOCR/HTR link points to the demo root and never to individual samples. The logo and favicon of the page belong to the site.

## Advert video

The page carries no advert video since 2026-11-11, when the operator had it removed entirely ([ADR-021](specification.md#adr-021-advert-video-removed-from-the-page)). The video, its poster and its captions left `public/fancy-research-tools/video/` with it. Its production sources stay in the local repository `dhcraft-promo` (folder `fancy-research-tools/`, knowledge in its `knowledge/advert-videos.md`), and the upload on YouTube is the operator's.

| Fact | Source |
|---|---|
| 88 seconds, sung in English, label "AI-generated music, code-rendered visuals" on every frame | `dhcraft-promo/fancy-research-tools/timeline.js` and `making.txt` |
| Every claim on screen comes from the English page text, the code and the knowledge base stay with the client, call to action Get in touch | `src/i18n/fancy.ts` |
| Captions hold the sung lyrics at the measured word onsets | `dhcraft-promo/fancy-research-tools/captions.en.vtt` |

## Candidates kept off the page

| Candidate | Reason |
|---|---|
| Date extraction and timeline (`chpollin/vizerektor-zeitstrahl`) | internal university training material, no licence file |
| `vetmed-berichtswesen` | client reporting material, no GitHub Pages site |
| M³GIM | open rights question recorded in the vault |
| viewCrafter | ended on 2026-09-29, repository private |
| zbz-ocr-tei | same task as coOCR/HTR and the Agentic Edition Pipeline |
| Wissensbilanz-Dashboard, Kulturpool-Demo, Objekt-Bestimmung | shown until 2026-10-02, removed on the operator's decision. The Kulturpool demo of the Volkskundemuseum is not added back, operator decision of 2026-10-21 |
| Notker | belongs to a client project, excluded until the project consents, operator decision of 2026-10-21 |

The page shows no example whose content is licensed for non-commercial use only and no example from a client project without the consent of the project behind it, see [ADR-017](specification.md#adr-017-page-slimmed-to-offer-examples-methods-and-contact).
