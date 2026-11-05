---
title: "Outline: Knowledge, Context and Agentic Engineering as a blog post"
created: 2026-11-04
status: draft
related: [plan.md, deck-inventory.md, deck-slides.json, sources.md, grounding.md]
---

# Outline for acceptance

Phase 4 of `plan.md`. The headings below are the headings of the post, in German as the post will be. Under each heading stands its slide marker (checked by `scripts/kcae-blogpost/check-structure.mjs`), the core claim the section has to carry, the terms it defines and the sources it rests on. Source status per term, including what was read only in part and what has no read source, is in `sources.md`. "Open" below means no read and checked source yet. No running text before acceptance.

Deviation from the mapping table in `plan.md`: "Ausblick: Vorlagen für die eigene Arbeit" stays the last section of Session 3, where it sits in the deck, and the post gets its own close after "Weiterführend". The script enforces deck order, and the close carries no slide.

<!-- omitted: h2c7fc6986ae54bd6_0_0 h233dfacb5d8bd9eb_0_326 g2fd344f368c4a6b4_680 h2a76f1c8a73c47f4_4_432 -->

Slides 1–4 (title, DHCraft, Vorstellungsrunde, Materialien) are workshop logistics. The opening links the deck, the teaching line website and the Zotero group agki-dh, which is all the reader needs from them.

## Eröffnung

Own section, no slide. Core claim: working with LLM-based AI agents has shifted from writing single prompts to designing the knowledge, context and environment in which an agent works, and the post follows a two-day workshop through that shift with one running example. It names the workshop (Uni for Life, University of Graz, 9 and 10 November 2026), links the deck and states that hands-on prompts stay verbatim. Points to the Promptotyping paper for the method and to Asymmetric Amplification for the broader argument, without repeating either.

### Lernziele und Ablauf
<!-- slides: h2c7fc6986ae54bd6_12_113 -->

Core claim: the workshop divides agentic work into three areas, each with one learning goal (explain how LLM, agent and harness interact and steer the agent; build and maintain project knowledge an agent can rely on; plan agentic workflows, check their results and transfer them). Times and Zoom drop out.

Terms: Prompt and Context Engineering, Knowledge Engineering, Agentic Engineering as section names only.
Sources: none needed.

### Begriffe im Workshop
<!-- slides: bg_slide -->

Core claim: the terms fall into four areas, with the LLM underneath all of them and governance across all of them. The section works as the post's term index and links each term to the section that defines it.

Terms: the full term list of the slide.
Sources: none here, each term is sourced where it is defined.

### Aufbauendes Beispiel und Ablauf
<!-- slides: h2c7fc6986ae54bd6_12_187 -->

Core claim: one knowledge base on agentic engineering and governance with a browser interface grows across all sections, so each concept is shown at the point where the example needs it. Two standing rules: the most expensive models are unnecessary for the exercises, and personal or sensitive data (GDPR) and uses regulated by the EU AI Act need care.

Terms: none new.
Sources: GDPR and AI Act only as named regulations (Regulation (EU) 2016/679, Regulation (EU) 2024/1689), open.

## Session 1: Prompt und Context Engineering
<!-- slides: sec1_slide; renamed -->

Divider. One sentence on what the session covers.

### „Few-shotted for Breakfast“
<!-- slides: h2c7fc6986ae54bd6_0_68 -->

Core claim: practitioners at the frontier report that projects that took weeks now take a morning, and at the same time describe a new layer of abstraction (agents, subagents, context, memory, permissions, skills, hooks, MCP) that comes without a manual. The section opens Session 1 with that tension.

Terms: few-shot (only as the pun's origin, defined under Prompt Engineering).
Sources: the two posts quoted in the speaker notes (Karpathy, 26 December 2025 and 1 November 2026); Brown et al. (2020) for "few-shot", read in part.

### Software … für alle!?
<!-- slides: h2c7fc6986ae54bd6_28_105 -->

Core claim: when an agent builds software from a description, buying standard software and building a small tool for one's own needs become comparable options, and the deciding question moves to who maintains and checks the tool afterwards.

Terms: none new.
Sources: Litt et al. (2025), malleable software. The maintenance question is the workshop's own.

### Jagged Alien Intelligences
<!-- slides: h2c7fc6986ae54bd6_12_95; renamed -->

Core claim: LLM capabilities are jagged, strong on some hard tasks and weak on some easy ones, and their properties (probabilistic output, confabulation, bias, opacity, sycophancy, a world model of their own, knowledge cut-off, no continual learning, reasoning as extra tokens) decide how to work with them.

Terms: LLM, jagged frontier, confabulation, bias, sycophancy, knowledge cut-off, reasoning model.
Sources: Gans (2026); Shanahan (2023); Farquhar et al. (2024) and Ji et al. (2023); Gallegos et al. (2024); Sharma et al. (2023); Lindsey et al. (2025); Cheng et al. (2024); Snell et al. (2024). Dell'Acqua et al. (2026) has no accessible full text and stays out until read. Summerfield (2025) not checked.

### LLM-basierte AI Agents
<!-- slides: h2a76f1c8a73c47f4_4_265 -->

Core claim: an AI agent uses an LLM to plan and choose actions, including tool calls, towards a set goal, feeds execution results back into its next steps and has bounded autonomy.

Terms: AI Agent.
Sources: Sapkota, Roumeliotis and Karkee (2025); Anthropic (2024). Xu et al. (2025) has no accessible full text.

### AI Harness
<!-- slides: h2a76f1c8a73c47f4_4_195 -->

Core claim: the harness is the software layer that runs the agent loop around a model, manages context and state, coordinates model calls and tools and enforces permissions and stop conditions, which is why the same model behaves differently in different harnesses.

Terms: AI Harness, Harness Engineering.
Sources: Zhong and Zhu (2026); Liu (2026); a practitioner anatomy of the agent harness (LangChain, 2026).

### Claude Code in der Claude Desktop App
<!-- slides: h2c7fc6986ae54bd6_12_201 -->

Core claim: the interface of one concrete harness makes the concepts visible (tool calls in the transcript, slash commands, connectors, model and effort choice, permission mode, usage and context display). Product details are dated to November 2026.

Terms: Slash Command, Connector, Plugin (short).
Sources: vendor documentation (permission modes, context window), dated November 2026.

### Beispiel: ein Projekt konfigurieren
<!-- slides: h2a76f1c8a73c47f4_4_2; renamed -->

Core claim: the first prompt of the running example, verbatim, sets task, constraints, clarifying questions, milestones and register. It is constructed to bundle the workshop's strategies. The reader watches which tools the agent calls, when it asks back and when it stops.

Terms: none new.
Sources: none, the prompt is the operator's own.

### Prompt Engineering ist so 2025!
<!-- slides: h2a76f1c8a73c47f4_4_29 -->

Core claim: the prompt decomposes into task, constraints, context built by questions, process control by milestones, and audience and style. With current models the form of a prompt matters less than goal, knowledge and success criteria, and quality increasingly comes from context and from the environment that steers and checks the work.

Terms: Prompt Engineering, few-shot examples, Context Engineering (forward reference), Harness Engineering (forward reference).
Sources: vendor prompting guides for success criteria and few-shot examples. The claim on the form of a prompt and the strategies of clarifying questions and milestones are open.

### Markdown
<!-- slides: h2c7fc6986ae54bd6_38_43 -->

Core claim: Markdown expresses document structure in plain text with few characters, which costs an LLM far fewer tokens than Word XML for the same structure. Tokens are the units LLMs process and are the measure of cost and context, and the tokenizer depends on the model.

Terms: Markdown, Token, Tokenizer.
Sources: Gruber (2004); Sennrich, Haddow and Birch (2016); vendor token-counting documentation. The token comparison with Word XML is open and is best shown by an own measurement.

### Wissensdokument
<!-- slides: h2c7fc6986ae54bd6_38_122 -->

Core claim: a knowledge document is a structured record of externalised knowledge, distilled from sources, data or experience for reuse by humans and agents, with statements traceable to evidence and assumptions made explicit. A good one is readable for both, compact, in an open format and curatable. In the example it is `knowledge/project.md`.

Terms: Wissensdokument, externalised knowledge.
Sources: Karpathy (2026), LLM Wiki; the Promptotyping specification for the document notion. Nonaka (1994) has no accessible full text.

### Tool Use: So bedient ein KI-Agent den Rechner
<!-- slides: h2a76f1c8a73c47f4_4_67 -->

Core claim: on a plain request the agent decides its own steps (list, change directory, read) and each result determines the next. This loop of decision, tool call and feedback distinguishes an agent from a chat.

Terms: Tool Use.
Sources: Yao et al. (2023), ReAct; Anthropic (2024).

### Die erste Iteration des Dashboards
<!-- slides: h2a76f1c8a73c47f4_4_49 -->

Core claim: the dashboard consists of HTML, CSS, JavaScript and JSON served by a local server. Simple technology is a deliberate choice, because small tools that can be read and checked serve non-developers best. Generic interface elements that LLMs add unasked (AI slop) are removed in every iteration.

Terms: AI Slop, De-Slopification (marked as working term), local server.
Sources: Shaib et al. (2025) for slop in text, applied here to interfaces.

### Beispiel: Feedback
<!-- slides: h2a76f1c8a73c47f4_4_80; renamed -->

Core claim: a first iteration is rarely finished. Asking the model to check its own result uses self-verification and self-refinement, and a subagent acting as reviewer gives an independent judgement (LLM-as-a-Judge). Prompts verbatim.

Terms: Self-Verification, Self-Refine, LLM-as-a-Judge.
Sources: Madaan et al. (2023); Weng et al. (2023); Zheng et al. (2023).

### Subagents: ein Reviewer Agent
<!-- slides: h2a76f1c8a73c47f4_4_680 -->

Core claim: a subagent is a separate agent instance with its own context window, instructions and tools. The main agent delegates and receives only the result, which pays off for output-heavy, self-contained or independently checked tasks. A custom subagent is a Markdown file with a short header, shown verbatim.

Terms: Subagent.
Sources: vendor documentation on subagents; Anthropic (2025) on multi-agent research.

### Beispiel: Refactoring und Kuratieren
<!-- slides: h2a76f1c8a73c47f4_4_99; renamed -->

Core claim: the same self-checking applies to code (refactoring) and to knowledge (curation), because LLM output always carries noise. Versioning with Git makes every state recoverable. Prompts verbatim.

Terms: Refactoring, Kuratieren (first mention, defined in Session 2), Git.
Sources: Pro Git for version control. Refactoring is open.

### Context Window managen
<!-- slides: h2a76f1c8a73c47f4_4_600 -->

Core claim: input and output share the context window, and performance degrades with input length long before the window is full (context rot). Compaction replaces the history by a summary and can lose what existed only in conversation, which is why durable knowledge belongs in documents.

Terms: Context Window, Context Rot, Context Compression.
Sources: vendor context-window documentation; Hong, Troynikov and Huber (2025); vendor documentation for compaction.

### AGENTS.md / CLAUDE.md
<!-- slides: h2a76f1c8a73c47f4_4_633 -->

Core claim: AGENTS.md and CLAUDE.md hold durable instructions (purpose, rules, pointers to knowledge) that the harness loads at every session and after compaction, on a global and a project level. Both examples verbatim.

Terms: AGENTS.md, CLAUDE.md.
Sources: agents.md; vendor memory documentation.

### Memory
<!-- slides: mem_slide -->

Core claim: memory consists of notes the agent derives from the work itself and reloads later. Binding rules belong in CLAUDE.md or AGENTS.md, because memory is maintained by the agent.

Terms: Memory.
Sources: vendor documentation of both harnesses. The slide's storage path and switch for the second harness need correcting (`sources.md`).

### Beispiel: vom Wissen zum Skill
<!-- slides: h2a76f1c8a73c47f4_4_869 hoA_slide; renamed -->

Core claim: the second hands-on transfers the collected knowledge to one's own organisation in four steps (guiding question by interview, content in the chat before a file, design feedback, the proven procedure saved as a skill). Releasing content before the file saves tokens. Slide 27 (Skill: Wissensbasis + Kontext → Folien) is merged here as its motivation.

Terms: none new.
Sources: none, prompts are the operator's own. The heading needs a title without the "Vom X zum Y" formula before writing (writing-style rule).

### Skills: ein Pitch-Skill
<!-- slides: sk_slide -->

Core claim: a skill is stored procedural knowledge, a `SKILL.md` with optional scripts and templates. The harness loads only its description until a task matches (progressive disclosure), unlike CLAUDE.md, which applies in every session. An agent-written skill is checked like any agent product.

Terms: Skill, progressive disclosure.
Sources: Agent Skills specification; vendor skills documentation.

### MCP & RAG & Memory
<!-- slides: h2a76f1c8a73c47f4_4_905 -->

Core claim: an agent gains knowledge and abilities beyond its model in four ways, skills, external services over the Model Context Protocol, retrieval-augmented generation and memory.

Terms: MCP, RAG.
Sources: Model Context Protocol specification; Lewis et al. (2020) for RAG in its original sense.

### Context Engineering
<!-- slides: ce_slide -->

Core claim: context engineering designs what stands in the context window (instructions, knowledge, tools, memory, the request), selected and condensed so the LLM works reliably in limited space. The four stages acquire, process, manage and apply follow the survey by Mei et al. (2025) and are filled with the methods the session has already used.

Terms: Context Engineering, retrieval without vector database, distillation, context compression, multi-agent context isolation.
Sources: Mei et al. (2025), read in part; Anthropic (2025) on context engineering.

## Session 2: Knowledge Engineering
<!-- slides: sec2_slide; renamed -->

Divider.

### Agentic Engineering im Überblick
<!-- slides: h2a76f1c8a73c47f4_4_1259 -->

Core claim: agentic engineering has five levels (prompt, knowledge and context, harness, loop, factory), and the post moves through them in this order.

Terms: Agentic Engineering, Harness, Loop, Factory.
Sources: the deck uses a video, which cannot anchor a definition. Zhong and Zhu (2026) for harness and Anthropic (2024) for loop cover two levels, the scheme as a whole and Factory are open.

### KI-Governance auf zwei Ebenen
<!-- slides: gm_slide -->

Core claim: governance for agents concerns data and the agent itself, with five questions on both levels (visibility, classification, jurisdiction, access, evidence). The core rule is the Rule of Two, at most two of processing untrusted content, accessing private data and changing state or communicating externally, otherwise a human decides.

Terms: KI-Governance, Rule of Two, prompt injection.
Sources: Meta AI (2025); Greshake et al. (2023) for prompt injection; Liu (2026) for the agent level. The data level and its five questions are open.

### Permission Modes und Autonomie
<!-- slides: za_slide -->

Core claim: permission modes set what an agent does without asking, from plan to bypass, and thereby answer the governance question of autonomy. A classifier judges risk in auto mode, but only a deny rule or a hook enforces a boundary.

Terms: Permission Mode, autonomy level, classifier.
Sources: vendor documentation; Feng, McDonald and Zhang (2025) for levels of autonomy.

### Hook: nur im Projektordner arbeiten
<!-- slides: hk_slide -->

Core claim: a hook is a script the harness runs on an event and that can block a tool call. A rule in CLAUDE.md can be overlooked, a hook is enforced, within limits (shell commands bypass a file-tool hook, full protection needs a sandbox). Configuration verbatim.

Terms: Hook, Sandbox, least privilege.
Sources: vendor hooks and sandboxing documentation; Saltzer and Schroeder (1975).

### Knowledge Engineering
<!-- slides: ke_slide -->

Core claim: knowledge engineering builds and maintains explicit, revisable project knowledge about data, purpose and decisions. Because a frontier LLM implements only as precisely as its specification, domain understanding turns into requirements. Three established fields contribute, personal information management, project management and knowledge modelling.

Terms: Knowledge Engineering, Personal Information Management, Projektmanagement, Wissensmodellierung.
Sources: Studer, Benjamins and Fensel (1998); Allen, Stork and Groth (2023); Jones et al. (2017); the PM² guide of the European Commission in place of Kuster et al. (2022), which has no accessible full text. The step sequence after Russell and Norvig (2020) is open.

### Docling: Vom PDF zum Wissensdokument
<!-- slides: dl_slide -->

Core claim: Docling converts documents locally into structured Markdown or JSON, preserving headings, reading order and tables, and so performs the knowledge-acquisition step, with a human choosing the source and checking the distillate.

Terms: Docling, OCR, DoclingDocument.
Sources: Auer et al. (2024); Docling documentation.

### Promptotyping Documents
<!-- slides: pd_slide -->

Core claim: Promptotyping documents are knowledge documents classified by the kind of knowledge they carry, declarative, process and action documents, and the reader has met all three in Session 1. The section places the classification and links the paper.

Terms: Promptotyping Documents, Declarative, Process and Action Documents.
Sources: the Promptotyping specification (convention and glossary); the paper once published. The specification now names the class Knowledge Document, which the heading has to reflect.

### Obsidian
<!-- slides: h2a76f1c8a73c47f4_4_924 -->

Core claim: Obsidian stores notes as Markdown files in a local folder, the vault, and a vault works on three levels, personal information, project work and knowledge structure from informal links to formal modelling.

Terms: Obsidian, Vault.
Sources: Obsidian help pages.

### How Steph Ango uses Obsidian
<!-- slides: h2a76f1c8a73c47f4_4_933 -->

Core claim: the vault style of Obsidian's chief executive (one vault, few folders, plural categories and tags, ISO dates, many links) is one possible style, and its main lesson is to choose, write down and revise one's own rules. The post names him as cited author of the linked text.

Terms: none new.
Sources: Ango, "How I use Obsidian" (stephango.com/vault).

### Das Wissensdokument im Vault
<!-- slides: wv_slide -->

Core claim: in the vault a knowledge document gains a head (YAML front matter that makes the vault queryable) and relations (wikilinks and backlinks), around a body of one concept per file. Example verbatim.

Terms: Frontmatter, YAML, Wikilink, Backlink.
Sources: Obsidian help on properties, links and backlinks; YAML 1.2.2.

### Tags und Tag-Taxonomie
<!-- slides: tg_slide -->

Core claim: tags are combinable attributes across folders, and a tag taxonomy is a controlled vocabulary of non-overlapping categories, which prevents synonyms, typos and uneven granularity. Maturity belongs in `status`.

Terms: Tag, Tag-Taxonomie, controlled vocabulary.
Sources: ANSI/NISO Z39.19-2005 (R2010).

### Maps of Content
<!-- slides: mc_slide -->

Core claim: a map of content is a curated entry point that lists related documents with one line each and can be nested. For agents MOCs are navigation infrastructure, because a larger vault does not fit the context window.

Terms: Map of Content, HOME.md.
Sources: Linking Your Thinking, MOCs (defn), read by the research agent and not yet checked here.

### Beispiel: der Vault
<!-- slides: h3_slide; renamed -->

Core claim: the third hands-on turns the knowledge base into a vault in three checked steps (analyse, create, check). Prompts verbatim.

Terms: none new.
Sources: none.

### Kuratieren: Struktur und Inhalt
<!-- slides: ku_slide -->

Core claim: curation is the ongoing care of the vault, and structural curation (front matter, tags, links, MOCs) is easy to check and undo, while content curation (wording, duplicates, contradictions) rests on judgement and is hard to undo. Prompts verbatim.

Terms: Kuratieren, strukturelle und inhaltliche Kuration.
Sources: DCC Curation Lifecycle Model (Higgins, 2008), as an analogy.

### Vault-Governance
<!-- slides: vg_slide -->

Core claim: vault governance makes the rules of the vault explicit in files that human and agent both read (CLAUDE.md for topography, HOME.md, TAG-TAXONOMY.md, ACTIVE-WORK.md), next to harness governance, which rules what the agent may do. Karpathy (2026) describes the same pattern for an LLM-maintained wiki.

Terms: Vault-Governance, Topografie.
Sources: Karpathy (2026); Ango (n.d.).

## Session 3: Agentic Engineering
<!-- slides: sec3_slide; renamed -->

Divider.

### fancy (research) tools & workflows
<!-- slides: fr_slide; renamed -->

Core claim: fancy (research) tools & workflows are small research tools and workflows that coding agents build from a maintained knowledge base, the tools mostly static browser applications, in five steps with a named bearer for each. A finding from checking changes the knowledge base before the code.

Terms: fancy (research) tools & workflows.
Sources: the provider's page dhcraft.org/fancy-research-tools (own source, copy rules CR-01 to CR-07 apply).

### Loop Engineering
<!-- slides: lp_slide -->

Core claim: loop engineering designs the system that triggers and checks the agent instead of prompting it by hand (trigger, agent, hard-wired check script, inner retry loop, human release), and every trigger multiplies requests, so stop conditions and limits are part of the design.

Terms: Loop Engineering, trigger, stop condition.
Sources: Anthropic (2024) evaluator-optimizer pattern; vendor hooks documentation; Anthropic (2025) on long-running harnesses. The term itself is open.

### Subagents und Workflows
<!-- slides: sw_slide -->

Core claim: workflows orchestrate LLMs and tools along predefined code paths, agents direct their own process. In practice subagents, dynamic workflows and parallel sessions occur. More agents cost more tokens and pay off only for parallelisable tasks.

Terms: Workflow, Subagent, Dynamic Workflow, parallel sessions.
Sources: Anthropic (2024, 2025, 2026); OpenAI (2026).

### Determinismus so weit wie möglich ausreizen
<!-- slides: dt_slide -->

Core claim: tasks with exactly one right answer go to code, scripts and formulas, tasks that need judgement go to LLM or human. The LLM writes the script and does not calculate itself.

Terms: deterministisch, probabilistisch.
Sources: Gao et al. (2023), PAL, for the computation side. The split of tasks is the workshop's own.

### Qualität sichern
<!-- slides: qg_slide -->

Core claim: quality comes from fitting checks, independent review and human acceptance, through four mechanisms (independent review by LLM-as-a-Judge, human in the process, turning found errors into permanent checks, rights and releases staying with the human).

Terms: LLM-as-a-Judge, Human in the Loop, regression test.
Sources: Zheng et al. (2023); Software Engineering at Google, ch. 11; Wei (2025).

### Beispiel: ein Analysewerkzeug
<!-- slides: h4_slide; renamed -->

Core claim: the fourth hands-on builds an analysis tool from the Northwind sample data in three checked steps (understand data, build with all figures computed by a script, check every figure against a reference). Prompts verbatim.

Terms: none new.
Sources: Microsoft sql-server-samples, Northwind (MIT licence at repository level).

### Ausblick: Vorlagen für die eigene Arbeit
<!-- slides: au_slide -->

Core claim: four templates from ongoing work (Second Brain Vault, Grounded Vault, Research Mission Control, Promptotyping) show the concepts in larger systems. They are research previews whose productive fitness is checked in one's own project. Links only after the method pages are published (plan dependency).

Terms: none new.
Sources: the provider's repositories.

## Weiterführend

Own section header, three short subsections.

<!-- omitted: h2a76f1c8a73c47f4_4_120 -->

### Vibe Coding & Agentic (Knowledge and Research) Engineering
<!-- slides: h2a76f1c8a73c47f4_4_125 -->

Core claim: vibe coding accepts generated code largely unchecked, agentic engineering designs agent-based development with humans setting requirements and checking results, and agentic (knowledge and research) engineering is the proposed working term for research workflows built on documented project knowledge.

Terms: Vibe Coding, Agentic Engineering, Agentic (Knowledge and Research) Engineering (marked as proposed working term).
Sources: Karpathy (2025); Willison (2026); Hassan et al. (2025); Allen, Stork and Groth (2023); the post "Haters gonna hate" (internal link).

### Frontier-LLMs amplifizieren computergestützte Wissensarbeit
<!-- slides: h2a76f1c8a73c47f4_4_717 -->

Core claim: benchmarks measure what models solve and where they fail, research results and incidents show capabilities and control problems under specific conditions, and the slide holds recursive self-improvement very likely. The section presents positions and links Asymmetric Amplification for the full argument.

Terms: Benchmark, Recursive Self-Improvement, Frontier-LLM.
Sources: Kwa et al. (2025); Jimenez et al. (2024); Merrill et al. (2026); the ARC-AGI-3 and SimpleBench pages; AI 2027 as scenario. A scholarly definition of recursive self-improvement is open.

<!-- omitted: h2a76f1c8a73c47f4_4_1122 h2a76f1c8a73c47f4_4_1128 h2a76f1c8a73c47f4_4_1133 h2a76f1c8a73c47f4_4_1187 -->

### AI Watermarking
<!-- slides: h2a76f1c8a73c47f4_4_1252 -->

Core claim: text watermarks bias token sampling with a secret key and are detected statistically, more reliably for longer texts and weakened by paraphrase, while image watermarks hide a bit string in the pixels that a decoder reads from a single image. A watermark is an indication and never proof. Art. 50 AI Act requires machine-readable marking of synthetic content from 2 August 2026, for systems already on the market from 2 December 2026 (Regulation (EU) 2026/1744). Figure: Dathathri et al. (2024), Fig. 1, CC BY 4.0.

Terms: Watermarking, C2PA.
Sources: Dathathri et al. (2024), licence of Fig. 1 confirmed on the article page; Kirchenbauer et al. (2023); Bui et al. (2023), which does not support removal by targeted attacks; C2PA specification 2.2; Regulation (EU) 2024/1689, Art. 50, Art. 113 and recital 133; Regulation (EU) 2026/1744.

## Schluss

Own section, no slide. Core claim: the three areas meet in one practice, knowledge maintained by humans, context designed for the agent and an environment that checks the agent's work, with release and responsibility staying with the human. The close links the teaching line, the Zotero group and the templates, and invites reuse under CC BY 4.0.
