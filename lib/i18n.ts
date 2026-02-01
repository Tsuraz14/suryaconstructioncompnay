export type Lang = "en" | "np";

const copy = {
  en: {
    companyName: "Surya Construction Company",
    companyTagline: "Pvt. Ltd.",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      qualitySafety: "Quality & Safety",
      contact: "Contact",
    },
    cta: "Request a consultation",
  },
  np: {
    companyName: "सूर्य कन्स्ट्रक्सन कम्पनी",
    companyTagline: "प्रा. लि.",
    nav: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारे",
      services: "सेवाहरू",
      projects: "परियोजनाहरू",
      qualitySafety: "गुणस्तर र सुरक्षा",
      contact: "सम्पर्क",
    },
    cta: "परामर्श अनुरोध",
  },
} as const;

export function t(lang: Lang) {
  return copy[lang];
}
