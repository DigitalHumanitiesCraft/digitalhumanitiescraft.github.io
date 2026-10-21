// Inhalte der Unterseite "fancy (research) tools!". Die Wissensbasis mit Entscheidungen zu Wortlaut,
// Reifegraden und Bildern liegt in knowledge/fancy-research-tools/ dieses Repos, die Skripte für
// Bildschirmfotos und Prüfungen in scripts/fancy-research-tools/. Textänderungen zuerst dort klären.

import type { Lang } from './content';

/** Innenleben der 24er-Icons (Pfade aus der Quellseite), gerendert per set:html in ein <svg> */
export const fancyIcons = {
  learn: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
  together:
    '<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="8" r="3"/><path d="M2.5 20c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14 15.7c.8-.2 1.6-.2 2.5-.2 2.7 0 4.7 1.5 5.5 4.5"/>',
  build: '<path d="M14.5 4.2a5 5 0 0 0-5.3 6.6L3.6 16.4a2 2 0 0 0 2.8 2.8l5.6-5.6a5 5 0 0 0 6.6-5.3l-3 3-2.8-.4-.4-2.8z"/>',
};

export type FancyIcon = keyof typeof fancyIcons;

/** Reifegrad: das Wort trägt die Bedeutung, die Farbklasse wiederholt sie nur */
type Maturity = 'use' | 'rc' | 'preview' | 'demo' | 'secured' | 'experiment';
const maturityClass: Record<Maturity, string> = {
  use: 'm-use',
  rc: 'm-rc',
  preview: 'm-preview',
  demo: 'm-rc',
  secured: 'm-use',
  experiment: 'm-experiment',
};

const img = (name: string) => `/fancy-research-tools/img/${name}`;

const toolsBase: { id: string; img: string; open: string; code: string; video?: string; maturity: Maturity }[] = [
  {
    id: 't-coocr',
    img: 'coocr-htr',
    open: 'https://dhcraft.org/co-ocr-htr/',
    code: 'https://github.com/DigitalHumanitiesCraft/co-ocr-htr',
    maturity: 'experiment',
  },
  {
    id: 't-tei',
    img: 'teicrafter',
    open: 'https://dhcraft.org/teiCrafter/editor.html',
    code: 'https://github.com/DigitalHumanitiesCraft/teiCrafter',
    maturity: 'experiment',
  },
  {
    id: 't-corresp',
    img: 'correspexplorer',
    open: 'https://dhcraft.org/CorrespExplorer/',
    code: 'https://github.com/DigitalHumanitiesCraft/CorrespExplorer',
    maturity: 'demo',
  },
  {
    id: 't-szd',
    img: 'szd-htr',
    open: 'https://chpollin.github.io/szd-htr-ocr-pipeline/',
    code: 'https://github.com/chpollin/szd-htr-ocr-pipeline',
    maturity: 'experiment',
  },
  {
    id: 't-klawiter',
    img: 'klawiter',
    open: 'https://chpollin.github.io/klawiter-rescue/',
    code: 'https://github.com/chpollin/klawiter-rescue',
    video: 'https://youtu.be/KG35VGVctJw',
    maturity: 'secured',
  },
];

const methodsBase: { id: string; img: string; maturity: Maturity; links: string[] }[] = [
  {
    id: 'm-pt',
    img: 'method-promptotyping',
    maturity: 'use',
    links: [
      'https://dhcraft.org/Promptotyping/',
      'https://github.com/DigitalHumanitiesCraft/Promptotyping',
      'https://youtu.be/8sUe4Jkh3uQ',
      'https://youtu.be/hd_a-NBO_S4',
      'https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin',
    ],
  },
  {
    id: 'm-gv',
    img: 'method-grounded-vault',
    maturity: 'use',
    links: [
      'https://dhcraft.org/grounded-vault/',
      'https://github.com/DigitalHumanitiesCraft/grounded-vault',
      'https://youtu.be/K1sZBOUSZ_0',
    ],
  },
  {
    id: 'm-aep',
    img: 'method-agentic-edition-pipeline',
    maturity: 'preview',
    links: [
      'https://youtu.be/krL-xMxTa_c',
      'https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline',
    ],
  },
];

const offerIcons: FancyIcon[] = ['learn', 'together', 'build'];
const offerIds = ['lernen', 'gemeinsam', 'bauen'];
const offerHrefs = ['#excellence', '#kontakt', '#werkzeuge'];

const text = {
  de: {
    title: 'fancy (research) tools! | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools!',
    description:
      'Forschungswerkzeuge, mit Coding-Agenten gebaut und meist ohne Server im Browser lauffähig. In Workshops und Trainings lernt Ihr Team, sie selbst weiterzuentwickeln.',
    ogLocale: 'de_AT',
    ogImageAlt:
      'Kopfbereich der Seite fancy (research) tools! mit dem Titel, der Zeile Agentic Engineering für alle, die mit Wissen arbeiten, und dem Knopf Ins Gespräch kommen',
    heroLine: 'Agentic Engineering für alle, die mit Wissen arbeiten.',
    lede: 'fancy (research) tools sind Werkzeuge für die Arbeit mit Wissen, entwickelt mit Coding-Agenten. Meist sind es eigenständige statische Anwendungen, die ohne Server im Browser laufen, andere Lösungen sind möglich. In Workshops und Trainings lernt Ihr Team, solche Werkzeuge selbst weiterzuentwickeln.',
    heroCta: 'Ins Gespräch kommen',
    heroOffer: 'Unser Angebot',
    offerTitle: 'Angebot',
    offers: [
      { title: 'Lernen', text: 'In Workshops und Trainings arbeitet Ihr Team selbst mit Coding-Agenten und lernt, Werkzeuge wie die unten gezeigten zu bauen und anzupassen.', link: 'Formate ansehen' },
      { title: 'Gemeinsam entwickeln', text: 'Wir entwickeln gemeinsam mit Ihrem Team an Ihren Daten, vom ersten Prototyp bis zum fertigen Werkzeug. Der Code und die Wissensbasis, aus der die Coding-Agenten arbeiten, bleiben bei Ihnen.', link: 'Gespräch anfragen' },
      { title: 'Im Auftrag entwickeln', text: 'Wir bauen das Werkzeug für Sie, von der kleinen Anwendung für einen Arbeitsschritt bis zur agentischen Pipeline. Auf Wunsch betreuen wir es nach der Übergabe weiter.', link: 'Beispiele ansehen' },
    ],
    costsTitle: 'Kosten',
    costs:
      'Abgerechnet wird nach Stunden, Arbeitstagen oder pauschal. Ausgangspunkt ist Ihr Budgetrahmen. Nach dem ersten Gespräch zeigen wir, was darin möglich ist, und Sie entscheiden nach jedem Arbeitsschritt, ob es weitergeht. Für die Software fallen keine Lizenzkosten an. Für die Nutzung von Sprachmodellen können je nach Umfang Kosten hinzukommen.',
    toolsTitle: 'Beispiele zum Ausprobieren',
    maturity: {
      use: 'Im Einsatz',
      rc: 'Release Candidate',
      preview: 'Forschungsvorschau',
      demo: 'Laufende Demo',
      secured: 'Bestand gesichert',
      experiment: 'Experiment',
    },
    toolOpen: 'Werkzeug öffnen',
    toolCode: 'Repository',
    toolVideo: 'Video',
    previewNote: 'Noch nicht fertig. Zum Ausprobieren gedacht, Ergebnisse bitte vor jeder Weiterverwendung prüfen.',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR mit dem Scan einer Druckseite links, der erkannten Transkription in der Mitte und dem Prüfbereich rechts.',
        solution: 'Erkennt den Text alter Drucke und Handschriften und lässt jede Lesung am Seitenbild prüfen.',
      },
      {
        title: 'teiCrafter',
        openLabel: 'Demo ansehen',
        alt: 'teiCrafter mit lesbarem Brieftext und markierten Personen und Orten links und dem Register der erwähnten Personen und Orte rechts.',
        solution: 'Eine Vorlage zum Forken, aus der Sie Ihr eigenes Werkzeug zur Erfassung von TEI-Daten entwickeln. Sie zeigt lesbaren Text statt Tags und prüft beim Speichern gegen das Schema.',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer mit einer Zeitleiste der Briefe eines Demonstrationsbestands, farbig nach Sprache, und Filtern am linken Rand.',
        solution: 'Zeigt Briefmetadaten aus CMIF als Karte, Zeitleiste und Netzwerk, damit sichtbar wird, wer wem wann von wo schrieb.',
      },
      {
        title: 'SZD-HTR',
        alt: 'Statistikansicht von SZD-HTR mit der Verteilung der Objekte nach Prüfstufe und den Gründen, aus denen Objekte zur Sichtung vorgemerkt sind.',
        solution: 'Transkribiert einen ganzen Nachlass und vermerkt an jedem Objekt, ob Maschine, Agent oder Mensch es geprüft hat.',
      },
      {
        title: 'Stefan-Zweig-Bibliographie',
        alt: 'Oberfläche der Stefan-Zweig-Bibliographie mit Suche über alle Einträge und einer Gliederung nach Werken, Rezeption und Ausgaben.',
        solution: 'Überführt eine Bibliographie aus einem stillgelegten Wiki in Forschungsdaten, in denen jede Angabe auf ihre Quellseite verweist.',
      },
    ],
    methodsTitle: 'Methoden und Frameworks',
    methodCaption: 'Generiert mit gpt-image',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping als Ablauf von Preparation über Exploration und Distillation zu Implementation, alle Schritte verbunden mit dem Project Knowledge, ein Review führt zum Promptotype aus Projektwissen, Daten und Artefakt.',
        solution: 'Promptotyping entwickelt Forschungsartefakte mit Coding-Agenten aus einer gepflegten Wissensbasis heraus.',
        links: ['Zur Methode', 'Repository', 'Video Teil 1', 'Video Teil 2', 'Beitrag auf L.I.S.A.'],
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault als Kette von Sources über Markdown representation und Distillates zu Assertions und Output, eine grüne Linie verbindet jede Aussage mit ihrer Quellstelle.',
        solution: 'Grounded Vault führt jede tragende Aussage eines Berichts über einen prüfbaren Anker bis zur Quellstelle.',
        links: ['Projektseite', 'Repository', 'Video'],
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline als Ablauf von Digitized Source über Transcription, Review and Correction und TEI zu Reading and Review, koordiniert von einem AI Agent mit Project Knowledge, die Prüfung liegt beim Editorial Team.',
        solution: 'Die Agentic Edition Pipeline führt Digitalisate über Transkription und Prüfung zu TEI und einer statischen Leseansicht.',
        links: ['Zum Video', 'Repository'],
      },
    ],
    aboutTitle: 'Wer wir sind',
    about:
      'Digital Humanities Craft ist ein Unternehmen aus der Forschung der Digitalen Geisteswissenschaften mit Sitz bei Graz. Wir entwickeln Forschungssoftware und digitale Editionen, unterrichten an Universitäten in Österreich und Deutschland und arbeiten als technischer Partner in Förderprojekten.',
    aboutLink: 'Team und Projekte',
    contactTitle: 'Ins Gespräch kommen',
    talkTitle: 'Problem oder Idee besprechen',
    talkText: 'Erzählen Sie uns, welches Problem Sie beschäftigt oder welche Idee Sie haben. Gemeinsam finden wir heraus, was funktioniert.',
    talkMail:
      'mailto:office@dhcraft.org?subject=Gespr%C3%A4ch%20zu%20fancy%20(research)%20tools&body=Worum%20geht%20es%2C%20ein%20Problem%2C%20eine%20Idee%2C%20ein%20Vorhaben%3F%0A%0AWelches%20Material%20oder%20welche%20Daten%20gibt%20es%3F%0A%0AWelcher%20Budgetrahmen%20ist%20vorgesehen%3F%0A',
    talkMailLabel: 'E-Mail schreiben',
    docsTitle: 'Material schicken',
    docsText:
      'Schicken Sie uns Material, Daten, Gedanken oder Ideen. Wir sehen sie uns an und besprechen mit Ihnen, was sich daraus machen lässt.',
    docsMail: 'mailto:office@dhcraft.org?subject=Material%20f%C3%BCr%20fancy%20(research)%20tools',
    docsMailLabel: 'Material senden',
  },
  en: {
    title: 'fancy (research) tools! | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools!',
    description:
      'Research tools built with coding agents, mostly running in the browser without a server. In workshops and training your team learns to develop them further.',
    ogLocale: 'en_GB',
    ogImageAlt:
      'Header of the page fancy (research) tools! with its title, the line Agentic engineering for everyone who works with knowledge, and the button Get in touch',
    heroLine: 'Agentic engineering for everyone who works with knowledge.',
    lede: 'fancy (research) tools are applications for working with knowledge, built with coding agents. Most are standalone static applications that run in the browser without a server, though other solutions are possible. In workshops and training your team learns to develop such tools further itself.',
    heroCta: 'Get in touch',
    heroOffer: 'What we offer',
    offerTitle: 'What we offer',
    offers: [
      { title: 'Learn', text: 'In workshops and training your team works with coding agents itself and learns to build and adapt tools like the ones shown below.', link: 'See formats' },
      { title: 'Develop together', text: 'We develop together with your team on your data, from a first prototype to the finished tool. The code and the knowledge base the coding agents work from stay with you.', link: 'Request a conversation' },
      { title: 'Develop on commission', text: 'We build the tool for you, from a small application for a single work step to an agentic pipeline. On request we look after it once it is handed over.', link: 'See examples' },
    ],
    costsTitle: 'Costs',
    costs:
      'We bill per hour, per working day or as a flat fee, starting from your budget. After the first conversation we show what is possible within it, and you decide after every work step whether to continue. There are no licence fees for the software. Costs for using language models may be added depending on the scope.',
    toolsTitle: 'Examples to try',
    maturity: {
      use: 'In use',
      rc: 'Release Candidate',
      preview: 'Research preview',
      demo: 'Live demo',
      secured: 'Data rescued',
      experiment: 'Experiment',
    },
    toolOpen: 'Open tool',
    toolCode: 'Repository',
    toolVideo: 'Video',
    previewNote: 'Not finished yet. Meant for trying out, please check results before reusing them.',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR with the scan of a printed page on the left, the recognised transcription in the middle and the review panel on the right.',
        solution: 'Recognises the text of early printed books and manuscripts and lets every reading be checked against the page image.',
      },
      {
        title: 'teiCrafter',
        openLabel: 'View demo',
        alt: 'teiCrafter with readable letter text and marked persons and places on the left and the register of the persons and places mentioned on the right.',
        solution: 'A template to fork and develop into your own tool for capturing TEI data. It shows readable text instead of tags and validates against the schema on saving.',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer with a timeline of the letters in a demonstration collection, coloured by language, and filters along the left edge.',
        solution: 'Shows letter metadata from CMIF as a map, a timeline and a network, so that it becomes visible who wrote to whom, when and from where.',
      },
      {
        title: 'SZD-HTR',
        alt: 'Statistics view of SZD-HTR with the distribution of objects by checking tier and the reasons why objects are marked for review.',
        solution: 'Transcribes an entire estate and records for every object whether a machine, an agent or a human has checked it.',
      },
      {
        title: 'Stefan Zweig Bibliography',
        alt: 'Interface of the Stefan Zweig Bibliography with a search across all entries and a breakdown by works, reception and editions.',
        solution: 'Moves a bibliography out of a decommissioned wiki into research data in which every statement points to its source page.',
      },
    ],
    methodsTitle: 'Methods and frameworks',
    methodCaption: 'Generated with gpt-image',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping as a sequence from Preparation via Exploration and Distillation to Implementation, every step connected to the Project Knowledge, with a review leading to the Promptotype made of project knowledge, data and artefact.',
        solution: 'Promptotyping develops research artefacts with coding agents out of a maintained knowledge base.',
        links: ['About the method', 'Repository', 'Video part 1', 'Video part 2', 'Article on L.I.S.A.'],
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault as a chain from Sources via Markdown representation and Distillates to Assertions and Output, with a green line connecting every statement to its source passage.',
        solution: 'Grounded Vault leads every load-bearing claim in a report through a verifiable anchor back to the source passage.',
        links: ['Project page', 'Repository', 'Video'],
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline as a sequence from Digitized Source via Transcription, Review and Correction and TEI to Reading and Review, coordinated by an AI Agent with Project Knowledge, with the review resting with the Editorial Team.',
        solution: 'The Agentic Edition Pipeline takes digital copies through transcription and review to TEI and a static reading view.',
        links: ['Watch the video', 'Repository'],
      },
    ],
    aboutTitle: 'Who we are',
    about:
      'Digital Humanities Craft is a company that grew out of research in the Digital Humanities, based near Graz. We develop research software and digital editions, teach at universities in Austria and Germany and work as a technical partner in funded projects.',
    aboutLink: 'Team and projects',
    contactTitle: 'Get in touch',
    talkTitle: 'Talk about a problem or idea',
    talkText: 'Tell us which problem is on your mind or which idea you have. Together we find out what works.',
    talkMail:
      'mailto:office@dhcraft.org?subject=Conversation%20about%20fancy%20(research)%20tools&body=What%20is%20it%20about%2C%20a%20problem%2C%20an%20idea%2C%20a%20project%3F%0A%0AWhat%20material%20or%20data%20is%20there%3F%0A%0AWhat%20budget%20is%20envisaged%3F%0A',
    talkMailLabel: 'Write an e-mail',
    docsTitle: 'Send material',
    docsText: 'Send us material, data, thoughts or ideas. We look through them and discuss with you what can be made of them.',
    docsMail: 'mailto:office@dhcraft.org?subject=Material%20for%20fancy%20(research)%20tools',
    docsMailLabel: 'Send material',
  },
};

const privacy = {
  de: {
    title: 'Datenschutz | fancy (research) tools!',
    description: 'Datenschutzerklärung der Seite fancy (research) tools! der Digital Humanities Craft OG.',
    h1: 'Datenschutz',
    note: '',
    date: 'Stand 1. Oktober 2026',
    // html, weil Absätze Zeilenumbrüche und Links tragen
    sections: [
      {
        title: 'Verantwortlich',
        paragraphs: [
          'Digital Humanities Craft OG<br>Hönigtaler Straße 1/1<br>8010 Kainbach bei Graz, Österreich<br><a href="mailto:office@dhcraft.org">office@dhcraft.org</a><br><a href="tel:+436781269242">+43 678 12 69 242</a>',
        ],
      },
      {
        title: 'Aufruf der Seite',
        paragraphs: [
          'Diese Seite setzt keine Cookies, verwendet keine Analyse- oder Trackingwerkzeuge und lädt keine Inhalte von Dritten. Schriften und Bilder liegen auf demselben Server wie die Seite.',
          'Die Seite wird über GitHub Pages ausgeliefert, einen Dienst der GitHub, Inc. in den USA. Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Adresse und Angaben zum Browser, um die Seite auszuliefern und den Betrieb abzusichern. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und verlässlichen Bereitstellung nach Art. 6 Abs. 1 lit. f DSGVO. Einzelheiten, auch zur Übermittlung in die USA, enthält die <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">Datenschutzerklärung von GitHub</a>.',
        ],
      },
      {
        title: 'Kontakt per E-Mail oder Telefon',
        paragraphs: [
          'Wenn Sie uns schreiben oder anrufen, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu bearbeiten und gegebenenfalls ein Angebot zu erstellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, bei allgemeinen Anfragen unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Wir speichern die Angaben, solange die Bearbeitung es erfordert und gesetzliche Aufbewahrungspflichten bestehen.',
        ],
      },
      {
        title: 'Verlinkte Werkzeuge und Seiten',
        paragraphs: [
          'Die Seite verlinkt Werkzeuge, Code und Videos auf anderen Servern, etwa bei GitHub und YouTube. Erst wenn Sie einem solchen Link folgen, gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
        ],
      },
      {
        title: 'Ihre Rechte',
        paragraphs: [
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dafür an die oben genannte Adresse. Beschwerden können Sie bei der <a href="https://www.dsb.gv.at/">Österreichischen Datenschutzbehörde</a> einbringen.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy | fancy (research) tools!',
    description: 'Privacy statement of the page fancy (research) tools! by Digital Humanities Craft OG.',
    h1: 'Privacy',
    note: 'The German version of this statement is the binding one.',
    date: 'As of 1 October 2026',
    sections: [
      {
        title: 'Controller',
        paragraphs: [
          'Digital Humanities Craft OG<br>Hönigtaler Straße 1/1<br>8010 Kainbach bei Graz, Austria<br><a href="mailto:office@dhcraft.org">office@dhcraft.org</a><br><a href="tel:+436781269242">+43 678 12 69 242</a>',
        ],
      },
      {
        title: 'Visiting the page',
        paragraphs: [
          'This page sets no cookies, uses no analytics or tracking tools and loads no content from third parties. Fonts and images are served from the same server as the page.',
          'The page is delivered by GitHub Pages, a service of GitHub, Inc. in the United States. When the page is requested, GitHub processes technically necessary data such as the IP address, time, requested address and browser details in order to deliver the page and secure its operation. The legal basis is our legitimate interest in secure and reliable delivery under Art. 6(1)(f) GDPR. Details, including the transfer to the United States, are given in the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privacy statement</a>.',
        ],
      },
      {
        title: 'Contact by e-mail or telephone',
        paragraphs: [
          'When you write to us or call us, we process your details to handle your enquiry and, where relevant, to prepare an offer. The legal basis is Art. 6(1)(b) GDPR, for general enquiries our legitimate interest under Art. 6(1)(f) GDPR. We keep the details as long as handling the enquiry requires and statutory retention obligations apply.',
        ],
      },
      {
        title: 'Linked tools and pages',
        paragraphs: [
          'The page links tools, code and videos on other servers, for example at GitHub and YouTube. Their privacy terms apply only once you follow such a link.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You have the right to access, rectification, erasure, restriction of processing, data portability and objection. Please contact the address above. You may lodge a complaint with the <a href="https://www.dsb.gv.at/">Austrian Data Protection Authority</a>.',
        ],
      },
    ],
  },
};

export const fancyPaths = {
  de: { page: '/fancy-research-tools/', privacy: '/fancy-research-tools/datenschutz/' },
  en: { page: '/en/fancy-research-tools/', privacy: '/en/fancy-research-tools/privacy/' },
};

export function getFancyContent(lang: Lang) {
  const t = text[lang];
  const shot = (base: string) => ({
    src: img(`${base}-1440.webp`),
    srcset: `${img(`${base}-720.webp`)} 720w, ${img(`${base}-1440.webp`)} 1440w`,
  });
  return {
    t,
    privacy: privacy[lang],
    ogImage: img(lang === 'de' ? 'og.jpg' : 'og-en.jpg'),
    aboutHref: lang === 'de' ? '/#team' : '/en/#team',
    tel: { href: 'tel:+436781269242', label: '+43 678 12 69 242' },
    address: 'office@dhcraft.org',
    offers: t.offers.map((o, i) => ({ ...o, id: offerIds[i], icon: offerIcons[i], href: i === 0 ? `${lang === 'de' ? '/' : '/en/'}${offerHrefs[i]}` : offerHrefs[i] })),
    tools: toolsBase.map((b, i) => ({
      ...b,
      ...t.tools[i],
      ...shot(b.img),
      maturityClass: maturityClass[b.maturity],
      maturityLabel: t.maturity[b.maturity],
    })),
    methods: methodsBase.map((b, i) => ({
      ...b,
      ...t.methods[i],
      src: img(`${b.img}-720.webp`),
      srcset: `${img(`${b.img}-720.webp`)} 720w, ${img(`${b.img}-1440.webp`)} 1440w`,
      maturityClass: maturityClass[b.maturity],
      maturityLabel: t.maturity[b.maturity],
      links: b.links.map((href, j) => ({ href, label: t.methods[i].links[j] })),
    })),
  };
}
