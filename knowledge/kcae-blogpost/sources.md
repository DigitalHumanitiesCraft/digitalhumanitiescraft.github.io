---
title: "Sources for the KCAE blog post"
created: 2026-11-04
status: draft
related: [plan.md, outline.md, grounding.md, research/session-1.md, research/session-2.md, research/session-3.md, research/weiterfuehrend.md]
---

# Sources for the KCAE blog post

The research sweep of 2026-11-04 ran one research agent per workshop session and one for the opening and "Weiterführend". Each agent searched primary sources with full-text access for the terms of its section and recorded, per term, the source, what it read, a supporting passage of at most 30 words and the divergence from the workshop wording. Their records are in `research/` and remain agent output.

The main session then checked every supporting passage against the source text. `scripts/kcae-blogpost/verify_quotes.py` fetches each access URL and tests whether the normalised passage occurs in the page or PDF text. Passages that failed this test were checked by hand, against the PDFs the agents had fetched, the official help repository of Obsidian on GitHub, or the page opened in a browser (Nature, EUR-Lex, PMC). The check establishes that each passage stands in its source. It does not establish that the whole source was read, which the column Read reports from the agent's own record, and it leaves the judgement whether a passage supports the post's claim to the writing phase and to the operator's verification.

The column agki-dh gives the item key in the Zotero group agki-dh (read through the local Zotero API on 2026-11-04) or "new". No entry was added to Zotero.

Since 2026-11-05 the vault DHCraft/kcae-blogpost-vault is the record of the sources the post uses. Each source has a distillate with its reading extent, its quotations checked character for character against the raw text (`tools/quote_check.py`) and its divergences in the Appraisal, and a CSL record in `references/`. This table stays as the record of the research sweep of 2026-11-04. The claim check of the deck of 2026-11-05 against the distillates is in `deck-claimcheck.md`.

## Source table

### Session 1

| Term | Source | Read | Quote check | agki-dh |
|---|---|---|---|---|
| LLM (probabilistic text generation, next-token prediction) | Shanahan (2022/2023). Talking About Large Language Models | partial | confirmed | 5U46E2FR, Brown 5T6U8UDB |
| Jagged capabilities / jagged frontier | Gans (2026). A Model of Artificial Jagged Intelligence | partial | confirmed (checked by hand) | 6ZYXMWMT |
| Confabulation (hallucination) | Farquhar, Kossen, Kuhn, Gal (2024). Detecting hallucinations in large language models using semantic entropy | partial | substance confirmed in the abstract, one quote not verbatim | new |
| Bias from training data | Gallegos, Rossi, Barrow, Tanjim, Kim, Dernoncourt, Yu, Zhang, Ahmed (2024). Bias and Fairness in Large Languag | partial | confirmed | UY77QDX6 |
| Sycophancy | Sharma et al. (2023). Towards Understanding Sycophancy in Language Models | partial | confirmed | UDBS8KQ5 |
| Interpretability (addition computed differently from the model's explanation) | Lindsey et al. (2025). On the Biology of a Large Language Model | partial | confirmed | HZSNFW9W |
| Knowledge cut-off and no continual learning | Cheng, Marone, Weller, Lawrie, Khashabi, Van Durme (2024). Dated Data: Tracing Knowledge Cutoffs in Large Lang | full | confirmed (checked by hand) | new |
| Reasoning models / thinking tokens (test-time compute) | Snell, Lee, Xu, Kumar (2024). Scaling LLM Test-Time Compute Optimally Can Be More Effective Than Scaling Model | full | confirmed (checked by hand) | Y4LCSMJT |
| AI Agent | Sapkota, Roumeliotis, Karkee (2025). AI Agents vs | partial | confirmed | X5XVK8K2 |
| AI Harness | Zhong, Zhu (2026). AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | full | confirmed | CSQPEVVM |
| Tool Use | Yao et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models | full | confirmed (checked by hand) | new |
| Prompt Engineering | Anthropic (n.d., read 2026-11-04). Prompt engineering overview | full | confirmed, one elided quote matches only in parts | new |
| Harness Engineering | Zhong, Zhu (2026), as under AI Harness. The paper formalises "AI Harness Engineering" and lists eleven respons | full | confirmed | new |
| Markdown | Gruber (2004). Markdown | full | confirmed | new |
| Token | Sennrich, Haddow, Birch (2016). Neural Machine Translation of Rare Words with Subword Units | full | confirmed | new |
| Tokenizer | Sennrich, Haddow, Birch (2016), as above. Passage on BPE: "iteratively replaces the most frequent pair of byte | full | confirmed (checked by hand) | new |
| Wissensdokument (knowledge document, externalised knowledge) | Karpathy (2026-04-04). LLM Wiki | full | confirmed | new |
| AI Slop | Shaib, Chakrabarty, Garcia-Olano, Wallace (2025). Measuring AI "Slop" in Text | full | confirmed | new |
| Self-Verification and Self-Refine | Madaan et al. (2023). Self-Refine: Iterative Refinement with Self-Feedback | full | confirmed, one quote with a formula symbol matches only in parts | WUIF53TK |
| LLM-as-a-Judge | Zheng et al. (2023). Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena | full | confirmed | new |
| Subagents | Anthropic (n.d., read 2026-11-04). Create custom subagents | partial | confirmed | new |
| Context Window | Anthropic (n.d., read 2026-11-04). Context windows | full | confirmed | new |
| Context Rot | Hong, Troynikov, Huber (2025-07-14). Context Rot: How Increasing Input Tokens Impacts LLM Performance | full | confirmed | PHTN3H8F |
| Context compression (/compact) | Anthropic (n.d., read 2026-11-04). Explore the context window | full | confirmed | new |
| AGENTS.md and CLAUDE.md | AGENTS.md (n.d., read 2026-11-04). | full | confirmed | new |
| Memory (agent-written memory) | Anthropic (n.d.). How Claude remembers your project, as above | partial | confirmed (checked by hand) | new |
| Skill (Agent Skills, progressive disclosure) | Agent Skills (n.d., read 2026-11-04). Specification | full | confirmed | new |
| MCP (Model Context Protocol) | Model Context Protocol (2025-11-25). Specification | partial | confirmed | new |
| RAG (Retrieval-Augmented Generation) | Lewis et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | full | confirmed | 4S8AZBEN |
| Context Engineering (Mei et al. 2025 taxonomy) | Mei, Yao, Ge, et al. (2025). A Survey of Context Engineering for Large Language Models | partial | confirmed (checked by hand) | BU8XNYJC |

### Session 2

| Term | Source | Read | Quote check | agki-dh |
|---|---|---|---|---|
| Agentic Engineering levels: harness | Zhong, H., & Zhu, S. (2026). AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents | partial | confirmed (checked by hand) | CSQPEVVM |
| Agentic Engineering levels: loop | Anthropic (2024-12-19). Building effective agents | full | confirmed | new |
| AI governance on two levels (agent level) | Liu (2026), as above | full | confirmed (checked by hand) | new |
| Rule of Two | Meta AI (2025-10-31). Agents Rule of Two: A Practical Approach to AI Agent Security | full | confirmed | new |
| Prompt injection | Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you've signed up f | partial | confirmed | new |
| Agent harness governance (Liu 2026) | Liu (2026), as in entry 1 | full | confirmed (checked by hand) | new |
| Permission Modes (Claude Code) | Anthropic (n.d., accessed 2026-11-04). Choose a permission mode | partial | confirmed | new |
| Autonomy levels for agents | Feng, K. J. K., McDonald, D. W., & Zhang, A. X. (2025). Levels of Autonomy for AI Agents | full | confirmed | new |
| Hooks | Anthropic (n.d., accessed 2026-11-04). Hooks reference | partial | confirmed | new |
| Sandboxing | Anthropic (n.d., accessed 2026-11-04). Sandboxing | partial | confirmed | new |
| Least privilege | Saltzer, J. H., & Schroeder, M. D. (1975). The Protection of Information in Computer Systems | partial | confirmed | new |
| Knowledge Engineering | Allen, B. P., Stork, L., & Groth, P. (2023). Knowledge Engineering Using Large Language Models | partial | confirmed (checked by hand) | Y4NIAKHM |
| Personal Information Management | Jones, W., Dinneen, J. D., Capra, R., Diekema, A. R., & Pérez-Quiñones, M. A. (2017). Personal Information Man | full | confirmed (checked by hand) | new |
| Projektmanagement | European Commission, DG DIGIT, Centre of Excellence in Project Management (2023). PM² Project Management Metho | full | confirmed (checked by hand) | new |
| Knowledge modelling / knowledge base (CommonKADS) | Studer, Benjamins & Fensel (1998), as in entry 12 | partial | confirmed (checked by hand) | new |
| Docling | Auer, C., Lysak, M., Nassar, A., Dolfi, M., Livathinos, N., Vagenas, P., et al. (2024). Docling Technical Repo | full | confirmed | ZGIIGIW4 |
| OCR | Auer et al. (2024), as above | full | confirmed (checked by hand) | new |
| Promptotyping Documents | Digital Humanities Craft (2026-08-22). Convention Knowledge Documents, version 0 | full | confirmed | new |
| Obsidian and vault | Obsidian (n.d., accessed 2026-11-04). Create a vault | full | confirmed (checked by hand) | new |
| YAML front matter / properties | Obsidian (n.d.). Properties | partial | confirmed (checked by hand) | new |
| Wikilinks and backlinks | Obsidian (n.d.). Internal links | full | confirmed (checked by hand) | new |
| Tag taxonomy / controlled vocabulary | National Information Standards Organization (2005, reaffirmed 2010). ANSI/NISO Z39 | full | confirmed (checked by hand) | new |
| Maps of Content | Linking Your Thinking (n.d.). MOCs (defn) | full | open, the page renders only in a full browser and could not be read here | new |
| Curation | Higgins, S. (2008). The DCC Curation Lifecycle Model (model description) | full | confirmed (checked by hand) | new |
| Vault governance and LLM-maintained wiki | Karpathy, A. (2026-04-04). LLM Wiki | partial | confirmed | new |
| How I use Obsidian | Ango, S. (n.d.). How I use Obsidian | full | confirmed | new |

### Session 3

| Term | Source | Read | Quote check | agki-dh |
|---|---|---|---|---|
| fancy (research) tools & workflows | Digital Humanities Craft OG (n.d.). fancy (research) tools & workflows | full | open, the page was renamed and its lede rewritten on 2026-11-05, the passages read on 2026-11-04 need a new check after the deploy | new |
| Promptotyping | Digital Humanities Craft OG (n.d.). Promptotyping | full | confirmed | new |
| Evaluator-optimizer and stopping conditions | Anthropic (2024-12-19). Building effective agents | full | confirmed | new |
| Hard-wired check the agent cannot skip | Anthropic (n.d.). Automate actions with hooks; Hooks reference | full | confirmed | new |
| Long-running harness | Anthropic (2025-11-26). Effective harnesses for long-running agents | full | confirmed | new |
| Workflows vs agents | Anthropic (2024-12-19). Building effective agents (as above) | full | confirmed (checked by hand) | new |
| Subagent (Claude Code) | Anthropic (n.d.). Create custom subagents | partial | confirmed | new |
| Subagent (Codex) | OpenAI (2026). Subagents | full | confirmed | new |
| Dynamic workflows | Anthropic (2026-05-28). Introducing dynamic workflows in Claude Code | full | confirmed | new |
| Token cost of multi-agent systems | Anthropic (2025-06-13). How we built our multi-agent research system | full | confirmed | new |
| Parallel sessions | Anthropic (n.d.). Message your other Claude Code sessions | full | confirmed | new |
| Deterministic vs probabilistic computation | Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2023). PAL: Program-aide | full | confirmed | new |
| LLM-as-a-Judge | Zheng, L., Chiang, W.-L., Sheng, Y., Zhuang, S., Wu, Z., Zhuang, Y., Lin, Z., Li, Z., Li, D., Xing, E. P., Zha | full | confirmed (checked by hand) | new |
| Human acceptance and turning bugs into tests | Bender, A. (2020). Testing Overview | full | confirmed | new |
| Asymmetry of verification | Wei, J. (2025-07-15). Asymmetry of verification and verifier's rule | full | confirmed | new |
| Version control with Git | Chacon, S., & Straub, B. (2014). Pro Git (2nd ed | full | confirmed (checked by hand) | new |
| Northwind sample database | Microsoft (n.d.). Northwind and pubs sample databases for Microsoft SQL Server | full | confirmed | new |
| Ausblick templates | chpollin/second-brain-vault, README. | full | confirmed | new |

### Opening and Weiterführend

| Term | Source | Read | Quote check | agki-dh |
|---|---|---|---|---|
| Few-shotted for Breakfast (Karpathy, post of 1 Nov 2026) | Karpathy, A. (2026-11-01). "Weekend hack: HackerTube | full | confirmed | new |
| "I've never felt this much behind as a programmer" (Karpathy, post of 26 Dec 2025) | Karpathy, A. (2025-12-26). Post on X | partial | confirmed | new |
| Software für alle (end-user / malleable software) | Litt, G., Horowitz, J., van Hardenberg, P., & Matthews, T. (2025, June). Malleable software | full | confirmed | new |
| Vibe Coding | Karpathy, A. (2025-02-02). "There's a new kind of coding I call 'vibe coding'  | full | confirmed | new |
| Agentic Engineering | Willison, S. (n.d., guide introduced 2026). What is agentic engineering? In *Agentic Engineering Patterns* | full | confirmed | new |
| Agentic Software Engineering (supporting scholarly source) | Hassan, A. E., Li, H., Lin, D., Adams, B., Chen, T.-H., Kashiwa, Y., & Qiu, D. (2025). Agentic Software Engine | full | confirmed | new |
| Agentic (Knowledge and Research) Engineering, background (term dropped 2026-11-05, see divergences) | Allen, B. P., Stork, L., & Groth, P. (2023). Knowledge Engineering Using Large Language Models | full | confirmed | Y4NIAKHM |
| Computational Thinking | Wing, J. M. (2006). Computational Thinking. *Communications of the ACM*, 49(3), 33–35. https://doi.org/10.1145/1118178.1118215 | full | confirmed | new |
| Computational Thinking, abstraction as core | Wing, J. M. (2008). Computational thinking and thinking about computing. *Phil. Trans. R. Soc. A*, 366, 3717–3725. https://doi.org/10.1098/rsta.2008.0118 | full | open, read by a research agent on 2026-11-05, passages not yet checked here | new |
| Computational Thinking, components | Shute, V. J., Sun, C., & Asbell-Clarke, J. (2017). Demystifying computational thinking. *Educational Research Review*, 22. https://doi.org/10.1016/j.edurev.2017.09.003 | full | open, read by a research agent on 2026-11-05, passages not yet checked here | new |
| Vibe Coding, review criterion | Willison, S. (2025-03-19). Not all AI-assisted programming is vibe coding (but vibe coding rocks). https://simonwillison.net/2025/Mar/19/vibe-coding/ | full | open, read by a research agent on 2026-11-05, passages not yet checked here | new |
| Vibe Coding, wording of Karpathy's post | Sarkar, A., & Drosos, I. (2025). Vibe coding: programming through conversation with artificial intelligence. PPIG 2025. arXiv:2506.23253 | full | confirmed | new |
| Promptotyping | Pollin, C. (2026). Promptotyping. Translating Research Data into Research Artefacts through Knowledge, Context, and Agentic Engineering. Version 1.0, Google Doc | full | confirmed | new |
| METR Time Horizons | Kwa, T., West, B., Becker, J., ... Kinniment, M., ... Barnes, E., & Chan, L. (2025). Measuring AI Ability to C | full | confirmed | new |
| SWE-bench | Jimenez, C. E., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., & Narasimhan, K. (2024). SWE-bench | partial | confirmed | 3EG3JVFJ |
| Terminal-Bench | Merrill, M. A., Shaw, A. G., et al. (2026). Terminal-Bench | partial | confirmed | new |
| ARC-AGI-3 | ARC Prize Foundation (n.d.). ARC-AGI-3 | partial | confirmed | new |
| SimpleBench | SimpleBench (n.d.). SimpleBench | partial | confirmed | new |
| Recursive Self-Improvement | Kokotajlo, D., Alexander, S., Larsen, T., Lifland, E., & Dean, R. (2025-04-03). AI 2027 | partial | confirmed | new |
| Text watermarking, SynthID-Text | Dathathri, S., et al. (2024) (full author list not checked). Scalable watermarking for identifying large langu | full | confirmed (checked by hand) | new |
| Text watermarking, originating scheme | Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Lan | partial | confirmed | new |
| Image watermarking, TrustMark | Bui, T., Agarwal, S., & Collomosse, J. (2023). TrustMark | full | confirmed | new |
| C2PA Content Credentials | Coalition for Content Provenance and Authenticity (2025). Content Credentials | partial | confirmed | new |
| EU AI Act, Art. 50 and application date | Regulation (EU) 2024/1689 (Artificial Intelligence Act). OJ L, 2024/1689, 12 | full | confirmed (checked by hand) | new |
| EU AI Act amendment, Digital Omnibus on AI | Regulation (EU) 2026/1744 of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/123 | partial | confirmed (checked by hand) | new |

## Terms without a read source

These terms of the outline have no source whose text was read and checked. The post either finds one before Phase 5 or states them as the workshop's own working terms.

- Loop Engineering as a term. Its parts are covered (evaluator-optimizer pattern, hooks, long-running harnesses), the term itself rests on a video.
- The five levels of agentic engineering (prompt, knowledge and context, harness, loop, factory) as one scheme, and Factory in particular. The deck's source is a video.
- The data level of AI governance and its five questions (visibility, classification, jurisdiction, access, evidence). The deck's source is a video, and Liu (2026) does not use this frame.
- Externalised knowledge as theory behind the knowledge document. Nonaka (1994) could not be opened.
- The claim that Markdown costs an LLM fewer tokens than Word XML.
- In Prompt Engineering, the claim that the form of a prompt matters less than goal, knowledge and success criteria, and the strategies of clarifying questions and milestones.
- The sequence of steps of knowledge modelling attributed to Russell and Norvig (2020). The book was not accessible.
- A general definition of OCR, beyond Docling's own use of it.
- A scholarly definition of recursive self-improvement. Good (1965) could not be opened, and AI 2027 is a scenario.
- The five-step path of fancy (research) tools & workflows and the split into deterministic and probabilistic tasks, both the provider's own framing.
- Maps of Content. The originator's page was read by the agent but could not be checked here.
- Software für alle has a source (malleable software essay), but the question of who maintains a self-built tool is the workshop's own.

## Sources read only in part

The agents read long texts through a fetch tool limited to 100,000 characters per call. These sources need a second, complete reading before they anchor an assertion, as the full-reading rule requires: Mei et al. (2025), Gans (2026), Sapkota, Roumeliotis and Karkee (2025), Gallegos et al. (2024), Snell et al. (2024), Ji et al. (2023), Brown et al. (2020), Greshake et al. (2023), Allen, Stork and Groth (2023) in its body text, Kirchenbauer et al. (2023) in its appendices, the C2PA specification, Regulation (EU) 2026/1744 beyond its Art. 50 provisions, and the long Claude Code pages on permission modes, hooks and sandboxing.

## Candidates without full text

Dell'Acqua et al. (2026), Nonaka (1994), Xu et al. (2025), Kuster et al. (2022), Russell and Norvig (2020), Schreiber et al. (2000), Higgins (2008) in its journal version, Good (1965), the OpenAI post on harness engineering, the ARC-AGI-3 technical report, the SimpleBench report, and the Promptotyping paper by Pollin (2026), which is not yet published. The lecture notes cite Dell'Acqua et al. and Xu et al.; both stay out of the post until their text is read.

## Divergences between workshop and sources

The research agents reported these divergences. The two AI Act points were checked on EUR-Lex in this session, the others are agent findings that the writing phase confirms against the source before it changes the wording or the citation.

- AI Act. Art. 50 applies from 2 August 2026 (Art. 113 of Regulation (EU) 2024/1689). Regulation (EU) 2026/1744 of 8 July 2026 (Digital Omnibus on AI) adds that providers of systems generating synthetic content that were placed on the market before 2 August 2026 comply with Art. 50(2) by 2 December 2026. Watermarks are named in recital 133, not in Art. 50. Checked on EUR-Lex.
- TrustMark (Bui et al., 2023) does not support "gezielte Angriffe können es entfernen". Its removal network restores the original image for re-marking.
- Rule of Two. Meta AI (2025) requires supervision when all three properties are needed, which can also be another reliable validation or a new session. "Entscheidet ein Mensch" is narrower.
- Permission Modes. The documentation lists six modes including `dontAsk`, describes auto mode as everything with background safety checks, and names exceptions to the protected paths. Sandboxing does not apply on native Windows.
- Codex memories are stored under `$CODEX_HOME/memories_v2/`, and `/memories` controls only the current chat.
- Promptotyping Documents is the former name of the document class, now Knowledge Document in the Promptotyping specification. The Promptotyping repository calls Promptotyping a working practice.
- Confabulation in Farquhar et al. (2024) is a subset of hallucination (wrong and arbitrary claims). Ji et al. (2023) carries the general definition.
- Gans (2026) describes uneven performance on tasks that appear nearby, not success on hard and failure on easy tasks.
- Zhong and Zhu (2026) place the harness around the agent and do not name stop conditions.
- Mei et al. (2025) has three foundational components plus a layer of system implementations. The workshop's fourth stage stands for that layer.
- RAG in Lewis et al. (2020) is a learned retriever over a vector index. The workshop's wider use (an agent searching files) is supported by Anthropic (2025) on context engineering.
- AI slop is defined for text in Shaib et al. (2025), the workshop applies it to interfaces.
- PIM. Jones et al. (2017) name integration as the key challenge, fragmentation as one issue among others.
- PM². Monitor and Control runs across the whole project rather than forming a phase.
- Docling. The report does not name the DoclingDocument or sensitive data, only the project documentation does.
- Tag taxonomy. Z39.19 does not require non-overlapping categories, that is the workshop's design choice. The DCC lifecycle concerns research data, so it serves curation in a vault only as an analogy.
- Dynamic workflows. The source has other agents try to refute findings, the notes say "bis die Ergebnisse übereinstimmen".
- Evaluator-optimizer. In Anthropic (2024) the evaluator is an LLM call, the workshop's loop uses a hard-wired script.
- Vibe coding in Karpathy (2025) is limited to throwaway weekend projects. Willison (2026) does not mention humans setting the scope of action.
- Vibe coding, findings of the session of 2026-11-05. Karpathy's post has no title, so the citation uses its opening words. Willison (2025) dates the post to 6 February, the status id and Sarkar and Drosos (2025) give 2 February. Willison draws the line by review and production standard. The operator's post "Haters gonna hate" (2025) includes validation and testing in vibe coding and does not support the narrow definition. Sapkota et al. (2025) separate vibe and agentic coding by autonomy and include review in vibe coding, so they contradict the section.
- Agentic engineering. No peer-reviewed paper defining the term was found. Willison (2026) carries the definition, and the term is attributed to a post by Karpathy of 4 February 2026 that was read only second-hand. Willison counts updating instructions and harness as part of agentic engineering, so recorded knowledge alone does not separate Promptotyping from it. The separation rests on the paper's two criteria, project knowledge checked against the sources and scholarly validation by the researchers.
- Computational Thinking. The working definition follows Cuny, Snyder and Wing (cited via Wing 2011) in formulating a problem and its solution, which answers the critique of Tedre and Denning (2016) that issuing commands is no computational thinking. No source places the three ways of working on a scale of computational thinking. The axis label therefore names checking and recorded project knowledge.
- Neighbouring work for later sections, agent reports not yet checked here. Hassan et al. (2025, preprint) describe durable structured artefacts as contracts and institutional memory for agents. Zigler (2026, VibeX workshop) proposes externalising tacit knowledge into Markdown before implementation. Koch (2026, preprint) scales required evidence and human sign-off with risk levels.
- Promptotyping paper. Version 1.0 is titled "… through Knowledge, Context, and Agentic Engineering", earlier deck citations read "with Context and Agentic Engineering".
- METR time horizons. arXiv:2503.14499 is first-authored by Kwa, titled "Measuring AI Ability to Complete Long Software Tasks". The KCAE glossary's entry "Kinniment et al. (2025)" needs correcting.
- The Chroma context-rot report moved to https://www.trychroma.com/research/context-rot.
- The workshop's `data/README.md` describes a different Session 3 task than Hands-on 4 in the lecture notes, with the same Excel files.

## Proposed additions to agki-dh

Every source marked "new" in the table that is a publication (papers, books, standards, legal texts) is a candidate for the Zotero group, after a DOI and version check at the time of entry. Vendor documentation and the provider's own pages stay as web references. Adding entries needs the operator's write authorisation for the concrete list.
