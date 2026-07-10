// Kanal-Videos zur Buildzeit aus dem YouTube-RSS-Feed (kein API-Key nötig, siehe implementation.md).
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

let cache: Promise<ChannelVideo[]> | undefined;

/** Einmal pro Build laden, alle Aufrufer teilen sich das Ergebnis */
export function getChannelVideos(): Promise<ChannelVideo[]> {
  cache ??= load();
  return cache;
}
