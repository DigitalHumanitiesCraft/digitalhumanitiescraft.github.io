// Blog-Index: Karten-Metadaten (Teaser DE/EN, Tags) der 7 Posts. Die Posts selbst sind portiert
// (Content Collection src/content/blog, Routen /excellence/blog/<Dateiname>/, Erhaltungs-Constraint).
// Videos kommen zur Buildzeit aus dem Kanal-RSS dazu (src/lib/videos.ts).

import type { Lang } from './content';

export interface BlogPost {
  title: string;
  teaser: string;
  url: string;
  /** ISO-Datum aus der Front-Matter, für die Mischsortierung mit Videos */
  date: string;
  postLang: 'DE' | 'EN';
  tag: string;
  color: string;
  /** Erstes Bild des Posts (public-Passthrough) für die Teaser-Karte, null = Fallback-Banner */
  thumb: string | null;
}

const t = {
  de: {
    kicker: 'Blog · dhcraft.org/excellence',
    title: 'Alle Beiträge.',
    sub: 'Blogartikel zum Lesen, Videos zum Nachschauen: Promptotyping, generative KI und Digital Humanities.',
    backToExcellence: '← Zurück zu Excellence',
    jumpVideos: 'Zu den Videos ↓',
    sectionPosts: 'Artikel',
    sectionVideos: 'Videos',
    metaTitle: 'Blog | Digital Humanities Craft Excellence: Artikel und Videos',
    metaDescription:
      'Der DHCraft-Blog: Artikel und Videos zu Promptotyping, generativer KI, Context Engineering und Digital Humanities.',
    skipLink: 'Zum Inhalt springen',
  },
  en: {
    kicker: 'Blog · dhcraft.org/excellence',
    title: 'All posts.',
    sub: 'Blog articles for reading, videos for watching: Promptotyping, generative AI and Digital Humanities.',
    backToExcellence: '← Back to Excellence',
    jumpVideos: 'Jump to videos ↓',
    sectionPosts: 'Articles',
    sectionVideos: 'Videos',
    metaTitle: 'Blog | Digital Humanities Craft Excellence: articles and videos',
    metaDescription:
      'The DHCraft blog: articles and videos on Promptotyping, generative AI, context engineering and Digital Humanities.',
    skipLink: 'Skip to content',
  },
};

const postsBase = [
  {
    url: '/excellence/blog/Asymmetric-Amplifications-Epistemic-Infrastructures/',
    date: '2026-07-22',
    postLang: 'EN' as const,
    color: '#5b3a78',
    title: 'Asymmetric Amplifications and Epistemic Infrastructures',
    thumb: '/excellence/blog/img/asymmetric-amplifications-epistemic.svg',
  },
  {
    url: '/excellence/blog/Asymmetric-Amplification/',
    date: '2026-02-09',
    postLang: 'EN' as const,
    color: '#8a4fa3',
    title: 'Asymmetric Amplification',
    thumb: '/excellence/blog/img/basics-1.png',
  },
  {
    url: '/excellence/blog/System1-42/',
    date: '2025-07-01',
    postLang: 'DE' as const,
    color: '#e08a2a',
    title: 'System 1.42: Wie (Frontier-)LLMs “tatsächlich” funktionieren',
    thumb: '/excellence/blog/img/system1-42.png',
  },
  {
    url: '/excellence/blog/Critical-Vibing-Claude-4/',
    date: '2025-05-27',
    postLang: 'DE' as const,
    color: '#5c9e4a',
    title: 'Promptotyping mit Claude Sonnet 4. Vibe-Coding erfordert den Critical-Expert-in-the-Loop',
    thumb: '/excellence/blog/img/critical-vibing.png',
  },
  {
    url: '/excellence/blog/Promptotyping/',
    date: '2025-04-24',
    postLang: 'DE' as const,
    color: '#5c9e4a',
    title: 'Promptotyping: Von der Idee zur Anwendung',
    thumb: '/excellence/blog/img/promptotyping-documents.png',
  },
  {
    url: '/excellence/blog/Vibe-Coding/',
    date: '2025-03-15',
    postLang: 'DE' as const,
    color: '#c06bb0',
    title: 'Haters gonna hate: Warum die Kritik an Vibe Coding berechtigt ist',
    thumb: '/excellence/blog/img/meme.png',
  },
  {
    url: '/excellence/blog/Task-A(G)I/',
    date: '2025-02-15',
    postLang: 'DE' as const,
    color: '#85aede',
    title: 'OpenAI’s Deep Research und erste "Task-A(G)I" Systeme?',
    thumb: null,
  },
  {
    url: '/excellence/blog/New-Year-New-AI-IdeaLab-25/',
    date: '2025-01-23',
    postLang: 'DE' as const,
    color: '#4a7ab8',
    title: 'New Year, New AI. Das große Monopoly um die "Intelligence"',
    thumb: '/excellence/blog/img/arc.png',
  },
  // Externer Artikel (Gerda Henkel Stiftung, L.I.S.A.); erscheint im Index und als Teaser wie ein Post,
  // öffnet aber extern. Bild lokal gespiegelt (Artikel-Hero, Mapping-Diagramm).
  {
    url: 'https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin',
    date: '2026-01-17',
    postLang: 'DE' as const,
    color: '#e08a2a',
    title: 'Promptotyping: Zwischen Vibe Coding, Vibe Research und Context Engineering',
    thumb: '/excellence/blog/img/lisa-promptotyping.jpg',
  },
];

const postsText = {
  de: [
    {
      tag: 'Forschung & KI',
      teaser:
        'Ein koautorierter Essay aus Digital Humanities und Sozialwissenschaften zur ÖAW-Preisfrage 2026: Wie LLMs und KI-Agenten computergestützte Forschungsarbeit asymmetrisch verstärken, und warum epistemische Infrastruktur die methodische Antwort ist.',
    },
    {
      tag: 'Forschung & KI',
      teaser:
        'Warum KI Forschung nicht automatisiert, sondern computergestützte Forschungsarbeit asymmetrisch verstärkt: Wer Qualität beurteilen kann, gewinnt überproportional.',
    },
    {
      tag: 'LLM-Grundlagen',
      teaser:
        'Weder Kahnemans System 1 noch System 2: Frontier-LLMs als halluzinierende Reasoner, von Autocomplete über Emergenz und Grokking bis zum Reasoning.',
    },
    {
      tag: 'Promptotyping',
      teaser:
        'In zwei Stunden zum Timeline-Annotationstool für Stefan Zweig Digital: Warum erst der Critical Expert in the Loop Vibe Coding in Forschungstools überführt.',
    },
    {
      tag: 'Promptotyping',
      teaser:
        'Die methodische Grundlegung: Mit strukturierten Anforderungsdokumenten von der Idee zur LLM-gestützten Anwendung.',
    },
    {
      tag: 'Vibe Coding',
      teaser: 'Eine kritische Analyse der Vibe-Coding-Methodik und ihrer Grenzen: Warum die Skepsis berechtigt ist.',
    },
    {
      tag: 'KI-Landschaft',
      teaser:
        'OpenAI’s Deep Research als Beispiel für Task-A(G)I: KI-Systeme, die hochspezialisierte Aufgaben auf menschlichem Niveau oder darüber erledigen.',
    },
    {
      tag: 'KI-Landschaft',
      teaser:
        'Reasoning-Modelle, DeepSeek R1, o1 und o3, Test-Time Compute und Tech-Oligarchen: das große Monopoly um die "Intelligence" zum Jahresstart 2025.',
    },
    {
      tag: 'Promptotyping',
      teaser:
        'Der Grundlagentext zur Methode, erschienen in der Reihe „Digitale Geschichte(n)" der Gerda Henkel Stiftung (L.I.S.A.).',
    },
  ],
  en: [
    {
      tag: 'Research & AI',
      teaser:
        'A co-authored essay from Digital Humanities and the social sciences for the OeAW Prize Question 2026: how LLMs and AI agents asymmetrically amplify computer-based scholarly work, and why epistemic infrastructure is the methodological response.',
    },
    {
      tag: 'Research & AI',
      teaser:
        'Why AI does not automate research but asymmetrically amplifies computer-based research work: those who can judge quality gain disproportionate leverage.',
    },
    {
      tag: 'LLM foundations',
      teaser:
        'Neither Kahneman’s System 1 nor System 2: frontier LLMs as hallucinating reasoners, from autocomplete via emergence and grokking to reasoning.',
    },
    {
      tag: 'Promptotyping',
      teaser:
        'A timeline annotation tool for Stefan Zweig Digital in two hours: why only a critical expert in the loop turns vibe coding into research tools.',
    },
    {
      tag: 'Promptotyping',
      teaser: 'The methodological foundation: from idea to LLM-assisted application with structured requirements documents.',
    },
    {
      tag: 'Vibe coding',
      teaser: 'A critical analysis of the vibe-coding approach and its limits: why the scepticism is justified.',
    },
    {
      tag: 'AI landscape',
      teaser:
        'OpenAI’s Deep Research as an example of task A(G)I: AI systems that handle highly specialized tasks at or above human level.',
    },
    {
      tag: 'AI landscape',
      teaser:
        'Reasoning models, DeepSeek R1, o1 and o3, test-time compute and tech oligarchs: the great monopoly around "intelligence" at the start of 2025.',
    },
    {
      tag: 'Promptotyping',
      teaser:
        "The foundational text on the method, published in the Gerda Henkel Foundation's L.I.S.A. portal (series „Digitale Geschichte(n)“).",
    },
  ],
};

export function getBlogContent(lang: Lang) {
  const posts: BlogPost[] = postsBase.map((p, i) => ({ ...p, ...postsText[lang][i] }));
  return { t: t[lang], posts };
}
