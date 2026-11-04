---
title: "Grounding plan: Grounded Vault instance for the KCAE blog post"
created: 2026-11-04
status: draft
related: [plan.md, outline.md, sources.md]
---

# Grounding plan

The post is written inside its own instance of the Grounded Vault template (`grounded-vault/SETUP.md`). The instance has not been created yet. SETUP.md classes nine parameters as project decisions (class B) that are taken before any file is filled, and its first-session prompt asks the operator for each of them. This document therefore proposes every class B value, so that instantiation needs one acceptance and then runs mechanically.

## Place

- Local path `C:\Users\Chrisi\Documents\GitHub\DHCraft\kcae-blogpost-vault`, beside the other DHCraft repositories and the precedent instance `DHCraft/promptotyping-paper/grounded-vault`.
- A separate private GitHub repository `DigitalHumanitiesCraft/kcae-blogpost-vault`. Creating it, pushing and any publication stay with the operator.
- The site repository receives only the exported post. `00_sources` holds third-party originals whose rights are not cleared for publication, so the instance is never public.
- Instantiation copies the template's files without its git history, `git init`, fills the placeholders, removes the template-only files (SETUP.md step 5) and commits once.

## Class A values

| Marker | Value |
|---|---|
| `{{PROJECT_NAME}}` | KCAE Blog Post Vault |
| `{{REPOSITORY}}` | DigitalHumanitiesCraft/kcae-blogpost-vault |
| `{{DATE}}` | the instantiation date |

## Proposed class B values

| Marker | Proposal | Reason |
|---|---|---|
| `{{PURPOSE}}` | This vault grounds the long German blog post on Knowledge, Context and Agentic Engineering for dhcraft.org, which follows the deck of the Uni for Life workshop of 9 and 10 November 2026 and replaces the Full Lecture Notes of the teaching line once accepted. Readers are researchers and knowledge workers without a technical background. Every definition and every factual claim of the post carries an anchor to a read source passage or is marked as the author's own posit, and only the operator's verification establishes evidence. | `plan.md`, goal and grounding section |
| `{{TOPICS}}` | LLM, Agent und Harness, Prompt und Context, Knowledge, Agentic Workflows, Governance und Qualität, Weiterführend | follows the four areas of the slide "Begriffe im Workshop", with the LLM and governance as their own topics, as the slide places them under and across the areas |
| `{{SOURCE_TYPES}}` | publication, document | papers and books are citable-only publications with CSL records from the Zotero group agki-dh; vendor documentation, specifications, legal texts and the provider's own pages are documents with Markdown representations |
| `{{GENRE}}` | long explanatory blog post with footnotes | precedent Asymmetric Amplification |
| `{{LANGUAGE}}` | German | decision of 2026-11-04, German first |
| `{{VERIFICATION_ROLE}}` | The author, Christopher Pollin (Digital Humanities Craft OG), who alone sets `verified` | as in the precedent instance |
| `{{REVIEW_MECHANISM}}` | Adversarial machine review by a subagent with fresh context that sees only the exported pairs, cut with `tools/review.py emit` and booked with `tools/review.py judge`, each batch under `checks/` recording the reviewer model used | as in the precedent instance |
| `{{STYLE_SHEET}}` | The operator's writing-style rules govern the prose. Front matter, citation and Dublin Core blocks and the footnote form follow `src/content/blog/Asymmetric-Amplification.md` in dhcraft-site. Terms follow the slide "Begriffe im Workshop" and the KCAE glossary `knowledge/terms.md`. Prompts stay verbatim as block quotes. | `plan.md`, treatment rules |
| `{{HARNESS_RULES}}` | Agents may run `uv run python tools/validate.py`, the test suite and the export script unasked, and commit locally with explicit paths. Pushes, repository creation and publication stay with the operator. No source enters `00_sources` before its full text was read and checked against the Zotero group agki-dh. | operator's standing git and research rules |

## Chain

- `00_sources` holds each source as it arrived, a PDF or an HTML snapshot. Publications whose full text is not kept locally enter as CSL records in `references/` only.
- `10_markdown` holds the Markdown representation of each document, made with Docling for PDFs.
- `20_distillates` holds one distillate per source with the passages the post uses.
- `30_assertions` holds one file per claim of the post, filed under one topic MOC.
- `40_output` holds one chapter file per post section in deck order, named by the register below.
- An export script, to be written in the instance, concatenates the chapters into `src/content/blog/<slug>.md` of dhcraft-site, turns `Grounded in` footnotes into reader footnotes and keeps the slide markers as HTML comments, so `scripts/kcae-blogpost/check-structure.mjs` runs against the finished post as well.

Production starts with the first production cycle of SETUP.md, one source carried from `00_sources` to one paragraph, before the remaining sources are ingested.

## Chapter register

One chapter per level-3 section of `outline.md`, plus the post's own opening and close. Numbers encode session and position, so file order equals deck order. All rows are planned until their files exist.

| File | Section | Status |
|---|---|---|
| `0100-eroeffnung.md` | Eröffnung (own) | planned |
| `0101-lernziele-und-ablauf.md` | Lernziele und Ablauf | planned |
| `0102-begriffe-im-workshop.md` | Begriffe im Workshop | planned |
| `0103-aufbauendes-beispiel-und-ablauf.md` | Aufbauendes Beispiel und Ablauf | planned |
| `0201-few-shotted-for-breakfast.md` | „Few-shotted for Breakfast“ | planned |
| `0202-software-fuer-alle.md` | Software … für alle!? | planned |
| `0203-jagged-alien-intelligences.md` | Jagged Alien Intelligences | planned |
| `0204-llm-basierte-ai-agents.md` | LLM-basierte AI Agents | planned |
| `0205-ai-harness.md` | AI Harness | planned |
| `0206-claude-code-in-der-claude-desktop-app.md` | Claude Code in der Claude Desktop App | planned |
| `0207-beispiel-ein-projekt-konfigurieren.md` | Beispiel: ein Projekt konfigurieren | planned |
| `0208-prompt-engineering-ist-so-2025.md` | Prompt Engineering ist so 2025! | planned |
| `0209-markdown.md` | Markdown | planned |
| `0210-wissensdokument.md` | Wissensdokument | planned |
| `0211-tool-use-so-bedient-ein-ki-agent-den-rechner.md` | Tool Use: So bedient ein KI-Agent den Rechner | planned |
| `0212-die-erste-iteration-des-dashboards.md` | Die erste Iteration des Dashboards | planned |
| `0213-beispiel-feedback.md` | Beispiel: Feedback | planned |
| `0214-subagents-ein-reviewer-agent.md` | Subagents: ein Reviewer Agent | planned |
| `0215-beispiel-refactoring-und-kuratieren.md` | Beispiel: Refactoring und Kuratieren | planned |
| `0216-context-window-managen.md` | Context Window managen | planned |
| `0217-agents-md-claude-md.md` | AGENTS.md / CLAUDE.md | planned |
| `0218-memory.md` | Memory | planned |
| `0219-beispiel-vom-wissen-zum-skill.md` | Beispiel: vom Wissen zum Skill | planned |
| `0220-skills-ein-pitch-skill.md` | Skills: ein Pitch-Skill | planned |
| `0221-mcp-rag-memory.md` | MCP & RAG & Memory | planned |
| `0222-context-engineering.md` | Context Engineering | planned |
| `0301-agentic-engineering-im-ueberblick.md` | Agentic Engineering im Überblick | planned |
| `0302-ki-governance-auf-zwei-ebenen.md` | KI-Governance auf zwei Ebenen | planned |
| `0303-permission-modes-und-autonomie.md` | Permission Modes und Autonomie | planned |
| `0304-hook-nur-im-projektordner-arbeiten.md` | Hook: nur im Projektordner arbeiten | planned |
| `0305-knowledge-engineering.md` | Knowledge Engineering | planned |
| `0306-docling-vom-pdf-zum-wissensdokument.md` | Docling: Vom PDF zum Wissensdokument | planned |
| `0307-promptotyping-documents.md` | Promptotyping Documents | planned |
| `0308-obsidian.md` | Obsidian | planned |
| `0309-how-steph-ango-uses-obsidian.md` | How Steph Ango uses Obsidian | planned |
| `0310-das-wissensdokument-im-vault.md` | Das Wissensdokument im Vault | planned |
| `0311-tags-und-tag-taxonomie.md` | Tags und Tag-Taxonomie | planned |
| `0312-maps-of-content.md` | Maps of Content | planned |
| `0313-beispiel-der-vault.md` | Beispiel: der Vault | planned |
| `0314-kuratieren-struktur-und-inhalt.md` | Kuratieren: Struktur und Inhalt | planned |
| `0315-vault-governance.md` | Vault-Governance | planned |
| `0401-fancy-research-tools.md` | Fancy Research Tools | planned |
| `0402-loop-engineering.md` | Loop Engineering | planned |
| `0403-subagents-und-workflows.md` | Subagents und Workflows | planned |
| `0404-determinismus-so-weit-wie-moeglich-ausreizen.md` | Determinismus so weit wie möglich ausreizen | planned |
| `0405-qualitaet-sichern.md` | Qualität sichern | planned |
| `0406-beispiel-ein-analysewerkzeug.md` | Beispiel: ein Analysewerkzeug | planned |
| `0407-ausblick-vorlagen-fuer-die-eigene-arbeit.md` | Ausblick: Vorlagen für die eigene Arbeit | planned |
| `0501-vibe-coding-agentic-knowledge-and-research-engin.md` | Vibe Coding & Agentic (Knowledge and Research) Engineering | planned |
| `0502-frontier-llms-amplifizieren-computergestuetzte-w.md` | Frontier-LLMs amplifizieren computergestützte Wissensarbeit | planned |
| `0503-ai-watermarking.md` | AI Watermarking | planned |
| `0600-schluss.md` | Schluss (own) | planned |
