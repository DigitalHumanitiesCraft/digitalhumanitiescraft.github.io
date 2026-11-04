---
title: "Plan: Knowledge, Context and Agentic Engineering as a blog post"
created: 2026-11-04
status: draft
related: [../journal.md, ../../src/content/blog/Asymmetric-Amplification.md]
---

# Plan: Knowledge, Context and Agentic Engineering as a blog post

## Goal

A long, fully written blog post on dhcraft.org that explains every concept of the Uni for Life workshop "Intermediate Prompting Agentic Engineering" (9 and 10 November 2026) for a general readership, with literature in footnotes. The post follows the structure of the workshop deck slide by slide. It has its own opening and its own close. The precedent is `src/content/blog/Asymmetric-Amplification.md`, which is based on a workshop deck, preserves its alternating structure of concepts and hands-on exercises, and links the slides.

## Decisions

Taken by the operator on 2026-11-04:

- The structure follows the UFL workshop deck (https://docs.google.com/presentation/d/1kl9usbbkny5hl8QOKlN_OqYZWbDPo90TaINnPTEImnE/edit), not the Full Slide Deck of the teaching line.
- No duplicate texts across the site. The tutorial post "Ein Promptotyping-Projekt anlegen" was removed for that reason (commit 26e1a8e). The Promptotyping section of the new post places the method and points to the Promptotyping paper.

Open, with recommendation:

1. Whether the post replaces the Full Lecture Notes of the teaching line (repository knowledge-context-agentic-engineering, `script/full-lecture-notes-de.md`) as the canonical long text. Recommendation: yes, once accepted. The Lecture Notes card on the KCAE page then points to the post, and the KCAE `CLAUDE.md` naming rule for the Full Lecture Notes changes in that repository.
2. Language. Recommendation: German first, like the deck. An English version is a later, separate step.
3. Appendix slides. Recommendation: Vibe Coding, Frontier-LLMs and AI Watermarking as a short section "Weiterführend" before the close; the operational appendix slides (CLAUDE.md prompts, commands, compress the vault) stay out.
4. Images. Recommendation: own graphics and the CC BY 4.0 figure from Dathathri et al. (2024) with licence statement. No screenshots of third-party videos or slides.
5. Pending deck changes that alter the structure: the term overview slide "Begriffe im Workshop" after "Lernziele und Ablauf", and the slide "Subagents und Workflows" in session 3. Both were drafted in chat on 2026-11-04 and are not yet built.

## Treatment rules

- Each session becomes a level-2 section, each content slide a level-3 section with the slide title and in slide order.
- Workshop logistics drop out: Zoom, times, introductions, "copy the prompt".
- Hands-on slides become one continuous worked example. Prompts stay verbatim as block quotes so readers can repeat them.
- Every term of the term list is defined and explained. A source is cited only after its full text has been read.
- Writing follows the operator's writing-style rules; citation and Dublin Core front matter follow the existing posts.

## Structure mapping

Source text column refers to `workshops/2026-11-09-ufl/lecture-notes.md` in the repository knowledge-context-agentic-engineering, which already follows the deck section by section. "Draft" marks slides still carrying the deck's draft marker on 2026-11-04.

| Slide | Deck title | Blog section | Source text | Deck status |
|---|---|---|---|---|
| 1–4 | Title, DHCraft, Vorstellungsrunde, Materialien | Opening (links to slides and material only) | Einstieg | accepted |
| 5 | Lernziele und Ablauf | Opening, the three areas | Lernziele und Ablauf | accepted |
| 6 | Aufbauendes Beispiel und Ablauf | Opening, the running example | Aufbauendes Beispiel und Ablauf | accepted |
| – | Begriffe im Workshop (pending) | Term overview | to write | not built |
| 7 | Session 1 | Prompt und Context Engineering | – | accepted |
| 8 | Few-shotted for Breakfast | same | yes | accepted |
| 9 | Software … für alle!? | same | yes | accepted |
| 10 | Jagged Alien Intelligences | same | yes | accepted |
| 11 | LLM-basierte AI Agents | same | yes | accepted |
| 12 | AI Harness | same | yes | accepted |
| 13 | Claude Code in der Claude Desktop App | same | yes | accepted |
| 14 | Hands-on 1: Ein Projekt konfigurieren | Beispiel: ein Projekt konfigurieren | yes | accepted |
| 15 | Prompt Engineering ist so 2025! | same | yes | accepted |
| 16 | Markdown | Markdown und Tokens | yes | accepted |
| 17 | Wissensdokument | same | yes | accepted |
| 18 | Tool Use | same | yes | accepted |
| 19 | Die erste Iteration des Dashboards | same | yes | accepted |
| 20 | Hands-on 1: Follow-Up Prompts (Feedback) | Beispiel: Feedback | yes | accepted |
| 21 | Subagents: ein Reviewer Agent | same | yes | accepted |
| 22 | Hands-on 1: Follow-Up Prompts (Refactoring) | Beispiel: Refactoring und Kuratieren | yes | accepted |
| 23 | Context Window managen | same | yes | accepted |
| 24 | AGENTS.md / CLAUDE.md | same | yes | accepted |
| 25 | Memory | same | yes | accepted |
| 26 | Skill: Wissensbasis + Kontext → Folien | merged into the next section | – | accepted |
| 27 | Hands-on 2: Vom Wissen zum Pitch und zum Skill | Beispiel: vom Wissen zum Skill | yes | accepted |
| 28 | Skills: ein Pitch-Skill | same | yes | accepted |
| 29 | MCP & RAG & Memory | same | yes | accepted |
| 30 | Context Engineering | same | yes | draft |
| 31 | Session 2 | Knowledge Engineering | – | accepted |
| 32 | Agentic Engineering im Überblick | same | yes | accepted |
| 33 | KI-Governance auf zwei Ebenen | same | yes | draft |
| 34 | Permission Modes und Autonomie | same | yes | accepted |
| 35 | Hook: nur im Projektordner arbeiten | same | yes | accepted |
| 36 | Knowledge Engineering | same | yes | draft |
| 37 | Docling: Vom PDF zum Wissensdokument | same | yes | draft |
| 38 | Promptotyping Documents | same | yes | draft |
| 39 | Obsidian | same | yes | accepted |
| 40 | How Steph Ango uses Obsidian | same | yes | accepted |
| 41 | Das Wissensdokument im Vault | same | yes | draft |
| 42 | Tags und Tag-Taxonomie | same | yes | draft |
| 43 | Maps of Content | same | yes | draft |
| 44 | Hands-on 3: Die Wissensbasis wird ein Obsidian-Vault | Beispiel: der Vault | yes | draft |
| 45 | Kuratieren: Struktur und Inhalt | same | yes | draft |
| 46 | Vault-Governance | same | yes | draft |
| 47 | Session 3 | Agentic Engineering | – | accepted |
| 48 | Fancy Research Tools | same | yes | draft |
| 49 | Loop Engineering | same | yes | draft |
| – | Subagents und Workflows (pending) | same | research notes of 2026-11-04 | not built |
| 50 | Determinismus so weit wie möglich ausreizen | same | yes | draft |
| 51 | Qualität sichern | same | yes | draft |
| 52 | Hands-on 4: Ein Analysewerkzeug aus Excel-Daten | Beispiel: ein Analysewerkzeug | yes | draft |
| 53 | Ausblick: Vorlagen für die eigene Arbeit | Close | yes | draft |
| 55, 56, 61 | Vibe Coding, Frontier-LLMs, AI Watermarking | Weiterführend | yes | 61 draft |
| 54, 57–60 | Anhang divider, CLAUDE.md prompts, commands, compress | left out | – | – |

## Phases

1. **Inventory.** Export all slide texts and speaker notes with slide IDs. Read the UFL lecture notes, the Full Lecture Notes and two existing posts (Asymmetric Amplification, System 1.42) for front matter, footnote style, image handling and register. Done when the inventory file lists every slide with its text and notes.
2. **Mapping and check script.** Extend the table above with core claim, terms and source per section. Write a small script that compares deck slide titles with the post's level-3 headings in order and reports missing or reordered sections. Done when the script passes on the outline.
3. **Decisions.** The operator settles open points 1 to 5.
4. **Outline for acceptance.** Opening, sections with core claim and sources, Weiterführend, close. No running text before acceptance.
5. **Writing in three passes,** one per session: condense and write from the lecture notes, read and cite sources, check against the writing-style rules, an independent reader agent reads without the author's reasoning, the operator accepts. Opening and close come last.
6. **Literature.** Every definition gets a primary source read in full. Sources gathered on 2026-11-04 include Mei et al. (2025), Karpathy (2026), Anthropic (2024, 2025, 2026) on agents and workflows, Dathathri et al. (2024), Auer et al. (2024), Liu (2026) and Meta AI (2025). Additions go through the Zotero group agki-dh after a duplicate check.
7. **Implementation.** Post file in `src/content/blog/` with citation and Dublin Core front matter, entry and DE/EN teasers in `src/i18n/blog.ts`, preview image, `npm run build`, `npx tsc --noEmit`, browser preview, link check, journal entry, local commit. Publication needs the operator's push.
8. **Alignment.** Maintenance rule in the KCAE repository: a slide change changes its section, checked by the script from phase 2. KCAE Lecture Notes card and register follow decision 1. The UFL lecture notes stay until the workshop and point to the post afterwards.

## Dependencies

- Phase 5 writes against accepted slides. Phase 4 can start while slides are still in draft.
- The method pages of Second Brain Vault, Grounded Vault and Promptotyping must be published before the post links them.
