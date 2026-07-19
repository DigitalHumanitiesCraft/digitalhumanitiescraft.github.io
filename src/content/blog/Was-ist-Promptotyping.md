---
layout: post
title: "Promptotyping: Eine Context-Engineering-Methode für Forschungsartefakte"
author: "Christopher Pollin"
date: 2026-07-19
published: true

citation:
  type: "blog-post"
  container-title: "Digital Humanities Craft"
  URL: "https://dhcraft.org/excellence/blog/Was-ist-Promptotyping"
  language: "de"
  abstract: "Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen, um aus Forschungsdaten und Frontier-LLMs Forschungsartefakte zu entwickeln, Interfaces, Pipelines, Editionen, Datenmodelle und Werkzeuge. Ihr Kernprinzip: die strukturierten Wissensdokumente sind das primäre Artefakt des Prozesses, der Prototyp ist ein funktionales Nebenprodukt, das aus ihnen regeneriert werden kann. Der Beitrag stellt die Methode auf dem Stand von Mitte 2026 vor, die vier Phasen, die drei Dokumenttypen mit ihrer Diagnostik, den Vorlagen-Katalog mit Metadatenheader, die Rolle des Critical Expert in the Loop, ihre Herkunft und ihre Grenzen."

dublin_core:
  creator: "Christopher Pollin"
  publisher: "Digital Humanities Craft"
  subject: ["Promptotyping", "Context Engineering", "Digital Humanities"]
  description: "Einführung in Promptotyping auf dem Stand von Mitte 2026: vier Phasen, drei Dokumenttypen, Vorlagen-Katalog mit Metadatenheader, Critical Expert in the Loop, Herkunft und Grenzen der Methode."
  type: "Blogpost"
  format: "text/html"
  rights: "CC BY 4.0"
  language: "de"

coins_data:
  rft_type: "blogPost"

website_title: "Digital Humanities Craft"
website_type: "Blog"
short_title: "Was ist Promptotyping?"
schema_type: "BlogPosting"
keywords: ["Promptotyping", "Context Engineering", "Digital Humanities", "Agentic Coding"]
---

Das Verhältnis von Konzeptarbeit und Implementierung hat sich in der Entwicklung von Forschungswerkzeugen umgekehrt. Code für ein Interface oder eine Pipeline zu schreiben war jahrzehntelang der zeitaufwendige Teil; mit Frontier-LLMs, die aus natürlichsprachlichen Spezifikationen lauffähigen Code erzeugen, ist er der schnelle Teil geworden. Entscheidend ist heute, was vorher optional wirkte, das Formalisieren von Anforderungen, das Explizieren von Domänenwissen und der Aufbau von Prüfstrukturen. Wer einem Sprachmodell nur Daten gibt, bekommt keine sinnvollen Forschungswerkzeuge. Es braucht semantisch strukturierte Daten, expliziten Forschungskontext und ein Verfahren, das beides aufeinander abbildet. Promptotyping ist mein Verfahren dafür, entwickelt seit 2023, erprobt in inzwischen über zwanzig dokumentierten Projekten, formalisiert in einem [Paper und einer Methodik-Site](https://dhcraft.org/Promptotyping/). Dieser Beitrag stellt die Methode auf dem Stand von Mitte 2026 vor.

## Die Definition

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen, um datengetrieben und gemeinsam mit Frontier-LLMs Forschungsartefakte zu entwickeln. Forschungsartefakt meint dabei mehr als Software, ein exploratives Interface über einem Briefkorpus zählt ebenso dazu wie eine Transformations-Pipeline, eine digitale Edition, eine formale Ontologie oder ein Annotationsschema.

Das Kernprinzip unterscheidet die Methode von verwandten Praktiken. Die *Promptotyping Documents*, strukturierte und verdichtete Markdown-Dokumente über Daten, Anforderungen, Domäne und Entscheidungen, sind das primäre Artefakt des Prozesses. Der Prototyp ist ein funktionales Nebenprodukt, das verworfen und aus den Dokumenten regeneriert werden kann. Diese Umkehrung hat einen praktischen Grund. Code veraltet mit jedem Modellwechsel und lässt sich billig neu erzeugen; das destillierte Wissen darüber, was gebaut werden soll und warum, überlebt Modellgenerationen, Werkzeugwechsel und Sessions. Vom *Vibe Coding*, dem Erzeugen und Akzeptieren von Code ohne gründliche Prüfung, unterscheidet sich Promptotyping durch die strukturierte Vorbereitung, die persistente Dokumentation und die systematische Verifikation; das explorative Drauflos-Generieren hat darin seinen legitimen Platz als Sondierungsmodus, bevor eine Richtung festgelegt wird.

## Die vier Phasen

**Preparation.** Alle relevanten Rohmaterialien werden zusammengetragen, bevor technische Entscheidungen fallen, Forschungsdaten in ihren Originalformaten, Dokumentation zu Standards und Datenmodellen, Forschungsfragen und das implizite Domänenwissen aus Expertengesprächen. Die Materialsammlung erzwingt, Projektziele präzise zu artikulieren, bevor das Modell ins Spiel kommt. Vagheit an dieser Stelle setzt sich durch alle folgenden Phasen fort.

**Exploration & Mapping.** Diese Phase sondiert systematisch die Schnittstelle zwischen Daten und Forschungskontext. Die zentrale Frage lautet, ob sich die abstrakte Forschungsfrage konkret auf diese Datenstruktur abbilden lässt. Das Modell erzeugt dabei Optionen, die man selbst nicht entworfen hätte, etwa sechs Visualisierungstypen für ein Briefkorpus, von denen zwei nach fachlicher Prüfung verworfen werden. Zu verstehen, was die Daten nicht hergeben, ist dabei genauso wertvoll wie das Gegenteil; Sackgassen sind positive Erkenntnisse, weil sie spätere Fehlinvestitionen verhindern.

**Destillation.** Das in der Exploration gewonnene Wissen wird zu Markdown-Dokumenten verdichtet, die für die Verarbeitung durch Sprachmodelle optimiert sind. Das Prinzip heißt Context Compression, maximale Information mit minimalen Tokens. Es ist empirisch begründet, denn die Leistung von LLMs nimmt mit wachsender Kontextlänge ab, ein Phänomen, das als *Context Rot* dokumentiert ist. Die Verdichtung ist dabei alles andere als neutral. Was in ein Knowledge Document aufgenommen wird, bestimmt den Möglichkeitsraum aller nachgelagerten Outputs; Destillation ist eine epistemische Entscheidung in Textform.

**Implementation.** Mit den Dokumenten und den Daten als Kontext beginnt die iterative Entwicklung, heute typischerweise mit einem agentischen Coding-Werkzeug wie Claude Code, das im Repository selbst arbeitet. Drei Feedback-Mechanismen greifen ineinander, deterministisches Feedback aus Schema-Validierung und Tests, visuelles Feedback aus Screenshots der entstehenden Interfaces, und Expertenfeedback zur fachlichen Angemessenheit. An definierten Punkten unterbricht ein *Verification Milestone* den Fluss für die systematische Prüfung, bevor sich Fehler in mehrstufigen Pipelines fortpflanzen. Neues Wissen aus der Implementierung fließt in die Dokumente zurück, die dadurch lebende Artefakte bleiben.

## Die Dokumente und ihre Diagnostik

Die Dokumente liegen im `knowledge/`-Ordner des Projekt-Repositories, der als verkleinerter Forschungs-Vault funktioniert, Markdown mit Frontmatter, Wikilinks als Verbindungsgewebe. Drei analytische Typen haben sich über alle Projekte hinweg herausgebildet. **Knowledge Documents** sind deklarativ und beschreiben Daten, Domäne und Anforderungen. **Process Documents** sind chronologisch, allen voran das `journal.md`, das Entscheidungen, Wendepunkte und Sackgassen pro Session protokolliert. **Action Documents** sind imperativ und steuern das Verhalten der Agenten, im Zentrum die `CLAUDE.md` im Repository-Root.

Diese Typologie ist zugleich ein Diagnoseraster, und das macht sie im Alltag wertvoll. Ist der Output inhaltlich falsch, prüft man die Knowledge Documents. Ist er formal falsch, in Struktur, Stil oder Format, prüft man die Action Documents. Ist die Entscheidungslogik unklar, prüft man die Process Documents. Die Fehlersuche bekommt damit eine Adresse.

Drei Verpflichtungen strukturieren die Wissensbasis unabhängig davon, wie viele Dokumente ein Projekt trägt. Ein Dokument wird über seine Funktion identifiziert, sein Dateiname ist zweitrangig; dieselbe Funktion heißt in einem Repo `data.md` und in einem Editionsprojekt `corpus.md`. Eine Funktion wird aufgenommen, wenn ihr Triggerkriterium greift, ein kleines Tool-Repo fasst mehrere Funktionen in einer Datei zusammen, eine mehrstufige Pipeline spaltet eine Funktion in mehrere Dateien. Und die Diagnostik läuft über den Typ, die Auffindbarkeit über die Funktion.

## Vom Prinzip zum Standard

In der ersten Fassung der Methode von 2025 hieß es, für die Form der Dokumente gebe es keine festen Vorgaben. Das stimmt für die Dateiliste bis heute, für die Struktur darunter hat sich seither ein Standard herausgebildet, und zwar empirisch. Aus den wiederkehrenden Funktionen realer Projekte ist ein Katalog ausfüllbarer Vorlagen entstanden, der auf der [Methodik-Site](https://dhcraft.org/Promptotyping/) versioniert publiziert ist, von der Projektidentität über Spezifikation, Architektur und Design bis zu Journal, Plan, Report und der adversarialen Verifikation eigener Behauptungen.

Dazu gehört ein Metadatenheader. Jedes Dokument trägt einen bewusst kleinen Frontmatter-Pflichtkern (Titel, Projekt, Methode, Status, Daten), und ein `template:`-Feld verweist auf die maßgebliche Vorlagen-Spezifikation, mit einer maschinenlesbaren Adresse, die ein Coding-Agent per HTTP abrufen kann, ohne die Site im Browser zu rendern. Ein Repository erklärt sich damit selbst, als Promptotyping-Wissensbasis, mit benannter Methode und aufrufbaren Spezifikationen. Bemerkenswert an diesem Standard ist sein Zustandekommen. Der ursprüngliche Pflichtkern hatte acht Felder; die Prüfung gegen die real existierenden Wissensbasen zeigte, dass kein einziges Repo ihn vollständig erfüllte, worauf er auf die Felder reduziert wurde, die die Praxis tatsächlich trägt. Die Methode wendet ihre eigene Disziplin auf sich selbst an, Anforderungen werden gegen Empirie geprüft statt gesetzt.

## Der Critical Expert in the Loop

Promptotyping automatisiert Forschung an keiner Stelle vollständig, und das ist Absicht. Sprachmodelle haben strukturelle Schwächen, die sich mit Skalierung verschieben, aber bisher nicht verschwinden. Konfabulationen erzeugen plausibel klingende, falsche Outputs, in Forschungskontexten besonders heikel bei Kontextualisierung, Datierung und Zuschreibung. *Sycophancy* bezeichnet die Tendenz, den Annahmen der Nutzenden zuzustimmen; wer eine bestimmte Visualisierung anfragt, bekommt eine funktionale Lösung für genau diese Anfrage und selten den Hinweis, dass eine andere Darstellung der Forschungsfrage besser diente.

Deshalb braucht die Methode eine Rolle, die ich *Critical Expert in the Loop* nenne. Sie verlangt Domänenwissen und technisches Modellverständnis zugleich, und sie geht über das Prüfen von Outputs hinaus. Der folgenreichste blinde Fleck liegt im Möglichkeitsraum, der gar nicht exploriert wurde, in den Fragen, die niemand gestellt hat. Diese metakognitive Wachsamkeit lässt sich nicht delegieren, auch an das beste Modell nicht.

## Woher die Methode kommt

Zwei Linien führen zu Promptotyping. Die erste stammt aus meiner Dissertation zu historischen Finanzquellen. Das dort gebaute generische Dashboard wurde von der Technologie überholt, der strukturierte Kontext dahinter, User Stories, Datenmodelle, Ontologien und Editionsrichtlinien, erwies sich als genau das Material, das ein LLM braucht, um zugeschnittene Interfaces zu erzeugen. Die zweite Linie stammt aus der Prompt-Werkstatt der Jahre 2024 und 2025. Damals habe ich im Dialog mit den Modellen aufwendige Reasoning-Gerüste wie PRISM entwickelt, die dem Modell Denkstrukturen vorschrieben. Native Reasoning-Modelle haben diese Gerüste funktionslos gemacht. Überlebt hat der Herstellungsprozess, das iterative, dokumentierte Entwickeln von Kontextstrukturen im Dialog mit dem Modell, und aus ihm ist die Methode geworden, die heute Dokumente statt Denkschritte baut.

## Was sie kann und was sie kostet

Bewährt hat sich die Methode über eine erhebliche Spannweite, vom Annotationswerkzeug, das in zwei Stunden entsteht, über explorative Interfaces auf Briefkorpora mit Zehntausenden Einträgen bis zur produktiven OCR-Editions-Pipeline über mehrere tausend Seiten für eine wissenschaftliche Bibliothek, mit Prüf-Interfaces an jeder Pipelinestufe. Eine kuratierte [Galerie der Fallstudien](https://dhcraft.org/Promptotyping/#use-cases) mit Repositories und Demos steht auf der Methodik-Site.

Zu einer ehrlichen Vorstellung gehören die Grenzen. Der Schwerpunkt liegt bislang auf statischen Frontends und clientseitigen Anwendungen; sobald Datenbanken, Authentifizierung oder serverseitige Logik ins Spiel kommen, wird der Prozess deutlich anspruchsvoller. Die Methode setzt Zugang zu Frontier-Modellen voraus, was Kosten und Abhängigkeiten schafft, die nicht jede Institution tragen kann oder will. Und Reproduzierbarkeit bedeutet hier etwas anderes als identische Wiederholung, denn LLM-Outputs sind nicht deterministisch. Reproduzierbar ist die Entscheidungslogik, festgehalten in Journal, Plan und Git-History, vergleichbar der Nachvollziehbarkeit qualitativer Forschung.

Wer tiefer einsteigen will, findet das Paper, die Vorlagen mit ihren Spezifikationen, die Fallstudien und ein Glossar auf [dhcraft.org/Promptotyping](https://dhcraft.org/Promptotyping/), und die konzeptuelle Einordnung zwischen Vibe Coding und Vibe Research im [Beitrag für die Gerda Henkel Stiftung](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_n).

---

*Transparenzhinweis. Dieser Beitrag wurde am 19. Juli 2026 von Claude Fable 5 (Anthropic) in Claude Code ausgearbeitet, in einer Arbeitssession, die selbst nach der beschriebenen Methode lief, mit Wissensbasis, Plan-Dokument und parallelen Agenten im [Methodik-Repository](https://github.com/DigitalHumanitiesCraft/Promptotyping). Konzept, Entscheidungen und Redaktion liegen bei Christopher Pollin.*
