// Textkonventionen: keine Gedankenstriche, "Context Engineering" statt "Prompt Engineering".
// Die Videos der Startseite kommen zur Buildzeit aus dem Kanal-RSS (src/lib/videos.ts), nicht aus dieser Datei.

import type { Lang } from './content';

export interface Format {
  title: string;
  duration: string;
  text: string;
}

const t = {
  de: {
    formatsTitle: 'Weiterbildung und Beratung',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Promptotyping ist eine Arbeitspraxis, die Forschungsdaten und ihre Kontexte durch Knowledge Engineering, Context Engineering und Agentic Engineering in Forschungsartefakte übersetzt, die zu den Fragen und Arbeitsweisen der Forschenden passen. Wir vermitteln sie in Workshops und setzen sie in Projekten ein, wenn sie zum Vorhaben passt, neben den Methoden und Frameworks unter <a href="/fancy-research-tools/">fancy (research) tools &amp; workflows</a>.',
    promptoSpec: 'Die Spezifikation der Arbeitspraxis',
    promptoArticle: 'Grundlagentext im Wissenschaftsportal L.I.S.A. der Gerda Henkel Stiftung',
    promptoSkill: 'Promptotyping-Skill auf GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'Auf Patreon teilen wir erweiterte Tutorials, Live-Demos und Materialien, teils exklusiv für Mitglieder.',
  },
  en: {
    formatsTitle: 'Training and consulting',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Promptotyping is a working practice that translates research data and their contexts into research artefacts that fit the researchers’ questions and ways of working, through Knowledge Engineering, Context Engineering and Agentic Engineering. We teach it in workshops and use it in projects where it fits, alongside the methods and frameworks described under <a href="/en/fancy-research-tools/">fancy (research) tools &amp; workflows</a>.',
    promptoSpec: 'The specification of the working practice',
    promptoArticle: 'Foundational article on the L.I.S.A. science portal of the Gerda Henkel Foundation',
    promptoSkill: 'Promptotyping skill on GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'On Patreon we share extended tutorials, live demos and materials, some of them exclusive to members.',
  },
};

const formatsData = {
  de: [
    {
      title: 'Webinar',
      duration: 'bis 2 Stunden',
      text: 'Einführung in ein Thema mit Beispielen aus der Praxis.',
    },
    {
      title: 'Workshop',
      duration: '3 bis 3,5 Stunden',
      text: 'Vortrag und angeleitete Übungen, in denen die Teilnehmenden die Verfahren selbst anwenden.',
    },
    {
      title: 'Ganztägig',
      duration: '1 Tag',
      text: 'Arbeit an eigenen Daten mit Beratung vor Ort.',
    },
    {
      title: 'Mehrtägig und Beratung',
      duration: 'nach Vereinbarung',
      text: 'Mehrtägige Workshops und individuelle Beratung.',
    },
  ],
  en: [
    {
      title: 'Webinar',
      duration: 'up to 2 hours',
      text: 'Introduction to a topic with practical examples.',
    },
    {
      title: 'Workshop',
      duration: '3 to 3.5 hours',
      text: 'Talk and guided exercises in which participants apply the methods themselves.',
    },
    {
      title: 'Full day',
      duration: '1 day',
      text: 'Work on your own data with on-site guidance.',
    },
    {
      title: 'Multi-day and consulting',
      duration: 'by arrangement',
      text: 'Multi-day workshops and individual consulting.',
    },
  ],
};

export function getExcellenceContent(lang: Lang) {
  return {
    t: t[lang],
    formats: formatsData[lang] as Format[],
  };
}
