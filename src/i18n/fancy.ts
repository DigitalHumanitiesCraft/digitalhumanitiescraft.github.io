// Inhalte der Unterseite "fancy (research) tools & workflows". Die Wissensbasis mit Entscheidungen zu Wortlaut,
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
  experiment: 'm-preview',
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
    // The deep link opens the editor with its one public example, without it the editor starts empty.
    open: 'https://dhcraft.org/teiCrafter/editor.html#example=szd',
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

// Every method links its page, its repository and one video, in this order and only where they exist.
const methodsBase: { id: 'm-pt' | 'm-gv' | 'm-sbv' | 'm-aep'; maturity: Maturity; page?: string; code: string; video?: string }[] = [
  {
    id: 'm-pt',
    maturity: 'use',
    page: 'https://dhcraft.org/Promptotyping/',
    code: 'https://github.com/DigitalHumanitiesCraft/Promptotyping',
    video: 'https://youtu.be/8sUe4Jkh3uQ',
  },
  {
    id: 'm-gv',
    maturity: 'use',
    page: 'https://dhcraft.org/grounded-vault/',
    code: 'https://github.com/DigitalHumanitiesCraft/grounded-vault',
    video: 'https://youtu.be/K1sZBOUSZ_0',
  },
  {
    id: 'm-sbv',
    maturity: 'use',
    page: 'https://chpollin.github.io/second-brain-vault/',
    code: 'https://github.com/chpollin/second-brain-vault',
  },
  {
    id: 'm-aep',
    maturity: 'preview',
    code: 'https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline',
    video: 'https://youtu.be/krL-xMxTa_c',
  },
];

/**
 * The advert video in the hero, accepted by the operator on 2026-11-10. `youtube` holds the address of
 * the upload once it exists and adds a link below the video. The file, its poster and its captions lie in
 * public/fancy-research-tools/video/ and are served by the site, so playing it makes no third-party request.
 */
export const fancyAdvert = {
  // false takes the video off the page. The hero then holds its text alone, as before 2026-11-10.
  show: true,
  youtube: '',
  file: '/fancy-research-tools/video/fancy-research-tools-workflows.mp4',
  poster: '/fancy-research-tools/video/fancy-research-tools-workflows-poster.webp',
  captions: '/fancy-research-tools/video/fancy-research-tools-workflows.en.vtt',
};

const offerIcons: FancyIcon[] = ['learn', 'together', 'build'];
const offerIds = ['lernen', 'gemeinsam', 'bauen'];
const offerHrefs = ['#excellence', '#kontakt', '#werkzeuge'];

const text = {
  de: {
    title: 'fancy (research) tools & workflows | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools & workflows',
    description:
      'Forschungswerkzeuge und Workflows, mit Coding-Agenten gebaut. In Workshops und Trainings lernt Ihr Team, sie selbst weiterzuentwickeln.',
    ogLocale: 'de_AT',
    ogImageAlt:
      'Kopfbereich der Seite fancy (research) tools & workflows mit dem Titel und der Zeile Agentic Engineering für alle, die mit Wissen arbeiten',
    heroLine: 'Agentic Engineering für alle, die mit Wissen arbeiten.',
    lede: 'fancy (research) tools & workflows sind Anwendungen und Workflows für die Arbeit mit Wissen, entwickelt mit Coding-Agenten. Die Anwendungen laufen meist statisch und ohne Server im Browser, andere Lösungen sind möglich. In Workshops und Trainings lernt Ihr Team, sie selbst weiterzuentwickeln.',
    advertLabel: 'Video zu fancy (research) tools & workflows, 88 Sekunden, englisch gesungen',
    advertCaptions: 'Englischer Liedtext',
    advertYoutube: 'Auf YouTube ansehen',
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
    toolOpen: 'Demo öffnen',
    toolCode: 'Repository',
    toolVideo: 'Video',
    methodPage: 'Methodenseite',
    previewNote: 'Noch nicht fertig und zum Ausprobieren gedacht. Ergebnisse sind vor jeder Weiterverwendung zu prüfen.',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR mit dem Scan einer Druckseite links, der erkannten Transkription in der Mitte und dem Prüfbereich rechts.',
        solution: 'Erkennt den Text alter Drucke und Handschriften und stellt jede Lesung zur Prüfung neben das Seitenbild.',
        licence: 'CC BY 4.0',
      },
      {
        title: 'teiCrafter',
        alt: 'teiCrafter mit einem Brief von Stefan Zweig aus dem Jahr 1901. Links steht der lesbare Brieftext Zeile für Zeile, rechts das Faksimile der Briefseite.',
        solution: 'Eine Vorlage zum Forken, aus der Sie Ihr eigenes Werkzeug zur Erfassung von TEI-Daten entwickeln. Sie zeigt lesbaren Text statt Tags und prüft beim Speichern gegen das Schema.',
        licence: 'Code MIT',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer mit der Karte der Korrespondenz des Hugo Schuchardt Archivs. Kreise über Europa zeigen die Zahl der Briefe je Absendeort, eine Legende die Briefsprachen, am linken Rand stehen Zeitraum und Sprachfilter.',
        solution: 'Zeigt Briefmetadaten aus CMIF als Karte, Zeitleiste und Netzwerk, damit sichtbar wird, wer wem wann von wo schrieb.',
        licence: 'Code MIT, Beispieldaten CC BY 4.0',
      },
      {
        title: 'SZD-HTR',
        alt: 'SZD-HTR mit einem handschriftlichen Brief von Stefan Zweig aus dem Juni 1939. Links steht das Faksimile, rechts die Transkription Zeile für Zeile, darunter der Vermerk Geprüft.',
        solution: 'Transkription und Prüfung des Nachlasses von Stefan Zweig. Das Werkzeug vermerkt an jedem Objekt, ob es nur maschinell transkribiert, von einem Agenten geprüft oder von Menschen geprüft ist.',
        licence: 'Code MIT',
      },
      {
        title: 'Stefan-Zweig-Bibliographie',
        alt: 'Startseite der Stefan-Zweig-Bibliographie mit Suchfeld, einer Übersicht zum Aufbau der Daten aus Wiki-Seiten und Publikationen und der Gliederung in Abschnitte von den Gesammelten Werken bis zur Sekundärliteratur.',
        solution: 'Überführt eine Bibliographie aus einem stillgelegten Wiki in Forschungsdaten, in denen jede Angabe auf ihre Quellseite verweist.',
        licence: 'Code MIT, Daten CC BY 4.0',
      },
    ],
    methodsTitle: 'Methoden und Frameworks',
    methodsIntro: 'Die Werkzeuge oben entstehen mit diesen Methoden und Workflows.',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping als Kreis der vier Arbeitsformen Preparation, Exploration, Distillation und Implementation, den Forschende leiten und dessen Ergebnis sie prüfen. Jede Runde ergibt einen Promptotype aus Artefakt, Projektwissen und Forschungsdaten, und was Prüfung und Gebrauch zeigen, geht als Wissenskuration zurück in die Arbeit.',
        solution: 'Promptotyping entwickelt Forschungsartefakte mit Coding-Agenten aus einer gepflegten Wissensbasis heraus.',
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault als Kette von Output über Assertions, Destillate und Markdown-Fassungen zu den Quellen, daneben die drei Prüfungen Validation durch ein Skript, Machine review durch ein zweites LLM und Verification durch eine Person, darunter die Stufen grounded, validated und verified.',
        solution: 'Grounded Vault führt jede tragende Aussage eines Berichts über einen prüfbaren Anker bis zur Quellstelle.',
      },
      {
        title: 'Second Brain Vault',
        alt: 'Second Brain Vault mit drei Spalten. Die Agentensitzung liest Wissen und Regeln aus dem Vault und aus dem Projekt-Repository, arbeitet und kuratiert, und schreibt in beide zurück. Das Repo-Verzeichnis verbindet jedes Projekt mit seinem Ordner knowledge.',
        solution: 'Second Brain Vault ist eine Vorlage für einen Obsidian-Vault, den man gemeinsam mit einem KI-Agenten pflegt, mit Regeln, Verfahren und Prüfungen, die den Bestand konsistent halten.',
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline in einer Reihe von den Bildern über Transkription, Qualität und TEI zu Prüfung und Freigabe. Die ersten vier Schritte führt ein KI-Agent mit dem Projektwissen der Edition aus, Prüfung und Freigabe liegen beim Redaktionsteam, und Korrekturen gehen zurück in die Daten. Das Ergebnis sind TEI-XML und eine statische Leseansicht.',
        solution: 'Die Agentic Edition Pipeline führt Digitalisate über Transkription und Prüfung zu TEI und einer statischen Leseansicht.',
      },
    ],
    contactTitle: 'Ins Gespräch kommen',
    talkTitle: 'Problem oder Idee besprechen',
    talkText: 'Erzählen Sie uns, welches Problem Sie beschäftigt oder welche Idee Sie haben. Gemeinsam finden wir heraus, was funktioniert.',
    talkMail:
      'mailto:office@dhcraft.org?subject=Gespr%C3%A4ch%20zu%20fancy%20(research)%20tools%20%26%20workflows&body=Worum%20geht%20es%2C%20ein%20Problem%2C%20eine%20Idee%2C%20ein%20Vorhaben%3F%0A%0AWelches%20Material%20oder%20welche%20Daten%20gibt%20es%3F%0A%0AWelcher%20Budgetrahmen%20ist%20vorgesehen%3F%0A',
    talkMailLabel: 'E-Mail schreiben',
    docsTitle: 'Material schicken',
    docsText:
      'Schicken Sie uns Material, Daten, Gedanken oder Ideen. Wir sehen sie uns an und besprechen mit Ihnen, was sich daraus machen lässt.',
    docsMail: 'mailto:office@dhcraft.org?subject=Material%20f%C3%BCr%20fancy%20(research)%20tools%20%26%20workflows',
    docsMailLabel: 'Material senden',
  },
  en: {
    title: 'fancy (research) tools & workflows | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools & workflows',
    description:
      'Research tools and workflows built with coding agents. In workshops and training your team learns to develop them further.',
    ogLocale: 'en_GB',
    ogImageAlt:
      'Header of the page fancy (research) tools & workflows with its title and the line Agentic engineering for everyone who works with knowledge',
    heroLine: 'Agentic engineering for everyone who works with knowledge.',
    lede: 'fancy (research) tools & workflows are applications and workflows for working with knowledge, built with coding agents. Most of the applications run statically in the browser without a server, though other solutions are possible. In workshops and training your team learns to develop them further itself.',
    advertLabel: 'Video about fancy (research) tools & workflows, 88 seconds, sung in English',
    advertCaptions: 'English lyrics',
    advertYoutube: 'Watch on YouTube',
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
    toolOpen: 'Open demo',
    toolCode: 'Repository',
    toolVideo: 'Video',
    methodPage: 'Method page',
    previewNote: 'Not finished yet and meant for trying out. Results need checking before any reuse.',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR with the scan of a printed page on the left, the recognised transcription in the middle and the review panel on the right.',
        solution: 'Recognises the text of early printed books and manuscripts and sets every reading beside the page image for checking.',
        licence: 'CC BY 4.0',
      },
      {
        title: 'teiCrafter',
        alt: 'teiCrafter with a letter by Stefan Zweig of 1901. The readable letter text stands line by line on the left, the facsimile of the page on the right.',
        solution: 'A template to fork and develop into your own tool for capturing TEI data. It shows readable text instead of tags and validates against the schema on saving.',
        licence: 'Code MIT',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer with the map of the correspondence of the Hugo Schuchardt Archiv. Circles across Europe show the number of letters per place of sending, a legend the languages of the letters, and the left edge holds the period and language filters.',
        solution: 'Shows letter metadata from CMIF as a map, a timeline and a network, so that it becomes visible who wrote to whom, when and from where.',
        licence: 'Code MIT, sample data CC BY 4.0',
      },
      {
        title: 'SZD-HTR',
        alt: 'SZD-HTR with a handwritten letter by Stefan Zweig of June 1939. The facsimile stands on the left, the transcription line by line on the right, and the note Geprüft, checked, below.',
        solution: 'Transcription and review of the Stefan Zweig estate. The tool records for every object whether it is machine-transcribed only, checked by an agent or checked by a human.',
        licence: 'Code MIT',
      },
      {
        title: 'Stefan Zweig Bibliography',
        alt: 'Start page of the Stefan Zweig Bibliography with a search field, an overview of how the data is built from wiki pages and publications, and the sections from Collected Works to Secondary Literature.',
        solution: 'Moves a bibliography out of a decommissioned wiki into research data in which every statement points to its source page.',
        licence: 'Code MIT, data CC BY 4.0',
      },
    ],
    methodsTitle: 'Methods and frameworks',
    methodsIntro: 'The tools above are built with these methods and workflows.',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping as a cycle of the four forms of work Preparation, Exploration, Distillation and Implementation, which researchers direct and whose result they validate. Each round yields a promptotype made of artefact, project knowledge and research data, and what checking and use reveal returns to the work as knowledge curation.',
        solution: 'Promptotyping develops research artefacts with coding agents out of a maintained knowledge base.',
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault as a chain from Output via Assertions, Distillates and Markdown representations to the Sources, beside it the three checks Validation by a script, Machine review by a second LLM and Verification by a person, below it the stages grounded, validated and verified.',
        solution: 'Grounded Vault leads every load-bearing claim in a report through a verifiable anchor back to the source passage.',
      },
      {
        title: 'Second Brain Vault',
        alt: 'Second Brain Vault in three columns. The agent session reads knowledge and rules from the vault and from the project repository, works and curates, and writes back to both. The Repo Directory links each project to its knowledge folder.',
        solution: 'Second Brain Vault is a template for an Obsidian vault maintained together with an AI agent, with rules, procedures and checks that keep it consistent.',
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline in one row from images via transcription, quality and TEI to review and release. An AI agent runs the first four steps with the project knowledge of the edition, review and release rest with the editorial team, and corrections return to the data. The result is TEI XML and a static reading view.',
        solution: 'The Agentic Edition Pipeline takes digital copies through transcription and review to TEI and a static reading view.',
      },
    ],
    contactTitle: 'Get in touch',
    talkTitle: 'Talk about a problem or idea',
    talkText: 'Tell us which problem is on your mind or which idea you have. Together we find out what works.',
    talkMail:
      'mailto:office@dhcraft.org?subject=Conversation%20about%20fancy%20(research)%20tools%20%26%20workflows&body=What%20is%20it%20about%2C%20a%20problem%2C%20an%20idea%2C%20a%20project%3F%0A%0AWhat%20material%20or%20data%20is%20there%3F%0A%0AWhat%20budget%20is%20envisaged%3F%0A',
    talkMailLabel: 'Write an e-mail',
    docsTitle: 'Send material',
    docsText: 'Send us material, data, thoughts or ideas. We look through them and discuss with you what can be made of them.',
    docsMail: 'mailto:office@dhcraft.org?subject=Material%20for%20fancy%20(research)%20tools%20%26%20workflows',
    docsMailLabel: 'Send material',
  },
};

const privacy = {
  de: {
    title: 'Datenschutz | fancy (research) tools & workflows',
    description: 'Datenschutzerklärung der Seite fancy (research) tools & workflows der Digital Humanities Craft OG.',
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
    title: 'Privacy | fancy (research) tools & workflows',
    description: 'Privacy statement of the page fancy (research) tools & workflows by Digital Humanities Craft OG.',
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
      maturityClass: maturityClass[b.maturity],
      maturityLabel: t.maturity[b.maturity],
    })),
  };
}
