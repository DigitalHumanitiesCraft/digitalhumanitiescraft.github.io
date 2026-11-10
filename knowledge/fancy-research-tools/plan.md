---
title: Plan
project:
  name: fancy (research) tools & workflows
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: active
language: en
created: 2026-10-01
updated: 2026-11-10
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Plan
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [specification, testing, method-images, journal]
---

The accepted next work and the points it waits on. Decisions taken move into [specification](specification.md#decisions), finished work into [journal](journal.md).

## Target

An offer page on dhcraft.org that visitors find from the site navigation and the services, that shares well, reads well on a phone and holds every claim against the linked evidence.

## Next work

1. A legal review of the privacy statement.
2. A screen reader pass over the page, see [testing](testing.md#known-limits).

## Open points

- The upload of the advert video to YouTube and the entry of its address in `fancyAdvert` of `src/i18n/fancy.ts` wait for the operator. The page shows the video without it and gains the link once the address is entered.
- The method cards derive from figures that the repositories of Promptotyping, Grounded Vault and Second Brain Vault held only locally on 2026-11-10. Until those repositories are pushed, the linked method pages show their earlier figures.
- coOCR/HTR ships sample images without a recorded source or terms of use, the print of 1617 on the page's screenshot among them. The example policy of [ADR-017](specification.md#adr-017-page-slimmed-to-offer-examples-methods-and-contact) needs either that record in the tool's repository or the operator's decision to keep the example as it is.
- The SZD OCR/HTR Pipeline and the Stefan-Zweig-Bibliographie rest on holdings of the Literaturarchiv Salzburg. No repository records the archive's consent to their use as examples of a commercial offer, which [CR-06](specification.md#content-rules) asks for where a project stands behind an example.
- The teiCrafter screenshot shows a synthetic letter that the public demo does not offer in its menu. A screenshot of the one public example would show a facsimile from GAMS, whose image rights lie with the archive.
- The demo of the SZD OCR/HTR Pipeline scrolls sideways at phone width and logs a blocked inline event handler. coOCR/HTR and the SZD demo load fonts from a public font service at runtime. Both belong to the tools' repositories.

- The conditions under which client research data enter GAMS are not documented. The offers in the operator's vault bill archiving separately, and the home page says only that archiving is offered. This page has not mentioned archiving since its principles left it on 2026-10-21.
- coOCR/HTR keeps no review state per line or page. The page no longer states the former principle of expert control, so the point matters for client projects and for any later return of that claim.
- coOCR/HTR puts its code under CC BY 4.0 against the house rule of MIT for code. An external contributor's code came in under CC BY, so a change needs that contributor's consent or a legal check.
- Real cases with their effort need the consent of the projects behind them. The page has no place for them since 2026-10-21, so they would come back with a decision on where they stand.
- Offers for work on client data should name the model access and the roles under the EU AI Act, a clause for the offer template and a legal review.
