---
title: "Outline: Knowledge, Context and Agentic Engineering as a blog post"
created: 2026-11-04
updated: 2026-11-05
status: draft
related: [plan.md, deck-inventory.md, deck-slides.json, sources.md, grounding.md]
---

# Outline for acceptance

Phase 4 of `plan.md`, rebuilt on 2026-11-05 for deck revision Vgc4dbeUAt_ykg (84 slides). The headings below are the headings of the post, in German as the post will be. Under each heading stands its slide marker (checked by `scripts/kce-blogpost/check-structure.mjs`), the core claim, the terms it defines and the sources it rests on. Sources name distillates of the Grounded Vault instance `DHCraft/kce-blogpost-vault` by slug. "Pending" means a distillate is being written, "open" means no read source. A section on a slide that carries the draft marker gets assertions only and no running text.

The deck has no divider slide for Session 1, so the post adds its own level-2 header. The appendix contributes only the sections decided for "Weiterführend", and the post ends with its own close.

<!-- omitted: h2c7fc6986ae54bd6_0_0 h233dfacb5d8bd9eb_0_326 g2fd344f368c4a6b4_680 h2a76f1c8a73c47f4_4_432 -->

Slides 1–4 (title, DHCraft, Vorstellungsrunde, Materialien) are workshop logistics. The opening links the deck, the teaching line website, the glossary and the Zotero group agki-dh, which is all the reader needs from them.

## Eröffnung

Own section, no slide. Working with LLM-based AI agents has shifted from writing single prompts to designing the knowledge, context and environment in which an agent works, and the post follows the two-day workshop (Uni for Life, University of Graz, 9 and 10 November 2026) through that shift with one running example. Hands-on prompts stay verbatim. Points to the Promptotyping paper for the method and to Asymmetric Amplification for the broader argument, without repeating either. Written last.

### Lernziele und Ablauf
<!-- slides: h2c7fc6986ae54bd6_12_113 -->

Slide 5, accepted. Core claim: Agentic engineering lets AI agents work while people set goal, limits and acceptance, and it is approached through four disciplines: prompt engineering (goal, constraints, intermediate steps), context engineering (what the agent has in front of it at each step), knowledge engineering (project knowledge in documents that human and agent read, check and continue) and harness engineering (tools, permissions and checks). Times drop out.

Terms: Agentic Engineering, Prompt Engineering, Context Engineering, Knowledge Engineering, Harness Engineering (overview only).
Sources: The slide's source is a video. The four disciplines are the workshop's framing, posit. Definitions are sourced in their sections.

### Aufbauendes Beispiel und Ablauf
<!-- slides: h2c7fc6986ae54bd6_12_187 -->

Slide 6, accepted. Core claim: One knowledge base on agentic engineering and governance with a browser interface grows step by step across the post. Care is needed with personal and sensitive data (GDPR) and uses that fall under the EU AI Act. Model and quota advice drops out.

Terms: none new
Sources: Regulation (EU) 2024/1689 named only (eu-2024-ai-act once distilled).

## Session 1

Own header, the deck has no divider slide for Session 1.

### „Few-shotted for Breakfast“
<!-- slides: h2c7fc6986ae54bd6_0_68 -->

Slide 7, accepted. Core claim: Practitioners at the frontier report that projects of weeks now take a morning, and describe a new layer of abstraction (agents, subagents, context, memory, permissions, skills, hooks, MCP) without a manual.

Terms: few-shot (origin of the pun)
Sources: Karpathy posts of 26 December 2025 and 1 November 2026 (weiterfuehrend package); brown-2020-few-shot-learners.

### fancy (research) tools & workflows
<!-- slides: h2c7fc6986ae54bd6_28_105 -->

Slide 8, accepted. Core claim: Small research tools and workflows that coding agents build from a maintained knowledge base, mostly static browser applications. The slide lists the provider's own tools as examples.

Terms: fancy (research) tools & workflows
Sources: dhcraft-2026-fancy-research-tools (provider's own page, copy rules CR-01 to CR-07 apply).

### Jagged Alien Intelligences
<!-- slides: h2c7fc6986ae54bd6_12_95; renamed -->

Slide 9, accepted. Core claim: LLM capabilities are uneven, and their properties (probabilistic output, confabulation, bias, opacity, sycophancy, a world model of their own, tool use, context window, knowledge cut-off without continual learning, reasoning as extra tokens) decide how to work with them.

Terms: LLM, Jaggedness, Konfabulation, Bias, Sycophancy, Knowledge Cut-off, Reasoning
Sources: gans-2026-jagged-intelligence; shanahan-2023-talking-about-llms; farquhar-2024-semantic-entropy; ji-2023-hallucination-survey; gallegos-2024-bias-fairness; sharma-2023-sycophancy; lindsey-2025-biology-llm; cheng-2024-dated-data; wu-2024-continual-learning; snell-2024-test-time-compute. Dell'Acqua et al. (2026) cited on the slide has no accessible full text. Summerfield (2025) not read.

### Claude Code in der Claude Desktop App
<!-- slides: h2c7fc6986ae54bd6_12_201 -->

Slide 10, accepted. Core claim: An AI harness is the software around an LLM that runs the agent loop, provides context and tools and enforces limits. The interface of one harness makes the concepts visible (tool calls, slash commands, connectors, model and effort choice, permission mode, usage and context display), dated to November 2026.

Terms: AI Harness, Slash Command, Connector
Sources: zhong-2026-harness-engineering; liu-2026-agent-harness; anthropic-2026-explore-context-window; anthropic-2026-permission-modes.

### Prompt Engineering ist so 2025!
<!-- slides: h2a76f1c8a73c47f4_4_29 -->

Slide 11, accepted. Core claim: The first prompt of the running example, decomposed into task, constraints, context built by questions, process control by milestones and register. Quality comes increasingly from context and from the environment that steers and checks the work.

Terms: Prompt Engineering
Sources: Prompting docs (session-1 package, pending); the claim on the form of a prompt is open.

### Beispiel: Webrecherche und Wissensdokumente
<!-- slides: h51448df817bc677_0_5 h51448df817bc677_0_54; renamed -->

Slide 12, 13, accepted. Core claim: The first hands-on, verbatim: an empty folder, a session with access to it, the prompt, and what happens (tool calls, questions, stops). The result of one run shows the folders the prompt set and the files the agent added on its own.

Terms: none new
Sources: Own prompts, posit.

### Markdown
<!-- slides: h2c7fc6986ae54bd6_38_43 -->

Slide 14, accepted. Core claim: Markdown expresses document structure in plain text with few characters. Tokens are the units LLMs process and the measure of cost and context, the tokenizer depends on the model.

Terms: Markdown, Token, Tokenizer
Sources: sennrich-2016-subword-units; Gruber (2004) and token counting docs pending. The token comparison with Word XML is open.

### AI Agent & Tool Use
<!-- slides: h51448df817bc677_0_41 -->

Slide 15, accepted. Core claim: An AI agent is a system in which an LLM chooses the next action step by step towards a set goal, including tool calls that software outside the model executes. The result feeds the next decision.

Terms: AI Agent, Tool Use
Sources: anthropic-2024-building-effective-agents (document); sapkota-2025-agents-vs-agentic-ai; yao-2023-react.

### Subagents
<!-- slides: h51448df817bc677_0_31 -->

Slide 16, accepted. Core claim: A subagent receives a bounded task from another agent, works with its own context window, instructions, tools and model, and returns only the result. It suits large, bounded tasks and independent review.

Terms: Subagent, LLM-as-a-Judge
Sources: anthropic-2026-custom-subagents; zheng-2023-llm-as-a-judge; anthropic-2025-multi-agent-research.

### Beispiel: Wissensdokumente destillieren
<!-- slides: h51448df817bc677_0_106; renamed -->

Slide 17, accepted. Core claim: The second hands-on, verbatim: guiding questions, distillation of every source by subagents, revision of knowledge/, and a curation round. A knowledge document is defined here.

Terms: Wissensdokument, Destillieren, Kuratieren
Sources: karpathy-2026-llm-wiki (document); dhcraft-2026-promptotyping-convention.

### Context Window managen
<!-- slides: h51448df817bc677_0_130 -->

Slide 18, accepted. Core claim: Input and output share the context window, performance degrades with input length long before it is full, and compaction can lose what existed only in conversation.

Terms: Context Window, Context Rot, /context, /compact
Sources: anthropic-2026-explore-context-window; anthropic-2025-effective-context-engineering (document); context rot report (pending).

### AGENTS.md / CLAUDE.md
<!-- slides: h2a76f1c8a73c47f4_4_633 -->

Slide 19, accepted. Core claim: Markdown files with durable instructions that the harness loads at every session and after compaction, on a global and a project level.

Terms: AGENTS.md, CLAUDE.md, /init
Sources: agents-md (document); anthropic-2026-claude-code-memory.

### Beispiel: Wissensbasis nutzen
<!-- slides: h51448df817bc677_0_157; renamed -->

Slide 20, accepted. Core claim: The third hands-on, verbatim: answering only from knowledge/ and sources/ with the file for every statement. Agents retrieve by searching the terminal with full-text search and regular expressions.

Terms: Retrieval
Sources: anthropic-2025-effective-context-engineering (document) for agentic retrieval.

### KI-Governance auf zwei Ebenen
<!-- slides: gm_slide -->

Slide 21, accepted. Core claim: Governance for agents concerns data and the agent itself, with questions of visibility, classification, jurisdiction, access and evidence on both levels.

Terms: KI-Governance
Sources: The slide's source is a video. Liu (2026) covers the agent level only. The data level and its five questions are open.

### Permission Modes und Autonomie
<!-- slides: za_slide -->

Slide 22, accepted. Core claim: Claude Code works with the user's rights, and the permission mode sets what the agent does without asking. In auto mode a classifier judges actions and can err, a fixed boundary needs a rule in the settings, and some areas are never changed without asking.

Terms: Permission Mode, Autonomie
Sources: anthropic-2026-permission-modes; feng-2025-levels-of-autonomy.

### Autonomie und Zugriff
<!-- slides: gm2_slide -->

Slide 23, accepted. Core claim: Autonomy and access of an agent as governance dimensions of the harness, after the UNU Macau technology report.

Terms: Rule of Two, Prompt Injection (if the slide's figure carries them)
Sources: liu-2026-agent-harness; meta-2025-agents-rule-of-two (document); greshake-2023-indirect-prompt-injection.

### AI Slop & De-Slopification
<!-- slides: h51448df817bc677_0_213 -->

Slide 24, accepted. Core claim: AI slop is low-quality AI-generated content, and even good results carry traces of it when taken over unchecked. De-slopification recognises and removes these traces before passing a result on.

Terms: AI Slop, De-Slopification
Sources: shaib-2025-ai-slop (text only, applied to interfaces as an extension).

### Skills: ein PDF-Skill
<!-- slides: h51448df817bc677_0_247 -->

Slide 25, accepted. Core claim: A skill is stored procedural knowledge, a Markdown file with name and description in the header and the instructions below, optionally with scripts. The harness loads only the description until a task matches, unlike CLAUDE.md.

Terms: Skill, progressive disclosure
Sources: agentskills-2026-specification; anthropic-2026-agent-skills-overview.

### Zwischenfazit
<!-- slides: h51448df817bc677_0_180 -->

Slide 26, accepted. Core claim: Recap of Session 1 as a term map (LLM, agent and harness, prompt, knowledge and context engineering, governance) with the session's open questions for the reader.

Terms: none new
Sources: Recap, posit.

## Session 2
<!-- slides: h51448df817bc677_0_257 -->

Divider.

### Beispiel: Wissensdashboard
<!-- slides: h2a76f1c8a73c47f4_4_2; renamed -->

Slide 28, accepted. Core claim: The fourth hands-on, verbatim: a plan with milestones for a dashboard over the knowledge base, a static single-page application generated from knowledge/ and sources/ by a script.

Terms: Implementierungsplan, Meilenstein
Sources: Own prompt, posit.

### Die erste Iteration des Dashboards
<!-- slides: h2a76f1c8a73c47f4_4_49 -->

Slide 29, accepted. Core claim: The page consists of HTML, CSS, JavaScript and data that a script generates, and opens by double-click. Small tools whose results one can check oneself may be vibe coded at one's own responsibility.

Terms: Vibe Coding (first mention)
Sources: Own example; vibe coding sourced in its section.

### Beispiel: Follow-Up Prompts zum Dashboard
<!-- slides: h2a76f1c8a73c47f4_4_80; renamed -->

Slide 30, accepted. Core claim: Feedback, self-verification and self-refinement, a subagent as LLM-as-a-Judge, refactoring and bringing knowledge/ up to date, verbatim.

Terms: Self-Verification, Self-Refine, LLM-as-a-Judge, Refactoring
Sources: madaan-2023-self-refine; weng-2023-self-verification; zheng-2023-llm-as-a-judge.

### Agentic Governance Workspace
<!-- slides: h51448df817bc677_0_330 -->

Slide 31, accepted. Core claim: A worked example of the provider: the dashboard pattern grown into a governance workspace.

Terms: none new
Sources: Provider's own page, link only.

### Computational Thinking
<!-- slides: ct_slide -->

Slide 32, accepted. Core claim: Computational Thinking is the ability to formulate, abstract and decompose a problem and its solution so that an executing agent can carry it out, and to judge whether the result holds. An LLM fills gaps silently where a compiler once enforced precision. Agents increasingly decompose, formulating and checking stay with the human.

Terms: Computational Thinking (working definition in the line of Wing 2006 and 2008 and Shute et al. 2017, marked as such)
Sources: Wing (2006); Wing (2008); Shute, Sun and Asbell-Clarke (2017), as recorded by the operator's session of 2026-11-05 in sources.md; not yet distilled into the vault.

### Vibe Coding, Agentic Engineering und Promptotyping
<!-- slides: h51448df817bc677_0_1695 -->

Slide 33, accepted. Core claim: Vibe coding, agentic engineering and Promptotyping are three ways of working that differ in how much checking and recorded project knowledge they demand. Vibe coding takes over generated code unread and suits work where little is at stake. Agentic engineering has coding agents write, run and revise code while people provide tools, specify problems, weigh solutions and check the result. Promptotyping builds on agentic engineering, checks its project knowledge against the sources and leaves scholarly validation with the researchers.

Terms: Vibe Coding, Agentic Engineering, Promptotyping
Sources: Karpathy (2025) vibe coding post; willison-2026-agentic-engineering; Willison (2025); Pollin (2026), Promptotyping paper version 1.0; pollin-2026-promptotyping; hassan-2025-agentic-software-engineering as neighbour. Operator's section of 2026-11-05.

### Wissensmodellierung
<!-- slides: h51448df817bc677_0_822 -->

Slide 34, accepted. Core claim: Three established fields contribute to knowledge engineering: knowledge modelling (identify, represent and make queryable the concepts of a domain), personal information management (handling one's own information across formats and places, core problem fragmentation) and project management.

Terms: Wissensmodellierung, Personal Information Management, Projektmanagement
Sources: studer-1998-knowledge-engineering; allen-2023-knowledge-engineering-llms; jones-2017-personal-information-management; european-commission-2023-pm2-guide. The step sequence after Russell and Norvig is open.

### Agentisches Wissensmanagement
<!-- slides: h51448df817bc677_0_1730 -->

Slide 35, accepted. Core claim: Obsidian stores notes as Markdown files in a local folder, the vault, so a coding agent can read and edit them directly. Links, tags and folders form relations adaptable to a domain, and the vault serves knowledge modelling, personal information and project management.

Terms: Obsidian, Vault
Sources: obsidian-2026-create-vault; obsidian-2026-internal-links; obsidian-2026-properties.

### How Steph Ango uses Obsidian
<!-- slides: h2a76f1c8a73c47f4_4_933 -->

Slide 36, accepted. Core claim: The vault style of Obsidian's chief executive is one possible style, minimalist and link-based, and a starting point for one's own rules. Named as cited author of the linked text.

Terms: none new
Sources: ango-how-i-use-obsidian (document). His role is not stated in his text.

### Git und GitHub
<!-- slides: h51448df817bc677_0_1600 -->

Slide 37, accepted. Core claim: Git records every state of a project, a commit saves a state with a message, a tag marks a released state, and GitHub hosts repositories. Every agent step becomes traceable and reversible. Push and publication stay with the human.

Terms: Git, Commit, Tag, GitHub, Push
Sources: chacon-2014-pro-git; anthropic-2025-long-running-harnesses.

### Beispiel: Wissens-Vault bauen
<!-- slides: h51448df817bc677_0_324; renamed -->

Slide 38, accepted. Core claim: The fifth hands-on, verbatim: the folder becomes an Obsidian vault in three prompts (plan, build, curate). The more complex a project, the more knowledge structure it needs, which is the workshop's thesis.

Terms: none new
Sources: Own prompts, posit.

### Das Wissensdokument im Vault
<!-- slides: wv_slide -->

Slide 39, draft. Core claim: In the vault a knowledge document gains a head (YAML front matter), tags from a controlled vocabulary and relations (wikilinks under Related).

Terms: Frontmatter, YAML, Tag-Taxonomie, Wikilink
Sources: obsidian-2026-properties; yaml-2021-yaml-1-2-2; niso-2005-z39-19; obsidian-2026-internal-links; obsidian-2026-backlinks.

### Aufbau des Vaults
<!-- slides: vg_slide -->

Slide 40, draft. Core claim: HOME.md, ACTIVE-WORK.md, TAG-TAXONOMY.md and CLAUDE.md structure the vault. A map of content is an entry point that gathers links to related documents and serves agents as navigation, because a larger vault does not fit the context window.

Terms: Map of Content, Vault-Governance
Sources: lyt-2026-mocs; karpathy-2026-llm-wiki (document).

### Mit dem Vault arbeiten
<!-- slides: h51448df817bc677_0_338 -->

Slide 41, accepted. Core claim: What one does with a vault and an agent: find, link, integrate, ask, find connections, continue work, curate.

Terms: Kuratieren
Sources: higgins-2008-dcc-curation-lifecycle as analogy; otherwise own practice, posit.

## Session 3
<!-- slides: h51448df817bc677_0_564 -->

Divider.

### Frontier-LLMs amplifizieren computergestützte Wissensarbeit
<!-- slides: h2a76f1c8a73c47f4_4_717 -->

Slide 43, accepted. Core claim: Benchmarks measure what models solve and where they fail, research results and incidents show capabilities and control problems under specific conditions, and the slide holds recursive self-improvement very likely.

Terms: Benchmark, Recursive Self-Improvement
Sources: kwa-2025-time-horizons; jimenez-2024-swe-bench; merrill-2026-terminal-bench; ARC-AGI-3 and SimpleBench (pending); kokotajlo-2025-ai-2027 as scenario. A scholarly definition of recursive self-improvement is open.

### Agentic Engineering: was das Modell umgibt und was es davon sieht
<!-- slides: ae_slide -->

Slide 44, accepted. Core claim: Context engineering and harness engineering together shape what surrounds the model and what of it enters the context window: project files, memory and skills on one side, harness, tools, permissions and hooks on the other, each with what is loaded at start and what on demand.

Terms: Context Engineering, Harness Engineering, Memory
Sources: mei-2025-context-engineering-survey; anthropic-2025-effective-context-engineering (document); anthropic-2026-claude-code-memory; openai-2026-memories; agentskills-2026-specification; zhong-2026-harness-engineering.

### Model Context Protocol (MCP)
<!-- slides: h2a76f1c8a73c47f4_4_905 -->

Slide 45, accepted. Core claim: MCP is an open standard through which an LLM is connected to other programs and data sources, which offer tools, resources and prompts through an MCP server.

Terms: MCP, Tool, Resource, Prompt
Sources: mcp-2025-specification.

### Agentic Search: suchen wie im Terminal
<!-- slides: h51448df817bc677_0_551 -->

Slide 46, accepted. Core claim: For a Markdown knowledge base a coding agent mostly needs no vector database. RAG splits documents in advance and retrieves by similarity, agentic search greps for words and patterns and reads the files found.

Terms: RAG, Agentic Search, Vektordatenbank
Sources: lewis-2020-rag; anthropic-2025-effective-context-engineering (document).

### Beispiel: Eine Anfrage mit Excel-Daten
<!-- slides: h6a_slide; renamed -->

Slide 47, accepted. Core claim: The sixth hands-on, first part, verbatim: a request with four Excel files arrives, the agent reads the vault's rules and checks the request against its own governance. Personal data were removed from the material.

Terms: none new
Sources: Own prompts; microsoft-2026-northwind-pubs and microsoft-2026-sql-server-samples-license for the data.

### Beispiel: Die Daten im Dashboard
<!-- slides: h6b_slide; renamed -->

Slide 48, accepted. Core claim: The sixth hands-on, second part, verbatim: a data view planned in plan mode and every figure recomputed against the Excel files.

Terms: none new
Sources: Own prompts; gao-2023-pal for script-computed figures.

### Subagents, Agent Teams und Dynamic Workflows
<!-- slides: h51448df817bc677_0_613; renamed -->

Slide 49, accepted. Core claim: A main agent hands subtasks to helpers with their own context window, agent teams coordinate independent sessions through a shared task list, and dynamic workflows let a script fix the process and steer many subagents. More agents cost more tokens.

Terms: Subagent, Agent Team, Dynamic Workflow
Sources: anthropic-2026-custom-subagents; anthropic-2026-dynamic-workflows; anthropic-2025-multi-agent-research; anthropic-2026-cross-session-messaging; openai-2026-codex-subagents; anthropic-2024-building-effective-agents (document). Agent teams docs not distilled.

### Qualität sichern: Skript, wo möglich, Urteil, wo nötig
<!-- slides: qs_slide -->

Slide 50, accepted. Core claim: Deterministic checks (computing by script, every found error becomes a test, hooks, versioning) and judgement (review by a second agent, human acceptance, release by the human). What a script can check, a script checks.

Terms: deterministisch, probabilistisch, Review, Abnahme
Sources: gao-2023-pal; bender-2020-testing-overview; zheng-2023-llm-as-a-judge; wei-2025-asymmetry-of-verification; chacon-2014-pro-git.

### Test Driven Development (TDD)
<!-- slides: h51448df817bc677_0_397 -->

Slide 51, accepted. Core claim: In test-driven development the test exists before the code, first failing, then passing. For coding agents tests prevent non-working and unneeded code.

Terms: Test Driven Development
Sources: Willison, Red/green TDD (not distilled); bender-2020-testing-overview.

### Hook: nur im Projektordner arbeiten
<!-- slides: hk_slide -->

Slide 52, accepted. Core claim: A hook is a script the harness runs on an event and that can block a tool call. A rule in CLAUDE.md is read by the agent, a hook is enforced by the harness, within limits.

Terms: Hook, Sandbox
Sources: anthropic-2026-hooks-reference; anthropic-2026-hooks-guide; anthropic-2026-sandboxing (the sandbox is no complete isolation boundary).

### Docling: Dokumente als Markdown
<!-- slides: dl_slide -->

Slide 53, draft. Core claim: Docling converts documents locally into structured Markdown or JSON and preserves headings, reading order and tables.

Terms: Docling, OCR
Sources: auer-2024-docling-technical-report; docling-2026-documentation.

### Open Models: das Modell im eigenen Haus
<!-- slides: h51448df817bc677_0_469 -->

Slide 54, accepted. Core claim: Open-weight models can be downloaded and run on own hardware, which keeps data local and allows adaptation, at the cost of capability and of hardware and operation.

Terms: Open-Weight-Modell, Boring AI
Sources: Open, no source distilled.

### Eigene Pipelines: der Agent baut, das lokale Modell arbeitet
<!-- slides: lw_slide -->

Slide 55, accepted. Core claim: Three pipelines that a coding agent built and measured, running locally with a check script and human release.

Terms: none new
Sources: Provider's own measurements, posit with open evidence question.

### Promptotyping
<!-- slides: h51448df817bc677_0_1687 h51448df817bc677_0_651; renamed -->

Slide 56, 57, accepted. Core claim: Promptotyping is a working practice that translates research data and their contexts into artefacts that fit the questions and ways of working of researchers. The section places the practice and links the paper and the two introduction videos.

Terms: Promptotyping
Sources: pollin-2026-promptotyping; Pollin (2026) paper.

### Was Sie gemacht haben: ein Durchlauf Promptotyping
<!-- slides: ptc_slide -->

Slide 58, accepted. Core claim: The hands-ons map onto the phases of Promptotyping (preparation, exploration, distillation, implementation, verification), and the documents produced fall into declarative, process and action documents.

Terms: declarative knowledge documents, process knowledge documents, agent instruction documents (names after the Promptotyping paper 1.0; Declarative, Process and Action Documents are the short names of the site, decision of 2026-11-05)
Sources: dhcraft-2026-promptotyping-convention; dhcraft-2026-promptotyping-glossary (class now named Knowledge Document).

### Loop Engineering
<!-- slides: lp_slide -->

Slide 59, draft. Core claim: Loop engineering designs the system that triggers and checks the agent instead of prompting it by hand (trigger, agent, check script, human release).

Terms: Loop Engineering
Sources: anthropic-2024-building-effective-agents (document); anthropic-2026-hooks-guide; anthropic-2025-long-running-harnesses. The term itself is open.

### Research Mission Control
<!-- slides: h51448df817bc677_0_1715 -->

Slide 60, accepted. Core claim: Roles and handovers for several agents and work strands, a research preview of the provider.

Terms: none new
Sources: dhcraft-2026-research-mission-control.

### Second Brain Vault
<!-- slides: sbv_slide -->

Slide 61, accepted. Core claim: A maintained Obsidian vault holds ideas, reading and relations between projects, project repositories hold their knowledge in knowledge/, and the agent follows explicit references between both.

Terms: none new
Sources: pollin-2026-second-brain-vault.

### Grounded Vault
<!-- slides: gvt_slide -->

Slide 62, accepted. Core claim: An architecture for knowledge bases in which every substantive statement carries a machine-readable anchor to its source, as a chain of five checkable layers. The architecture claims nothing about truth, the result is an audit object.

Terms: Provenienz
Sources: dhcraft-2026-grounded-vault.

### Agentic Edition Pipeline
<!-- slides: aep_slide -->

Slide 63, accepted. Core claim: A repository template for digital editions in which a knowledge base records the edition's decisions and scripts, prompts and data contracts run the steps. Research preview.

Terms: none new
Sources: Provider's repository, not distilled.

### Asymmetrische Amplifikation: KI verstärkt, was schon da ist
<!-- slides: ad_slide -->

Slide 64, accepted. Core claim: The same systems amplify existing capabilities and deficits: whoever can check results gains autonomy, whoever cannot becomes dependent. A field experiment shows a counter-finding for tasks inside the frontier. Closing discussion of the workshop.

Terms: Asymmetric Amplification
Sources: Asymmetric Amplification (own post, link); Dell'Acqua et al. (2026) has no accessible full text, so the counter-finding is open.

## Weiterführend

Own section header, two short subsections from the appendix.

<!-- omitted: h2a76f1c8a73c47f4_4_120 pd_slide -->

Slide 65 is the appendix divider. Slide 66 (Promptotyping Documents) is carried by the section on slide 58.

### Vibe Coding & Agentic (Knowledge and Research) Engineering
<!-- slides: h51448df817bc677_0_286 -->

Slide 67, accepted. Core claim: The appendix slide keeps the earlier term definitions. The post replaces them by the section on slide 33 and keeps here only what slide 33 does not cover. The working term Agentic (Knowledge and Research) Engineering is dropped (operator decision of 2026-11-05).

Terms: none new
Sources: See slide 33.

<!-- omitted: h2a76f1c8a73c47f4_4_1133 -->

Slide 68 (commands) is operational.

### AI Watermarking
<!-- slides: h2a76f1c8a73c47f4_4_1252 -->

Slide 69, draft. Core claim: Text watermarks bias token choice with a secret key and are detected statistically, weakened by paraphrase, image watermarks hide a bit string that a decoder reads back. A watermark is an indication and never proof. Art. 50 AI Act requires machine-readable marking from 2 August 2026, for systems already on the market from 2 December 2026 (Regulation (EU) 2026/1744). Figure: Dathathri et al. (2024), Fig. 1, CC BY 4.0.

Terms: Watermarking, C2PA
Sources: dathathri-2024-synthid-text; kirchenbauer-2023-watermark; bui-2023-trustmark; c2pa-2025-specification-2-2; the two EU regulations (pending).

<!-- omitted: h51448df817bc677_0_732 h51448df817bc677_0_740 h51448df817bc677_0_750 h51448df817bc677_0_971 h51448df817bc677_0_1041 h51448df817bc677_0_1112 h51448df817bc677_0_1180 h51448df817bc677_0_1249 h51448df817bc677_0_1327 h51448df817bc677_0_1396 h51448df817bc677_0_1465 h51448df817bc677_0_1532 h51448df817bc677_0_1605 h51448df817bc677_0_1613 h51448df817bc677_0_1619 -->

Slides 70–84 are appendix material outside the post: requirements engineering, early Promptotyping and vibe coding slides, A2A, agent skill, term list, model routing, the history of agents, a project example, two slides on explicit knowledge, persona engineering, AI coding literacy and a second Computational Thinking slide. Their content either duplicates a main section or lies outside the decided scope of "Weiterführend".

## Schluss

Own section, no slide. Knowledge, context and a checking environment meet in one practice, with release and responsibility staying with the human. Links the teaching line, the Zotero group and the templates, and invites reuse under CC BY 4.0. Written last.
