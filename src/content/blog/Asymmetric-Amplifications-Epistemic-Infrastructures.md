---
layout: post
title: "Asymmetric Amplifications and Epistemic Infrastructures. How LLMs and AI Agents Are Changing Computer-Based Scholarly Work and Journalism"
author: "Christopher Pollin, Susanne Sackl-Sharif, Sabine Klinger, Christian Steiner"
date: 2026-05-12
published: true

# Spezifische Metadaten für diesen Post
citation:
  type: "blog-post"
  container-title: "Digital Humanities Craft"
  URL: "https://dhcraft.org/excellence/blog/Asymmetric-Amplifications-Epistemic-Infrastructures"
  language: "en"

dublin_core:
  creator: "Christopher Pollin, Susanne Sackl-Sharif, Sabine Klinger, Christian Steiner"
  publisher: "Digital Humanities Craft"
  subject: ["Applied Generative AI", "LLM", "AI Agents", "Epistemic Infrastructure", "Asymmetric Amplification", "AI Literacy", "Feminist AI", "Journalism", "AI in Journalism", "Digital Humanities", "Social Sciences", "Research Methodology", "Interdisciplinarity", "Transdisciplinarity"]
  description: "Using a systematic literature review on feminist AI literacy as a working example, this co-authored essay develops the concept of asymmetric amplification to describe how LLMs and AI agents change computer-based scholarly work and journalism, and proposes epistemic infrastructure as a methodological response."
  type: "Blogpost"
  format: "text/html"
  rights: "CC BY 4.0"
  language: "en"

coins_data:
  rft_type: "blogPost"

website_title: "Digital Humanities Craft"
website_type: "Blog"
short_title: "Asymmetric Amplifications and Epistemic Infrastructures"

schema_type: "BlogPosting"
keywords: ["Asymmetric Amplification", "Epistemic Infrastructure", "Applied Generative AI", "LLM", "AI Agents", "AI Literacy", "Feminist AI", "Journalism", "AI in Journalism", "Verification", "Digital Humanities", "Social Sciences", "Deep Research", "Research Methodology", "Interdisciplinarity"]
---

## Introduction

The humanities, social sciences and cultural studies share the same methodological roots and a common history. Therefore, in our experience, it is not enough to consider how a single scholarly discipline is changing due to AI. Rather, we must consider computer-based scholarly work within this academic context on a broader level, addressing interdisciplinary intersections. The same argument extends beyond the academy. Journalism is knowledge-based work as well. It gathers, selects, verifies and publishes claims about the world, and its authority rests on the traceability of those claims back to sources that can be checked. Kovach and Rosenstiel (2021) place this discipline of verification at the center of what distinguishes journalism from adjacent forms of communication. Despite the differences in the goals and practices of scholarly work and journalism, these systems have one thing in common: the obligation and difficulty underlying the production of verifiable text in an AI world where content can be produced very quickly. Consequently, we treat scholarly work and journalism as two aspects of the same problem.

In this essay, we discuss the question of how AI transforms these fields by examining how AI is changing computer-based, text-related work, using a systematic literature review on feminist AI literacy as our working example. Our worked example is primarily scholarly and does not draw on any journalistic fieldwork. However, when we extend the argument to the newsroom, we explicitly acknowledge this and refer to the research literature on AI in journalism (Diakopoulos, 2019; Simon, 2024). We develop the concept of *asymmetric amplification* to describe what we observe, and we propose *epistemic infrastructure* as a methodological response.

## Computer-Based Scholarly Work: The Literature Review

This essay is co-authored by four scholars, two from Digital Humanities and two from Social Sciences. The first author is a research software engineer with mid-level programming skills who builds computational infrastructure for scholarly projects. The other authors contribute domain expertise in AI literacy, media and journalism studies, feminist theory, inequality research, as well as qualitative and interdisciplinary methodology. Together we are conducting a systematic literature review on feminist perspectives on AI, examining which forms of bias exist in generative AI systems, how they can be identified, and which prompting strategies can reduce rather than reproduce social inequalities (Pollin, Sackl-Sharif & Klinger, 2026).

Over the past year, the first author has used agentic coding systems to develop an *epistemic infrastructure* for this project. Encompassing the systems, structures, processes and technologies that enable the creation, validation, storage and use of scholarly or journalistic knowledge, this includes the Python scripts, workflows and LLM-assisted workflows through which the literature review is conducted. By adopting this approach, in which we use the technologies we examine in our critical literature review ourselves, we aim to gain further insights into how AI systems work. At the same time, the domain experts defined the evaluative categories for the literature review and assessed and analyzed every source alongside the LLMs, ensuring human verification at each step of the workflow. To ensure the quality criterion of intersubjective comprehensibility, we documented every step of our workflow in a public repository ([github.com/chpollin/FemPrompt_SozArb](https://github.com/chpollin/FemPrompt_SozArb)).

## Neither Automation nor Acceleration

The leading AI companies frame the transformation of research as either automation or acceleration (Amodei, 2024; Hassabis & Manyika, 2024). The same two framings dominate the debate about AI in newsrooms, where automated reporting and an accelerated news cycle are promised in much the same terms. In our opinion, both framings misdescribe what is happening. *Automating research* overstates, because what is being automated is a specific kind of academic work: formalizable tasks with verifiable ground truth. Frontier models now generate code and solve mathematical problems at expert level, and even on ARC-AGI, a benchmark explicitly designed to resist such systems, they continue to improve. What these advances share is the availability of verification; where it is missing, the claim of *automation* becomes difficult to sustain. The same applies to journalistic work. Transcription, translation, extracting information from document sets, and drafting reports from systematized data should all be subject to a review and verification process against a series of criteria prior to publication.

In these contexts, *acceleration* is an understatement because it implies that the same process runs faster for everyone. What these systems actually do is amplify, and they amplify asymmetrically. The amplification is real: LLMs formalize mathematical proofs (Tao, 2026), solve open combinatorial problems that experts had worked on for weeks (Knuth, 2026), and generate also computational workflows in scholarly and journalistic contexts at a scale that individual researchers and journalists could not previously sustain. But the capacity to verify these outputs is distributed as unevenly as the outputs are powerful. We call this dynamic *asymmetric amplification*.

This amplification originates from systems that are fundamentally unlike any tool scholarship has previously used. Summerfield (2025) calls them *strange new minds*, arguing that they do something that looks sufficiently like thinking to warrant the comparison, and that human cognition may itself be closer to statistical prediction than we assumed. Mollick (2024) describes their performance profile as a *jagged frontier*, where capability and unreliability coexist without a predictable pattern. We read these observations together. Frontier LLMs are *jagged, alien intelligences*. They are not tools in the conventional sense. Their underlying mechanism, next-token prediction, is narrowly specifiable, but the space of behaviors that emerges from it is not. They function as a broadly applicable technology whose scope is defined not in advance but through application across domains. They are not human, because they neither share human grounding in lived experience nor operate through human reasoning. And yet they simulate human communication with increasing fidelity, and it becomes ever harder to see what lies behind what Gabriel (2026) calls the *magical mirror* of conversational AI. This double displacement, neither tool nor human, names the position from which any methodological response has to proceed, because neither the vocabulary of instrumentation nor the vocabulary of anthropomorphism captures what is in front of us. In our project, this is why both human domain experts and LLMs evaluate every source against the same assessment scheme, to make the divergences between human and machine judgment visible and traceable.

Latour (1999) describes scientific knowledge as *circulating reference*, a chain of transformations in which each step reduces particularity and amplifies compatibility. Every research instrument, from the pipette to the statistical model, performs such operations. What distinguishes them from LLMs is not that they transform, but that their transformations remain reversible. The chain can be traveled in both directions, and if it is interrupted at any point, it ceases to transport truth. Journalism has its own chain. A published sentence should be traceable back through the edit, the journalist's notes, the recording, the document, the named or protected source. Internal fact-checking, the newsroom practice of catching mistakes before publication, is precisely the operation of traveling that chain backwards (cf. Graves, 2016), and a correction is what is issued when the chain turns out to be broken.

In conventional computer-assisted knowledge work, the path from input to output follows procedures that can be inspected, challenged, and reproduced, with statistical and machine-learning methods already complicating this picture but remaining reproducible and broadly auditable. LLMs, AI agents, and multi-agent systems displace procedural inspectability, reproducibility, and auditability at once. LLMs amplify without sustaining this reversibility. This is the more precise sense in which we call the dynamic *asymmetric*. The amplification persists, but the chain can no longer be traveled backwards.

In our project, the response is full documentation. Every script, every prompt, and every assessment decision, whether from LLMs or experts, is publicly versioned. We call this *epistemic infrastructure*, the methodological apparatus that restores the reversibility of the reference chain around systems whose internals remain inaccessible.

## Competencies and Asymmetries

What made this infrastructure possible? The answer reveals its own preconditions. Building it required layered competencies: programming to construct the data pipeline, data modeling for structured extraction, critical engagement with frontier systems to design the verification steps, and communication across disciplinary boundaries throughout. Each layer builds on the previous one, and each missing layer blocks the next. We refer to these layered competencies as *scholar-centered AI literacy*, deliberately distinguishing what is needed by researchers in the humanities, social sciences and cultural sciences at the frontier of LLM-assisted work from the umbrella concept of "AI literacy" applied to contexts from school education to undergraduate training (Long & Magerko, 2020; Zhang et al., 2025). The same layering describes what data and investigative journalists need, in a different institutional form: scripting and data handling on one side, source criticism, legal awareness and editorial judgment on the other, and enough shared vocabulary to work across that divide. We therefore interpret the term as referring to knowledge work whose product is a verified claim, whether in academia or the newsroom.

These competencies become even more important when we consider agentic systems. Unlike standard LLMs, which respond to a single prompt, agentic systems plan, execute, and adapt multi-step workflows with minimal human intervention (Sapkota et al., 2025). Deep Research, now offered by several providers, is a prominent example. These multi-agent systems search for sources, assess their relevance, and synthesize structured reports, returning only the final output to the user (Huang et al., 2025). Coding agents such as Claude Code make architectural and implementation decisions across hundreds of iterative steps. The outputs of such systems have an epistemically indeterminate status. They may be correct, incomplete, distorted, or fabricated, and the output itself does not reveal which is the case. The more decision steps a system performs autonomously, the larger the share of the output whose epistemic status remains undetermined. In our literature review, we addressed this by running four different Deep Research systems in parallel and conducting a manual expert search as an independent reference set. In this way, we try to expose the selectivity that any single Deep Research approach inevitably produces.

It is important to bear in mind that LLMs and especially agentic systems amplify existing capabilities and existing deficits along three dimensions. The first is *AI literacy:* the same technology produces autonomy or dependency, depending on whether a researcher can verify what the system returns. In a newsroom the same divide separates the journalist who can check what a model returns from the one who simply files it. The second is *access:* frontier models are proprietary and expensive, and the quality differences between model generations affect which questions can be asked and how reliably they can be answered. Well-resourced universities and national news organizations can pay for frontier access and build in-house capacity. Local, independent and minority-language outlets, like institutions in underfunded research systems, largely cannot, which deepens an existing dependency on a small number of technology providers (Simon, 2024). The third is *epistemic:* LLMs favor English-language, peer-reviewed, digitized knowledge (Gallegos et al., 2024), systematically disadvantaging researchers who work in other languages, publish in other formats, or belong to less digitized scholarly traditions. The journalistic counterpart is a pull toward well-indexed, English-language, online news at the expense of local reporting, minority-language outlets and archives that were never digitized.

## A Plea for Inter- and Transdisciplinary Collaboration

Using these systems in scholarship and journalism involves a tension that admits no easy resolution. They are proprietary, their training data are opaque, and their ecological and social costs are significant. At the same time, the transformation they introduce is not contingent on scholarly or journalistic consent. These systems are being deployed across sectors regardless of whether researchers or journalists choose to engage with them. Their proponents project transformative applications in medicine, materials science, and governance (Amodei, 2024), while critics document how the concentration of cognitive infrastructure in a small number of corporations deepens existing inequalities (Bender & Hanna, 2025). Our own project embodies this tension. We use AI systems to investigate how AI systems reproduce inequality. This is not an irony to be noted and set aside. It is the condition under which scholarly and journalistic work on this subject now takes place. The question is therefore not whether to use these systems but whether scholarship and journalism develop the means to use them on their own terms. We cannot explain these systems from the inside. What we can do is create verification structures around them: methodological frameworks that enable us to assess their outputs against scholarly and journalistic standards.

In this context, inter- and transdisciplinary collaboration is constitutive for us. The domain experts defined the assessment schema, deciding which categories are constitutive for feminist AI literacy and which are not. Without these decisions, the infrastructure would be an empty scaffold. Conversely, only through the infrastructure could the domain experts see how LLMs select their own literature, which perspectives are overrepresented and which disappear from view. The infrastructure did not merely produce results. It changed how each discipline saw its own object of inquiry. The constellation in a newsroom is the same one under different job titles: a data or automation desk that can build and inspect the pipeline, journalists and editors who hold the domain knowledge and the responsibility for what is published, and a working relationship close enough that each side can interrogate the other's assumptions.

## The Infrastructure Talked Back

We developed an epistemic infrastructure to examine AI systems in the context of computer-based scholarly work. What we did not anticipate is that it would examine us in return. The infrastructure did more than just produce results. It transformed the way each discipline viewed its own area of study. The domain experts discovered, through the assessment divergences the infrastructure made visible, where LLMs select differently from human judgment. Digital Humanities discovered that its mediating function is no longer a specialization but a precondition for scholarly work with these systems. We suspect these findings travel: the role that sits between the data desk and the reporting desk looks to be on the same trajectory in journalism.

These are not conclusions we brought to the project. They are what the infrastructure returned to us. Inter- and transdisciplinary collaboration under the conditions of LLMs is not a programmatic choice. It is a structural requirement, because no single discipline or profession commands both the technical and the domain-specific competencies that verification demands. We cannot explain these systems from the inside. What we can do is build verification structures around them, methodological scaffolding that makes their outputs assessable against scholarly and journalistic standards. If scholarship and journalism do not build this infrastructure themselves, they will be shaped by the defaults of systems whose criteria for relevance, quality, and inclusion are not their own.

## References

Amodei, D. (2024, October). *Machines of loving grace*. [https://www.darioamodei.com/essay/machines-of-loving-grace](https://www.darioamodei.com/essay/machines-of-loving-grace)

Bender, E. M., & Hanna, A. (2025). AI causes real harm. Let's focus on that over the hypothetical kind. *Scientific American*.

Diakopoulos, N. (2019). *Automating the news: How algorithms are rewriting the media*. Harvard University Press.

Gabriel, M. (2026). *Ethische Intelligenz: Wie KI uns moralisch weiterbringen kann*. Ullstein.

Gallegos, I. O., et al. (2024). Bias and fairness in large language models: A survey. *Computational Linguistics*, *50*(3), 1097–1179.

Graves, L. (2016). *Deciding what's true: The rise of political fact-checking in American journalism*. Columbia University Press.

Hassabis, D., & Manyika, J. (2024, November 18). AI will help us understand the very fabric of reality. *Fortune*.

Huang, Y., et al. (2025). Deep research agents: A systematic examination and roadmap. *arXiv preprint arXiv:2506.18096*.

Knuth, D. E. (2026, February 28). *Claude's cycles*. Stanford University. [https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf](https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf)

Kovach, B., & Rosenstiel, T. (2021). *The elements of journalism: What newspeople should know and the public should expect* (4th ed.). Crown.

Latour, B. (1999). *Pandora's hope: Essays on the reality of science studies*. Harvard University Press.

Long, D., & Magerko, B. (2020). What is AI literacy? Competencies and design considerations. *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems*, 1–16.

Mollick, E. (2024). *Co-Intelligence: Living and working with AI*. Portfolio/Penguin.

Pollin, C., Sackl-Sharif, S., & Klinger, S. (2026). Deep-Research-gestützte Literature-Reviews. Epistemische Infrastruktur als Praxis. In *Forum Wissenschaft 2/2026: KI in der Wissenschaft*, 38–43.

Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2025). AI agents vs. agentic AI: A conceptual taxonomy, applications and challenges. *Information Fusion*, *126*, 103599.

Sharkey, L. et al. (2025). Open problems in mechanistic interpretability. *arXiv preprint arXiv:2501.16496*.

Simon, F. M. (2024). *Artificial intelligence in the news: How AI retools, rationalizes, and reshapes journalism and the public arena*. Tow Center for Digital Journalism, Columbia University.

Summerfield, C. (2025). *These strange new minds: How AI learned to talk and what it means*. Viking.

Tao, T. (2026, March 7). *Formalizing a proof in Lean using Claude Code* [Video]. YouTube.

Zhang, S., Prasad, P. G., & Schroeder, N. L. (2025). Learning about AI: A systematic review of reviews on AI literacy. *Journal of Educational Computing Research*, *63*(5).
