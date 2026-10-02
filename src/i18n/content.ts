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
  thumbKey: 'szd' | 'ruza' | 'depcha' | 'mhdbdb' | 'crown' | 'fortunoff' | 'm3gim' | null;
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
    navAgentic: 'Agentic Engineering',
    navProjects: 'Projekte',
    navWebinars: 'Excellence',
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
    partnersTitle: 'Institutionen, für die wir gearbeitet haben',
    teamTitle: 'Team',
    blogTitle: 'Blog',
    blogAll: 'Alle Beiträge',
    contactTitle: 'Kontakt',
    contactSub: 'Beschreiben Sie uns kurz Ihr Vorhaben, Ihre Daten und Ihren Budgetrahmen.',
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
    navAgentic: 'Agentic Engineering',
    navProjects: 'Work',
    navWebinars: 'Excellence',
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
    partnersTitle: 'Institutions we have worked for',
    teamTitle: 'Team',
    blogTitle: 'Blog',
    blogAll: 'All posts',
    contactTitle: 'Contact',
    contactSub: 'Briefly describe your project, your data and your budget.',
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
      text: 'Weiterbildung zu AI Literacies sowie zu <a href="https://www.youtube.com/@DigitalHumanitiesCraft" target="_blank" rel="noopener">Knowledge und Agentic Engineering</a> für Wissenschaft, Kultur und Wirtschaft, als Vortrag, Webinar, Workshop oder Beitrag zu mehrtägigen Schools.',
    },
    {
      title: 'KI-Beratung und Agentic Engineering',
      text: 'Beratung zu KI-Strategie und zum Einsatz generativer KI in Institutionen. Werkzeuge, Workflows und Wissensbasen entwickeln wir mit Coding-Agenten im Auftrag, gemeinsam mit Ihrem Team oder im Training, beschrieben unter <a href="/fancy-research-tools/">Agentic Engineering</a>.',
    },
    {
      title: 'Lehre, Schools und Curricula',
      text: 'Wir lehren an Universitäten in Österreich und Deutschland, unterrichten auf Winter- und Summer Schools und wirken an Curricula und Studiengangsgutachten mit.',
    },
    {
      title: 'Forschungssoftware und digitale Editionen',
      text: 'Web-Interfaces, Dashboards und digitale Editionen für Forschungsprojekte, nach Möglichkeit als Linked Open Data nachnutzbar. Für die Langzeitarchivierung von Forschungsdaten bieten wir das zertifizierte Repositorium <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a> an, über einen Rahmenvertrag mit dem <a href="https://digital-humanities.uni-graz.at/de/" target="_blank" rel="noopener">Institut für Digitale Geisteswissenschaften</a> der Universität Graz.',
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
      text: 'Training in AI literacies and in <a href="https://www.youtube.com/@DigitalHumanitiesCraft" target="_blank" rel="noopener">knowledge and agentic engineering</a> for research, culture and business, as a talk, webinar, workshop or contribution to multi-day schools.',
    },
    {
      title: 'AI consulting and agentic engineering',
      text: 'Consulting on AI strategy and on the use of generative AI in institutions. We develop tools, workflows and knowledge bases with coding agents on commission, together with your team or in training, as described under <a href="/en/fancy-research-tools/">Agentic Engineering</a>.',
    },
    {
      title: 'Teaching, schools and curricula',
      text: 'We teach at universities in Austria and Germany, teach at winter and summer schools and contribute to curricula and degree programme reviews.',
    },
    {
      title: 'Research software and digital editions',
      text: 'Web interfaces, dashboards and digital editions for research projects, reusable as Linked Open Data wherever possible. For the long-term archiving of research data we offer the certified repository <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a>, through a framework agreement with the <a href="https://digital-humanities.uni-graz.at/en/" target="_blank" rel="noopener">Department of Digital Humanities</a> at the University of Graz.',
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

// Finale 6er-Auswahl (Experte, 2026-07-08): Kriterium = belegt Angebotskarten + Sektor-/Ortsmix; Rotation jährlich, Strashun ersetzt Fortunoff bei Launch
// 2026-09-25: Mapping Mobile Musicians (KUG) ersetzt DEPCHA (Experte); Strashun noch nicht live
const projectsBase = [
  { title: 'MHDBDB', url: 'https://dhcraft.org/mhdbdb-tei-only/', c1: '#85aede', c2: '#4a7ab8', c3: '#a9c53d', thumbKey: 'mhdbdb' as const },
  { title: 'Stefan Zweig Digital', url: 'https://gams.uni-graz.at/context:szd', c1: '#8a4fa3', c2: '#c06bb0', c3: '#85aede', thumbKey: 'szd' as const },
  { title: 'Fortunoff Video Archive', url: 'https://fortunoff.library.yale.edu/', c1: '#5c9e4a', c2: '#a9c53d', c3: '#85aede', thumbKey: 'fortunoff' as const },
  { title: 'CROWN', url: 'https://www.projekt-reichskrone.at', c1: '#f2b95c', c2: '#e08a2a', c3: '#c06bb0', thumbKey: 'crown' as const },
  { title: 'Ružake gila', url: 'https://ruzakegila.mdw.ac.at/', c1: '#c06bb0', c2: '#8a4fa3', c3: '#f2b95c', thumbKey: 'ruza' as const },
  { title: 'Mapping Mobile Musicians', url: 'https://dhcraft.org/m3gim/', c1: '#4a7ab8', c2: '#85aede', c3: '#5c9e4a', thumbKey: 'm3gim' as const },
];

const projectsText = {
  de: [
    { partner: 'Universität Salzburg', desc: 'Die Mittelhochdeutsche Begriffsdatenbank auf neuer Grundlage, mit TEI-Texten, Suche über Lemmata und das Begriffssystem und offener Dateninfrastruktur.' },
    { partner: 'Literaturarchiv Salzburg', desc: 'Digitales Archiv und laufende Erweiterung der Plattform.' },
    { partner: 'Yale University', desc: 'Über 4.400 Video-Zeugnisse von Überlebenden und Zeitzeugen des Holocaust, gesammelt seit 1979. Consulting, Support und Weiterentwicklung der DH-Tools des Archivs.' },
    { partner: 'Kunsthistorisches Museum Wien', desc: 'Datenmodellierung und Webentwicklung zur Erforschung der Wiener Reichskrone.' },
    { partner: 'mdw Wien, Music and Minorities Research Center', desc: 'Eigenes Theme für Omeka S, Beratung und Betreuung.' },
    { partner: 'Kunstuniversität Graz', desc: 'Pilotstudie zu Mobilität und Wissensproduktion der Mezzosopranistin Ira Malaniuk, mit Nachlassdokumenten als Linked Data, in denen jede Angabe bis zur Quelle nachvollziehbar ist.' },
  ],
  en: [
    { partner: 'University of Salzburg', desc: 'The Middle High German Conceptual Database on a new foundation, with TEI texts, search by lemma and by the conceptual system, and an open data infrastructure.' },
    { partner: 'Literature Archive Salzburg', desc: 'Digital archive and ongoing expansion of the platform.' },
    { partner: 'Yale University', desc: "More than 4,400 video testimonies of Holocaust survivors and witnesses, recorded since 1979. Consulting, support and further development of the archive's DH tools." },
    { partner: 'Kunsthistorisches Museum Wien', desc: 'Data modeling and web development for the study of the Vienna Imperial Crown.' },
    { partner: 'mdw Vienna, Music and Minorities Research Center', desc: 'Custom Omeka S theme, consulting and support.' },
    { partner: 'University of Music and Performing Arts Graz', desc: 'Pilot study on the mobility and knowledge production of mezzo-soprano Ira Malaniuk, with estate documents as linked data in which every statement can be traced to its source.' },
  ],
};

// Logo-Leiste: 15 Altsite-Logos + 7 neue Partner (Mail-/GitHub-Recherche 2026-07-08)
const partnersData = {
  de: [
    { name: 'Universität Graz', logoKey: 'unigraz' },
    { name: 'TU Graz', logoKey: 'tugraz' },
    { name: 'Medizinische Universität Graz', logoKey: 'medunigraz' },
    { name: 'Kunstuniversität Graz', logoKey: 'kug' },
    { name: 'UNI for LIFE (Universität Graz)', logoKey: 'uniforlife' },
    { name: 'Universität Wien', logoKey: 'uniwien' },
    { name: 'Österreichische Nationalbibliothek', logoKey: 'onb' },
    { name: 'mdw (Universität für Musik und darstellende Kunst Wien)', logoKey: 'mdw' },
    { name: 'Veterinärmedizinische Universität Wien', logoKey: 'vetmeduni' },
    { name: 'Yale University', logoKey: 'yale' },
    { name: 'Kunsthistorisches Museum Wien', logoKey: 'khm' },
    { name: 'Österreichische Akademie der Wissenschaften', logoKey: 'oeaw' },
    { name: 'Zentralbibliothek Zürich', logoKey: 'zbz' },
    { name: 'Literaturarchiv Salzburg', logoKey: 'las' },
    { name: 'Universität Salzburg', logoKey: 'plus' },
    { name: 'Max-Planck-Institut für Rechtsgeschichte und Rechtstheorie', logoKey: 'mpilhlt' },
    { name: 'Universität Heidelberg', logoKey: 'uniheidelberg' },
    { name: 'Universität Münster', logoKey: 'unimuenster' },
    { name: 'Universität Würzburg', logoKey: 'uniwuerzburg' },
    { name: 'Universität Trier', logoKey: 'unitrier' },
    { name: 'Universität für Weiterbildung Krems', logoKey: 'unidonau' },
    { name: 'Leibniz-Institut für Virologie', logoKey: 'liv' },
    { name: 'CLARIAH-AT', logoKey: 'clariah' },
    { name: 'Museumsbund Österreich', logoKey: 'museumsbund' },
    { name: 'Deutsches Bergbau-Museum Bochum', logoKey: 'bergbaumuseum' },
    { name: 'Klassik Stiftung Weimar', logoKey: 'weimar' },
    { name: 'Universität des Saarlandes', logoKey: 'unisaarland' },
    { name: 'Berlin-Brandenburgische Akademie der Wissenschaften', logoKey: 'bbaw' },
    { name: 'Universität Freiburg', logoKey: 'ufr' },
  ],
  en: [
    { name: 'University of Graz', logoKey: 'unigraz' },
    { name: 'Graz University of Technology', logoKey: 'tugraz' },
    { name: 'Medical University of Graz', logoKey: 'medunigraz' },
    { name: 'University of Music and Performing Arts Graz', logoKey: 'kug' },
    { name: 'UNI for LIFE (University of Graz)', logoKey: 'uniforlife' },
    { name: 'University of Vienna', logoKey: 'uniwien' },
    { name: 'Austrian National Library', logoKey: 'onb' },
    { name: 'mdw (University of Music and Performing Arts Vienna)', logoKey: 'mdw' },
    { name: 'University of Veterinary Medicine Vienna', logoKey: 'vetmeduni' },
    { name: 'Yale University', logoKey: 'yale' },
    { name: 'Kunsthistorisches Museum Wien', logoKey: 'khm' },
    { name: 'Austrian Academy of Sciences', logoKey: 'oeaw' },
    { name: 'Zentralbibliothek Zürich', logoKey: 'zbz' },
    { name: 'Literature Archive Salzburg', logoKey: 'las' },
    { name: 'University of Salzburg', logoKey: 'plus' },
    { name: 'Max Planck Institute for Legal History and Legal Theory', logoKey: 'mpilhlt' },
    { name: 'Heidelberg University', logoKey: 'uniheidelberg' },
    { name: 'University of Münster', logoKey: 'unimuenster' },
    { name: 'University of Würzburg', logoKey: 'uniwuerzburg' },
    { name: 'Trier University', logoKey: 'unitrier' },
    { name: 'University for Continuing Education Krems', logoKey: 'unidonau' },
    { name: 'Leibniz Institute of Virology', logoKey: 'liv' },
    { name: 'CLARIAH-AT', logoKey: 'clariah' },
    { name: 'Austrian Museums Association', logoKey: 'museumsbund' },
    { name: 'German Mining Museum Bochum', logoKey: 'bergbaumuseum' },
    { name: 'Klassik Stiftung Weimar', logoKey: 'weimar' },
    { name: 'Saarland University', logoKey: 'unisaarland' },
    { name: 'Berlin-Brandenburg Academy of Sciences and Humanities', logoKey: 'bbaw' },
    { name: 'University of Freiburg', logoKey: 'ufr' },
  ],
};

const teamBase = [
  {
    name: 'Christian Steiner',
    role: 'Founder / CEO',
    photoKey: 'christian' as const,
    c1: '#a9c53d',
    c2: '#5c9e4a',
    mail: 'mailto:christian.steiner@dhcraft.org',
    link: 'https://chsteiner.github.io/',
    linkLabel: 'chsteiner.github.io',
  },
  {
    name: 'Dr. Christopher Pollin',
    role: 'Founder / CEO',
    photoKey: 'christopher' as const,
    c1: '#c06bb0',
    c2: '#8a4fa3',
    mail: 'mailto:christopher.pollin@dhcraft.org',
    link: 'https://chpollin.github.io/',
    linkLabel: 'chpollin.github.io',
  },
];

const teamBio = {
  de: [
    'Masterabschluss in Übersetzen/Dolmetschen und Digital Humanities. Seit 2012 am Institut für Digitale Geisteswissenschaften der Universität Graz, nun vollständig für DH Craft tätig.',
    'Doktortitel in Digital Humanities, Masterabschluss in Geschichte. Seit 2016 am Institut für Digitale Geisteswissenschaften der Universität Graz, nun vollständig für DH Craft tätig.',
  ],
  en: [
    "Master's degree in translation/interpreting and Digital Humanities. At the Department of Digital Humanities, University of Graz since 2012, now fully dedicated to DH Craft.",
    "Doctoral degree in Digital Humanities, master's degree in History. At the Department of Digital Humanities, University of Graz since 2016, now fully dedicated to DH Craft.",
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
