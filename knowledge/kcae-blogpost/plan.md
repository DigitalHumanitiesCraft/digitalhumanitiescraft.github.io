---
title: "Plan: Knowledge, Context and Agentic Engineering as a blog post"
created: 2026-11-04
status: draft
related: [../journal.md, ../../src/content/blog/Asymmetric-Amplification.md, outline.md, deck-inventory.md, sources.md, grounding.md]
---

# Plan: Knowledge, Context and Agentic Engineering as a blog post

## Goal

A long, fully written blog post on dhcraft.org that explains every concept of the Uni for Life workshop "Intermediate Prompting Agentic Engineering" (9 and 10 November 2026) for a general readership, with literature in footnotes. The post follows the structure of the workshop deck slide by slide. It has its own opening and its own close. The precedent is `src/content/blog/Asymmetric-Amplification.md`, which is based on a workshop deck, preserves its alternating structure of concepts and hands-on exercises, and links the slides.

## Decisions

Taken by the operator on 2026-11-04:

- The structure follows the UFL workshop deck (https://docs.google.com/presentation/d/1kl9usbbkny5hl8QOKlN_OqYZWbDPo90TaINnPTEImnE/edit), not the Full Slide Deck of the teaching line.
- Once accepted, the post replaces the Full Lecture Notes of the teaching line (repository knowledge-context-agentic-engineering, `script/full-lecture-notes-de.md`) as the canonical long text. The Lecture Notes card on the KCAE page then points to the post, and the naming rule for the Full Lecture Notes in that repository's `CLAUDE.md` changes in the same step.
- No duplicate texts across the site. The tutorial post "Ein Promptotyping-Projekt anlegen" was removed for that reason (commit 26e1a8e). The Promptotyping section of the new post places the method and points to the Promptotyping paper.

Taken on 2026-11-04 following the recommendations:

- The post is written in German first, like the deck. An English version is a later, separate step.
- Vibe Coding, Frontier-LLMs and AI Watermarking form a short section "Weiterführend" before the close. The operational appendix slides (CLAUDE.md prompts, commands, compress the vault) stay out.
- Images are own graphics and the CC BY 4.0 figure from Dathathri et al. (2024) with licence statement. No screenshots of third-party videos or slides.

Both slides that altered the structure, "Begriffe im Workshop" and "Subagents und Workflows", were built on 2026-11-04 and are part of the mapping below.

## Treatment rules

- Each session becomes a level-2 section, each content slide a level-3 section with the slide title and in slide order.
- Workshop logistics drop out: Zoom, times, introductions, "copy the prompt".
- Hands-on slides become one continuous worked example. Prompts stay verbatim as block quotes so readers can repeat them.
- Every term of the term list is defined and explained. A source is cited only after its full text has been read.
- Writing follows the operator's writing-style rules; citation and Dublin Core front matter follow the existing posts.

## Structure mapping

Slide numbers follow the deck as exported on 2026-11-04 (`deck-inventory.md`, 63 slides, revision recorded in `deck-slides.json`). Every section of the post takes its source text from the section of the same title in `workshops/2026-11-09-ufl/lecture-notes.md` in the repository knowledge-context-agentic-engineering. The core claim is condensed here and spelled out in `outline.md`. The sources column names the anchors checked on 2026-11-04, "open" marks a term without a read source, and `sources.md` holds read extent, quote check and Zotero status. "Draft" marks slides carrying the deck's draft marker on 2026-11-04. `scripts/kcae-blogpost/check-structure.mjs` checks titles, order and coverage of this mapping against the outline and later the post.

| Slide | Deck title | Blog section | Core claim | Terms | Sources | Status |
|---|---|---|---|---|---|---|
| 1–4 | Title, DHCraft, Vorstellungsrunde, Materialien | Eröffnung (links only) | the post follows a two-day workshop from prompts to the design of knowledge, context and environment | – | – | accepted |
| 5 | Lernziele und Ablauf | Lernziele und Ablauf | three areas, one learning goal each | – | – | accepted |
| 6 | Begriffe im Workshop | Begriffe im Workshop | four areas, LLM beneath, governance across | full term list | sourced where defined | accepted |
| 7 | Aufbauendes Beispiel und Ablauf | Aufbauendes Beispiel und Ablauf | one knowledge base grows through all sections | – | GDPR, AI Act named only | accepted |
| 8 | Session 1 | Session 1: Prompt und Context Engineering | – | – | – | accepted |
| 9 | “Few-shotted for Breakfast” | same | fast practice gains meet a new layer without a manual | few-shot | Karpathy posts 2025, 2026; Brown et al. 2020 (part) | accepted |
| 10 | Software … für alle !? | same | building and buying become comparable, maintenance decides | – | Litt et al. 2025 | accepted |
| 11 | LLMs bzw. AI Agents als “Jagged Alien ‘Intelligences’” | Jagged Alien Intelligences | jagged capabilities and model properties decide the way of working | LLM, jagged frontier, confabulation, bias, sycophancy, knowledge cut-off, reasoning | Gans 2026; Shanahan 2023; Farquhar et al. 2024; Gallegos et al. 2024; Sharma et al. 2023; Lindsey et al. 2025; Cheng et al. 2024; Snell et al. 2024 | accepted |
| 12 | LLM-basierte AI Agents | same | an agent plans and acts with tools towards a goal, with bounded autonomy | AI Agent | Sapkota et al. 2025; Anthropic 2024 | accepted |
| 13 | AI Harness | same | the harness runs the agent loop and decides what the agent sees and may do | AI Harness, Harness Engineering | Zhong and Zhu 2026; Liu 2026 | accepted |
| 14 | Claude Code in der Claude Desktop App | same | one harness interface makes the concepts visible | Slash Command, Connector | vendor documentation | accepted |
| 15 | Hands-on 1: Ein Projekt konfigurieren | Beispiel: ein Projekt konfigurieren | the first prompt, verbatim, and what the agent does | – | own prompt | accepted |
| 16 | Prompt Engineering ist so 2025! | same | goal, knowledge and success criteria outweigh prompt form | Prompt Engineering | vendor guides; form claim open | accepted |
| 17 | Markdown | same | Markdown makes structure explicit at low token cost | Markdown, Token, Tokenizer | Gruber 2004; Sennrich et al. 2016; token comparison open | accepted |
| 18 | Wissensdokument | same | externalised, traceable, curatable knowledge for humans and agents | Wissensdokument | Karpathy 2026; Promptotyping specification; Nonaka open | accepted |
| 19 | Tool Use: So bedient ein KI-Agent den Rechner | same | the loop of decision, tool call and feedback distinguishes agent from chat | Tool Use | Yao et al. 2023; Anthropic 2024 | accepted |
| 20 | Die erste Iteration des Dashboards | same | simple, readable technology; slop removed in each iteration | AI Slop | Shaib et al. 2025 | accepted |
| 21 | Hands-on 1: Follow-Up Prompts | Beispiel: Feedback | self-check and independent review improve the first iteration | Self-Verification, Self-Refine, LLM-as-a-Judge | Madaan et al. 2023; Weng et al. 2023; Zheng et al. 2023 | accepted |
| 22 | Subagents: ein Reviewer Agent | same | a subagent has its own context and returns only the result | Subagent | vendor documentation; Anthropic 2025 | accepted |
| 23 | Hands-on 1: Follow-Up Prompts | Beispiel: Refactoring und Kuratieren | self-check applies to code and knowledge, Git makes states recoverable | Refactoring, Kuratieren, Git | Pro Git; refactoring open | accepted |
| 24 | Context Window managen | same | input and output share the window, performance degrades early, compaction loses talk | Context Window, Context Rot, Context Compression | vendor documentation; Hong et al. 2025 | accepted |
| 25 | AGENTS.md / CLAUDE.md | same | durable instructions loaded every session, global and per project | AGENTS.md, CLAUDE.md | agents.md; vendor documentation | accepted |
| 26 | Memory | same | agent-written notes, no place for binding rules | Memory | vendor documentation of both harnesses | accepted |
| 27, 28 | Skill: Wissensbasis + Kontext → Folien; Hands-on 2 | Beispiel: vom Wissen zum Skill (title to revise) | knowledge becomes a pitch and the proven procedure a skill | – | own prompts | accepted |
| 29 | Skills: ein Pitch-Skill | same | stored procedural knowledge, loaded on demand | Skill, progressive disclosure | Agent Skills specification; vendor documentation | accepted |
| 30 | MCP & RAG & Memory | same | four ways to extend an agent beyond its model | MCP, RAG | MCP specification; Lewis et al. 2020 | accepted |
| 31 | Context Engineering | same | design what stands in the context window, in four stages | Context Engineering | Mei et al. 2025 (part); Anthropic 2025 | draft |
| 32 | Session 2 | Session 2: Knowledge Engineering | – | – | – | accepted |
| 33 | Agentic Engineering im Überblick | same | five levels from prompt to factory | Agentic Engineering, Harness, Loop, Factory | scheme and Factory open | accepted |
| 34 | KI-Governance auf zwei Ebenen | same | data and agent level; Rule of Two as core rule | KI-Governance, Rule of Two, prompt injection | Meta AI 2025; Greshake et al. 2023; Liu 2026; data level open | draft |
| 35 | Permission Modes und Autonomie | same | modes set autonomy, only deny rules and hooks enforce | Permission Mode | vendor documentation; Feng et al. 2025 | accepted |
| 36 | Hook: nur im Projektordner arbeiten | same | a hook is enforced, a rule can be overlooked | Hook, Sandbox | vendor documentation; Saltzer and Schroeder 1975 | accepted |
| 37 | Knowledge Engineering | same | explicit, revisable project knowledge becomes precise requirements | Knowledge Engineering, PIM, Projektmanagement, Wissensmodellierung | Studer et al. 1998; Allen et al. 2023; Jones et al. 2017; PM² guide | draft |
| 38 | Docling: Vom PDF zum Wissensdokument | same | local conversion preserves structure for distillation | Docling, OCR | Auer et al. 2024; Docling documentation | draft |
| 39 | Promptotyping Documents | same | knowledge documents by kind of knowledge: declarative, process, action | Promptotyping Documents | Promptotyping specification | draft |
| 40 | Obsidian | same | Markdown files in a local vault, on three levels of use | Obsidian, Vault | Obsidian help | accepted |
| 41 | How Steph Ango uses Obsidian | same | one possible style; choose, write down, revise own rules | – | Ango, How I use Obsidian | accepted |
| 42 | Das Wissensdokument im Vault | same | head, body and relations make the vault queryable | Frontmatter, YAML, Wikilink, Backlink | Obsidian help; YAML 1.2.2 | draft |
| 43 | Tags und Tag-Taxonomie | same | a controlled vocabulary prevents synonyms and drift | Tag-Taxonomie | NISO Z39.19 | draft |
| 44 | Maps of Content | same | curated entry points as navigation for agents | Map of Content | LYT MOCs (unchecked) | draft |
| 45 | Hands-on 3: Die Wissensbasis wird ein Obsidian-Vault | Beispiel: der Vault | three checked steps from folder to vault | – | own prompts | draft |
| 46 | Kuratieren: Struktur und Inhalt | same | structural curation is checkable, content curation is judgement | Kuratieren | DCC lifecycle (analogy) | draft |
| 47 | Vault-Governance | same | the vault's rules in files that human and agent read | Vault-Governance | Karpathy 2026; Ango | draft |
| 48 | Session 3 | Session 3: Agentic Engineering | – | – | – | accepted |
| 49 | Fancy Research Tools | fancy (research) tools & workflows (page renamed 2026-11-05) | small tools and workflows from a maintained knowledge base, bearer per step | fancy (research) tools & workflows | provider page; five steps own | draft |
| 50 | Loop Engineering | same | design the system that triggers and checks the agent | Loop Engineering | Anthropic 2024, 2025; hooks documentation; term open | draft |
| 51 | Subagents und Workflows | same | workflows fix the path, agents choose it; more agents cost more | Workflow, Subagent, Dynamic Workflow | Anthropic 2024, 2025, 2026; OpenAI 2026 | accepted |
| 52 | Determinismus so weit wie möglich ausreizen | same | what a script can do, a script does | deterministisch, probabilistisch | Gao et al. 2023 | draft |
| 53 | Qualität sichern | same | checks, independent review and human acceptance | LLM-as-a-Judge, Human in the Loop | Zheng et al. 2023; Software Engineering at Google; Wei 2025 | draft |
| 54 | Hands-on 4: Ein Analysewerkzeug aus Excel-Daten | Beispiel: ein Analysewerkzeug | figures computed by script and checked against a reference | – | Northwind (MIT) | draft |
| 55 | Ausblick: Vorlagen für die eigene Arbeit | same, last section of Session 3 | four templates as research previews | – | provider repositories | draft |
| 56 | Anhang | left out | – | – | – | – |
| 57 | Vibe Coding & Agentic (Knowledge and Research) Engineering | Weiterführend | unchecked generation versus designed and checked agent work | Vibe Coding, Agentic Engineering | Karpathy 2025; Willison 2026; Hassan et al. 2025; Allen et al. 2023 | accepted |
| 58 | Frontier-LLMs amplifizieren computergestützte Wissensarbeit | Weiterführend | benchmarks, results and positions on self-improvement | Benchmark, Recursive Self-Improvement | Kwa et al. 2025; Jimenez et al. 2024; Merrill et al. 2026; AI 2027 | accepted |
| 59–62 | CLAUDE.md prompts, commands, compress | left out | – | – | – | accepted |
| 63 | AI Watermarking | Weiterführend | a watermark is an indication, never proof; AI Act Art. 50 | Watermarking, C2PA | Dathathri et al. 2024; Kirchenbauer et al. 2023; Bui et al. 2023; C2PA; Reg. 2024/1689 and 2026/1744 | draft |
| – | – | Schluss (own) | knowledge, context and a checking environment meet in one practice | – | – | – |

## Phases

1. **Inventory.** Export all slide texts and speaker notes with slide IDs. Read the UFL lecture notes, the Full Lecture Notes and two existing posts (Asymmetric Amplification, System 1.42) for front matter, footnote style, image handling and register. Done when the inventory file lists every slide with its text and notes.
2. **Mapping and check script.** Extend the table above with core claim, terms and source per section. Write a small script that compares deck slide titles with the post's level-3 headings in order and reports missing or reordered sections. Done when the script passes on the outline.
3. **Decisions.** The operator settles the open points.
4. **Outline for acceptance.** Opening, sections with core claim and sources, Weiterführend, close. No running text before acceptance.
5. **Writing in three passes,** one per session: condense and write from the lecture notes, read and cite sources, check against the writing-style rules, an independent reader agent reads without the author's reasoning, the operator accepts. Opening and close come last.
6. **Literature.** Every definition gets a primary source read in full. Sources gathered on 2026-11-04 include Mei et al. (2025), Karpathy (2026), Anthropic (2024, 2025, 2026) on agents and workflows, Dathathri et al. (2024), Auer et al. (2024), Liu (2026) and Meta AI (2025). Additions go through the Zotero group agki-dh after a duplicate check.
7. **Implementation.** Post file in `src/content/blog/` with citation and Dublin Core front matter, entry and DE/EN teasers in `src/i18n/blog.ts`, preview image, `npm run build`, `npx tsc --noEmit`, browser preview, link check, journal entry, local commit. Publication needs the operator's push.
8. **Alignment.** Maintenance rule in the KCAE repository: a slide change changes its section, checked by the script from phase 2. KCAE Lecture Notes card, register and `CLAUDE.md` switch to the post once it is accepted. The UFL lecture notes stay until the workshop and point to the post afterwards.

## Grounding with Grounded Vault

The post is written inside its own Grounded Vault instance, so that every substantive statement carries a resolvable anchor to the passage that supports it. The template is the repository `grounded-vault` (`SETUP.md` instantiates it).

- **Place.** A separate, private instance repository, for example `kcae-blogpost-vault`. The public site repository `dhcraft-site` receives only the finished post, because `00_sources` holds third-party originals whose rights are not cleared for publication.
- **Chain.** `00_sources` holds the sources as they arrived, `10_markdown` their Markdown representations (Docling for PDFs), `20_distillates` one distillate per source, `30_assertions` one file per claim of the post with its source anchor, and `40_output` one chapter file per blog section, in the order of the structure mapping above.
- **Status.** Validation (`tools/validate.py`) checks resolvability and form, machine review (`tools/review.py`) checks whether a source passage supports a claim, and only the operator's verification establishes evidence. The post is published when every chapter validates and the operator has verified the assertions the definitions rest on.
- **Export.** A small script assembles the `40_output` chapters into the post file with footnotes, so the post and the vault never diverge.

## Research sweep with subagents

The research of 2026-11-04 covered a handful of concepts (context engineering, vault governance, loop engineering, watermarking, Docling, multi-agent orchestration). Most definitions still lack a read primary source. Before phase 5, one subagent per session researches the open concepts of its section in parallel, returns candidate sources with full-text access, and adds them to `00_sources` after a duplicate check against the Zotero group agki-dh. Each source is read in full before it anchors an assertion; candidates without accessible full text stay out. The main session checks every returned source against its text before it enters the vault.

## Dependencies

- Phase 5 writes against accepted slides. Phase 4 can start while slides are still in draft.
- The method pages of Second Brain Vault, Grounded Vault and Promptotyping must be published before the post links them.
