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
