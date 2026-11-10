---
title: Data
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
| teiCrafter | `#t-tei` | Experiment | https://dhcraft.org/teiCrafter/editor.html | https://github.com/DigitalHumanitiesCraft/teiCrafter | MIT for code, no licence declared for documentation | https://github.com/DigitalHumanitiesCraft/teiCrafter/blob/main/knowledge/INDEX.md and the README, which calls the tool a research preview. The page says Experiment by ADR-016 |
| CorrespExplorer | `#t-corresp` | Laufende Demo | https://dhcraft.org/CorrespExplorer/ | https://github.com/DigitalHumanitiesCraft/CorrespExplorer | MIT, docs CC BY 4.0 | https://github.com/DigitalHumanitiesCraft/CorrespExplorer/blob/main/README.md |
| SZD OCR/HTR Pipeline | `#t-szd` | Experiment | https://chpollin.github.io/szd-htr-ocr-pipeline/ | https://github.com/chpollin/szd-htr-ocr-pipeline | MIT for code, documentation CC BY 4.0. The rights in the facsimiles and in the transcriptions derived from them remain with the Literaturarchiv Salzburg | https://github.com/chpollin/szd-htr-ocr-pipeline/blob/main/knowledge/INDEX.md, state from its README (experimental sub-project, four checking tiers recorded per object, tier 0 implemented end to end), checked on 2026-11-05 |
| Stefan-Zweig-Bibliographie (Klawiter-Rescue) | `#t-klawiter` | Bestand gesichert | https://chpollin.github.io/klawiter-rescue/ | https://github.com/chpollin/klawiter-rescue | MIT, documentation and data CC BY 4.0 | https://github.com/chpollin/klawiter-rescue/blob/main/knowledge/status.md |

The Stefan-Zweig-Bibliographie row also links the video https://youtu.be/KG35VGVctJw. The teiCrafter button reads Demo ansehen, because teiCrafter is offered as a template to fork. Tools and methods with the maturity Forschungsvorschau or Experiment carry the note that they are not finished. The page links the maturity source only through the repository, which holds the tool's knowledge base.

## Methods and frameworks

| Method | Anchor | Maturity on the page | Page | Repository | Maturity source |
|---|---|---|---|---|---|
| Promptotyping | `#m-pt` | Im Einsatz | https://dhcraft.org/Promptotyping/, the videos Teil 1 https://youtu.be/8sUe4Jkh3uQ and Teil 2 https://youtu.be/hd_a-NBO_S4 and the article https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin, checked on 2026-10-21 | https://github.com/DigitalHumanitiesCraft/Promptotyping | the method page, article and repository |
| Grounded Vault | `#m-gv` | Im Einsatz | https://dhcraft.org/grounded-vault/ and the video https://youtu.be/K1sZBOUSZ_0 | https://github.com/DigitalHumanitiesCraft/grounded-vault | the project page, video and repository |
| Agentic Edition Pipeline | `#m-aep` | Forschungsvorschau | video https://youtu.be/krL-xMxTa_c | https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline | the video and repository |

## Images

All published images lie in `public/fancy-research-tools/img/` of the site repository, the screenshots and method images as WebP in 1440 and 720 pixel width.

| File | Shows | Rights basis |
|---|---|---|
| `coocr-htr-*.webp` | coOCR/HTR with a printed page of 1617 from the bundled sample | own tool, print of 1617. The tool's repository records neither the source of the scan nor its terms of use, see [plan](plan.md#open-points) |
| `teicrafter-*.webp` | teiCrafter with a synthetic letter from `docs/data/editor/zbz-hersch-synthetic.xml` of a teiCrafter clone, dropped into the editor by the screenshot recipe. The public demo offers one other example in its menu | own tool, synthetic text |
| `correspexplorer-*.webp` | CorrespExplorer timeline of the synthetic demo dataset | own tool, synthetic data |
| `szd-htr-*.webp` | SZD OCR/HTR Pipeline statistics view with checking tiers and review reasons | own tool, no facsimile shown, because the image rights lie with the archive |
| `klawiter-*.webp` | start page of the Stefan Zweig Bibliography with search, the overview of how the data is built and the sections of the bibliography | own tool, data CC BY 4.0 |
| `method-*.webp` | infographics of Promptotyping, Grounded Vault and the Agentic Edition Pipeline, series infographic-v3. The Research Mission Control images left the repository's `public/` on 2026-10-21 | generated with gpt-image through Codex on 2026-10-02, exact model version not reported, prompt logs in `image-prompts/method-*-infographic-v3.txt` beside this document, see [method images](method-images.md) |
| `video/fancy-research-tools-workflows.mp4`, its poster and its English captions | the advert video of the page in 1280 by 720, see [Advert video](#advert-video) | picture rendered from code in the repository `dhcraft-promo`, music generated with ACE-Step 1.5, fonts under the SIL Open Font License, logo from the brand assets |
| `og.jpg`, `og-en.jpg` | hero of the German and the English page for link previews, 1200 by 630 | rendered by `scripts/fancy-research-tools/shoot-og.cjs` from the site preview on 2026-11-05 |

All five tool screenshots were retaken on 2026-11-10. Tool screenshots are taken by `scripts/fancy-research-tools/shoot-tools.cjs` at double pixel density from the live demos, each recipe choosing a state of the real tool without altering its interface. The coOCR/HTR link points to the demo root and never to individual samples. The logo and favicon of the page belong to the site.

## Advert video

The hero carries one advert video, produced in the local repository `dhcraft-promo` (folder `fancy-research-tools/`, knowledge in its `knowledge/advert-videos.md`). `fancyAdvert` in `src/i18n/fancy.ts` holds its paths and the address of the upload on YouTube. The built page shows the video once that address is entered, the development server always. The file is served by the site, so playing it makes no third-party request, and the link to YouTube is an ordinary link.

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
