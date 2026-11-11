# dhcraft.org

Website der Digital Humanities Craft OG: [dhcraft.org](https://dhcraft.org)

Gebaut mit [Astro 5](https://astro.build), zweisprachig (DE unter `/`, EN unter `/en/`),
Deployment via GitHub Actions auf GitHub Pages.

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server mit Hot Reload
npm run build      # statischer Build nach dist/
npm run preview    # gebauten Stand lokal ausliefern
```

## Struktur

- `src/pages/` Routen (DE im Root, EN unter `en/`)
- `src/i18n/` alle DE/EN-Texte zentral
- `src/content/blog/` Blog-Posts (Markdown, Slugs = Dateinamen, bleiben URL-stabil)
- `src/lib/videos.ts` YouTube-Videoliste, gefetcht zur Buildzeit mit committetem Cache-Fallback
- `public/` wird verbatim kopiert: CNAME, robots.txt, Redirect-Stubs, `.well-known/assetlinks.json` (Android-TWA, nicht anfassen)

## Deployment

Jeder Push auf `main` deployt über `.github/workflows/deploy.yml`. Zusätzlich baut ein
wöchentlicher Cron die Site neu, damit die Videoliste aktuell bleibt.

Die interaktiven Demos leben im Repo [demos](https://github.com/DigitalHumanitiesCraft/demos)
und werden unter [dhcraft.org/demos/](https://dhcraft.org/demos/) ausgeliefert.

## Lizenz

Der Code dieses Repositoriums und die Dokumentation in seiner Wurzel stehen unter der
MIT-Lizenz, siehe [LICENSE](LICENSE). Für die Inhalte gilt sie nicht:

- Die Blogbeiträge in `src/content/blog/` stehen unter der Lizenz, die am jeweiligen
  Beitrag angegeben ist, derzeit CC BY 4.0. Das schließt ihre Abbildungen in
  `public/excellence/blog/img/` ein, soweit sie kein Material Dritter zeigen.
- Die Texte der Seite fancy (research) tools & workflows in `src/i18n/fancy.ts` sowie die
  Wissensdokumente und Bild-Prompts in `knowledge/fancy-research-tools/` stehen unter
  CC BY 4.0, siehe `knowledge/fancy-research-tools/project.md`.
- Alle übrigen Inhalte der Website und dieses Repositoriums sind urheberrechtlich
  geschützt, alle Rechte vorbehalten.
- Logo und Markenmaterial von Digital Humanities Craft regelt das Repo
  [brand-assets](https://github.com/DigitalHumanitiesCraft/brand-assets).
- Inhalte Dritter bleiben bei ihren Inhabern. Dieses Repositorium lizenziert sie nicht, es
  gelten die Bedingungen ihrer Inhaber. Das betrifft Logos und Marken, zitierte Abbildungen
  sowie die Faksimiles, Daten und Karten, die in Screenshots zu sehen sind.
