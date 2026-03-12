import { type Lang } from "@/lib/i18n";

export type BlogPost = {
  slug: string;
  title: { en: string; np: string };
  excerpt: { en: string; np: string };
  content: { en: string; np: string };
  date: string;
  author: "Surya Construction Team";
  image: string;
  category: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "how-road-construction-projects-are-executed-in-nepal",
    title: {
      en: "How Road Construction Projects Are Executed in Nepal",
      np: "नेपालमा सडक निर्माण परियोजना कसरी कार्यान्वयन गरिन्छ",
    },
    excerpt: {
      en: "A practical look at surveying, earthwork, drainage, pavement layers, and quality control for road delivery.",
      np: "सडक परियोजनामा सर्वेक्षण, अर्थवर्क, ड्रेनेज, पेभमेन्ट लेयर, र गुणस्तर नियन्त्रणको व्यावहारिक प्रक्रिया।",
    },
    content: {
      en: "Road construction in Nepal begins with route survey, geotechnical checks, and staged planning for terrain and weather conditions.\n\nAfter site clearing, teams complete earthwork and slope stabilization before drainage structures are installed. Proper drainage is critical to long-term road durability.\n\nBase and sub-base layers are then compacted in controlled sequences, followed by bituminous works and edge finishing. Regular density tests, line-level checks, and material tests are used to maintain quality.\n\nWith structured supervision and milestone-based execution, road projects can be delivered safely and with better lifecycle performance.",
      np: "नेपालमा सडक निर्माण परियोजना मार्ग सर्वेक्षण, भू-प्राविधिक जाँच, र भूगोल तथा मौसमअनुसार चरणगत योजना निर्माणबाट सुरु हुन्छ।\n\nसाइट सफाइपछि अर्थवर्क र ढलान स्थिरीकरण गरिन्छ, त्यसपछि ड्रेनेज संरचना निर्माण गरिन्छ। दीर्घकालीन टिकाउ सडकका लागि उचित ड्रेनेज अत्यन्त आवश्यक हुन्छ।\n\nत्यसपछि सब-बेस र बेस लेयर नियन्त्रित प्रक्रियामा कम्प्याक्सन गरिन्छ, अनि बिटुमिनस कार्य र किनारा फिनिसिङ गरिन्छ। गुणस्तर कायम राख्न घनत्व परीक्षण, लाइन-लेभल जाँच, र सामग्री परीक्षण गरिन्छ।\n\nसंरचित सुपरभिजन र माइलस्टोन-आधारित कार्यान्वयनबाट सडक परियोजना सुरक्षित रूपमा र राम्रो दीर्घकालीन प्रदर्शनसहित सम्पन्न गर्न सकिन्छ।",
    },
    date: "2026-02-10",
    author: "Surya Construction Team",
    image: "/images/projects/nayapul-road-upgrading.webp",
    category: "Road Construction",
  },
  {
    slug: "excavation-and-earthwork-planning-for-hilly-terrain",
    title: {
      en: "Excavation and Earthwork Planning for Hilly Terrain",
      np: "पहाडी भूभागका लागि उत्खनन र अर्थवर्क योजना",
    },
    excerpt: {
      en: "Key planning points for cut-and-fill balance, slope protection, and safe earthwork operations in complex terrain.",
      np: "जटिल भूभागमा कट-फिल सन्तुलन, ढलान संरक्षण, र सुरक्षित अर्थवर्क परिचालनका मुख्य बुँदाहरू।",
    },
    content: {
      en: "Earthwork in hilly terrain requires pre-planned cut-and-fill strategy, access logistics, and equipment sequencing.\n\nBefore excavation starts, teams should map slope conditions, identify unstable zones, and define temporary drainage and spoil disposal plans.\n\nDuring execution, benching, controlled excavation depth, and compaction in thin layers help reduce settlement and slope failures. Retaining and protection works should be integrated early.\n\nA disciplined earthwork plan minimizes rework, controls cost, and keeps downstream activities on schedule.",
      np: "पहाडी भूभागमा अर्थवर्क गर्दा कट-फिल रणनीति, पहुँच व्यवस्थापन, र उपकरण परिचालन क्रम पहिल्यै स्पष्ट हुनुपर्छ।\n\nउत्खनन सुरु हुनुअघि ढलान अवस्था नक्सांकन, अस्थिर क्षेत्र पहिचान, अस्थायी ड्रेनेज, र स्पोइल व्यवस्थापन योजना तय गर्नुपर्छ।\n\nकार्यान्वयनका क्रममा बेन्चिङ, नियन्त्रित उत्खनन गहिराइ, र पातला तहमा कम्प्याक्सनले सेटलमेन्ट र ढलान असफलताको जोखिम घटाउँछ। रिटेनिङ र संरक्षण कार्य सुरुदेखि समावेश गर्नुपर्छ।\n\nअनुशासित अर्थवर्क योजनाले पुनःकाम घटाउँछ, लागत नियन्त्रण गर्छ, र पछिल्ला गतिविधिहरू समयमै अगाडि बढाउन सहयोग गर्छ।",
    },
    date: "2026-01-22",
    author: "Surya Construction Team",
    image: "/images/services/roads-infrastructure.webp",
    category: "Earthwork",
  },
  {
    slug: "quality-control-checkpoints-for-rcc-building-projects",
    title: {
      en: "Quality Control Checkpoints for RCC Building Projects",
      np: "RCC भवन परियोजनाका गुणस्तर नियन्त्रण जाँच बुँदाहरू",
    },
    excerpt: {
      en: "Concrete quality, reinforcement checks, formwork control, and documentation checkpoints that reduce structural risk.",
      np: "संरचनात्मक जोखिम घटाउन कंक्रिट गुणस्तर, रिइन्फोर्समेन्ट जाँच, फर्मवर्क नियन्त्रण, र दस्तावेजीकरण बुँदाहरू।",
    },
    content: {
      en: "RCC projects require quality control from batching to curing. Material approvals and test records should be maintained before each pour.\n\nReinforcement placement, bar spacing, cover blocks, and lap length checks must be verified before concrete placement. Formwork alignment and support integrity are equally critical.\n\nDuring concreting, slump checks, cube sampling, and vibration control improve consistency. Post-pour curing schedules protect long-term strength.\n\nClear inspection hold points and records across each stage improve accountability and overall project quality.",
      np: "RCC परियोजनामा ब्याचिङदेखि क्युरिङसम्म गुणस्तर नियन्त्रण निरन्तर हुनुपर्छ। प्रत्येक पोरिङअघि सामग्री स्वीकृति र परीक्षण अभिलेख सुरक्षित राख्नुपर्छ।\n\nरिइन्फोर्समेन्टको स्थिति, बार स्पेसिङ, कभर ब्लक, र ल्याप लम्बाइ कंक्रिट हाल्नु अघि जाँच गर्नुपर्छ। फर्मवर्कको एलाइनमेन्ट र सपोर्ट स्थायित्व पनि समान रूपमा महत्वपूर्ण हुन्छ।\n\nकंक्रिटिङका क्रममा स्लम्प जाँच, क्युब स्याम्पलिङ, र उचित भाइब्रेशनले गुणस्तर स्थिर बनाउँछ। पोरिङपछिको क्युरिङ तालिकाले दीर्घकालीन मजबुती सुनिश्चित गर्छ।\n\nचरणगत निरीक्षण होल्ड पोइन्ट र अभिलेख व्यवस्थापनले उत्तरदायित्व र समग्र परियोजना गुणस्तर दुवै सुधार गर्छ।",
    },
    date: "2025-12-18",
    author: "Surya Construction Team",
    image: "/images/home/service-building.webp",
    category: "Quality Control",
  },
  {
    slug: "selecting-construction-equipment-for-time-bound-projects",
    title: {
      en: "Selecting Construction Equipment for Time-Bound Projects",
      np: "समय-सीमित परियोजनाका लागि निर्माण उपकरण छनोट",
    },
    excerpt: {
      en: "How to align equipment capacity, site constraints, and schedule targets to avoid execution delays.",
      np: "कार्यान्वयन ढिलाइ रोक्न उपकरण क्षमता, साइट सीमाहरू, र समयतालिकाबीच मिलान गर्ने व्यावहारिक तरिका।",
    },
    content: {
      en: "Equipment selection should be tied to actual productivity targets, terrain constraints, and mobilization lead time.\n\nFor time-bound projects, matching machine size to haul distance, cycle time, and access width is essential. Over-sized or under-sized machines both reduce efficiency.\n\nCoordination between excavation, compaction, transport, and water support equipment improves daily output and reduces idle time.\n\nA project-specific equipment plan with backup options helps maintain progress when site conditions change.",
      np: "उपकरण छनोट वास्तविक उत्पादकता लक्ष्य, भूभागका सीमाहरू, र परिचालन तयारी समयसँग प्रत्यक्ष रूपमा जोडिनुपर्छ।\n\nसमय-सीमित परियोजनामा हाउल दूरी, साइकल समय, र पहुँच चौडाइअनुसार उपकरण आकार मिलाउनु अत्यावश्यक हुन्छ। धेरै ठूलो वा सानो दुवै उपकरणले दक्षता घटाउँछ।\n\nउत्खनन, कम्प्याक्सन, ढुवानी, र पानी समर्थन उपकरणबीच समन्वय हुँदा दैनिक उत्पादन बढ्छ र idle time घट्छ।\n\nपरियोजना-विशिष्ट उपकरण योजना र वैकल्पिक ब्याकअप व्यवस्थाले साइट अवस्था परिवर्तन हुँदा पनि प्रगति निरन्तर राख्न मद्दत गर्छ।",
    },
    date: "2025-11-05",
    author: "Surya Construction Team",
    image: "/images/equipment/equipment-hero.webp",
    category: "Equipment Planning",
  },
];

export function getBlogsSorted() {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getLocalizedBlogDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "np" ? "ne-NP" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
