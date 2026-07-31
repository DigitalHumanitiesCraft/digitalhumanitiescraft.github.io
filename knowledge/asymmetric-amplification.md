---
title: "Asymmetric Amplification: Knowledge Base for Blog Versioning and Paper Development"
project:
  name: DHCraft Site (Blog)
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: active
language: en
created: 2026-07-31
updated: 2026-07-31
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
related:
  - journal.md
---

# Purpose

This document is the compact source of truth for developing three related but distinct publications:

1. **Blogpost v1**: the existing workshop-derived post, preserved as the historical first version.
2. **Blogpost v2**: a substantially revised, more coherent essay on multiple asymmetries produced by frontier-LLM systems in research.
3. **Scholarly paper**: the systematic methodological synthesis connecting asymmetric amplification, epistemic infrastructure, Promptotyping, project knowledge, agentic implementation, verification, validation, write-back, and purpose-specific acceptance.

The three publications must not collapse into one another. The blogpost should remain accessible, forceful, personal, and essayistic. The paper should provide the conceptual precision, documented cases, bounded evidence, scholarly apparatus, and methodological distinctions that the blogpost cannot carry.

# Repository Context

Verified state of the publishing infrastructure as of 2026-07-31.

- The live site is the Astro project in this repository (`DigitalHumanitiesCraft/digitalhumanitiescraft.github.io`), deployed at https://dhcraft.org.
- Blog posts are content-collection entries under `src/content/blog/`. The dynamic routes `src/pages/excellence/blog/[...id].astro` and `src/pages/en/excellence/blog/[...id].astro` serve them at `https://dhcraft.org/excellence/blog/{slug}/`, which preserves the pre-migration URLs.
- Blogpost v1 lives at `src/content/blog/Asymmetric-Amplification.md`, migrated unchanged from the former `excellence` repository, including its citation, Dublin Core and COinS front matter.
- The co-authored essay lives at `src/content/blog/Asymmetric-Amplifications-Epistemic-Infrastructures.md` (published 2026-07-22, OeAW Prize Question 2026).
- The former repository `DigitalHumanitiesCraft/excellence` was restarted as a knowledge repo on 2026-07-14. Its pre-migration history is archived in Zenodo v1.0.0 (10.5281/zenodo.14160876), in Software Heritage and in a local mirror bundle. All editorial work on the blog happens in this repository.
- A practicable versioning implementation within this architecture is a second content entry for the archived first version (for example `Asymmetric-Amplification-v1.md`), served by the existing dynamic route, while the canonical slug continues to serve the current version. The final URL decision rests with the author.
- A separate German-language thread (the AGI question as a verification question, with its own planned blogpost and talk) is maintained as a knowledge document in the author's Obsidian vault. It feeds the verification asymmetry described below and remains a distinct publication.
- The editorial decision log for blog text production is `knowledge/journal.md` in this repository.

# Existing Source States

## Blogpost v1

**Title:** *Asymmetric Amplification. Why AI Does Not Automate Research — But Disruptively Amplifies Computer-Based Research Work*

**Publication date:** 9 February 2026

**Origin and form:** A long workshop text preserving an alternating sequence of theoretical introductions, demonstrations, exercises, and discussion. It openly acknowledges that it reads more like a guided workshop than a linear argument.

**Core contribution:**

- The major AI laboratories frame their goal as automating research.
- What frontier systems currently produce is better understood as the disruptive amplification of computer-based research work.
- This amplification is asymmetric.
- Researchers who can judge quality, understand their data and domain, and access frontier models and supporting infrastructure gain disproportionate leverage.
- The workshop develops practical AI literacy around models, context, coding, data, verification, Promptotyping, and agentic workflows.
- The political framing includes infrastructure concentration, European technological dependence, sovereign alternatives, and the claim that researchers are compelled to engage because the transformation proceeds independently of scholarly consent.

**Strengths:**

- Strong first-person situated account.
- Immediate connection between frontier-model development and changes in actual research practice.
- Broad technical literacy and practical examples.
- Clear rejection of both naive celebration and simple dismissal.
- Early formulation of asymmetric amplification.
- Strong political and infrastructural framing.

**Current limitations:**

- The workshop structure creates a very long and only partly linear text.
- Technical explanations of LLMs and exercises interrupt the central argument.
- Some time-sensitive model and company claims will age rapidly.
- “Asymmetry” is stated strongly but not yet systematically decomposed.
- The difference among model capability, agentic harness, project knowledge, data, verification competence, and institutional infrastructure remains distributed across the text.
- The relation between amplification and academic competition is present but not fully developed.
- Promptotyping appears as one workshop section rather than as part of an integrated methodological response.
- The statement that researchers are “forced to engage” is rhetorically strong but requires a more precise account of structural compulsion.

## Epistemic Infrastructure essay

**Title:** *Asymmetric Amplifications and Epistemic Infrastructures. How LLMs and AI Agents Are Changing Computer-Based Scholarly Work*

**Publication date:** 22 July 2026

**Core contribution:**

- Automation overstates the transformation because only particular formalisable tasks with verifiable ground truth are candidates for strong automation.
- Acceleration understates it because the same process is not merely becoming faster for everyone.
- LLMs and agents amplify unevenly.
- The central asymmetries identified are competence, access, and epistemic visibility.
- Agentic systems perform long chains of decisions whose epistemic status is not disclosed by the final output.
- Epistemic infrastructure restores the reversibility or reconstructability of the reference chain around opaque systems.
- Interdisciplinary collaboration is structurally required because no single discipline necessarily contains both domain-specific and technical verification competence.
- The infrastructure “talks back”: it does not only implement a prior method but reveals disciplinary assumptions and selection effects.

**Strengths:**

- Much tighter conceptual argument than blogpost v1.
- Concrete collaborative research case.
- Strong connection between agentic autonomy and epistemic indeterminacy.
- Epistemic infrastructure is framed as a methodological response rather than a claim to model transparency.
- Introduces the productive feedback of infrastructure into scholarly understanding.

**Current limits relative to the intended synthesis:**

- The typology of asymmetries remains selective rather than comprehensive.
- It does not fully develop cumulative advantage or academic competition.
- Promptotyping is not yet integrated as the operational method through which project knowledge, implementation, examination, and write-back are organised.
- Verification, scholarly validation, and acceptance are not differentiated as fully as in the paper.
- It is a collaborative case essay, not the definitive general account of asymmetric amplification.

## Promptotyping paper

**Working title:** *Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering*

**Core contribution:**

Promptotyping is an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering.

Its organising structure is an evolving, versioned project knowledge base. Project knowledge guides bounded agentic implementation. The resulting artefacts are examined. Consequential findings are written back into maintained project knowledge. Responsible contributors verify, validate, and accept identifiable iteration states for stated purposes.

**Strongest conceptual elements:**

- Research software can process only distinctions operationalised in representations available to its model.
- Structured research data remain selective scholarly representations.
- Project-specific digital research artefacts make selected distinctions and actions operational for a scholarly purpose.
- The project knowledge base mediates between research data, scholarly understanding, and implementation.
- The persistent knowledge base must be distinguished from task-specific working context.
- Distillation is pragmatic modelling, not merely summarisation or token compression.
- Implementation makes assumptions actionable and exposes consequences.
- Write-back turns local corrections into durable project knowledge.
- An implementation may conform perfectly to an inadequate specification.
- Deterministic verification, agentic review, Critical Expert judgement, scholarly validation, and acceptance have different evidential scope and authority.
- A promptotype is an identifiable, bounded, accepted iteration state connecting maintained project knowledge, a referenced research-data state, a resulting artefact, and documented grounds of acceptance.
- What can be externalised is the articulable part of competence rather than competence itself.
- The relevant reproducibility principle is reconstructability of the accepted relation, not exact replay of the stochastic development process.
- Promptotyping redistributes labour rather than making it disappear.

# Publication Strategy

## Preserve v1 rather than silently overwrite it

The existing blogpost should remain available as a dated first version because:

- it documents the argument in its original workshop context;
- it preserves the historical development of the concept;
- readers may already have cited or linked it;
- silent replacement would obscure the evolution of the claims;
- versioning itself demonstrates the project’s commitments to maintained knowledge, write-back, and reconstructability.

Preferred implementation:

- Keep the original publication date and content accessible.
- Add a visible version notice near the title or introduction.
- Mark it as **Version 1 / workshop version**.
- Link to **Version 2 / revised essay** once published.
- On v2, link back to v1 and provide a concise change summary.
- Preserve stable URLs where possible. If v2 replaces the main canonical URL, retain an archived v1 URL and make redirects and canonical metadata explicit.
- Keep version-specific citation suggestions.

Suggested version notice for v1:

> **Version note:** This is the original workshop-based version published on 9 February 2026. A substantially revised essay develops the concept of asymmetric amplification more systematically, distinguishes multiple interacting asymmetries, and connects them to epistemic infrastructure, scholarly competence, and academic competition. The original remains available to preserve the development and citability of the argument.

Suggested version notice for v2:

> **Version note:** This essay is a substantially revised second version of a workshop text first published on 9 February 2026. It preserves the original claim that frontier LLMs amplify rather than automate research, but reorganises the argument around multiple interacting asymmetries and their cumulative effects on scholarly capacity and academic competition. The original workshop version remains available as Version 1.

## Blogpost v2: function

Version 2 should become the clearest public essay on **multiple asymmetric amplifications in research**.

It should not remain a workshop transcript. It should be a linear argument of approximately 4,000–6,000 words, depending on the target format.

It should:

- retain the author’s situated first-person authority where useful;
- reduce model tutorials and hands-on exercises;
- avoid excessive dependence on rapidly ageing product announcements;
- systematise the multiple asymmetries;
- connect competence to infrastructure and cumulative advantage;
- explain why justified criticism coexists with growing structural pressure to engage;
- introduce epistemic infrastructure and Promptotyping as partial methodological responses, not universal solutions;
- distinguish individual use from institutional and infrastructural transformation;
- end with collective governance, autonomy, and the capacity to use, constrain, replace, or refuse systems.

## Scholarly paper: function

The paper should not be the longer version of blogpost v2. Its primary object is Promptotyping as a method.

The paper should use asymmetric amplification to explain the broader significance and unequal conditions of the method, but should remain centred on:

- project-specific digital research artefacts;
- maintained project knowledge;
- Context Engineering and Agentic Engineering;
- recurrent forms of work;
- write-back;
- verification, validation, and acceptance;
- documented project cases;
- reconstructability;
- limits and evaluation.

The blog essay asks:

> What multiple asymmetries arise when frontier-LLM systems amplify scholarly competence and research capacity?

The paper asks:

> How can structured research data and maintained project knowledge guide the iterative, agent-supported development, examination, revision, and responsible acceptance of project-specific digital research artefacts?

# Central Thesis for Blogpost v2

Use this as the governing claim:

> **Frontier LLM systems do not distribute scholarly competence or automate research as a whole. They asymmetrically amplify the practical reach of competence, data, and infrastructure that can be made computationally accessible and assessed. Because these preconditions are unevenly distributed and can generate cumulative advantages, frontier systems reshape not only research practice but also academic competition.**

Important qualifications:

- The relevant unit is normally the **model–harness–environment system**, not the model alone.
- “Amplification” does not imply that every output improves.
- Existing deficits, weak assumptions, and unjustified representations can also be amplified.
- “Competition” includes institutional visibility, feasibility, funding, collaboration, publishing, infrastructure building, and capacity to pursue research questions.
- The argument is not that all researchers must use AI.
- The structural claim is that the transformation proceeds independently of individual scholarly consent and can impose costs on non-use.
- Critical engagement is not endorsement.
- Competence includes the capacity to refuse, constrain, localise, replace, and govern systems.

# Multiple Asymmetries

The revised essay should distinguish at least the following asymmetries. They interact and should not be treated as isolated categories.

## 1. Task asymmetry

Frontier systems act most directly where materials and operations are digitally represented and tool-accessible.

Strongly amplified areas include:

- coding;
- data transformation;
- structured extraction;
- formal comparison;
- literature retrieval and synthesis;
- interface construction;
- documentation;
- reproducible computational checks.

Less directly externalisable elements include:

- tacit source familiarity;
- embodied or situated knowledge;
- field relationships;
- contextual judgement;
- responsibility;
- interpretation of exceptional cases.

Do not map this simplistically onto disciplines. The relevant distinction is the computational accessibility of the task and the adequacy with which its scholarly conditions can be represented.

## 2. Competence asymmetry

The same system can produce autonomy or dependency.

Researchers gain more leverage when they can:

- articulate requirements;
- understand their data;
- distinguish plausible from warranted output;
- diagnose technical failures;
- assess representational adequacy;
- recognise what has not been externalised;
- establish meaningful acceptance criteria.

Central proposition:

> What can be externalised is the articulable part of competence rather than competence itself.

The ability to specify and the ability to recognise insufficient specification are both necessary.

## 3. Verification asymmetry

Capability grows faster in some areas than the ability to establish the epistemic status of outputs.

- Formal tasks with verifiable ground truth permit stronger automated checking.
- Long agentic chains produce outputs whose final surface does not reveal all intermediate choices.
- Deterministic checks only establish encoded properties.
- Agentic review can gather probabilistic evidence.
- Scholarly adequacy still depends on source knowledge, interpretation, and accountable judgement.

This asymmetry explains why technically impressive outputs may increase rather than reduce verification labour.

## 4. Data asymmetry

Well-structured, documented, machine-actionable research data provide more leverage than inaccessible or weakly modelled material.

Relevant advantages include:

- explicit semantics;
- provenance;
- stable identifiers;
- formal schemas;
- reusable mappings;
- evaluation material;
- documented uncertainty.

The same effect can propagate poor data and inherited categories. Better implementation does not repair an inadequate research basis automatically.

## 5. Epistemic visibility asymmetry

The systems favour knowledge that is:

- digitised;
- retrievable;
- highly cited;
- English-language;
- peer-reviewed in indexed venues;
- represented in formats accessible to the system.

Less digitised languages, local scholarship, grey literature, archival material, oral knowledge, and marginalised traditions are disadvantaged not only in generated answers but in their capacity to become inputs to new computational artefacts.

Key statement:

> Epistemic visibility becomes implementation capacity.

## 6. Access asymmetry

Users do not have equivalent access to “AI”.

Relevant differences include:

- model generation and capability;
- subscription tier;
- context capacity;
- rate limits;
- API access;
- agentic harnesses;
- tool permissions;
- hosted execution;
- data-governance conditions;
- institutional support.

Avoid treating access to a basic chatbot as equivalent to access to a frontier agentic environment.

## 7. Infrastructure asymmetry

Effective amplification depends on an integrated system:

- frontier model;
- harness;
- persistent environment;
- versioned project knowledge;
- structured data;
- tools and execution;
- monitoring;
- verification;
- technical and scholarly support.

Proprietary providers increasingly control multiple layers of this stack. Open-weight availability does not by itself remove inequality because deployment, integration, concurrency, maintenance, and governance require resources.

## 8. Language and disciplinary asymmetry

Model performance and available infrastructures differ among languages, domains, source types, and disciplinary conventions.

The essay should avoid claiming one universal frontier. There are several jagged frontiers, situated differently across research communities.

## 9. Labour asymmetry

Frontier systems redistribute labour.

Possible reductions:

- routine implementation;
- first-pass transformation;
- repetitive documentation;
- boilerplate code;
- initial exploration.

Possible increases:

- specification;
- context preparation;
- source selection;
- auditing;
- discrepancy investigation;
- orchestration;
- maintenance;
- governance;
- expert verification.

The hidden labour may fall unevenly across roles and may be shifted from visible development to less visible contextual and evaluative work.

## 10. Institutional asymmetry

Institutions differ in their ability to convert frontier capabilities into durable capacity.

Advantages arise from:

- research software engineering;
- data stewardship;
- legal and ethical support;
- procurement;
- compute;
- repositories;
- sustained maintenance;
- protected experimentation time;
- interdisciplinary teams.

These conditions affect which projects appear feasible and which institutions become attractive collaborators.

## 11. Competitive asymmetry

Frontier systems may reshape competition by affecting:

- speed and breadth of experimentation;
- production of demonstrators;
- grant readiness;
- publication capacity;
- ability to process larger corpora;
- infrastructure outputs;
- visibility;
- collaboration;
- parallel project management.

Use cautious language. The systems do not automatically improve scholarship. They alter the conditions under which scholarly competence becomes operational and institutionally legible.

## 12. Cumulative asymmetry

This is the strongest new development beyond the existing essays.

A project that converts model use into maintained infrastructure retains:

- clearer project knowledge;
- structured data;
- reusable code;
- tests;
- error cases;
- evaluation criteria;
- documented decisions;
- operational artefacts;
- model-specific experience;
- handover capacity.

These resources improve the starting state of later iterations. Initial differences can therefore compound.

Core loop:

> competence → articulated project knowledge → agentic implementation → research artefacts → examination → findings → write-back → greater subsequent capacity

This is the point at which amplification becomes a cumulative competitive advantage rather than a one-off productivity gain.

# Structural Compulsion and Critical Engagement

The conclusion should not be framed as “the question is not whether everyone has AI”. That formulation is too narrow and risks making universal adoption appear inevitable or desirable.

The deeper claim is:

> **All major criticisms of frontier LLMs may remain valid while the systems become increasingly consequential and difficult for scholarly communities to ignore. Their power does not refute the critique; it intensifies the problem.**

Relevant criticisms:

- proprietary control;
- opaque training data and internal processes;
- ecological and material cost;
- extractive labour and data practices;
- bias and epistemic exclusion;
- privacy and data-governance risks;
- concentration of cognitive infrastructure;
- commercial defaults governing scholarly work;
- dependence on rapidly changing systems.

At the same time:

- deployment proceeds across sectors without requiring individual scholarly consent;
- collaborators, institutions, publishers, funders, and competitors may adopt these capabilities;
- expanded output and implementation capacity may become normalised;
- non-use can acquire opportunity costs even where refusal remains formally possible.

Use **structural pressure**, **competitive compulsion**, or **infrastructural compulsion**, not literal technological inevitability.

Do not say:

> Every researcher is forced to use AI.

Prefer:

> Researchers increasingly operate within environments in which the use of frontier systems by other actors changes expectations, feasible outputs, and competitive conditions. Individual refusal remains possible, but it does not suspend the surrounding transformation and may carry growing costs.

The response must avoid two false alternatives:

1. uncritical adoption;
2. withdrawal without operational understanding.

Critical engagement means developing the capacity to:

- use systems where warranted;
- understand their concrete operation;
- verify outputs;
- restrict permissions and data access;
- maintain project knowledge independently of providers;
- migrate to local or alternative systems;
- refuse unsuitable tasks or systems;
- contest institutional expectations;
- participate in collective infrastructure and governance decisions.

Key proposition:

> Competence is also the capacity to refuse, constrain, replace, and redirect.

# Relation Between Epistemic Infrastructure and Promptotyping

Do not treat the two concepts as synonyms.

## Epistemic infrastructure

The broader arrangement of systems, structures, processes, records, and technologies that makes the production and assessment of scholarly knowledge reconstructable.

It addresses:

- source and reference chains;
- data states;
- transformations;
- outputs;
- verification evidence;
- attribution of judgement;
- interdisciplinary coordination.

## Promptotyping

A specific iterative method for translating structured research data and maintained project knowledge into project-specific digital research artefacts through Context Engineering and Agentic Engineering.

It contributes to epistemic infrastructure through:

- maintained project knowledge;
- bounded implementation tasks;
- versioned artefacts;
- inspectable operations;
- differentiated checking;
- write-back;
- purpose-specific acceptance;
- identifiable promptotypes.

Relationship:

> Promptotyping is one method for constructing and revising project-level epistemic infrastructure around agent-supported research artefacts.

# Recommended Structure for Blogpost v2

## Title options

Preferred:

# Asymmetric Amplification
## How Frontier LLM Systems Reshape Scholarly Capacity and Academic Competition

Alternative:

# Who Gets Amplified?
## Frontier LLMs and the Unequal Expansion of Scholarly Capacity

Alternative emphasising feedback:

# Software That Amplifies—and Talks Back
## Frontier LLMs, Scholarly Competence, and Academic Competition

## Sections

1. **The Claim of Automated Research**
   - Begin with frontier labs’ automation narrative.
   - Distinguish the strategic goal from present scholarly reality.
   - Use only a small number of current examples, all verified and date-stamped.

2. **Neither Automation nor Acceleration**
   - Automation overstates.
   - Acceleration understates.
   - Define asymmetric amplification.

3. **What Gets Amplified**
   - Articulable competence, structured data, project knowledge, infrastructure.
   - Clarify the model–harness–environment system.

4. **Multiple Asymmetries**
   - Group rather than mechanically list all twelve:
     - task and competence;
     - verification and epistemic visibility;
     - data, access, and infrastructure;
     - labour, institutions, and competition;
     - cumulative advantage.

5. **From Competence to Infrastructure**
   - Explain durable project capacity.
   - Introduce epistemic infrastructure.
   - Explain why agentic outputs have indeterminate status without reconstructable references.

6. **Software That Talks Back**
   - Use concise vignettes:
     - infrastructure reveals selection divergence;
     - M³GIM reveals modelling consequences;
     - ZBZ reveals unauthorised agent approval;
     - Notker reveals the value of bounded acceptance.
   - Do not reproduce full case histories.

7. **When Advantage Compounds**
   - Develop cumulative asymmetry.
   - Connect to academic competition and institutional legibility.

8. **Critique Does Not Cancel Power**
   - Present the strongest criticism fairly.
   - Explain structural pressure without endorsing inevitability.
   - State that non-use remains legitimate but does not stop infrastructural change.

9. **The Capacity to Engage on Scholarly Terms**
   - Epistemic infrastructure, Promptotyping, verification, sovereignty, selective refusal.
   - End with collective rather than merely individual responsibility.

# Style Rules

- Precise, sober academic essay style.
- British spelling: artefact, operationalise, organising.
- Retain a situated first person only where it provides evidence or makes the argument’s provenance visible.
- Avoid hype language unless quoting or explicitly analysing it.
- Prefer “can”, “may”, “makes practicable”, and “under documented conditions” to universal claims.
- Distinguish model, agent, harness, workflow, and infrastructure.
- Use “frontier LLM systems” when the claim depends on both model capability and surrounding tools.
- Avoid treating “AI” as a unitary object.
- Preserve the difference between technical processability, correct implementation, and scholarly adequacy.
- Do not equate formal correctness with scholarly validity.
- Do not imply that an agent authorises verification or acceptance.
- Avoid presenting Europe, open weights, or sovereignty through claims that will age quickly without current evidence.
- Date all product-specific claims and minimise them in the enduring conceptual core.
- Separate author experience from general evidence.
- Mark interpretative inferences as such.
- Do not overstate transferability from a single scholar-developer’s practice.

# Evidence and Citation Rules

For blogpost v2:

- Verify every current model, company, policy, pricing, capability, and infrastructure claim immediately before publication.
- Prefer primary sources for model releases and technical capabilities.
- Use scholarly sources for conceptual and empirical claims.
- Preserve the existing CC BY 4.0 provenance.
- Cite the original blogpost as Version 1 where argument history matters.
- Cite the collaborative epistemic-infrastructure essay where its specific concepts and case findings are used.
- Cite the Promptotyping paper only after an archival or stable preprint version exists; before that, use the public repository or clearly identify the manuscript status.
- Do not reuse co-authored arguments in a way that erases the co-authors’ contribution. Attribute the collaborative case and its conclusions explicitly.

# Concrete Editorial Tasks for Claude Code

1. Retrieve the Markdown source of blogpost v1 from the website repository.
2. Preserve it unchanged in a versioned or archived path.
3. Inspect front matter, routes, canonical URLs, citation blocks, language variants, and build logic.
4. Propose a versioning implementation that does not break existing links.
5. Create a new Markdown draft for v2 using the structure in this document.
6. Reuse text from v1 selectively; do not copy the workshop transcript wholesale.
7. Create a change log mapping:
   - retained claims;
   - revised claims;
   - removed workshop material;
   - new asymmetries;
   - new cumulative-advantage argument;
   - revised conclusion on structural pressure.
8. Add visible version notes to v1 and v2.
9. Ensure each version has its own publication/update date and citation suggestion.
10. Audit all time-sensitive claims against current primary sources.
11. Flag claims that are personal interpretation rather than established fact.
12. Check attribution to the co-authored epistemic-infrastructure essay.
13. Keep the Promptotyping paper separate; use this knowledge document to revise its asymmetric-amplification sections without turning the paper into the blog essay.
14. Maintain a decision log for consequential editorial changes.
15. Produce a final report listing unresolved conceptual, evidential, and implementation questions.

# Acceptance Criteria for Blogpost v2

The draft is ready for author review when:

- it reads as one linear essay rather than a workshop transcript;
- asymmetric amplification is defined once and used consistently;
- at least five interacting asymmetries are explained, including cumulative asymmetry;
- the model–harness–environment distinction is clear;
- competence is not reduced to individual skill;
- the relation to academic competition is cautious and concrete;
- justified criticism is represented without caricature;
- structural pressure is distinguished from literal coercion or inevitability;
- epistemic infrastructure and Promptotyping are related but not conflated;
- verification, scholarly validation, and acceptance are not treated as interchangeable;
- the final section concerns collective scholarly agency, governance, and selective refusal;
- all time-sensitive factual claims are current and sourced;
- the relation between v1, v2, the co-authored essay, and the scholarly paper is transparent.

# One-Sentence Synthesis

> Frontier LLM systems asymmetrically amplify the practical reach of scholarly competence, data, and infrastructure; because the conditions of articulation, verification, access, and cumulative reuse are unevenly distributed, this amplification can expand research possibilities while simultaneously deepening dependency, epistemic exclusion, and competitive inequality.
