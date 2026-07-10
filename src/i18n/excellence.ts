// Inhalte aus dem Design "Excellence.dc.html" (Claude Design, Projekt "Watercolor Website Design").
// Textkonventionen angewandt (design.md): keine Gedankenstriche, "Context Engineering" statt "Prompt Engineering".
// Videos: die drei neuesten aus dem Kanal-RSS (Stand 2026-07-08); Titel verbatim von YouTube.

import type { Lang } from './content';

export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface ChannelUpdate {
  /** ISO-Datum */
  date: string;
  /** Kurzer Kommentar im Chat-Ton, einsprachig wie gepostet (DE/EN gemischt) */
  text: string;
  url: string;
  linkTitle: string;
  /** Domain für die Link-Karte */
  source: string;
}

export interface Video {
  /** YouTube-Video-ID, Thumbnail via i.ytimg.com/vi/<id>/hqdefault.jpg */
  id: string;
  tag: string;
  color: string;
  title: string;
}

export interface Format {
  title: string;
  duration: string;
  color: string;
  text: string;
}

const t = {
  de: {
    navUpdates: 'AI-Channel',
    navVideos: 'Videos',
    navFormats: 'Angebot',
    navBlog: 'Blog',
    navBack: '← dhcraft.org',
    navContact: 'Kontakt',
    heroKicker: 'dhcraft.org/excellence',
    heroTitle: 'Best Practice, Forschung und Ausbildung für Generative KI.',
    heroSub:
      'Unser Exzellenzzentrum verbindet zeiteffizientes Lernen mit praxisnahem Know-how: spezialisiert auf generative KI, Context Engineering, Digital Humanities, Forschungsmanagement, Data Science und Programmierung.',
    updatesKicker: 'Aus dem AI-Channel',
    updatesTitle: 'Was gerade passiert.',
    updatesCta: 'Kuratiert auf Patreon',
    videosKicker: 'Videos',
    videosTitle: 'Aus unserem YouTube-Kanal.',
    videosAll: 'Alle Videos',
    formatsKicker: 'Excellence',
    formatsTitle: 'Weiterbildung und KI-Beratung.',
    formatsIntro:
      'Excellence ist unser Bereich für generative KI: Webinare, Workshops und Intensivtage, dazu Beratung und Promptotyping, für Wissenschaft, Kultur und Wirtschaft.',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Context Engineering trifft Rapid Prototyping: Lernen Sie promptotypen, oder lassen Sie uns die Arbeit machen.',
    promptoArticle: 'Der Grundlagentext im L.I.S.A.-Portal',
    promptoSkill: 'Promptotyping-Skill auf GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText:
      'Aktuelle Entwicklungen, praktische Ausarbeitungen und viel Prompting: kuratiert, aufbereitet, teils gratis.',
    ctaTitle: 'Wir freuen uns auf Ihre Anfrage!',
    ctaSub: 'Ob Webinar, Workshop oder individuelles Consulting: Wir schneiden das Format auf Ihre Fragen zu.',
    metaTitle: 'Excellence | Digital Humanities Craft: Best Practice, Forschung und Ausbildung für Generative KI',
    metaDescription:
      'Das DHCraft-Exzellenzzentrum für generative KI: Webinare, Workshops, Intensivtage und Consulting für Forschung, Kultur und Wirtschaft. Context Engineering, AI Literacy und Promptotyping aus Graz.',
    skipLink: 'Zum Inhalt springen',
  },
  en: {
    navUpdates: 'AI channel',
    navVideos: 'Videos',
    navFormats: 'Services',
    navBlog: 'Blog',
    navBack: '← dhcraft.org',
    navContact: 'Contact',
    heroKicker: 'dhcraft.org/excellence',
    heroTitle: 'Best practice, research and training for generative AI.',
    heroSub:
      'Our center of excellence combines time-efficient learning with practical know-how: specialized in generative AI, context engineering, Digital Humanities, research management, data science and programming.',
    updatesKicker: 'From the AI channel',
    updatesTitle: 'What is happening now.',
    updatesCta: 'Curated on Patreon',
    videosKicker: 'Videos',
    videosTitle: 'From our YouTube channel.',
    videosAll: 'All videos',
    formatsKicker: 'Excellence',
    formatsTitle: 'Training and AI consulting.',
    formatsIntro:
      'Excellence is our area for generative AI: webinars, workshops and intensive days, plus consulting and Promptotyping, for research, culture and business.',
    promptoTitle: 'Promptotyping',
    promptoText: 'Context engineering meets rapid prototyping: learn how to promptotype, or let us do the work.',
    promptoArticle: 'The foundational text in the L.I.S.A. portal',
    promptoSkill: 'Promptotyping skill on GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'Current developments, practical elaborations and extensive prompting: curated, prepared, partly free.',
    ctaTitle: 'We look forward to your inquiry!',
    ctaSub: 'Webinar, workshop or individual consulting: we tailor the format to your questions.',
    metaTitle: 'Excellence | Digital Humanities Craft: best practice, research and training for generative AI',
    metaDescription:
      'The DHCraft center of excellence for generative AI: webinars, workshops, intensive days and consulting for research, culture and business. Context engineering, AI literacy and Promptotyping from Graz, Austria.',
    skipLink: 'Skip to content',
  },
};

// Zahlen vom Experten bestätigt (2026-07-08): 200+ / 40+ / 10+
const statsBase = [
  { value: '200+', color: '#a9c53d' },
  { value: '40+', color: '#8a4fa3' },
  { value: '10+', color: '#e39a3b' },
];

const statsLabels = {
  de: ['Workshops durchgeführt', 'Partnerinstitutionen', 'Jahre Lehrerfahrung'],
  en: ['Workshops delivered', 'Partner institutions', 'Years of teaching experience'],
};

// Aus dem AI-Channel: kurze Updates im Chat-Stil (Vorbild: Christophers Posts im Instituts-Channel).
// Einsprachig wie gepostet, gleiche Liste auf beiden Sprachrouten; ein Eintrag = wenige Zeilen,
// bewusst pflegearm (die Vortrags-Timeline aus dem Mockup war zu pflegeintensiv, Experte 2026-07-08).
const channelUpdates: ChannelUpdate[] = [
  {
    date: '2026-07-08',
    text: 'Neues Video: Live-Demo zu Agentic Engineering und digitaler Edition mit Claude Code und Fable 5.',
    url: 'https://www.youtube.com/watch?v=kQaTu4oFjSo',
    linkTitle: 'Agentic Engineering und digitale Edition mit Claude Code und Fable 5 (Live Demo)',
    source: 'youtube.com',
  },
  {
    date: '2026-07-01',
    text: 'Fable 5 is coming back. And GPT-5.6 is a new model family (Solar, Terra, Luna); GPT-5.6 Solar Ultra is a Mythos/Fable-tier model.',
    url: 'https://www.anthropic.com/news/redeploying-fable-5',
    linkTitle: 'Redeploying Claude Fable 5',
    source: 'anthropic.com',
  },
];

// Lernpfad „Zum Einstieg": kuratiert und nummeriert (Grundlagen → Methode → Praxis),
// bewusst ohne Datum, damit die Sektion nicht veraltet; Titel verbatim von YouTube.
// Aktualität liefern der AI-Channel-Feed und die Blog-Seite, nicht diese Sektion.
const videosBase = [
  {
    id: 'u4RRxi5tgTA',
    color: '#85aede',
    title: 'Wie LLMs funktionieren',
  },
  {
    id: '8sUe4Jkh3uQ',
    color: '#5c9e4a',
    title: 'Einführung in Promptotyping. (Teil 1)',
  },
  {
    id: 'kQaTu4oFjSo',
    color: '#c06bb0',
    title: 'Agentic Engineering und digitale Edition mit Claude Code und Fable 5 (Live Demo)',
  },
];

const videoTags = {
  de: ['1 · Grundlagen', '2 · Methode', '3 · Praxis'],
  en: ['1 · Foundations', '2 · Method', '3 · Practice'],
};

const formatsData = {
  de: [
    {
      title: 'Webinare',
      duration: '60–90 Minuten',
      color: '#85aede',
      text: 'Kompakte Themendarstellung mit praktischen Beispielen: schneller Überblick und Einstieg.',
    },
    {
      title: 'Workshops',
      duration: '3 Stunden',
      color: '#5c9e4a',
      text: 'Vortrag, Einblicke und praktische Übungen: vertiefendes Verständnis und Anwendung.',
    },
    {
      title: 'Intensives',
      duration: '1 Tag',
      color: '#e39a3b',
      text: 'Expertenwissen im Live-Setting: Arbeit mit eigenen Daten, Live-Beratung, Train the Trainer.',
    },
    {
      title: 'Consulting',
      duration: 'Auf Anfrage',
      color: '#8a4fa3',
      text: 'Individuelles Consulting und mehrtägige Workshops, jederzeit auf Anfrage möglich.',
    },
  ],
  en: [
    {
      title: 'Webinars',
      duration: '60–90 minutes',
      color: '#85aede',
      text: 'Concise topic presentation with practical examples: quick overview and introduction.',
    },
    {
      title: 'Workshops',
      duration: '3 hours',
      color: '#5c9e4a',
      text: 'Lectures, insights and practical exercises: in-depth understanding and application.',
    },
    {
      title: 'Intensives',
      duration: '1 day',
      color: '#e39a3b',
      text: 'Expert knowledge in a live setting: work with your own data, live consultation, train the trainer.',
    },
    {
      title: 'Consulting',
      duration: 'On request',
      color: '#8a4fa3',
      text: 'Individual consulting and multi-day workshops, available at any time upon request.',
    },
  ],
};

export function getExcellenceContent(lang: Lang) {
  const stats: Stat[] = statsBase.map((s, i) => ({ ...s, label: statsLabels[lang][i] }));
  const videos: Video[] = videosBase.map((v, i) => ({ ...v, tag: videoTags[lang][i] }));

  return {
    t: t[lang],
    stats,
    updates: channelUpdates,
    videos,
    formats: formatsData[lang] as Format[],
  };
}
