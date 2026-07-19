---
layout: post
title: "Ein Promptotyping-Projekt anlegen. Von den Forschungsdaten zum Forschungsartefakt"
author: "Christopher Pollin"
date: 2026-07-19
published: true

citation:
  type: "blog-post"
  container-title: "Digital Humanities Craft"
  URL: "https://dhcraft.org/excellence/blog/Was-ist-Promptotyping"
  language: "de"
  abstract: "Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen, um aus Forschungsdaten und Frontier-LLMs Forschungsartefakte zu entwickeln. Dieser Beitrag ist das praktische Tutorial dazu, auf dem Stand von Mitte 2026. Er führt Schritt für Schritt durch das Anlegen eines Promptotyping-Projekts, vom Repository mit knowledge/-Ordner über die Materialsammlung, die CLAUDE.md, Exploration und Destillation bis zur Implementation mit Verification Milestones und zur Publikation als statische Seite mit standalone Forschungsdatensatz."

dublin_core:
  creator: "Christopher Pollin"
  publisher: "Digital Humanities Craft"
  subject: ["Promptotyping", "Context Engineering", "Digital Humanities"]
  description: "Tutorial zum Anlegen eines Promptotyping-Projekts auf dem Stand von Mitte 2026: Repository und Wissensbasis, Vorlagen-Katalog mit Metadatenheader, CLAUDE.md, Exploration, Destillation, Implementation mit Verification Milestones, Publikation."
  type: "Blogpost"
  format: "text/html"
  rights: "CC BY 4.0"
  language: "de"

coins_data:
  rft_type: "blogPost"

website_title: "Digital Humanities Craft"
website_type: "Blog"
short_title: "Ein Promptotyping-Projekt anlegen"
schema_type: "BlogPosting"
keywords: ["Promptotyping", "Context Engineering", "Digital Humanities", "Agentic Coding", "Tutorial"]
---

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen (Preparation, Exploration & Mapping, Distillation, Implementation), um datengetrieben und gemeinsam mit Frontier-LLMs Forschungsartefakte zu entwickeln, explorative Interfaces, Pipelines, digitale Editionen, Datenmodelle und Werkzeuge. Ihr Kernprinzip kehrt das gewohnte Verhältnis um. Die *Promptotyping Documents*, strukturierte und verdichtete Markdown-Dokumente über Daten, Anforderungen, Domäne und Entscheidungen, sind das primäre Artefakt des Prozesses; der Prototyp ist ein funktionales Nebenprodukt, das verworfen und aus den Dokumenten regeneriert werden kann. Code veraltet mit jedem Modellwechsel und lässt sich billig neu erzeugen, das destillierte Wissen darüber, was gebaut werden soll und warum, überlebt Modellgenerationen und Sessions. Die vollständige Methodendefinition mit Paper, Vorlagen und Fallstudien steht auf [dhcraft.org/Promptotyping](https://dhcraft.org/Promptotyping/). Dieser Beitrag ist das praktische Gegenstück, ein Tutorial, das Schritt für Schritt durch das Anlegen eines Promptotyping-Projekts führt, auf dem Stand von Mitte 2026.

## Voraussetzungen

Sie brauchen ein agentisches Coding-Werkzeug mit Zugang zu einem Frontier-Modell (im Folgenden Claude Code, die Methode ist werkzeugunabhängig), Git und ein Repository-Hosting wie GitHub, Grundvertrautheit mit Markdown, und vor allem zwei Dinge, die kein Modell ersetzt, Ihre Forschungsdaten und Ihr Domänenwissen. Die Methode setzt voraus, dass eine Person mit fachlicher Urteilskraft im Prozess bleibt; diese Rolle, der *Critical Expert in the Loop*, zieht sich durch alle folgenden Schritte.

## Schritt 1. Repository und Wissensbasis anlegen

Ein Promptotyping-Projekt beginnt als Git-Repository mit einem `knowledge/`-Ordner. Dieser Ordner ist die Wissensbasis des Projekts und funktioniert als verkleinerter Forschungs-Vault, Markdown-Dateien mit Frontmatter, untereinander verlinkt. Alles Weitere, Code, Daten-Exporte, die publizierte Seite, gruppiert sich um ihn herum.

Welche Dokumente in die Wissensbasis gehören, entscheidet sich über Funktionen. Der [Vorlagen-Katalog](https://dhcraft.org/Promptotyping/) der Methode listet die wiederkehrenden Funktionen realer Projekte, darunter Projektidentität (Charter), Datengrundlage (Material), Anforderungen (Specification), Systemaufbau (Architecture), Domänenwissen, Gestaltung (Design), Prozessgedächtnis (Provenance, das Journal), Planung, Berichtswesen, Agentensteuerung (Agent Instructions) und die Prüfung eigener Behauptungen (Verification). Jede Funktion hat ein Triggerkriterium; aufgenommen wird sie nur, wenn das Kriterium für dieses Projekt greift. Kleine Projekte fassen mehrere Funktionen in einer Datei zusammen, große spalten eine Funktion in mehrere Dateien. Der Dateiname ist dabei zweitrangig, dieselbe Funktion heißt in einem Tool-Repo `data.md` und in einem Editionsprojekt `corpus.md`; identifiziert wird ein Dokument über seine Funktion.

Für jede Funktion existiert eine ausfüllbare Vorlage, versioniert publiziert und maschinenlesbar adressierbar. Ein Coding-Agent kann sie direkt per HTTP beziehen, ohne die Site im Browser zu rendern:

```
curl https://dhcraft.org/Promptotyping/_content/promptotyping-document/specification.md
```

Jedes Dokument trägt einen bewusst kleinen Frontmatter-Pflichtkern, und ein `template:`-Feld verweist auf die maßgebliche Vorlagen-Spezifikation:

```yaml
---
title: Specification
project: mein-editionsprojekt
method: Promptotyping
status: draft
created: 2026-07-19
updated: 2026-07-19
template: https://dhcraft.org/Promptotyping/_content/promptotyping-document/specification.md
---
```

Damit erklärt sich das Repository selbst, als Promptotyping-Wissensbasis mit benannter Methode und aufrufbaren Spezifikationen. Ein Agent, der das Repo zum ersten Mal öffnet, kann jede Vorlage nachschlagen, gegen die das jeweilige Dokument geschrieben ist.

## Schritt 2. Material sammeln (Preparation)

Bevor eine technische Entscheidung fällt, wird alles relevante Rohmaterial zusammengetragen. Das umfasst die Forschungsdaten in ihren Originalformaten (der TEI-Export, der Datenbank-Dump, die Excel-Tabellen, so wie sie sind), Dokumentation zu den einschlägigen Standards und Datenmodellen, die Forschungsfragen, und das implizite Domänenwissen, das oft erst im Gespräch explizit wird. Aus diesem Material entstehen die ersten beiden Dokumente der Wissensbasis, ein Charter-Dokument (`project.md`), das Projektziel, Zielgruppe und Erfolgskriterien festhält, und ein Material-Dokument (`data.md`), das die Datengrundlage beschreibt, Herkunft, Format, Umfang, bekannte Eigenheiten und Lücken.

Diese Phase erzwingt Präzision an der richtigen Stelle. Wer das Projektziel hier nur vage artikuliert, bekommt die Vagheit durch alle folgenden Phasen zurückgespielt.

## Schritt 3. Den Agenten instruieren (CLAUDE.md)

Im Repository-Root entsteht die `CLAUDE.md`, das zentrale Action Document. Sie steuert das Verhalten des Agenten in jeder Session und sollte kompakt bleiben, denn sie wird bei jedem Auftrag mitgelesen. Bewährt hat sich ein Aufbau aus wenigen Elementen: das Projektziel in zwei, drei Sätzen; der Verweis auf den `knowledge/`-Ordner mit einer Lesereihenfolge für den Einstieg; die harten Regeln des Projekts (welche Dateien nie ohne Rückfrage geändert werden, welche Daten die Source of Truth sind, wie committet wird); und die Verifikationspflicht, also womit der Agent seine Ergebnisse prüft, bevor er sie als fertig meldet. Detailwissen gehört in die Knowledge Documents, auf die die `CLAUDE.md` nur zeigt.

## Schritt 4. Explorieren und abbilden (Exploration & Mapping)

Jetzt kommt das Modell an die Daten. Der Agent exploriert die Rohmaterialien, bei größeren Beständen mit Subagents, die eigenständig Strukturmuster identifizieren, und schreibt seine Befunde in die Wissensbasis. Die zentrale Frage dieser Phase lautet, ob sich die abstrakte Forschungsfrage konkret auf diese Datenstruktur abbilden lässt. Das Modell erzeugt dabei Optionen, die man selbst nicht entworfen hätte, etwa mehrere Visualisierungstypen für ein Briefkorpus, von denen nach fachlicher Prüfung nur ein Teil trägt.

Zwei Dinge sind hier festzuhalten, im Wortsinn. Erstens die tragfähigen Befunde, die in Schritt 5 destilliert werden. Zweitens die Sackgassen, also das, was die Daten gerade nicht hergeben. Sackgassen sind positive Erkenntnisse, weil sie spätere Fehlinvestitionen verhindern, und ihr Ort ist das `journal.md`, das Prozessgedächtnis des Projekts, das Entscheidungen, Wendepunkte und verworfene Wege pro Session protokolliert.

## Schritt 5. Destillieren (Distillation)

Das explorierte Wissen wird zu den eigentlichen Knowledge Documents verdichtet, der Specification (was gebaut wird, mit Akzeptanzkriterien), der Architecture (wie es aufgebaut ist), dem Design (wie es aussieht und sich bedient) und, wo nötig, einem eigenen Domänenwissen-Dokument. Das Schreibprinzip heißt Context Compression, maximale Information mit minimalen Tokens. Es ist empirisch begründet, denn die Leistung von Sprachmodellen nimmt mit wachsender Kontextlänge ab, ein als *Context Rot* dokumentiertes Phänomen. Praktisch bedeutet das, ein Dokument trägt eine abgegrenzte Funktion, Redundanz zwischen Dokumenten wird durch Links ersetzt, und der wichtigste Inhalt steht am Anfang.

Die Verdichtung ist dabei alles andere als neutral. Was in ein Knowledge Document aufgenommen wird, bestimmt den Möglichkeitsraum aller nachgelagerten Outputs; Destillation ist eine epistemische Entscheidung in Textform, und sie gehört deshalb in die Hand des Experten, mit dem Modell als Zuarbeiter.

## Schritt 6. Implementieren (Implementation)

Mit den Dokumenten und den Daten als Kontext beginnt die iterative Entwicklung. Für Forschungsartefakte hat sich eine Standard-Architektur herausgebildet, die statische Webseite neben einem standalone Forschungsdatensatz. Die Daten liegen als Datei oder kleine Dateigruppe direkt im Repo, das Frontend lädt sie per `fetch`, es gibt keine Datenbank zur Laufzeit, keine API, keinen Server. Das Muster ist methodisch motiviert. Eine JSON-Datei lässt sich in den Modell-Kontext laden und als Text reviewen, eine statische Seite hat keinen Server-State, der getestet werden müsste, und der Datensatz ist ohne die Anwendung interpretierbar, zitierbar und FAIR publizierbar. Die Anwendung ist optional, der Datensatz die persistente Forschungsleistung.

In der Iteration greifen drei Feedback-Mechanismen ineinander, deterministisches Feedback aus Schema-Validierung und Tests, visuelles Feedback aus Screenshots der entstehenden Oberfläche, und Expertenfeedback zur fachlichen Angemessenheit. An definierten Punkten unterbricht ein *Verification Milestone* den Fluss, eine systematische Prüfung, bevor sich Fehler in mehrstufigen Pipelines fortpflanzen. Neues Wissen aus der Implementierung fließt in die Dokumente zurück, die dadurch lebende Artefakte bleiben; das `journal.md` wächst pro Session, und bei längeren Vorhaben hält ein `plan.md` Phasen, Milestones und offene Entscheidungen.

Die Wissensbasis löst nebenbei das Problem des endlichen Kontextfensters. Wenn eine Session voll ist, startet die nächste mit denselben Dokumenten als persistentem Kontext; der Wissenstransfer zwischen Sessions läuft über das Repository.

## Schritt 7. Verifizieren und publizieren

Vor der Publikation steht die adversariale Verifikation der eigenen Behauptungen. Ein Verification-Dokument listet die Kernaussagen des Projekts (Vollständigkeit der Verarbeitung, Korrektheit der Zahlen, Abdeckung der Anforderungen) und prüft jede gegen den realen Stand, idealerweise durch einen Agenten, der beauftragt ist, die Behauptungen zu widerlegen. Selbstauskünfte von Agenten zählen dabei als unverifiziert, bis sie gegen Dateien, Tests und Git-History geprüft sind.

Publiziert wird typischerweise über GitHub Pages, der Datensatz zusätzlich mit einer DOI (etwa über Zenodo) und einer Lizenz im Repo. Für externe Adressaten, Auftraggeber oder Projektpartner, fasst ein Report-Dokument den Stand in deren Sprache zusammen.

## Fehlerdiagnose über Dokumenttypen

Im laufenden Betrieb zahlt sich die Struktur der Wissensbasis als Diagnoseraster aus. Die Dokumente zerfallen in drei analytische Typen, deklarative **Knowledge Documents** (Daten, Domäne, Anforderungen), chronologische **Process Documents** (Journal, Plan) und imperative **Action Documents** (`CLAUDE.md`). Ist der Output des Agenten inhaltlich falsch, prüft man die Knowledge Documents. Ist er formal falsch, in Struktur, Stil oder Format, prüft man die Action Documents. Ist die Entscheidungslogik unklar, prüft man die Process Documents. Die Fehlersuche bekommt eine Adresse.

## Ein vollständiges Beispiel

Wie das alles in einer realen Session aussieht, zeigt ein Screencast zur Klawiter-Bibliographie, der wohl umfassendsten Stefan-Zweig-Bibliographie, die aus einem heterogen erfassten MediaWiki in strukturierte Forschungsdaten mit statischem Such-Frontend überführt wurde: [MediaWiki zu Forschungsdaten. Agentic Coding mit Claude Code](https://youtu.be/KG35VGVctJw). Der Durchlauf umfasst die Datenanalyse mit Subagents, den Einbau eines LLM in die Extraktions-Pipeline, wo reguläre Ausdrücke an der Heterogenität scheitern, die iterative Verifikation samt ihrer Grenzen (Encoding-Probleme, halluzinierte Metriken), einen Kontextfenster-Wechsel mitten in der Session, den die Wissensdokumente auffangen, und den Aufbau des Frontends. Weitere dokumentierte Fallstudien mit Repositories und Demos versammelt die [Galerie auf der Methodik-Site](https://dhcraft.org/Promptotyping/#use-cases).

## Grenzen

Der Schwerpunkt der Methode liegt bislang auf statischen Frontends und clientseitigen Anwendungen; sobald Datenbanken, Authentifizierung oder serverseitige Logik ins Spiel kommen, wird der Prozess deutlich anspruchsvoller. Sie setzt Zugang zu Frontier-Modellen voraus, was Kosten und Abhängigkeiten schafft. Und Reproduzierbarkeit bedeutet hier etwas anderes als identische Wiederholung, denn LLM-Outputs sind nicht deterministisch; reproduzierbar ist die Entscheidungslogik, festgehalten in Journal, Plan und Git-History, vergleichbar der Nachvollziehbarkeit qualitativer Forschung.

Wer die Methode konzeptuell vertiefen will, findet das Paper, die Vorlagen mit ihren Spezifikationen und ein Glossar auf [dhcraft.org/Promptotyping](https://dhcraft.org/Promptotyping/), und die Einordnung zwischen Vibe Coding und Vibe Research im [Beitrag für die Gerda Henkel Stiftung](https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_n).

---

*Transparenzhinweis. Dieser Beitrag wurde am 19. Juli 2026 von Claude Fable 5 (Anthropic) in Claude Code ausgearbeitet, in einer Arbeitssession, die selbst nach der beschriebenen Methode lief, mit Wissensbasis, Plan-Dokument und parallelen Agenten im [Methodik-Repository](https://github.com/DigitalHumanitiesCraft/Promptotyping). Konzept, Entscheidungen und Redaktion liegen bei Christopher Pollin.*
