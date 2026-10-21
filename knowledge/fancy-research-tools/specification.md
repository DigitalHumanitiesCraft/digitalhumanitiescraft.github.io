---
title: Specification
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
  name: Vorlage Specification
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/specification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-specification
related: [project, data, design, testing]
---

What the page must do, which rules its copy follows and which decisions hold. Requirements, content rules and stories change with the offer. Decisions change rarely, carry their reasons and stay as history when a later decision replaces them.

## Requirements

### Functional requirements

- FR-01: The first screen says what fancy (research) tools are and leads to a conversation. Acceptance: hero with title, the line "Agentic Engineering für alle, die mit Wissen arbeiten.", a lede that names tools built with coding agents, mostly static applications in the browser without a server, and workshops and training as the way a team learns to develop them further, and the buttons "Ins Gespräch kommen" and "Unser Angebot", visible without scrolling at 1440 by 900.
- FR-02: Every tool and method shows its function, maturity and repository. Acceptance: each entry carries a [maturity chip](INDEX.md#maturity-chip), each Forschungsvorschau or Experiment the not-finished note, each entry with code a [repository link](INDEX.md#repository-link), and every external link answers HTTP 200 in the link check of [testing](testing.md).
- FR-03: A visitor can get in touch in two ways. Acceptance: a conversation path "Problem oder Idee besprechen" with prefilled e-mail and telephone and a material path "Material schicken" with a prefilled e-mail, both in the section `#kontakt`, the e-mail address shown once below both.
- FR-04: Every section, offer, tool and method is addressable. Acceptance: unique fragment identifiers, the sections `#angebot`, `#werkzeuge`, `#methoden` and `#kontakt`, the offer blocks `#lernen`, `#gemeinsam`, `#bauen` and `#kosten`, each tool and each method by the anchor listed in [data](data.md#tools). `#kosten` stays stable, because the contact text of the home page links it.
- FR-05: Ways of working and billing are stated. Acceptance: the section `#angebot` names learning, developing together and commissioned development, with learning first, and the block `#kosten` states billing after [CR-05](#content-rules) and that model use may add costs.
- FR-06: Tool and method data are kept once for both languages. Acceptance: links, maturity and image names of every tool and method stand once in `src/i18n/fancy.ts` of the site repository, and only the texts differ per language.
- FR-08: A shared link shows title, description and image. Acceptance: Open Graph metadata with a 1200 by 630 image and its alt text, and a canonical link.
- FR-09: The page exists in German and English. Acceptance: `/fancy-research-tools/` and `/en/fancy-research-tools/` link each other through `hreflang` alternates and the language switch of the site navigation, and the former English addresses `/fancy-research-tools/en/` and `/fancy-research-tools/en/privacy/` redirect to the current ones.
- FR-10: A privacy statement is reachable from every page of the offer. Acceptance: the footer of the page and of the privacy pages links `/fancy-research-tools/datenschutz/` or `/en/fancy-research-tools/privacy/`, and the English statement says that the German one is binding.

### Non-functional requirements

- NFR-01: Accessibility at WCAG 2.2 level AA. Measure: axe reports no violation at 1440 and 320 pixels on the page and the privacy statement in both languages, and every keyboard stop shows a focus outline and stays visible.
- NFR-02: Reflow without horizontal scrolling. Measure: no document overflow at 320 pixels.
- NFR-03: The page content makes no third-party request and needs no script. Measure: every `src` and `href` of stylesheets, scripts, fonts and images on the page and the privacy statement in both languages points to dhcraft.org. The site navigation brings its own script for the menu button, which the decision [ADR-014](#adr-014-the-page-moves-into-the-dhcraftorg-site) accepts.
- NFR-04: The copy follows the content rules. Measure: both languages hold against [CR-01 to CR-07](#content-rules) on reading.

### Content rules

These rules come from operator decisions and corrections recorded in [ADR-013](#adr-013-positioning-as-an-agentic-engineering-offer) and the [journal](journal.md). They bind every text on the page in both languages.

- CR-01: Every claim about the work is either backed by all tools shown or phrased as the working method for client projects, which the provider can keep. Facts come from the sources in [data](data.md).
- CR-02: The page never claims that the provider reviews client code. It states that the provider designs the context in which coding agents work, and that productive use needs a professional revision and an independent review of the code.
- CR-03: Promptotyping is presented as one context engineering method among several, chosen per project after the project is understood.
- CR-04: Language models are never named by provider. Where the page characterises their capability, it calls them frontier language models (Frontier-Sprachmodelle). The costs block speaks of language models in general, by the operator's wording of 2026-10-21. The caption of a generated image names the image model, because [ADR-012](#adr-012-generated-illustrations-for-the-method-cards) requires the label.
- CR-05: Billing is per hour, per working day or as a flat fee, starting from the client's budget, with a decision on continuation after every step. The page shows no price.
- CR-06: No price, promise, condition or client name is invented. The page names no other institution, neither clients nor partners, by the operator's decision of 2026-10-02. Real cases appear only with the consent of the projects behind them and without naming the institution unless the operator decides otherwise.
- CR-07: The register is formal and scholarly, with traceability, provenance and reuse as its terms and without casual phrasing. The house rules for punctuation hold, no dash or colon as connector, no trailing negation, no ornamental triad, no marketing adjectives.

## Epics and user stories

### Epic 1: Finding the right help

#### Judge the fit

*As the head of a small archive, who carries a recurring workflow in Word, I want to see whether my case fits, so that I write only when help is plausible.*

Validation: assumption (proxy: operator), effect to be observed, resolved by the first requests received. Re-derived on 2026-10-21, when the fit lists left the page ([ADR-017](#adr-017-page-slimmed-to-offer-examples-methods-and-contact)). The visitor now judges the fit from the examples and settles it in a conversation, which the contact section invites with a problem, an idea or material.

Derivation:
- Requirements FR-01, FR-03, FR-05
- The examples in the section `#werkzeuge` and the conversation path in `#kontakt`

#### Check what is proven

*As a researcher evaluating a tool, I want its maturity and a way to its code and knowledge base, so that I can tell a prototype from an established tool.*

Validation: assumption (proxy: operator). Re-derived on 2026-10-21, when the evidence links left the rows ([ADR-016](#adr-016-uniform-links-no-ability-icons-research-mission-control-withdrawn)). The source of each maturity statement is recorded in [data](data.md#tools), and the repository link leads to the knowledge base it comes from.

Derivation:
- Requirement FR-02, content rule CR-01
- Terms [Maturity chip](INDEX.md#maturity-chip), [Repository link](INDEX.md#repository-link)

### Epic 2: Maintaining the page

#### Change a tool entry once

*As the maintainer, I want to edit a tool in one place, so that the German and English pages stay consistent.*

Validation: realised with the move into the site on 2026-10-02, where `src/i18n/fancy.ts` holds tool and method data once for both languages.

Derivation:
- Requirement FR-06
- [data](data.md), [testing](testing.md)

## Scope of the page

The page runs in this order.

1. Hero with title, the accent line, lede and the buttons Ins Gespräch kommen and Unser Angebot. The right half stays empty.
2. `#angebot`, titled Angebot, with the cards Lernen, Gemeinsam entwickeln and Im Auftrag entwickeln and the block Kosten.
3. `#werkzeuge`, titled Beispiele zum Ausprobieren, with coOCR/HTR, teiCrafter, CorrespExplorer, SZD-HTR and Stefan-Zweig-Bibliographie. Each row carries a screenshot, title, one sentence, maturity chip with the not-finished note where it applies, the button Werkzeug öffnen (Demo ansehen for teiCrafter) and the links Repository and Video where one exists.
4. `#methoden`, titled Methoden und Frameworks, with Promptotyping, Grounded Vault and Agentic Edition Pipeline, each with a generated infographic, one sentence, maturity chip and its links.
5. `#kontakt`, titled Ins Gespräch kommen, with the paths Problem oder Idee besprechen and Material schicken, the e-mail address and the block Wer wir sind.

## Decisions

### ADR-001 Static page without JavaScript

Amended by [ADR-014](#adr-014-the-page-moves-into-the-dhcraftorg-site). The page is now built by the Astro site. What still holds is that its content needs no script and makes no third-party request.

Context. A service page needs fast loading, archivability and no consent banner.

Choice. Plain HTML and CSS served by GitHub Pages, no build step, no script.

Reason. Every interaction the page needs, anchors, e-mail and telephone links, is native.

Effect. No third-party request and no cookie, so a privacy statement can stay short.

### ADR-002 One content source, variants as themes

Superseded by [ADR-011](#adr-011-one-design-after-dhcraftorg).

Context. Several looks were wanted for comparison without forking the copy.

Choice. One HTML file held the content, and a build script wrote each variant with one extra theme stylesheet.

Reason. Content edits happen once, and a variant differs only where its look differs.

### ADR-003 Honest maturity with evidence

Amended on 2026-10-02. The state lines became [maturity chips](INDEX.md#maturity-chip) with an evidence link, see the journal entry "Condensed German page with method illustrations". Amended again on 2026-10-21 by [ADR-016](#adr-016-uniform-links-no-ability-icons-research-mission-control-withdrawn) and [ADR-017](#adr-017-page-slimmed-to-offer-examples-methods-and-contact). The rows no longer link evidence, the chip and the not-finished note carry the modest claim, the repository link leads to the tool's knowledge base, and [data](data.md#tools) records the source of each maturity statement.

Context. All tools are prototypes or research previews, and the page advertises a paid service.

Choice. The page repeats each tool's own maturity statement and links its knowledge base.

Reason. A verifiable modest claim is more credible to an academic audience than an unverifiable strong one.

Effect. Maturity statements drift when a tool changes, so [data](data.md) records the check date per entry.

### ADR-004 Schematic diagrams for third-party images

Context. Some demos show museum images under their own licences.

Choice. A tool whose demo shows images under a non-commercial or unclear licence appears with a schematic diagram instead of a screenshot. A demo whose images are all Public Domain or CC0 is shown as a screenshot.

Reason. The page is commercial, and an image licence must not decide the layout of a service page.

Effect. No tool on the page currently needs a diagram. Objekt-Bestimmung carried one until it left the page on 2026-10-02.

### ADR-005 Main variant indexed, other variants hidden from search

Superseded by [ADR-011](#adr-011-one-design-after-dhcraftorg).

Choice. Every variant except the main one carried `noindex`.

Reason. Identical content at several addresses would compete in search results.

### ADR-006 House rules over the dhcraft.org pattern

Context. dhcraft.org sets kicker labels above headings.

Choice. The page leaves them out.

Reason. The house rules ban eyebrows in every interface, and they rank above a visual model.

### ADR-007 Swipeable section row on phones

Superseded by [ADR-014](#adr-014-the-page-moves-into-the-dhcraftorg-site). The page uses the site navigation, which folds into a menu button on narrow screens.

Context. The header of the standalone page had room only for the request link on narrow screens.

Choice. The section links became a horizontally swipeable row under the wordmark, request link first.

Reason. Every section stayed reachable without a script-driven menu.

### ADR-008 Screenshots as evidence, generated images as identity

Amended by [ADR-012](#adr-012-generated-illustrations-for-the-method-cards), which allows generated illustrations on the method cards. The generated motif image this decision foresaw was never published, see [ADR-010](#adr-010-hand-drawn-motif-instead-of-generated-images).

Context. Better images were wanted everywhere, including generated ones.

Choice. Tool rows show only real screenshots or schematic diagrams. Generated images never depict a tool, an interface or a person and are visibly labelled as generated.

Reason. The page earns trust through evidence links. A generated image in the place of a screenshot would claim an interface that does not exist.

### ADR-009 Decisions taken on the operator's behalf

Partly superseded. The variant bullet by [ADR-011](#adr-011-one-design-after-dhcraftorg), the English address and the link from dhcraft.org by [ADR-014](#adr-014-the-page-moves-into-the-dhcraftorg-site).

Context. The operator asked on 2026-10-01 for every open decision to be taken and carried out.

Choice.
- Prisma stays the main variant, the others stay public with `noindex`.
- A privacy statement is published, based only on verified facts of the page.
- An English version is published under `en/`.
- The page stays at dhcraft.org, and dhcraft.org links it from its research software card.
- The date-extraction timeline and `vetmed-berichtswesen` stay off the page, because one shows internal training material and the other client reporting.
- Team and publications stay on dhcraft.org. The published L.I.S.A. article on Promptotyping is linked as evidence.
- A real case with before and after waits for the consent of the project behind it.

Reason. Each choice keeps facts verifiable and avoids publishing third-party or client material without consent.

### ADR-010 Hand-drawn motif instead of generated images

Superseded. The operator removed the motif from the hero on 2026-10-02, and generated images entered the method cards through [ADR-012](#adr-012-generated-illustrations-for-the-method-cards).

Context. Generated motif images were planned through Codex. The Codex CLI installed at the time offered no image generation, and a paid image API needs the operator's consent.

Choice. One hand-drawn SVG motif, a ray split by a prism into the spectrum, sat in the hero.

Reason. The motif needed no labelling as generated, stayed sharp at any size and weighed a few kilobytes.

### ADR-011 One design after dhcraft.org

Amended by [ADR-014](#adr-014-the-page-moves-into-the-dhcraftorg-site). The look now comes from the site itself, and the stylesheet of the standalone page is gone.

Context. Five looks had been built for comparison. On 2026-10-02 the operator chose the look of dhcraft.org.

Choice. The DHCraft look became the only design. Variant directories, the overview page, the variant switch, the other theme stylesheets, their fonts and images, and the variant build script were removed. The other four looks are documented as design documents in the operator's vault, and commit [54a6fff](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/54a6fff) keeps their code.

Reason. The page reads as part of the provider's site.

Effect. The page is light only, because dhcraft.org has no dark theme.

### ADR-012 Generated illustrations for the method cards

Context. The method cards carried SVG diagrams in four different visual grammars. On 2026-10-02 the operator asked for images that fit the design, produced by Codex, which by then could generate images.

Choice. Each method card gets one generated illustration after the brief in [method images](method-images.md). The images show the idea of a method and never a tool, an interface or a person. They are labelled as generated with the model named.

Reason. Methods have no interface to photograph, so a screenshot cannot serve as evidence there, and the evidence stays in the maturity chip and its links. An illustration in the watercolour language of the DHCraft logo ties the cards to the design.

Effect. Source PNGs stay local and out of Git, their prompt logs are committed. The operator chose the series infographic-v3, which carries a few English key terms, so the alt text describes each flow in words. The images linked to their large version until 2026-10-21, when the link left as a large tab stop to a bare image file ([ADR-017](#adr-017-page-slimmed-to-offer-examples-methods-and-contact)).

### ADR-013 Positioning as an agentic engineering offer

Amended by [ADR-017](#adr-017-page-slimmed-to-offer-examples-methods-and-contact). The block on models and data left the page, the lede now says what fancy (research) tools are, and empowerment through workshops and training leads the offer. The name, the three ways of working and the billing rule still hold.

Context. The page offered custom tools and adaptable research tools. On 2026-10-02 the operator decided to present it as the offer for agentic engineering, building on an older internal concept "Prompt Engineering as a Service" and on research into terms and comparable offers. dhcraft.org already listed training and consulting on its excellence page and linked this page only from its research software card.

Choice. The page is the offer for agentic engineering, and the research tools are the evidence of what it produces. A section `#angebot` after the hero names three ways of working, learning, developing together and commissioned development, and two blocks, models and data, and costs. Frontier language models are named as such and never by provider, open models from any origin included. They work as coding agents that build the tool and inside the finished tool for single work steps, and model and access are chosen with the client by the kind of data. Billing is per hour, per working day or as a flat fee, starting from the client's budget, with a stop after every step. No price appears on the page. The name stays, its "(research)" already marks research as optional.

Reason. "Prompt engineering" is perceived as dated, and dhcraft.org had already replaced it with context engineering. "Agentic engineering" names the practice, the hero line sets it beside the plain audience. The concept's argument of providing paid model subscriptions no longer holds, because consumer plans of at least one provider train on chats unless the user opts out, so client data belongs to API, regional or local access. Speed claims of the concept ("days instead of weeks") are not used, after ADR-003 and because the Promptotyping method claims no general advantage in speed or cost.

Correction, 2026-10-02. Reviewed code was first named as a claim the page could back. The operator corrected this, the provider does not review client code, and Promptotyping is one context engineering method among several. The page instead says that the provider designs the context in which coding agents work and that productive use needs a professional revision and an independent review of the code. The [content rules](#content-rules) hold the result.

Effect. Training formats stay on the excellence section of dhcraft.org and are linked, not repeated. Facts for billing and model use come from operator statements recorded in [data](data.md#provider). Real cases with their effort, the strongest argument that a small budget suffices, wait for the consent of the projects behind them. A workshop count is not shown, because the sources disagree and none has a list behind it.

### ADR-014 The page moves into the dhcraft.org site

Context. After ADR-013 the page is the company's offer for agentic engineering and overlaps with the services cards and the Promptotyping box of dhcraft.org. Its design was a copy of the site's look. On 2026-10-02 the operator decided to make it a subpage of dhcraft.org.

Choice. The page is rebuilt in the Astro site of dhcraft.org with the site's layout, navigation and footer, texts and structured data in `src/i18n/fancy.ts` and one page component with scoped styles. German stays at `/fancy-research-tools/`, English moves to `/en/fancy-research-tools/` after the site's convention, the former English addresses redirect. The site navigation gets the item "Agentic Engineering", the consulting card and the Promptotyping box link to the page. Amendment, 2026-10-02. The navigation item became a pill labelled "fancy (research) tools".

Reason. One offer with one text on one site drifts less than two pages, and the page uses the real design tokens instead of a copy.

Effect. ADR-001 holds for the page content, the site navigation brings its own script. The checks of `scripts/fancy-research-tools/check.cjs` run against the site's preview build.

Amendment, 2026-10-02, superseded by [ADR-015](#adr-015-knowledge-and-scripts-move-into-the-site-repository). The repository DigitalHumanitiesCraft/fancy-research-tools becomes the knowledge and asset workshop of the page. It holds the knowledge base, the prompt logs of the generated images and the scripts that write images into the site repository and check its preview. The code of the page lives only in the site repository. The standalone page, its stylesheet, fonts and published images are deleted from the working tree and remain in Git history, the last published state at commit [8648a35](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/8648a35). GitHub Pages of this repository is switched off.

### ADR-015 Knowledge and scripts move into the site repository

Context. After the amendment of ADR-014 the page lived in the site repository while its knowledge, image prompts and scripts lived in DigitalHumanitiesCraft/fancy-research-tools. The scripts wrote into the other repository and checked its preview, and every change touched two repositories. On 2026-10-03 the operator asked for everything about the page to live in one place.

Choice. The knowledge base moves to `knowledge/fancy-research-tools/`, the image prompt logs to `knowledge/fancy-research-tools/image-prompts/`, the scripts to `scripts/fancy-research-tools/` of the site repository. The rules of the former `CLAUDE.md` and `AGENTS.md` become a section of `CLAUDE.md` and `AGENTS.md` at the site root. The former repository keeps only a README that points here, and its history keeps the standalone page at commits [8648a35](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/8648a35) and [54a6fff](https://github.com/DigitalHumanitiesCraft/fancy-research-tools/tree/54a6fff).

Reason. The page, its facts and its checks change together, and one repository holds them without a write across repositories.

Effect. Archiving the former repository on GitHub is an operator step. The site installs neither Playwright nor axe-core, so the scripts still borrow an existing installation.

### ADR-016 Uniform links, no ability icons, Research Mission Control withdrawn

Context. On 2026-10-21 the operator found the link rows uneven, with Code, Vorlage and Belege naming the same kind of target differently, the ability icons with their legend more noise than help, and Research Mission Control not ready to be public.

Choice. Every link to a GitHub repository is labelled Repository and carries the GitHub mark. Rows link videos and articles where they exist. Method cards drop their evidence link, tools keep Belege. The ability icons and their legend leave the page. Tools and methods with the maturity Forschungsvorschau carry a note that they are not finished and that results need checking before use. Research Mission Control leaves the methods, and GitHub Pages of its repository is switched off.

Reason. One label and one mark for one kind of target let a reader scan the rows. The maturity chip alone did not tell a reader that a research preview is unfinished.

Effect. The ability icon term and the per-tool ability list are removed from the knowledge base. The Research Mission Control images left `public/` on 2026-10-21, so that the method is not reachable at a public address before it is ready ([ADR-017](#adr-017-page-slimmed-to-offer-examples-methods-and-contact)). Its prompt logs stay in `image-prompts/` until the method returns.

Amendment, 2026-10-21. On the operator's request the tools also drop Belege and Anpassen anfragen, because the contact section already carries the request and the repository holds the knowledge base. coOCR/HTR and teiCrafter move to Experiment, and teiCrafter is described as a template to fork into one's own tool for capturing TEI data. The not-finished note covers Forschungsvorschau and Experiment.

### ADR-017 Page slimmed to offer, examples, methods and contact

Context. On 2026-10-21 the operator found the page too long and its message unclear. Principles, process steps, fit lists, the block on models and data and a standing maturity disclaimer explained more than a visitor needed before a first conversation. Three reviews of the slimmed state at commit d089227 then asked for clearer copy, a calmer layout and a consistent knowledge base.

Choice. The page keeps four sections after the hero, `#angebot`, `#werkzeuge`, `#methoden` and `#kontakt`. The lede says what fancy (research) tools are, tools built with coding agents, mostly standalone static applications in the browser without a server, with other solutions possible. Empowerment through workshops and training is the main idea, development together or on commission follows, and support after handover is offered on request. The tools section is titled "Beispiele zum Ausprobieren". The contact invites a conversation about a problem or an idea, or material, data, thoughts and ideas sent by e-mail, with three questions in the prefilled mail and no dash in the subjects. Principles, process, fit lists, the models block and the maturity disclaimer stay off the page. Unfinished tools and methods keep their chip and the not-finished note. The layout puts offers and methods on a white ground with paper cards, offers and methods in one column on narrow screens and three on wide ones, primary actions on their own line above a second row of links, the e-mail address once below the contact cards, Wer wir sind as its own aside with an h2, and the accent line outside the h1. Method images no longer link to their large file. The Research Mission Control images leave `public/`, and the share image is rendered per language.

Reason. A visitor should learn in one screen what the tools are and that the team learns to build them, then try the examples and get in touch. Everything that explained the working method in advance is better said in the conversation. The layout changes follow the reviews and remove uneven grids, an empty band below the hero buttons and duplicate content.

Effect. FR-01 to FR-05, the stories of Epic 1 and the scope list follow the new page, and [design](design.md) keeps the removed principles only as history. The anchors `#qualitaet`, `#vorgehen` and `#modelle` no longer exist, `#kosten` stays for the link from the home page. CR-04 allows the general term language models in the costs block. The facts that left the page are marked in [data](data.md#provider).
