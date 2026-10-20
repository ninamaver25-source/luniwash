/**
 * ─────────────────────────────────────────────────────────────
 *  LUNI WASH — VSE UREDLJIVE VSEBINE NA ENEM MESTU
 * ─────────────────────────────────────────────────────────────
 *  Vrednosti v oglatih oklepajih, npr. "[Naslov]", so OZNAKE
 *  (placeholderji). Na strani so prikazane s črtkano obrobo,
 *  da jih takoj opazite. Ko jih zamenjate s pravim besedilom
 *  (brez oklepajev), se prikažejo kot običajno besedilo.
 * ─────────────────────────────────────────────────────────────
 */

export type PriceItem = {
  title: string;
  description: string;
  price: string;
  unit: string;
  tokens: string;
  highlight?: boolean;
  badge?: string;
};

export type OpeningHour = { days: string; hours: string };

export type FaqItem = { question: string; answer: string };

export const site = {
  name: "LUNI WASH",
  tagline: "Samopostrežna pralnica",
  /** Cenovna trditev: prikazana v ceniku, v pasici in na vrhu strani. */
  claim: "Najcenejša pralnica v Sloveniji!",

  contact: {
    phone: "+386 41 528 408",
    /** Instagram uporabniško ime (brez @). */
    instagram: "luniwash.si",
  },

  location: {
    street: "Nove Fužine 49",
    city: "1000 Ljubljana",
    /** Besedilo za iskanje na Google Maps. Če je prazno, se zemljevid ne prikaže. */
    mapQuery: "Nove Fužine 49, 1000 Ljubljana",
    parking: "Parkirišče je tik pred pralnico.",
  },

  openingHours: [
    { days: "Vsak dan, vključno z nedeljami in prazniki", hours: "06:00–24:00" },
  ] satisfies OpeningHour[],
  openingHoursNote: "Zadnje pranje je mogoče začeti najkasneje 30 minut pred koncem obratovalnega časa.",

  washPrograms: [
    { name: "P1", temp: "30 °C", duration: "38 min" },
    { name: "P2", temp: "40 °C", duration: "40 min" },
    { name: "P3", temp: "60 °C", duration: "40 min" },
    { name: "P4", temp: "90 °C", duration: "40 min" },
  ],

  pricing: {
    tokenValue: "1 žeton = 1 €",
    paymentMethods:
      "Stroji delujejo z žetoni, ki jih dobite v žetonomatu v pralnici. Sprejema bankovce za 5, 10, 20 in 50 € ter kovance za 0,50, 1 in 2 €. Žetonomat ne vrača drobiža.",
    note: "Detergent, mehčalec in dezinfekcijsko sredstvo so vključeni v ceno pranja.",
    items: [
      {
        title: "Pranje 10 kg",
        description: "Pralni stroj s kapaciteto 10 kg",
        price: "5 €",
        unit: "na pranje",
        tokens: "5 žetonov",
      },
      {
        title: "Pranje 20 kg",
        description: "Pralni stroj s kapaciteto 20 kg",
        price: "8 €",
        unit: "na pranje",
        tokens: "8 žetonov",
        highlight: true,
        badge: "Večja kapaciteta",
      },
      {
        title: "Sušenje",
        description: "Vsak dodaten žeton (1 €) podaljša sušenje za 5 minut.",
        price: "2 €",
        unit: "za 10 minut",
        tokens: "2 žetona",
      },
    ] satisfies PriceItem[],
  },

  faq: [
    {
      question: "Kako deluje samopostrežna pralnica?",
      answer:
        "V žetonomatu zamenjate denar za žetone, vstavite perilo v pralni stroj, izberete program in temperaturo, vstavite žetone in pritisnete START. Po pranju perilo prestavite v sušilnik ali ga odnesete domov.",
    },
    {
      question: "Ali moram prinesti svoj detergent?",
      answer:
        "Ne. Detergent, mehčalec in dezinfekcijsko sredstvo so vključeni v ceno. Stroji jih dozirajo samodejno, po želji pa lahko svoj detergent ali mehčalec ročno dodate v dozirno posodo.",
    },
    {
      question: "Kako lahko plačam?",
      answer:
        "Stroji sprejemajo le žetone (1 žeton = 1 €), ki jih dobite v žetonomatu v pralnici. Žetonomat sprejema bankovce za 5, 10, 20 in 50 € ter kovance za 0,50, 1 in 2 €. Naprava denar le zamenja v žetone in ne vrača drobiža.",
    },
    {
      question: "Koliko časa traja pranje in sušenje?",
      answer:
        "Pralni programi trajajo od 38 do 40 minut (30, 40, 60 ali 90 °C). Za zagon sušilnika potrebujete 2 žetona za 10 minut sušenja, vsak dodaten žeton pa podaljša sušenje za 5 minut.",
    },
    {
      question: "Kdaj ste odprti?",
      answer:
        "Vsak dan od 06:00 do 24:00, tudi ob nedeljah in praznikih. Zadnje pranje je mogoče začeti najkasneje 30 minut pred koncem obratovalnega časa.",
    },
    {
      question: "Ali lahko med pranjem odidem?",
      answer:
        "Seveda. Prosimo le, da se vrnete pravočasno, ko je pranje ali sušenje končano, da lahko stroj uporabi naslednja stranka.",
    },
    {
      question: "Koliko perila lahko operem naenkrat?",
      answer:
        "V pralnici so stroji s kapaciteto 10 in 20 kg. Največja dovoljena teža je navedena na stroju. Stroja ne prenapolnite, priporočamo, da ga napolnite do 3/4.",
    },
    {
      question: "Česa v pralnici ni dovoljeno prati?",
      answer:
        "Pranje in sušenje čevljev ter opreme za živali ni dovoljeno. Hišni ljubljenčki in vnos hrane ter pijače v pralnico prav tako niso dovoljeni.",
    },
    {
      question: "Kaj naj naredim pred pranjem in po njem?",
      answer:
        "Pred pranjem izpraznite žepe in zapnite zadrge, saj lastnik ne odgovarja za pozabljene predmete. Po pranju preglejte boben, obrišite gumo in vrata ter vrata pustite odprta, da bo naslednji obiskovalec vedel, da je stroj prost.",
    },
  ] satisfies FaqItem[],
};

export const navLinks = [
  { href: "#kako-deluje", label: "Kako deluje" },
  { href: "#storitve", label: "Storitve" },
  { href: "#cenik", label: "Cenik" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#vprasanja", label: "Vprašanja" },
  { href: "#kontakt", label: "Kontakt" },
];

export const isPlaceholder = (value: string) => value.trim().startsWith("[");
