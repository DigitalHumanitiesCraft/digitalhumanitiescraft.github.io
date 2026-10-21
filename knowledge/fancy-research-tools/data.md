---
title: Data
project:
  name: fancy (research) tools!
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: draft
language: en
created: 2026-10-01
updated: 2026-10-21
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

The facts the page states about its provider, tools, methods and images, with the source each fact is taken from. Every link in the tables answered HTTP 200 on the check date given. The page text and the structured tool and method data stand in `src/i18n/fancy.ts`, and a change of a fact starts here and is then carried there.

## Provider

| Fact on the page | Source |
|---|---|
| Name, seat, telephone, e-mail | imprint of the site repository, `src/pages/imprint.astro`, published at https://dhcraft.org/imprint/ |
| Target groups | `src/i18n/content.ts` of the site repository |
| Teaching at universities in Austria and Germany, role as technical partner in funded projects | operator's records in the vault (teaching portfolio data, Business/Horizon Europe Learnings, offers in Business/Angebote), checked 2026-10-02 |
| Billing per hour, per working day or as a flat fee, starting from the client's budget, decision after every work step | operator statement, 2026-10-02, replacing the statement of 2026-10-01, wording of 2026-10-21 |
| Costs for the use of language models may be added depending on the scope, no licence fees for the software | operator statement, 2026-10-02, wording of 2026-10-21 |
| Tools built with coding agents, mostly standalone static applications that run in the browser without a server, other solutions possible | operator statement, 2026-10-21, refining the statement of 2026-10-02 |
| Empowerment through workshops and training as the main idea, code and knowledge base stay with the client, support after handover on request | operator statement, 2026-10-21 |
| Training formats (workshops, intensive days) | excellence section of dhcraft.org, `src/i18n/excellence.ts` of the site repository, linked from the card Lernen |

Facts withdrawn from the page on 2026-10-21 with [ADR-017](specification.md#adr-017-page-slimmed-to-offer-examples-methods-and-contact). They stay true and may return, the sources are unchanged.

| Fact no longer on the page | Source |
|---|---|
| The effort lies mainly in understanding the project together with the client and making the resulting systems comprehensible | operator statement, 2026-10-02 |
| Frontier language models, commercial and open from any origin, never named by provider, used by coding agents and inside tools, model and access chosen per project | operator statement, 2026-10-02 |
| Long-term archiving of research data in the certified repository GAMS | offered through the framework agreement with the Department of Digital Humanities of the University of Graz, conditions undocumented, see [plan](plan.md#open-points) |
| Privacy statement | the page's own behaviour (no cookies, no third-party request, see NFR-03 in [specification](specification.md#non-functional-requirements)), delivery by GitHub Pages, contact by e-mail and telephone |

## Tools

The anchor is the fragment identifier on the page. Links checked on 2026-10-01 unless a later date is given.

| Tool | Anchor | Maturity on the page | Demo | Repository | Licence | Maturity source |
|---|---|---|---|---|---|---|
| coOCR/HTR | `#t-coocr` | Experiment | https://dhcraft.org/co-ocr-htr/ | https://github.com/DigitalHumanitiesCraft/co-ocr-htr | CC BY 4.0 | https://dhcraft.org/co-ocr-htr/knowledge.html |
| teiCrafter | `#t-tei` | Experiment | https://dhcraft.org/teiCrafter/editor.html | https://github.com/DigitalHumanitiesCraft/teiCrafter | MIT | https://github.com/DigitalHumanitiesCraft/teiCrafter/blob/main/knowledge/INDEX.md |
| CorrespExplorer | `#t-corresp` | Laufende Demo | https://dhcraft.org/CorrespExplorer/ | https://github.com/DigitalHumanitiesCraft/CorrespExplorer | MIT, docs CC BY 4.0 | https://dhcraft.org/CorrespExplorer/vault.html |
| SZD-HTR | `#t-szd` | Experiment | https://chpollin.github.io/szd-htr-ocr-pipeline/ | https://github.com/chpollin/szd-htr-ocr-pipeline | MIT, facsimiles with the Literaturarchiv Salzburg via GAMS | https://github.com/chpollin/szd-htr-ocr-pipeline/blob/main/knowledge/index.md, state from its README (experimental sub-project, checking tiers 1 and 2 populated, tier 0 empty), checked on 2026-10-02 |
| Stefan-Zweig-Bibliographie (Klawiter-Rescue) | `#t-klawiter` | Bestand gesichert | https://chpollin.github.io/klawiter-rescue/ | https://github.com/chpollin/klawiter-rescue | MIT, data CC BY 4.0 | https://github.com/chpollin/klawiter-rescue/blob/main/knowledge/status.md, checked on 2026-10-02 |

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
| `coocr-htr-*.webp` | coOCR/HTR with a printed page of 1617 from the bundled sample | own tool, historical print |
| `teicrafter-*.webp` | teiCrafter with the bundled synthetic letter | own tool, synthetic text |
| `correspexplorer-*.webp` | CorrespExplorer timeline of the synthetic demo dataset | own tool, synthetic data |
| `szd-htr-*.webp` | SZD-HTR statistics view with checking tiers and review reasons | own tool, no facsimile shown, because the image rights lie with the archive |
| `klawiter-*.webp` | start page of the Stefan Zweig Bibliography | own tool, data CC BY 4.0 |
| `method-*.webp` | infographics of Promptotyping, Grounded Vault and the Agentic Edition Pipeline, series infographic-v3. The Research Mission Control images left the repository's `public/` on 2026-10-21 | generated with gpt-image through Codex on 2026-10-02, exact model version not reported, prompt logs in `image-prompts/method-*-infographic-v3.txt` beside this document, see [method images](method-images.md) |
| `og.jpg`, `og-en.jpg` | hero of the German and the English page for link previews, 1200 by 630 | rendered by `scripts/fancy-research-tools/shoot-og.cjs` from the site preview on 2026-10-21 |

Tool screenshots are taken by `scripts/fancy-research-tools/shoot-tools.cjs` at double pixel density from the live demos, each recipe choosing a state of the real tool without altering its interface. The coOCR/HTR link points to the demo root and never to individual samples. The logo and favicon of the page belong to the site.

## Candidates kept off the page

| Candidate | Reason |
|---|---|
| Date extraction and timeline (`chpollin/vizerektor-zeitstrahl`) | internal university training material, no licence file |
| `vetmed-berichtswesen` | client reporting material, no GitHub Pages site |
| M³GIM | open rights question recorded in the vault |
| viewCrafter | ended on 2026-09-29, repository private |
| zbz-ocr-tei | same task as coOCR/HTR and the Agentic Edition Pipeline |
| Wissensbilanz-Dashboard, Kulturpool-Demo, Objekt-Bestimmung | shown until 2026-10-02, removed on the operator's decision |
