---
title: Journal
project:
  name: DHCraft Site (Blog)
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: active
language: de
created: 2026-07-19
updated: 2026-07-31
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
---

# Journal

Chronologie der inhaltlichen Ausarbeitungen im Blog dieses Site-Repos, geführt nach der Journal-Funktion der Promptotyping-Konvention. Technische Site-Arbeit (Astro-Migration, Deploy) dokumentiert die Git-History; dieses Journal trägt die Entscheidungslogik der Textproduktion.

## 2026-07-19 — Promptotyping-Blogpost: Fehlversuch Meta-Bericht, Neuzuschnitt als Methodenvorstellung

### Ziel

Ein Blogpost zur Promptotyping-Methode, publiziert aus einer Claude-Code-Session, die selbst nach der Methode arbeitet (Plan-Dokument und Wissensbasis im Repo DigitalHumanitiesCraft/Promptotyping).

### Verlauf

Erste Fassung war ein Meta-Arbeitsbericht der Session selbst ("Promptotyping in eigener Sache"), publiziert und nach Operator-Review wieder offline genommen. Die Kritik trug vier Punkte: der Text setzte Insider-Wissen voraus und beantwortete kein Leserproblem; die Erzählstimme war feuilletonistisch statt sachlich und umging die Stilverbote dem Buchstaben, aber kaum dem Geist nach; die Ich-Stimme legte dem Autor erfundene Innenperspektive in den Mund, was die deklarierte Modell-Autorschaft zur Doppelstimme machte; und als Vorstellung der Methode taugte er nicht, weil er sie voraussetzte statt sie zu erklären. Operator-Entscheidung: der Blog soll die Methode selbst vorstellen, auf dem Stand von Mitte 2026, als aktueller deutscher Einführungstext (der Beitrag von April 2025 ist methodisch überholt, die Gerda-Henkel-Publikation ist konzeptuell und nicht einführend). Zweite Fassung als "Was ist Promptotyping?" ausgearbeitet, Definition, vier Phasen, Dokumenttypen mit Diagnostik, Vorlagen-Katalog mit Metadatenheader, Critical Expert, Herkunft in zwei Linien, Grenzen. Das Meta-Material der ersten Fassung lebt reduziert im Transparenzhinweis weiter.

### Ergebnis

`src/content/blog/Was-ist-Promptotyping.md` publiziert; der Fehlversuch bleibt als Provenienz in der Git-History (Commits 44102c8 Anlage, f75f840 Entfernung).

### Dead Ends

Der Meta-Arbeitsbericht als eigenständiges Blog-Genre. Er dokumentiert Praxis, erklärt aber nichts; sein Ort ist das Journal und der Transparenzhinweis, für Leser trägt die Methode selbst den Text.

## 2026-07-19 — Dritter Zuschnitt: Methodenvorstellung wird Tutorial

### Ziel

Operator-Review der zweiten Fassung ergab einen neuen Zuschnitt. Der Beitrag soll ein Tutorial sein, eine volle Ausarbeitung, wie man ein Promptotyping-Projekt anlegt; die Methodendefinition trägt das Paper, die Site trägt Vorlagen und Spezifikation.

### Verlauf

Quellenlage im Obsidian-Vault geprüft. Ein zusammenhängendes Tutorial existierte dort nicht, die Bausteine schon, der Anwendungsabschnitt der Konvention Promptotyping Documents (Funktionen prüfen, auf Dokumente abbilden, Vorlagen befüllen), das Screencast-Atom zur Klawiter-Bibliographie als vollständiger Session-Durchlauf, der Master-Foliensatz Knowledge und Context Engineering (Einrichtung, CLAUDE.md, Auftragsformulierung) und das Atom zu Standalone-Forschungsdaten als Architektur-Standard. Daraus die dritte Fassung als Sieben-Schritte-Tutorial gebaut, Repository und Wissensbasis, Materialsammlung, CLAUDE.md, Exploration, Destillation, Implementation, Verifikation und Publikation, ergänzt um Diagnoseraster, Screencast-Beispiel und Grenzen. Definition und Herkunft der Methode bleiben als kompakter Einstieg erhalten, URL und Dateiname unverändert.

### Ergebnis

`src/content/blog/Was-ist-Promptotyping.md` als Tutorial neu geschrieben, Titel und Metadaten angepasst.

## 2026-07-31 — Asymmetric Amplification: Wissensbasis für Versionierung und v2 übernommen

### Ziel

Der Blogpost v1 vom 2026-02-09 bleibt als datierte Erstfassung erhalten, eine überarbeitete v2 entsteht als lineares Essay über multiple Asymmetrien, und die Versionierung wird auf der Website sichtbar dokumentiert. Die methodische Synthese trägt das Promptotyping-Paper; die drei Publikationen bleiben getrennt geschnitten.

### Verlauf

Die in einer claude.ai-Session erarbeitete Wissensbasis (Publikationsstrategie, zwölf Asymmetrien, Stil- und Belegregeln, Redaktionsaufgaben, Abnahmekriterien) wurde als `knowledge/asymmetric-amplification.md` übernommen. Angepasst wurden das Frontmatter auf den Pflichtkern der Promptotyping-Konvention und ein neuer, verifizierter Abschnitt Repository Context, der die Publikationsrealität nach der Juli-Migration festhält. Das alte excellence-Repo wurde am 2026-07-14 als Knowledge-Repo neu gestartet, die Blog-Quellen liegen seither als Content-Collection in diesem Repo; die Redaktionsarbeit hat damit genau einen Arbeitsort.

### Ergebnis

`knowledge/asymmetric-amplification.md` angelegt. Zwei Entscheidungen bleiben beim Operator. Erstens das URL-Schema der Versionierung; empfohlen ist, dass der kanonische Slug die jeweils aktuelle Fassung trägt und ein eigener `-v1`-Eintrag die Erstfassung archiviert. Zweitens der Zuschnitt des Verifikationsfrage-Strangs; empfohlen ist, ihn als eigenen deutschen Post neben v2 zu führen und in v2 nur die Verification Asymmetry daraus zu speisen.

## 2026-07-31 — v1 archiviert, v2-Essay als Entwurf geschrieben

### Ziel

Umsetzung der Redaktionsaufgaben aus der Wissensbasis nach der Operator-Entscheidung zum URL-Schema (kanonischer Slug trägt die aktuelle Fassung, `Asymmetric-Amplification-v1` archiviert die Erstfassung).

### Verlauf

`Asymmetric-Amplification-v1.md` als unveränderte Kopie der Erstfassung angelegt, mit Versionshinweis über dem Text, angepasster Zitations-URL und `short_title`; bis zum Release `published: false`, damit die Live-Site unverändert bleibt. `Asymmetric-Amplification-v2.md` als neues Essay nach der Neun-Sektionen-Struktur der Wissensbasis geschrieben, rund 4.500 Wörter, ebenfalls `published: false`. Der Entwurf definiert Asymmetric Amplification einmal, entfaltet elf Asymmetrien in fünf Clustern plus die kumulative Asymmetrie, führt die Unterscheidung Verification, Validation, Acceptance ein, erzählt zwei Vignetten (Selection-Divergenz aus dem ÖAW-Projekt, anonymisierter Editions-Pipeline-Fall der agentisch geschlossenen Verifikationsschranke) und schließt mit kollektiver Handlungsfähigkeit statt individueller Adoptionsfrage. Workshop-Didaktik, Produkt-Chronik und Europa-Momentaufnahme der v1 sind entfernt; die Erstfassung bleibt dafür zitierbar. Änderungszuordnung und Release-Schritte in `knowledge/asymmetric-amplification-v2-changelog.md`.

### Ergebnis

v2 wartet auf Author-Review gegen die Abnahmekriterien der Wissensbasis; offene Punkte vor Release stehen im Changelog (Pachocki-Zitat primär belegen, Vignetten M³GIM und Notker nach Paper-Erscheinen, Hero-Bild, Release-Dateitausch).
