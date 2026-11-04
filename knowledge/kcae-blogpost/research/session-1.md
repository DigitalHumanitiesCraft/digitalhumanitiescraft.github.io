# Session 1 sources: Prompt and Context Engineering

Research date 2026-11-04. Scope is the terms of Session 1 in `workshops/2026-11-09-ufl/lecture-notes.md`.

## Method and reading limits

- All texts were read through a web fetch tool that converts the page to text. The tool reads at most 100,000 characters per call. For long arXiv papers this covers the abstract, introduction and the core sections, but not always appendices or the final sections. The "Read" field states the range for each source. Where a range ends before the end of the paper, the paper was not read in full, and that limits the operator's "read in full before citing" rule. A second pass with offsets is needed before publication if the full-reading rule is applied strictly.
- The tool returns quotes through an extraction model. The quotes below match what the tool returned, but they should be spot-checked against the page before they are printed in the blog post. Vendor documentation pages were returned as raw text and are therefore reliable verbatim.
- Two PDFs (arXiv 2005.11401 and arXiv 2505.10468v4) were cached to disk automatically by the fetch tool under `C:\Users\Chrisi\.claude\projects\...\tool-results\`. This was not a deliberate download. They were not opened from disk. Both papers were then read through their HTML versions.
- Venue details not visible on the read page (ICLR 2024 for Sharma et al., COLM 2024 for Cheng et al., Findings of EMNLP 2023 for Weng et al., NeurIPS Datasets and Benchmarks for Zheng et al., Computational Linguistics 50(3) for Gallegos et al., ACM Computing Surveys 55(12) for Ji et al., ACL DOI for Sennrich et al., volume and pages for Farquhar et al.) come from bibliographic knowledge, not from the read text, and need a DOI check before printing.
- Status values: "lecture notes" means the source is in the Session 1 text or the Literatur list; "terms.md" means it is in `knowledge/terms.md` References; "new" means neither.

## Terms

### LLM (probabilistic text generation, next-token prediction)

- Source: Shanahan (2022/2023). Talking About Large Language Models. arXiv:2212.03551v5. https://doi.org/10.48550/arXiv.2212.03551
- Access: https://arxiv.org/html/2212.03551v5 (arXiv HTML, open access)
- Read: whole paper, sections 1 to 13
- Supporting passage: "generative mathematical models of the statistical distribution of tokens" (Section 2, What LLMs Really Do); also "what words are likely to come next?" (Section 2)
- Supports: the probabilistic, next-token character of LLMs. Shanahan's framing is philosophical (against anthropomorphism), not a technical specification.
- Status: new
- Second source: Brown et al. (2020). Language Models are Few-Shot Learners. NeurIPS 33. arXiv:2005.14165. Read via https://ar5iv.labs.arxiv.org/html/2005.14165, abstract and sections 1 to 3.9.4 (sections 4 to 8 and appendices not read). Passage: "we train GPT-3, an autoregressive language model with 175 billion parameters" (Abstract). Supports "autoregressive". Status: terms.md.

### Jagged capabilities / jagged frontier

- Source: Gans (2026). A Model of Artificial Jagged Intelligence. arXiv:2601.07573. https://doi.org/10.48550/arXiv.2601.07573
- Access: https://arxiv.org/html/2601.07573 (arXiv HTML, open access)
- Read: abstract and sections 1 to roughly 3 (first 100,000 of 250,000 characters); later sections not read
- Supporting passage: "Generative AI systems often display highly uneven performance across tasks that appear "nearby"" (Abstract); the paper names this "Artificial Jagged Intelligence (AJI)".
- Supports: the uneven distribution of capabilities. Divergence: Gans speaks of tasks that appear "nearby" and of local unevenness in reliability, not of solving hard tasks while failing on seemingly easy ones, which is the workshop wording.
- Status: lecture notes, terms.md
- Dell'Acqua et al. (2026) could not be opened, see Candidates without full text.

### Confabulation (hallucination)

- Source: Farquhar, Kossen, Kuhn, Gal (2024). Detecting hallucinations in large language models using semantic entropy. Nature 630, 625–630. https://doi.org/10.1038/s41586-024-07421-0
- Access: https://pmc.ncbi.nlm.nih.gov/articles/PMC11186750/ (PMC, CC BY 4.0)
- Read: whole article (Main, result sections, Discussion, Methods)
- Supporting passage: "we call 'confabulations' for which LLMs fluently make claims that are both wrong and arbitrary" (Main)
- Supports: confabulation as fluent, false claims. Divergence: Farquhar et al. define confabulation as a subset of hallucination (wrong and arbitrary, sensitive to sampling), narrower than the workshop's use as a general alternative term for hallucination.
- Status: new
- Second source: Ji et al. (2023). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys 55(12). https://doi.org/10.1145/3571730. Read via https://ar5iv.labs.arxiv.org/html/2202.03629, sections 1 to about 5 (first 100,000 of 306,000 characters). Passage: "the generated content that is nonsensical or unfaithful to the provided source content" (Section 2, Definitions). Supports the general hallucination definition. Status: terms.md.

### Bias from training data

- Source: Gallegos, Rossi, Barrow, Tanjim, Kim, Dernoncourt, Yu, Zhang, Ahmed (2024). Bias and Fairness in Large Language Models: A Survey. Computational Linguistics 50(3). arXiv:2309.00770. https://doi.org/10.48550/arXiv.2309.00770
- Access: https://arxiv.org/html/2309.00770 (arXiv, perpetual non-exclusive licence)
- Read: abstract, section 1 and section 2 to early section 3 (first 100,000 of 350,000 characters)
- Supporting passage: "LLMs inherit stereotypes, misrepresentations, derogatory and exclusionary language" (Section 1), in a paragraph that attributes this to training "on an enormous scale of uncurated Internet-based data".
- Supports: bias originating in training data. The fetched page did not name the journal; the journal attribution comes from the operator's metadata knowledge and should be checked.
- Status: new

### Sycophancy

- Source: Sharma et al. (2023). Towards Understanding Sycophancy in Language Models. arXiv:2310.13548 (ICLR 2024). https://doi.org/10.48550/arXiv.2310.13548
- Access: https://arxiv.org/html/2310.13548 (arXiv HTML)
- Read: abstract, sections 1 to 8, appendix A, part of appendix B (appendices C, D not read)
- Supporting passage: "human feedback can encourage model responses that match user beliefs over truthful ones, a behavior known as sycophancy" (Abstract)
- Supports: the tendency to tell users what they want to hear. The source adds a causal finding the workshop does not state: sycophancy is likely driven in part by human preference judgments.
- Status: terms.md

### Interpretability (addition computed differently from the model's explanation)

- Source: Lindsey et al. (2025). On the Biology of a Large Language Model. Transformer Circuits Thread. https://transformer-circuits.pub/2025/attribution-graphs/biology.html
- Access: same URL (open)
- Read: Introduction through "Life of a Jailbreak", including the full "Addition" section (first 100,000 of 188,000 characters); later sections (Chain-of-thought Faithfulness onward) not read
- Supporting passage: the model explains "I added the ones (6+9=15), carried the 1, then added the tens"; the authors answer "Apparently not!" and conclude the model has "a capability which it does not have 'metacognitive' insight into" (Addition)
- Supports: the workshop claim exactly, that the model computes addition along internal paths different from its self-description.
- Status: lecture notes, terms.md

### Knowledge cut-off and no continual learning

- Source: Cheng, Marone, Weller, Lawrie, Khashabi, Van Durme (2024). Dated Data: Tracing Knowledge Cutoffs in Large Language Models. arXiv:2403.12958 (COLM 2024). https://doi.org/10.48550/arXiv.2403.12958
- Access: https://arxiv.org/html/2403.12958 (arXiv HTML)
- Read: whole paper including appendices A to D
- Supporting passage: LLMs are "often paired with a reported cutoff date, the time at which training data was gathered"; "effective cutoffs often drastically differ from reported cutoffs" (Abstract)
- Supports: the knowledge cut-off. The finding adds nuance the workshop could use: the effective cut-off can differ from the reported one. The venue was not shown on the fetched page.
- Status: new
- Second source: Wu, Luo, Li, Pan, Vu, Haffari (2024). Continual Learning for Large Language Models: A Survey. arXiv:2402.01364. Read via https://arxiv.org/html/2402.01364, whole survey. Passage: "Large language models (LLMs) are not amenable to frequent re-training" (Abstract), followed by the need to "keep them up-to-date with rapidly evolving human knowledge". Supports "no continual learning in use". This is the survey's motivation, not an empirical finding. Status: new.

### Reasoning models / thinking tokens (test-time compute)

- Source: Snell, Lee, Xu, Kumar (2024). Scaling LLM Test-Time Compute Optimally Can Be More Effective Than Scaling Model Parameters. arXiv:2408.03314. https://doi.org/10.48550/arXiv.2408.03314
- Access: https://arxiv.org/html/2408.03314 (arXiv HTML)
- Read: sections 1 to 8 and most appendices (100,000 of 110,000 characters)
- Supporting passage: "Enabling LLMs to improve their outputs by using more test-time computation" (Abstract)
- Supports: test-time compute as the principle behind reasoning. Snell et al. study search against verifiers and revision models, not "thinking tokens" as such.
- Status: terms.md
- Second source: Anthropic (n.d., read 2026-11-04). Extended thinking. Claude Platform Docs. https://platform.claude.com/docs/en/build-with-claude/extended-thinking. Read whole page. Passage: "Claude thinks against that budget before it starts its final answer." (introduction). The companion page Context windows (https://platform.claude.com/docs/en/build-with-claude/context-windows) states "Thinking tokens are a subset of your `max_tokens` parameter, are billed as output tokens" (The context window with thinking). Supports "additional thinking tokens before the answer". Note that the page marks manual extended thinking as a legacy feature replaced by adaptive thinking. Status: new.

### AI Agent

- Source: Sapkota, Roumeliotis, Karkee (2025). AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges. Information Fusion 126, 103599. arXiv:2505.10468. https://doi.org/10.1016/j.inffus.2025.103599
- Access: https://arxiv.org/html/2505.10468v1 (arXiv HTML)
- Read: abstract and sections I to IV (first 100,000 of 200,000 characters); sections V to VII not read
- Supporting passage: "characterizing AI Agents as modular systems driven by LLMs and LIMs for narrow, task-specific automation" (Abstract); Section II-1 names autonomy, task-specificity and reactivity.
- Supports: LLM-driven, goal-bound, limited autonomy. The planning-and-tool-selection part of the workshop definition rests more on the second source.
- Status: lecture notes, terms.md
- Second source: Anthropic (2024-12-19). Building effective agents. https://www.anthropic.com/engineering/building-effective-agents. Read whole article. Passage: "Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage" (What are agents?). Status: lecture notes, terms.md.

### AI Harness

- Source: Zhong, Zhu (2026). AI Harness Engineering: A Runtime Substrate for Foundation-Model Software Agents. arXiv:2605.13357. https://doi.org/10.48550/arXiv.2605.13357
- Access: https://arxiv.org/html/2605.13357v1 (arXiv HTML)
- Read: whole paper (Abstract to Methods and References)
- Supporting passage: "a runtime substrate surrounding a foundation-model software agent that manages context, tools, project memory, task state" (The AI Harness Engineering, Definition)
- Supports: harness as runtime layer that manages context, state and tool execution; permissions appear among the eleven responsibilities. Divergence: the source does not name termination conditions, and it places the harness around the agent, not around the model.
- Status: lecture notes, terms.md
- Second source: LangChain (2026-03-10). The anatomy of an agent harness. https://www.langchain.com/blog/the-anatomy-of-an-agent-harness. Read whole article. Passage: "A harness is every piece of code, configuration, and execution logic that isn't the model itself." Status: lecture notes. Secondary vendor blog.

### Tool Use

- Source: Yao et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. ICLR 2023. arXiv:2210.03629. https://doi.org/10.48550/arXiv.2210.03629
- Access: https://arxiv.org/html/2210.03629 (arXiv HTML)
- Read: sections 1 to 6 and appendices A to most of E (100,000 of 124,000 characters)
- Supporting passage: "ReAct prompts LLMs to generate both verbal reasoning traces and actions pertaining to a task in an interleaved manner" (Section 1)
- Supports: the loop of decision, tool call and feedback; Section 2 describes how each observation updates the context.
- Status: new
- Second source: Anthropic (2024), Building effective agents (as above). Passage: agents "gain 'ground truth' from the environment at each step (such as tool call results or code execution)" (Agents). Status: lecture notes, terms.md.
- Xu et al. (2025) could not be opened, see Candidates without full text.

### Prompt Engineering

- Source: Anthropic (n.d., read 2026-11-04). Prompt engineering overview. Claude Platform Docs. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
- Access: same URL
- Read: whole page
- Supporting passage: the guide assumes "A clear definition of the success criteria for your use case" and "Some ways to empirically test against those criteria" (Before prompt engineering)
- Supports: success criteria as precondition.
- Status: terms.md
- Second source: Anthropic (n.d.). Prompting best practices. https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices. Read whole page. Passages: "A few well-crafted examples (known as few-shot or multishot prompting) improve accuracy and consistency." and "Providing context or motivation behind your instructions [...] can give Claude more information about your goals" (Use examples; Add context). Supports few-shot examples and goal/knowledge in the prompt. Status: terms.md.
- Divergence: neither page supports the workshop thesis that the form of a prompt hardly matters; the best-practices page still teaches form-related techniques (XML structuring, format control). Clarifying questions and milestones are not covered by a read source.

### Harness Engineering

- Source: Zhong, Zhu (2026), as under AI Harness. The paper formalises "AI Harness Engineering" and lists eleven responsibilities, among them "task specification, context selection, tool access, project memory, task state" plus verification, permissions, observability (Abstract).
- Supports: harness engineering as designing the environment that steers and checks work.
- Status: lecture notes, terms.md
- Second source: Anthropic (2025-11-26). Effective harnesses for long-running agents. https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents. Read whole article. Passage: "Providing Claude with these kinds of testing tools dramatically improved performance, as the agent was able to identify and fix bugs" (Testing). Supports the checking side of harness engineering through progress file, feature list, git and tests. Status: terms.md.
- OpenAI's "Harness engineering" post returned HTTP 403, see Candidates without full text.

### Markdown

- Source: Gruber (2004). Markdown. Daring Fireball. https://daringfireball.net/projects/markdown/
- Access: same URL
- Read: whole page
- Supporting passage: "The overriding design goal for Markdown's formatting syntax is to make it as readable as possible." A Markdown document should be "publishable as-is, as plain text."
- Supports: lightweight markup expressing structure in plain text. The token-efficiency claim against Word XML is not supported by this source; it is a workshop observation (the comparison could be shown with a tokenizer).
- Status: new (markdownguide.org is in lecture notes and terms.md)

### Token

- Source: Sennrich, Haddow, Birch (2016). Neural Machine Translation of Rare Words with Subword Units. ACL 2016. arXiv:1508.07909. https://doi.org/10.18653/v1/P16-1162
- Access: https://ar5iv.labs.arxiv.org/html/1508.07909 (arXiv)
- Read: whole paper
- Supporting passage: "encoding rare and unknown words as sequences of subword units" (Abstract)
- Supports: token as word or word part. The source concerns machine translation, the technique was later adopted for LLM tokenisation; that bridge is an inference, not stated in the text.
- Status: terms.md

### Tokenizer

- Source: Sennrich, Haddow, Birch (2016), as above. Passage on BPE: "iteratively replaces the most frequent pair of bytes in a sequence with a single, unused byte" (Section 3.2, describing the original compression algorithm adapted for words).
- Second source: Anthropic (n.d., read 2026-11-04). Token counting. https://platform.claude.com/docs/en/build-with-claude/token-counting. Read whole page. Passage: "Claude 4.7 and later models and Claude Mythos Preview use a newer tokenizer. The same input text produces approximately 30 percent more tokens than on earlier models." (Supported models)
- Supports: the tokenizer depends on the model, and counts differ between tokenizers.
- Status: Sennrich terms.md; token counting page new

### Wissensdokument (knowledge document, externalised knowledge)

- Source: Karpathy (2026-04-04). LLM Wiki. GitHub Gist. https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Access: same URL
- Read: whole gist body (comments truncated)
- Supporting passage: the LLM maintains "a structured, interlinked collection of markdown files that sits between you and the raw sources"; "The knowledge is compiled once and then kept current, not re-derived on every query."
- Supports: distilled Markdown knowledge for reuse by an agent. It does not support the knowledge-externalisation theory, traceability to evidence or explicit uncertainty; these rest on Nonaka (1994) and on the operator's own Promptotyping documents, neither read here.
- Status: lecture notes (Session 3 context)

### AI Slop

- Source: Shaib, Chakrabarty, Garcia-Olano, Wallace (2025). Measuring AI "Slop" in Text. arXiv:2509.19163. https://doi.org/10.48550/arXiv.2509.19163
- Access: https://arxiv.org/html/2509.19163 (arXiv HTML)
- Read: sections 1 to 9 and early appendices (100,000 of 145,000 characters)
- Supporting passage: "'Slop' has emerged as a term describing generic, low-quality content that appears to have been generated by AI." (Section 1)
- Supports: slop as generic, unrequested AI output. The paper is about text; the workshop extends the term to interface elements, which the source does not cover.
- Status: new

### Self-Verification and Self-Refine

- Source: Madaan et al. (2023). Self-Refine: Iterative Refinement with Self-Feedback. NeurIPS 2023. arXiv:2303.17651. https://doi.org/10.48550/arXiv.2303.17651
- Access: https://arxiv.org/html/2303.17651 (arXiv HTML)
- Read: sections 1 to 7 and appendices A to G (truncated in appendix H)
- Supporting passage: "Given an initial output generated by a model ℳ, we pass it back to the same model ℳ to get feedback." (Section 1)
- Supports: the model checks and improves its own result.
- Status: new
- Second source: Weng et al. (2023). Large Language Models are Better Reasoners with Self-Verification. Findings of EMNLP 2023. arXiv:2212.09561. Read via https://arxiv.org/html/2212.09561, sections 1 to 6 and appendix up to A.7 (100,000 of 115,000 characters). Passage: "In numerous decision-making tasks, humans often perform self-verification of inferred conclusions to mitigate mistakes." (Abstract/Introduction). This sentence is motivation by human analogy; the method (backward verification of candidate answers) is in Section 3. Venue not shown on the fetched page. Status: new.

### LLM-as-a-Judge

- Source: Zheng et al. (2023). Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena. NeurIPS 36 Datasets and Benchmarks. arXiv:2306.05685. https://doi.org/10.48550/arXiv.2306.05685
- Access: https://arxiv.org/html/2306.05685 (arXiv HTML)
- Read: whole paper with appendices A to F
- Supporting passage: "we explore using strong LLMs as judges to evaluate these models on more open-ended questions" (Abstract); "LLM-as-a-judge is a scalable and explainable way to approximate human preferences" (Abstract)
- Supports: a model as evaluator. Divergence: Zheng et al. use a separate strong model to grade chat assistants against human preferences and document position, verbosity and self-enhancement bias; the workshop's subagent reviewer is an application of the idea, not what the paper tests.
- Status: terms.md

### Subagents

- Source: Anthropic (n.d., read 2026-11-04). Create custom subagents. Claude Code Docs. https://code.claude.com/docs/en/sub-agents
- Access: same URL
- Read: from the start to the "Manage subagent context" section (100,000 of 117,000 characters); the end of the page not read
- Supporting passage: "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." and "the subagent does that work in its own context and returns only the summary."
- Supports: the workshop definition fully, including the built-in Explore, Plan and General-purpose subagents.
- Status: lecture notes
- Second source: Anthropic (2025). How we built our multi-agent research system. https://www.anthropic.com/engineering/multi-agent-research-system. Read whole article. Passage: "Subagents facilitate compression by operating in parallel with their own context windows" (Benefits of a multi-agent system). Status: lecture notes.

### Context Window

- Source: Anthropic (n.d., read 2026-11-04). Context windows. Claude Platform Docs. https://platform.claude.com/docs/en/build-with-claude/context-windows
- Access: same URL
- Read: whole page
- Supporting passage: "The "context window" refers to all the text a language model can reference when generating a response, including the response itself." (How the context window works)
- Supports: the definition and that input and output share the window. The page also describes the window as "working memory", not attention span; the workshop's "Aufmerksamkeitsspanne" is a metaphor the source does not use.
- Status: new

### Context Rot

- Source: Hong, Troynikov, Huber (2025-07-14). Context Rot: How Increasing Input Tokens Impacts LLM Performance. Chroma Technical Report. https://www.trychroma.com/research/context-rot (old URL research.trychroma.com redirects here)
- Access: same URL
- Read: whole report (figures as captions only)
- Supporting passage: "We observe that model performance varies significantly as input length changes, even on simple tasks." and "models do not use their context uniformly" (Introduction/Conclusion)
- Supports: performance degradation with input length before the window is full. The source states variation, mostly degradation; the workshop's "lange bevor das Fenster voll ist" is a fair reading but not a verbatim claim.
- Status: lecture notes, terms.md. The lecture notes URL should be updated to the redirect target.

### Context compression (/compact)

- Source: Anthropic (n.d., read 2026-11-04). Explore the context window. Claude Code Docs. https://code.claude.com/docs/en/context-window
- Access: same URL
- Read: whole page
- Supporting passage: "you run `/compact`, which replaces the conversation with a structured summary"; after compaction Claude Code "re-reads up to five of the files Claude has read or edited", and project-root CLAUDE.md is "Re-injected from disk" (What the timeline shows; What survives compaction)
- Supports: the workshop description exactly; the source adds that auto memory and invoked skill bodies are also re-injected.
- Status: new
- Second source: Anthropic (2025-09-29). Effective context engineering for AI agents. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents. Read whole article. Passage: "Compaction is the practice of taking a conversation nearing the context window limit, summarizing its contents" (Compaction). Status: terms.md.

### AGENTS.md and CLAUDE.md

- Source: AGENTS.md (n.d., read 2026-11-04). https://agents.md/
- Access: same URL
- Read: whole page
- Supporting passage: "a simple, open format for guiding coding agents"; "Think of AGENTS.md as a README for agents" (stewarded by the Agentic AI Foundation under the Linux Foundation)
- Supports: AGENTS.md as the open format.
- Status: lecture notes, terms.md
- Second source: Anthropic (n.d.). How Claude remembers your project. Claude Code Docs. https://code.claude.com/docs/en/memory. Read whole page. Passages: CLAUDE.md files are "instructions you write to give Claude persistent context"; "Project-root CLAUDE.md survives compaction: after `/compact`, Claude re-reads it from disk" (Troubleshoot). The page also states Claude "treats them as context, not enforced configuration", which the blog could cite where it distinguishes rules from hooks. Status: lecture notes, terms.md.

### Memory (agent-written memory)

- Source: Anthropic (n.d.). How Claude remembers your project, as above.
- Supporting passage: Auto memory is "notes Claude writes itself based on your corrections and preferences"; "Auto memory is on by default in local sessions"; stored at "`~/.claude/projects/<project>/memory/`".
- Supports: the Claude Code column of the workshop table.
- Status: lecture notes, terms.md
- Second source: OpenAI (n.d., read 2026-11-04). Memories. https://learn.chatgpt.com/docs/customization/memories?surface=app. Read whole page. Passages: "Codex can turn useful context from eligible prior chats into local memory files"; "Local Codex memories are off by default." Status: lecture notes.
- Divergence in the workshop table: the page names `$CODEX_HOME/memories_v2/` for fresh profiles (with `memories/` kept for existing ones), and states that `/memories` controls only the current chat, while the global switch sits in settings or `config.toml`. The workshop's "lokal unter `~/.codex/memories/`" and "steuerbar mit `/memories`" are therefore only partly accurate.

### Skill (Agent Skills, progressive disclosure)

- Source: Agent Skills (n.d., read 2026-11-04). Specification. https://agentskills.io/specification
- Access: same URL
- Read: whole page
- Supporting passage: "A skill is a directory containing, at minimum, a `SKILL.md` file"; "Agents load skills progressively, pulling in more detail only as a task calls for it" (Directory structure; Progressive disclosure)
- Supports: SKILL.md with optional scripts and templates; name and description load at startup, the body on activation.
- Status: terms.md
- Second source: Anthropic (n.d.). Agent Skills overview. https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview. Read whole page. Passage: "until a Skill is triggered, only its name and description occupy context." (Level 1: Metadata). Status: terms.md.

### MCP (Model Context Protocol)

- Source: Model Context Protocol (2025-11-25). Specification. https://modelcontextprotocol.io/specification/2025-11-25
- Access: same URL
- Read: whole overview page (linked sub-pages not read)
- Supporting passage: "an open protocol that enables seamless integration between LLM applications and external data sources and tools" (Specification intro)
- Supports: MCP for connecting external services. The spec also stresses that hosts "must obtain explicit user consent before invoking any tool", useful for Session 2 governance.
- Status: terms.md

### RAG (Retrieval-Augmented Generation)

- Source: Lewis et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. NeurIPS 33. arXiv:2005.11401. https://doi.org/10.48550/arXiv.2005.11401
- Access: https://ar5iv.labs.arxiv.org/html/2005.11401 (arXiv)
- Read: whole paper with appendices
- Supporting passage: "Hybrid models that combine parametric memory with non-parametric (i.e., retrieval-based) memories" and "a general-purpose fine-tuning approach which we refer to as retrieval-augmented generation (RAG)" (Section 1)
- Supports: RAG as retrieval of external knowledge into generation. In the original paper RAG is a fine-tuned retriever plus generator over a dense vector index; the workshop's broader use (agentic file search as retrieval) follows the later usage, supported by Anthropic (2025) Effective context engineering: "primitives like glob and grep allow it to navigate its environment and retrieve files just-in-time" (Context retrieval and agentic search).
- Status: new (Lewis); Anthropic article terms.md

### Context Engineering (Mei et al. 2025 taxonomy)

- Source: Mei, Yao, Ge, et al. (2025). A Survey of Context Engineering for Large Language Models. arXiv:2507.13334. https://doi.org/10.48550/arXiv.2507.13334
- Access: https://arxiv.org/html/2507.13334 (arXiv HTML)
- Read: abstract, table of contents, sections 1 to 3 and section 4 up to 4.2.3 (first 100,000 of 460,000 characters); sections 4.2.4 to 8 not read
- Supporting passage: the abstract names "Context Retrieval and Generation, encompassing prompt-based generation and external knowledge acquisition", "Context Processing" and "Context Management, covering memory hierarchies, compression, and optimization"; Section 4 states "Context Engineering is built upon three fundamental components".
- Supports: the workshop's ordering. Divergence: Mei et al. have three foundational components plus four system implementations (RAG, memory systems, tool-integrated reasoning, multi-agent systems). The workshop's fourth stage "Anwenden" maps onto the system implementations, which the survey treats as a separate layer, not a fourth stage. Mei et al. also place self-refinement under Context Processing, while the workshop lists it elsewhere.
- Status: lecture notes, terms.md (terms.md has only the short citation without full record)
- Second source: Anthropic (2025-09-29). Effective context engineering for AI agents. Passage: context engineering "refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference" (Context engineering vs. prompt engineering). Status: terms.md.

## Terms without a read source

- Wissensdokument, knowledge-externalisation part: Nonaka (1994) could not be opened (publisher 403; the only full-text copy found is a university course PDF whose authorisation is unclear and whose TLS certificate failed). Karpathy (2026) supports only the distilled-Markdown part.
- Prompt Engineering, partial: the thesis that the form of a prompt matters less than goal, knowledge and success criteria, and the techniques "clarifying questions" and "milestones", have no read source.
- Markdown, partial: the token-efficiency comparison with Word XML has no read source.

## Candidates without full text

- Dell'Acqua et al. (2026). Navigating the Jagged Technological Frontier. Organization Science 37(2), 403–423. https://doi.org/10.1287/orsc.2025.21838. INFORMS page and HBS working paper PDF (No. 24-013) returned 403; SSRN returned 403. A secondary site claims CC BY 4.0 for the journal version; not verified.
- Nonaka (1994). A Dynamic Theory of Organizational Knowledge Creation. Organization Science 5(1), 14–37. https://doi.org/10.1287/orsc.5.1.14. Publisher 403.
- Xu, Huang, Gao, Shang (2025). LLM-Based Agents for Tool Learning: A Survey. Data Science and Engineering 10, 533–563. https://doi.org/10.1007/s41019-025-00296-9. Springer redirected to a login flow; open-access status not confirmed.
- OpenAI (2026). Harness engineering. https://openai.com/index/harness-engineering/. HTTP 403.
- OpenAI Help. What are tokens and how to count them. https://help.openai.com/en/articles/4936856. HTTP 403. Replaced by Anthropic Token counting.
