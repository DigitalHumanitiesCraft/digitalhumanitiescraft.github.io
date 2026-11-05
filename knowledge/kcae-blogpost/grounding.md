---
title: "Grounding plan: Grounded Vault instance for the KCAE blog post"
created: 2026-11-04
status: draft
related: [plan.md, outline.md, sources.md]
---

# Grounding plan

The post is written inside its own instance of the Grounded Vault template (`grounded-vault/SETUP.md`). The instance was created on 2026-11-04 at the place below with the class B values of this document, which the operator's instruction to implement the plan in full adopted. Its journal records the instantiation decisions, its `knowledge/state.md` carries the chapter register below.

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

## Class B values

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
| `0102-aufbauendes-beispiel-und-ablauf.md` | Aufbauendes Beispiel und Ablauf | planned |
| `0201-few-shotted-for-breakfast.md` | „Few-shotted for Breakfast“ | planned |
| `0202-fancy-research-tools-workflows.md` | fancy (research) tools & workflows | planned |
| `0203-jagged-alien-intelligences.md` | Jagged Alien Intelligences | planned |
| `0204-claude-code-in-der-claude-desktop-app.md` | Claude Code in der Claude Desktop App | planned |
| `0205-prompt-engineering-ist-so-2025.md` | Prompt Engineering ist so 2025! | planned |
| `0206-beispiel-webrecherche-und-wissensdokumente.md` | Beispiel: Webrecherche und Wissensdokumente | planned |
| `0207-markdown.md` | Markdown | planned |
| `0208-ai-agent-tool-use.md` | AI Agent & Tool Use | planned |
| `0209-subagents.md` | Subagents | planned |
| `0210-beispiel-wissensdokumente-destillieren.md` | Beispiel: Wissensdokumente destillieren | planned |
| `0211-context-window-managen.md` | Context Window managen | planned |
| `0212-agents-md-claude-md.md` | AGENTS.md / CLAUDE.md | planned |
| `0213-beispiel-wissensbasis-nutzen.md` | Beispiel: Wissensbasis nutzen | planned |
| `0214-ki-governance-auf-zwei-ebenen.md` | KI-Governance auf zwei Ebenen | planned |
| `0215-permission-modes-und-autonomie.md` | Permission Modes und Autonomie | planned |
| `0216-autonomie-und-zugriff.md` | Autonomie und Zugriff | planned |
| `0217-ai-slop-de-slopification.md` | AI Slop & De-Slopification | planned |
| `0218-skills-ein-pdf-skill.md` | Skills: ein PDF-Skill | planned |
| `0219-zwischenfazit.md` | Zwischenfazit | planned |
| `0301-beispiel-wissensdashboard.md` | Beispiel: Wissensdashboard | planned |
| `0302-die-erste-iteration-des-dashboards.md` | Die erste Iteration des Dashboards | planned |
| `0303-beispiel-follow-up-prompts-zum-dashboard.md` | Beispiel: Follow-Up Prompts zum Dashboard | planned |
| `0304-agentic-governance-workspace.md` | Agentic Governance Workspace | planned |
| `0305-computational-thinking.md` | Computational Thinking | planned |
| `0306-vibe-coding-agentic-engineering-und-promptotypin.md` | Vibe Coding, Agentic Engineering und Promptotyping | planned |
| `0307-wissensmodellierung.md` | Wissensmodellierung | planned |
| `0308-agentisches-wissensmanagement.md` | Agentisches Wissensmanagement | planned |
| `0309-how-steph-ango-uses-obsidian.md` | How Steph Ango uses Obsidian | planned |
| `0310-git-und-github.md` | Git und GitHub | planned |
| `0311-beispiel-wissens-vault-bauen.md` | Beispiel: Wissens-Vault bauen | planned |
| `0312-das-wissensdokument-im-vault.md` | Das Wissensdokument im Vault | planned |
| `0313-aufbau-des-vaults.md` | Aufbau des Vaults | planned |
| `0314-mit-dem-vault-arbeiten.md` | Mit dem Vault arbeiten | planned |
| `0401-frontier-llms-amplifizieren-computergestuetzte-w.md` | Frontier-LLMs amplifizieren computergestützte Wissensarbeit | planned |
| `0402-agentic-engineering-was-das-modell-umgibt-und-wa.md` | Agentic Engineering: was das Modell umgibt und was es davon sieht | planned |
| `0403-model-context-protocol-mcp.md` | Model Context Protocol (MCP) | planned |
| `0404-agentic-search-suchen-wie-im-terminal.md` | Agentic Search: suchen wie im Terminal | planned |
| `0405-beispiel-eine-anfrage-mit-excel-daten.md` | Beispiel: Eine Anfrage mit Excel-Daten | planned |
| `0406-beispiel-die-daten-im-dashboard.md` | Beispiel: Die Daten im Dashboard | planned |
| `0407-subagents-agent-teams-und-dynamic-workflows.md` | Subagents, Agent Teams und Dynamic Workflows | planned |
| `0408-qualitaet-sichern-skript-wo-moeglich-urteil-wo-n.md` | Qualität sichern: Skript, wo möglich, Urteil, wo nötig | planned |
| `0409-test-driven-development-tdd.md` | Test Driven Development (TDD) | planned |
| `0410-hook-nur-im-projektordner-arbeiten.md` | Hook: nur im Projektordner arbeiten | planned |
| `0411-docling-dokumente-als-markdown.md` | Docling: Dokumente als Markdown | planned |
| `0412-open-models-das-modell-im-eigenen-haus.md` | Open Models: das Modell im eigenen Haus | planned |
| `0413-eigene-pipelines-der-agent-baut-das-lokale-model.md` | Eigene Pipelines: der Agent baut, das lokale Modell arbeitet | planned |
| `0414-promptotyping.md` | Promptotyping | planned |
| `0415-was-sie-gemacht-haben-ein-durchlauf-promptotypin.md` | Was Sie gemacht haben: ein Durchlauf Promptotyping | planned |
| `0416-loop-engineering.md` | Loop Engineering | planned |
| `0417-research-mission-control.md` | Research Mission Control | planned |
| `0418-second-brain-vault.md` | Second Brain Vault | planned |
| `0419-grounded-vault.md` | Grounded Vault | planned |
| `0420-agentic-edition-pipeline.md` | Agentic Edition Pipeline | planned |
| `0421-asymmetrische-amplifikation-ki-verstaerkt-was-sc.md` | Asymmetrische Amplifikation: KI verstärkt, was schon da ist | planned |
| `0501-vibe-coding-agentic-knowledge-and-research-engin.md` | Vibe Coding & Agentic (Knowledge and Research) Engineering | planned |
| `0502-ai-watermarking.md` | AI Watermarking | planned |
| `0600-schluss.md` | Schluss (own) | planned |
