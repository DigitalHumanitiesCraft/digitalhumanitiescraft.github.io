# Session 2 Knowledge Engineering: source verification

Research date 2026-11-04. Scope: Session 2 of the lecture notes `workshops/2026-11-09-ufl/lecture-notes.md` (lines 363-592).

Method note. Web pages were read through a fetch tool that converts HTML to text and answers against it; for pages longer than 100,000 characters only the first 100,000 were processed (noted per entry). PDFs were cached by the fetch tool in the session's tool-results folder (automatic behaviour of the tool, no deliberate download) and their text was extracted with `pdftotext` to stdout only; nothing else was written. Verbatim quotes come either from `pdftotext` output (exact) or from the fetch tool's quoted excerpts (exact quote marks in the tool output; small risk of transcription drift, marked "fetch excerpt").

---

## 1. Agentic Engineering levels: harness

- Term: Harness (level 3 of the five levels; "Arbeitsumgebung mit Werkzeugen, Wissen, Berechtigungen und Steuerung")
- Source: Zhong, H., & Zhu, S. (2026). AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents. arXiv:2605.13357. https://doi.org/10.48550/arXiv.2605.13357
- Access: https://arxiv.org/html/2605.13357v1 (CC BY 4.0)
- Read: HTML full text, first 100k characters processed by the fetch tool (sections Introduction, "The AI Harness Engineering", "A controlled harness ladder", "An illustrative case")
- Supporting passage: The harness "is a runtime substrate surrounding a foundation-model software agent" and "governs how an agent observes a project, acts on it, receives feedback, and establishes completion." (section "The AI Harness Engineering", fetch excerpt)
- Supports: the harness as the environment around the model that structures action, feedback and completion; Table 1 also lists permissions ("Restrict risky actions; expose approval gates"). Divergence: the paper defines a four-level harness ladder H0-H3, which is not the workshop's five-level scheme; it does not use "knowledge" as part of the harness.
- Status: already in lecture notes and terms.md

Second source for harness, same term:

- Source: Liu, J. (2026). Engineering and Governing the Agent Harness: A Technology and Policy Framework for the Runtime Layer of Agentic AI. UNU Macau Technology Report. United Nations University Institute in Macau. https://unu.edu/publication/engineering-and-governing-agent-harness-technology-and-policy-framework-runtime-layer
- Access: https://unu.edu/sites/default/files/2026-07/Engineering_and_Governing_the_Agent_Harness.pdf (imprint says "Creative Commons", no version stated); 26 pages
- Read: whole report via pdftotext (Executive Summary, Sections 1-8)
- Supporting passage: "It supplies the mediation and controls that allow a model to act within environmental dynamics over time: session management, identity and authentication, tool routing, memory externalisation, checkpointing, verification, approval gates" (Section 3, PDF p. 9; sentence continues "observability, retry policies and rollback")
- Supports: the harness as designed working environment with tools, memory and controls. Matches the workshop wording closely.
- Status: already in lecture notes (Liu 2026); author name in the report is "Jia'an LIU", the lecture notes give only "Liu"

## 2. Agentic Engineering levels: loop

- Term: Loop ("Handlungs- und Prüfzyklen, mit klaren Zielen, Abbruchbedingungen und menschlicher Kontrolle")
- Source: Anthropic (2024-12-19). Building effective agents. Anthropic Engineering Blog. https://www.anthropic.com/engineering/building-effective-agents
- Access: same URL, openly readable
- Read: whole page
- Supporting passage: "They are typically just LLMs using tools based on environmental feedback in a loop." and "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control." Plus "Agents can then pause for human feedback at checkpoints or when encountering blockers." (section on agents, fetch excerpts)
- Supports: all three elements of the workshop's loop definition (action-feedback cycle, stopping conditions, human control). Divergence: the source describes agents in general, not a "loop level" of an engineering maturity scale.
- Status: already in lecture notes and terms.md

Note on the five-level scheme as a whole (prompt, knowledge/context, harness, loop, factory): no citable text source found that defines these five levels; see "Terms without a read source".

## 3. AI governance on two levels (agent level)

- Term: KI-Governance, agent level (visibility of tools/connectors/models, access, evidence/logging, provider switching)
- Source: Liu (2026), as above
- Access: as above
- Read: whole report
- Supporting passage: "Effective harness governance combines least-privilege access, sandboxing, approval gates, lifecycle hooks, credential scoping and human override." (Section 8 Recommendations, PDF p. 20). On evidence: trajectories "are simultaneously a debugging artefact, an audit log and (where consented) a training signal." (Section 4 or 5, pdftotext)
- Supports: the agent-level questions Zugriff and Nachweis, and "Anbieter wechseln" via the recommendation to "preserve portability through open protocols and provider abstraction" (Executive Summary, PDF p. 4). Divergence: Liu does not use the five-question frame (Sichtbarkeit, Klassifikation, Rechtsraum, Zugriff, Nachweis) and does not treat a data level; jurisdiction appears only indirectly as lock-in and portability. The two-level frame and the five questions stem from the IBM Technology video and have no read text source.
- Status: already in lecture notes

## 4. Rule of Two

- Term: Rule of Two
- Source: Meta AI (2025-10-31). Agents Rule of Two: A Practical Approach to AI Agent Security. Meta AI Blog. https://ai.meta.com/blog/practical-ai-agent-security/
- Access: same URL, openly readable; no individual author named on the page
- Read: whole page (sections "Agents Rule of Two" to "What's Next")
- Supporting passage: agents "must satisfy no more than two of the following three properties within a session"; [A] "An agent can process untrustworthy inputs", [B] "An agent can have access to sensitive systems or private data", [C] "An agent can change state or communicate externally" (section "Agents Rule of Two", fetch excerpts)
- Supports: the three properties and the session scope exactly. Divergence: the workshop says "Braucht eine Aufgabe alle drei, entscheidet ein Mensch"; Meta says the agent "should not be permitted to operate autonomously and at a minimum requires supervision", which may come from "human-in-the-loop approval or another reliable means of validation", or a new session with a fresh context window. The human decision is one option, not the only one. Meta also frames the rule as valid "until robustness research allows us to reliably detect and refuse prompt injection".
- Status: already in lecture notes

## 5. Prompt injection

- Term: Prompt injection (the threat the Rule of Two addresses)
- Source: Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. arXiv:2302.12173. https://doi.org/10.48550/arXiv.2302.12173
- Access: https://arxiv.org/html/2302.12173v2 (arXiv non-exclusive licence)
- Read: abstract and the first 100k characters of the HTML full text (of 147k)
- Supporting passage: "LLM-Integrated Applications blur the line between data and instructions." Attackers can exploit them "by strategically injecting prompts into data likely to be retrieved." (Abstract, fetch excerpts)
- Supports: prompt injection as untrusted content treated as instruction, which is property [A] of the Rule of Two. Liu (2026, Executive Summary, PDF p. 4) states the same in one sentence: "Prompt injection and observation-stream attacks arise when untrusted content enters the agent's working context and is treated as instruction." Meta (2025) calls it "a fundamental, unsolved weakness in all LLMs".
- Status: new

## 6. Agent harness governance (Liu 2026)

- Term: Agent harness governance
- Source: Liu (2026), as in entry 1
- Read: whole report
- Supporting passage: "Apply least-privilege tool governance and explicit approval gates." (Section 8, Recommendation, PDF p. 20); abstract on the landing page: the report asks institutions to "recognise the harness as a distinct object of governance"
- Supports: the workshop's attribution of the agent level of governance to Liu; also links hooks ("Pre- and post-action hooks ... permit auditing, redaction, two-person approval and domain-specific policy to be injected without modifying the core") and least privilege. No divergence found.
- Status: already in lecture notes

## 7. Permission Modes (Claude Code)

- Term: Permission Modes
- Source: Anthropic (n.d., accessed 2026-11-04). Choose a permission mode. Claude Code Docs. https://code.claude.com/docs/en/permission-modes
- Access: same URL
- Read: first 100k of 120k characters (sections "Available modes" through "Critical paths"); the tail of "Critical paths" was not read
- Supporting passage: table row `auto`: "Everything, with background safety checks"; "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." bypassPermissions: "Only use this mode in isolated environments like containers, VMs, or dev containers without internet access". Protected paths include ".git" and ".claude" (sections "Available modes", "Eliminate permission prompts with auto mode", "Skip all checks with bypassPermissions mode", "Protected paths")
- Supports: auto mode classifier, bypass only in isolation, protected paths. Divergences: (a) the docs list six modes (`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, `bypassPermissions`); the workshop shows five and omits `dontAsk`. (b) "Manual" is the CLI alias of `default`. (c) `plan` in the docs runs "Reads, plus classifier-approved commands when auto mode is available", so "ändert nichts" holds for source edits, not strictly for commands. (d) For auto the docs say "Everything, with background safety checks", not "Lesen und Bearbeiten im Projekt frei, alles andere prüft ein Klassifikator"; the docs say "Explicit ask rules still force a prompt". (e) Protected paths are never auto-approved except in bypassPermissions and one plan-mode case; "nie automatisch" is slightly stronger than the docs.
- Status: already in lecture notes

## 8. Autonomy levels for agents

- Term: Autonomy levels (the modes as degrees of autonomy)
- Source: Feng, K. J. K., McDonald, D. W., & Zhang, A. X. (2025). Levels of Autonomy for AI Agents. arXiv:2506.12469 (Knight First Amendment Institute essay series). https://doi.org/10.48550/arXiv.2506.12469
- Access: https://arxiv.org/html/2506.12469v2 (CC BY 4.0)
- Read: abstract and Section 1 of the HTML full text through the fetch tool; the level descriptions in later sections were summarised by the tool, not quoted
- Supporting passage: "we define five levels of escalating agent autonomy, characterized by the roles a user can take" (Abstract); "our framework views autonomy as a property that can also be designed independently of capability." (Section 1)
- Supports: the workshop's claim that autonomy is a deliberate choice ("Entscheidend ist, wie viel Autonomie man ihm geben will"). The five user roles are operator, collaborator, consultant, approver, observer. Divergence: the levels describe user roles, not tool permission modes; mapping Claude Code modes onto them is an inference.
- Status: new

## 9. Hooks

- Term: Hooks (PreToolUse, exit code 2)
- Source: Anthropic (n.d., accessed 2026-11-04). Hooks reference. Claude Code Docs. https://code.claude.com/docs/en/hooks
- Access: same URL
- Read: first 100k of 286k characters (intro, "Hook lifecycle", "Exit code output"); the detailed PreToolUse section was not reached
- Supporting passage: "Hooks are user-defined shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents that execute automatically at specific points in Claude Code's lifecycle." and "Exit with code 2 to block the action." (intro; "Exit code output" > "Exit code 2")
- Supports: hook as harness-executed script at a lifecycle event, exit code 2 blocks a PreToolUse call, stderr becomes the reason ("The message that comes with the block is your hook's stderr."). Divergence: hooks need not be scripts; the docs also list HTTP endpoints, MCP tool calls, prompts and subagents.
- Status: already in lecture notes

## 10. Sandboxing

- Term: Sandbox
- Source: Anthropic (n.d., accessed 2026-11-04). Sandboxing. Claude Code Docs. https://code.claude.com/docs/en/sandboxing
- Access: same URL
- Read: first 100k of 110k characters
- Supporting passage: "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." (opening)
- Supports: the workshop's statement that only a sandbox gives full protection where hooks on file tools are bypassed by shell commands. Divergence relevant to the workshop audience: "On native Windows, Claude Code runs commands unsandboxed." Default read access covers "the entire computer, except certain denied directories".
- Status: new

## 11. Least privilege

- Term: Least privilege
- Source: Saltzer, J. H., & Schroeder, M. D. (1975). The Protection of Information in Computer Systems. Proceedings of the IEEE, 63(9), 1278-1308. https://doi.org/10.1109/PROC.1975.9939
- Access: https://web.mit.edu/Saltzer/www/publications/protection/Basic.html (author-hosted HTML, Section I)
- Read: Section I.A.3 "Design Principles" in full; the remaining sections were not read
- Supporting passage: "Every program and every user of the system should operate using the least set of privileges necessary to complete the job." (Section I.A.3, principle "Least privilege")
- Supports: least privilege as the principle behind permission modes, deny rules and hooks. The adjacent principle "Fail-safe defaults" ("the default situation is lack of access") supports the deny-by-default reading. No divergence.
- Status: already in terms.md

## 12. Knowledge Engineering

- Term: Knowledge Engineering
- Source: Allen, B. P., Stork, L., & Groth, P. (2023). Knowledge Engineering Using Large Language Models. Transactions on Graph Data and Knowledge, 1(1), 3:1-3:19. https://doi.org/10.4230/TGDK.1.1.3
- Access: https://drops.dagstuhl.de/entities/document/10.4230/TGDK.1.1.3 (CC BY 4.0)
- Read: landing page and abstract only; full PDF not read
- Supporting passage: "Knowledge engineering is a discipline that focuses on the creation and maintenance of processes that generate and apply knowledge." (Abstract)
- Supports: "Aufbau und Pflege" and the turn to knowledge engineering in natural language ("enabling knowledge engineering in natural language", Abstract). Divergence: Allen et al. speak of processes that generate and apply knowledge, the workshop of explicit revisable project knowledge.
- Status: already in lecture notes and terms.md. Open: read the PDF body before citing beyond the abstract.

Second source:

- Source: Studer, R., Benjamins, V. R., & Fensel, D. (1998). Knowledge Engineering: Principles and Methods. Data & Knowledge Engineering, 25(1-2), 161-197. https://doi.org/10.1016/S0169-023X(97)00056-6
- Access: https://publikationen.bibliothek.kit.edu/189497/3003 (KIT repository PDF, author version without journal pagination; licence not shown)
- Read: whole text via pdftotext
- Supporting passage: "The modeling process is a cyclic process." and "the model must therefore be revisable in every stage of the modeling process." (Section 2.1, "Knowledge Engineering as a Modeling Process")
- Supports: "revidierbares Projektwissen" and knowledge acquisition as construction rather than transfer ("the building and maintenance process", Section 1). Divergence: Studer et al. concern knowledge-based systems, not LLM context.
- Status: already in terms.md

## 13. Personal Information Management

- Term: Personal Information Management
- Source: Jones, W., Dinneen, J. D., Capra, R., Diekema, A. R., & Pérez-Quiñones, M. A. (2017). Personal Information Management. In M. Levine-Clark & J. McDonald (Eds.), Encyclopedia of Library and Information Science (4th ed., pp. 3584-3605). Taylor & Francis. https://doi.org/10.1081/E-ELIS4-120053695
- Access: author pre-print, https://arxiv.org/abs/2107.03291 (arXiv)
- Read: whole pre-print via pdftotext
- Supporting passage: "the activities a person performs in order to acquire or create, store, organize, maintain, retrieve, use, and distribute information" (Abstract, after "PIM refers to the practice and the study of"; continues "as needed to meet life's many goals ... and to fulfill life's many roles")
- Supports: the activity list, goals and roles, nearly word for word. PICs: "Personal information collections, referred to as PICs or simply collections, are personally managed subsets of a PSI." (section "Personal Information Collections"). Divergence: the source does not name fragmentation the "Kernproblem"; it treats "Information fragmentation" as an issue and names integration as "a key challenge of PIM" (Abstract).
- Status: already in lecture notes and terms.md

## 14. Projektmanagement

- Term: Projektmanagement (phases Initiierung, Planung, Durchführung, Überwachung und Steuerung, Abschluss)
- Source: European Commission, DG DIGIT, Centre of Excellence in Project Management (2023). PM² Project Management Methodology Guide 3.1. Publications Office of the EU. ISBN 978-92-68-10314-2. https://doi.org/10.2799/970188
- Access: https://op.europa.eu/en/publication-detail/-/publication/97cc2f12-c648-11ee-95d9-01aa75ed71a1/language-en (CC BY 4.0 according to the publication page)
- Read: Sections 1-2 and the lifecycle chapter via pdftotext (definitions, phases, Monitor & Control); not the whole guide
- Supporting passage: "Project Management can be described as the activities of planning, organising, securing, monitoring and managing the resources and work necessary to deliver specific project goals and objectives" (section "What is Project Management?", PDF p. 14). Phases: Initiating, Planning, Executing, Closing; "Monitor & Control activities run throughout the duration of the project, but peak during the Executing Phase." (Chapter 9)
- Supports: the definition and the five-part structure. Divergence: in PM², Monitor & Control is a cross-cutting activity group, not a sequential phase; the workshop lists it as a phase. Project defined as "a temporary organisational structure set up to create a unique product or service (output) within certain constraints such as time, cost, and quality" (Section 1.1, PDF p. 12), which matches "innerhalb definierter Rahmenbedingungen".
- Status: new (replacement for Kuster et al. 2022, whose full text was not accessible)

## 15. Knowledge modelling / knowledge base (CommonKADS)

- Term: Wissensmodellierung, CommonKADS
- Source: Studer, Benjamins & Fensel (1998), as in entry 12
- Read: whole text
- Supporting passage: "In CommonKADS the Organization Model, the Task Model, the Agent Model, the Communication Model, the Expertise Model and the Design Model are distinguished." (Section 3, CommonKADS) and "the different steps of knowledge acquisition are performed cyclically until the desired functionality has been reached." (Section 3)
- Supports: knowledge modelling as model construction, cyclic acquisition. Divergence: the workshop's step sequence (Fragen, Wissenserwerb, Vokabular, Kodierung, Instanzen, Abfragen, Inferenz, Evaluation) follows Russell & Norvig, which could not be read; secondary course material indicates that their seventh step is "debug the knowledge base", not "Evaluation" (unverified, see candidates). Ontology: "An ontology is a formal, explicit specification of a shared conceptualisation." (Section 6)
- Status: already in terms.md (Studer et al.; CommonKADS book by Schreiber et al. 2000 listed but not read)

## 16. Docling

- Term: Docling
- Source: Auer, C., Lysak, M., Nassar, A., Dolfi, M., Livathinos, N., Vagenas, P., et al. (2024). Docling Technical Report. arXiv:2408.09869. https://doi.org/10.48550/arXiv.2408.09869
- Access: https://arxiv.org/html/2408.09869v5 (CC BY 4.0)
- Read: HTML full text through the fetch tool (Sections 1-3)
- Supporting passage: Docling "Converts PDF documents to JSON or Markdown format", "running entirely locally on commodity hardware." (Section 1, fetch excerpts)
- Supports: local conversion into Markdown or JSON. Divergence: the report does not use the name "DoclingDocument" (it speaks of "a well-defined datatype ... defined in the auxiliary package docling-core", Section 3.3) and does not address sensitive data. The project documentation (https://docling-project.github.io/docling/) supplies these: "A unified, expressive DoclingDocument representation format", "Local execution capabilities for sensitive data and air-gapped environments", "Connect to any agent using the MCP server", "The project was started by the AI for knowledge team at IBM Research Zurich.", "Docling is hosted as a project in the LF AI & Data Foundation."
- Status: already in lecture notes

## 17. OCR

- Term: OCR (as step in Docling)
- Source: Auer et al. (2024), as above
- Read: Section 3.2
- Supporting passage: "Docling provides optional support for OCR, for example to cover scanned PDFs or content in bitmaps images embedded on a page." (Section 3.2, fetch excerpt)
- Supports: OCR for scans within the Docling pipeline; the report names EasyOCR as the engine. Divergence: none; no general definition of OCR was sourced.
- Status: new

## 18. Promptotyping Documents

- Term: Promptotyping Documents (Declarative, Process, Action Documents)
- Source: Digital Humanities Craft (2026-08-22). Convention Knowledge Documents, version 0.3. Promptotyping specification. https://dhcraft.org/Promptotyping/ (rendered from https://github.com/DigitalHumanitiesCraft/Promptotyping/blob/main/_content/konvention.md)
- Access: https://raw.githubusercontent.com/DigitalHumanitiesCraft/Promptotyping/main/_content/konvention.md and `_content/glossar.md` (glossary version 0.5, mirrored 2026-09-27); dhcraft.org/Promptotyping/ itself renders client-side and returned no document text to the fetch tool
- Read: konvention.md section "Classification of the document types" and glossar.md entries Knowledge Document, Declarative/Process/Action Document
- Supporting passage: "Promptotyping distinguishes three document types analytically." "All three are knowledge documents, specialised by the kind of knowledge they hold." "Declarative Documents hold knowledge about the subject matter." "Action Documents hold knowledge about how to act." (konvention.md, "Classification of the document types")
- Supports: the three types and their criterion (kind of knowledge). Divergences: (a) the glossary says the superordinate class "was formerly called Promptotyping Document"; its current name is Knowledge Document, so the workshop heading uses the old name. (b) Process Documents "separate three temporal functions" in the convention, which the workshop renders as "was geschehen ist, was offen ist und was als Nächstes kommt" (consistent, but check the exact three functions). (c) The glossary notes that the paper calls the action class "agent instruction document". (d) The lecture notes cite Pollin (2026) as a Google Doc; the Google Doc was not opened (private link).
- Status: already in lecture notes (Pollin 2026) and terms.md (dhcraft.org/Promptotyping/)

## 19. Obsidian and vault

- Term: Obsidian, Vault
- Source: Obsidian (n.d., accessed 2026-11-04). Create a vault. Obsidian Help. https://obsidian.md/help/vault ; Obsidian (n.d.). Homepage. https://obsidian.md/
- Access: same URLs
- Read: both pages in full
- Supporting passage: "A vault is a folder on your local file system where Obsidian stores your notes." (Create a vault); "Obsidian stores your notes locally as plain text Markdown files." and "Obsidian uses open file formats, so you're never locked in." (homepage)
- Supports: vault as local folder, Markdown, open format. Divergence: neither page states that no cloud account is required; the workshop claim "ein Cloud-Konto ist nicht nötig" has no read support in these pages.
- Status: new as citation (lecture notes give only https://obsidian.md)

## 20. YAML front matter / properties

- Term: Frontmatter, Properties
- Source: Obsidian (n.d.). Properties. Obsidian Help. https://obsidian.md/help/properties ; YAML Language Development Team (2021). YAML Ain't Markup Language Version 1.2.2. https://yaml.org/spec/1.2.2/
- Access: same URLs
- Read: Properties page in full; YAML spec Chapter 1 and Section 3.2.1.1 (first 100k of 192k characters)
- Supporting passage: "Properties are stored in YAML format at the top of the file." (Properties); "The content of a mapping node is an unordered set of key/value node pairs" (YAML 1.2.2, Section 3.2.1.1)
- Supports: front matter as YAML key-value header; Obsidian's default properties include `tags` and `aliases`. No divergence.
- Status: new

## 21. Wikilinks and backlinks

- Term: Wikilinks, Backlinks
- Source: Obsidian (n.d.). Internal links. https://obsidian.md/help/links ; Obsidian (n.d.). Backlinks. https://obsidian.md/help/plugins/backlinks
- Access: same URLs
- Read: both pages in full
- Supporting passage: "By default, due to its more compact format, Obsidian generates links using the Wikilink format." (Internal links); "Linked mentions are backlinks to the notes that contain an internal link to the active note." (Backlinks)
- Supports: wikilinks as default link syntax and backlinks as "welche Dokumente auf ein Dokument verweisen". No divergence.
- Status: new

## 22. Tag taxonomy / controlled vocabulary

- Term: Tag-Taxonomie, kontrolliertes Vokabular
- Source: National Information Standards Organization (2005, reaffirmed 2010). ANSI/NISO Z39.19-2005 (R2010). Guidelines for the Construction, Format, and Management of Monolingual Controlled Vocabularies. ISBN 1-880124-65-3. https://www.niso.org/publications/ansiniso-z3919-2005-r2010
- Access: https://groups.niso.org/higherlogic/ws/public/download/6484/ (2005 text; reproduction for noncommercial purposes permitted with attribution)
- Read: Sections 1 and 5.1 via pdftotext; glossary section 4.1 not extracted
- Supporting passage: "The primary purpose of vocabulary control is to achieve consistency in the description of content objects and to facilitate retrieval." (Section 1); need arises because "Two or more words or terms can be used to represent a single concept" (Section 1.1)
- Supports: controlled vocabulary against synonyms and inconsistency. Divergence: Z39.19 does not require non-overlapping facet categories for tags; the workshop's three-category tag scheme is a design choice, closer to faceted classification. The Obsidian Tags page supports nested tags as hierarchies ("Nested tags define tag hierarchies that make it easier to find and filter related tags.", https://obsidian.md/help/tags).
- Status: new

## 23. Maps of Content

- Term: Map of Content (MOC)
- Source: Linking Your Thinking (n.d.). MOCs (defn). LYT Kit. https://notes.linkingyourthinking.com/Cards/MOCs+(defn) (the originator's published notes site; no author or date shown on the page)
- Access: same URL
- Read: whole page (short); the fetch tool declined long verbatim reproduction
- Supporting passage: a MOC is "a cluster of information that maps "things" in context with other "things."" (MOCs (defn))
- Supports: MOC as a note that gathers and contextualises links, used to "gather, develop, and navigate ideas". Divergence: the source frames MOCs as a thinking tool and warns against seeing them as mere indexes; the workshop frames them as a curated entry point and navigation infrastructure for agents. Nesting (HOME, topic MOCs) and the "one line of explanation per link" are workshop conventions, not in the read page.
- Status: new

## 24. Curation

- Term: Kuratieren
- Source: Higgins, S. (2008). The DCC Curation Lifecycle Model (model description). Digital Curation Centre. Deposited in Edinburgh Research Archive, https://era.ed.ac.uk/handle/1842/3350 (ERA dates the item 2009)
- Access: https://era.ed.ac.uk/bitstreams/ae502b2e-bcf2-4622-b47e-69c5dea3f82c/download (licence not shown)
- Read: whole document via pdftotext
- Supporting passage: "The DCC Curation Lifecycle Model provides a graphical high level overview of the stages required for successful curation and preservation of data from initial conceptualisation or receipt." (section "The Curation Lifecycle")
- Supports: curation as ongoing, staged maintenance with occasional actions "Dispose", "Reappraise" and "Migrate". Divergence: the DCC model concerns preservation of research data; the workshop's curation (verdichten, präzisieren, verknüpfen, bereinigen, archivieren) is knowledge-base maintenance. Use as analogy, not definition. This is the model description, not the IJDC article (Higgins 2008, IJDC 3(1), 134-140, https://doi.org/10.2218/ijdc.v3i1.48), which returned HTTP 403.
- Status: new

## 25. Vault governance and LLM-maintained wiki

- Term: Vault-Governance, LLM Wiki
- Source: Karpathy, A. (2026-04-04). LLM Wiki. GitHub Gist. https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Access: same URL
- Read: whole gist (first 100k of 101k characters, including comments)
- Supporting passage: raw sources: the LLM "reads from them but never modifies them"; wiki: "The LLM owns this layer entirely."; schema: "a document (e.g. CLAUDE.md for Claude Code or AGENTS.md for Codex)"; "You and the LLM co-evolve this over time as you figure out what works for your domain." (fetch excerpts)
- Supports: the three layers and joint evolution of the schema document, as in the lecture notes. Additional: the gist names operations ingest, query and lint ("Periodically, ask the LLM to health-check the wiki."), which match the workshop's vault check prompt. ACTIVE-WORK.md and TAG-TAXONOMY.md are not in the gist.
- Status: already in lecture notes

## 26. How I use Obsidian

- Term: How Steph Ango uses Obsidian
- Source: Ango, S. (n.d.). How I use Obsidian. https://stephango.com/vault
- Access: same URL
- Read: whole page
- Supporting passage: "Avoid splitting content into multiple vaults." "Always pluralize categories and tags." "Use `YYYY-MM-DD` dates everywhere." "Use internal links profusely." "Having a consistent style collapses hundreds of future decisions into one, and gives me focus."
- Supports: all style points in the lecture notes. Note: personal-name rule; the post is a cited work, so naming the author as cited author is covered. The lecture notes call him "CEO von Obsidian"; the read page was not checked for that role statement.
- Status: already in lecture notes

---

## Terms without a read source

- The five-level scheme Prompt, Knowledge/Context, Harness, Loop, Factory as a whole; only harness and loop have read text sources. "Factory" has none.
- The data level of AI governance and the five questions Sichtbarkeit, Klassifikation, Rechtsraum, Zugriff, Nachweis (source is the IBM Technology video only; Liu 2026 covers access, evidence and portability at agent level).
- Russell & Norvig's knowledge engineering steps (the workshop's step sequence).
- A general definition of OCR beyond Docling's use of it.

## Candidates without full text

- OpenAI (2026-02-11). Harness engineering: leveraging Codex in an agent-first world. https://openai.com/index/harness-engineering/ (HTTP 403).
- Russell, S., & Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th ed.), knowledge engineering process (Section 8.4 in earlier editions). No legitimate full text; secondary course slides only.
- Kuster, J., et al. (2022). Handbuch Projektmanagement (5th ed.). https://doi.org/10.1007/978-3-662-65473-6 (Springer login redirect).
- Schreiber, G., et al. (2000). Knowledge Engineering and Management. The CommonKADS Methodology. MIT Press. Not openly available.
- Higgins, S. (2008). The DCC Curation Lifecycle Model. International Journal of Digital Curation, 3(1), 134-140. https://doi.org/10.2218/ijdc.v3i1.48 (HTTP 403 on ijdc.net; the DCC model description in ERA was read instead).
- Allen, Stork & Groth (2023) body text: only the abstract was read, although the PDF is open access (https://drops.dagstuhl.de/storage/08tgdk/tgdk-vol001/tgdk-vol001-issue001/TGDK.1.1.3/TGDK.1.1.3.pdf).
- Pollin, C. (2026). Promptotyping (Google Doc in the lecture notes): not opened.
- ISO 21502:2020 and PMI PMBOK: not openly available, not attempted.
- ISO 25964: not openly available, not attempted.
- Obsidian Tags and "no account required": no read page supports the account claim.
