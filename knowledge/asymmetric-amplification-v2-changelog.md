---
title: "Asymmetric Amplification v1 → v2: Change Log and Release Steps"
project:
  name: DHCraft Site (Blog)
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: en
created: 2026-07-31
updated: 2026-07-31
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
related:
  - asymmetric-amplification.md
  - journal.md
---

# Asymmetric Amplification v1 → v2: Change Log and Release Steps

Editorial mapping between the workshop version (v1, published 2026-02-09) and the revised essay draft (v2, `src/content/blog/Asymmetric-Amplification-v2.md`, drafted 2026-07-31, unpublished pending author review). The governing specification is `knowledge/asymmetric-amplification.md`.

## Retained claims

- The laboratories' automation goal, opened with the Pachocki quotation, read literally.
- Amplification instead of automation or acceleration as the correct description; the definition of asymmetric amplification.
- The author's situated first-person evidence (structural change of own work since early 2026, shift from executing to orchestrating), now explicitly marked as both evidence and bias.
- The R-course episode, compressed from a full workshop section to one paragraph, as evidence for the competence asymmetry.
- The two sovereignty imperatives (build sovereign infrastructure, work critically with frontier systems), recast as a collective rather than individual burden in the final section.
- CC BY 4.0, citation apparatus, and the canonical URL.

## Revised claims

- "Forced to engage" (v1) became structural pressure with explicit qualifications; refusal is stated as possible, legitimate, and costly rather than impossible.
- The undifferentiated asymmetry of v1 became eleven named asymmetries in five interacting clusters, with cumulative asymmetry as the twelfth and structurally strongest.
- "The technology does not close gaps. It widens them." (v1 conclusion) became the cumulative-advantage argument with the write-back loop as mechanism.
- The unit of analysis is now the model–harness–environment system instead of "the model" or "AI".
- Verification, scholarly validation, and acceptance are differentiated as operations with distinct authority; v1 carried this only implicitly via the Critical-Expert-in-the-Loop figure.
- The February 2026 product claims (Opus 4.6, GPT-5.3-Codex) are reduced to two date-stamped sentences; the Tao and Knuth cases carry the capability evidence instead.

## Removed workshop material

- All hands-on exercises (patent cooperation network, FIGARO-NAM use case) and the workshop slide markers.
- The LLM tutorial sections (next token prediction, tokenization, pre-/post-training, embeddings, context window mechanics, format guidance). Their didactic content lives in teaching material and the vault, and v1 remains available.
- The European-position section with its self-hosting cost figures and model landscape snapshot; these age fast and survive only as the sharpened sovereignty passage in the final section.
- The retrieval-ish systems section (Chollet, Hochreiter, Kambhampati) and the news chronicle of early February 2026.

## New material

- The externalisation proposition (articulable part of competence) as load-bearing element.
- Epistemic visibility as implementation capacity.
- Labour, institutional, and competitive asymmetries.
- The Latour-based reversibility argument and epistemic infrastructure, imported from the co-authored essay with explicit attribution.
- The talks-back section with two grounded vignettes (Deep Research selection divergence from the co-authored project; the anonymised edition-pipeline case of an agent closing its own verification gate).
- Bounded acceptance and the promptotype notion in blog-compatible form.
- Conceptual treatment of Promptotyping as a method (definition, knowledge base, distillation as pragmatic modelling, write-back, promptotype), replacing the example-bound presentation of v1; operator decision 2026-07-31.
- The critique-does-not-cancel-power section.

## Open points before release

1. Author review against the acceptance criteria in `knowledge/asymmetric-amplification.md`.
2. The vignettes for M³GIM (modelling consequences) and Notker (bounded acceptance) are named in the knowledge base but not yet written, because their case histories live in the Promptotyping paper manuscript; decide whether v2 ships with two vignettes or waits for these.
3. The edition-pipeline vignette stays anonymised until the Promptotyping paper is published, then it can reference the case directly (rule inherited from the AGI verification-question knowledge document).
4. Verify the Pachocki quotation wording and date against a primary source; v1 carries it without footnote.
5. Hero image: v1 references `[image1]`; v2 currently has no image. Decide on a new hero or none.
6. A German-language companion thread (the AGI question as a verification question) remains a separate planned post; v2 deliberately does not absorb it.

## Release steps (after author acceptance)

1. Replace the body and front matter of `src/content/blog/Asymmetric-Amplification.md` with the content of `Asymmetric-Amplification-v2.md` (canonical slug keeps serving the current version; `date:` stays the v2 publication date, add `last_modified_at` if further revisions follow).
2. Delete `Asymmetric-Amplification-v2.md`.
3. Set `published: true` in `Asymmetric-Amplification-v1.md`.
4. Check both rendered pages locally, including the mutual version-note links and the citation blocks.
5. Update the vault mirror documents (blog post document under `Writing/Blog/`, concept atom, literature note) to the versioned state.
