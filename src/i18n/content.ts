// Inhalte 1:1 aus dem Design "DHCraft Website.dc.html" (Claude Design, Projekt "Watercolor Website Design").
// Die DE/EN-State-Umschaltung des Designs wird hier zu echten Sprachrouten (/ und /en/).

export type Lang = 'de' | 'en';

export interface Service {
  title: string;
  text: string;
  icon: string;
  /** Hexagon-Farbe des Icons: violett für Weiterbildung und Beratung, navy für Entwicklung */
  iconColor: string;
}

export interface Project {
  title: string;
  partner: string;
  desc: string;
  url: string;
  c1: string;
  c2: string;
  c3: string;
  /** Key für Screenshot in src/assets/projects/, null = Watercolor-Banner */
  thumbKey: 'szd' | 'ruza' | 'depcha' | 'mhdbdb' | 'm3gim' | 'femprompt' | null;
}

export interface Partner {
  name: string;
  /** Key für Logo in src/assets/logos/ (große Logo-Leiste wie auf der Altsite) */
  logoKey: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photoKey: 'christian' | 'christopher';
  c1: string;
  c2: string;
  mail: string;
  link: string;
  linkLabel: string;
  bio: string;
}

const icons: Record<string, string> = {
  web: 'M8.5 6.5L3 12l5.5 5.5 M15.5 6.5L21 12l-5.5 5.5',
  data: 'M4 8h13 M17 8l-3-3 M17 8l-3 3 M20 16H7 M7 16l3-3 M7 16l3 3',
  chart: 'M5 20v-6 M12 20V6 M19 20v-10 M3 20h18',
  ai: 'M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3 M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16',
  teach: 'M12 4L2 9l10 5 10-5-10-5 M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5 M22 9v5',
  consult: 'M21 11.5a8 8 0 0 1-8.5 8L7 21l1.2-3.4A8 8 0 1 1 21 11.5 M8.5 11.5h.01 M12.5 11.5h.01 M16.5 11.5h.01',
  partner: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
};
const iconOrder = ['ai', 'consult', 'teach', 'web', 'data', 'partner'];

const t = {
  de: {
    navServices: 'Angebot',
    navAgentic: 'fancy (research) tools',
    navProjects: 'Projekte',
    navWebinars: 'Weiterbildung',
    navNews: 'Neues',
    navContact: 'Kontakt',
    heroTitle1: 'Digitales Handwerk aus der Forschung,',
    heroTitle2: 'für alle, die mit Wissen arbeiten.',
    heroSub:
      'Wir entwickeln Forschungssoftware, Workflows für Forschungsdaten und digitale Editionen, bauen Werkzeuge mit Coding-Agenten und bieten Weiterbildung und Beratung zu generativer KI für Universitäten, Kultureinrichtungen, Unternehmen und Verwaltung.',
    heroCta1: 'Unser Angebot',
    heroCta2: 'Projekte ansehen',
    servicesTitle: 'Angebot',
    projectsTitle: 'Ausgewählte Projekte',
    projectsMore: 'Mehr Projekte auf GitHub',
    partnersTitle: 'Institutionen, mit denen wir gearbeitet haben',
    teamTitle: 'Team',
    newsTitle: 'Neues',
    blogAll: 'Alle Beiträge',
    videosAll: 'Alle Videos',
    contactTitle: 'Kontakt',
    contactSub: 'Beschreiben Sie uns kurz Ihr Vorhaben, Ihre Daten und Ihren Budgetrahmen. Wie wir Aufträge abrechnen, steht unter <a href="/fancy-research-tools/#kosten">fancy (research) tools</a>.',
    contactCta: 'Kontakt aufnehmen',
    contactPlace: 'Kainbach bei Graz, Österreich',
    footerPlace: 'Kainbach bei Graz',
    footerCompany: 'Unternehmen',
    footerLegal: 'Rechtliches',
    footerImprint: 'Impressum',
    footerPress: 'Presse',
    footerPrivacy: 'Datenschutz',
    footerAi: 'Unsere Position zu KI-Einsatz',
    metaTitle: 'Digital Humanities Craft | Forschungssoftware, Agentic Engineering und KI-Weiterbildung',
    metaDescription:
      'Forschungssoftware, Workflows für Forschungsdaten, digitale Editionen und Agentic Engineering sowie Weiterbildung und Beratung zu generativer KI für Universitäten, Kultureinrichtungen, Unternehmen und Verwaltung, aus Kainbach bei Graz.',
    skipLink: 'Zum Inhalt springen',
  },
  en: {
    navServices: 'Services',
    navAgentic: 'fancy (research) tools',
    navProjects: 'Work',
    navWebinars: 'Training',
    navNews: 'News',
    navContact: 'Contact',
    heroTitle1: 'Digital craftsmanship from research,',
    heroTitle2: 'for everyone who works with knowledge.',
    heroSub:
      'We develop research software, research data workflows and digital editions, build tools with coding agents and offer training and consulting on generative AI for universities, cultural institutions, companies and public administration.',
    heroCta1: 'What we do',
    heroCta2: 'See our work',
    servicesTitle: 'Services',
    projectsTitle: 'Selected projects',
    projectsMore: 'More projects on GitHub',
    partnersTitle: 'Institutions we have worked with',
    teamTitle: 'Team',
    newsTitle: 'News',
    blogAll: 'All posts',
    videosAll: 'All videos',
    contactTitle: 'Contact',
    contactSub: 'Briefly describe your project, your data and your budget. How we bill our work is described under <a href="/en/fancy-research-tools/#kosten">fancy (research) tools</a>.',
    contactCta: 'Get in touch',
    contactPlace: 'Kainbach near Graz, Austria',
    footerPlace: 'Kainbach near Graz',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerImprint: 'Imprint',
    footerPress: 'Press',
    footerPrivacy: 'Privacy',
    footerAi: 'Our position on AI use',
    metaTitle: 'Digital Humanities Craft | Research software, agentic engineering and AI training',
    metaDescription:
      'Research software, research data workflows, digital editions and agentic engineering, plus training and consulting on generative AI for universities, cultural institutions, companies and public administration, from Kainbach near Graz, Austria.',
    skipLink: 'Skip to content',
  },
};

// Neuzuschnitt 2026-07-08 auf Basis geschaeftskontext.md: Karten 1 bis 3 = Säule Excellence, 4 bis 6 = Säule Entwicklung
const servicesText = {
  de: [
    {
      title: 'KI-Weiterbildung',
      text: 'Weiterbildung zu AI Literacies sowie zu <a href="https://www.youtube.com/@DigitalHumanitiesCraft" target="_blank" rel="noopener">Knowledge und Agentic Engineering</a> für Wissenschaft, Kultur und Wirtschaft. Wir bieten sie als Vortrag, Webinar, Workshop oder als Beitrag zu mehrtägigen Schools an.',
    },
    {
      title: 'KI-Beratung und Agentic Engineering',
      text: 'Beratung zum Einsatz generativer KI in Institutionen. Werkzeuge, Workflows und Wissensbasen entwickeln wir mit Coding-Agenten im Auftrag, gemeinsam mit Ihrem Team oder im Training, beschrieben unter <a href="/fancy-research-tools/">fancy (research) tools</a>.',
    },
    {
      title: 'Lehre, Schools und Curricula',
      text: 'Wir lehren an Universitäten in Österreich und Deutschland, unterrichten auf Winter- und Summer Schools und wirken an Curricula und Studiengangsgutachten mit.',
    },
    {
      title: 'Forschungssoftware, Daten-Workflows und digitale Editionen',
      text: 'Web-Interfaces, Dashboards, digitale Editionen und Workflows für Forschungsdaten, nach Möglichkeit als Linked Open Data nachnutzbar. Für die Langzeitarchivierung bieten wir das zertifizierte Repositorium <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a> der Universität Graz an.',
    },
    {
      title: 'Datenmodellierung und KI-gestützte Erschließung',
      text: 'Modellierung von Forschungsdaten, in den Digital Humanities etwa mit TEI für Editionen und mit RDF für Linked Open Data, ebenso für Daten anderer Fächer und für die Bestände von Unternehmen und Institutionen. Dazu kommen Schema-Entwicklung und KI-gestützte Texterkennung (OCR/HTR), die aus Quellen strukturierte, nachnutzbare Daten macht.',
    },
    {
      title: 'Partnerschaft in Förderprojekten',
      text: 'DHCraft arbeitet als technischer Partner und Auftragnehmer in Förderprojekten, unterstützt bei der Antragstellung und übernimmt die digitale Komponente des Vorhabens.',
    },
  ],
  en: [
    {
      title: 'AI training',
      text: 'Training in AI literacies and in <a href="https://www.youtube.com/@DigitalHumanitiesCraft" target="_blank" rel="noopener">knowledge and agentic engineering</a> for research, culture and business. We offer it as a talk, webinar, workshop or as a contribution to multi-day schools.',
    },
    {
      title: 'AI consulting and agentic engineering',
      text: 'Consulting on the use of generative AI in institutions. We develop tools, workflows and knowledge bases with coding agents on commission, together with your team or in training, as described under <a href="/en/fancy-research-tools/">fancy (research) tools</a>.',
    },
    {
      title: 'Teaching, schools and curricula',
      text: 'We teach at universities in Austria and Germany, teach at winter and summer schools and contribute to curricula and degree programme reviews.',
    },
    {
      title: 'Research software, data workflows and digital editions',
      text: 'Web interfaces, dashboards, digital editions and research data workflows, reusable as Linked Open Data wherever possible. For long-term archiving we offer the certified repository <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a> of the University of Graz.',
    },
    {
      title: 'Data modelling and AI-assisted digitisation',
      text: 'Modelling of research data, in the Digital Humanities for instance with TEI for editions and with RDF for Linked Open Data, and equally for data from other disciplines and for the holdings of companies and institutions. This includes schema development and AI-assisted text recognition (OCR/HTR) that turns sources into structured, reusable data.',
    },
    {
      title: 'Partnership in funded projects',
      text: 'DHCraft works as a technical partner and contractor in funded projects, supports proposal writing and takes on the digital component of the project.',
    },
  ],
};

// 2026-10-02: CROWN und Fortunoff entfernt (Rolle nicht belegt), Feministische AI Literacies aufgenommen.
// Jede Beschreibung nennt erst das Projekt, dann den Beitrag von DHCraft.
const projectsBase = [
  { title: 'MHDBDB', url: 'https://dhcraft.org/mhdbdb-tei-only/', c1: '#85aede', c2: '#4a7ab8', c3: '#a9c53d', thumbKey: 'mhdbdb' as const },
  { title: 'Stefan Zweig Digital', url: 'https://gams.uni-graz.at/context:szd', c1: '#8a4fa3', c2: '#c06bb0', c3: '#85aede', thumbKey: 'szd' as const },
  { title: 'M³GIM', url: 'https://dhcraft.org/m3gim/', c1: '#4a7ab8', c2: '#85aede', c3: '#5c9e4a', thumbKey: 'm3gim' as const },
  { title: 'Feministische AI Literacies', url: 'https://chpollin.github.io/FemPrompt_SozArb/', c1: '#5c9e4a', c2: '#a9c53d', c3: '#85aede', thumbKey: 'femprompt' as const },
  { title: 'Ružake gila', url: 'https://ruzakegila.mdw.ac.at/', c1: '#c06bb0', c2: '#8a4fa3', c3: '#f2b95c', thumbKey: 'ruza' as const },
];

const projectsText = {
  de: [
    { partner: 'Universität Salzburg', desc: 'Die Mittelhochdeutsche Begriffsdatenbank erschließt mittelhochdeutsche Texte über Lemmata und ein Begriffssystem. Wir haben sie auf eine neue Grundlage mit TEI-Texten und offener Dateninfrastruktur gestellt.' },
    { partner: 'Literaturarchiv Salzburg', desc: 'Stefan Zweig Digital führt den weltweit verstreuten Nachlass Stefan Zweigs digital zusammen. Wir entwickeln das digitale Archiv und erweitern die Plattform laufend.' },
    { partner: 'Kunstuniversität Graz', desc: 'Mapping Mobile Musicians ist eine Pilotstudie zu Mobilität und Wissensproduktion der Mezzosopranistin Ira Malaniuk. Wir haben ihren Teilnachlass als Linked Data modelliert und die öffentliche Forschungsvorschau gebaut, in der jede Angabe bis zur Quelle nachvollziehbar ist.' },
    { partner: 'Universität Graz, Elisabeth List Fellowship', desc: 'Ein Literaturreview zum verantwortungsvollen Einsatz von Sprachmodellen in der Sozialen Arbeit. Wir haben den Workflow gebaut, in dem Beiträge von KI-Agenten und Entscheidungen der Fachleute bis zu ihren Quellen nachvollziehbar bleiben.' },
    { partner: 'mdw Wien, Music and Minorities Research Center', desc: 'Ružake gila ist eine digitale Ausstellung zum musikalischen Erbe der Roma-Sängerin Ruža Nikolić-Lakatos. Wir haben dafür ein eigenes Theme für Omeka S entwickelt und begleiten das Projekt mit Beratung und Betreuung.' },
  ],
  en: [
    { partner: 'University of Salzburg', desc: 'The Middle High German Conceptual Database opens up Middle High German texts by lemma and by a conceptual system. We put it on a new foundation with TEI texts and an open data infrastructure.' },
    { partner: 'Literature Archive Salzburg', desc: "Stefan Zweig Digital brings together Stefan Zweig's papers, scattered across the world, in one digital collection. We develop the digital archive and keep extending the platform." },
    { partner: 'University of Music and Performing Arts Graz', desc: 'Mapping Mobile Musicians is a pilot study on the mobility and knowledge production of mezzo-soprano Ira Malaniuk. We modelled her papers as linked data and built the public research preview in which every statement can be traced to its source.' },
    { partner: 'University of Graz, Elisabeth List Fellowship', desc: 'A literature review on the responsible use of language models in social work. We built the workflow in which contributions of AI agents and decisions of the domain experts remain traceable to their sources.' },
    { partner: 'mdw Vienna, Music and Minorities Research Center', desc: 'Ružake gila is a digital exhibition on the musical heritage of the Roma singer Ruža Nikolić-Lakatos. We developed a custom Omeka S theme for it and support the project with consulting and maintenance.' },
  ],
};

// Logo-Leiste: nur Institutionen mit belegtem DHCraft-Auftrag oder belegter Kooperation (Prüfung gegen den Vault 2026-10-02)
const partnersData = {
  de: [
    { name: 'Universität Graz', logoKey: 'unigraz' },
    { name: 'Kunstuniversität Graz', logoKey: 'kug' },
    { name: 'UNI for LIFE (Universität Graz)', logoKey: 'uniforlife' },
    { name: 'Universität Wien', logoKey: 'uniwien' },
    { name: 'mdw (Universität für Musik und darstellende Kunst Wien)', logoKey: 'mdw' },
    { name: 'Veterinärmedizinische Universität Wien', logoKey: 'vetmeduni' },
    { name: 'Österreichische Akademie der Wissenschaften', logoKey: 'oeaw' },
    { name: 'Zentralbibliothek Zürich', logoKey: 'zbz' },
    { name: 'Literaturarchiv Salzburg', logoKey: 'las' },
    { name: 'Universität Salzburg', logoKey: 'plus' },
    { name: 'Universität Heidelberg', logoKey: 'uniheidelberg' },
    { name: 'Universität Trier', logoKey: 'unitrier' },
    { name: 'Leibniz-Institut für Virologie', logoKey: 'liv' },
    { name: 'CLARIAH-AT', logoKey: 'clariah' },
    { name: 'Museumsbund Österreich', logoKey: 'museumsbund' },
    { name: 'Klassik Stiftung Weimar', logoKey: 'weimar' },
    { name: 'Universität Freiburg', logoKey: 'ufr' },
    { name: 'Wiener Institut für Internationale Wirtschaftsvergleiche (wiiw)', logoKey: 'wiiw' },
  ],
  en: [
    { name: 'University of Graz', logoKey: 'unigraz' },
    { name: 'University of Music and Performing Arts Graz', logoKey: 'kug' },
    { name: 'UNI for LIFE (University of Graz)', logoKey: 'uniforlife' },
    { name: 'University of Vienna', logoKey: 'uniwien' },
    { name: 'mdw (University of Music and Performing Arts Vienna)', logoKey: 'mdw' },
    { name: 'University of Veterinary Medicine Vienna', logoKey: 'vetmeduni' },
    { name: 'Austrian Academy of Sciences', logoKey: 'oeaw' },
    { name: 'Zentralbibliothek Zürich', logoKey: 'zbz' },
    { name: 'Literature Archive Salzburg', logoKey: 'las' },
    { name: 'University of Salzburg', logoKey: 'plus' },
    { name: 'Heidelberg University', logoKey: 'uniheidelberg' },
    { name: 'Trier University', logoKey: 'unitrier' },
    { name: 'Leibniz Institute of Virology', logoKey: 'liv' },
    { name: 'CLARIAH-AT', logoKey: 'clariah' },
    { name: 'Austrian Museums Association', logoKey: 'museumsbund' },
    { name: 'Klassik Stiftung Weimar', logoKey: 'weimar' },
    { name: 'University of Freiburg', logoKey: 'ufr' },
    { name: 'The Vienna Institute for International Economic Studies (wiiw)', logoKey: 'wiiw' },
  ],
};

const teamBase = [
  {
    name: 'Christian Steiner',
    photoKey: 'christian' as const,
    c1: '#a9c53d',
    c2: '#5c9e4a',
    mail: 'mailto:christian.steiner@dhcraft.org',
    link: 'https://chsteiner.github.io/',
    linkLabel: 'chsteiner.github.io',
  },
  {
    name: 'Dr. Christopher Pollin',
    photoKey: 'christopher' as const,
    c1: '#c06bb0',
    c2: '#8a4fa3',
    mail: 'mailto:christopher.pollin@dhcraft.org',
    link: 'https://chpollin.github.io/',
    linkLabel: 'chpollin.github.io',
  },
];

const teamRole = { de: 'Gründer und Gesellschafter', en: 'Co-founder and partner' };

const teamBio = {
  de: [
    'Masterabschluss in Übersetzen/Dolmetschen und Digital Humanities. Seit 2012 am Institut für Digitale Geisteswissenschaften der Universität Graz, nun vollständig für DHCraft tätig.',
    'Promotion in Digital Humanities, Masterabschluss in Geschichte. Seit 2016 am Institut für Digitale Geisteswissenschaften der Universität Graz, nun vollständig für DHCraft tätig.',
  ],
  en: [
    "Master's degree in translation/interpreting and Digital Humanities. At the Department of Digital Humanities, University of Graz since 2012, now fully dedicated to DHCraft.",
    "Doctoral degree in Digital Humanities, master's degree in History. At the Department of Digital Humanities, University of Graz since 2016, now fully dedicated to DHCraft.",
  ],
};

// Blog-Teaser der Startseite kommen aus src/i18n/blog.ts + Kanal-RSS (2 neueste Artikel + neuestes Video)

export function getContent(lang: Lang) {
  const services: Service[] = servicesText[lang].map((s, i) => ({
    ...s,
    icon: icons[iconOrder[i]],
    // Zwei Säulen als Navy/Violett codiert (Farbreduktion 2026-07-09), das Säulen-Label entfällt seit 2026-10-02
    iconColor: i < 3 ? '#8a4fa3' : '#1e2749',
  }));

  const projects: Project[] = projectsBase.map((p, i) => ({
    ...p,
    ...projectsText[lang][i],
  }));

  const team: TeamMember[] = teamBase.map((m, i) => ({
    ...m,
    role: teamRole[lang],
    bio: teamBio[lang][i],
  }));

  return {
    t: t[lang],
    services,
    projects,
    partners: partnersData[lang] as Partner[],
    team,
  };
}
