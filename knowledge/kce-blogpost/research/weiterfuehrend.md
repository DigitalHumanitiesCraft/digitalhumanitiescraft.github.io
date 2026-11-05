# Research: opening and "Weiterführend" (Vibe Coding, Frontier-LLMs, AI Watermarking)

Research date 2026-11-04. Full texts were read via WebFetch (HTML, in chunks where the page exceeded 100k characters) or via the built-in browser pane (EUR-Lex, C2PA). Quotes are verbatim as returned by the read tool. Where a text was read only partly, the "Read" line says so.

## Opening

### Few-shotted for Breakfast (Karpathy, post of 1 Nov 2026)
- Source: Karpathy, A. (2026-11-01). "Weekend hack: HackerTube." Post on X. https://x.com/karpathy/status/2116957135661945283
- Access: x.com returns HTTP 402 and xcancel HTTP 451. Full post text read via the public read-only mirror API https://api.fxtwitter.com/karpathy/status/2116957135661945283 (no login). created_at "Sun Nov 01 18:14:46 +0000 2026", consistent with the decoded post ID (2026-11-01 18:14:46 UTC).
- Read: whole post text (the attached image was not visible).
- Supporting passage: "Many awesome projects that would have normally taken weeks/months even can now be few-shotted for breakfast. What else are we not thinking of." (closing sentences)
- Supports: the slide title and the speaker-note text, which is the post body itself ("A bit more on the process: ..."), not text on a separate screenshot. The post also names the tool setup ("Claude Code (desktop app for Mac), Opus 5.5 on Medium effort").
- Status: new (URL is on the slide, no record in lecture notes or terms.md).

### "I've never felt this much behind as a programmer" (Karpathy, post of 26 Dec 2025)
- Source: Karpathy, A. (2025-12-26). Post on X. https://x.com/karpathy/status/2004607146781278521
- Access: as above, read via https://api.fxtwitter.com/karpathy/status/2004607146781278521. created_at "Fri Dec 26 17:36:02 +0000 2025", consistent with the decoded post ID.
- Read: whole post text. The reading tool returned it only partly verbatim; the speaker-note transcription in deck-inventory.md matches the returned fragments.
- Supporting passage: "never felt this much behind as a programmer" ... "fundamentally stochastic, fallible, unintelligible and changing" ... "Roll up your sleeves to not fall behind." (opening, middle, final sentence)
- Supports: the opening claim that work with LLMs changes fast, and the list of new abstractions (agents, subagents, memory, permissions, skills, hooks, MCP, workflows) that the workshop then teaches.
- Status: new.

### Software für alle (end-user / malleable software)
- Source: Litt, G., Horowitz, J., van Hardenberg, P., & Matthews, T. (2025, June). Malleable software. Restoring user agency in a world of locked-down apps. Ink & Switch. https://www.inkandswitch.com/essay/malleable-software/
- Access: https://www.inkandswitch.com/essay/malleable-software/ (open web essay; licence not checked).
- Read: whole essay (Motivation; A gentle slope from user to creator; Tools, not apps; Communal creation; Ink & Switch prototypes; Towards a better future).
- Supporting passage: "a software ecosystem where anyone can adapt their tools to their needs with minimal friction." (Motivation, "Our goal: malleable software"). Caveat passage: "AI code generation alone does not address all the barriers to malleability." (section on AI-assisted coding)
- Supports: the idea of building or adapting a tool to one's own requirements instead of bending to standard software. Divergence: the essay is more cautious than the slide's rhetorical "Warum Lizenzen zahlen ...?" and treats AI code generation as insufficient by itself; this matches the lecture notes' own caveat about who maintains and checks the tool.
- Status: new.

## Anhang: Vibe Coding und Agentic (Knowledge and Research) Engineering

### Vibe Coding
- Source: Karpathy, A. (2025-02-02). "There's a new kind of coding I call 'vibe coding' ..." Post on X. https://x.com/karpathy/status/1886192184808149383
- Access: x.com HTTP 402. Read (a) via https://api.fxtwitter.com/karpathy/status/1886192184808149383, created_at "Sun Feb 02 23:17:15 +0000 2025"; (b) the full quotation in Willison, S. (2025-03-19). Not all AI-assisted programming is vibe coding (but vibe coding rocks). https://simonwillison.net/2025/Mar/19/vibe-coding/ ("To quote Andrej's original tweet in full").
- Read: whole post (via both routes) and the whole Willison post.
- Supporting passage: "I “Accept All” always, I don’t read the diffs anymore." and "forget that the code even exists." (post text)
- Supports: "Der erzeugte Code wird weitgehend ungeprüft übernommen" and development by natural-language requests and trial (paste errors back, "ask for random changes until it goes away"). Divergence: Karpathy scopes it to "throwaway weekend projects"; the workshop definition omits this scope. Date conflict: Willison writes "on February 6th", but the post metadata and the decoded post ID give 2 Feb 2025 23:17 UTC, which supports the workshop's 2 February. Willison's own sharper definition: "building software with an LLM without reviewing the code it writes."
- Status: already in lecture notes (Karpathy 2025, without URL; URL is in slides/full-slide-deck.md).

### Agentic Engineering
- Source: Willison, S. (n.d., guide introduced 2026). What is agentic engineering? In *Agentic Engineering Patterns*. Simon Willison's Weblog. https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/
- Access: same URL, open web. The chapter shows no date; the guide index links an introduction post under URL path 2026/Feb/23. Accessed 2026-11-04.
- Read: whole chapter (What is agentic engineering?; Agentic engineering; Isn't this just vibe coding?; About this guide).
- Supporting passage: "I use the term agentic engineering to describe the practice of developing software with the assistance of coding agents." Human role: "specify those problems in the right level of detail, and verify and iterate on the results"; agents: "generates and executes code in a loop until that goal has been met."
- Supports: agents write, run and revise code; humans specify and verify. Divergence: "Handlungsspielräume bestimmen" (scope of autonomy) is not stated in the chapter; it is the workshop's addition. The chapter also defines vibe coding as "unreviewed, prototype-quality LLM-generated code", consistent with the workshop's contrast.
- Status: already in lecture notes (without URL, without date).

### Agentic Software Engineering (supporting scholarly source)
- Source: Hassan, A. E., Li, H., Lin, D., Adams, B., Chen, T.-H., Kashiwa, Y., & Qiu, D. (2025). Agentic Software Engineering. Foundational Pillars and a Research Roadmap. arXiv:2509.06216 (v4, 2 Nov 2026). https://doi.org/10.48550/arXiv.2509.06216
- Access: https://arxiv.org/html/2509.06216v4 (arXiv non-exclusive distribution licence).
- Read: whole paper in two chunks (sections 1 to 9, appendix A).
- Supporting passage: "intelligent agents are tasked not with simple code generation, but with achieving complex, goal-oriented SE objectives." (Abstract); human role "redefines the human's role to focus on high-level intent, strategy, and mentorship as an Agent Coach." (Section 1)
- Supports: the human sets intent and oversees, agents carry out engineering work. Divergence: the paper frames the human as "Agent Coach and Orchestrator" (Section 9) and proposes its own SASE vision; it is a position paper and roadmap, not an empirical finding.
- Status: already in terms.md.

### Agentic (Knowledge and Research) Engineering, background
- Source: Allen, B. P., Stork, L., & Groth, P. (2023). Knowledge Engineering Using Large Language Models. *Transactions on Graph Data and Knowledge* 1(1), 3:1–3:19. https://doi.org/10.4230/TGDK.1.1.3
- Access: Dagstuhl page confirms CC BY 4.0; the Dagstuhl PDF body was not machine-readable, so the text was read in the arXiv version https://arxiv.org/html/2310.00637v1 (arXiv:2310.00637, "accepted in Transactions on Graph Data and Knowledge"). Note: the read text is the preprint, not the typeset journal version.
- Read: whole paper (sections 1 to 5).
- Supporting passage: "Feedback from subject matter experts and users can be used to prompt an LLM to refine the natural language knowledge base" (Section 3.1); "the programming of knowledge modules could take place entirely in natural language" (Section 3.2).
- Supports: the background claim that LLMs move knowledge engineering toward natural-language knowledge bases refined with expert feedback. Divergence: the paper concerns knowledge engineering (natural language to formal knowledge), not agents or research workflows; the workshop's term is explicitly a proposed working term, so the source supports only the background.
- Status: already in lecture notes and terms.md.

## Anhang: Frontier-LLMs amplifizieren computergestützte Wissensarbeit

### METR Time Horizons
- Source: Kwa, T., West, B., Becker, J., ... Kinniment, M., ... Barnes, E., & Chan, L. (2025). Measuring AI Ability to Complete Long Software Tasks. arXiv:2503.14499 (v1 18 Mar 2025, v4 10 Jul 2026). https://doi.org/10.48550/arXiv.2503.14499
- Access: https://arxiv.org/html/2503.14499 (CC BY 4.0).
- Read: whole paper in two chunks, including appendices.
- Supporting passage: "the time humans typically take to complete tasks that AI models can complete with 50% success rate" and "frontier AI time horizon has doubled approximately every seven months since 2019" (Abstract). Caveat: "the tasks we study are heavily skewed toward software engineering and ML research." (Appendix E.4)
- Supports: METR Time Horizons as a benchmark measure. Divergence in the citation: terms.md cites "Kinniment et al. (2025). Measuring AI Ability to Complete Long Tasks"; the first author is Thomas Kwa (Kinniment is eighth author) and the current title contains "Software".
- Status: already in terms.md (citation needs correction).

### SWE-bench
- Source: Jimenez, C. E., Yang, J., Wettig, A., Yao, S., Pei, K., Press, O., & Narasimhan, K. (2024). SWE-bench. Can Language Models Resolve Real-World GitHub Issues? ICLR 2024. arXiv:2310.06770. https://doi.org/10.48550/arXiv.2310.06770
- Access: https://arxiv.org/html/2310.06770v3 (CC BY 4.0).
- Read: main text (sections 1 to 10) and appendices through A.5; later appendix tables not read.
- Supporting passage: "The task is to generate a pull request that addresses a given issue and passes tests related to the issue." (Section 2)
- Supports: SWE-bench as a standardised, automatically checked test (tests decide success).
- Status: new.

### Terminal-Bench
- Source: Merrill, M. A., Shaw, A. G., et al. (2026). Terminal-Bench. Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces. ICLR 2026. arXiv:2601.11868. https://doi.org/10.48550/arXiv.2601.11868
- Access: https://arxiv.org/html/2601.11868v1 (CC BY 4.0).
- Read: main text (sections 1 to 7) and appendices A to B.5; later appendices (task list) not read.
- Supporting passage: "A Terminal-Bench task consists of an instruction, a Docker image, a set of tests, an example solution, and a time limit" (Section 2.1)
- Supports: automatically checkable results via tests. Limitation noted by the authors: an agent "could locate our dataset and cheat by reading the oracle solutions." (Section 5)
- Status: new.

### ARC-AGI-3
- Source: ARC Prize Foundation (n.d.). ARC-AGI-3. https://arcprize.org/arc-agi/3/
- Access: same URL, accessed 2026-11-04.
- Read: whole page. The linked technical report (/media/ARC_AGI_3_Technical_Report.pdf) was not read.
- Supporting passage: "ARC-AGI-3 is an interactive reasoning benchmark which challenges AI agents to explore novel environments" (page intro); measures "Skill-acquisition efficiency over time".
- Supports: ARC-AGI-3 as a benchmark. Divergence: it is interactive (games, no natural-language instructions), unlike the static tests the slide's general benchmark sentence suggests.
- Status: new.

### SimpleBench
- Source: SimpleBench (n.d.). SimpleBench. https://simple-bench.com/
- Access: same URL, accessed 2026-11-04.
- Read: whole page. The full report (Google Drive link) was not read.
- Supporting passage: "a multiple-choice text benchmark for LLMs" covering spatio-temporal reasoning, social intelligence and "linguistic adversarial robustness (or trick questions)"; human baseline 83.7% from nine non-specialist participants.
- Supports: SimpleBench as a benchmark where humans still lead. The human baseline rests on a very small sample, which the blog should state if it cites the figure.
- Status: new.

### Recursive Self-Improvement
- Source: Kokotajlo, D., Alexander, S., Larsen, T., Lifland, E., & Dean, R. (2025-04-03). AI 2027. https://ai-2027.com/
- Access: same URL, accessed 2026-11-04.
- Read: main scenario text up to and including the October 2027 branch point; the two endings (/race, /slowdown) on separate pages were not read.
- Supporting passage: "Agent-1 had been optimized for AI R&D tasks, hoping to initiate an intelligence explosion." (January 2027); "OpenBrain is making about a year of algorithmic progress every month." (June 2027: Self-improving AI)
- Supports: the workshop definition (AI helps develop more capable AI, which drives further development). This is a scenario forecast, not a finding; the authors state the slowdown ending is not a policy recommendation. The slide's own judgement "sehr wahrscheinlich" is not supported by this source as evidence.
- Status: already in lecture notes (named, no full record).

## Anhang: AI Watermarking

### Text watermarking, SynthID-Text
- Source: Dathathri, S., et al. (2024) (full author list not checked). Scalable watermarking for identifying large language model outputs. *Nature* 634(8035), 818–823. Published 23 October 2024. https://doi.org/10.1038/s41586-024-08025-4
- Access: https://www.nature.com/articles/s41586-024-08025-4 (licence section) and https://pmc.ncbi.nlm.nih.gov/articles/PMC11499265/ (full text). Open access.
- Licence statement on the Nature article page (Rights and permissions), verbatim: "Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit http://creativecommons.org/licenses/by/4.0/". Fig. 1 ("Overview of LLM text generation and generative watermarking") carries no credit line on the Nature page or PMC, so it falls under CC BY 4.0. Reuse needs attribution, licence link and a note if the figure was changed (for instance translated).
- Read: whole article on PMC (Main, Watermarking with SynthID-Text, Evaluation, Discussion incl. Limitations, Methods).
- Supporting passage: "the random seed is a hash of the most recent H tokens" (Watermarking with SynthID-Text); "this can be compared with a threshold to determine whether the text originates from the watermarked LLM." (same); "longer texts contain more watermarking evidence" (Watermark detection); "generative watermarks are weakened by edits to the text, such as through LLM paraphrasing" (Discussion, Limitations).
- Supports: every element of the workshop's text paragraph (key plus preceding text yield a seed, biased sampling, score against threshold, length dependence, paraphrasing weakens). The workshop says "Übersetzen"; the read limitation names edits and paraphrasing, translation is not quoted from the read text.
- Status: already in lecture notes.

### Text watermarking, originating scheme
- Source: Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. ICML 2023, PMLR 202. arXiv:2301.10226. https://doi.org/10.48550/arXiv.2301.10226
- Access: https://arxiv.org/html/2301.10226v4 (arXiv non-exclusive distribution licence).
- Read: main body sections 1 to 9 and appendices A and B; appendices C to G not read (truncated).
- Supporting passage: "The watermark works by selecting a randomized set of “green” tokens before a word is generated, and then softly promoting use of green tokens during sampling." (Abstract); "detecting the watermark does not" require the model (Section 2).
- Supports: the generation-time, key- and context-seeded bias and statistical detection the workshop describes; SynthID-Text builds on this scheme.
- Status: new.

### Image watermarking, TrustMark
- Source: Bui, T., Agarwal, S., & Collomosse, J. (2023). TrustMark. Universal Watermarking for Arbitrary Resolution Images. arXiv:2311.18297. https://doi.org/10.48550/arXiv.2311.18297
- Access: https://arxiv.org/html/2311.18297 (arXiv perpetual non-exclusive licence). Venue beyond arXiv not confirmed.
- Read: whole paper including appendices; some equations rendered garbled.
- Supporting passage: "embed a secret (e.g. provenance data) directly within the image content" (Section 1); "The extractor network X aims to decode the watermark from the encoded image" (Section 3.1.2); noise model includes "random JPEG compression" and "random flip, crop and resize" (Section 3.1.3).
- Supports: encoder/decoder, bit string, per-image decoding, training for robustness against JPEG and crop. Divergence: "gezielte Angriffe können es entfernen (Bui et al., 2023)" is not what the paper says. Its removal network TrustMark-RM restores the cover image "for re-watermarking" (Sections 3.2, 4.4), a provider function, not an attack study. The attack claim needs another source or should be attributed to the Computerphile video or rephrased.
- Status: already in lecture notes.

### C2PA Content Credentials
- Source: Coalition for Content Provenance and Authenticity (2025). Content Credentials. C2PA Technical Specification, version 2.2. https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification.html (the site lists 2.5 as the latest version; 2.5 was not read).
- Access: same URL, read in the browser pane.
- Read: sections 1 (Introduction), 9 (Binding to Content) and 10.1, plus text searches for removal and absence across the document. Not read in full (about 480k characters).
- Supporting passage: "These assertions, claims, and the claim signature are all bound together into a verifiable unit called a C2PA Manifest" (Section 1.3); "if a C2PA manifest is removed from an asset, but a copy of that manifest remains in a provenance store elsewhere, the manifest and asset may be matched using available soft bindings." (Section 9.3.1)
- Supports: signed, verifiable provenance metadata, and that a manifest can be removed. Divergence: validation depends on validators and trust lists (Section 14), so "die jeder prüfen kann" is a simplification. The spec names invisible watermarks as soft bindings that link the two paths the workshop presents as alternatives.
- Status: new (C2PA named in lecture notes without source).

### EU AI Act, Art. 50 and application date
- Source: Regulation (EU) 2024/1689 (Artificial Intelligence Act). OJ L, 2024/1689, 12.7.2024. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1689
- Access: same URL, read in the browser pane (EUR-Lex blocks the fetch tool).
- Read: Article 50, Article 113, recital 133.
- Supporting passage: Art. 50(2): "Providers of AI systems, including general-purpose AI systems, generating synthetic audio, image, video or text content, shall ensure that the outputs of the AI system are marked in a machine-readable format and detectable as artificially generated or manipulated." Art. 113: "It shall apply from 2 August 2026." Recital 133 lists "watermarks, metadata identifications, cryptographic methods for proving provenance and authenticity of content, logging methods, fingerprints".
- Supports: the obligation and "Watermarks sind dafür ein Baustein" (recital 133). Art. 50 itself does not mention watermarks.
- Status: already in terms.md.

### EU AI Act amendment, Digital Omnibus on AI
- Source: Regulation (EU) 2026/1744 of 8 July 2026 amending Regulations (EU) 2024/1689, (EU) 2018/1139 and (EU) 2023/1230 (Digital Omnibus on AI). OJ L, 2026/1744, 24.7.2026. https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng
- Access: same URL, read in the browser pane.
- Read: recital 38, Article 1 points (20), (39), (40), final provisions. Not read in full.
- Supporting passage: new Art. 111(4): providers "that have been placed on the market before 2 August 2026 shall take the necessary steps in order to comply with Article 50(2) by 2 December 2026." Entry into force on the third day after publication.
- Supports: corrects the workshop wording. "Seit 2. August 2026 verlangt Art. 50 ..." holds for systems placed on the market from that date; systems already on the market before 2 August 2026 have until 2 December 2026 for the marking obligation. Article 113's general date of 2 August 2026 is unchanged by this point.
- Status: new.

## Terms without a read source

- Recursive Self-Improvement, scholarly definition (Good 1965): no full text read; only the AI 2027 scenario text was read.
- OpenAI mathematics and Navier-Stokes results, OpenAI and Hugging Face incident: outside the brief's term list, not researched.
- Naam (2026), 80,000 Hours AGI timelines: named on the slide, not researched.

## Candidates without full text

- Good, I. J. (1965). Speculations Concerning the First Ultraintelligent Machine. *Advances in Computers* 6, 31–88. Copy at incompleteideas.net/papers/Good65ultraintelligent.pdf failed with a self-signed certificate error; bypassing TLS verification was refused. Not read.
- ARC Prize Foundation. ARC-AGI-3 Technical Report (arcprize.org/media/ARC_AGI_3_Technical_Report.pdf). Not read.
- SimpleBench full report (Google Drive). Not read.
- AI 2027 endings (/race, /slowdown). Not read.
- Karpathy posts on x.com directly (HTTP 402); texts read via the fxtwitter mirror API instead.
