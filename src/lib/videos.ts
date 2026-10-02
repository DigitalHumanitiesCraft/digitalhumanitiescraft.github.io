// Kanal-Videos zur Buildzeit aus dem YouTube-RSS-Feed (kein API-Key nötig).
// Robustheit (2026-07-09, nach realem Feed-Ausfall mit 404): zwei Feed-Varianten mit Retries,
// bei Erfolg wird videos-cache.json aktualisiert, bei Ausfall springt der Cache ein.
// Grenze: Der Feed liefert nur die ~15 neuesten Videos.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export interface ChannelVideo {
  id: string;
  title: string;
  /** ISO-Zeitstempel aus dem Feed */
  published: string;
}

export interface ChannelVideoWithThumb extends ChannelVideo {
  /** Vorschaubild-URL für astro:assets, null wenn sie zur Buildzeit nicht erreichbar ist */
  thumb: string | null;
}

const CHANNEL_ID = 'UCTDhUN9Doh1Bswh9TrNd8rw';
// Kanal-Feed und Uploads-Playlist-Feed (UU-Präfix) liefern dieselben Einträge
const FEED_URLS = [
  `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
  `https://www.youtube.com/feeds/videos.xml?playlist_id=UU${CHANNEL_ID.slice(2)}`,
];

// Annahme: Build läuft im Projekt-Root (npm run build); import.meta.url wäre nach dem Bundling unzuverlässig
const CACHE_PATH = join(process.cwd(), 'src/lib/videos-cache.json');

function decodeEntities(s: string): string {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

async function fetchFeed(url: string): Promise<ChannelVideo[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Feed antwortet mit HTTP ${res.status}`);
  const xml = await res.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  return entries
    .map(([, e]) => ({
      id: e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '',
      title: decodeEntities(e.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''),
      published: e.match(/<published>([^<]+)<\/published>/)?.[1] ?? '',
    }))
    .filter((v) => v.id && v.title && v.published);
}

async function load(): Promise<ChannelVideo[]> {
  for (const url of FEED_URLS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const videos = await fetchFeed(url);
        if (videos.length > 0) {
          try {
            writeFileSync(CACHE_PATH, JSON.stringify(videos, null, 2) + '\n');
          } catch {
            // Cache-Schreiben ist Komfort, kein Build-Blocker
          }
          return videos;
        }
      } catch {
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  }

  try {
    const cached: ChannelVideo[] = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
    console.warn(
      `[videos] YouTube-Feed nicht erreichbar, verwende Cache vom letzten erfolgreichen Abruf (${cached.length} Videos)`
    );
    return cached;
  } catch {
    console.warn('[videos] YouTube-Feed nicht erreichbar und kein Cache vorhanden, baue ohne Videos');
    return [];
  }
}

// Astro lädt Remote-Bilder erst beim Generieren der Assets und bricht den Build bei jedem
// Fehlschlag ab (offline, 404 bei gelöschtem Video, Redirect). Die Vorprüfung lässt die Karte
// in diesen Fällen ohne Bild rendern, statt den Build scheitern zu lassen.
async function withThumbs(videos: ChannelVideo[]): Promise<ChannelVideoWithThumb[]> {
  return Promise.all(
    videos.map(async (v) => {
      const url = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`;
      try {
        const res = await fetch(url, { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(5000) });
        return { ...v, thumb: res.ok ? url : null };
      } catch {
        return { ...v, thumb: null };
      }
    })
  );
}

let cache: Promise<ChannelVideoWithThumb[]> | undefined;

/** Einmal pro Build laden, alle Aufrufer teilen sich das Ergebnis */
export function getChannelVideos(): Promise<ChannelVideoWithThumb[]> {
  cache ??= load().then(withThumbs);
  return cache;
}
