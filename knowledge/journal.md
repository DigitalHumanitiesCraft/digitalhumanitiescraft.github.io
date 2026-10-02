---
title: Journal
project:
  name: DHCraft Site (Blog)
  repository: https://github.com/DigitalHumanitiesCraft/digitalhumanitiescraft.github.io
status: active
language: de
created: 2026-07-19
updated: 2026-10-02
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

## 2026-10-02 Dienstleistungsseite fancy (research) tools! als Unterseite

### Ziel

Die statische Dienstleistungsseite aus dem Repo DigitalHumanitiesCraft/fancy-research-tools wird Teil dieser Site und mit ihr gebaut und ausgeliefert.

### Ergebnis

Die Seite liegt unter `/fancy-research-tools/` und `/en/fancy-research-tools/`, ihre Datenschutzerklärung unter `/fancy-research-tools/datenschutz/` und `/en/fancy-research-tools/privacy/`. Texte und strukturierte Daten stehen in `src/i18n/fancy.ts` und werden von `src/components/fancy/` mit Base, Nav und Footer der Site gerendert. Wortlaut, Reihenfolge und Fragment-Identifier entsprechen der Quellseite. Die früheren englischen Adressen unter `/fancy-research-tools/en/` leiten per Redirect-Stub auf die neuen Routen. Die Navigation führt den Punkt Agentic Engineering, die Angebotskarten und die Promptotyping-Box verlinken die Unterseite.

Die Entscheidungen der Seite zu Wortlaut, Reifegraden, Bildern und Positionierung bleiben in der Wissensbasis des Repos fancy-research-tools dokumentiert, in `knowledge/specification.md` mit ADR-001 bis ADR-013.

## 2026-10-02 Startseitentexte überarbeitet

### Ziel

Die Texte der Startseite (DE und EN) nach der vom Operator freigegebenen Liste sachlich neu fassen und Eyebrows entfernen.

### Ergebnis

Hero-Untertitel, Meta-Titel und Meta-Beschreibung nennen Forschungssoftware, digitale Editionen und Agentic Engineering neben Weiterbildung und Beratung. Die sechs Angebotskarten, drei Projektkarten (MHDBDB, Ružake gila, Mapping Mobile Musicians), die Sektionstitel sowie Kontakt und Footer mit Standort Kainbach bei Graz sind neu formuliert. Die Formate heißen Webinar, Workshop, Ganztägig und Mehrtägig und Beratung, die Dauer steht als normale Zeile unter dem Titel. Kicker-Zeilen, Säulen-Labels über den Angebotskarten und die Kicker der Blog-Übersicht sind samt globaler `.kicker`-Regel entfernt, die Farbcodierung der Icons bleibt als `iconColor`. Aus `src/i18n/excellence.ts` sind die nicht mehr gerenderten Strings der früheren Excellence-Seite, der Statistikblock und die Video-Lernpfad-Daten gelöscht.

### Offen

Fortunoff- und CROWN-Karte, Partnerliste, Teamrollen und Bios warten auf Fakten des Operators. Datum und Quellangabe im Patreon-Feed verfehlen weiterhin den Farbkontrast.

## 2026-10-02 Startseite, zweite Runde

### Ziel

Die Startseite nach der Durchsicht vom 2026-10-02 kürzen, Belege bereinigen und die Angebotsseite im Kopf hervorheben.

### Ergebnis

Die Formate stehen direkt unter dem Angebot. Blog und Videos teilen sich den Abschnitt Neues, der Patreon-Strom entfällt samt seinen Komponenten und Daten, Patreon bleibt als Kasten bei den Formaten und im Footer. Das Menü heißt Angebot, Weiterbildung, Projekte, Team, Neues, dazu die Angebotsseite als Pill mit dem Namen fancy (research) tools und dem Farbverlauf des Aquarell-Logos. CROWN ist samt Bild und KHM-Logo entfernt, Fortunoff wegen der unbelegten Rolle ebenso. Neu sind M³GIM unter diesem Namen und Feministische AI Literacies mit Screenshot des Wissensnetzes. Jede Projektkarte nennt erst das Projekt, dann den Beitrag. Die Teamrolle lautet Gründer und Gesellschafter, der Firmenname in den Bios DHCraft. Die Forschungssoftware-Karte nennt Daten-Workflows, der Kontakt verweist auf die Abrechnung der Angebotsseite. Die Blogkarte ohne Bild zeigt das Aquarell-Logo statt einer leeren Fläche.

### Offen

Die Seiten von Feministische AI Literacies werden aus `docs/` ausgeliefert, der Wechsel auf `build/site/` ist im Projekt offen.

## 2026-10-02 Logoleiste belegt

### Ergebnis

Jedes Logo wurde gegen Vault und Repositorien geprüft. Entfernt sind TU Graz, MedUni Graz, Österreichische Nationalbibliothek, Yale, MPI für Rechtsgeschichte, Münster, Würzburg, Bergbau-Museum Bochum, Saarland und BBAW ohne Beleg sowie Krems, weil offen ist, ob die Lehre dort über DHCraft lief. Neu ist das wiiw mit dem gemeinfreien Logo von Wikimedia Commons. Der Titel lautet „Institutionen, mit denen wir gearbeitet haben“, weil die Klassik Stiftung Weimar eine Kooperation ohne Auftrag ist. Die Ružake-gila-Karte beschreibt das Projekt nach der Ausstellungsseite, deren Footer „Theme by DH Craft“ nennt.

### Offen

Museumsmanagement Niederösterreich und die Göttinger Digitale Akademie fehlen, das erste mangels sauberer Logodatei, das zweite, weil der Workshop erst am 2026-10-15 stattfindet. Krems kommt zurück, sobald die Vertragspartei der Lehre belegt ist.

## 2026-10-02 Blogindex, YouTube-Vorschaubilder und Kartenstile

### Ziel

Das Promptotyping-Tutorial in Blogindex und Neues zeigen, YouTube-Vorschaubilder ohne Anfrage des Besucher-Browsers an Google ausliefern und die doppelten Kartenstile zusammenführen.

### Ergebnis

Das Tutorial steht in `postsBase` mit dem Phasendiagramm als Vorschaubild. Der Blogindex bricht den Build ab, sobald ein veröffentlichter Post dort fehlt. Die Vorschaubilder lädt der Build über astro:assets herunter und liefert sie von dhcraft.org aus. Weil Astro bei jedem fehlgeschlagenen Bildabruf den Build abbricht, prüft `videos.ts` jedes Bild vorab und rendert die Karte sonst ohne Bild, der Offline-Build läuft durch. Die Postkarte ohne Bild zeigt auch im Blogindex das Aquarell-Logo. Kartenbasis und Abschnittsüberschrift liegen als `.media-card` und `.section-heading` in `global.css`, eigene Namen, weil `.card` und `.section-title` anderswo abweichend belegt sind. Die Screenshots vor und nach der Zusammenführung sind pixelgleich. Das Datum der Blogindex-Karten ist dunkler, weil es den Kontrasttest nicht bestand.

### Offen

Die Abschnittsüberschrift schaltet in den Formaten bei 700 px auf die kleine Größe, in den übrigen Abschnitten bei 900 px. Die Breakpoints bleiben daher in den Komponenten.
