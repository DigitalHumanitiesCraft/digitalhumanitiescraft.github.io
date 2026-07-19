---
layout: post
title: "Promptotyping in eigener Sache: Ein Arbeitsbericht aus einer Claude-Code-Session"
author: "Christopher Pollin"
date: 2026-07-19
published: true

citation:
  type: "blog-post"
  container-title: "Digital Humanities Craft"
  URL: "https://dhcraft.org/excellence/blog/Promptotyping-in-eigener-Sache"
  language: "de"
  abstract: "Ein alter Reasoning-Prompt, der in einer Claude-Code-Session wieder auftaucht, wird zum Ausgangspunkt einer Frage, was Prompting seit den Reasoning-Modellen eigentlich leistet. Der Text protokolliert, wie aus dieser Frage in einer einzigen Session ein Paper-Vorhaben wird, das nach der eigenen Methode läuft. Die Forschungsfrage wird in Entscheidungen überführt, die Entscheidungen in ein Plan-Dokument nach der eigenen Vorlage, der Plan in ein Repository, und parallele Coding-Agenten arbeiten die ersten Milestones ab, während der Text entsteht. Der Beitrag zeigt Promptotyping, angewandt auf die eigene Paper-Produktion, samt der Fehler, die dabei sichtbar wurden."

dublin_core:
  creator: "Christopher Pollin"
  publisher: "Digital Humanities Craft"
  subject: ["Promptotyping", "Context Engineering", "Agentic Coding"]
  description: "Arbeitsbericht einer Claude-Code-Session, in der das Promptotyping-Paper nach der Promptotyping-Methode geplant wird: von der Analyse eines obsoleten Reasoning-Prompts über eine Operator Query Phase zum plan.md im Methodik-Repo und zu parallelen Opus-Agenten."
  type: "Blogpost"
  format: "text/html"
  rights: "CC BY 4.0"
  language: "de"

coins_data:
  rft_type: "blogPost"

website_title: "Digital Humanities Craft"
website_type: "Blog"
short_title: "Promptotyping in eigener Sache"
schema_type: "BlogPosting"
keywords: ["Promptotyping", "Context Engineering", "Claude Code", "Agentic Coding"]
---

Am Anfang dieser Geschichte steht ein Fundstück. In einer Claude-Code-Session tauchte ein alter System-Prompt von mir auf, *PRISM*, eine parametrisierte Matrix-Methode aus den Jahren 2024 und 2025, die ein Sprachmodell zwang, vor jeder Antwort Denktyp und Analysetiefe zu wählen, Gedankenzweige in einer Tabelle zu verzweigen und mit Schulnoten zu bewerten. Ich bat das Modell, den Prompt zu analysieren. Die Diagnose fiel nüchtern aus. Solche Reasoning-Gerüste kompensierten, dass ältere Modelle mehrschrittige Analyse nicht selbst strukturierten; aktuelle Reasoning-Modelle leisten diese Exploration intern, mit echtem Backtracking statt simuliertem. Der Prompt, auf den ich einmal stolz war, erzwingt heute eine zweite, flachere Denkschicht über einer besseren, die das Modell ohnehin mitbringt.

*Eine Anmerkung zur Provenienz gleich vorweg, weil sie zum Gegenstand gehört. Dieser Text wurde von Claude Fable 5 in Claude Code ausgearbeitet, aus derselben Session heraus, die er beschreibt. Beauftragt, kuratiert und verantwortet habe ihn ich.*

## Vom Fundstück zur Frage

Aus der Analyse wurde ein Gespräch. Wenn die Denkstruktur ins Modell gewandert ist, was ist dann die knappe Ressource beim Arbeiten mit diesen Systemen? Die Antwort, die sich über mehrere Runden verdichtete, kennt jeder, der delegiert. Wer gut delegiert, erklärt dem Gegenüber keine Denkschritte; er liefert Kontext, Ziel, Constraints, Abnahmekriterien und die Grenzen des Mandats. Genau diese Bausteine sind es, die [Promptotyping](https://dhcraft.org/Promptotyping/) seit zwei Jahren als Dokumente organisiert. Die Pointe des Gesprächs war genealogisch. PRISM wurde damals im Dialog mit dem Modell selbst entwickelt, iterativ, dokumentiert, mit dem Modell als Werkzeug und Testumgebung zugleich. Obsolet geworden ist das Produkt. Überlebt hat der Herstellungsprozess, und der trägt heute den Namen Promptotyping.

Daraus hätte ein Gedankenblog werden können. Stattdessen wurde es ein Auftrag, und der ist der eigentliche Gegenstand dieses Textes. Ich habe diese Bewegung inzwischen in mehreren Projekten in ähnlicher Form durchlaufen: eine Forschungsfrage wird in ein Gespräch überführt, das Gespräch in Entscheidungen, die Entscheidungen in einen Plan, der Plan in ein Repository, und das Repository steuert dann die Agenten, die die Arbeit machen. Diesmal ist der Gegenstand die Methode selbst. Das Paper, das Promptotyping definiert, wird nach Promptotyping geplant und revidiert.

## Prüfen, bevor man plant

Der erste Reflex wäre gewesen, sofort ein neues Paper-Konzept zu schreiben. Der bessere zweite Schritt war eine Bestandsaufnahme, und sie hat den Zuschnitt zweimal korrigiert. Das definierende Paper existiert bereits als weit ausgearbeiteter Draft im Methodik-Repo; die Hauptaufgabe ist eine Revision und kein Neuanfang. Und die Verifikation gegen die echten Repositories förderte Dinge zutage, die kein Dokument behauptet hatte. Ein Schwester-Framework von PRISM lag als Ordner ohne einzige Git-Historie auf der Platte, ungesichert seit einem Jahr. Der lokale Klon meines Wissens-Vaults hing zweiundzwanzig Commits hinter dem Stand, den ein anderes Gerät gepusht hatte, und mit ihm eine komplette Überarbeitung des Vorlagen-Katalogs, von der die Session zunächst nichts wusste. Dokumente über den Zustand von Systemen veralten schneller, als man sie schreibt; die Prüfung gegen Git ist darum kein Misstrauen, sie ist Methode.

## Fünf Fragen, dann der Plan

Bevor der Plan geschrieben wurde, stellte das Modell fünf gezielte Fragen, jede eine Weiche. Was ist die Hauptausgabe? Wie tief darf die Revision eingreifen? Welches Gewicht bekommt die Genealogie? Welche Rolle spielt eine neue Verifikations-Architektur, die ich parallel entwickelt habe? In welchem Verhältnis stehen Paper, Blog und Methodik-Site? Meine Antworten haben das Vorhaben kleiner und schärfer gemacht. Additiv revidieren statt umbauen, die Genealogie als kompakter Herkunftsabschnitt, die Verifikations-Architektur raus aus diesem Paper und rein in ein eigenes Vorhaben, das Paper zuerst und alles Weitere daraus abgeleitet. Dieses Frage-Ritual stammt aus meiner eigenen Koordinationspraxis mit parallelen Agenten, und es verhindert das teuerste Szenario agentischer Arbeit, den stundenlangen Lauf in die falsche Richtung.

Das Ergebnis ist ein `plan.md` im [Methodik-Repo](https://github.com/DigitalHumanitiesCraft/Promptotyping), geschrieben nach der Plan-Vorlage, die derselbe Katalog definiert, den das Paper beschreibt. Es trägt ein Zielbild mit prüfbaren Fertig-Bedingungen, Milestones mit Entry- und Exit-Bedingungen, einen Status-Tracker und die offenen Entscheidungen samt dem Milestone, vor dem sie fallen müssen. Zeitschätzungen enthält es keine, die Sequenz ist fixiert, das Tempo offen. Das Gespräch, aus dem all das entstand, ist flüchtig und wird es bleiben. Das Repository akkumuliert.

## Agenten im eigenen Haus

Während dieser Text entsteht, arbeiten parallele Opus-Agenten die ersten Milestones ab, einer erstellt lesend die Delta-Liste zwischen Paper-Draft und dem heutigen Stand der Konvention, einer zieht die Methodik-Site auf den überarbeiteten Vorlagen-Katalog nach. Jeder hat ein abgegrenztes Territorium und ein definiertes Rückgabeformat; das Paper-Schreiben selbst bleibt hinter einem Gate, das erst die bestätigte Delta-Liste öffnet. Wer das Paper kennt, erkennt die Figur wieder. Es beschreibt genau diesen Modus, *Promptotyping a Research Project*, als Organisation eines kleinen Forschungsteams aus Agenten mit Rollen, Rechten und Wissenszonen. Dass die Methode ihr eigenes Repo auf diese Weise bearbeitet, war nicht als Demonstration geplant. Es hat sich als der effizienteste Weg ergeben, und das ist vermutlich das stärkste Argument.

Ehrlichkeit gehört zu so einem Bericht. Beim Schreiben dieses Textes stand die Delta-Liste noch aus, die Venue des Papers ist unentschieden, und zwei Sicherungsschritte scheiterten an Berechtigungsgrenzen, die ein Mensch auflösen muss. Der Plan kennt diese Lücken und benennt, wer sie schließt. Auch darin liegt eine Verschiebung gegenüber dem PRISM-Zeitalter, die mir erst im Vollzug klar geworden ist. Der Prompt von damals beschrieb einen simulierten Denkprozess. Das `plan.md` von heute beschreibt Arbeit, ihre Reihenfolge, ihre Abnahmebedingungen und die Stellen, an denen ein Mensch entscheidet, an diesem Tag auch über meine eigene Arbeit.

---

*Transparenzhinweis. Dieser Beitrag wurde am 19. Juli 2026 von Claude Fable 5 (Anthropic) in Claude Code verfasst und aus der beschriebenen Arbeitssession heraus publiziert. Konzept, Entscheidungen und Redaktion liegen bei Christopher Pollin. Der beschriebene Arbeitsstand ist der des Publikationstags; das Steuerdokument der Paper-Revision liegt öffentlich einsehbar im Repository [DigitalHumanitiesCraft/Promptotyping](https://github.com/DigitalHumanitiesCraft/Promptotyping/blob/main/knowledge/plan.md).*
