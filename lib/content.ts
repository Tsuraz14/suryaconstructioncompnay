import type { Lang } from "@/lib/i18n";

export type Service = {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
  icon: "building" | "road" | "bridge" | "tunnel" | "maintenance";
};

export type Project = {
  id: string;
  status: "completed" | "ongoing";
  title: Record<Lang, string>;
  location: Record<Lang, string>;
  summary: Record<Lang, string>;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "building-construction",
    icon: "building",
    title: {
      en: "Building Construction",
      np: "भवन निर्माण",
    },
    description: {
      en: "End-to-end delivery for hospitals, hotels, schools, factories, and commercial facilities.",
      np: "अस्पताल, होटल, विद्यालय, कारखाना, र व्यावसायिक भवनहरूको लागि समग्र निर्माण सेवा।",
    },
    bullets: {
      en: [
        "Hospitals, hotels, schools, factories",
        "Structural, architectural, finishing works",
        "Coordination with MEP teams",
      ],
      np: [
        "अस्पताल, होटल, विद्यालय, कारखाना",
        "स्ट्रक्चरल, आर्किटेक्चरल, फिनिसिङ काम",
        "MEP टोलीसँग समन्वय",
      ],
    },
  },
  {
    id: "roads-infrastructure",
    icon: "road",
    title: {
      en: "Roads & Infrastructure",
      np: "सडक तथा पूर्वाधार",
    },
    description: {
      en: "Road upgrading, drainage, and site development engineered for terrain and durability.",
      np: "सडक स्तरोन्नति, निकास, र साइट विकास—भू–आकृतिअनुसार दिगो समाधान।",
    },
    bullets: {
      en: [
        "Upgrading and widening",
        "Drainage and slope protection",
        "Site development and access works",
      ],
      np: [
        "स्तरोन्नति र चौडाइ विस्तार",
        "निकास र ढलान संरक्षण",
        "साइट विकास तथा पहुँच मार्ग",
      ],
    },
  },
  {
    id: "bridges-structures",
    icon: "bridge",
    title: {
      en: "Bridges & Civil Structures",
      np: "ब्रिज तथा सिभिल संरचना",
    },
    description: {
      en: "Bridge structures, culverts, and RCC works delivered to specified standards.",
      np: "ब्रिज संरचना, कल्भर्ट, र RCC कामहरू निर्धारित मापदण्डअनुसार।",
    },
    bullets: {
      en: [
        "RCC and steel structures",
        "Culverts and crossings",
        "Formwork and reinforcement control",
      ],
      np: [
        "RCC र स्टिल संरचना",
        "कल्भर्ट र क्रसिङ",
        "फर्मवर्क तथा रिइन्फोर्समेन्ट नियन्त्रण",
      ],
    },
  },
  {
    id: "tunnels-hydropower",
    icon: "tunnel",
    title: {
      en: "Tunnels & Hydropower Civil Works",
      np: "टनेल तथा जलविद्युत् सिभिल काम",
    },
    description: {
      en: "Tunnel excavation support, portals, and hydropower civil works with strict safety control.",
      np: "टनेल उत्खनन समर्थन, पोर्टल, र जलविद्युत् सिभिल कामहरू कडाइका सुरक्षा व्यवस्थासहित।",
    },
    bullets: {
      en: [
        "Tunnel lining and portals",
        "Intake and powerhouse civil works",
        "Geological risk mitigation",
      ],
      np: [
        "टनेल लाइनिङ र पोर्टल",
        "इन्टेक र पावरहाउस सिभिल काम",
        "भू-जोखिम व्यवस्थापन",
      ],
    },
  },
  {
    id: "maintenance-rehab",
    icon: "maintenance",
    title: {
      en: "Maintenance & Rehabilitation",
      np: "मर्मत तथा पुनःस्थापना",
    },
    description: {
      en: "Repairs, retrofitting, and rehabilitation to extend asset life and performance.",
      np: "मर्मत, रेट्रोफिटिङ, र पुनःस्थापनाबाट संरचनाको आयु र प्रदर्शन बढाउने।",
    },
    bullets: {
      en: [
        "Structural repair and strengthening",
        "Waterproofing and finishing upgrades",
        "Lifecycle maintenance plans",
      ],
      np: [
        "संरचनात्मक मर्मत र सुदृढीकरण",
        "वाटरप्रूफिङ र फिनिसिङ सुधार",
        "लाइफसाइकल मर्मत योजना",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    id: "charak-memorial-hospital",
    status: "completed",
    title: {
      en: "Charak Memorial Hospital Building",
      np: "चरक मेमोरियल अस्पताल भवन",
    },
    location: {
      en: "Pokhara",
      np: "पोखरा",
    },
    summary: {
      en: "Multi-storey hospital facility with coordinated civil, architectural, and finishing works.",
      np: "बहु-तले अस्पताल सुविधा, सिभिल, आर्किटेक्चरल, र फिनिसिङ कामको समन्वित सम्पन्न।",
    },
    tags: ["Hospital", "Healthcare", "Building"],
  },
  {
    id: "gandaki-medical-college",
    status: "completed",
    title: {
      en: "Gandaki Medical College Buildings",
      np: "गण्डकी मेडिकल कलेज भवनहरू",
    },
    location: {
      en: "Pokhara",
      np: "पोखरा",
    },
    summary: {
      en: "Academic and clinical blocks delivered with durable RCC structure and modern finishes.",
      np: "दिगो RCC संरचना र आधुनिक फिनिसिङसहित शैक्षिक तथा क्लिनिकल ब्लक सम्पन्न।",
    },
    tags: ["Education", "Healthcare", "RCC"],
  },
  {
    id: "hotel-annapurna-view",
    status: "completed",
    title: {
      en: "Hotel Annapurna View",
      np: "होटेल अन्नपूर्णा भ्यू",
    },
    location: {
      en: "Sarangkot, Pokhara",
      np: "साराङकोट, पोखरा",
    },
    summary: {
      en: "Hospitality building with premium guest spaces, services, and site works.",
      np: "प्रिमियम अतिथि क्षेत्र, सेवा सुविधा, र साइट कार्यसहित आतिथ्य भवन।",
    },
    tags: ["Hotel", "Hospitality", "Building"],
  },
  {
    id: "singati-khola-tunnel",
    status: "completed",
    title: {
      en: "Singati Khola Hydropower Tunnel Civil Works",
      np: "सिङ्गाटी खोला जलविद्युत् टनेल सिभिल काम",
    },
    location: {
      en: "Dolakha",
      np: "दोलखा",
    },
    summary: {
      en: "Tunnel excavation support, lining, and associated hydropower civil structures.",
      np: "टनेल उत्खनन समर्थन, लाइनिङ, र सम्बन्धित जलविद्युत् सिभिल संरचना।",
    },
    tags: ["Hydropower", "Tunnel", "Civil"],
  },
  {
    id: "nayapul-road-upgrading",
    status: "completed",
    title: {
      en: "Nayapul–Birethanti–Ghandruk Road Upgrading",
      np: "नयाँपुल–बिरेठाँटी–घान्द्रुक सडक स्तरोन्नति",
    },
    location: {
      en: "Kaski",
      np: "कास्की",
    },
    summary: {
      en: "Road upgrade with drainage, retaining, and slope protection works.",
      np: "निकास, रिटेनिङ, र ढलान संरक्षणसहित सडक स्तरोन्नति।",
    },
    tags: ["Road", "Infrastructure", "Retaining"],
  },
  {
    id: "pokhara-pharma-factory",
    status: "ongoing",
    title: {
      en: "Pokhara Pharmaceuticals Factory Building",
      np: "पोखरा फर्मास्युटिकल्स कारखाना भवन",
    },
    location: {
      en: "Pokhara",
      np: "पोखरा",
    },
    summary: {
      en: "Industrial facility focused on compliant production spaces and utilities.",
      np: "अनुरूप उत्पादन क्षेत्र र युटिलिटीसमेतको औद्योगिक सुविधा।",
    },
    tags: ["Factory", "Industrial", "Building"],
  },
  {
    id: "pokhara-university-hospital",
    status: "ongoing",
    title: {
      en: "100-bedded Hospital, Pokhara University",
      np: "१०० शय्याको अस्पताल, पोखरा विश्वविद्यालय",
    },
    location: {
      en: "Kaski",
      np: "कास्की",
    },
    summary: {
      en: "Hospital project with phased execution and strict quality oversight.",
      np: "चरणबद्ध कार्यान्वयन र कडाइका गुणस्तर निगरानीसहित अस्पताल परियोजना।",
    },
    tags: ["Hospital", "Education", "Healthcare"],
  },
  {
    id: "pokhara-event-centre",
    status: "ongoing",
    title: {
      en: "Pokhara Event Centre",
      np: "पोखरा इभेन्ट सेन्टर",
    },
    location: {
      en: "Pokhara",
      np: "पोखरा",
    },
    summary: {
      en: "Large-span public venue with integrated services and site development.",
      np: "एकीकृत सेवासहित ठूलो स्प्यान सार्वजनिक स्थल र साइट विकास।",
    },
    tags: ["Event", "Public", "Building"],
  },
];
