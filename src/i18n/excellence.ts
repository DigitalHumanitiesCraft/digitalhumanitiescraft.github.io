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
      'Promptotyping ist eine Methode des Context Engineering, die Forschungsartefakte mit KI-Agenten aus einer gepflegten Wissensbasis heraus entwickelt. Wir vermitteln sie in Workshops und setzen sie in Projekten ein, wenn sie zum Vorhaben passt, neben anderen Methoden unter <a href="/fancy-research-tools/">fancy (research) tools</a>.',
    promptoSpec: 'Die Methodenspezifikation',
    promptoArticle: 'Grundlagentext im Wissenschaftsportal L.I.S.A. der Gerda Henkel Stiftung',
    promptoSkill: 'Promptotyping-Skill auf GitHub',
    patreonTitle: 'Patreon Membership',
    patreonText: 'Auf Patreon teilen wir erweiterte Tutorials, Live-Demos und Materialien, teils exklusiv für Mitglieder.',
  },
  en: {
    formatsTitle: 'Training and consulting',
    promptoTitle: 'Promptotyping',
    promptoText:
      'Promptotyping is a context engineering method that develops research artefacts with AI agents from a maintained knowledge base. We teach it in workshops and use it in projects where it fits, alongside other methods described under <a href="/en/fancy-research-tools/">fancy (research) tools</a>.',
    promptoSpec: 'The method specification',
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
