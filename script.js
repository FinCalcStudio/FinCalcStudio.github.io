(() => {
  "use strict";

  const translations = {
    en: {
      "document.title": "FinCalc — Financial math you can audit.",
      "nav.product": "Product",
      "nav.workspace": "Workspace",
      "nav.principles": "Principles",
      "nav.access": "Access",
      "nav.cta": "See access",
      "logo.aria": "FinCalc home",
      "menu.open": "Open navigation",
      "menu.close": "Close navigation",
      "replay.aria": "Replay cash-flow animation",
      "hero.eyebrow": "Offline · transparent · reproducible",
      "hero.title": "Financial math you can audit.",
      "hero.dek": "A multilingual workspace for calculations you can explain, compare and reproduce.",
      "hero.primary": "Start a calculation",
      "hero.secondary": "See the workspace",
      "hero.note.one": "No account",
      "hero.note.two": "No ads",
      "hero.note.three": "No uploads by default",
      "hero.demoCaption": "A living preview of the workspace — not a calculator skin.",
      "demo.workspaceLabel": "Scenario workspace",
      "demo.windowTitle": "FinCalc / Workspace",
      "demo.local": "local",
      "demo.timeline.aria": "Cash flow timeline",
      "demo.periods": "Periods",
      "demo.decimals": "2 dp",
      "demo.badge": "Formula visible",
      "demo.tab.cashflows": "Cash flows",
      "demo.tab.payments": "Regular payments",
      "demo.tab.rates": "Rate conversion",
      "demo.chartLabel": "Cash flow (USD)",
      "demo.resultLabel": "NPV at discount rate",
      "demo.rate": "Discount rate",
      "demo.ratePerPeriod": "Rate per period",
      "demo.nominalRate": "Nominal annual rate",
      "demo.rounding": "Rounding",
      "demo.showFormula": "Show formula",
      "demo.hideFormula": "Hide formula",
      "demo.formulaNote": "Same inputs, same convention, same result.",
      "demo.footnote": "Results use entered values and selected mathematical conventions. Preview values are illustrative.",
      "boundary.one": "Runs offline on iPhone + iPad",
      "boundary.two": "Every assumption stays visible",
      "boundary.three": "Copy, compare, and export",
      "boundary.four": "English · Deutsch · Français",
      "product.eyebrow": "The calculation layer",
      "product.title": "Four ways to think clearly.",
      "product.dek": "Built around real financial work — with the formula, frequency, timing and rounding policy in the room.",
      "module.payments.title": "Regular payments",
      "module.payments.body": "Annuities, loans and savings — solve for the one value you do not know.",
      "module.schedule.title": "Payment schedule",
      "module.schedule.body": "Period-by-period principal, interest and balance — with tail adjustments in view.",
      "module.cashflows.title": "Cash flows",
      "module.cashflows.body": "Map CF₀…CFₙ, then work through NPV, periodic IRR and MIRR in context.",
      "module.rates.title": "Rate conversion",
      "module.rates.body": "Nominal, equivalent and continuous rates — with the mathematical definition alongside the result.",
      "module.explore": "Explore module",
      "boundaryCallout.title": "General mathematical calculation.",
      "boundaryCallout.body": "Results use entered values and selected conventions. Fees, taxes, insurance and product-specific rules are not included.",
      "workspace.previewLabel": "Scenario Studio / local",
      "workspace.imageAlt": "FinCalc Scenario Studio showing an expansion case, cash-flow timeline and scenario comparison",
      "workspace.visualNote": "A record keeps its context when it leaves the calculator.",
      "workspace.eyebrow": "The workspace layer",
      "workspace.title": "From a number to a record.",
      "workspace.dek": "Build a scenario, compare what changed, and share a result that still explains itself.",
      "workflow.build.title": "Build",
      "workflow.build.body": "Enter values, choose timing and frequency, and keep the assumptions close to the result.",
      "workflow.compare.title": "Compare",
      "workflow.compare.body": "Duplicate a scenario and see only the assumptions that changed — side by side.",
      "workflow.share.title": "Share",
      "workflow.share.body": "Copy a concise answer or export the full text / CSV record when context matters.",
      "workspace.primary": "See the principles",
      "workspace.note": "Local by default",
      "principles.eyebrow": "The product contract",
      "principles.title": "Clarity is a feature.",
      "principles.dek": "Financial inputs deserve a calm surface, a traceable method and a clear boundary.",
      "principle.method.title": "Method stays visible",
      "principle.method.body": "Inputs, formula, frequency, payment timing and rounding are part of the result — not footnotes.",
      "principle.local.title": "Local by default",
      "principle.local.body": "No account, no ads and no default cloud sync. Core calculations and history work in flight mode.",
      "principle.language.title": "Language changes expression",
      "principle.language.body": "English, Deutsch and Français can describe the same record without changing its canonical numbers.",
      "formulaRail.label": "One input, one definition",
      "formulaRail.note": "Currency changes the display only; no exchange-rate conversion is performed.",
      "access.eyebrow": "The access model",
      "access.title": "Useful before it is paid.",
      "access.dek": "Every P0 calculation is available in the free layer. Full Access buys room for the work around it — not a higher precision answer.",
      "access.footnote": "One-time purchase. No subscription.",
      "price.free.label": "Free",
      "price.free.kicker": "Start here",
      "price.free.copy": "The complete calculation layer, with a focused workspace.",
      "price.free.item1": "Unlimited P0 calculations",
      "price.free.item2": "Latest 2 history records",
      "price.free.item3": "2 named scenarios",
      "price.free.item4": "English · Deutsch · Français",
      "price.free.item5": "Copy a concise result",
      "price.free.cta": "Start calculating",
      "price.full.ribbon": "FULL ACCESS",
      "price.full.label": "Full Access",
      "price.full.kicker": "More room",
      "price.full.onetime": "one-time purchase",
      "price.full.item1": "Unlimited history and scenarios",
      "price.full.item2": "Unlimited comparison",
      "price.full.item3": "Complete text + CSV export",
      "price.full.item4": "Advanced rounding options",
      "price.full.item5": "Future general math modules",
      "price.full.cta": "See launch details",
      "faq.eyebrow": "Good boundaries",
      "faq.title": "A few clear answers.",
      "faq.dek": "The shortest path to trust is saying what the product does — and what it deliberately does not.",
      "faq.q1": "What does FinCalc calculate?",
      "faq.a1": "General financial mathematics: regular payments, payment schedules, equal-period cash flows (NPV, IRR, MIRR) and explicit rate conversions.",
      "faq.q2": "Is it a loan quote or compliance calculator?",
      "faq.a2": "No. Results are based on entered values and selected mathematical conventions. Fees, taxes, insurance and product-specific or country rules are not included.",
      "faq.q3": "Where is my data stored?",
      "faq.a3": "The core experience is local and works offline. FinCalc has no account, no ads and no default cloud sync. Export and sharing are explicit user actions.",
      "faq.q4": "What does Full Access unlock?",
      "faq.a4": "A one-time purchase unlocks unlimited history, scenarios and comparison, plus complete text / CSV export and future general mathematics modules.",
      "final.eyebrow": "A calmer way to work with numbers",
      "final.title": "Build. Compare. Share.",
      "final.primary": "Start a calculation",
      "final.note": "Made for iPhone + iPad · English · Deutsch · Français",
      "footer.tagline": "General financial mathematics for clear, reproducible work.",
      "footer.faq": "FAQ",
      "footer.boundary": "Results are not regulated credit disclosures.",
      "footer.scope": "iPhone + iPad · Local by default"
    },
    de: {
      "document.title": "FinCalc — Finanzmathematik, die Sie prüfen können.",
      "nav.product": "Produkt",
      "nav.workspace": "Arbeitsbereich",
      "nav.principles": "Prinzipien",
      "nav.access": "Zugang",
      "nav.cta": "Zugang ansehen",
      "logo.aria": "FinCalc Startseite",
      "menu.open": "Navigation öffnen",
      "menu.close": "Navigation schließen",
      "replay.aria": "Animation der Zahlungsströme wiederholen",
      "hero.eyebrow": "Offline · transparent · reproduzierbar",
      "hero.title": "Finanzmathematik, die Sie prüfen können.",
      "hero.dek": "Ein mehrsprachiger Arbeitsbereich für Berechnungen, die Sie erklären, vergleichen und reproduzieren können.",
      "hero.primary": "Berechnung starten",
      "hero.secondary": "Arbeitsbereich ansehen",
      "hero.note.one": "Kein Konto",
      "hero.note.two": "Keine Werbung",
      "hero.note.three": "Standardmäßig kein Upload",
      "hero.demoCaption": "Eine lebendige Vorschau des Arbeitsbereichs — kein Tastenrechner.",
      "demo.workspaceLabel": "Szenario-Arbeitsbereich",
      "demo.windowTitle": "FinCalc / Arbeitsbereich",
      "demo.local": "lokal",
      "demo.timeline.aria": "Zeitachse der Zahlungsströme",
      "demo.periods": "Perioden",
      "demo.decimals": "2 Dez.",
      "demo.badge": "Formel sichtbar",
      "demo.tab.cashflows": "Zahlungsströme",
      "demo.tab.payments": "Regelmäßige Zahlungen",
      "demo.tab.rates": "Zinsumrechnung",
      "demo.chartLabel": "Zahlungsstrom (USD)",
      "demo.resultLabel": "Kapitalwert bei Diskontsatz",
      "demo.rate": "Diskontsatz",
      "demo.ratePerPeriod": "Zinssatz pro Periode",
      "demo.nominalRate": "Nominaler Jahreszinssatz",
      "demo.rounding": "Rundung",
      "demo.showFormula": "Formel anzeigen",
      "demo.hideFormula": "Formel ausblenden",
      "demo.formulaNote": "Gleiche Eingaben, gleiche Konvention, gleiches Ergebnis.",
      "demo.footnote": "Ergebnisse basieren auf eingegebenen Werten und gewählten Rechenkonventionen. Die Vorschauwerte sind beispielhaft.",
      "boundary.one": "Offline auf iPhone + iPad",
      "boundary.two": "Jede Annahme bleibt sichtbar",
      "boundary.three": "Kopieren, vergleichen und exportieren",
      "boundary.four": "English · Deutsch · Français",
      "product.eyebrow": "Die Berechnungsebene",
      "product.title": "Vier Wege zu klaren Entscheidungen.",
      "product.dek": "Für echte Finanzarbeit — mit Formel, Frequenz, Zeitpunkt und Rundungsregel im Blick.",
      "module.payments.title": "Regelmäßige Zahlungen",
      "module.payments.body": "Renten, Kredite und Sparpläne — lösen Sie den einen unbekannten Wert.",
      "module.schedule.title": "Zahlungsplan",
      "module.schedule.body": "Tilgung, Zinsen und Saldo pro Periode — mit sichtbarer Schlussanpassung.",
      "module.cashflows.title": "Zahlungsströme",
      "module.cashflows.body": "CF₀…CFₙ abbilden und Kapitalwert, periodischen IRR und MIRR im Kontext prüfen.",
      "module.rates.title": "Zinsumrechnung",
      "module.rates.body": "Nominal, äquivalent und stetig — mit mathematischer Definition neben dem Ergebnis.",
      "module.explore": "Modul ansehen",
      "boundaryCallout.title": "Allgemeine finanzmathematische Berechnung.",
      "boundaryCallout.body": "Ergebnisse basieren auf eingegebenen Werten und gewählten Rechenkonventionen. Gebühren, Steuern, Versicherungen und produktspezifische Regeln sind nicht berücksichtigt.",
      "workspace.previewLabel": "Scenario Studio / lokal",
      "workspace.imageAlt": "FinCalc Scenario Studio mit Expansionsfall, Zahlungsstrom-Zeitachse und Szenariovergleich",
      "workspace.visualNote": "Ein Datensatz behält seinen Kontext, wenn er den Rechner verlässt.",
      "workspace.eyebrow": "Die Arbeitsbereichsebene",
      "workspace.title": "Von einer Zahl zum Datensatz.",
      "workspace.dek": "Ein Szenario erstellen, Änderungen vergleichen und ein Ergebnis teilen, das sich selbst erklärt.",
      "workflow.build.title": "Erstellen",
      "workflow.build.body": "Werte eingeben, Zeitpunkt und Frequenz wählen und Annahmen beim Ergebnis behalten.",
      "workflow.compare.title": "Vergleichen",
      "workflow.compare.body": "Ein Szenario duplizieren und nur die geänderten Annahmen nebeneinander sehen.",
      "workflow.share.title": "Teilen",
      "workflow.share.body": "Eine kurze Antwort kopieren oder den vollständigen Text-/CSV-Datensatz exportieren.",
      "workspace.primary": "Prinzipien ansehen",
      "workspace.note": "Standardmäßig lokal",
      "principles.eyebrow": "Der Produktvertrag",
      "principles.title": "Klarheit ist eine Funktion.",
      "principles.dek": "Finanzielle Eingaben verdienen eine ruhige Oberfläche, eine nachvollziehbare Methode und eine klare Grenze.",
      "principle.method.title": "Die Methode bleibt sichtbar",
      "principle.method.body": "Eingaben, Formel, Frequenz, Zahlungszeitpunkt und Rundung sind Teil des Ergebnisses — keine Fußnoten.",
      "principle.local.title": "Standardmäßig lokal",
      "principle.local.body": "Kein Konto, keine Werbung und keine standardmäßige Cloud-Synchronisierung. Kernfunktionen arbeiten im Flugmodus.",
      "principle.language.title": "Sprache ändert die Darstellung",
      "principle.language.body": "English, Deutsch und Français beschreiben denselben Datensatz, ohne seine kanonischen Zahlen zu ändern.",
      "formulaRail.label": "Eine Eingabe, eine Definition",
      "formulaRail.note": "Die Währung ändert nur die Anzeige; es findet keine Währungsumrechnung statt.",
      "access.eyebrow": "Das Zugangsmodell",
      "access.title": "Nützlich, bevor es bezahlt wird.",
      "access.dek": "Jede P0-Berechnung ist kostenlos verfügbar. Full Access schafft Raum für die Arbeit darum — nicht für ein genaueres Ergebnis.",
      "access.footnote": "Einmalkauf. Kein Abonnement.",
      "price.free.label": "Kostenlos",
      "price.free.kicker": "Hier starten",
      "price.free.copy": "Die vollständige Berechnungsebene mit einem fokussierten Arbeitsbereich.",
      "price.free.item1": "Unbegrenzte P0-Berechnungen",
      "price.free.item2": "Die letzten 2 Datensätze",
      "price.free.item3": "2 benannte Szenarien",
      "price.free.item4": "English · Deutsch · Français",
      "price.free.item5": "Kurzes Ergebnis kopieren",
      "price.free.cta": "Berechnung starten",
      "price.full.ribbon": "VOLLER ZUGANG",
      "price.full.label": "Full Access",
      "price.full.kicker": "Mehr Raum",
      "price.full.onetime": "Einmalkauf",
      "price.full.item1": "Unbegrenzte Historie und Szenarien",
      "price.full.item2": "Unbegrenzte Vergleiche",
      "price.full.item3": "Vollständiger Text- und CSV-Export",
      "price.full.item4": "Erweiterte Rundungsoptionen",
      "price.full.item5": "Künftige allgemeine Mathematikmodule",
      "price.full.cta": "Startdetails ansehen",
      "faq.eyebrow": "Klare Grenzen",
      "faq.title": "Ein paar klare Antworten.",
      "faq.dek": "Vertrauen beginnt damit, zu sagen, was das Produkt tut — und was bewusst nicht.",
      "faq.q1": "Was berechnet FinCalc?",
      "faq.a1": "Allgemeine Finanzmathematik: regelmäßige Zahlungen, Zahlungspläne, gleichmäßig periodische Zahlungsströme (NPV, IRR, MIRR) und explizite Zinsumrechnungen.",
      "faq.q2": "Ist es ein Kreditangebot oder ein Compliance-Rechner?",
      "faq.a2": "Nein. Ergebnisse basieren auf Eingaben und gewählten mathematischen Konventionen. Gebühren, Steuern, Versicherungen und produktspezifische oder nationale Regeln sind nicht enthalten.",
      "faq.q3": "Wo werden meine Daten gespeichert?",
      "faq.a3": "Die Kernfunktionen sind lokal und offline nutzbar. FinCalc hat kein Konto, keine Werbung und keine standardmäßige Cloud-Synchronisierung. Export und Teilen sind bewusste Aktionen.",
      "faq.q4": "Was schaltet Full Access frei?",
      "faq.a4": "Ein Einmalkauf schaltet unbegrenzte Historie, Szenarien und Vergleiche sowie vollständigen Text-/CSV-Export und künftige allgemeine Mathematikmodule frei.",
      "final.eyebrow": "Eine ruhigere Art, mit Zahlen zu arbeiten",
      "final.title": "Erstellen. Vergleichen. Teilen.",
      "final.primary": "Berechnung starten",
      "final.note": "Für iPhone + iPad · English · Deutsch · Français",
      "footer.tagline": "Allgemeine Finanzmathematik für klare, reproduzierbare Arbeit.",
      "footer.faq": "FAQ",
      "footer.boundary": "Ergebnisse sind keine gesetzlich vorgeschriebenen Kreditangaben.",
      "footer.scope": "iPhone + iPad · Standardmäßig lokal"
    },
    fr: {
      "document.title": "FinCalc — Des calculs financiers que vous pouvez vérifier.",
      "nav.product": "Produit",
      "nav.workspace": "Espace de travail",
      "nav.principles": "Principes",
      "nav.access": "Accès",
      "nav.cta": "Voir l’accès",
      "logo.aria": "Accueil FinCalc",
      "menu.open": "Ouvrir la navigation",
      "menu.close": "Fermer la navigation",
      "replay.aria": "Rejouer l’animation des flux",
      "hero.eyebrow": "Hors ligne · transparent · reproductible",
      "hero.title": "Des calculs financiers que vous pouvez vérifier.",
      "hero.dek": "Un espace multilingue pour des calculs que vous pouvez expliquer, comparer et reproduire.",
      "hero.primary": "Commencer un calcul",
      "hero.secondary": "Voir l’espace de travail",
      "hero.note.one": "Aucun compte",
      "hero.note.two": "Aucune publicité",
      "hero.note.three": "Aucun envoi par défaut",
      "hero.demoCaption": "Un aperçu vivant de l’espace de travail — pas une imitation de calculatrice.",
      "demo.workspaceLabel": "Espace de scénarios",
      "demo.windowTitle": "FinCalc / Espace de travail",
      "demo.local": "local",
      "demo.timeline.aria": "Chronologie des flux de trésorerie",
      "demo.periods": "Périodes",
      "demo.decimals": "2 déc.",
      "demo.badge": "Formule visible",
      "demo.tab.cashflows": "Flux de trésorerie",
      "demo.tab.payments": "Paiements périodiques",
      "demo.tab.rates": "Conversion de taux",
      "demo.chartLabel": "Flux de trésorerie (USD)",
      "demo.resultLabel": "VAN au taux d’actualisation",
      "demo.rate": "Taux d’actualisation",
      "demo.ratePerPeriod": "Taux par période",
      "demo.nominalRate": "Taux nominal annuel",
      "demo.rounding": "Arrondi",
      "demo.showFormula": "Afficher la formule",
      "demo.hideFormula": "Masquer la formule",
      "demo.formulaNote": "Mêmes entrées, même convention, même résultat.",
      "demo.footnote": "Calcul financier général fondé sur les valeurs saisies et les conventions choisies. Les valeurs de l’aperçu sont illustratives.",
      "boundary.one": "Hors ligne sur iPhone + iPad",
      "boundary.two": "Chaque hypothèse reste visible",
      "boundary.three": "Copier, comparer et exporter",
      "boundary.four": "English · Deutsch · Français",
      "product.eyebrow": "La couche de calcul",
      "product.title": "Quatre façons de penser clairement.",
      "product.dek": "Conçu pour le travail financier réel — formule, fréquence, calendrier et règle d’arrondi restent visibles.",
      "module.payments.title": "Paiements périodiques",
      "module.payments.body": "Rentes, prêts et épargne — résolvez la valeur qui vous manque.",
      "module.schedule.title": "Échéancier",
      "module.schedule.body": "Capital, intérêts et solde par période — avec l’ajustement final en vue.",
      "module.cashflows.title": "Flux de trésorerie",
      "module.cashflows.body": "Cartographiez CF₀…CFₙ puis analysez VAN, TRI périodique et TRIM dans leur contexte.",
      "module.rates.title": "Conversion de taux",
      "module.rates.body": "Taux nominal, équivalent et continu — avec la définition mathématique à côté du résultat.",
      "module.explore": "Voir le module",
      "boundaryCallout.title": "Calcul financier général.",
      "boundaryCallout.body": "Calcul fondé sur les valeurs saisies et les conventions choisies. Les frais, taxes, assurances et règles propres au produit ne sont pas inclus.",
      "workspace.previewLabel": "Scenario Studio / local",
      "workspace.imageAlt": "FinCalc Scenario Studio affichant un cas d’expansion, une chronologie des flux et une comparaison de scénarios",
      "workspace.visualNote": "Un enregistrement conserve son contexte lorsqu’il sort du calculateur.",
      "workspace.eyebrow": "La couche espace de travail",
      "workspace.title": "D’un nombre à un enregistrement.",
      "workspace.dek": "Créez un scénario, comparez les changements et partagez un résultat qui reste explicite.",
      "workflow.build.title": "Créer",
      "workflow.build.body": "Saisissez les valeurs, choisissez le calendrier et la fréquence, et gardez les hypothèses près du résultat.",
      "workflow.compare.title": "Comparer",
      "workflow.compare.body": "Dupliquez un scénario et voyez uniquement les hypothèses qui ont changé, côte à côte.",
      "workflow.share.title": "Partager",
      "workflow.share.body": "Copiez une réponse courte ou exportez l’enregistrement texte / CSV complet quand le contexte compte.",
      "workspace.primary": "Voir les principes",
      "workspace.note": "Local par défaut",
      "principles.eyebrow": "Le contrat produit",
      "principles.title": "La clarté est une fonction.",
      "principles.dek": "Les données financières méritent une surface calme, une méthode traçable et une limite claire.",
      "principle.method.title": "La méthode reste visible",
      "principle.method.body": "Entrées, formule, fréquence, calendrier de paiement et arrondi font partie du résultat — pas des notes de bas de page.",
      "principle.local.title": "Local par défaut",
      "principle.local.body": "Aucun compte, aucune publicité et aucune synchronisation cloud par défaut. Le cœur fonctionne en mode avion.",
      "principle.language.title": "La langue change l’expression",
      "principle.language.body": "English, Deutsch et Français décrivent le même enregistrement sans changer ses nombres canoniques.",
      "formulaRail.label": "Une entrée, une définition",
      "formulaRail.note": "La devise modifie uniquement l’affichage ; aucune conversion de change n’est effectuée.",
      "access.eyebrow": "Le modèle d’accès",
      "access.title": "Utile avant d’être payant.",
      "access.dek": "Chaque calcul P0 est disponible gratuitement. Full Access offre de l’espace autour du calcul — pas une réponse plus précise.",
      "access.footnote": "Achat unique. Aucun abonnement.",
      "price.free.label": "Gratuit",
      "price.free.kicker": "Commencer ici",
      "price.free.copy": "La couche de calcul complète, avec un espace de travail concentré.",
      "price.free.item1": "Calculs P0 illimités",
      "price.free.item2": "Les 2 derniers enregistrements",
      "price.free.item3": "2 scénarios nommés",
      "price.free.item4": "English · Deutsch · Français",
      "price.free.item5": "Copier un résultat court",
      "price.free.cta": "Commencer un calcul",
      "price.full.ribbon": "ACCÈS COMPLET",
      "price.full.label": "Full Access",
      "price.full.kicker": "Plus d’espace",
      "price.full.onetime": "achat unique",
      "price.full.item1": "Historique et scénarios illimités",
      "price.full.item2": "Comparaisons illimitées",
      "price.full.item3": "Export texte + CSV complet",
      "price.full.item4": "Options d’arrondi avancées",
      "price.full.item5": "Futurs modules de mathématiques générales",
      "price.full.cta": "Voir les détails de lancement",
      "faq.eyebrow": "Des limites claires",
      "faq.title": "Quelques réponses claires.",
      "faq.dek": "La confiance commence par dire ce que le produit fait — et ce qu’il ne fait délibérément pas.",
      "faq.q1": "Que calcule FinCalc ?",
      "faq.a1": "Des mathématiques financières générales : paiements périodiques, échéanciers, flux à périodes égales (VAN, TRI, TRIM) et conversions de taux explicites.",
      "faq.q2": "Est-ce un devis de prêt ou un outil réglementaire ?",
      "faq.a2": "Non. Les résultats reposent sur les valeurs saisies et les conventions mathématiques choisies. Les frais, taxes, assurances et règles propres au produit ou au pays ne sont pas inclus.",
      "faq.q3": "Où sont stockées mes données ?",
      "faq.a3": "L’expérience principale est locale et fonctionne hors ligne. FinCalc n’a ni compte, ni publicité, ni synchronisation cloud par défaut. L’export et le partage sont des actions explicites.",
      "faq.q4": "Que débloque Full Access ?",
      "faq.a4": "Un achat unique débloque l’historique, les scénarios et les comparaisons illimités, ainsi que l’export texte / CSV complet et les futurs modules de mathématiques générales.",
      "final.eyebrow": "Une manière plus calme de travailler avec les nombres",
      "final.title": "Créer. Comparer. Partager.",
      "final.primary": "Commencer un calcul",
      "final.note": "Pour iPhone + iPad · English · Deutsch · Français",
      "footer.tagline": "Mathématiques financières générales pour un travail clair et reproductible.",
      "footer.faq": "FAQ",
      "footer.boundary": "Les résultats ne sont pas des informations réglementaires sur le crédit.",
      "footer.scope": "iPhone + iPad · Local par défaut"
    }
  };

  const demoPresets = {
    cashflows: {
      title: { en: "Expansion case", de: "Expansionsfall", fr: "Cas d’expansion" },
      chartLabel: { en: "Cash flow (USD)", de: "Zahlungsstrom (USD)", fr: "Flux de trésorerie (USD)" },
      resultLabel: { en: "NPV at discount rate", de: "Kapitalwert bei Diskontsatz", fr: "VAN au taux d’actualisation" },
      rateLabel: { en: "Discount rate", de: "Diskontsatz", fr: "Taux d’actualisation" },
      values: ["−1.0M", "320k", "380k", "440k", "500k"],
      bars: [88, 34, 43, 52, 61],
      rate: 10,
      periods: 4,
      npv: { en: "$277,044", de: "$277.044", fr: "$277 044" }
    },
    payments: {
      title: { en: "Base payment plan", de: "Basis-Zahlungsplan", fr: "Plan de paiement de base" },
      chartLabel: { en: "Payment path (USD)", de: "Zahlungsverlauf (USD)", fr: "Parcours des paiements (USD)" },
      resultLabel: { en: "Future value", de: "Endwert", fr: "Valeur future" },
      rateLabel: { en: "Rate per period", de: "Zinssatz pro Periode", fr: "Taux par période" },
      values: ["−500k", "150k", "150k", "150k", "150k"],
      bars: [68, 35, 35, 35, 35],
      rate: 8,
      periods: 4,
      npv: { en: "−$4,328", de: "−4.328 $", fr: "−4 328 $" }
    },
    rates: {
      title: { en: "Equivalent rate", de: "Äquivalenter Zinssatz", fr: "Taux équivalent" },
      chartLabel: { en: "Rate path (%)", de: "Zinsverlauf (%)", fr: "Parcours du taux (%)" },
      resultLabel: { en: "Equivalent annual rate", de: "Äquivalenter Jahreszinssatz", fr: "Taux annuel équivalent" },
      rateLabel: { en: "Nominal annual rate", de: "Nominaler Jahreszinssatz", fr: "Taux nominal annuel" },
      values: ["2.0%", "4.0%", "6.1%", "8.2%", "10.4%"],
      bars: [23, 35, 47, 59, 71],
      rate: 10,
      periods: 12,
      npv: { en: "10.47%", de: "10,47%", fr: "10,47 %" }
    }
  };

  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const toast = document.querySelector("[data-toast]");
  const rateSlider = document.querySelector("[data-rate-slider]");
  const rateLabel = document.querySelector("[data-rate-label]");
  const npvOutput = document.querySelector("[data-npv]");
  const cashChart = document.querySelector(".cash-chart");
  const formulaToggle = document.querySelector("[data-formula-toggle]");
  const formulaPanel = document.querySelector("[data-formula-panel]");
  const formulaLabel = document.querySelector("[data-formula-label]");
  const demoTitle = document.querySelector("[data-demo-title]");
  const demoChartLabel = document.querySelector("[data-demo-chart-label]");
  const demoResultLabel = document.querySelector("[data-demo-result-label]");
  const demoRateLabel = document.querySelector("[data-demo-rate-label]");
  const demoPeriods = document.querySelector("[data-periods]");
  const demoTabs = [...document.querySelectorAll("[data-demo-tab]")];
  const chartValues = [...document.querySelectorAll(".chart-item .chart-value")];
  const chartBars = [...document.querySelectorAll(".chart-item .bar")];
  const languageButtons = [...document.querySelectorAll("[data-lang]")];

  let currentLanguage = "en";
  let currentPreset = "cashflows";
  let toastTimer;

  const getStoredLanguage = () => {
    try {
      const saved = window.localStorage.getItem("fincalc-language");
      return saved && translations[saved] ? saved : "en";
    } catch {
      return "en";
    }
  };

  const setStoredLanguage = (language) => {
    try {
      window.localStorage.setItem("fincalc-language", language);
    } catch {
      // Storage can be unavailable in a private or embedded preview.
    }
  };

  const copy = (key) => translations[currentLanguage][key] || translations.en[key] || key;

  const updateFormulaLabel = () => {
    if (!formulaToggle || !formulaLabel) return;
    const expanded = formulaToggle.getAttribute("aria-expanded") === "true";
    formulaLabel.textContent = copy(expanded ? "demo.hideFormula" : "demo.showFormula");
  };

  const applyLanguage = (language) => {
    if (!translations[language]) return;
    currentLanguage = language;
    root.lang = language;
    document.title = copy("document.title");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = copy(node.dataset.i18n);
      if (value) node.textContent = value;
    });

    document.querySelectorAll("[data-aria-i18n]").forEach((node) => {
      const value = copy(node.dataset.ariaI18n);
      if (value) node.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-alt-i18n]").forEach((node) => {
      const value = copy(node.dataset.altI18n);
      if (value) node.setAttribute("alt", value);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateDemo(currentPreset, false);
    updateFormulaLabel();
    setStoredLanguage(language);
  };

  const showToast = (message) => {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
  };

  const formatNumber = (value) => {
    const rounded = Math.round(value);
    return new Intl.NumberFormat(currentLanguage === "de" ? "de-DE" : currentLanguage === "fr" ? "fr-FR" : "en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(rounded);
  };

  const calculateNpv = (ratePercent, preset = "cashflows") => {
    if (preset === "payments") {
      const r = ratePercent / 100;
      const pmt = 150000;
      const periods = 4;
      if (r === 0) return -500000 + pmt * periods;
      return -500000 * Math.pow(1 + r, periods) + pmt * ((Math.pow(1 + r, periods) - 1) / r);
    }
    if (preset === "rates") return 10.47 + (ratePercent - 10) * 0.06;
    const flows = [-1000000, 320000, 380000, 440000, 500000];
    const r = ratePercent / 100;
    return flows.reduce((sum, flow, index) => sum + flow / Math.pow(1 + r, index), 0);
  };

  const updateRateResult = () => {
    if (!rateSlider || !rateLabel || !npvOutput) return;
    const rate = Number(rateSlider.value);
    rateLabel.textContent = rate.toFixed(1);
    const activeRateLabel = demoRateLabel?.textContent || copy("demo.rate");
    rateSlider.setAttribute("aria-label", `${activeRateLabel} ${rate.toFixed(1)}%`);
    if (currentPreset === "rates") {
      const equivalent = calculateNpv(rate, "rates");
      npvOutput.textContent = currentLanguage === "en" ? `${equivalent.toFixed(2)}%` : currentLanguage === "de" ? `${equivalent.toFixed(2).replace(".", ",")} %` : `${equivalent.toFixed(2).replace(".", ",")} %`;
    } else {
      npvOutput.textContent = formatNumber(calculateNpv(rate, currentPreset));
    }
  };

  const updateDemo = (presetKey = currentPreset, animate = true) => {
    const preset = demoPresets[presetKey];
    if (!preset) return;
    currentPreset = presetKey;
    if (demoTitle) demoTitle.textContent = preset.title[currentLanguage];
    if (demoChartLabel) demoChartLabel.textContent = preset.chartLabel[currentLanguage];
    if (demoResultLabel) demoResultLabel.textContent = preset.resultLabel[currentLanguage];
    if (demoRateLabel) demoRateLabel.textContent = preset.rateLabel[currentLanguage];
    if (demoPeriods) demoPeriods.textContent = preset.periods;
    if (rateSlider) {
      rateSlider.value = String(preset.rate);
      rateSlider.setAttribute("aria-label", `${copy("demo.rate")} ${preset.rate}%`);
    }
    chartValues.forEach((node, index) => {
      if (preset.values[index]) node.textContent = preset.values[index];
    });
    chartBars.forEach((bar, index) => {
      if (preset.bars[index] != null) bar.style.setProperty("--bar-height", `${preset.bars[index]}px`);
    });
    demoTabs.forEach((tab) => {
      const active = tab.dataset.demoTab === presetKey;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    if (animate && cashChart) {
      cashChart.classList.remove("is-replaying");
      window.requestAnimationFrame(() => cashChart.classList.add("is-replaying"));
      window.setTimeout(() => cashChart.classList.remove("is-replaying"), 50);
    }
    updateRateResult();
  };

  const replayChart = () => {
    if (!cashChart) return;
    cashChart.classList.add("is-replaying");
    window.setTimeout(() => cashChart.classList.remove("is-replaying"), 420);
  };

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", copy("menu.open"));
    mobileMenu.hidden = true;
  };

  const toggleMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", copy(open ? "menu.open" : "menu.close"));
    mobileMenu.hidden = open;
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  demoTabs.forEach((tab) => {
    tab.addEventListener("click", () => updateDemo(tab.dataset.demoTab));
  });

  rateSlider?.addEventListener("input", updateRateResult);
  document.querySelector("[data-replay]")?.addEventListener("click", replayChart);

  formulaToggle?.addEventListener("click", () => {
    const expanded = formulaToggle.getAttribute("aria-expanded") === "true";
    formulaToggle.setAttribute("aria-expanded", String(!expanded));
    if (formulaPanel) formulaPanel.hidden = expanded;
    updateFormulaLabel();
  });

  menuToggle?.addEventListener("click", toggleMobileMenu);
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.getAttribute("href") === "#footer") {
        showToast(currentLanguage === "de" ? "Startdetails folgen mit dem App-Store-Launch." : currentLanguage === "fr" ? "Les détails de lancement suivront avec la sortie sur l’App Store." : "Launch details will appear with the App Store release.");
      }
    });
  });

  const yearNode = document.querySelector("[data-year]");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  applyLanguage(getStoredLanguage());
  updateDemo("cashflows", false);
})();
