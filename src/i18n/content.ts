// Inhalte 1:1 aus dem Design "DHCraft Website.dc.html" (Claude Design, Projekt "Watercolor Website Design").
// Die DE/EN-State-Umschaltung des Designs wird hier zu echten Sprachrouten (/ und /en/).

export type Lang = 'de' | 'en';

export interface Service {
  title: string;
  text: string;
  icon: string;
  /** Säulen-Label (Zwei-Säulen-IA): Excellence oder Entwicklung */
  pillar: string;
  pillarColor: string;
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
  thumbKey: 'szd' | 'ruza' | 'depcha' | 'mhdbdb' | 'crown' | 'fortunoff' | null;
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
    navProjects: 'Projekte',
    navWebinars: 'Excellence',
    navContact: 'Kontakt',
    heroTitle1: 'Digitales Handwerk aus der Forschung,',
    heroTitle2: 'für alle, die mit Wissen arbeiten.',
    heroSub:
      'Weiterbildung, Beratung und Forschungssoftware rund um generative KI. Für Universitäten, Kultureinrichtungen, Unternehmen und Verwaltung.',
    heroCta1: 'Unser Angebot',
    heroCta2: 'Projekte ansehen',
    servicesKicker: 'Angebot',
    servicesTitle: 'Was wir machen.',
    projectsKicker: 'Referenzen',
    projectsTitle: 'Eine Auswahl unserer Arbeit.',
    projectsMore: 'Mehr Projekte auf GitHub',
    partnersKicker: 'Partner & Auftraggeber',
    partnersTitle: 'Institutionen, die uns vertrauen.',
    teamTitle: 'Das Team.',
    blogTitle: 'Aus dem Blog.',
    blogAll: 'Alle Beiträge',
    contactTitle: 'Finden Sie Ihre persönliche Lösung.',
    contactSub: 'Fragen Sie nach unseren Angeboten. Wir melden uns rasch und unkompliziert.',
    contactCta: 'Kontakt aufnehmen',
    footerCompany: 'Unternehmen',
    footerLegal: 'Rechtliches',
    footerImprint: 'Impressum',
    footerAi: 'Unsere Position zu KI-Einsatz',
    metaTitle: 'Digital Humanities Craft | KI-Weiterbildung, Beratung und Forschungssoftware',
    metaDescription:
      'Weiterbildung, Beratung und Forschungssoftware rund um generative KI. Für Universitäten, Kultureinrichtungen, Unternehmen und Verwaltung. Context Engineering, AI Literacy und Digitale Editionen aus Graz.',
    skipLink: 'Zum Inhalt springen',
  },
  en: {
    navServices: 'Services',
    navProjects: 'Work',
    navWebinars: 'Excellence',
    navContact: 'Contact',
    heroTitle1: 'Digital craftsmanship from research,',
    heroTitle2: 'for everyone who works with knowledge.',
    heroSub:
      'Training, consulting and research software around generative AI. For universities, cultural institutions, companies and public administration.',
    heroCta1: 'What we do',
    heroCta2: 'See our work',
    servicesKicker: 'Services',
    servicesTitle: 'What we do.',
    projectsKicker: 'Selected work',
    projectsTitle: 'A selection of our work.',
    projectsMore: 'More projects on GitHub',
    partnersKicker: 'Partners & clients',
    partnersTitle: 'Institutions that trust us.',
    teamTitle: 'The team.',
    blogTitle: 'From the blog.',
    blogAll: 'All posts',
    contactTitle: 'Find the right solution.',
    contactSub: 'Ask about our offers. We respond quickly and without fuss.',
    contactCta: 'Get in touch',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerImprint: 'Imprint',
    footerAi: 'Our position on AI use',
    metaTitle: 'Digital Humanities Craft | AI training, consulting and research software',
    metaDescription:
      'Training, consulting and research software around generative AI. For universities, cultural institutions, companies and public administration. Context engineering, AI literacy and digital editions from Graz, Austria.',
    skipLink: 'Skip to content',
  },
};

// Neuzuschnitt 2026-07-08 auf Basis geschaeftskontext.md: Karten 1 bis 3 = Säule Excellence, 4 bis 6 = Säule Entwicklung
const servicesText = {
  de: [
    {
      title: 'KI-Workshops & Weiterbildung',
      text: 'Context Engineering, AI Literacy und Agentic Engineering für Wissenschaft, Kultur und Wirtschaft. Als Impulsvortrag, Hands-on-Workshop oder mehrtägige School.',
    },
    {
      title: 'KI-Beratung & Co-Intelligence',
      text: 'KI-Strategie und angewandte generative KI für Institutionen: Promptotyping, agentische Systeme und Workflows, die Expertise verstärken statt ersetzen.',
    },
    {
      title: 'Lehre, Schools & Curricula',
      text: 'Wir unterrichten an Universitäten in ganz Europa und gestalten Curricula mit. Und Schools geben wir zu jeder Jahreszeit: Winter, Spring, Summer und Autumn.',
    },
    {
      title: 'Forschungssoftware & Digitale Editionen',
      text: 'Web-Interfaces, Dashboards und Digitale Editionen für Forschungsprojekte, wann immer möglich kompatibel mit Linked Open Data. Langzeitarchivierung inklusive: in Kooperation mit dem <a href="https://digital-humanities.uni-graz.at/de/" target="_blank" rel="noopener">Institut für Digitale Geisteswissenschaften</a> der Universität Graz im OAIS-konformen, zertifizierten Repositorium <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a>.',
    },
    {
      title: 'Datenmodellierung & KI-gestützte Erschließung',
      text: 'TEI, RDF und Schema-Entwicklung sowie KI-gestützte OCR/HTR-Pipelines, die Handschriften zu strukturierten, nachnutzbaren Daten machen.',
    },
    {
      title: 'Forschungsprojekt-Partnerschaft',
      text: 'DHCraft als Projektpartner: Konsortialpartnerschaft in Förderprojekten jeder Art. Dazu Antragsunterstützung und die digitale Komponente für Ihr Forschungsvorhaben.',
    },
  ],
  en: [
    {
      title: 'AI Workshops & Training',
      text: 'Context engineering, AI literacy and agentic engineering for research, culture and business. As a keynote, hands-on workshop or multi-day school.',
    },
    {
      title: 'AI Consulting & Co-Intelligence',
      text: 'AI strategy and applied generative AI for institutions: Promptotyping, agentic systems and workflows that amplify expertise instead of replacing it.',
    },
    {
      title: 'Teaching, Schools & Curricula',
      text: 'We teach at universities across Europe and help shape curricula. And we run schools in every season: winter, spring, summer and autumn.',
    },
    {
      title: 'Research Software & Digital Editions',
      text: 'Web interfaces, dashboards and digital editions for research projects, compatible with Linked Open Data whenever possible. Long-term preservation included, in cooperation with the <a href="https://digital-humanities.uni-graz.at/en/" target="_blank" rel="noopener">Department of Digital Humanities</a> at the University of Graz and its certified, OAIS-compliant repository <a href="https://gams.uni-graz.at/" target="_blank" rel="noopener">GAMS</a>.',
    },
    {
      title: 'Data Modeling & AI-Assisted Digitization',
      text: 'TEI, RDF and schema development plus AI-assisted OCR/HTR pipelines that turn manuscripts into structured, reusable data.',
    },
    {
      title: 'Research Project Partnership',
      text: 'DHCraft as project partner: consortium partner in funded projects of any kind, plus proposal support and the digital component of your research project.',
    },
  ],
};

// Finale 6er-Auswahl (Experte, 2026-07-08): Kriterium = belegt Angebotskarten + Sektor-/Ortsmix; Rotation jährlich, Strashun ersetzt Fortunoff bei Launch
const projectsBase = [
  { title: 'MHDBDB', url: 'https://dhcraft.org/mhdbdb-tei-only/', c1: '#85aede', c2: '#4a7ab8', c3: '#a9c53d', thumbKey: 'mhdbdb' as const },
  { title: 'Stefan Zweig Digital', url: 'https://gams.uni-graz.at/context:szd', c1: '#8a4fa3', c2: '#c06bb0', c3: '#85aede', thumbKey: 'szd' as const },
  { title: 'Fortunoff Video Archive', url: 'https://fortunoff.library.yale.edu/', c1: '#5c9e4a', c2: '#a9c53d', c3: '#85aede', thumbKey: 'fortunoff' as const },
  { title: 'CROWN', url: 'https://www.projekt-reichskrone.at', c1: '#f2b95c', c2: '#e08a2a', c3: '#c06bb0', thumbKey: 'crown' as const },
  { title: 'Ružake gila', url: 'https://ruzakegila.mdw.ac.at/', c1: '#c06bb0', c2: '#8a4fa3', c3: '#f2b95c', thumbKey: 'ruza' as const },
  { title: 'DEPCHA', url: 'https://gams.uni-graz.at/context:depcha', c1: '#4a7ab8', c2: '#85aede', c3: '#5c9e4a', thumbKey: 'depcha' as const },
];

const projectsText = {
  de: [
    { partner: 'Universität Salzburg', desc: 'Die Mittelhochdeutsche Begriffsdatenbank auf neuer Basis: 667 TEI-Texte, semantische Suche und offene Dateninfrastruktur.' },
    { partner: 'Literaturarchiv Salzburg', desc: 'Digitales Archiv und laufende Erweiterung der Plattform.' },
    { partner: 'Yale University', desc: 'Über 4.400 Video-Zeugnisse von Überlebenden und Zeitzeugen des Holocaust, gesammelt seit 1979. Consulting, Support und Weiterentwicklung der DH-Tools des Archivs.' },
    { partner: 'Kunsthistorisches Museum Wien', desc: 'Datenmodellierung und Webentwicklung zur Erforschung der Wiener Reichskrone.' },
    { partner: 'mdw Wien · MMRC', desc: 'Custom Theme für Omeka S, Consulting und Support.' },
    { partner: 'Universität Graz · Andrew W. Mellon Foundation', desc: 'Bookkeeping-Ontologie und Publikationsplattform für historische Rechnungsbücher, hervorgegangen aus Christophers Dissertation.' },
  ],
  en: [
    { partner: 'University of Salzburg', desc: 'The Middle High German Conceptual Database on a new foundation: 667 TEI texts, semantic search and an open data infrastructure.' },
    { partner: 'Literature Archive Salzburg', desc: 'Digital archive and ongoing expansion of the platform.' },
    { partner: 'Yale University', desc: "More than 4,400 video testimonies of Holocaust survivors and witnesses, recorded since 1979. Consulting, support and further development of the archive's DH tools." },
    { partner: 'Kunsthistorisches Museum Wien', desc: 'Data modeling and web development for the study of the Vienna Imperial Crown.' },
    { partner: 'mdw Wien · MMRC', desc: 'Custom Omeka S theme, consulting and support.' },
    { partner: 'University of Graz · Andrew W. Mellon Foundation', desc: "Bookkeeping ontology and publishing platform for historical account books, grown out of Christopher's doctoral research." },
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
    pillar: i < 3 ? 'Excellence' : lang === 'de' ? 'Entwicklung' : 'Development',
    // Zwei Säulen als Navy/Violett codiert (Farbreduktion 2026-07-09): Excellence violett, Entwicklung navy
    pillarColor: i < 3 ? '#8a4fa3' : '#1e2749',
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
