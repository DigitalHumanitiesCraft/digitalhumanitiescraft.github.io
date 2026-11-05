---
title: "Claim check of the UFL deck against the vault distillates"
created: 2026-11-05
status: draft
related: [deck-inventory.md, sources.md, outline.md]
---

# Claim check of the UFL deck, revision Vgc4dbeUAt_ykg

Two checking agents compared every substantive statement of the deck with the distillates of the vault DHCraft/kce-blogpost-vault on 2026-11-05. The main session checked the entries marked falsch by sample against the distillates. The list went to the session that edits the slides. Entries are German, as the deck is.

# Claim Check Folien 1 bis 42

Geprüft gegen alle Distillate in `kce-blogpost-vault/20_distillates/` (publications und documents) im Stand vom 2026-11-05 abends, einschließlich der während der Prüfung hinzugekommenen Distillate (hong-2025-context-rot, eu-2024-ai-act, eu-2026-digital-omnibus-ai, langchain-2026-agent-harness, anthropic-2026-prompting-best-practices, anthropic-2026-token-counting, karpathy-2025-vibe-coding, karpathy-2025-never-felt-behind, karpathy-2026-few-shotted-for-breakfast, arcprize, simplebench), dazu `sources.md` § Divergences und § Terms without a read source. Für die Folien 36 und 20 wurde zusätzlich die Markdown-Repräsentation in `10_markdown/documents/` eingesehen, um festzustellen, ob die Quelle eine im Distillat fehlende Aussage enthält. Aussagen, die die Distillate vollständig tragen, sind nicht aufgeführt. Folien ohne Befund: 1 bis 4, 7, 10, 12, 13, 23, 26 bis 28, 31, 35, 38, 41, 42.

Für Folie 7 tragen die neuen Karpathy-Distillate die zitierten Posts vollständig, für Folie 10 trägt Liu (2026) zusammen mit LangChain (2026, s3) die Harness-Definition, für Folie 18 trägt hong-2025-context-rot den Begriff Context Rot.

### Folie 5: Lernziele und Ablauf
- Aussage: "Agentic Engineering: AI Agents arbeiten lassen. Menschen bestimmen Ziel, Grenzen und Abnahme."
- Befund: überdehnt
- Beleg: willison-2026-agentic-engineering s1, s5 und Appraisal (die Formulierung, Menschen bestimmten die Handlungsspielräume, steht nicht in der Quelle); hassan-2025-agentic-software-engineering s6 (der Coach legt je Aufgabe Autonomie und Sorgfalt fest)
- Vorschlag: "Agentic Engineering: mit AI Agents arbeiten. Menschen geben das Ziel vor, legen fest, wie viel der Agent selbstständig tun darf, und prüfen das Ergebnis." Dazu in der Notiz festhalten, dass Willison den Begriff für Softwareentwicklung verwendet und der Workshop ihn hier als Oberbegriff führt.

### Folie 5: Lernziele und Ablauf
- Aussage: "Prompt Engineering: dem Agenten Ziel, Vorgaben und Zwischenschritte mitgeben."
- Befund: überdehnt
- Beleg: anthropic-2025-effective-context-engineering s2 (Prompt Engineering als Methoden, Anweisungen zu schreiben und zu ordnen); anthropic-2026-prompt-engineering-overview, Open questions (definiert den Begriff nicht); anthropic-2026-prompting-best-practices s5 (allgemeine Anweisungen statt vorgeschriebener Schrittpläne)
- Vorschlag: "Prompt Engineering: Anweisungen an das Modell schreiben und ordnen, mit Ziel, Kontext und Erfolgskriterien."

### Folie 5: Lernziele und Ablauf
- Aussage: "Knowledge Engineering: Projektwissen in Dokumenten festhalten, die Mensch und Agent lesen, prüfen und weiterführen."
- Befund: überdehnt
- Beleg: allen-2023-knowledge-engineering-llms s1 und Appraisal (die Quelle spricht von Prozessen, die Wissen erzeugen und anwenden; der Folienwortlaut ist enger); dhcraft-2026-promptotyping-glossary s3 trägt die Wissensbasis aus Dokumenten für menschliche Prüfung
- Vorschlag: "Knowledge Engineering: Prozesse gestalten und pflegen, die Wissen erzeugen und anwenden. Im Workshop heißt das, Projektwissen in Dokumenten festzuhalten, die Mensch und Agent lesen, prüfen und weiterführen."

### Folie 5: Lernziele und Ablauf
- Aussage: die fünf Begriffe als ein Schema, belegt mit "IBM Technology. Agentic Engineering: 5 Terms Every AI Developer Should Know. 2026."
- Befund: nicht getragen
- Beleg: keiner; sources.md § Terms without a read source (das Ebenenschema ruht auf einem Video)
- Vorschlag: Das Video als Anregung belassen und die fünf Bestimmungen als Arbeitsdefinitionen des Workshops kennzeichnen, etwa mit der Zeile "Arbeitsdefinitionen dieses Workshops".

### Folie 6: Aufbauendes Beispiel und Ablauf
- Aussage: "Anwendungen, die unter den EU AI Act fallen, etwa Entscheidungen über Personal"
- Befund: nicht getragen
- Beleg: keiner; eu-2024-ai-act trägt nur Art. 50, Art. 113 und Erwägungsgrund 133, der Rest der Verordnung ist ausdrücklich nicht gelesen
- Vorschlag: "Vorsicht bei Anwendungen, für die der EU AI Act besondere Pflichten vorsieht." Das Beispiel Personal erst nach Lektüre der einschlägigen Stelle der Verordnung wieder aufnehmen und dazu ein Distillat anlegen.

### Folie 8: fancy (research) tools & workflows
- Aussage: "Kleine Forschungswerkzeuge und Workflows, die Coding Agents aus einer gepflegten Wissensbasis bauen, meist als statische Anwendungen im Browser."
- Befund: überdehnt
- Beleg: dhcraft-2026-fancy-research-tools s1, s2, s6 und Appraisal („aus einer gepflegten Wissensbasis“ ist für Promptotyping belegt, nicht als Definition der Werkzeuge); sources.md (Seite am 2026-11-05 umbenannt, Neuprüfung nach dem Deploy offen)
- Vorschlag: "Werkzeuge für die Arbeit mit Wissen, entwickelt mit Coding Agents, meist als statische Anwendungen im Browser." Nach dem Deploy gegen den neuen Lede der Seite abgleichen.

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Konfabulation"
- Befund: überdehnt
- Beleg: farquhar-2024-semantic-entropy s1, s2 und Appraisal (Confabulation ist eine Teilmenge der Halluzinationen, falsch und beliebig); ji-2023-hallucination-survey s1 (allgemeine Definition)
- Vorschlag: "Halluzination (Konfabulation als Teilform)"

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Eine andere Art von “Weltmodell”"
- Befund: nicht getragen
- Beleg: keiner für Weltmodell; shanahan-2023-talking-about-llms s5 trägt eine andere Art von Intelligenz, s1 und s4 das Modell als Verteilung von Token ohne Begriff von Wahrheit
- Vorschlag: "Eine andere Art von Intelligenz als die eines einzelnen Menschen"

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Context Window als „Aufmerksamkeitsspanne“"
- Befund: überdehnt
- Beleg: anthropic-2026-context-windows s2 und Appraisal (Arbeitsgedächtnis, keine Aufmerksamkeitsspanne); anthropic-2026-explore-context-window, Appraisal; anthropic-2025-effective-context-engineering s5 (begrenztes Aufmerksamkeitsbudget)
- Vorschlag: "Context Window als „Arbeitsgedächtnis“ mit begrenztem Aufmerksamkeitsbudget"

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Knowledge Cut-Off und kein kontinuierliches Lernen"
- Befund: überdehnt
- Beleg: cheng-2024-dated-data s1, s4 (berichteter und effektiver Cutoff), s9 nur als Hintergrund im Abschnitt Related Work; wu-2024-continual-learning, Appraisal (die Quelle trägt nicht, dass bereitgestellte Modelle nicht weiterlernen, nur dass häufiges Neutraining als unpraktikabel gilt)
- Vorschlag: "Knowledge Cut-off: Das Modell ändert sich nach dem Training nicht, und sein wirksamer Wissensstand kann vor dem angegebenen liegen."

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Fabrizio Dell’Acqua et al., ‘Navigating the Jagged Technological Frontier …’, Organization Science 37, no. 2 (2026): 403–23"
- Befund: nicht getragen
- Beleg: keiner; sources.md § Candidates without full text (Volltext nicht gelesen); gans-2026-jagged-intelligence s7 referiert die Studie aus zweiter Hand
- Vorschlag: Zitat streichen und die jagged technological frontier über Gans (2026) belegen, oder erst nach Lektüre des Volltexts aufnehmen.

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Summerfield, Christopher. These Strange New Minds … Viking, 2025."
- Befund: nicht getragen
- Beleg: keiner; kein Distillat, nicht in sources.md
- Vorschlag: ohne Beleg im Vault; streichen oder erst nach Lektüre und Distillat aufnehmen.

### Folie 9: LLMs bzw. AI Agents als Jagged Alien Intelligences
- Aussage: "Lindsey, Jack … “On the Biology of a Large Language Model”. Transformer Circuits, n.d. Accessed 25 May 2025."
- Befund: falsch
- Beleg: lindsey-2025-biology-llm, Appraisal (Forschungsbericht vom 27. März 2025)
- Vorschlag: "Lindsey, Jack, et al. On the Biology of a Large Language Model. Transformer Circuits Thread, 27. März 2025."

### Folie 11: Prompt Engineering ist so 2025!
- Aussage: "Die Form eines Prompts ist bei aktuellen Modellen weitgehend egal. Entscheidend sind: Ziel, nötiges Wissen, Erfolgskriterien"
- Befund: überdehnt
- Beleg: anthropic-2025-effective-context-engineering s8 (die genaue Formatierung verliert vermutlich an Bedeutung); anthropic-2026-prompting-best-practices s4, s5 und Appraisal (stützt die These nur teilweise, lehrt weiter formbezogene Techniken); anthropic-2026-prompt-engineering-overview s1, s2 (Erfolgskriterien und Tests) und Appraisal; sources.md § Terms without a read source
- Vorschlag: "Die genaue Form eines Prompts verliert bei aktuellen Modellen vermutlich an Gewicht. Wichtig bleiben ein klares Ziel, der nötige Kontext und Erfolgskriterien, an denen sich das Ergebnis prüfen lässt."

### Folie 11: Prompt Engineering ist so 2025!
- Aussage: "Die Qualität entsteht zunehmend außerhalb des Prompts: im Kontext (Context Engineering) und in der Umgebung, die die Arbeit steuert und prüft (Harness Engineering)."
- Befund: überdehnt
- Beleg: anthropic-2025-effective-context-engineering s2; liu-2026-agent-harness s2, s3; langchain-2026-agent-harness s6, s9; ein Trend („zunehmend“) ist nicht belegt
- Vorschlag: "Die Qualität hängt auch vom Kontext ab (Context Engineering) und von der Umgebung, die die Arbeit steuert und prüft (Harness Engineering). Bei gleichem Modell ändert ein anderer Harness die gemessene Leistung deutlich."

### Folie 14: Markdown
- Aussage: "Hierarchie und Elemente werden mit wenigen Zeichen explizit, was für LLMs deutlich weniger Tokens kostet als etwa Word-XML."
- Befund: nicht getragen
- Beleg: keiner; gruber-2004-markdown, Appraisal; anthropic-2026-token-counting, Appraisal (kein Vergleich, aber Werkzeug zur eigenen Messung); sources.md § Terms without a read source
- Vorschlag: "Hierarchie und Elemente werden mit wenigen Zeichen explizit. Wie viele Tokens das gegenüber Word-XML spart, lässt sich mit einem Tokenizer messen." Alternativ eine eigene Messung durchführen und Zahl samt Tokenizer angeben.

### Folie 14: Markdown
- Aussage: "Ein Tokenizer zerlegt Text in Tokens und ordnet ihnen Zahlen zu."
- Befund: überdehnt
- Beleg: sennrich-2016-subword-units s5, s7 (Zerlegung in Einheiten eines festen Vokabulars); anthropic-2026-token-counting s4, s7 (modellabhängiger Tokenizer) und Open questions (Verfahren nicht erklärt); die Zuordnung zu Zahlen steht in keinem Distillat
- Vorschlag: "Ein Tokenizer zerlegt Text in Tokens aus einem festen Vokabular. Welcher Tokenizer verwendet wird, hängt vom Modell ab."

### Folie 15: AI Agent & Tool Use
- Aussage: "Xu, W., Huang, C., Gao, S., & Shang, S. (2025). LLM-Based Agents for Tool Learning: A Survey."
- Befund: nicht getragen
- Beleg: keiner; sources.md § Candidates without full text (bleibt draußen, bis der Text gelesen ist)
- Vorschlag: Zitat streichen; Tool Use über Sapkota et al. (2025, s8, s9) und Yao et al. (2023) belegen.

### Folie 16: Subagents
- Aussage: "mit eigenen Anweisungen, Werkzeugen und Modell"
- Befund: überdehnt
- Beleg: anthropic-2026-custom-subagents s1 (eigener System Prompt, Werkzeugzugriff, Berechtigungen); ein eigenes Modell steht in keinem Distillat
- Vorschlag: "mit eigenen Anweisungen, Werkzeugen und Berechtigungen". Falls das Modell bleiben soll, die Aussage zur Modellwahl aus der gelesenen Subagent-Seite ins Distillat aufnehmen.

### Folie 16: Subagents
- Aussage: "Teilaufgaben laufen gleichzeitig, das Modell passt zur Schwierigkeit der Aufgabe."
- Befund: überdehnt
- Beleg: anthropic-2025-multi-agent-research s2; anthropic-2026-custom-subagents s10; anthropic-2026-prompting-best-practices s10 (parallele, unabhängige Aufgaben); zur Wahl des Modells nach Schwierigkeit kein Beleg
- Vorschlag: "Unabhängige Teilaufgaben können gleichzeitig laufen. Für einfache Teilaufgaben genügt ein günstigeres Modell." Den zweiten Satz als Empfehlung des Workshops kennzeichnen.

### Folie 17: Hands-On 2: Wissensdokumente destillieren
- Aussage: "Ein Wissensdokument ist strukturiertes, externalisiertes Wissen, destilliert aus Quellen, Daten oder Erfahrung zur Wiederverwendung durch Menschen und KI-Agenten."
- Befund: überdehnt
- Beleg: dhcraft-2026-promptotyping-convention s1 bis s4; dhcraft-2026-promptotyping-glossary s1; „externalisiert“ ohne gelesene Quelle (sources.md § Terms without a read source, Nonaka nicht geöffnet)
- Vorschlag: "Ein Wissensdokument ist eine strukturierte Wissenseinheit, destilliert aus Quellen, Daten oder Erfahrung, für die gemeinsame Arbeit von Menschen und KI-Agenten."

### Folie 18: Context Window managen
- Aussage: "A context window, in the context of large language models (LLMs), refers to the portion of text that the model can consider at once when generating or analyzing language. It is essentially the window through which the model "sees" …"
- Befund: nicht getragen
- Beleg: keiner für dieses Zitat, die Herkunft ist auf der Folie nicht angegeben; anthropic-2026-context-windows s1 trägt eine andere, belegte Definition
- Vorschlag: "The “context window” refers to all the text a language model can reference when generating a response, including the response itself." (Anthropic, Context windows)

### Folie 18: Context Window managen
- Aussage: "/context zeigt, wie voll das Context Window ist und womit."
- Befund: nicht getragen
- Beleg: keiner; anthropic-2026-explore-context-window nennt den Befehl nicht in seinen Aussagen
- Vorschlag: Aussage belassen und die zugehörige Stelle der Claude-Code-Dokumentation als Distillat aufnehmen, sonst als Bedienhinweis ohne Quellenanspruch führen.

### Folie 18: Context Window managen
- Aussage: "/compact ersetzt den Verlauf durch eine Zusammenfassung. CLAUDE.md und die zuletzt bearbeiteten Dateien werden neu geladen."
- Befund: überdehnt
- Beleg: anthropic-2026-explore-context-window s3, s4 (bis zu fünf zuletzt gelesene oder bearbeitete Dateien), s5 (verschachtelte CLAUDE.md werden mit zusammengefasst); anthropic-2026-claude-code-memory s10 (nur die CLAUDE.md im Projektwurzelverzeichnis)
- Vorschlag: "/compact ersetzt den Verlauf durch eine strukturierte Zusammenfassung. Die CLAUDE.md im Projektwurzelverzeichnis und bis zu fünf zuletzt gelesene oder bearbeitete Dateien werden neu eingelesen."

### Folie 19: AGENTS.md / CLAUDE.md
- Aussage: "Das Harness lädt sie bei jeder Session und nach /compact."
- Befund: überdehnt
- Beleg: anthropic-2026-claude-code-memory s2 (AGENTS.md nur ohne CLAUDE.md), s4, s10; anthropic-2026-explore-context-window s5; agents-md, Appraisal (die Seite belegt das Laden nicht)
- Vorschlag: "Claude Code lädt CLAUDE.md zu Beginn jeder Session und liest die Datei im Projektwurzelverzeichnis nach /compact neu ein. AGENTS.md liest Claude Code nur, wenn keine CLAUDE.md vorhanden ist."

### Folie 19: AGENTS.md / CLAUDE.md
- Aussage: "/init untersucht das Projekt und legt die CLAUDE.md an."
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: Bedienhinweis belassen und die Stelle in der gelesenen Memory-Seite ins Distillat aufnehmen, falls sie dort steht.

### Folie 20: Hands-On 3: Wissensbasis nutzen
- Aussage: "Sprechende Dateinamen wie AEPD_2026-02_agentic-artificial-intelligence werden eher besser gefunden."
- Befund: überdehnt
- Beleg: anthropic-2025-effective-context-engineering s9 (Dateipfade als leichte Verweise); die Quelle sagt in Block ^b41 und ^b42 zusätzlich, dass Ordnerhierarchien und Namenskonventionen Agenten Signale geben, das Distillat führt das nicht als Aussage
- Vorschlag: "Ordner und sprechende Dateinamen wie AEPD_2026-02_agentic-artificial-intelligence geben dem Agenten Hinweise, wofür eine Datei da ist." Die Stelle ^b41 als Kernaussage ins Distillat aufnehmen.

### Folie 21: KI-Governance auf zwei Ebenen
- Aussage: die Datenebene mit den fünf Fragen (Sichtbarkeit, Klassifikation, Rechtsraum, Zugriff, Nachweis)
- Befund: nicht getragen
- Beleg: keiner; liu-2026-agent-harness, Appraisal (kein Fünf-Fragen-Raster, keine Datenebene); meta-2025-agents-rule-of-two, Appraisal; sources.md § Terms without a read source
- Vorschlag: Raster als Gliederung des Workshops nach dem Video kennzeichnen, etwa "Raster nach IBM Technology (Video, 2026)". Ohne Beleg im Vault.

### Folie 21: KI-Governance auf zwei Ebenen
- Aussage: die Agentenebene mit denselben fünf Fragen
- Befund: überdehnt
- Beleg: liu-2026-agent-harness s5 (Least Privilege), s7 (vertrauenswürdige Inhalte), s9 (Trajektorien als Auditprotokoll), s10 (Anbieterwechsel); anthropic-2026-agent-skills-overview s8 (vertrauenswürdige Erweiterungen); das Raster selbst steht nicht in Liu
- Vorschlag: Fragen belassen und unter der Agentenspalte Liu (2026) als Beleg nennen, das Raster als Workshop-Gliederung kennzeichnen.

### Folie 22: Permission Modes und Autonomie
- Aussage: "Claude Code arbeitet mit Ihren Rechten auf Ihrem Rechner."
- Befund: überdehnt
- Beleg: anthropic-2026-sandboxing s2, s3, s4 (Sandbox standardmäßig aus, unter nativem Windows ohne Sandbox), s6; anthropic-2026-hooks-reference s8 betrifft nur Hook-Befehle
- Vorschlag: "Claude Code führt Befehle auf Ihrem Rechner aus, standardmäßig ohne Sandbox."

### Folie 22: Permission Modes und Autonomie
- Aussage: "Eine feste Grenze setzt erst eine Regel in den Einstellungen."
- Befund: überdehnt
- Beleg: anthropic-2026-permission-modes s8 (Deny-Regeln in jedem Modus) und Appraisal; anthropic-2026-hooks-guide s6 (Hook blockiert in jedem Modus); anthropic-2026-permission-modes s10 (Prüfung ersetzt keine Betriebssystemkontrolle)
- Vorschlag: "Eine feste Grenze setzen Deny-Regeln in den Einstellungen oder ein Hook. Beide gelten in jedem Modus."

### Folie 22: Permission Modes und Autonomie
- Aussage: "Einige Bereiche ändert der Agent nie ohne Rückfrage, etwa den Versionsverlauf des Projekts und seine eigenen Einstellungen."
- Befund: überdehnt
- Beleg: anthropic-2026-permission-modes s9 (geschützte Pfade nie automatisch genehmigt, außer im Modus bypassPermissions) und Appraisal; welche Pfade geschützt sind, führt das Distillat nicht auf
- Vorschlag: "Schreibzugriffe auf einige geschützte Bereiche genehmigt Claude Code nicht automatisch, außer im Modus Bypass." Die Beispiele erst nach Aufnahme der Pfadliste ins Distillat nennen.

### Folie 22: Permission Modes und Autonomie
- Aussage: "Auto Lesen und Bearbeiten im Projekt frei, alles andere prüft ein Klassifikator."
- Befund: falsch
- Beleg: anthropic-2026-permission-modes s3, s4 und Appraisal (die Dokumentation beschreibt auto mode als „Everything, with background safety checks“; ausdrückliche Ask-Regeln erzwingen weiter eine Rückfrage)
- Vorschlag: "Auto führt Aktionen ohne Rückfrage aus, ein eigenes Klassifikatormodell prüft sie vorher. Für die tägliche Arbeit, eine Garantie ist das nicht."

### Folie 22: Permission Modes und Autonomie
- Aussage: "Bypass alles ohne Prüfung. Nur in einer abgeschotteten Testumgebung (Sandbox)."
- Befund: falsch
- Beleg: anthropic-2026-permission-modes s7 (isolierte Umgebungen wie Container oder VMs ohne Internetzugang), s8 (Deny-Regeln blocken auch im Bypass); anthropic-2026-sandboxing s10 (die Sandbox von Claude Code ist keine vollständige Isolationsgrenze)
- Vorschlag: "Bypass führt alles ohne Rückfrage aus, nur Deny-Regeln greifen noch. Nur in einer isolierten Umgebung wie einem Container oder einer VM ohne Internetzugang."

### Folie 22: Permission Modes und Autonomie
- Aussage: "Manual fragt bei allem außer Lesen." und "Accept edits bearbeitet Dateien ohne Rückfrage."
- Befund: nicht getragen
- Beleg: anthropic-2026-permission-modes, Appraisal (Manual ist der CLI-Name von default), die Tabelle der Modi ist nicht als Kernaussage aufgenommen
- Vorschlag: Wortlaut belassen und die Zeilen default und acceptEdits der Tabelle ins Distillat aufnehmen.

### Folie 24: AI Slop & De-Slopification
- Aussage: "Auch ein gutes Ergebnis trägt oft Spuren davon, etwa zu viele Ebenen, Farben und Markierungen, wenn es ungeprüft übernommen wird."
- Befund: überdehnt
- Beleg: anthropic-2026-prompting-best-practices s9 (generische Muster im Frontend als AI-Slop-Ästhetik); shaib-2025-ai-slop s1, s5 (Definition für Text) und Appraisal; die konkreten Merkmale stehen in keiner Quelle
- Vorschlag: "Ohne Vorgaben greifen Modelle bei der Gestaltung auf generische Muster zurück, die als AI-Slop-Ästhetik gelten. Im Beispiel sind das zu viele Ebenen, Farben und Markierungen."

### Folie 24: AI Slop & De-Slopification
- Aussage: "De-Slopification: diese Spuren erkennen und entfernen, bevor das Ergebnis weitergegeben wird."
- Befund: nicht getragen
- Beleg: keiner; der Begriff stammt aus dem Video auf der Folie
- Vorschlag: als Arbeitsbegriff des Workshops kennzeichnen. Ohne Beleg im Vault.

### Folie 24: AI Slop & De-Slopification
- Aussage: "Merriam-Webster, 2025 Word of the Year: Slop" und "Simon Willison, Slop is the new name for unwanted AI-generated content (2024)"
- Befund: nicht getragen
- Beleg: keiner; shaib-2025-ai-slop s1 geht von einer Wörterbuchdefinition aus, ohne dass das Distillat das Wörterbuch nennt
- Vorschlag: beide Angaben streichen oder erst nach Lektüre als Distillat aufnehmen; als Beleg für den Begriff Shaib et al. (2025) nennen.

### Folie 25: Skills: ein PDF-Skill
- Aussage: "Direkt aufrufen mit /governance-pdf."
- Befund: nicht getragen
- Beleg: keiner; die verlinkte Seite code.claude.com/docs/en/skills ist nicht destilliert, agentskills-2026-specification und anthropic-2026-agent-skills-overview nennen den Aufruf per Slash Command nicht
- Vorschlag: Bedienhinweis belassen und die Skills-Seite von Claude Code als Distillat aufnehmen.

### Folie 29: Die erste Iteration des Dashboards
- Aussage: "Das Skript legt die Daten als JavaScript-Datei neben die Seite, weil der Browser JSON-Dateien ohne Server nicht lädt."
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: "Das Skript legt die Daten als JavaScript-Datei neben die Seite, weil Browser das Nachladen lokaler JSON-Dateien beim Öffnen per Doppelklick meist blockieren." Als technische Erläuterung ohne Quellenanspruch führen.

### Folie 30: Hands-on 4: Follow-Up Prompts
- Aussage: "Self-Verification & Self-Refine" als Bezeichnung des Prompts "Ist alles umgesetzt, was im Plan stand? Liste Abweichungen auf und begründe sie."
- Befund: überdehnt
- Beleg: weng-2023-self-verification, Appraisal (engeres Verfahren mit Kandidaten und Rückwärtsprüfung); madaan-2023-self-refine s1; anthropic-2026-prompting-best-practices s6, s7 (Selbstprüfung gegen Kriterien, Self-Correction)
- Vorschlag: "Selbstprüfung und Überarbeitung (Self-Correction)"

### Folie 30: Hands-on 4: Follow-Up Prompts
- Aussage: "LLMs erzeugen immer Rauschen und man muss immer wieder aufräumen."
- Befund: nicht getragen
- Beleg: keiner für den Satz; karpathy-2026-llm-wiki s8 trägt die periodische Prüfung auf Widersprüche, veraltete Aussagen und verwaiste Seiten
- Vorschlag: "Eine von Agenten gepflegte Wissensbasis braucht regelmäßige Prüfung auf Widersprüche, veraltete Aussagen und verwaiste Dokumente."

### Folie 30: Hands-on 4: Follow-Up Prompts
- Aussage: "Kuratieren = Auswählen, Prüfen, Ordnen und erschließen, Kontextualisieren, korrigieren, ergänzen, aussortieren und erhalten"
- Befund: überdehnt
- Beleg: higgins-2008-dcc-curation-lifecycle s6, s8, s9, s7 (bewerten und auswählen, entsorgen, neu bewerten, bewahren) und Appraisal (nur als Analogie, betrifft Daten)
- Vorschlag: Liste als Arbeitsdefinition des Workshops kennzeichnen, mit dem Zusatz "in Anlehnung an das DCC Curation Lifecycle Model".

### Folie 32: Computational Thinking
- Aussage: "Computational Thinking ist die Fähigkeit, ein Problem und seinen Lösungsweg so zu formulieren, zu abstrahieren und zu zerlegen, dass ein ausführender Agent ihn umsetzen kann, und zu beurteilen, ob das Ergebnis stimmt."
- Befund: nicht getragen
- Beleg: keiner; im Vault liegt kein Distillat zu Wing (2006), Wing (2008) oder Shute et al. (2017), obwohl sources.md Wing (2006) als gelesen und bestätigt führt
- Vorschlag: Definition erst nach Anlage eines Wing-Distillats tragen lassen; bis dahin als Arbeitsdefinition des Workshops nach Wing kennzeichnen.

### Folie 32: Computational Thinking
- Aussage: "Ein LLM füllt Lücken stillschweigend. Die Präzision, die früher der Compiler erzwang, muss man heute selbst herstellen."
- Befund: nicht getragen
- Beleg: keiner; allen-2023-knowledge-engineering-llms, Appraisal (kann den verwandten Satz zur Präzision der Spezifikation nicht tragen); ji-2023-hallucination-survey s8 trägt nur, dass Modelle aus parametrischem Wissen überschüssige Information erzeugen
- Vorschlag: ohne Beleg im Vault; als eigene Einschätzung kennzeichnen, etwa "Aus unserer Erfahrung füllt ein LLM Lücken in der Aufgabe stillschweigend."

### Folie 32: Computational Thinking
- Aussage: "Zerlegen übernehmen Agents zunehmend selbst. Formulieren und Prüfen bleiben beim Menschen."
- Befund: überdehnt
- Beleg: anthropic-2026-dynamic-workflows s2 (Claude zerlegt die Aufgabe in Teilaufgaben); willison-2026-agentic-engineering s5; hassan-2025-agentic-software-engineering s7; der Trend „zunehmend“ ist nicht belegt
- Vorschlag: "Zerlegen können Agents inzwischen oft selbst. Die Aufgabe zu spezifizieren und das Ergebnis zu prüfen, bleibt Aufgabe der Menschen."

### Folie 32: Computational Thinking
- Aussage: "Nach Wing ist es eine Denkweise, die über das Programmieren hinausgeht." und (Notiz) "Die ältere Definition von Cuny, Snyder und Wing spricht von einem “information-processing agent” … so die Kritik von Tedre und Denning."
- Befund: nicht getragen
- Beleg: keiner; kein Distillat zu Wing, Cuny/Snyder/Wing oder Tedre und Denning (sources.md § Divergences führt sie nur als Befund der Sitzung)
- Vorschlag: Wortlaut belassen, sobald Distillate zu Wing (2006, 2011) und Tedre und Denning (2016) vorliegen; bis dahin die Notiz als Paraphrase ohne Zitat führen.

### Folie 33: Vibe Coding, Agentic Engineering und Promptotyping
- Aussage: Achse "mehr Prüfung, mehr festgehaltenes Projektwissen" über den drei Spalten
- Befund: nicht getragen
- Beleg: keiner; sources.md § Divergences (keine Quelle ordnet die drei Arbeitsweisen auf einer Skala)
- Vorschlag: als eigene Einordnung kennzeichnen, etwa "Einordnung des Workshops: mehr Prüfung, mehr festgehaltenes Projektwissen".

### Folie 33: Vibe Coding, Agentic Engineering und Promptotyping
- Aussage: "Festgehaltenes Wissen … Anweisungen, Tests, Commits" (Spalte Agentic Engineering)
- Befund: überdehnt
- Beleg: willison-2026-agentic-engineering s7 (Anweisungen und Harnesses); Tests und Commits stehen nicht bei Willison, Commits trägt anthropic-2025-long-running-harnesses s6
- Vorschlag: "Anweisungen und Harness, oft auch Tests und Commits"

### Folie 33: Vibe Coding, Agentic Engineering und Promptotyping
- Aussage: "Karpathy. Vibe Coding. X. 2025."
- Befund: falsch
- Beleg: karpathy-2025-vibe-coding (Post ohne Titel, 2. Februar 2025); sources.md § Divergences
- Vorschlag: "Karpathy. “There's a new kind of coding I call ‘vibe coding’ …”. Post auf X, 2. Februar 2025."

### Folie 33: Vibe Coding, Agentic Engineering und Promptotyping
- Aussage: "Willison. What is agentic engineering? Agentic Engineering Patterns. 2026."
- Befund: falsch
- Beleg: willison-2026-agentic-engineering, Appraisal (Kapitel ohne Datum, Einführung im Februar 2026 steht nicht im Text)
- Vorschlag: "Willison. What is agentic engineering? Agentic Engineering Patterns. o. J., abgerufen am 4. November 2026."

### Folie 34: Wissensmodellierung
- Aussage: "Fragen identifizieren / Wissen erwerben / Vokabular festlegen / Wissen kodieren / Instanzen beschreiben / Abfragen und Inferenz / Evaluieren" mit Beleg Russell und Norvig (2020)
- Befund: nicht getragen
- Beleg: keiner; sources.md § Terms without a read source und § Candidates without full text (Buch nicht zugänglich); studer-1998-knowledge-engineering s4 bis s6 trägt Modellierung als zyklischen, revidierbaren Prozess
- Vorschlag: Schrittfolge erst nach Lektüre des Kapitels tragen lassen; bis dahin "Modellierung als zyklischer Prozess, das Modell bleibt in jeder Phase revidierbar (Studer et al. 1998)".

### Folie 34: Wissensmodellierung
- Aussage: "Kernproblem: Fragmentierung"
- Befund: überdehnt
- Beleg: jones-2017-personal-information-management s8, s9 und Appraisal (Integration als zentrale Herausforderung, verstreute Information als ein Problem unter mehreren); sources.md § Divergences
- Vorschlag: "Kernproblem: verstreute Information, zentrale Aufgabe: Integration"

### Folie 34: Wissensmodellierung
- Aussage: "Initiierung / Planung / Durchführung / Überwachung und Steuerung / Abschluss"
- Befund: falsch
- Beleg: european-commission-2023-pm2-guide s3 bis s7 und Appraisal (vier Phasen, Monitor & Control läuft über das ganze Projekt)
- Vorschlag: "Initiierung, Planung, Durchführung, Abschluss. Überwachung und Steuerung begleiten das ganze Projekt."

### Folie 34: Wissensmodellierung
- Aussage: "Handbuch Projektmanagement von Jürg Kuster … Lehmanns.de"
- Befund: nicht getragen
- Beleg: keiner; sources.md § Candidates without full text; european-commission-2023-pm2-guide, Appraisal (ersetzt das nicht erreichbare Handbuch)
- Vorschlag: "European Commission. PM² Project Management Methodology Guide 3.1. 2023. https://doi.org/10.2799/970188"

### Folie 36: How Steph Ango uses Obsidian
- Aussage: "“Avoid non-standard Markdown.”", "“Use the 7-point scale for ratings.”", "“Keep a single to-do list per week.”"
- Befund: nicht getragen
- Beleg: ango-how-i-use-obsidian führt nur s3 bis s7; die drei Sätze stehen in der Quelle (10_markdown, Blöcke ^b15, ^b19, ^b20), aber nicht im Distillat
- Vorschlag: Zitate belassen und als Kernaussagen mit den Blockankern ins Distillat aufnehmen.

### Folie 36: How Steph Ango uses Obsidian
- Aussage: "Steph Ango ist CEO von Obsidian."
- Befund: nicht getragen
- Beleg: ango-how-i-use-obsidian, Appraisal (die Rolle steht im gelesenen Text nicht)
- Vorschlag: "Die Empfehlungen stammen vom Autor des Textes „How I use Obsidian“." Die Rolle erst mit eigener Quelle nennen.

### Folie 37: Git und GitHub
- Aussage: "Git hält jeden Stand eines Projekts fest (Versionsverwaltung)."
- Befund: überdehnt
- Beleg: chacon-2014-pro-git s1, s3
- Vorschlag: "Git zeichnet Änderungen an Dateien über die Zeit auf, sodass sich frühere Stände wieder aufrufen lassen (Versionsverwaltung)."

### Folie 37: Git und GitHub
- Aussage: "Ein Commit speichert einen Stand mit einer kurzen Nachricht, ein Tag markiert einen freigegebenen Stand."
- Befund: nicht getragen
- Beleg: keiner für Commit und Tag in chacon-2014-pro-git (nur Abschnitt 1.1 destilliert); anthropic-2025-long-running-harnesses s6 nennt Commits mit beschreibenden Nachrichten
- Vorschlag: "Ein Commit speichert einen Stand mit einer kurzen Nachricht, ein Tag markiert einen bestimmten Stand, etwa eine Veröffentlichung." Die Stellen aus Pro Git zu Commit und Tag ins Distillat aufnehmen.

### Folie 37: Git und GitHub
- Aussage: "Jeder Schritt des Agenten wird als Commit nachvollziehbar und lässt sich zurücknehmen."
- Befund: überdehnt
- Beleg: anthropic-2025-long-running-harnesses s6; pollin-2026-second-brain-vault s5; die Aussage gilt nur, wenn der Agent je Schritt committet
- Vorschlag: "Legt der Agent je Schritt einen Commit an, wird jeder Schritt nachvollziehbar und lässt sich zurücknehmen."

### Folie 39: Das Wissensdokument im Vault
- Aussage: "Frontmatter in YAML: Typ, Datum, Status und Tags machen den Vault abfragbar."
- Befund: überdehnt
- Beleg: obsidian-2026-properties s1, s6 (YAML am Dateianfang, für Mensch und Maschine lesbar); Abfragbarkeit steht in keinem Distillat
- Vorschlag: "Frontmatter in YAML: Typ, Datum, Status und Tags machen jedes Dokument für Mensch und Maschine lesbar."

### Folie 40: Aufbau des Vaults
- Aussage: "Map of Content (MOC): ein Einstiegspunkt, der Links auf verwandte Dokumente mit je einer Zeile Erläuterung versammelt."
- Befund: überdehnt
- Beleg: lyt-2026-mocs s2, s4 und Appraisal (eine Zeile Erläuterung pro Link und die Verschachtelung sind Konventionen des Workshops); karpathy-2026-llm-wiki s9 trägt eine Indexdatei mit einzeiliger Zusammenfassung je Seite
- Vorschlag: "Map of Content (MOC): eine Notiz, die Links auf verwandte Notizen in Gruppen ordnet und hilft, Ideen zu sammeln und darin zu navigieren. Im Vault ergänzen wir je Link eine Zeile Erläuterung."

### Folie 40: Aufbau des Vaults
- Aussage: "Für Agenten sind MOCs Navigationsinfrastruktur. Das Context Window fasst einen größeren Vault nicht vollständig, der Agent startet an einem Einstiegspunkt und folgt Links."
- Befund: überdehnt
- Beleg: karpathy-2026-llm-wiki s9 (das LLM liest zuerst den Index); pollin-2026-second-brain-vault s3 (Agenten folgen expliziten Verweisen); anthropic-2025-effective-context-engineering s9; lyt-2026-mocs, Appraisal (die Rahmung als Navigationsinfrastruktur für Agenten ist die des Workshops)
- Vorschlag: "Einen größeren Vault kann ein Agent nicht vollständig in den Kontext laden. Er liest zuerst einen Index und folgt von dort den Verweisen."

### Folie 40: Aufbau des Vaults
- Aussage: "Wikilinks versteht Obsidian, viele andere Programme nicht."
- Befund: überdehnt
- Beleg: obsidian-2026-internal-links s2, s3 und Open questions (die Seite sagt nicht, ob andere Werkzeuge Wikilinks lesen)
- Vorschlag: "Obsidian nutzt standardmäßig Wikilinks. Wo Interoperabilität zählt, empfiehlt die Hilfe Markdown-Links."
# Claim check, Folien 43 bis 84

Geprüft gegen `kce-blogpost-vault/20_distillates/` im Stand von 2026-11-05, 19:20 (einschließlich der am Abend ergänzten Destillate zu AI Act, Digital Omnibus, Karpathy 2025, ARC-AGI-3, SimpleBench und LangChain 2026) sowie gegen `sources.md` § Divergences und § Terms without a read source. Ausgelassen sind Hands-on-Prompts, eigene Messungen und Werkbeschreibungen des Operators, sofern sie als seine Praxis gerahmt sind, reine Literaturhinweise ohne Aussage und Aussagen, die die Destillate vollständig tragen. Mehrere gleichartige Befehls- oder Listenangaben einer Folie sind in einem Eintrag gebündelt, wo sie dieselbe Belegsituation haben.

### Folie 43: Frontier-LLMs amplifizieren computergestützte Wissensarbeit
- Aussage: "Recursive Self-Improvement ist sehr wahrscheinlich"
- Befund: nicht getragen
- Beleg: kokotajlo-2025-ai-2027 s1, s2, s9 und Appraisal (Szenario, keine Evidenz; die Folienaussage sei ein eigenes Urteil des Workshops); sources.md, Terms without a read source (keine wissenschaftliche Definition gelesen)
- Vorschlag: "Szenarien wie AI 2027 spielen durch, dass KI die KI-Forschung beschleunigt. Wie wahrscheinlich das ist, bleibt umstritten." Alternativ als eigene Einschätzung kennzeichnen.

### Folie 43: Frontier-LLMs amplifizieren computergestützte Wissensarbeit
- Aussage: "Recursive Self-Improvement bedeutet: KI hilft, leistungsfähigere KI zu entwickeln, die wiederum die weitere Entwicklung vorantreibt."
- Befund: überdehnt
- Beleg: kokotajlo-2025-ai-2027 s4, s5, s6 und Open questions (der Text verwendet den Ausdruck Recursive Self-Improvement nicht, er spricht von Intelligenzexplosion und Automatisierung des F&E-Zyklus)
- Vorschlag: "Im Szenario AI 2027 automatisieren KI-Agenten zunehmend die KI-Forschung, und jede Automatisierung beschleunigt die weitere Entwicklung. Den Begriff Recursive Self-Improvement verwenden wir als Arbeitsbegriff."

### Folie 43: Frontier-LLMs amplifizieren computergestützte Wissensarbeit
- Aussage: "Benchmarks sind standardisierte Tests für KI-Modelle. Sie zeigen, wie gut ein Modell bestimmte Aufgaben löst und wo es Fehler macht."
- Befund: überdehnt
- Beleg: arcprize-2026-arc-agi-3 s1, s3, s4 und Appraisal (ARC-AGI-3 ist interaktiv, misst die Effizienz des Lernens und arbeitet ohne Anweisungen in natürlicher Sprache); kwa-2025-time-horizons s8 bis s10 (Übertragbarkeit auf reale Aufgaben offen)
- Vorschlag: "Benchmarks sind standardisierte Tests für KI-Modelle. Sie messen Leistung auf festgelegten Aufgaben, manche auch, wie schnell ein Agent in neuen Umgebungen lernt. Wie weit die Ergebnisse auf reale Aufgaben übertragbar sind, bleibt zu prüfen."

### Folie 43: Frontier-LLMs amplifizieren computergestützte Wissensarbeit
- Aussage: "OpenAI und Mathematik / OpenAI und Navier–Stokes / OpenAI–HuggingFace-Vorfall und Agent Swarms" (als Beispiele für Forschungsresultate und Sicherheitsvorfälle)
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: ohne Beleg im Vault; Vorschlag: als verlinkte Weiterführung ohne eigene Aussage stehen lassen oder die drei Ereignisse vor der Verwendung im Beitrag aus Primärquellen destillieren.

### Folie 44: Agentic Engineering: was das Modell umgibt und was es davon sieht
- Aussage: "Hooks (Skripte) | Was läuft bei Ereignissen? | sperren, erinnern, loggen | nichts, sie laufen außerhalb"
- Befund: falsch
- Beleg: anthropic-2026-hooks-guide s3 (Claude erhält bei einer Blockade eine Rückmeldung mit dem Grund), s10 (SessionStart-Hook spielt Kontext wieder ein); anthropic-2026-hooks-reference s3 (die Blockademeldung ist der stderr-Text des Hooks), s1 (Hooks sind nicht nur Skripte); langchain-2026-agent-harness s8
- Vorschlag: "Hooks (Skripte und andere Handler) ... laufen außerhalb, ihre Rückmeldung gelangt in den Kontext"

### Folie 44: Agentic Engineering: was das Modell umgibt und was es davon sieht
- Aussage: "Memory (.md) | Was hat er sich gemerkt? | MEMORY.md, Notizen | Index ab Start, Notizen bei Bedarf"
- Befund: überdehnt
- Beleg: anthropic-2026-claude-code-memory s4 (beide Gedächtnissysteme werden am Anfang jeder Konversation geladen); anthropic-2026-explore-context-window s2 (Auto Memory lädt vor der ersten Eingabe). Eine Aufteilung in Index und nachgeladene Notizen trägt kein Destillat.
- Vorschlag: "ab Start geladen" oder die Indexlogik vorher aus der Memory-Seite destillieren.

### Folie 44: Agentic Engineering: was das Modell umgibt und was es davon sieht
- Aussage: "Loop Engineering | Loops, Workflows | Was läuft autonom? | Wochenaudit, Workflow | jeder Lauf mit eigenem Kontext" (zusammen mit der Dreiteilung Context, Harness und Loop Engineering als Disziplinen)
- Befund: nicht getragen
- Beleg: sources.md, Terms without a read source (Loop Engineering als Begriff ruht auf einem Video); anthropic-2024-building-effective-agents s1, s2, s5 tragen nur Bestandteile
- Vorschlag: "Loop Engineering (Arbeitsbegriff des Workshops)" in der Zeile kennzeichnen; die Kontextangabe "jeder Lauf mit eigenem Kontext" nur behalten, wenn sie als Beschreibung der eigenen Abläufe gerahmt ist.

### Folie 45: Model Context Protocol (MCP)
- Aussage: "Jedes angeschlossene Programm kann über einen MCP-Server Aktionen anbieten, die das Modell auslöst, etwa eine Berechnung (Tool), Inhalte zum Lesen wie eine Dokumentation (Resource) und Vorlagen mit Anweisungen, etwa Stilregeln für Code (Prompt)."
- Befund: falsch
- Beleg: mcp-2025-specification s5 (Tools führt das Modell aus), s6 (Resources dienen Nutzer oder Modell), s7 (Prompts sind Vorlagen und Abläufe für die Nutzenden)
- Vorschlag: "Ein MCP-Server bietet drei Arten von Fähigkeiten an. Tools führt das Modell aus, etwa eine Berechnung. Resources liefern Inhalte für Nutzende oder Modell, etwa eine Dokumentation. Prompts sind Vorlagen, die Nutzende aufrufen, etwa Stilregeln für Code."

### Folie 45: Model Context Protocol (MCP)
- Aussage: "MCP ist ein offener Standard, über den ein LLM an andere Programme und Datenquellen angeschlossen wird"
- Befund: überdehnt
- Beleg: mcp-2025-specification s1 bis s4 (das Protokoll verbindet LLM-Anwendungen, die Hosts, mit externen Datenquellen und Werkzeugen)
- Vorschlag: "MCP ist ein offenes Protokoll, über das eine LLM-Anwendung an andere Programme und Datenquellen angeschlossen wird"

### Folie 45: Model Context Protocol (MCP)
- Aussage: "Bei einer Frage findet das System passende Textabschnitte (Retrieval), ergänzt damit den Prompt (Augmentation), und das Modell erzeugt daraus die Antwort samt Quellen (Generation). Wie gut die Dokumente aufbereitet sind, bestimmt, wie gut die Antworten werden."
- Befund: überdehnt
- Beleg: lewis-2020-rag s4, s5 (Retriever über einen dichten Vektorindex, Generator auf Dokumenten und Eingabe) und Appraisal; sources.md, Divergences (RAG bei Lewis ist ein gelernter Retriever über einen Vektorindex). "Samt Quellen" und der Satz zur Aufbereitung trägt kein Destillat.
- Vorschlag: "Bei einer Frage findet das System passende Textabschnitte (Retrieval), ergänzt damit die Eingabe (Augmentation), und das Modell erzeugt daraus die Antwort (Generation)." Den Satz zur Aufbereitung als eigene Erfahrung kennzeichnen.

### Folie 45: Model Context Protocol (MCP)
- Aussage: "Das System speichert selbst Notizen zu Vorlieben, Korrekturen und Vorhaben, laufend oder nach Gesprächsende. Zu Beginn lädt es ein Inhaltsverzeichnis, einzelne Notizen holt es bei Bedarf, und auf Wunsch durchsucht es frühere Gespräche. Die Notizen lassen sich einsehen, ändern und löschen."
- Befund: überdehnt
- Beleg: anthropic-2026-claude-code-memory s7 (Notizen aus Korrekturen und Vorlieben), s4, s8; openai-2026-memories s4, s5 (lokale Codex-Memories standardmäßig aus), s7 (Dateien sind erzeugter Zustand, nicht zum Bearbeiten von Hand gedacht). Vorhaben, Zeitpunkt des Schreibens, Inhaltsverzeichnis, Suche in früheren Gesprächen und Bearbeitbarkeit trägt kein Destillat.
- Vorschlag: "Das System schreibt selbst Notizen aus Korrekturen und Vorlieben und lädt sie zu Beginn jeder Sitzung. In Claude Code ist das standardmäßig eingeschaltet, in Codex standardmäßig aus."

### Folie 45: Model Context Protocol (MCP)
- Aussage: "Memory wirkt als Kontext, sicher verhindern lässt sich etwas nur mit einem Hook."
- Befund: überdehnt
- Beleg: anthropic-2026-claude-code-memory s5, s6 (Kontext, nicht erzwungene Konfiguration; zum Blockieren ein PreToolUse-Hook); anthropic-2026-permission-modes s8 (Deny-Regeln blockieren in jedem Modus); anthropic-2026-hooks-guide s5 (für hartes Erlauben oder Verbieten das Berechtigungssystem)
- Vorschlag: "Memory wirkt als Kontext. Verhindern lässt sich etwas erst mit einer Deny-Regel oder einem Hook."

### Folie 46: Agentic Search: suchen wie im Terminal
- Aussage: "Für eine Wissensbasis in Markdown braucht ein Coding Agent meist keine Vektordatenbank." sowie "RAG ... Passt für sehr große Bestände, Synonyme und die Suche nach Bedeutung."
- Befund: überdehnt
- Beleg: documents/anthropic-2025-effective-context-engineering s9, s10 (Just-in-time-Retrieval über Dateipfade, glob und grep in Claude Code, umgeht veraltete Indizes). Einen Vergleich, wann eine Vektordatenbank nötig ist, und die Eignung von RAG für Synonyme und große Bestände trägt kein Destillat.
- Vorschlag: "Claude Code findet Dateien zur Laufzeit mit Werkzeugen wie grep und glob, statt einen Index vorab aufzubauen. Für eine Wissensbasis in Markdown mit sprechenden Dateinamen reicht das in unserer Arbeit meist aus." Den RAG-Eignungssatz als eigene Einschätzung kennzeichnen oder streichen.

### Folie 49: Subagents
- Aussage: "Ein Team Lead verteilt die Arbeit an eigenständige Sessions, die sich über eine gemeinsame Aufgabenliste und direkte Nachrichten selbst abstimmen. Das eignet sich für Review aus mehreren Blickwinkeln und konkurrierende Hypothesen. Die Funktion ist experimentell."
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zur Seite agent-teams; anthropic-2026-cross-session-messaging beschreibt einen anderen Mechanismus)
- Vorschlag: ohne Beleg im Vault; Vorschlag: die Seite https://code.claude.com/docs/en/agent-teams destillieren oder den Absatz auf den Verweis kürzen.

### Folie 49: Subagents
- Aussage: "Claude schreibt ein Skript, das den Ablauf vorab festlegt und viele Subagents steuert. Unterwegs entscheidet kein Agent mehr. Mit dem Schalter Ultracode plant Claude für jede größere Aufgabe selbst einen Workflow."
- Befund: überdehnt
- Beleg: anthropic-2026-dynamic-workflows s1, s2 (Claude plant dynamisch anhand des Prompts), s3 (andere Agenten versuchen Befunde zu widerlegen, der Lauf iteriert bis zur Konvergenz), s5, s7 (ultracode setzt den Effort auf xhigh und lässt Claude entscheiden, wann ein Workflow eingesetzt wird)
- Vorschlag: "Claude schreibt ein Orchestrierungsskript, das viele Subagents parallel steuert. Die Koordination liegt im Skript statt im Gespräch, andere Agenten prüfen die Befunde, bis die Ergebnisse übereinstimmen. Mit der Einstellung ultracode entscheidet Claude selbst, wann es einen Workflow einsetzt."

### Folie 50: Qualität sichern: Skript, wo möglich, Urteil, wo nötig
- Aussage: "Versionieren: Git hält jeden Stand fest, Tags markieren freigegebene Versionen."
- Befund: überdehnt
- Beleg: chacon-2014-pro-git s1, s3 (Versionsverwaltung zeichnet Änderungen auf und erlaubt die Rückkehr zu früheren Ständen); anthropic-2025-long-running-harnesses s6 (Commits erlauben Rückkehr zu funktionierenden Ständen). Tags trägt kein Destillat, und Git hält nur committete Stände fest.
- Vorschlag: "Versionieren: Git hält jeden committeten Stand fest und macht ihn wiederherstellbar."

### Folie 51: Test Driven Development (TDD)
- Aussage: "Beim Test Driven Development entsteht der Test vor dem Code. Zuerst scheitert der Test (rot), dann besteht er mit der Umsetzung (grün)." sowie "Tests verhindern zwei typische Fehler, Code, der nicht funktioniert, und Code, den niemand braucht." und "Leistungsfähige Modelle verstehen das als Anweisung, zuerst Tests zu schreiben, ihr Scheitern zu zeigen und dann umzusetzen."
- Befund: nicht getragen
- Beleg: keiner (das Willison-Destillat umfasst nur das Kapitel What is agentic engineering?, nicht Red/green TDD). Nur der Satz "Ein Test, der schon vor der Umsetzung besteht, prüft nichts" hat eine Entsprechung in jimenez-2024-swe-bench s4 (Fail-to-pass-Filter).
- Vorschlag: ohne Beleg im Vault; Vorschlag: Willisons Kapitel Red/green TDD destillieren, bevor die Folie im Beitrag Aussagen trägt. Zusätzlich prüfen, ob der Satz "In Hands-on 6 übernimmt das Prüfskript diese Rolle" stimmt, denn das Prüfskript aus Prompt 4 entsteht nach der Umsetzung und nicht vor ihr.

### Folie 52: Hook: nur im Projektordner arbeiten
- Aussage: "Vollständigen Schutz bietet erst eine Sandbox."
- Befund: falsch
- Beleg: anthropic-2026-sandboxing s10 (die Sandbox mindert Risiko, ist aber keine vollständige Isolationsgrenze), s2 (standardmäßig aus), s3 (unter nativem Windows laufen Befehle ohne Sandbox), s6 (Lesen standardmäßig auf dem ganzen Rechner); anthropic-2026-hooks-reference s9 (Hook-Befehle laufen außerhalb der Sandbox)
- Vorschlag: "Weiter reicht eine Sandbox, die das Betriebssystem um Shell-Befehle legt. Auch sie isoliert nicht vollständig, ist standardmäßig aus und läuft unter nativem Windows nicht."

### Folie 52: Hook: nur im Projektordner arbeiten
- Aussage: "Ein Hook ist ein Skript, das das Harness bei einem Ereignis ausführt, hier vor jedem Datei-Werkzeug (PreToolUse)."
- Befund: überdehnt
- Beleg: anthropic-2026-hooks-reference s1 (Hooks sind Shell-Befehle, HTTP-Endpunkte, MCP-Tool-Aufrufe, LLM-Prompts oder Subagenten), s4; das Beispiel matcht nur Edit und Write, das Lesewerkzeug nicht
- Vorschlag: "Ein Hook ist ein Handler, meist ein Skript, den das Harness bei einem Ereignis ausführt, hier vor jedem Schreibwerkzeug (PreToolUse auf Edit und Write)."

### Folie 53: Docling: Dokumente als Markdown
- Aussage: "Weil Docling lokal läuft, verlassen sensible Dokumente den Rechner nicht."
- Befund: überdehnt
- Beleg: docling-2026-documentation s5 (lässt sich lokal ausführen, auch für sensible Daten) und Appraisal (Funktionsversprechen, kein Nachweis einer Datenschutzprüfung); auer-2024-docling-technical-report s3
- Vorschlag: "Docling lässt sich vollständig lokal ausführen. So können sensible Dokumente auf dem eigenen Rechner bleiben."

### Folie 53: Docling: Dokumente als Markdown
- Aussage: "Markdown erhält Überschriften, Lesereihenfolge und Tabellen, die bei einfacher Textextraktion verloren gehen."
- Befund: überdehnt
- Beleg: auer-2024-docling-technical-report s1, s4 (Seitenstruktur, Lesereihenfolge und Tabellenstruktur werden erkannt; PDF-Umwandlung gilt als schwierig). Den Vergleich mit einfacher Textextraktion trägt kein Destillat.
- Vorschlag: "Docling erkennt Überschriften, Lesereihenfolge und Tabellenstruktur und gibt sie im Markdown wieder."

### Folie 54: Open Models: das Modell im eigenen Haus
- Aussage: "Open-Weight-Modelle sind frei herunterladbar und laufen auf eigener Hardware, etwa mit Ollama. Trainingsdaten und Code bleiben meist verschlossen." sowie "Unabhängig: Kein Anbieter ändert Preis, Modell oder Bedingungen über Nacht." und "Begrenzt: schwächer als die stärksten geschlossenen Modelle."
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zu Open-Weight-Modellen; liu-2026-agent-harness s10 empfiehlt nur, unnötige Abhängigkeit von einem Anbieter zu vermeiden)
- Vorschlag: ohne Beleg im Vault; Vorschlag: eine Quelle zu Open-Weight-Modellen destillieren oder die Vor- und Nachteile als eigene Einschätzung kennzeichnen.

### Folie 55: Eigene Pipelines: der Agent baut, das lokale Modell arbeitet
- Aussage: "Dasselbe Muster in Bibliotheken: Claude Code trainierte einen Vorfilter mit unter einer Million Parametern, der leere Karteikarten aussortiert (van Strien 2026)."
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: ohne Beleg im Vault; Vorschlag: die Musterseite von van Strien destillieren oder den Satz auf den Verweis ohne Zahl kürzen.

### Folie 56: (ohne Titel)
- Aussage: "Co-Intelligence (Mollick)" (Notiz)
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: ohne Beleg im Vault; Vorschlag: Zuschreibung im Beitrag nur mit gelesener Quelle verwenden. Die Notiz verweist außerdem auf "Folie 7" und ist veraltet.

### Folie 57: https://dhcraft.org/Promptotyping
- Aussage: "Promptotyping ist eine Arbeitspraxis, die Forschungsdaten und ihre Kontexte in Artefakte übersetzt, die zu Fragen und Arbeitsweisen der Forschenden passen."
- Befund: überdehnt
- Beleg: pollin-2026-promptotyping s1; dhcraft-2026-promptotyping-glossary s8 (iterative, wissensgetriebene Arbeitspraxis, die Forschungsartefakte aus strukturierten Forschungsdaten und gepflegtem Projektwissen baut)
- Vorschlag: "Promptotyping ist eine iterative, wissensgetriebene Arbeitspraxis, mit der ein Projekt digitale Forschungsartefakte aus strukturierten Forschungsdaten und seinem gepflegten Projektwissen baut."

### Folie 58: Was Sie gemacht haben: ein Durchlauf Promptotyping
- Aussage: Phasen "Preparation, Exploration, Distillation, Implementation, Verification, Validation, Curation" als Promptotyping-Zyklus, Spaltenköpfe "Declarative Documents, Process Documents, Action Documents" unter dem Namen Promptotyping Documents (Notiz)
- Befund: überdehnt
- Beleg: pollin-2026-promptotyping s2 (vier wiederkehrende Arbeitsformen Preparation, Exploration, Distillation, Implementation); dhcraft-2026-promptotyping-glossary s2 (Promptotyping Document ist der frühere Name, heute Knowledge Document). Verification, Validation und Curation als Phasen trägt kein Destillat.
- Vorschlag: Die vier Arbeitsformen des README nennen und Verification, Validation und Curation als Prüf- und Pflegeschritte des Workshops kennzeichnen, bis die Spezifikation destilliert ist. In der Notiz "Knowledge Documents" statt "Promptotyping Documents".

### Folie 58: Was Sie gemacht haben: ein Durchlauf Promptotyping
- Aussage: "Pollin. Promptotyping. Translating Research Data into Research Artefacts through Knowledge, Context, and Agentic Engineering. 2026. https://dhcraft.org/Promptotyping/"
- Befund: überdehnt
- Beleg: pollin-2026-promptotyping s9 (das Paper wird getrennt gepflegt und soll in einer Zeitschrift erscheinen); sources.md, Candidates without full text (Paper nicht veröffentlicht). Die URL führt zur Website, nicht zum Paper.
- Vorschlag: "Digital Humanities Craft. Promptotyping. https://dhcraft.org/Promptotyping/" und das Paper als unveröffentlichtes Manuskript gesondert angeben.

### Folie 59: Loop Engineering
- Aussage: "Loop Engineering gestaltet das System, das den Agenten anstößt und prüft, statt ihn jedes Mal von Hand zu prompten."
- Befund: nicht getragen
- Beleg: sources.md, Terms without a read source; Bestandteile in anthropic-2024-building-effective-agents s5, s7 und anthropic-2026-hooks-guide s1, s7; der Beitrag nennt keinen äußeren Auslöser und keine menschliche Freigabe (Open questions)
- Vorschlag: "Loop Engineering nennen wir die Gestaltung des Systems, das den Agenten anstößt und prüft, statt ihn jedes Mal von Hand zu prompten."

### Folie 61: Second Brain Vault
- Aussage: "Bestätigte Befunde fließen über eine autorisierte Pflege in ihre Dokumente zurück."
- Befund: nicht getragen
- Beleg: pollin-2026-second-brain-vault s1 bis s7 (keine Aussage zum Rückfluss)
- Vorschlag: ohne Beleg im Vault; Vorschlag: die Stelle im README destillieren oder durch s7 ersetzen ("Der Bericht eines Agenten über seine eigene Arbeit gilt als ungeprüft, bis er gegen die Dateien geprüft ist.").

### Folie 62: Grounded Vault
- Aussage: "... bis zur einzelnen Passage, Datenzeile oder Berechnung (Provenienz). Ein Promptotyping-Profil für belegpflichtige Wissensarbeit. Eine Kette aus fünf Schichten, von den Quellen über Markdown, Destillate und Aussagen bis zum Output, jede für sich prüfbar."
- Befund: überdehnt
- Beleg: dhcraft-2026-grounded-vault s1, s3 (jede substanzielle Aussage trägt einen maschinell auflösbaren Anker zum Quellmaterial). Datenzeile und Berechnung, das Promptotyping-Profil und die fünf Schichten trägt das Destillat nicht.
- Vorschlag: "Eine Architektur für Wissensbasen, in der jede substanzielle Aussage einen maschinell auflösbaren Anker zu ihrem Quellmaterial trägt (Provenienz)." Die übrigen Angaben erst nach Destillation der entsprechenden README-Stellen.

### Folie 63: Agentic Edition Pipeline
- Aussage: "Die TEI-Grundfassung entsteht deterministisch, ohne Modellaufruf. Veröffentlicht wird erst nach Rechteklärung und menschlicher Abnahme. Research Preview, Version 0.10.0."
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zum Repository)
- Vorschlag: ohne Beleg im Vault; Vorschlag: das README der Agentic Edition Pipeline destillieren und Versionsnummer und Reifegrad dort prüfen.

### Folie 64: Asymmetrische Amplifikation: KI verstärkt, was schon da ist
- Aussage: "Gegenbefund: In einem Feldexperiment gewannen bei Aufgaben innerhalb der Leistungsgrenze die zuvor Schwächeren am meisten. Außerhalb lösten Beratende mit KI die Aufgabe seltener richtig als ohne (Dell'Acqua et al. 2026)."
- Befund: nicht getragen
- Beleg: keiner; sources.md, Candidates without full text (Dell'Acqua et al. bleiben aus dem Beitrag, bis ihr Text gelesen ist); die Notiz selbst sagt, der Befund sei nur an der Zusammenfassung geprüft. Nach der Leitplanke trägt ein nur teilweise gelesenes Paper keine Aussage.
- Vorschlag: ohne Beleg im Vault; Vorschlag: streichen, bis der Volltext gelesen und destilliert ist.

### Folie 64: Asymmetrische Amplifikation: KI verstärkt, was schon da ist
- Aussage: "Dieselben Systeme verstärken vorhandene Fähigkeiten und Defizite. Wer Ergebnisse prüfen kann, gewinnt Autonomie, wer es nicht kann, gerät in Abhängigkeit (Asymmetric Amplification)."
- Befund: nicht getragen (eigene Rahmung, als Tatsache formuliert)
- Beleg: keiner (kein Destillat zum Blogbeitrag); wei-2025-asymmetry-of-verification s1, s5 berühren nur die Prüfbarkeit
- Vorschlag: "Unsere These der Asymmetric Amplification lautet, dass dieselben Systeme vorhandene Fähigkeiten und Defizite verstärken. Wer Ergebnisse prüfen kann, gewinnt Autonomie, wer es nicht kann, gerät in Abhängigkeit."

### Folie 64: Asymmetrische Amplifikation: KI verstärkt, was schon da ist
- Aussage: "Sprache und Quellen: Englischsprachiges, digitalisiertes Wissen ist in den Modellen stärker vertreten"
- Befund: nicht getragen
- Beleg: gallegos-2024-bias-fairness s2, s5 (Trainingsdaten aus unkuratierten Internetquellen, nicht repräsentative Stichprobe); zur Sprache sagt das Destillat nichts
- Vorschlag: "Sprache und Quellen: Trainingsdaten stammen überwiegend aus dem Internet und bilden Bestände ungleich ab." Die Aussage zum Englischen erst mit eigener Quelle.

### Folie 66: Promptotyping Documents
- Aussage: "Promptotyping Documents sind Wissensdokumente, unterschieden nach der Art des Wissens, das sie tragen." (mit dem Folientitel Promptotyping Documents)
- Befund: falsch
- Beleg: dhcraft-2026-promptotyping-glossary s2 (Promptotyping Document ist der frühere Name der Klasse); dhcraft-2026-promptotyping-convention s5 und Appraisal (die Oberklasse heißt Knowledge Document); sources.md, Divergences
- Vorschlag: "Knowledge Documents sind die Wissensdokumente einer Promptotyping-Wissensbasis. Sie teilen sich nach der Art des Wissens, das sie tragen, in drei Typen."

### Folie 66: Promptotyping Documents
- Aussage: Zuordnung "governance.md, rules.md, Skills" zu den Action Documents und "project.md, data.md, specification.md, design.md" zu den Declarative Documents
- Befund: überdehnt
- Beleg: pollin-2026-promptotyping s7 (Action Documents etwa CLAUDE.md und AGENTS.md); dhcraft-2026-promptotyping-glossary s4 (die drei Typen sind organisatorische Heuristiken und schreiben keine Dateistruktur vor); dhcraft-2026-promptotyping-convention s9
- Vorschlag: Die Dateinamen als Beispiele aus dem Workshop kennzeichnen ("in diesem Workshop etwa"), da die Spezifikation keine Dateistruktur vorschreibt.

### Folie 67: Vibe Coding & Agentic (Knowledge and Research) Engineering
- Aussage: "Vibe Coding. Software durch natürlichsprachliche Aufträge und Ausprobieren entwickeln. Der erzeugte Code wird weitgehend ungeprüft übernommen."
- Befund: überdehnt
- Beleg: karpathy-2025-vibe-coding s3 und s7 (Beschränkung auf Wegwerfprojekte am Wochenende) sowie Appraisal; willison-2026-agentic-engineering s8
- Vorschlag: "Vibe Coding. Software durch natürlichsprachliche Aufträge und Ausprobieren entwickeln, wobei der erzeugte Code ungeprüft übernommen wird. Karpathy beschränkte das ausdrücklich auf Wegwerfprojekte."

### Folie 67: Vibe Coding & Agentic (Knowledge and Research) Engineering
- Aussage: "Menschen bestimmen Anforderungen und Handlungsspielräume und prüfen Umsetzung und Ergebnisse."
- Befund: überdehnt
- Beleg: willison-2026-agentic-engineering s5 und Appraisal (Werkzeuge bereitstellen, Probleme spezifizieren, Ergebnisse prüfen; Handlungsspielräume stehen nicht im Kapitel); hassan-2025-agentic-software-engineering s6 (der Coach legt je Aufgabe Autonomie und Sorgfalt fest)
- Vorschlag: "Menschen stellen Werkzeuge bereit, spezifizieren die Aufgabe und prüfen die Ergebnisse (Willison). Hassan et al. sehen zusätzlich vor, dass Menschen je Aufgabe das Maß an Autonomie festlegen."

### Folie 67: Vibe Coding & Agentic (Knowledge and Research) Engineering
- Aussage: "Karpathy, Andrej (2025). Vibe Coding. X, 2. Februar. Originalbeitrag"
- Befund: überdehnt
- Beleg: karpathy-2025-vibe-coding (Post ohne Titel, Datum 2. Februar 2025 aus den Metadaten); sources.md, Divergences (Zitation über die Anfangsworte)
- Vorschlag: "Karpathy, A. (2025). There's a new kind of coding I call 'vibe coding' … X, 2. Februar 2025."

### Folie 68: Commands in Claude Code (Auswahl)
- Aussage: "/plan — Plan-Modus. Claude plant, führt aber nichts aus ohne Zustimmung." sowie "Shift+Tab — Wechselt zwischen Normal-Modus, Auto-Accept und Plan-Modus."
- Befund: überdehnt
- Beleg: anthropic-2026-permission-modes s2 und Appraisal (im Plan-Modus laufen außer Lesezugriffen auch vom Klassifikator genehmigte Befehle; die Dokumentation führt sechs Modi einschließlich auto und dontAsk)
- Vorschlag: "/plan Plan-Modus. Claude recherchiert und schlägt Änderungen vor, ohne sie vorzunehmen." Bei Shift+Tab "wechselt zwischen den Berechtigungsmodi" ohne Aufzählung.

### Folie 68: Commands in Claude Code (Auswahl)
- Aussage: "/compact — Komprimiert die Konversation, behält Kontext, spart Token."
- Befund: überdehnt
- Beleg: anthropic-2026-explore-context-window s3 (ersetzt das Gespräch durch eine strukturierte Zusammenfassung), s5; anthropic-2026-hooks-guide s10 (die Zusammenfassung kann wichtige Details verlieren)
- Vorschlag: "/compact ersetzt das Gespräch durch eine Zusammenfassung und gibt Platz im Context Window frei. Details können dabei verloren gehen."

### Folie 68: Commands in Claude Code (Auswahl)
- Aussage: "/effort — Setzt Reasoning-Level (low/medium/high/max)."
- Befund: falsch
- Beleg: anthropic-2026-dynamic-workflows s7 (die Einstellung ultracode setzt den Effort auf xhigh, die Stufenliste der Folie ist also unvollständig)
- Vorschlag: "/effort setzt die Reasoning-Stufe." ohne Aufzählung, oder die Stufen aus der aktuellen Dokumentation übernehmen.

### Folie 68: Commands in Claude Code (Auswahl)
- Aussage: Beschreibungen von /init, /clear, /model (Sonnet/Opus/Haiku), /context, /help, /diff, /rewind ("reine Bash-Änderungen erfasst es nicht"), @, ! und Esc Esc
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zur Befehlsübersicht)
- Vorschlag: ohne Beleg im Vault; Vorschlag: die Befehlsreferenz von Claude Code destillieren oder die Folie als Stand des Workshoptags kennzeichnen. Die Modellnamen bei /model weglassen.

### Folie 69: AI Watermarking
- Aussage: "Seit 2. August 2026 müssen Anbieter synthetische Inhalte maschinenlesbar kennzeichnen (AI Act, Art. 50)." sowie "Seit August 2026 verlangt der AI Act von Anbietern, KI-Inhalte maschinenlesbar zu kennzeichnen." (Notiz)
- Befund: überdehnt
- Beleg: eu-2024-ai-act s1, s2, s6; eu-2026-digital-omnibus-ai s2, s3 (Anbieter von Systemen, die vor dem 2. August 2026 in Verkehr gebracht wurden, erfüllen Art. 50 Abs. 2 bis zum 2. Dezember 2026)
- Vorschlag: "Seit 2. August 2026 müssen Anbieter synthetische Inhalte maschinenlesbar kennzeichnen (AI Act, Art. 50 Abs. 2). Für Systeme, die schon vorher auf dem Markt waren, gilt die Pflicht ab 2. Dezember 2026."

### Folie 69: AI Watermarking
- Aussage: "Gezielte Angriffe können das Wasserzeichen aber entfernen." (Notiz, im Kontext des Bild-Wasserzeichens nach Bui et al.)
- Befund: überdehnt
- Beleg: bui-2023-trustmark s6 bis s9 und Appraisal (TrustMark-RM dient dem Re-Watermarking durch den Anbieter; der adversariale Angriff setzt Zugriff auf den Extraktor voraus); sources.md, Divergences
- Vorschlag: "Wer Zugriff auf das Auslesemodell hat, kann die Dekodierung gezielt stören, und das Verfahren selbst kennt ein Netz, das das Wasserzeichen für eine Neumarkierung entfernt."

### Folie 69: AI Watermarking
- Aussage: "Unsichtbares Pixelmuster, das JPEG und Zuschnitt übersteht."
- Befund: überdehnt
- Beleg: bui-2023-trustmark s5 (das Training enthält Zuschneiden, JPEG-Kompression und weitere Störungen); eine Aussage zur gemessenen Robustheit gegen diese Störungen steht nicht im Destillat
- Vorschlag: "Unsichtbares Pixelmuster, im Training gegen JPEG und Zuschnitt gehärtet."

### Folie 69: AI Watermarking
- Aussage: "Wer den Text umschreibt oder übersetzt, verwischt das Muster." (Notiz)
- Befund: überdehnt
- Beleg: dathathri-2024-synthid-text s7 und Appraisal (Paraphrase schwächt, Übersetzung erwähnt der Haupttext nicht); kirchenbauer-2023-watermark Appraisal (Paraphrase senkt die Erkennung erst bei hohem Ersetzungsbudget)
- Vorschlag: "Wer den Text umschreibt, etwa mit einem Sprachmodell, schwächt das Muster."

### Folie 71: Promptotyping: Exploring Vibe Coding before it was cool
- Aussage: "By the time Karpathy named the practice, I had been doing it for almost half a year. Starting in autumn 2023 ..." (Notiz)
- Befund: falsch
- Beleg: karpathy-2025-vibe-coding (Post vom 2. Februar 2025); die Notiz nennt selbst Herbst 2023 als Beginn, das sind rund anderthalb Jahre vor dem Post
- Vorschlag: "Als Karpathy die Praxis benannte, arbeitete ich schon seit rund anderthalb Jahren so, beginnend im Herbst 2023." Alternativ den Beginn korrigieren, falls "half a year" gemeint war.

### Folie 71: Promptotyping: Exploring Vibe Coding before it was cool
- Aussage: "The accompanying statements were deliberately provocative." (Notiz)
- Befund: nicht getragen
- Beleg: karpathy-2025-vibe-coding s3, s7, s8 (Wegwerfprojekte am Wochenende; keine Aussage zur Absicht der Provokation)
- Vorschlag: "Karpathy beschränkte die Arbeitsweise ausdrücklich auf Wegwerfprojekte am Wochenende." Zusätzlich das fehlende T im Zitat "here's a new kind of coding" ergänzen.

### Folie 73: A2A (Agent to Agent)
- Aussage: "A2A (Agent2Agent) ist ein offener Standard für die Kommunikation zwischen autonomen KI-Agenten ..." mit Opakheit, Erweiterbarkeit mit gestuftem Promotionsverfahren, Verhältnis zu MCP und Abgrenzung
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zu A2A)
- Vorschlag: ohne Beleg im Vault; Vorschlag: die verlinkte Seite a2a-protocol.org destillieren oder die Folie im Anhang als Verweis ohne eigene Aussagen führen.

### Folie 74: Agent Skill
- Aussage: "Dauerhaft präsent bleibt allein die Beschreibung, das hält das Context Window bei themenfremden Aufgaben frei"
- Befund: überdehnt
- Beleg: anthropic-2026-agent-skills-overview s3 (bis zum Auslösen belegen Name und Beschreibung Kontext), s6; agentskills-2026-specification s7, s8; anthropic-2026-explore-context-window Appraisal (aufgerufene Skills werden nach der Kompaktierung neu eingespielt)
- Vorschlag: "Bis zum Aufruf belegen nur Name und Beschreibung Platz im Context Window, das hält es bei themenfremden Aufgaben frei"

### Folie 77: AI Agents gibt es schon länger als LLMs
- Aussage: "Autonomie ... Reaktivität ... Proaktivität ... 'soziale' Fähigkeit" (Wooldridge und Jennings 1995) sowie "Wieners 1948 erschienenem Werk Cybernetics"
- Befund: nicht getragen
- Beleg: keiner (kein Destillat zu Wooldridge und Jennings oder Wiener; sapkota-2025-agents-vs-agentic-ai s5 bestimmt nur Autonomie)
- Vorschlag: ohne Beleg im Vault; Vorschlag: Wooldridge und Jennings (1995) destillieren, bevor die vier Eigenschaften im Beitrag stehen.

### Folie 77: AI Agents gibt es schon länger als LLMs
- Aussage: "Multi-Agent Hide and Seek. OpenAI 2017."
- Befund: nicht getragen
- Beleg: keiner
- Vorschlag: ohne Beleg im Vault; Vorschlag: Jahresangabe an der Quelle prüfen. Nach meinem Kenntnisstand, nicht im Vault belegt, erschien die Arbeit 2019.

### Folie 80: Warum Wissen explizit festgehalten werden muss
- Aussage: "Knowledge Engineering macht relevantes Wissen explizit, inspizierbar und revidierbar."
- Befund: überdehnt
- Beleg: allen-2023-knowledge-engineering-llms s1 und Appraisal (Disziplin der Prozesse, die Wissen erzeugen und anwenden; der Folienwortlaut ist enger); studer-1998-knowledge-engineering s5, s6 (zyklisch, in jeder Phase revidierbar); "strukturiert, prüfbar und revidierbar" trägt dhcraft-2026-promptotyping-glossary s1 für Knowledge Documents, nicht für Knowledge Engineering
- Vorschlag: "Knowledge Engineering gestaltet und pflegt Prozesse, die Wissen erzeugen und anwenden. Das Modell des Wissens bleibt dabei in jeder Phase revidierbar."

### Folie 84: Computational Thinking
- Aussage: "Computational thinking involves solving problems, designing systems, and understanding human behavior ... Thinking like a computer scientist means more than being able to program a computer." sowie "Für die Arbeit mit LLMs heißt das: Probleme zerlegen."
- Befund: nicht getragen
- Beleg: keiner im Destillat-Ordner; sources.md führt Wing (2006) als vollständig gelesen und das Zitat als bestätigt, ein Destillat fehlt. sources.md, Divergences: Die Arbeitsdefinition folgt dem Formulieren von Problem und Lösung, nicht allein dem Zerlegen.
- Vorschlag: Wing (2006) als Destillat anlegen. Bis dahin "Für die Arbeit mit LLMs heißt das, ein Problem und seine Lösung so zu formulieren, dass sie sich schrittweise umsetzen lassen."
