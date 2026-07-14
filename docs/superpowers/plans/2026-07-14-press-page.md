# Presse-Seite und Footer-Link: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Presse-Seite unter `/press/` (DE) und `/en/press/` (EN) mit Logo-Downloads, Kurz-Boilerplate, Gründungslink und Kontakt, plus Footer-Link "Presse/Press".

**Architecture:** Eine gemeinsame Komponente `src/components/PressPage.astro` (Muster: `src/components/excellence/BlogIndexPage.astro`) enthält Markup, Styles und die Texte beider Sprachen; zwei dünne Seiten-Wrapper instanziieren sie. Logo-Dateien liegen als Kopien in `public/press/` (same-origin, damit das `download`-Attribut greift). Spec: `docs/superpowers/specs/2026-07-14-press-page-design.md`.

**Tech Stack:** Astro 5 (statisch), TypeScript-Frontmatter, kein Test-Framework. Verifikation über `npm run build` und Grep auf `dist/`.

## Global Constraints

- Keine Gedankenstriche (`—`) in Website-Texten; stattdessen Doppelpunkt, Komma oder Klammern.
- Deutsche und englische Texte exakt wie in den Tasks angegeben übernehmen (sie sind aus der freigegebenen Spec kopiert).
- Dateinamen in `public/press/` ohne `+` (URL-sicher): aus `dhcraft_logo_invert+text-horizontal.*` wird `dhcraft_logo_invert-text-horizontal.*`.
- Bestehende Muster der Codebase befolgen: `Base`-Layout mit `lang`/`title`/`description`/`path`/`altPath`, Skip-Link, `Nav` mit `homeHref`, `Footer`, Farbvariablen aus `src/styles/global.css`.
- Arbeitsverzeichnis: `c:/Users/chstn/Desktop/data/DHCraft/Home`, Branch `main`.

---

### Task 1: Logo-Assets nach public/press/ kopieren

**Files:**
- Create: `public/press/dhcraft_logo_invert.svg`
- Create: `public/press/dhcraft_logo_invert.png`
- Create: `public/press/dhcraft_logo_invert_white.svg`
- Create: `public/press/dhcraft_logo_invert_white.png`
- Create: `public/press/dhcraft_logo_invert-text-horizontal.svg`
- Create: `public/press/dhcraft_logo_invert-text-horizontal.png`
- Create: `public/press/dhcraft_logo_watercolor_transparent.png`

**Interfaces:**
- Consumes: lokalen Klon `C:/Users/chstn/Desktop/data/DHCraft/Projekte/Git/dhcraft-brand-assets`
- Produces: die 7 Dateipfade oben; Task 2 verlinkt sie als `/press/<datei>`

- [ ] **Step 1: Dateien kopieren (mit Umbenennung der `+`-Namen)**

```bash
cd "c:/Users/chstn/Desktop/data/DHCraft/Home"
mkdir -p public/press
SRC="C:/Users/chstn/Desktop/data/DHCraft/Projekte/Git/dhcraft-brand-assets"
cp "$SRC/svg/dhcraft_logo_invert.svg"                  public/press/dhcraft_logo_invert.svg
cp "$SRC/png/dhcraft_logo_invert.png"                  public/press/dhcraft_logo_invert.png
cp "$SRC/svg/dhcraft_logo_invert_white.svg"            public/press/dhcraft_logo_invert_white.svg
cp "$SRC/png/dhcraft_logo_invert_white.png"            public/press/dhcraft_logo_invert_white.png
cp "$SRC/svg/dhcraft_logo_invert+text-horizontal.svg"  public/press/dhcraft_logo_invert-text-horizontal.svg
cp "$SRC/png/dhcraft_logo_invert+text-horizontal.png"  public/press/dhcraft_logo_invert-text-horizontal.png
cp "$SRC/png/dhcraft_logo_watercolor_transparent.png"  public/press/dhcraft_logo_watercolor_transparent.png
```

- [ ] **Step 2: Prüfen, dass genau 7 Dateien angekommen sind**

Run: `ls public/press`
Expected: genau diese 7 Dateien, keine mit `+` im Namen:

```
dhcraft_logo_invert-text-horizontal.png
dhcraft_logo_invert-text-horizontal.svg
dhcraft_logo_invert.png
dhcraft_logo_invert.svg
dhcraft_logo_invert_white.png
dhcraft_logo_invert_white.svg
dhcraft_logo_watercolor_transparent.png
```

- [ ] **Step 3: Commit**

```bash
git add public/press
git commit -m "Add press logo assets from brand-assets repo"
```

---

### Task 2: PressPage-Komponente und beide Sprachseiten

**Files:**
- Create: `src/components/PressPage.astro`
- Create: `src/pages/press.astro`
- Create: `src/pages/en/press.astro`

**Interfaces:**
- Consumes: `/press/*`-Dateien aus Task 1; `Base.astro` (Props `lang`, `title`, `description`, `path`, `altPath`); `Nav.astro` (Props `lang`, `altPath`, `homeHref`); `Footer.astro` (Prop `lang`); `getContent(lang).t.skipLink` aus `src/i18n/content.ts`
- Produces: Routen `/press/` und `/en/press/`; `PressPage.astro` mit `interface Props { lang: Lang; path: string; altPath: string }`

- [ ] **Step 1: `src/components/PressPage.astro` anlegen**

```astro
---
import Base from '../layouts/Base.astro';
import Nav from './Nav.astro';
import Footer from './Footer.astro';
import type { Lang } from '../i18n/content';
import { getContent } from '../i18n/content';

interface Props {
  lang: Lang;
  path: string;
  altPath: string;
}

const { lang, path, altPath } = Astro.props;
const { t } = getContent(lang);
const homeHref = lang === 'de' ? '/' : '/en/';
const imprintPath = lang === 'de' ? '/imprint/' : '/en/imprint/';

// Texte laut Spec docs/superpowers/specs/2026-07-14-press-page-design.md, wortgleich übernehmen
const texts = {
  de: {
    title: 'Presse | Digital Humanities Craft',
    description:
      'Logos und Kurzbeschreibung von Digital Humanities Craft für Presse, Veranstalter und Kooperationspartner.',
    h1: 'Presse',
    intro:
      'Logos und Kurzbeschreibung von Digital Humanities Craft: für Presse, Veranstalter und Kooperationspartner.',
    logosTitle: 'Logos',
    logos: [
      { label: 'Primärlogo', base: 'dhcraft_logo_invert', svg: true, dark: false },
      { label: 'Weiß, für dunkle Hintergründe', base: 'dhcraft_logo_invert_white', svg: true, dark: true },
      { label: 'Mit Schriftzug', base: 'dhcraft_logo_invert-text-horizontal', svg: true, dark: false },
      { label: 'Aquarell', base: 'dhcraft_logo_watercolor_transparent', svg: false, dark: false },
    ],
    usageNote:
      'SVG für Web und Präsentationen bevorzugen, PNG als Fallback. Bitte das Logo nicht verändern: nicht verzerren, umfärben oder beschneiden.',
    repoPre: 'Alle Formate und Varianten (PDF für Druck, Favicons, Social Media) im',
    repoLabel: 'Brand-Assets-Repository auf GitHub',
    boilerplateTitle: 'Kurzbeschreibung',
    boilerplate:
      'Digital Humanities Craft OG entwickelt Forschungssoftware und Datenworkflows für die Geisteswissenschaften und schult Universitäten, Bibliotheken und Institutionen im Umgang mit generativer KI. Geleitet wird das Unternehmen von Dr. Christopher Pollin und Mag. Christian Steiner, Sitz ist Kainbach bei Graz.',
    foundingPre: 'Zur Gründung 2022:',
    foundingLabel: 'Bericht der Universität Graz',
    foundingPost: '.',
    contactTitle: 'Kontakt',
    contactPre: 'Presseanfragen an',
    imprintPre: 'Firmendaten im',
    imprintLabel: 'Impressum',
    back: '← Zur Startseite',
  },
  en: {
    title: 'Press | Digital Humanities Craft',
    description:
      'Logos and boilerplate for Digital Humanities Craft, for press, event organisers and partners.',
    h1: 'Press',
    intro:
      'Logos and boilerplate for Digital Humanities Craft, for press, event organisers and partners.',
    logosTitle: 'Logos',
    logos: [
      { label: 'Primary logo', base: 'dhcraft_logo_invert', svg: true, dark: false },
      { label: 'White, for dark backgrounds', base: 'dhcraft_logo_invert_white', svg: true, dark: true },
      { label: 'With wordmark', base: 'dhcraft_logo_invert-text-horizontal', svg: true, dark: false },
      { label: 'Watercolor', base: 'dhcraft_logo_watercolor_transparent', svg: false, dark: false },
    ],
    usageNote:
      'Prefer SVG for web and presentations, PNG as a fallback. Please do not alter the logo: no distorting, recolouring or cropping.',
    repoPre: 'All formats and variants (print PDF, favicons, social media) in the',
    repoLabel: 'brand assets repository on GitHub',
    boilerplateTitle: 'Boilerplate',
    boilerplate:
      'Digital Humanities Craft OG builds research software and data workflows for the humanities and trains universities, libraries and other institutions in working with generative AI. The company is led by Dr. Christopher Pollin and Mag. Christian Steiner and based in Kainbach bei Graz, Austria.',
    foundingPre: 'On the founding in 2022:',
    foundingLabel: 'report by the University of Graz',
    foundingPost: ' (in German).',
    contactTitle: 'Contact',
    contactPre: 'Press enquiries to',
    imprintPre: 'Company details in the',
    imprintLabel: 'imprint',
    back: '← Back to home',
  },
};
const x = texts[lang];
---

<Base lang={lang} title={x.title} description={x.description} path={path} altPath={altPath}>
  <a href="#main" class="skip-link">{t.skipLink}</a>
  <div class="page">
    <Nav lang={lang} altPath={altPath} homeHref={homeHref} />
    <main id="main" class="wrap press">
      <h1>{x.h1}</h1>
      <p class="intro">{x.intro}</p>

      <h2>{x.logosTitle}</h2>
      <div class="grid">
        {
          x.logos.map((l) => (
            <div class="card">
              <div class={`preview${l.dark ? ' dark' : ''}`}>
                <img src={`/press/${l.base}.png`} alt={l.label} loading="lazy" />
              </div>
              <div class="meta">
                <span class="name">{l.label}</span>
                <span class="dl">
                  {l.svg && <a href={`/press/${l.base}.svg`} download>SVG</a>}
                  <a href={`/press/${l.base}.png`} download>PNG</a>
                </span>
              </div>
            </div>
          ))
        }
      </div>
      <p class="note">{x.usageNote}</p>
      <p class="note">
        {x.repoPre}
        <a href="https://github.com/DigitalHumanitiesCraft/brand-assets" target="_blank" rel="noopener">{x.repoLabel}</a>.
      </p>

      <h2>{x.boilerplateTitle}</h2>
      <blockquote class="boilerplate">{x.boilerplate}</blockquote>
      <p class="note">
        {x.foundingPre}
        <a
          href="https://digital-humanities.uni-graz.at/de/neuigkeiten/dh-craft-gegruendet/"
          target="_blank"
          rel="noopener">{x.foundingLabel}</a
        >{x.foundingPost}
      </p>

      <h2>{x.contactTitle}</h2>
      <p>
        {x.contactPre} <a href="mailto:office@dhcraft.org">office@dhcraft.org</a>.
        {x.imprintPre} <a href={imprintPath}>{x.imprintLabel}</a>.
      </p>

      <p class="back"><a href={homeHref}>{x.back}</a></p>
    </main>
    <Footer lang={lang} />
  </div>
</Base>

<style>
  .page {
    min-height: 100vh;
    overflow: clip;
  }

  .press {
    padding-block: 72px 96px;
    max-width: 860px;
  }

  h1 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  }

  .intro {
    font-size: 17px;
    line-height: 1.6;
    color: rgba(30, 39, 73, 0.75);
    margin: 0 0 20px;
  }

  h2 {
    font-family: var(--font-display);
    font-size: 22px;
    letter-spacing: -0.01em;
    margin: 48px 0 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .card {
    border: 1px solid rgba(30, 39, 73, 0.12);
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
  }

  .preview {
    display: grid;
    place-items: center;
    padding: 28px;
    min-height: 150px;
  }

  .preview img {
    max-height: 96px;
    max-width: 100%;
    width: auto;
  }

  .preview.dark {
    background: var(--ink-deep);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-top: 1px solid rgba(30, 39, 73, 0.08);
    font-size: 14.5px;
  }

  .dl {
    display: flex;
    gap: 12px;
    flex-shrink: 0;
  }

  .note {
    font-size: 14.5px;
    line-height: 1.6;
    color: rgba(30, 39, 73, 0.7);
    margin: 16px 0 0;
  }

  .boilerplate {
    margin: 0;
    padding: 20px 24px;
    background: rgba(138, 79, 163, 0.06);
    border-left: 3px solid var(--purple);
    border-radius: 0 8px 8px 0;
    font-size: 15.5px;
    line-height: 1.7;
  }

  a {
    color: var(--purple);
    font-weight: 600;
  }

  a:hover {
    color: var(--pink);
  }

  .back {
    margin-top: 56px;
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

- [ ] **Step 2: `src/pages/press.astro` anlegen**

```astro
---
import PressPage from '../components/PressPage.astro';
---

{/* Route /press/ englisch wie /imprint/ (einheitliche Pfade für beide Sprachen) */}
<PressPage lang="de" path="/press/" altPath="/en/press/" />
```

- [ ] **Step 3: `src/pages/en/press.astro` anlegen**

```astro
---
import PressPage from '../../components/PressPage.astro';
---

<PressPage lang="en" path="/en/press/" altPath="/press/" />
```

- [ ] **Step 4: Build ausführen**

Run: `npm run build`
Expected: Exit-Code 0, keine Fehler; Ausgabe enthält die neuen Routen `/press/` und `/en/press/`.

- [ ] **Step 5: Gebaute Seiten prüfen**

```bash
ls dist/press/index.html dist/en/press/index.html
grep -o ' download' dist/press/index.html | wc -l
grep -o ' download' dist/en/press/index.html | wc -l
```

Expected: beide Dateien existieren; beide Zählungen liefern je `7` Download-Attribute (3 Varianten mit SVG+PNG plus Aquarell nur PNG). Hinweis: `grep -o | wc -l` statt `grep -c`, weil Astro das HTML in wenige Zeilen rendert und `-c` nur Zeilen zählt.

- [ ] **Step 6: Commit**

```bash
git add src/components/PressPage.astro src/pages/press.astro src/pages/en/press.astro
git commit -m "Add press page with logo downloads and boilerplate (DE/EN)"
```

---

### Task 3: Footer-Link und i18n-Key

**Files:**
- Modify: `src/i18n/content.ts:83` (de-Block) und `src/i18n/content.ts:116` (en-Block)
- Modify: `src/components/Footer.astro:14` (Frontmatter) und `src/components/Footer.astro:33` (Gruppe "Unternehmen")

**Interfaces:**
- Consumes: Routen `/press/` und `/en/press/` aus Task 2
- Produces: `t.footerPress` (string) in beiden Sprachblöcken; Footer-Link auf allen Seiten mit Footer

- [ ] **Step 1: i18n-Key `footerPress` ergänzen**

In `src/i18n/content.ts` im `de`-Block nach `footerImprint: 'Impressum',` einfügen:

```ts
    footerPress: 'Presse',
```

Im `en`-Block nach `footerImprint: 'Imprint',` einfügen:

```ts
    footerPress: 'Press',
```

- [ ] **Step 2: Footer-Link einbauen**

In `src/components/Footer.astro` im Frontmatter nach der Zeile `const blogPath = ...` einfügen:

```ts
const pressPath = lang === 'de' ? '/press/' : '/en/press/';
```

Im Markup in der Gruppe "Unternehmen" nach `<a href={blogPath}>Blog</a>` einfügen:

```astro
          <a href={pressPath}>{t.footerPress}</a>
```

- [ ] **Step 3: Build ausführen**

Run: `npm run build`
Expected: Exit-Code 0, keine TypeScript- oder Astro-Fehler.

- [ ] **Step 4: Footer-Link im Build prüfen**

```bash
grep -c 'href="/press/"' dist/index.html
grep -c 'href="/en/press/"' dist/en/index.html
```

Expected: beide Kommandos liefern mindestens `1`.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/content.ts src/components/Footer.astro
git commit -m "Link press page from footer"
```

---

### Task 4: Gesamtverifikation

**Files:**
- Test: `dist/` (Build-Output), keine Quelldateien

**Interfaces:**
- Consumes: alle Ergebnisse aus Task 1 bis 3
- Produces: verifizierter Stand laut Spec-Abschnitt "Verifikation"

- [ ] **Step 1: Frischer Build**

```bash
npm run build
```

Expected: Exit-Code 0.

- [ ] **Step 2: Download-Ziele existieren im Build**

```bash
for f in dhcraft_logo_invert.svg dhcraft_logo_invert.png dhcraft_logo_invert_white.svg dhcraft_logo_invert_white.png dhcraft_logo_invert-text-horizontal.svg dhcraft_logo_invert-text-horizontal.png dhcraft_logo_watercolor_transparent.png; do
  test -f "dist/press/$f" && echo "OK $f" || echo "FEHLT $f"
done
```

Expected: 7 mal `OK`, kein `FEHLT`.

- [ ] **Step 3: hreflang-Verknüpfung der beiden Sprachversionen prüfen**

```bash
grep -o 'hreflang="en" href="[^"]*"' dist/press/index.html
grep -o 'hreflang="de" href="[^"]*"' dist/en/press/index.html
```

Expected: erste Zeile endet auf `/en/press/"`, zweite auf `/press/"`.

- [ ] **Step 4: Sitemap enthält beide Routen**

```bash
grep -o 'https://dhcraft.org/press/\|https://dhcraft.org/en/press/' dist/sitemap-0.xml | sort -u
```

Expected: beide URLs erscheinen.

- [ ] **Step 5: Sichtprüfung im Preview**

```bash
npm run preview
```

Dann `http://localhost:4321/press/` und `http://localhost:4321/en/press/` öffnen und prüfen: alle 4 Logo-Vorschauen sichtbar (weiße Variante auf dunkler Kachel), Download-Klick lädt Datei herunter statt sie zu öffnen, Sprachumschalter in der Nav wechselt zwischen den beiden Presse-Seiten, Footer-Link "Presse/Press" vorhanden. Preview danach beenden.

- [ ] **Step 6: Abschluss**

Kein Commit nötig, falls Schritte 1 bis 5 ohne Änderungen durchliefen. Falls hier noch Fixes anfallen: Fix committen und Task 4 wiederholen.
