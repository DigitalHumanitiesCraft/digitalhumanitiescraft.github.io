// Inhalte aus dem Design "Excellence.dc.html" (Claude Design, Projekt "Watercolor Website Design").
// Textkonventionen angewandt (design.md): keine Gedankenstriche, "Context Engineering" statt "Prompt Engineering".
// Die Videos der Startseite kommen zur Buildzeit aus dem Kanal-RSS (src/lib/videos.ts), nicht aus dieser Datei.

import type { Lang } from './content';

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

export interface Format {
  title: string;
  duration: string;
  color: string;
  text: string;
}

const t = {
  de: {
    updatesTitle: 'Neues aus dem Patreon-Kanal',
    updatesCta: 'Zum Kanal auf Patreon',
    videosTitle: 'Videos',
    videosAll: 'Alle Videos',
    formatsTitle: 'Weiterbildung und Beratung',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Promptotyping ist eine Methode des Context Engineering, die Forschungsartefakte mit KI-Agenten aus einer gepflegten Wissensbasis heraus entwickelt. Wir vermitteln sie in Workshops und setzen sie in Projekten ein, wenn sie zum Vorhaben passt, neben anderen Methoden unter <a href="/fancy-research-tools/">Agentic Engineering</a>.',
    promptoSpec: 'Die Methodenspezifikation',
    promptoArticle: 'Grundlagentext im Wissenschaftsportal L.I.S.A. der Gerda Henkel Stiftung',
    promptoSkill: 'Promptotyping-Skill auf GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'Auf Patreon teilen wir erweiterte Tutorials, Live-Demos und Materialien, teils exklusiv für Mitglieder.',
  },
  en: {
    updatesTitle: 'News from the Patreon channel',
    updatesCta: 'Go to the Patreon channel',
    videosTitle: 'Videos',
    videosAll: 'All videos',
    formatsTitle: 'Training and consulting',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Promptotyping is a context engineering method that develops research artefacts with AI agents from a maintained knowledge base. We teach it in workshops and use it in projects where it fits, alongside other methods described under <a href="/en/fancy-research-tools/">Agentic Engineering</a>.',
    promptoSpec: 'The method specification',
    promptoArticle: 'Foundational article on the L.I.S.A. science portal of the Gerda Henkel Foundation',
    promptoSkill: 'Promptotyping skill on GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'On Patreon we share extended tutorials, live demos and materials, some of them exclusive to members.',
  },
};

// Aus dem AI-Channel: kurze Updates im Chat-Stil (Vorbild: Christophers Posts im Instituts-Channel).
// Einsprachig wie gepostet, gleiche Liste auf beiden Sprachrouten; ein Eintrag = wenige Zeilen,
// bewusst pflegearm (die Vortrags-Timeline aus dem Mockup war zu pflegeintensiv, Experte 2026-07-08).
// 2026-09-25: die fünf neuesten Posts aus dem Patreon-Kanal seit Juli, je mit öffentlichem Link (Experte)
const channelUpdates: ChannelUpdate[] = [
  {
    date: '2026-09-24',
    text: 'Christopher zu Gast im Podcast PHastForward Geschichte Digital: wie LLMs und KI-Agenten computerbasierte Forschung unterstützen, mit Blick auf Geschichtsforschung und Geschichtsdidaktik.',
    url: 'https://open.spotify.com/episode/2JUkpUrzuAlPqCdZYDjDFj',
    linkTitle: '19 - Dr. Christopher Pollin (KI in der Geschichtsforschung | Digital Humanities)',
    source: 'spotify.com',
  },
  {
    date: '2026-09-24',
    text: 'Neuer Blogbeitrag von Sackl-Sharif & Steiner: Wo steckt der Bias bei regelbasierter, prädiktiver und generativer KI, und wie können Redaktionen damit umgehen?',
    url: 'https://dhcraft.org/excellence/blog/KI-Typen-Journalismus-Bias',
    linkTitle: 'Regelbasierte, prädiktive und generative KI: Wie Bias im Journalismus entsteht und wie Redaktionen damit umgehen können',
    source: 'dhcraft.org',
  },
  {
    date: '2026-09-18',
    text: 'Vier Sessions an der Summer School „Gender – Knowledge – Mobility. Digital Perspectives in Musicology“ der Kunstuniversität Graz. Slides, Lecture Notes und Übungsmaterialien sind offen verfügbar.',
    url: 'https://chpollin.github.io/summer-school-musicology-2026/',
    linkTitle: 'Summer School Musicology 2026 · Research Data Workflows and LLMs',
    source: 'github.io',
  },
  {
    date: '2026-09-08',
    text: 'Neues Video: die Agentic Edition Pipeline mit GPT-6 Astra in Codex, von historischen Digitalisaten über TEI-XML bis zur eigenen Korrekturoberfläche.',
    url: 'https://www.youtube.com/watch?v=krL-xMxTa_c',
    linkTitle: 'Agentic Edition Pipeline mit GPT-6 Astra | Live-Demo',
    source: 'youtube.com',
  },
  {
    date: '2026-08-12',
    text: 'Neues Video: Entity Linking mit GND in einer digitalen Edition, als hybrider Workflow aus deterministischen Verfahren, LLMs, Subagenten und menschlicher Verifikation.',
    url: 'https://www.youtube.com/watch?v=TvGYsjTYC-I',
    linkTitle: 'Agentic Engineering für digitale Editionen mit Claude Code, TEI und GND | Live Demo',
    source: 'youtube.com',
  },
];

const formatsData = {
  de: [
    {
      title: 'Webinar',
      duration: 'bis 2 Stunden',
      color: '#85aede',
      text: 'Einführung in ein Thema mit Beispielen aus der Praxis.',
    },
    {
      title: 'Workshop',
      duration: '3 bis 3,5 Stunden',
      color: '#5c9e4a',
      text: 'Vortrag und angeleitete Übungen, in denen die Teilnehmenden die Verfahren selbst anwenden.',
    },
    {
      title: 'Ganztägig',
      duration: '1 Tag',
      color: '#e39a3b',
      text: 'Arbeit an eigenen Daten mit Beratung vor Ort.',
    },
    {
      title: 'Mehrtägig und Beratung',
      duration: 'nach Vereinbarung',
      color: '#8a4fa3',
      text: 'Mehrtägige Workshops und individuelle Beratung.',
    },
  ],
  en: [
    {
      title: 'Webinar',
      duration: 'up to 2 hours',
      color: '#85aede',
      text: 'Introduction to a topic with practical examples.',
    },
    {
      title: 'Workshop',
      duration: '3 to 3.5 hours',
      color: '#5c9e4a',
      text: 'Talk and guided exercises in which participants apply the methods themselves.',
    },
    {
      title: 'Full day',
      duration: '1 day',
      color: '#e39a3b',
      text: 'Work on your own data with on-site guidance.',
    },
    {
      title: 'Multi-day and consulting',
      duration: 'by arrangement',
      color: '#8a4fa3',
      text: 'Multi-day workshops and individual consulting.',
    },
  ],
};

export function getExcellenceContent(lang: Lang) {
  return {
    t: t[lang],
    updates: channelUpdates,
    formats: formatsData[lang] as Format[],
  };
}
