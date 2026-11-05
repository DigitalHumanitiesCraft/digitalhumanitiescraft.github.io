# Research sweep: Session 3 (Agentic Engineering)

Scope: sources for the Session 3 terms of the workshop "Intermediate Prompting Agentic Engineering" (Uni for Life, 2026-11-09/10). Checked 2026-11-04.

Method note. Web pages were read through a fetch tool that returns the page text; for long pages the relevant sections were read, and the list of headings was retrieved to confirm the whole document came back. The two arXiv PDFs were saved automatically by the fetch tool into the session's tool-results folder (not by a deliberate download) and their text was extracted locally with `pdftotext` for reading. Quotes are verbatim, at most 30 words.

## Fancy research tools

- Term: Fancy (research) tools
- Source: Digital Humanities Craft OG (n.d.). fancy (research) tools! https://dhcraft.org/fancy-research-tools/
- Access: https://dhcraft.org/fancy-research-tools/ (provider's own page, public)
- Read: whole page (sections "fancy (research) tools!", "Angebot" with "Kosten", "Beispiele zum Ausprobieren", "Methoden und Frameworks")
- Supporting passage: "fancy (research) tools sind Werkzeuge für die Arbeit mit Wissen, entwickelt mit Coding-Agenten." and "Meist sind es eigenständige statische Anwendungen, die ohne Server im Browser laufen, andere Lösungen sind möglich." (section "fancy (research) tools!")
- Supports: tools built with coding agents, mostly static serverless browser applications. Divergence: the page does not say "aus einer gepflegten Wissensbasis" and does not list the five-step path of the lecture notes; the closest page statements are "Sie entscheiden nach jedem Arbeitsschritt, ob es weitergeht" (Kosten) and the Promptotyping method card with a review step. The five steps are workshop material only.
- Status: already in lecture notes (URL)

## Promptotyping

- Term: Promptotyping (place of the method)
- Source: Digital Humanities Craft OG (n.d.). Promptotyping. Specification of the Working Practice. Repository README, DigitalHumanitiesCraft/Promptotyping. https://github.com/DigitalHumanitiesCraft/Promptotyping (the repository's `_content/` folder serves https://dhcraft.org/Promptotyping/)
- Access: https://raw.githubusercontent.com/DigitalHumanitiesCraft/Promptotyping/main/README.md and https://dhcraft.org/Promptotyping/ ; content CC BY 4.0, code MIT (stated on page and README)
- Read: README (opening, contents, licence); the dhcraft.org page shell (headings "Promptotyping Specification", "Addresses", "This specification", "Implementation"). The page body is rendered client-side, so the fetch returned only the shell; the README carries the definition.
- Supporting passage: "Promptotyping is an iterative, knowledge-driven working practice through which a project builds its own digital research artefacts out of structured research data and the project knowledge it maintains, using Context Engineering and Agentic Engineering" (README, first paragraph; sentence continues with the four forms of work Preparation, Exploration, Distillation, Implementation)
- Supports: places Promptotyping as a practice that uses context engineering and agentic engineering to build research artefacts from data and project knowledge. Divergences: (a) the source calls it a "working practice", while the lecture notes and the site copy rules say "Methode"; terms.md lists the page as "Specification of the Method", but the page title reads "Specification of the Working Practice". (b) The README does not present Promptotyping as "one context engineering method among several" (site copy rule CR); that framing is the provider's, not the source's. (c) The README states the paper "is maintained separately and will be published in the journal", and does not link a readable version.
- Status: already in terms.md (as dhcraft.org/Promptotyping/ with older title)

## Loop Engineering

No source defines "Loop Engineering" as a term. Three read sources support its components.

### Evaluator-optimizer and stopping conditions

- Term: Loop Engineering (inner retry loop, abort conditions)
- Source: Anthropic (2024-12-19). Building effective agents. Anthropic Engineering Blog. https://www.anthropic.com/engineering/building-effective-agents
- Access: same URL, public
- Read: whole article (all sections incl. "Workflow: Evaluator-optimizer", "Agents", Appendix 1 "Coding agents")
- Supporting passage: "In the evaluator-optimizer workflow, one LLM call generates a response while another provides evaluation and feedback in a loop." (Workflow: Evaluator-optimizer); and agents should "include stopping conditions (such as a maximum number of iterations)" (Agents)
- Supports: the inner loop of generate, check, retry and the need for limits. Divergence: in the source the evaluator is an LLM call, while the workshop's check is a hard-wired script; the source's "ground truth from the environment at each step" (Agents) is closer to the script check.
- Status: already in lecture notes and terms.md (cited there for workflows vs agents)

### Hard-wired check the agent cannot skip

- Term: Loop Engineering (fest verdrahtetes Prüfskript, innere Schleife)
- Source: Anthropic (n.d.). Automate actions with hooks; Hooks reference. Claude Code Docs. https://code.claude.com/docs/en/hooks-guide ; https://code.claude.com/docs/en/hooks
- Access: same URLs, public
- Read: hooks guide in full; hooks reference, section "Stop" (input, "Stop decision control")
- Supporting passage: "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." (hooks guide, intro); "`\"block\"` prevents Claude from stopping." (hooks reference, Stop decision control)
- Supports: a check that runs deterministically and, on failure, sends the agent back to work (inner loop). The reference also names loop protections, the `stop_hook_active` input and an "8-consecutive-continuation cap", which supports "Abbruchbedingungen und Grenzen". Divergence: vendor documentation for one harness, not a general definition.
- Status: new

### Long-running harness

- Term: Loop Engineering (agent loop across sessions, verification before "done")
- Source: Anthropic (2025-11-26). Effective harnesses for long-running agents. Anthropic Engineering Blog. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Access: same URL, public
- Read: whole article (The long-running agent problem; Environment management: Feature list, Incremental progress, Testing; Getting up to speed; Future work)
- Supporting passage: "Claude mostly did well at verifying features end-to-end once explicitly prompted to use browser automation tools" (Testing)
- Supports: the agent runs in a loop and needs an explicit verification step before results count. Divergence: no trigger and no human release step; the article's loop is session-to-session progress, not trigger-driven.
- Status: already in terms.md

## Subagents and Workflows

### Workflows vs agents

- Term: Workflows and Agents
- Source: Anthropic (2024-12-19). Building effective agents (as above)
- Access / Read: as above
- Supporting passage: "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." and agents "are systems where LLMs dynamically direct their own processes and tool usage" (What are agents?)
- Supports: the lecture-notes distinction, almost word for word. No divergence.
- Status: already in lecture notes and terms.md

### Subagent (Claude Code)

- Term: Subagent (own context window, returns result; Explore, Plan; `.claude/agents/`)
- Source: Anthropic (n.d.). Create custom subagents. Claude Code Docs. https://code.claude.com/docs/en/sub-agents
- Access: same URL, public
- Read: first 100,000 characters (intro, Built-in subagents, Configure subagents, Work with subagents up to "Resume subagents"); the final part (about 17,000 characters) was not read
- Supporting passage: "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." (intro); project subagents live in "`.claude/agents/`" (Choose the subagent scope)
- Supports: own context window, delegated task, results returned; built-ins Explore, Plan and general-purpose; project location. No divergence.
- Status: new

### Subagent (Codex)

- Term: Subagent (Codex roles, `.codex/agents/`, parallel reading vs writing)
- Source: OpenAI (2026). Subagents. https://learn.chatgpt.com/docs/agent-configuration/subagents
- Access: same URL, public
- Read: whole page (Availability through Example 2)
- Supporting passage: built-in roles "`worker`: execution-focused agent for implementation and fixes" and "`explorer`: read-heavy codebase exploration agent"; "use parallel agents for read-heavy tasks such as exploration, tests, triage, and summarization" (Why subagent workflows help / Core terms)
- Supports: roles explorer and worker, project folder `.codex/agents/`, and the recommendation for read-heavy parallel work with caution for parallel writing. Divergence: there is also a `default` role, which the lecture notes omit.
- Status: already in lecture notes

### Dynamic workflows

- Term: Dynamic Workflow
- Source: Anthropic (2026-05-28). Introducing dynamic workflows in Claude Code. Claude Blog. https://claude.com/blog/introducing-dynamic-workflows-in-claude-code
- Access: same URL, public
- Read: whole post (Dynamic workflows in action; Rewriting Bun with dynamic workflows; How it works; Getting started)
- Supporting passage: "Claude dynamically writes orchestration scripts that run tens to hundreds of parallel subagents" and "Agents address the problem from independent angles, other agents try to refute what they found." (How it works)
- Supports: orchestration script, many parallel subagents, adversarial cross-checking; triggered by an explicit request or the `ultracode` setting, which sets effort to xhigh and lets Claude decide when a workflow is worthwhile. Divergence: the source says other agents "try to refute" findings; the lecture notes' "bis die Ergebnisse übereinstimmen" is a looser paraphrase. The post has no named author.
- Status: already in lecture notes

### Token cost of multi-agent systems

- Term: cost of more agents
- Source: Anthropic (2025-06-13). How we built our multi-agent research system. Anthropic Engineering Blog. https://www.anthropic.com/engineering/multi-agent-research-system
- Access: same URL, public
- Read: whole article (Benefits of a multi-agent system through Appendix)
- Supporting passage: "agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats" (Benefits of a multi-agent system)
- Supports: the 4x and 15x multipliers and the unsuitability where "all agents to share the same context or involve many dependencies between agents". The performance figure is "outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval", which the notes render as "deutlich über". No divergence. The publication date was not shown in the fetched text; 2025-06-13 is from bibliographic memory and should be checked.
- Status: already in lecture notes

### Parallel sessions

- Term: Parallele Sessions
- Source: Anthropic (n.d.). Message your other Claude Code sessions. Claude Code Docs. https://code.claude.com/docs/en/cross-session-messaging
- Access: same URL, public
- Read: whole page
- Supporting passage: "Cross-session messaging lets Claude deliver a message from one of your Claude Code sessions to another." (intro); a session can "ask it for one notice when it next goes idle or exits" (When to use)
- Supports: independent sessions that message each other and report back when finished. A related page, "Orchestrate teams of Claude Code sessions" (https://code.claude.com/docs/en/agent-teams, read in full), describes agent teams as experimental, with "use significantly more tokens than a single session" and the warning that two teammates editing the same file "leads to overwrites". Divergence: the lecture notes cite no source and describe the provider's own practice; the docs describe the mechanism.
- Status: new

## Deterministic vs probabilistic computation

- Term: Determinismus ausreizen ("Was ein Skript erledigen kann, soll ein Skript erledigen")
- Source: Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2023). PAL: Program-aided Language Models. arXiv:2211.10435v2 (published in Proceedings of ICML 2023, PMLR 202; venue from bibliographic knowledge, not stated in the read preprint). https://doi.org/10.48550/arXiv.2211.10435
- Access: https://arxiv.org/pdf/2211.10435 (arXiv preprint, open access)
- Read: abstract, sections 1 to 8 (main text); appendices skimmed only via references
- Supporting passage: "LLMs often make logical and arithmetic mistakes in the solution part, even when the problem is decomposed correctly." and PAL "offloads the solution step to a runtime such as a Python interpreter" (Abstract)
- Supports: the LLM writes the program and does not compute itself; Section 5.1 adds that on large-number problems "the primary failure mode is the inability to perform arithmetic accurately", and Section 6 shows that letting the LLM "execute" its own code gives far lower accuracy than using the interpreter. Divergence: the evidence is on math, symbolic and algorithmic benchmarks with 2022-era models; the deterministic/probabilistic taxonomy of the notes (summaries, tone, plausibility) is the workshop's own and not in the paper.
- Status: new

## Quality assurance for agent output

### LLM-as-a-Judge

- Term: Unabhängiges Review (LLM-as-a-Judge)
- Source: Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zhang, H., Gonzalez, J. E., & Stoica, I. (2023). Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena. NeurIPS 2023 Datasets and Benchmarks Track. arXiv:2306.05685. https://doi.org/10.48550/arXiv.2306.05685
- Access: https://arxiv.org/pdf/2306.05685 (arXiv, non-exclusive distribution licence)
- Read: sections 1, 3 (3.1 to 3.5), 6, 7; sections 2, 4, 5 skimmed
- Supporting passage: "Single answer grading. Alternatively, an LLM judge is asked to directly assign a score to a single answer." (3.1) and "Self-enhancement bias ... LLM judges may favor the answers generated by themselves." (3.3, elided)
- Supports: an LLM judging output against criteria, and why the judge should be independent of the producer and its findings checked (position, verbosity, self-enhancement bias; judges "misled by the provided answers" on math, 3.3). Divergence: the paper evaluates chat answers against human preferences, not code or research artefacts, and does not discuss "fresh context"; the "fresh context" element is better supported by the Claude Code subagent docs. The paper itself could not establish self-enhancement bias conclusively ("our study cannot determine").
- Status: already in terms.md

### Human acceptance and turning bugs into tests

- Term: Mensch im Prozess; Fehler in Mechanismen überführen
- Source: Bender, A. (2020). Testing Overview. In T. Winters, T. Manshreck & H. Wright (Eds.), Software Engineering at Google, ch. 11. O'Reilly. https://abseil.io/resources/swe-book/html/ch11.html
- Access: same URL, CC BY-NC-ND 4.0 (stated on site)
- Read: whole chapter (Why Do We Write Tests? through TL;DRs)
- Supporting passage: once exploratory testing finds a problem, "an automated test should be added to prevent future regressions." and "testing the quality of search results often involves human judgment." (The Limits of Automated Testing)
- Supports: a found bug becomes a permanent automated check, and automated tests do not cover everything, so human judgement stays. The chapter's "Beyoncé Rule" is the well-known formulation of the same norm but quotes a song lyric and should be paraphrased, not quoted. Divergence: none on substance; the source is about human-written software at Google, not agent output. Book editors and year from bibliographic knowledge; only the chapter author, editor and licence were visible on the page.
- Status: new

### Asymmetry of verification

- Term: Asymmetry of verification
- Source: Wei, J. (2025-07-15). Asymmetry of verification and verifier's rule. https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law
- Access: same URL, public
- Read: whole post (all six sections)
- Supporting passage: "Asymmetry of verification is the idea that some tasks are much easier to verify than to solve." (opening)
- Supports: the idea that checking output is cheaper than producing it, which grounds independent review and hard-wired checks. Divergence: the post's title on the page reads "verifier's rule", while terms.md and the URL say "verifier's law"; the page shows "Jul 15" without a year (2025 per terms.md). The post's argument concerns which tasks AI training will solve, not review practice.
- Status: already in terms.md

## Version control with Git

- Term: Git as reversibility mechanism
- Source 1: Chacon, S., & Straub, B. (2014). Pro Git (2nd ed.), 1.1 About Version Control. https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- Access: same URL, public; authors and licence not shown on the page (bibliographic knowledge: Apress, CC BY-NC-SA 3.0, unverified)
- Read: section 1.1 in full
- Supporting passage: "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later." (1.1)
- Supports: recording and reverting states ("revert the entire project back to a previous state", "if you screw things up or lose files, you can easily recover").
- Source 2: Anthropic (2025-11-26). Effective harnesses for long-running agents (as above)
- Supporting passage: commits "allowed the model to use git to revert bad code changes and recover working states of the code base." (Incremental progress)
- Supports: Git as the reversibility mechanism specifically for coding agents. No divergence.
- Status: new (Pro Git); terms.md (harness article)

## Northwind sample database

- Term: Northwind-Beispieldatenbank
- Source: Microsoft (n.d.). Northwind and pubs sample databases for Microsoft SQL Server. microsoft/sql-server-samples, `samples/databases/northwind-pubs/readme.md`; licence file `license.txt`. https://github.com/microsoft/sql-server-samples/tree/master/samples/databases/northwind-pubs
- Access: same URL and https://github.com/microsoft/sql-server-samples/blob/master/license.txt ; MIT License, "Copyright (c) Microsoft Corporation"
- Read: folder README in full; licence file opening; local workshop file `workshops/2026-11-09-ufl/data/README.md` and `LICENSE-northwind.txt`
- Supporting passage: "These scripts were originally created for SQL Server 2000." (folder README)
- Supports: Microsoft origin, MIT licence at repository level; the workshop's data README records the source script `instnwnd.sql`, retrieval on 2026-11-03 and the retained licence notice. Divergence: the folder README itself carries no licence statement; the MIT licence is the repository's. Side finding: the workshop data README describes Session 3 as handling a customer request (workshop, slides, website, AI rules), while the lecture notes' Hands-on 4 is an analysis tool from the Excel files; both use the same four files, but the two descriptions of the session's task differ.
- Status: new

## Ausblick templates

- Term: Second Brain Vault
- Source: chpollin/second-brain-vault, README. https://github.com/chpollin/second-brain-vault
- Access / Read: README; text and documentation CC BY 4.0, code MIT
- Supporting passage: "Second Brain connects a maintained personal research vault with the knowledge held in project repositories and the procedures that AI agents use to work with it." and "It contains synthetic example notes, executable skills, document conventions and structural checks."
- Supports: exists; personal working system with synthetic examples. No "research preview" label in the README.
- Status: already in lecture notes

- Term: Grounded Vault
- Source: DigitalHumanitiesCraft/grounded-vault, README. https://github.com/DigitalHumanitiesCraft/grounded-vault
- Access / Read: README; code MIT, documentation CC BY 4.0
- Supporting passage: "A provenance-complete knowledge base architecture for humans and AI agents." and "This repository is a template."
- Supports: exists; evidence-bound knowledge base. No "research preview" label.
- Status: already in lecture notes

- Term: Research Mission Control
- Source: DigitalHumanitiesCraft/research-mission-control, README. https://github.com/DigitalHumanitiesCraft/research-mission-control
- Access / Read: README; code MIT, documentation CC BY 4.0, fonts OFL-1.1, logos separate terms
- Supporting passage: "Research Mission Control describes how to assign such work to AI Operators" and "Role contracts separating conceptual work, implementation and independent verification."
- Supports: roles and handoffs for several agents. The README states the package is a release candidate ("Package 0.9.0rc5") and that "Comparative improvements in research quality, continuation or maintenance effort have not been established", which matches the notes' "Research Preview" caveat in substance though not in wording.
- Status: already in lecture notes

- Term: Promptotyping repository
- Source: DigitalHumanitiesCraft/Promptotyping, README (see Promptotyping above)
- Supports: exists; README says the repository "holds the practice specification and its supporting material, the templates, examples, site and tools". The canonical skill sits in a separate repository linked from the README.
- Status: already in lecture notes

## Terms without a read source

- Loop Engineering as a named term: no read source defines it; components are supported by Anthropic 2024, the Claude Code hooks docs and Anthropic 2025-11. The lecture notes point to an IBM Technology video, which is not acceptable as a definition source.
- The five-step path of fancy research tools and the rule "Ein Befund aus der Prüfung ändert zuerst die Wissensbasis": workshop material only, not on the provider's page.
- The deterministic/probabilistic taxonomy as worded in the notes: PAL supports only the arithmetic/computation side.

## Candidates without full text

- Pollin, C. (2026). Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering. Google Doc https://docs.google.com/document/d/1_Q6kLFxvnvLMRizN2F_uTkpwsaJ-Cp0uBw4REKfhDlM/edit : the fetch returned only the sign-in interface and the title; no text read. The Promptotyping README says the paper is maintained separately and not yet published.
- Chen, W. et al. (2022). Program of Thoughts Prompting. arXiv:2211.12588: only known through the PAL related-work section; not read.
- Schick, T. et al. (2023). Toolformer. arXiv:2302.04761: not read.
- Pro Git licence and author line, and Software Engineering at Google editors and year: bibliographic knowledge, not visible in the read pages.
