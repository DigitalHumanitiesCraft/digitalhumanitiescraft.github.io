// Atom-Feed unter dem Pfad des alten jekyll-feed (/excellence/feed.xml, Req 4.3).
// Einträge mit Summary (Beschreibung/Abstract); Volltext liefert die Post-Seite.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = site?.href.replace(/\/$/, '') ?? 'https://dhcraft.org';
  const posts = (await getCollection('blog', ({ data }) => data.published)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const entries = posts
    .map((post) => {
      const url = `${base}/excellence/blog/${post.id}/`;
      const summary = post.data.dublin_core?.description ?? post.data.citation?.abstract ?? '';
      return `  <entry>
    <title>${esc(post.data.title)}</title>
    <link href="${esc(url)}" rel="alternate" type="text/html" title="${esc(post.data.title)}"/>
    <published>${post.data.date.toISOString()}</published>
    <updated>${(post.data.last_modified_at ?? post.data.date).toISOString()}</updated>
    <id>${esc(url)}</id>
    <author><name>${esc(post.data.author)}</name></author>
${(post.data.dublin_core?.subject ?? []).map((s) => `    <category term="${esc(s)}"/>`).join('\n')}
    <summary type="html">${esc(summary)}</summary>
  </entry>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="de">
  <generator>Astro</generator>
  <link href="${base}/excellence/feed.xml" rel="self" type="application/atom+xml"/>
  <link href="${base}/excellence/" rel="alternate" type="text/html"/>
  <updated>${posts[0]?.data.date.toISOString() ?? new Date().toISOString()}</updated>
  <id>${base}/excellence/feed.xml</id>
  <title>Digital Humanities Craft</title>
  <subtitle>Blog: Promptotyping, generative KI und Digital Humanities</subtitle>
  <author><name>Christopher Pollin</name></author>
${entries}
</feed>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
};
