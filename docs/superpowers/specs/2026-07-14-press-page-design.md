# Design: Presse-Seite und Footer-Link (2026-07-14)

## Ziel

Leute brauchen immer wieder die DHCraft-Logos, aber das Repo
<https://github.com/DigitalHumanitiesCraft/brand-assets> ist nirgends auf dhcraft.org
verlinkt. Ein nackter Repo-Link hilft Nicht-Technikern (Presse, Veranstalter,
Kooperationspartner) wenig. Deshalb: eine eigene Presse-Seite mit Logo-Downloads,
Boilerplate-Texten, Fakten und Kontakt, plus ein Footer-Link darauf.

## Kontext

- Astro-Site (Branch `main`), zweisprachig DE/EN, Übersetzungen in `src/i18n/content.ts`.
- Muster für einfache Unterseiten: `src/pages/imprint.astro` und `src/pages/en/imprint.astro`
  (englische Pfade für beide Sprachen, `Base`-Layout mit `title`, `description`, `path`, `altPath`).
- Assets-Quelle: lokaler Klon `C:/Users/chstn/Desktop/data/DHCraft/Projekte/Git/dhcraft-brand-assets`
  (identisch mit dem GitHub-Repo).
- Faktenbasis: Google Doc "Digital Humanities Craft: Referenzen", vom User am 2026-07-14
  korrigiert (200+ Workshops statt 150+, Lehre inkl. Klagenfurt, MHDBDB bei den Referenzen,
  Sitz Kainbach bei Graz).

## Entscheidungen

1. **Umfang:** Presse-Seite + Footer-Link. Kein volles Press-Kit (keine Team-Fotos,
   kein ZIP-Download, kein Pressemitteilungs-Archiv).
2. **Asset-Quelle:** Kopien im Site-Repo unter `public/press/`. Same-origin, damit
   das `download`-Attribut greift und die URLs stabil bleiben. Fürs komplette Set
   (PDF, Favicons, Social-Media-Varianten) verweist die Seite aufs Repo.
3. **Inhalte in einer gemeinsamen Komponente** `src/components/PressPage.astro` mit den
   Texten beider Sprachen (Muster: `BlogIndexPage.astro`), keine Content Collection.
   Die Seiten `/press/` und `/en/press/` sind dünne Wrapper. Anders als beim Impressum
   lohnt Duplizieren hier nicht: Logo-Karten-Markup und Styles wären doppelt zu pflegen.

## Routen und Navigation

- Neue Seiten `/press/` (DE) und `/en/press/` (EN).
  - DE: `title="Presse | Digital Humanities Craft"`, H1 "Presse".
  - EN: `title="Press | Digital Humanities Craft"`, H1 "Press".
- Footer (`src/components/Footer.astro`): neuer Link in der Gruppe "Unternehmen/Company",
  Label über neuen i18n-Key `footerPress` ("Presse" / "Press").

## Assets

Kopien aus dem brand-assets-Klon nach `public/press/`, dabei URL-sichere Namen ohne `+`:

| Variante | Quelle | Ziel in `public/press/` |
|---|---|---|
| Primärlogo | `svg/dhcraft_logo_invert.svg`, `png/dhcraft_logo_invert.png` | `dhcraft_logo_invert.svg` / `.png` |
| Weiß (dunkle Hintergründe) | `svg/dhcraft_logo_invert_white.svg`, `png/dhcraft_logo_invert_white.png` | `dhcraft_logo_invert_white.svg` / `.png` |
| Mit Schriftzug (horizontal) | `svg/dhcraft_logo_invert+text-horizontal.svg`, `png/dhcraft_logo_invert+text-horizontal.png` | `dhcraft_logo_invert-text-horizontal.svg` / `.png` |
| Mit Schriftzug (vertikal) | `svg/dhcraft_logo_invert+text-vertical.svg`, `png/dhcraft_logo_invert+text-vertical.png` | `dhcraft_logo_invert-text-vertical.svg` / `.png` |
| Aquarell (transparent) | `png/dhcraft_logo_watercolor_transparent.png` | `dhcraft_logo_watercolor_transparent.png` (nur PNG) |
| Aquarell mit Schriftzug (transparent) | `png/dhcraft_logo_watercolor+text_transparent.png` | `dhcraft_logo_watercolor-text_transparent.png` (nur PNG) |

## Seiteninhalt

### 1. Intro

- DE: "Logos und Kurzbeschreibung von Digital Humanities Craft: für Presse,
  Veranstalter und Kooperationspartner."
- EN: "Logos and boilerplate for Digital Humanities Craft, for press,
  event organisers and partners."

### 2. Logos

Sechs Karten in einem Grid (2 Spalten Desktop, 1 Spalte mobil), je mit Vorschau und
Download-Buttons (SVG + PNG; Aquarell nur PNG). Die weiße Variante bekommt eine dunkle
Vorschau-Kachel (`var(--ink-deep)` wie der Footer). Download-Links mit `download`-Attribut.

Die Vorschaubilder sind getrimmte, auf 240 px Höhe verkleinerte WebPs in
`public/press/preview/`, generiert per `node scripts/press-previews.mjs` (die
Original-PNGs haben unterschiedlich viel transparenten Rand und sind als
Vorschau zu schwer; Downloads bleiben die unveränderten Originale).

Nutzungshinweise unter dem Grid:

- DE: "SVG für Web und Präsentationen bevorzugen, PNG als Fallback. Bitte das Logo
  nicht verändern: nicht verzerren, umfärben oder beschneiden."
- EN: "Prefer SVG for web and presentations, PNG as a fallback. Please do not alter
  the logo: no distorting, recolouring or cropping."

Repo-Verweis: "Alle Formate und Varianten (PDF für Druck, Favicons, Social Media)
im Brand-Assets-Repository auf GitHub." Link auf
<https://github.com/DigitalHumanitiesCraft/brand-assets>.

### 3. Boilerplate

Ein kurzer Textblock zum direkten Übernehmen (jede Sprachseite zeigt nur ihre Sprache).
Bewusst keine Langversion und keine Fakten-Liste: Referenzen und Details stehen auf
der Landing Page, weniger ist mehr.

**DE:**

> Digital Humanities Craft OG entwickelt Forschungssoftware und Datenworkflows für die
> Geisteswissenschaften und schult Universitäten, Bibliotheken und Institutionen im
> Umgang mit generativer KI. Geleitet wird das Unternehmen von Dr. Christopher Pollin
> und Mag. Christian Steiner, Sitz ist Kainbach bei Graz.

**EN:**

> Digital Humanities Craft OG builds research software and data workflows for the
> humanities and trains universities, libraries and other institutions in working with
> generative AI. The company is led by Dr. Christopher Pollin and Mag. Christian Steiner
> and based in Kainbach bei Graz, Austria.

Darunter eine Hintergrund-Zeile mit Link auf den Gründungsbericht der Universität Graz
(<https://digital-humanities.uni-graz.at/de/neuigkeiten/dh-craft-gegruendet/>):

- DE: "Zur Gründung 2022: Bericht der Universität Graz."
- EN: "On the founding in 2022: report by the University of Graz (in German)."

### 4. Kontakt

- E-Mail office@dhcraft.org, Verweis aufs Impressum für Firmendaten.

## Styling

Wie die Impressum-Seite: `.wrap`-Container, gleiche Typografie und Farb-Variablen.
Logo-Karten mit dezentem Rahmen, Vorschaubild zentriert, Download-Buttons als Links
im bestehenden Link-Stil (`var(--purple)`, Hover `var(--pink)`).

## Verifikation

- `npm run build` läuft ohne Fehler durch.
- Preview: beide Sprachseiten erreichbar, Sprachumschalter (altPath) funktioniert
  in beide Richtungen, Footer-Link erscheint auf DE- und EN-Seiten.
- Alle 10 Download-Links liefern die Dateien same-origin aus `public/press/`.
- Vorschauen sichtbar, insbesondere die weiße Variante auf der dunklen Kachel.

## Nicht im Umfang

- Team-Fotos, ZIP-Download, Pressemitteilungs-Archiv.
- Änderungen am brand-assets-Repo selbst (optional später: README dort verlinkt
  zurück auf die Presse-Seite).
