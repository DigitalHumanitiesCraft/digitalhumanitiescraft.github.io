// Inhalte der Dienstleistungsseite "fancy (research) tools!", wortgleich übernommen aus dem Repo
// DigitalHumanitiesCraft/fancy-research-tools (index.html, en/index.html, datenschutz/, en/privacy/).
// Begründungen für Wortlaut, Reifegrade und Bilder stehen dort in knowledge/specification.md
// (ADR-001 bis ADR-013); Änderungen am Text zuerst dort klären.

import type { Lang } from './content';

/** Innenleben der 24er-Icons (Pfade aus der Quellseite), gerendert per set:html in ein <svg> */
export const fancyIcons = {
  llm: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.5 6.5 2.5 2.5M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5"/>',
  review: '<path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  overview: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
  readable: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h6M7 16h9"/>',
  browser: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  evidence: '<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h5"/>',
  learn: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
  together:
    '<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="8" r="3"/><path d="M2.5 20c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14 15.7c.8-.2 1.6-.2 2.5-.2 2.7 0 4.7 1.5 5.5 4.5"/>',
  build: '<path d="M14.5 4.2a5 5 0 0 0-5.3 6.6L3.6 16.4a2 2 0 0 0 2.8 2.8l5.6-5.6a5 5 0 0 0 6.6-5.3l-3 3-2.8-.4-.4-2.8z"/>',
  requirements: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  tests: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 14h9"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>',
  formats: '<path d="M3 7l9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>',
  control: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/>',
  handover: '<path d="M4 12h12M12 6l6 6-6 6"/><path d="M20 4v16"/>',
};

export type FancyIcon = keyof typeof fancyIcons;

/** Fähigkeiten der Werkzeuge; llmLocal teilt das Icon mit llm, trägt aber den Hinweis auf die Modellwahl */
type Trait = 'llm' | 'llmLocal' | 'review' | 'overview' | 'readable' | 'browser' | 'evidence';
const traitIcon: Record<Trait, FancyIcon> = {
  llm: 'llm',
  llmLocal: 'llm',
  review: 'review',
  overview: 'overview',
  readable: 'readable',
  browser: 'browser',
  evidence: 'evidence',
};

/** Reifegrad: das Wort trägt die Bedeutung, die Farbklasse wiederholt sie nur */
type Maturity = 'use' | 'rc' | 'preview' | 'demo' | 'secured' | 'experiment';
const maturityClass: Record<Maturity, string> = {
  use: 'm-use',
  rc: 'm-rc',
  preview: 'm-preview',
  demo: 'm-preview',
  secured: 'm-preview',
  experiment: 'm-experiment',
};

const img = (name: string) => `/fancy-research-tools/img/${name}`;

const toolsBase: { id: string; img: string; open: string; code: string; evidence: string; maturity: Maturity; traits: Trait[] }[] = [
  {
    id: 't-coocr',
    img: 'coocr-htr',
    open: 'https://dhcraft.org/co-ocr-htr/',
    code: 'https://github.com/DigitalHumanitiesCraft/co-ocr-htr',
    evidence: 'https://dhcraft.org/co-ocr-htr/knowledge.html',
    maturity: 'preview',
    traits: ['llmLocal', 'review', 'browser'],
  },
  {
    id: 't-tei',
    img: 'teicrafter',
    open: 'https://dhcraft.org/teiCrafter/editor.html',
    code: 'https://github.com/DigitalHumanitiesCraft/teiCrafter',
    evidence: 'https://github.com/DigitalHumanitiesCraft/teiCrafter/blob/main/knowledge/INDEX.md',
    maturity: 'preview',
    traits: ['llmLocal', 'readable', 'review', 'browser'],
  },
  {
    id: 't-corresp',
    img: 'correspexplorer',
    open: 'https://dhcraft.org/CorrespExplorer/',
    code: 'https://github.com/DigitalHumanitiesCraft/CorrespExplorer',
    evidence: 'https://dhcraft.org/CorrespExplorer/vault.html',
    maturity: 'demo',
    traits: ['overview', 'browser'],
  },
  {
    id: 't-szd',
    img: 'szd-htr',
    open: 'https://chpollin.github.io/szd-htr-ocr-pipeline/',
    code: 'https://github.com/chpollin/szd-htr-ocr-pipeline',
    evidence: 'https://github.com/chpollin/szd-htr-ocr-pipeline/blob/main/knowledge/index.md',
    maturity: 'experiment',
    traits: ['llm', 'overview', 'review'],
  },
  {
    id: 't-klawiter',
    img: 'klawiter',
    open: 'https://chpollin.github.io/klawiter-rescue/',
    code: 'https://github.com/chpollin/klawiter-rescue',
    evidence: 'https://github.com/chpollin/klawiter-rescue/blob/main/knowledge/status.md',
    maturity: 'secured',
    traits: ['llm', 'overview', 'evidence'],
  },
];

const methodsBase: { id: string; img: string; maturity: Maturity; links: string[] }[] = [
  {
    id: 'm-pt',
    img: 'method-promptotyping',
    maturity: 'use',
    links: [
      'https://dhcraft.org/Promptotyping/',
      'https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin',
      'https://github.com/DigitalHumanitiesCraft/Promptotyping',
    ],
  },
  {
    id: 'm-gv',
    img: 'method-grounded-vault',
    maturity: 'use',
    links: [
      'https://dhcraft.org/grounded-vault/',
      'https://github.com/DigitalHumanitiesCraft/grounded-vault',
      'https://github.com/DigitalHumanitiesCraft/grounded-vault/tree/main/knowledge',
    ],
  },
  {
    id: 'm-aep',
    img: 'method-agentic-edition-pipeline',
    maturity: 'preview',
    links: [
      'https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline',
      'https://youtu.be/krL-xMxTa_c',
      'https://github.com/DigitalHumanitiesCraft/agentic-edition-pipeline/blob/main/knowledge/00_INDEX.md',
    ],
  },
  {
    id: 'm-rmc',
    img: 'method-research-mission-control',
    maturity: 'rc',
    links: [
      'https://dhcraft.org/research-mission-control/',
      'https://github.com/DigitalHumanitiesCraft/research-mission-control',
      'https://github.com/DigitalHumanitiesCraft/research-mission-control/blob/main/knowledge/INDEX.md',
    ],
  },
];

const offerIcons: FancyIcon[] = ['learn', 'together', 'build'];
const offerIds = ['lernen', 'gemeinsam', 'bauen'];
const offerHrefs = ['#excellence', '#kontakt', '#werkzeuge'];
const claimIcons: FancyIcon[] = ['requirements', 'tests', 'code', 'formats', 'control', 'handover'];
const legendOrder: Trait[] = ['llm', 'review', 'overview', 'readable', 'browser', 'evidence'];

const text = {
  de: {
    title: 'fancy (research) tools! | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools!',
    description:
      'Agentic Engineering von Digital Humanities Craft. Wir bauen mit Frontier-Sprachmodellen und Coding-Agenten Werkzeuge, Workflows und Wissensbasen für Forschung, Kultureinrichtungen, Unternehmen und Verwaltung, für Sie, mit Ihnen oder im Training.',
    ogLocale: 'de_AT',
    ogImageAlt:
      'Kopfbereich der Seite fancy (research) tools! mit dem Titel, der Zeile Agentic Engineering für alle, die mit Wissen arbeiten, und dem Knopf Projekt anfragen',
    heroLine: 'Agentic Engineering für alle, die mit Wissen arbeiten.',
    lede: 'Wir bauen mit Frontier-Sprachmodellen und Coding-Agenten Werkzeuge, Workflows und Wissensbasen für Ihren Arbeitsablauf, für Sie, mit Ihnen oder in einem Training. Jedes Ergebnis wird an Ihren Daten geprüft und so dokumentiert, dass andere daran weiterarbeiten können.',
    heroCta: 'Projekt anfragen',
    heroOffer: 'Unser Angebot',
    offerTitle: 'Angebot',
    offers: [
      { title: 'Lernen', text: 'Ihr Team lernt in Workshops und Intensivtagen, selbst mit Coding-Agenten und Wissensbasen zu arbeiten.', link: 'Formate ansehen' },
      { title: 'Gemeinsam bauen', text: 'Wir entwickeln mit Ihrem Team an Ihren Daten. Die Wissensbasis bleibt bei Ihnen, damit Sie selbst weiterbauen können.', link: 'Gespräch anfragen' },
      { title: 'Für Sie bauen', text: 'Wir bauen das Werkzeug, von der kleinen Anwendung für einen Arbeitsschritt bis zur Pipeline mit mehreren Agenten.', link: 'Beispiele ansehen' },
    ],
    modelsTitle: 'Modelle und Daten',
    models: [
      'Frontier-Sprachmodelle setzen wir an zwei Stellen ein. Mit Coding-Agenten bauen wir Ihr Werkzeug, und im fertigen Werkzeug übernehmen Modelle einzelne Arbeitsschritte wie Texterkennung, Auszeichnung oder das Erzeugen von Daten.',
      'In beiden Fällen kommen kommerzielle wie offene Modelle in Frage, bis hin zum Betrieb auf eigener Hardware. Welches Modell und welchen Zugang ein Projekt nutzt, entscheiden wir mit Ihnen nach Art der Daten. Zum Bauen genügen meist einige Beispieldateien, die sich auch anonymisieren lassen.',
    ],
    costsTitle: 'Kosten',
    costs:
      'Abgerechnet wird so, wie es zur Aufgabe passt, nach Stunden, als einzelne Arbeitstage oder als Pauschale. Nennen Sie uns Ihren Rahmen. Nach der Sichtung sagen wir, was dafür möglich ist, und Sie entscheiden nach jedem Schritt, ob es weitergeht.',
    costsList: [
      'Coding-Agenten schreiben den Großteil des Codes, bezahlt wird die Zeit für Konzept, Prüfung und Anpassung.',
      'Es fallen keine Lizenzkosten an, und Sie erhalten den Quellcode.',
      'Viele Werkzeuge laufen im Browser und brauchen keinen eigenen Server.',
      'Ein kleiner Rahmen bedeutet kleineren Umfang, nicht weniger Prüfung.',
    ],
    toolsTitle: 'Werkzeuge zum Anpassen',
    legendLabel: 'Zeichenerklärung',
    traits: {
      llm: 'LLM-gestützt',
      llmLocal: 'LLM-gestützt, Modell wählbar bis zum lokalen Modell',
      review: 'Fachliche Prüfung im Werkzeug',
      overview: 'Überblick über den ganzen Bestand',
      readable: 'Lesbarer Text statt Tags',
      browser: 'Läuft im Browser ohne eigenen Server',
      evidence: 'Belege bis zur Quelle',
    },
    maturity: {
      use: 'Im Einsatz',
      rc: 'Release Candidate',
      preview: 'Forschungsvorschau',
      demo: 'Laufende Demo',
      secured: 'Bestand gesichert',
      experiment: 'Experiment',
    },
    toolOpen: 'Werkzeug öffnen',
    toolCode: 'Code',
    toolEvidence: 'Belege',
    toolRequest: 'Anpassen anfragen',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR mit dem Scan einer Druckseite links, der erkannten Transkription in der Mitte und dem Prüfbereich rechts.',
        solution: 'Erkennt den Text alter Drucke und Handschriften und lässt jede Lesung am Seitenbild prüfen.',
        mail: 'mailto:office@dhcraft.org?subject=coOCR%2FHTR%20f%C3%BCr%20unser%20Projekt',
      },
      {
        title: 'teiCrafter',
        alt: 'teiCrafter mit lesbarem Brieftext und markierten Personen und Orten links und dem Register der erwähnten Personen und Orte rechts.',
        solution: 'Bearbeitet TEI-XML als lesbaren Text und prüft beim Speichern gegen das Schema.',
        mail: 'mailto:office@dhcraft.org?subject=teiCrafter%20f%C3%BCr%20unser%20Projekt',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer mit einer Zeitleiste der Briefe eines Demonstrationsbestands, farbig nach Sprache, und Filtern am linken Rand.',
        solution: 'Zeigt Briefmetadaten aus CMIF als Karte, Zeitleiste und Netzwerk, damit sichtbar wird, wer wem wann von wo schrieb.',
        mail: 'mailto:office@dhcraft.org?subject=CorrespExplorer%20f%C3%BCr%20unser%20Projekt',
      },
      {
        title: 'SZD-HTR',
        alt: 'Statistikansicht von SZD-HTR mit der Verteilung der Objekte nach Prüfstufe und den Gründen, aus denen Objekte zur Sichtung vorgemerkt sind.',
        solution: 'Transkribiert einen ganzen Nachlass und vermerkt an jedem Objekt, ob Maschine, Agent oder Mensch es geprüft hat.',
        mail: 'mailto:office@dhcraft.org?subject=SZD-HTR%20f%C3%BCr%20unser%20Projekt',
      },
      {
        title: 'Stefan-Zweig-Bibliographie',
        alt: 'Oberfläche der Stefan-Zweig-Bibliographie mit Suche über alle Einträge und einer Gliederung nach Werken, Rezeption und Ausgaben.',
        solution: 'Rettet eine Bibliographie aus einem stillgelegten Wiki in Forschungsdaten, in denen jede Angabe ihre Quellseite behält.',
        mail: 'mailto:office@dhcraft.org?subject=Bibliographie-Rettung%20f%C3%BCr%20unser%20Projekt',
      },
    ],
    methodsTitle: 'Methoden und Frameworks',
    methodCaption: 'Generiert mit gpt-image',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping als Ablauf von Preparation über Exploration und Distillation zu Implementation, alle Schritte verbunden mit dem Project Knowledge, ein Review führt zum Promptotype aus Projektwissen, Daten und Artefakt.',
        solution: 'Promptotyping entwickelt Forschungsartefakte mit KI-Agenten aus einer gepflegten Wissensbasis heraus.',
        links: ['Zur Methode', 'Beitrag auf L.I.S.A.', 'Repository'],
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault als Kette von Sources über Markdown representation und Distillates zu Assertions und Output, eine grüne Linie verbindet jede Aussage mit ihrer Quellstelle.',
        solution: 'Grounded Vault führt jede tragende Aussage eines Berichts über einen prüfbaren Anker bis zur Quellstelle.',
        links: ['Projektseite', 'Vorlage', 'Belege'],
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline als Ablauf von Digitized Source über Transcription, Review and Correction und TEI zu Reading and Review, koordiniert von einem AI Agent mit Project Knowledge, die Prüfung liegt beim Editorial Team.',
        solution: 'Die Agentic Edition Pipeline führt Digitalisate über Transkription und Prüfung zu TEI und einer statischen Leseansicht.',
        links: ['Vorlage', 'Video', 'Belege'],
      },
      {
        title: 'Research Mission Control',
        alt: 'Research Mission Control mit dem User an der Spitze, einem Research Orchestrator, einem Operational Orchestrator mit Specialist Agents und einem Independent Verification Agent, der an den User berichtet, alle um ein gemeinsames Repository.',
        solution: 'Research Mission Control verteilt Klären, Umsetzen und Prüfen auf KI-Agenten an einem gemeinsamen Repository.',
        links: ['Zur Methode', 'Repository', 'Belege'],
      },
    ],
    qualityTitle: 'Qualität',
    // html, weil "Übergabe" Inline-Links trägt
    claims: [
      {
        title: 'Dokumentierte Anforderungen',
        html: 'Nach der Methode Promptotyping stehen Anforderungen, Datenmodell und Entwurfsentscheidungen in einer Wissensbasis im Repository und werden mit dem Code versioniert. Wer später etwas ändert, findet dort die Gründe.',
      },
      {
        title: 'Tests mit Ihrem Material',
        html: 'Wir testen automatisiert mit Beispieldateien aus Ihrem Bestand. Verändert ein Werkzeug Ihre Dateien, prüfen die Tests, dass beim Speichern nichts verloren geht und das Ergebnis gegen Ihr Schema gültig bleibt. Testläufe und bekannte Grenzen stehen im Projektjournal.',
      },
      {
        title: 'Geprüfter Code',
        html: 'Coding-Agenten schreiben den Großteil des Codes. Vor der Übergabe sucht eine eigene Prüfrunde gezielt nach den Fehlern, die bei generiertem Code gehäuft auftreten, etwa ungeschützter Ausgabe von Daten, still verschluckten Fehlern und Funktionen, die nur die Dokumentation beschreibt. Die zentralen Arbeitsabläufe testen wir im Browser.',
      },
      {
        title: 'Offene Formate',
        html: 'Ergebnisse liegen in offenen Formaten vor, je nach Material TEI, PAGE XML, METS/MODS, JSON-LD oder CSV. Bilder binden die Werkzeuge über IIIF ein. So bleiben Ihre Daten auch ohne das Werkzeug lesbar und lassen sich in andere Systeme und Archive übernehmen.',
      },
      {
        title: 'Fachliche Kontrolle',
        html: 'Arbeitet ein Werkzeug mit Large Language Models, bleibt erkennbar, was ein Modell erzeugt hat, was ein Agent geprüft hat und was Ihre Fachleute bestätigt haben. Als gesichert gilt nur, was Ihre Fachleute bestätigt haben.',
      },
      {
        title: 'Übergabe',
        html: 'Sie erhalten den vollständigen Quellcode und eine Wissensbasis, mit der Ihr Team, eine externe Entwicklerin oder ein KI-Assistent weiterarbeiten kann. Für Forschungsdaten bieten wir die Langzeitarchivierung im zertifizierten Repositorium <a href="https://gams.uni-graz.at/">GAMS</a> an, über einen Rahmenvertrag mit dem <a href="https://digital-humanities.uni-graz.at/de/">Institut für Digitale Geisteswissenschaften</a> der Universität Graz.',
      },
    ],
    aboutTitle: 'Wer wir sind',
    about:
      'Digital Humanities Craft ist ein Unternehmen aus der Forschung der Digitalen Geisteswissenschaften mit Sitz bei Graz. Wir entwickeln Forschungssoftware und digitale Editionen, unterrichten an Universitäten in ganz Europa und arbeiten als Partner in Förderprojekten.',
    aboutLink: 'Team und Projekte',
    clientsTitle: 'Institutionen, für die wir arbeiten',
    clients: [
      'Yale University',
      'Kunsthistorisches Museum Wien',
      'Österreichische Nationalbibliothek',
      'Österreichische Akademie der Wissenschaften',
      'Zentralbibliothek Zürich',
      'Literaturarchiv Salzburg',
      'Universität Salzburg',
      'Universität Graz',
      'Max-Planck-Institut für Rechtsgeschichte und Rechtstheorie',
      'Klassik Stiftung Weimar',
      'Berlin-Brandenburgische Akademie der Wissenschaften',
      'mdw Wien',
    ],
    processTitle: 'Vorgehen',
    steps: [
      { title: 'Erstgespräch und Sichtung', text: 'Sie zeigen uns den Arbeitsablauf mit echten Dateien, wir sagen, was in Ihrem Rahmen möglich ist.' },
      { title: 'Anforderungen und Angebot', text: 'Ziel, Daten und Prüfkriterien halten wir schriftlich fest.' },
      { title: 'Prototyp an Ihren Daten', text: 'Sie erproben eine erste lauffähige Fassung im Arbeitsalltag.' },
      { title: 'Prüfung und Abnahme', text: 'Ihre Fachleute prüfen gegen die vereinbarten Kriterien.' },
      { title: 'Übergabe und Betreuung', text: 'Sie erhalten Werkzeug, Quellcode und Dokumentation.' },
    ],
    fitYesTitle: 'Passt gut',
    fitYes: [
      'Archive, Museen, Bibliotheken und Gedenkstätten',
      'Universitäten, Akademien und Forschungsprojekte, auch als Partner in Förderprojekten',
      'Unternehmen und Verwaltung mit einem Ablauf, für den es keine passende Standardsoftware gibt',
      'wiederkehrende Arbeit mit Dateien, Listen oder Bildern, die heute in Word, Excel oder von Hand erledigt wird',
      'kleine Vorhaben, auch ein einzelner Arbeitsschritt',
      'Teams, die selbst mit Coding-Agenten und Wissensbasen arbeiten lernen wollen',
    ],
    fitNoTitle: 'Passt nicht',
    fitNo: [
      'Ersatz für Standardsoftware mit Herstellersupport',
      'allgemeine Websites, Onlineshops oder Öffentlichkeitsarbeit',
      'Vorhaben ohne fachliche Ansprechperson für Prüfung und Abnahme',
    ],
    contactTitle: 'Projekt anfragen',
    talkTitle: 'Im Gespräch',
    talkText: 'Schildern Sie uns kurz Ihren Arbeitsablauf. Hilfreich sind diese Angaben:',
    talkQuestions: [
      'Welcher Ablauf kostet Sie Zeit?',
      'Wer macht die Arbeit, und womit?',
      'Welche Dateien sind beteiligt, und in welchem Umfang?',
      'Was soll am Ende herauskommen?',
      'Welchen Rahmen haben Sie im Blick?',
    ],
    talkMail:
      'mailto:office@dhcraft.org?subject=fancy%20(research)%20tools%21%20%E2%80%93%20Erstgespr%C3%A4ch&body=Welcher%20Ablauf%20kostet%20Zeit%3F%0A%0AWer%20macht%20die%20Arbeit%2C%20und%20womit%3F%0A%0AWelche%20Dateien%20sind%20beteiligt%3F%0A%0AWas%20soll%20am%20Ende%20herauskommen%3F%0A%0AWelchen%20Rahmen%20haben%20Sie%20im%20Blick%3F%0A',
    talkMailLabel: 'E-Mail schreiben',
    docsTitle: 'Mit Unterlagen',
    docsText:
      'Schicken Sie uns, was Sie bereits haben. Daraus bauen wir einen ersten Prototyp, an dem sich das Vorhaben konkret besprechen lässt.',
    docsItems: [
      'eine Projektbeschreibung auf einer Seite',
      'Beispieldaten, etwa einige typische Dateien',
      'Ihre Ideen, was das Werkzeug können soll',
    ],
    docsMail:
      'mailto:office@dhcraft.org?subject=fancy%20(research)%20tools%21%20%E2%80%93%20Unterlagen%20f%C3%BCr%20einen%20Prototyp',
    docsMailLabel: 'Unterlagen senden',
  },
  en: {
    title: 'fancy (research) tools! | Digital Humanities Craft',
    ogTitle: 'fancy (research) tools!',
    description:
      'Agentic engineering by Digital Humanities Craft. With frontier language models and coding agents we build tools, workflows and knowledge bases for research, cultural institutions, companies and public administration, for you, with you or in training.',
    ogLocale: 'en_GB',
    ogImageAlt:
      'Header of the page fancy (research) tools! with its title, the line Agentic engineering for everyone who works with knowledge, and the button Request a project',
    heroLine: 'Agentic engineering for everyone who works with knowledge.',
    lede: 'With frontier language models and coding agents we build tools, workflows and knowledge bases for your workflow, for you, with you or in a training course. Every result is tested on your data and documented so that others can continue working on it.',
    heroCta: 'Request a project',
    heroOffer: 'Our offer',
    offerTitle: 'Offer',
    offers: [
      { title: 'Learn', text: 'In workshops and intensive days your team learns to work with coding agents and knowledge bases themselves.', link: 'See formats' },
      { title: 'Build together', text: 'We develop with your team on your data. The knowledge base stays with you, so that you can continue building yourselves.', link: 'Request a conversation' },
      { title: 'Built for you', text: 'We build the tool, from a small application for a single work step to a pipeline with several agents.', link: 'See examples' },
    ],
    modelsTitle: 'Models and data',
    models: [
      'We use frontier language models in two places. With coding agents we build your tool, and in the finished tool models take over individual work steps such as text recognition, markup or generating data.',
      'In both cases commercial as well as open models are options, up to running them on your own hardware. We decide with you, according to the kind of data, which model and which access a project uses. For building, a few sample files are usually enough, and these can also be anonymised.',
    ],
    costsTitle: 'Costs',
    costs:
      'Billing follows what suits the task, by the hour, as individual working days or as a flat fee. Tell us your budget. After the assessment we tell you what is possible within it, and you decide after each step whether to continue.',
    costsList: [
      'Coding agents write most of the code, and what you pay for is the time spent on concept, review and adaptation.',
      'There are no licence fees, and you receive the source code.',
      'Many tools run in the browser and need no server of their own.',
      'A small budget means a smaller scope, not less testing.',
    ],
    toolsTitle: 'Tools to adapt',
    legendLabel: 'Legend',
    traits: {
      llm: 'LLM-assisted',
      llmLocal: 'LLM-assisted, model of your choice up to a local model',
      review: 'Expert review in the tool',
      overview: 'Overview of the whole collection',
      readable: 'Readable text instead of tags',
      browser: 'Runs in the browser without a server of its own',
      evidence: 'Evidence back to the source',
    },
    maturity: {
      use: 'In use',
      rc: 'Release Candidate',
      preview: 'Research preview',
      demo: 'Live demo',
      secured: 'Holdings secured',
      experiment: 'Experiment',
    },
    toolOpen: 'Open tool',
    toolCode: 'Code',
    toolEvidence: 'Evidence',
    toolRequest: 'Request adaptation',
    tools: [
      {
        title: 'coOCR/HTR',
        alt: 'coOCR/HTR with the scan of a printed page on the left, the recognised transcription in the middle and the review panel on the right.',
        solution: 'Recognises the text of early printed books and manuscripts and lets every reading be checked against the page image.',
        mail: 'mailto:office@dhcraft.org?subject=coOCR%2FHTR%20for%20our%20project',
      },
      {
        title: 'teiCrafter',
        alt: 'teiCrafter with readable letter text and marked persons and places on the left and the register of the persons and places mentioned on the right.',
        solution: 'Edits TEI XML as readable text and validates against the schema on saving.',
        mail: 'mailto:office@dhcraft.org?subject=teiCrafter%20for%20our%20project',
      },
      {
        title: 'CorrespExplorer',
        alt: 'CorrespExplorer with a timeline of the letters in a demonstration collection, coloured by language, and filters along the left edge.',
        solution: 'Shows letter metadata from CMIF as a map, a timeline and a network, so that it becomes visible who wrote to whom, when and from where.',
        mail: 'mailto:office@dhcraft.org?subject=CorrespExplorer%20for%20our%20project',
      },
      {
        title: 'SZD-HTR',
        alt: 'Statistics view of SZD-HTR with the distribution of objects by checking tier and the reasons why objects are marked for review.',
        solution: 'Transcribes an entire estate and records for every object whether a machine, an agent or a human has checked it.',
        mail: 'mailto:office@dhcraft.org?subject=SZD-HTR%20for%20our%20project',
      },
      {
        title: 'Stefan Zweig Bibliography',
        alt: 'Interface of the Stefan Zweig Bibliography with a search across all entries and a breakdown by works, reception and editions.',
        solution: 'Rescues a bibliography from a decommissioned wiki into research data in which every statement keeps its source page.',
        mail: 'mailto:office@dhcraft.org?subject=Bibliography%20rescue%20for%20our%20project',
      },
    ],
    methodsTitle: 'Methods and frameworks',
    methodCaption: 'Generated with gpt-image',
    methods: [
      {
        title: 'Promptotyping',
        alt: 'Promptotyping as a sequence from Preparation via Exploration and Distillation to Implementation, every step connected to the Project Knowledge, with a review leading to the Promptotype made of project knowledge, data and artefact.',
        solution: 'Promptotyping develops research artefacts with AI agents out of a maintained knowledge base.',
        links: ['About the method', 'Article on L.I.S.A.', 'Repository'],
      },
      {
        title: 'Grounded Vault',
        alt: 'Grounded Vault as a chain from Sources via Markdown representation and Distillates to Assertions and Output, with a green line connecting every statement to its source passage.',
        solution: 'Grounded Vault leads every load-bearing claim in a report through a verifiable anchor back to the source passage.',
        links: ['Project page', 'Template', 'Evidence'],
      },
      {
        title: 'Agentic Edition Pipeline',
        alt: 'Agentic Edition Pipeline as a sequence from Digitized Source via Transcription, Review and Correction and TEI to Reading and Review, coordinated by an AI Agent with Project Knowledge, with the review resting with the Editorial Team.',
        solution: 'The Agentic Edition Pipeline takes digital copies through transcription and review to TEI and a static reading view.',
        links: ['Template', 'Video', 'Evidence'],
      },
      {
        title: 'Research Mission Control',
        alt: 'Research Mission Control with the User at the top, a Research Orchestrator, an Operational Orchestrator with Specialist Agents and an Independent Verification Agent that reports to the User, all arranged around a shared repository.',
        solution: 'Research Mission Control divides clarifying, implementing and checking among AI agents working on a shared repository.',
        links: ['About the method', 'Repository', 'Evidence'],
      },
    ],
    qualityTitle: 'Quality',
    claims: [
      {
        title: 'Documented requirements',
        html: 'Following the Promptotyping method, requirements, data model and design decisions are kept in a knowledge base in the repository and versioned with the code. Whoever changes something later finds the reasons there.',
      },
      {
        title: 'Tests with your material',
        html: 'We test automatically with sample files from your holdings. Where a tool changes your files, the tests check that nothing is lost on saving and that the result stays valid against your schema. Test runs and known limits are recorded in the project journal.',
      },
      {
        title: 'Reviewed code',
        html: 'Coding agents write most of the code. Before handover a review round of our own looks specifically for the errors that occur frequently in generated code, such as unprotected output of data, silently swallowed errors and functions that only the documentation describes. We test the central workflows in the browser.',
      },
      {
        title: 'Open formats',
        html: 'Results are kept in open formats, depending on the material TEI, PAGE XML, METS/MODS, JSON-LD or CSV. The tools load images through IIIF. Your data therefore remain readable without the tool and can move on to other systems and archives.',
      },
      {
        title: 'Expert control',
        html: 'Where a tool works with large language models, it stays visible what a model produced, what an agent checked and what your experts confirmed. Only what your experts have confirmed counts as established.',
      },
      {
        title: 'Handover',
        html: 'You receive the complete source code and a knowledge base with which your team, an external developer or an AI assistant can continue the work. For research data we offer long-term archiving in the certified repository <a href="https://gams.uni-graz.at/">GAMS</a>, through a framework agreement with the <a href="https://digital-humanities.uni-graz.at/en/">Department of Digital Humanities</a> at the University of Graz.',
      },
    ],
    aboutTitle: 'Who we are',
    about:
      'Digital Humanities Craft is a company that grew out of research in the Digital Humanities, based near Graz. We develop research software and digital editions, teach at universities across Europe and work as a partner in funded projects.',
    aboutLink: 'Team and projects',
    clientsTitle: 'Institutions we work for',
    clients: [
      'Yale University',
      'Kunsthistorisches Museum Wien',
      'Austrian National Library',
      'Austrian Academy of Sciences',
      'Zentralbibliothek Zürich',
      'Literature Archive Salzburg',
      'University of Salzburg',
      'University of Graz',
      'Max Planck Institute for Legal History and Legal Theory',
      'Klassik Stiftung Weimar',
      'Berlin-Brandenburg Academy of Sciences and Humanities',
      'mdw Vienna',
    ],
    processTitle: 'Process',
    steps: [
      { title: 'Initial conversation and assessment', text: 'You show us the workflow with real files, and we tell you what is possible within your budget.' },
      { title: 'Requirements and quotation', text: 'We record goal, data and test criteria in writing.' },
      { title: 'Prototype on your data', text: 'You try out a first working version in your daily work.' },
      { title: 'Testing and acceptance', text: 'Your experts test against the agreed criteria.' },
      { title: 'Handover and support', text: 'You receive the tool, the source code and the documentation.' },
    ],
    fitYesTitle: 'Good fit',
    fitYes: [
      'Archives, museums, libraries and memorial sites',
      'Universities, academies and research projects, also as a partner in funded projects',
      'Companies and public administration with a workflow for which no suitable standard software exists',
      'recurring work with files, lists or images that is currently done in Word, Excel or by hand',
      'small projects, even a single work step',
      'teams who want to learn to work with coding agents and knowledge bases themselves',
    ],
    fitNoTitle: 'Not a fit',
    fitNo: [
      'Replacement for standard software with vendor support',
      'general websites, online shops or public relations',
      'projects without a subject contact for testing and acceptance',
    ],
    contactTitle: 'Request a project',
    talkTitle: 'In conversation',
    talkText: 'Describe your workflow to us briefly. The following details are helpful:',
    talkQuestions: [
      'Which workflow costs you time?',
      'Who does the work, and with what?',
      'Which files are involved, and in what volume?',
      'What should the outcome be?',
      'What budget do you have in mind?',
    ],
    talkMail:
      'mailto:office@dhcraft.org?subject=fancy%20(research)%20tools%21%20%E2%80%93%20First%20conversation&body=Which%20workflow%20costs%20time%3F%0A%0AWho%20does%20the%20work%2C%20and%20with%20what%3F%0A%0AWhich%20files%20are%20involved%3F%0A%0AWhat%20should%20the%20outcome%20be%3F%0A%0AWhat%20budget%20do%20you%20have%20in%20mind%3F%0A',
    talkMailLabel: 'Write an e-mail',
    docsTitle: 'With documents',
    docsText: 'Send us what you already have. From it we build a first prototype on which the project can be discussed in concrete terms.',
    docsItems: ['a one-page project description', 'sample data, for example a few typical files', 'your ideas of what the tool should do'],
    docsMail:
      'mailto:office@dhcraft.org?subject=fancy%20(research)%20tools%21%20%E2%80%93%20Documents%20for%20a%20prototype',
    docsMailLabel: 'Send documents',
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
    ogImage: img('og.jpg'),
    aboutHref: lang === 'de' ? '/#team' : '/en/#team',
    tel: { href: 'tel:+436781269242', label: '+43 678 12 69 242' },
    address: 'office@dhcraft.org',
    offers: t.offers.map((o, i) => ({ ...o, id: offerIds[i], icon: offerIcons[i], href: i === 0 ? `${lang === 'de' ? '/' : '/en/'}${offerHrefs[i]}` : offerHrefs[i] })),
    legend: legendOrder.map((k) => ({ icon: traitIcon[k], label: t.traits[k] })),
    tools: toolsBase.map((b, i) => ({
      ...b,
      ...t.tools[i],
      ...shot(b.img),
      maturityClass: maturityClass[b.maturity],
      maturityLabel: t.maturity[b.maturity],
      traits: b.traits.map((k) => ({ icon: traitIcon[k], label: t.traits[k] })),
    })),
    methods: methodsBase.map((b, i) => ({
      ...b,
      ...t.methods[i],
      large: img(`${b.img}-1440.webp`),
      src: img(`${b.img}-720.webp`),
      srcset: `${img(`${b.img}-720.webp`)} 720w, ${img(`${b.img}-1440.webp`)} 1440w`,
      maturityClass: maturityClass[b.maturity],
      maturityLabel: t.maturity[b.maturity],
      links: b.links.map((href, j) => ({ href, label: t.methods[i].links[j] })),
    })),
    claims: t.claims.map((c, i) => ({ ...c, icon: claimIcons[i] })),
  };
}
