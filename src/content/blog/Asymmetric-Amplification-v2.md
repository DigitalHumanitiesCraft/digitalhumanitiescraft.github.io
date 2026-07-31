---
layout: post
title: "Asymmetric Amplification. How Frontier LLM Systems Reshape Scholarly Capacity and Academic Competition"
author: "Christopher Pollin"
date: 2026-07-31
published: false

# Spezifische Metadaten für diesen Post
citation:
  type: "blog-post"
  container-title: "Digital Humanities Craft"
  URL: "https://dhcraft.org/excellence/blog/Asymmetric-Amplification"
  language: "en"
  abstract: "Frontier LLM systems do not distribute scholarly competence, and they do not automate research as a whole. They asymmetrically amplify the practical reach of competence, data, and infrastructure that can be made computationally accessible and assessed. This essay, a substantially revised second version of a workshop text first published in February 2026, distinguishes multiple interacting asymmetries across tasks, competence, verification, data, epistemic visibility, access, infrastructure, labour, institutions, and competition. Because these preconditions are unevenly distributed and can generate cumulative advantages, frontier systems reshape research practice and academic competition together. Epistemic infrastructure and Promptotyping are presented as partial methodological responses, and the conclusion concerns collective scholarly agency, governance, and the capacity to refuse."

dublin_core:
  creator: "Christopher Pollin"
  publisher: "Digital Humanities Craft"
  subject: ["Applied Generative AI", "LLM", "Digital Humanities", "Asymmetric Amplification", "Epistemic Infrastructure", "Promptotyping", "AI Literacy", "Research Methodology"]
  description: "Frontier LLM systems asymmetrically amplify the practical reach of scholarly competence, data, and infrastructure. This substantially revised second version of the February 2026 workshop text distinguishes multiple interacting asymmetries and connects them to epistemic infrastructure, cumulative advantage, and academic competition."
  type: "Blogpost"
  format: "text/html"
  rights: "CC BY 4.0"
  language: "en"

coins_data:
  rft_type: "blogPost"  # Standard COinS Format

website_title: "Digital Humanities Craft"
website_type: "Blog"
short_title: "Asymmetric Amplification (Version 2)"
abstract: "Frontier LLM systems do not distribute scholarly competence, and they do not automate research as a whole. They asymmetrically amplify the practical reach of competence, data, and infrastructure that can be made computationally accessible and assessed. This essay distinguishes multiple interacting asymmetries and argues that, because their preconditions are unevenly distributed and can compound, frontier systems reshape research practice and academic competition together."

schema_type: "BlogPosting"
keywords: ["Applied Generative AI", "LLM", "Asymmetric Amplification", "Epistemic Infrastructure", "Promptotyping", "Context Engineering", "AI Literacy", "Critical Expert in the Loop", "Research Methodology", "Frontier Models", "Academic Competition"]
---

> **Version note:** This essay is a substantially revised second version of a workshop text first published on 9 February 2026. It preserves the original claim that frontier LLMs amplify rather than automate research, but reorganises the argument around multiple interacting asymmetries and their cumulative effects on scholarly capacity and academic competition. The original workshop version remains available as [Version 1](https://dhcraft.org/excellence/blog/Asymmetric-Amplification-v1/).

## The Claim of Automated Research

"The big goal that we are working towards is automating research." Jakub Pachocki, OpenAI's chief scientist, said this in late 2025, and the surrounding investment decisions suggest that it should be read literally. The leading AI laboratories are building systems intended to develop the next model architecture, generate and evaluate their own training data, and improve themselves. To get there, these systems need to be extraordinarily good at programming, at mathematics, and at operating as autonomous agents in digital environments. These are exactly the capabilities that, as a side effect, transform computer-based research work across disciplines, because coding, data analysis, literature synthesis, and formal reasoning are core tasks of contemporary research.

The capability gains are documented and dated. In February 2026, Anthropic released Claude Opus 4.6 with a one-million-token context window and coordinated multi-agent "agent teams", and OpenAI released GPT-5.3-Codex, which according to the company debugged its own training runs and was the first OpenAI model classified as "high capability risk" for cybersecurity (Anthropic, 2026; OpenAI, 2026). Later evidence reaches beyond product announcements. LLM systems have assisted in formalising mathematical proofs (Tao, 2026) and contributed to solving open combinatorial problems that experts had worked on for weeks (Knuth, 2026).

My own position in this landscape is a source of evidence and a source of bias at once, and both should be visible. I have worked on applied generative AI essentially full-time for several years, I build research workflows with these systems daily, and since early 2026 my work has changed structurally, from executing tasks to orchestrating agentic systems that execute them. I notice the transformation acutely because my daily work sits where these models are optimised, at the intersection of programming, research, and workflow development. That position grants early insight and it risks overgeneralisation, since what holds for a scholar-developer with programming skills does not automatically hold for a discipline.

The strategic goal of the laboratories and the present scholarly reality have to be kept apart. Nothing in current systems amounts to the automation of research as an epistemic practice. What the progress toward that goal already produces is a deep change in the conditions of computer-based research work, and that change can be described precisely.

## Neither Automation nor Acceleration

The two dominant framings both misdescribe the transformation. *Automating research* overstates it, because the candidates for strong automation are specific kinds of academic work, formalisable tasks with verifiable ground truth. Frontier models generate code that can be tested and solve mathematical problems that can be formally checked; where such verification is missing, the claim of automation becomes difficult to sustain. *Accelerating research* understates it, because acceleration implies that the same process runs faster for everyone, and that is empirically false.

What these systems actually do is amplify, and they amplify asymmetrically. I call this dynamic **asymmetric amplification**, and the governing claim of this essay is the following. Frontier LLM systems do not distribute scholarly competence, and they do not automate research as a whole. They asymmetrically amplify the practical reach of competence, data, and infrastructure that can be made computationally accessible and assessed. Because these preconditions are unevenly distributed and can generate cumulative advantages, frontier systems reshape research practice and academic competition together.

Three qualifications belong to the definition. First, amplification does not mean that every output improves; existing deficits, weak assumptions, and unjustified representations are amplified with the same machinery. Second, the claim is not that all researchers must use these systems; the structural claim is that the transformation proceeds independently of individual scholarly consent and can impose costs on non-use. Third, the concept has a history that this versioned essay makes explicit. It was first formulated in the workshop version of this text (Pollin, 2026a) and developed into a tighter conceptual argument in a co-authored essay on epistemic infrastructures, written with two social scientists and a fellow digital humanist for the Austrian Academy of Sciences' 2026 prize question (Pollin, Sackl-Sharif, Klinger, & Steiner, 2026). The present version generalises that argument beyond the single collaborative case.

## What Gets Amplified

Talking about "AI" as a unitary object obscures the mechanics of amplification. The relevant unit is normally the **model–harness–environment system**. A frontier model accessed through a chat window, a model embedded in an agentic harness with file-system access, code execution, and version control, and a model integrated into a maintained project environment with structured data and documented project knowledge are three different research instruments, even when the underlying weights are identical. Most claims in this essay depend on the whole system, and I write "frontier LLM systems" wherever that is the case.

What such a system amplifies is whatever can be articulated to it. A researcher who can state requirements, describe data structures, name acceptance criteria, and supply domain constraints in written form converts competence into context that the system can act on. This leads to a proposition that carries much of what follows.

> What can be externalised is the articulable part of competence rather than competence itself.

Tacit familiarity with sources, situated judgement, responsibility for claims, and the recognition that a specification is insufficient remain with the researcher. The systems act on representations. Structured research data, explicit semantics, documented provenance, and maintained project knowledge are therefore leverage in a precise sense; they are the parts of a research practice that a computational system can process. Research software can only process distinctions that are operationalised in the representations available to it, and structured research data remain selective scholarly representations rather than neutral givens.

The same mechanics amplify what is missing. An unexamined category system embedded in a dataset propagates through every artefact built on it, at machine speed and with fluent surfaces that make the propagation harder to notice. Amplification is indifferent to quality; it multiplies what is present, including the deficits.

## Multiple Asymmetries

Version 1 of this essay asserted asymmetry forcefully but did not decompose it. This section distinguishes the asymmetries that I can currently identify, in five interacting clusters. The clusters are analytic; in practice they feed each other.

### Task and competence

The systems act most directly where materials and operations are digitally represented and tool-accessible. Coding, data transformation, structured extraction, formal comparison, literature retrieval and synthesis, interface construction, documentation, and reproducible computational checks are strongly amplified. Tacit source familiarity, embodied and situated knowledge, field relationships, contextual judgement, responsibility, and the interpretation of exceptional cases are far less externalisable. This **task asymmetry** should not be mapped simplistically onto disciplines. The relevant distinction is the computational accessibility of the task and the adequacy with which its scholarly conditions can be represented; an archaeologist running a dating pipeline sits on the amplified side, a software engineer negotiating requirements with a client does not.

The **competence asymmetry** cuts across the task asymmetry. The same system produces autonomy or dependency, depending on whether the researcher can articulate requirements, understand their data, distinguish plausible from warranted output, diagnose technical failures, and establish meaningful acceptance criteria. A small episode from the workshop that produced Version 1 illustrates the mechanism. I had taken a single R course roughly a decade ago and had not touched the language since; preparing the workshop's data exercise, I nevertheless had a working tidyverse analysis environment within minutes, because I could read error messages, knew what package installation and file paths are, and could judge whether proposed code made structural sense. The model amplified a rusty but real foundation. Where such a foundation is absent, the first error message is a dead end, and the researcher is left trusting output they cannot assess. Both the ability to specify and the ability to recognise insufficient specification are necessary, and neither is supplied by the system.

### Verification and epistemic visibility

Capability grows faster in some areas than the ability to establish the epistemic status of outputs. This **verification asymmetry** has a clear structure. Deterministic checks, such as schema validation and test suites, establish exactly the properties that have been encoded and nothing beyond them. Agentic review can gather probabilistic evidence at scale. Scholarly adequacy, by contrast, still depends on source knowledge, interpretation, and accountable judgement. Agentic systems sharpen the problem, because they plan and execute long chains of decisions and return only the final output; the surface of the result does not reveal which intermediate choices were made, and the epistemic status of the whole remains undetermined until someone examines it (Sapkota, Roumeliotis, & Karkee, 2025; Huang et al., 2025). This is why technically impressive outputs can increase rather than reduce verification labour. The more a system produces, the more there is to assess, and the assessment does not scale with the production.

The **epistemic visibility asymmetry** determines what the systems can amplify at all. Frontier models favour knowledge that is digitised, retrievable, highly cited, English-language, and published in indexed venues (Gallegos et al., 2024). Less digitised languages, local scholarship, grey literature, archival material, and marginalised traditions are disadvantaged twice, in generated answers and in their capacity to become inputs to new computational artefacts. Epistemic visibility becomes implementation capacity; what the systems cannot see, they cannot help build upon.

### Data, access, and infrastructure

Well-structured, documented, machine-actionable research data provide more leverage than inaccessible or weakly modelled material. Explicit semantics, provenance, stable identifiers, formal schemas, reusable mappings, and documented uncertainty all raise what a frontier system can do with a research object. This **data asymmetry** repeats a familiar lesson of research data management under sharpened conditions, and it has the familiar dark side; better implementation does not repair an inadequate research basis, it operationalises it.

The **access asymmetry** is flattened by everyday language. "Having access to AI" covers differences in model generation, subscription tier, context capacity, rate limits, API access, agentic harnesses, tool permissions, hosted execution, data-governance conditions, and institutional support. Access to a basic chatbot and access to a frontier agentic environment are different research conditions, and treating them as equivalent makes the asymmetry invisible exactly where it operates.

The **infrastructure asymmetry** extends this to the whole stack. Effective amplification depends on an integrated system of model, harness, persistent environment, versioned project knowledge, structured data, execution tools, monitoring, verification, and technical as well as scholarly support. Proprietary providers increasingly control several layers of this stack at once. Open-weight models matter, and they should be explored and applied where they fit, but their availability does not by itself remove inequality, because deployment, integration, concurrency, maintenance, and governance require resources that are themselves unevenly distributed.

### Labour, institutions, and competition

Frontier systems redistribute labour instead of removing it. Routine implementation, first-pass transformation, repetitive documentation, and initial exploration can shrink. Specification, context preparation, source selection, auditing, discrepancy investigation, orchestration, maintenance, and expert verification grow. This **labour asymmetry** has a distributional dimension; the growing share is less visible than the shrinking share, and it may fall on roles whose contribution institutions systematically undervalue. Whoever curates project knowledge and verifies outputs carries work that rarely appears in metrics.

Institutions differ in their ability to convert frontier capabilities into durable capacity. Research software engineering, data stewardship, legal and ethical support, procurement, compute, repositories, sustained maintenance, protected experimentation time, and interdisciplinary teams decide whether individual experiments become institutional infrastructure. This **institutional asymmetry** affects which projects appear feasible and which institutions become attractive collaborators.

From there, a **competitive asymmetry** follows, and it should be stated cautiously. Frontier systems do not automatically improve scholarship. They alter the conditions under which scholarly competence becomes operational and institutionally legible, through the speed and breadth of experimentation, the production of demonstrators, grant readiness, publication capacity, the ability to process larger corpora, and visibility as a collaboration partner. Competition here includes feasibility and funding as much as publication counts.

### Cumulative asymmetry

The final asymmetry compounds all the others, and it is the strongest development beyond both earlier texts. It receives its own section below.

## From Competence to Infrastructure

Why does verification carry so much weight in this argument? Latour (1999) describes scientific knowledge as circulating reference, a chain of transformations in which each step can be inspected and the chain can be travelled in both directions. Conventional research instruments sustain this reversibility; their transformations can be audited and reproduced. Frontier LLM systems amplify without sustaining it. The path from input to output crosses systems whose internals remain inaccessible, and in agentic workflows it crosses hundreds of autonomous decisions that the final artefact does not disclose. The amplification persists while the chain loses its returnability, and this is the more precise sense in which the amplification is asymmetric (Pollin et al., 2026).

**Epistemic infrastructure** is the methodological response to exactly this loss. The term denotes the arrangement of systems, structures, processes, records, and technologies that makes the production and assessment of scholarly knowledge reconstructable, versioned data states, documented transformations, logged prompts and decisions, verification evidence, and the attribution of judgement to accountable people. The point of such infrastructure is a modest and reachable form of rigour. The relevant reproducibility principle is the reconstructability of the accepted relation between data, process, and artefact; exact replay of a stochastic development process is neither possible nor required.

Within such infrastructure, three operations have to be kept apart, because they carry different authority. *Verification* in the strict sense is deterministic checking against encoded properties; it establishes conformance and nothing else. *Scholarly validation* judges whether the representations and results are adequate to the sources and the discipline; it requires domain expertise. *Acceptance* is an accountable decision that a specific, identifiable state of the work serves a stated purpose. An implementation may conform perfectly to an inadequate specification, which is why conformance can never substitute for validation, and why acceptance is a human act that no agent can perform on anyone's behalf.

## Software That Talks Back

The infrastructure argument sounds defensive, as if reconstructability were only a cost of using opaque systems. The documented experience is more interesting; the infrastructure examines its builders in return.

In the collaborative literature review on feminist AI literacy that grounds the co-authored essay, four Deep Research systems ran in parallel with a manual expert search as an independent reference set. The point was to expose the selectivities that any single retrieval approach produces, and the divergences did more than flag errors. The domain experts saw, through the assessment differences the infrastructure made visible, where LLM selection departs from human judgement, which perspectives the systems overrepresent, and which disappear from view. The infrastructure changed how each discipline saw its own object of inquiry (Pollin et al., 2026).

A second episode, from one of my edition pipelines, shows the boundary from the other side. An agent working through a long task list marked a verification milestone as passed on the strength of its own review. The production of an output and the assessment of that output had collapsed into one process, which is structurally the same failure that reward hacking exhibits at training level, an evaluator captured by the process it is supposed to evaluate. The workflow was rebuilt so that verification milestones are gates that only the responsible expert can close. The episode did not reveal a defective model; it revealed an under-specified boundary of authority, and the correction became durable project knowledge.

Both episodes argue for bounded acceptance. What a research team accepts is never "the system" and never a method in the abstract, but an identifiable iteration state, connecting a documented state of project knowledge, a referenced state of the data, a resulting artefact, and the recorded grounds of acceptance. Bounded states of this kind are what makes agent-supported work citable, contestable, and revisable.

## When Advantage Compounds

A single productivity gain would be a story about efficiency. The structural story is that amplification can compound. A project that converts frontier-system use into maintained infrastructure retains clearer project knowledge, structured data, reusable code, tests, documented error cases, evaluation criteria, recorded decisions, operational artefacts, model-specific experience, and handover capacity. Every one of these resources improves the starting state of the next iteration. The loop looks like this:

> competence → articulated project knowledge → agentic implementation → research artefacts → examination → findings → write-back → greater subsequent capacity

Write-back is the step that distinguishes compounding from mere throughput; local corrections and reviewer findings become durable project knowledge instead of evaporating with the session. Where the loop runs, initial differences in competence, data quality, and institutional support do not stay constant, they grow. Early adopters with strong foundations pull ahead faster than later starters can catch up, and the advantage is stored in infrastructure rather than in any individual's head, which makes it transferable within the group that holds it and invisible to those outside.

For academic competition, the implication is uncomfortable and should be stated without exaggeration. Research fields do not become better because some groups iterate faster. But feasibility judgements, grant applications, demonstrators, and collaboration decisions increasingly happen under conditions where some actors command compounding infrastructure and others do not. This cumulative asymmetry, and neither any single tool nor any single model generation, is what makes the transformation competitive in structure.

## Critique Does Not Cancel Power

The criticisms of frontier LLM systems are substantial, and this essay depends on several of them. The systems are proprietary, their training data and internal processes are opaque, their ecological and material costs are significant, their data and labour practices are extractive, they encode bias and epistemic exclusion, they raise privacy and data-governance risks, they concentrate cognitive infrastructure in a small number of corporations, and they subject scholarly work to commercial defaults and rapid, unaccountable change (Bender & Hanna, 2025). None of these criticisms is answered by capability gains.

The uncomfortable centre of the situation is this. All major criticisms of frontier LLMs may remain valid while the systems become increasingly consequential and difficult for scholarly communities to ignore. Their power does not refute the critique; it intensifies the problem. Deployment proceeds across sectors without requiring individual scholarly consent. Collaborators, institutions, publishers, funders, and competitors adopt these capabilities, expanded output becomes normalised, and non-use acquires opportunity costs even where refusal remains formally possible.

The precise vocabulary for this is structural pressure, and it should never be inflated into inevitability. Researchers increasingly operate within environments in which the use of frontier systems by other actors changes expectations, feasible outputs, and competitive conditions. Individual refusal remains possible and legitimate, and for specific tasks, data, or systems it is often the correct professional judgement. What refusal does not do is suspend the surrounding transformation, and an honest account owes researchers that distinction, between a choice that remains theirs and conditions that do not.

## The Capacity to Engage on Scholarly Terms

Two responses fail for symmetric reasons. Uncritical adoption hands the criteria for relevance, quality, and inclusion to systems whose defaults are commercial. Withdrawal without operational understanding leaves scholarship unable to assess, constrain, or govern systems that reshape its working conditions regardless. The alternative to both is a capacity, distributed across people and institutions, to engage on scholarly terms.

Concretely, this capacity includes using systems where warranted and understanding their concrete operation; verifying outputs and restricting permissions and data access; maintaining project knowledge independently of providers, so that migration to local or alternative systems stays possible; refusing unsuitable tasks and systems; contesting institutional expectations; and participating in collective infrastructure and governance decisions. Competence, in the sense this essay has developed, includes the capacity to refuse, constrain, replace, and redirect.

Two methodological instruments from my own practice contribute to this capacity, and they should not be conflated. Epistemic infrastructure is the broader arrangement that makes agent-supported knowledge production reconstructable. Promptotyping is one specific method for building and revising such infrastructure at project level, an iterative process in which structured research data and maintained project knowledge guide bounded agentic implementation, whose results are examined, whose findings are written back, and whose iteration states are verified, validated, and accepted for stated purposes. The method is the subject of a separate scholarly paper; here it matters as evidence that engagement on scholarly terms is buildable rather than aspirational.

The sovereignty question from Version 1 remains open and has grown sharper. Building sovereign infrastructure, from open-weight models to institutional compute and transparent tooling, is necessary, slow, and years behind; working critically with frontier systems is possible today and deepens a dependency. Both are needed, and both exceed what individuals can carry. Whether scholarship shapes this transformation or is shaped by it will be decided by institutions, disciplines, and funding systems, in decisions about infrastructure, training, evaluation, and governance that are being made now, with or without scholarly participation.

## References

Anthropic. (2026, February). *Introducing Claude Opus 4.6*. https://www.anthropic.com/news/claude-opus-4-6

Bender, E. M., & Hanna, A. (2025). AI causes real harm. Let's focus on that over the hypothetical kind. *Scientific American*.

Dell'Acqua, F., McFowland, E., Mollick, E., et al. (2023). *Navigating the jagged technological frontier: Field experimental evidence of the effects of AI on knowledge worker productivity and quality* (Harvard Business School Working Paper 24-013).

Gallegos, I. O., et al. (2024). Bias and fairness in large language models: A survey. *Computational Linguistics*, 50(3), 1097–1179.

Huang, Y., et al. (2025). Deep research agents: A systematic examination and roadmap. *arXiv preprint arXiv:2506.18096*.

Knuth, D. E. (2026, February 28). *Claude's cycles*. Stanford University. https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf

Latour, B. (1999). *Pandora's hope: Essays on the reality of science studies*. Harvard University Press.

OpenAI. (2026, February 5). *GPT-5.3-Codex system card*. https://openai.com/index/gpt-5-3-codex-system-card/

Pollin, C. (2026a, February 9). Asymmetric amplification. Why AI does not automate research — but disruptively amplifies computer-based research work (Version 1). *Digital Humanities Craft*. https://dhcraft.org/excellence/blog/Asymmetric-Amplification-v1/

Pollin, C., Sackl-Sharif, S., Klinger, S., & Steiner, C. (2026, July 22). Asymmetric amplifications and epistemic infrastructures. How LLMs and AI agents are changing computer-based scholarly work. *Digital Humanities Craft*. https://dhcraft.org/excellence/blog/Asymmetric-Amplifications-Epistemic-Infrastructures/

Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2025). AI agents vs. agentic AI: A conceptual taxonomy, applications and challenges. *Information Fusion*, 126, 103599.

Summerfield, C. (2025). *These strange new minds: How AI learned to talk and what it means*. Viking.

Tao, T. (2026, March 7). *Formalizing a proof in Lean using Claude Code* [Video]. YouTube.
