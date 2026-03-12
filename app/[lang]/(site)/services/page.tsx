import Image from "next/image";
import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import Reveal from "@/components/motion/reveal";
import JsonLd from "@/components/seo/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const title = locale === "np" ? labels.nav.services : "Services";
  const description =
    locale === "np"
      ? "भवन, सडक, पुल, टनेल, र पुनःस्थापना सेवाहरू—कडा QA/QC र सुरक्षित कार्यान्वयन।"
      : "Building, roads, bridges, tunnels, and rehabilitation services delivered with strong QA/QC and safe execution.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/services"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type ServicesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ServicesPage({ params }: ServicesPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heroTitle =
    locale === "np"
      ? "सटीकतासहित प्रदान गरिने निर्माण सेवा"
      : "Construction Services Delivered with Precision";
  const heroIntro =
    locale === "np"
      ? "हामी अनुभवी पेशेवर, आधुनिक उपकरण, र कडा गुणस्तर मापदण्डको समर्थनमा समग्र निर्माण तथा पूर्वाधार सेवाहरू प्रदान गर्छौं।"
      : "We provide comprehensive construction and infrastructure services supported by experienced professionals, modern equipment, and strict quality standards.";

  const coreServicesTitle =
    locale === "np" ? "मुख्य सेवाहरू" : "Core Services";

  const serviceBlocks = [
    {
      id: "building-construction",
      title: {
        en: "Building Construction",
        np: "भवन निर्माण",
      },
      description: {
        en: "Hospitals, hotels, schools, commercial, and industrial buildings delivered with structural precision and safety.",
        np: "अस्पताल, होटल, विद्यालय, व्यावसायिक तथा औद्योगिक भवनहरू संरचनात्मक सटीकता र सुरक्षासहित निर्माण।",
      },
      bullets: {
        en: [
          "RCC & structural works",
          "Turnkey project delivery",
          "Residential & institutional buildings",
        ],
        np: [
          "RCC तथा संरचनात्मक काम",
          "टर्नकी परियोजना डेलिभरी",
          "आवासीय तथा संस्थागत भवन",
        ],
      },
      image: "/images/services/building-construction.webp",
      alt: {
        en: "Hospital and institutional building construction",
        np: "अस्पताल तथा संस्थागत भवन निर्माण",
      },
    },
    {
      id: "roads-infrastructure",
      title: {
        en: "Roads & Infrastructure",
        np: "सडक तथा पूर्वाधार",
      },
      description: {
        en: "Road construction and upgrading projects that improve connectivity and durability.",
        np: "सडक निर्माण तथा स्तरोन्नति परियोजनाहरू जसले पहुँच र दिगोपन बढाउँछन्।",
      },
      bullets: {
        en: [
          "Road upgrading & blacktopping",
          "Drainage and earthworks",
          "Urban and rural infrastructure",
        ],
        np: [
          "सडक स्तरोन्नति तथा कालोपत्रे",
          "निकास तथा अर्थवर्क",
          "शहरी तथा ग्रामीण पूर्वाधार",
        ],
      },
      image: "/images/services/roads-infrastructure.webp",
      alt: {
        en: "Road upgrading and infrastructure works",
        np: "सडक स्तरोन्नति तथा पूर्वाधार काम",
      },
    },
    {
      id: "bridges-structures",
      title: {
        en: "Bridges & Civil Structures",
        np: "पुल तथा सिभिल संरचना",
      },
      description: {
        en: "Execution of bridges and complex civil structures meeting engineering and safety standards.",
        np: "इन्जिनियरिङ र सुरक्षा मापदण्डअनुसार पुल तथा जटिल सिभिल संरचनाहरूको कार्यान्वयन।",
      },
      bullets: {
        en: [
          "RCC and steel structures",
          "Foundation & substructure works",
          "Compliance-driven execution",
        ],
        np: [
          "RCC तथा स्टिल संरचना",
          "फाउन्डेसन र सबस्ट्रक्चर काम",
          "अनुपालन-केन्द्रित कार्यान्वयन",
        ],
      },
      image: "/images/services/bridges-structures.webp",
      alt: {
        en: "Bridge and civil structure execution",
        np: "पुल तथा सिभिल संरचना कार्यान्वयन",
      },
    },
    {
      id: "hydropower-tunnel",
      title: {
        en: "Hydropower & Tunnel Works",
        np: "जलविद्युत तथा टनेल काम",
      },
      description: {
        en: "Civil works for hydropower projects including tunnels, waterways, and powerhouse structures.",
        np: "जलविद्युत् परियोजनाका लागि टनेल, जलमार्ग, र पावरहाउस संरचनाको सिभिल काम।",
      },
      bullets: {
        en: [
          "Tunnel excavation support",
          "Powerhouse civil works",
          "Water conveyance structures",
        ],
        np: [
          "टनेल उत्खनन समर्थन",
          "पावरहाउस सिभिल काम",
          "पानी वहन संरचनाहरू",
        ],
      },
      image: "/images/services/hydropower-tunnel.webp",
      alt: {
        en: "Hydropower tunnel civil works",
        np: "जलविद्युत टनेल सिभिल काम",
      },
    },
    {
      id: "maintenance-rehab",
      title: {
        en: "Maintenance & Rehabilitation",
        np: "मर्मत तथा पुनःस्थापना",
      },
      description: {
        en: "Repair, strengthening, and rehabilitation of existing structures.",
        np: "विद्यमान संरचनाको मर्मत, सुदृढीकरण, र पुनःस्थापना।",
      },
      bullets: {
        en: [
          "Structural strengthening",
          "Renovation & retrofitting",
          "Safety upgrades",
        ],
        np: [
          "संरचनात्मक सुदृढीकरण",
          "नवीकरण तथा रेट्रोफिटिङ",
          "सुरक्षा सुधार",
        ],
      },
      image: "/images/services/maintenance-rehab.webp",
      alt: {
        en: "Structure maintenance and rehabilitation",
        np: "संरचना मर्मत तथा पुनःस्थापना",
      },
    },
    {
      id: "construction-consultation",
      title: {
        en: "Construction Consultation",
        np: "निर्माण परामर्श सेवा",
      },
      description: {
        en: "Surya Construction Company also provides construction consultation services to support project planning, feasibility assessment, cost estimation, and execution strategies. Our practical construction experience allows us to guide clients in making informed decisions before and during project development.",
        np: "सूर्य कन्स्ट्रक्सन कम्पनीले निर्माण परियोजनाको योजना निर्माण, सम्भाव्यता अध्ययन, लागत अनुमान तथा कार्यान्वयन रणनीतिका लागि निर्माण परामर्श सेवा पनि प्रदान गर्दछ। हाम्रो व्यावहारिक निर्माण अनुभवले ग्राहकहरूलाई परियोजना विकास अघि र कार्यान्वयनको क्रममा सही निर्णय लिन सहयोग गर्दछ।",
      },
      bullets: {
        en: [
          "Project feasibility guidance",
          "Preliminary cost estimation",
          "Construction planning support",
          "Technical advice for project execution",
        ],
        np: [
          "परियोजनाको सम्भाव्यता सम्बन्धी परामर्श",
          "प्रारम्भिक लागत अनुमान",
          "निर्माण योजना तयारी सहयोग",
          "परियोजना कार्यान्वयनका लागि प्राविधिक सल्लाह",
        ],
      },
      image: "/images/services/construction-consultation.webp",
      alt: {
        en: "Construction consultation and planning discussion",
        np: "निर्माण परामर्श तथा योजना छलफल",
      },
    },
  ];

  const processTitle =
    locale === "np" ? "हाम्रो निर्माण प्रक्रिया" : "Our Construction Process";
  const processSteps =
    locale === "np"
      ? [
          {
            title: "परामर्श र योजना",
            body: "परियोजना आवश्यकताहरू, सम्भाव्यता, र कार्यान्वयन रणनीति बुझाइ।",
          },
          {
            title: "इन्जिनियरिङ र परिचालन",
            body: "डिजाइन समन्वय, स्रोत योजना, र साइट परिचालन।",
          },
          {
            title: "कार्यान्वयन र गुणस्तर नियन्त्रण",
            body: "कडाइका सुरक्षा तथा QA/QC जाँचसहित नियन्त्रित कार्यान्वयन।",
          },
          {
            title: "हस्तान्तरण र समर्थन",
            body: "दस्तावेजसहित समयमै हस्तान्तरण र निर्माणपछिको सहयोग।",
          },
        ]
      : [
          {
            title: "Consultation & Planning",
            body: "Understanding project requirements, feasibility, and execution strategy.",
          },
          {
            title: "Engineering & Mobilization",
            body: "Design coordination, resource planning, and site mobilization.",
          },
          {
            title: "Execution & Quality Control",
            body: "Controlled construction with strict safety and QA/QC checks.",
          },
          {
            title: "Handover & Support",
            body: "Timely handover with documentation and post-completion support.",
          },
        ];

  const trustTitle =
    locale === "np" ? "हामी किन विश्वासयोग्य" : "Why Clients Trust Us";
  const trustReasons =
    locale === "np"
      ? [
          {
            title: "दशकौँको निर्माण अनुभव",
            body: "१९७८ देखि सरकारी, स्वास्थ्य, र संस्थागत परियोजनाहरूमा अनुशासित कार्यान्वयन।",
          },
          {
            title: "दक्ष प्राविधिक टोली र उपकरण",
            body: "जटिल भू–आकृति र कामको दायरा अनुसार दक्ष इन्जिनियर, साइट टोली, र उपकरण।",
          },
          {
            title: "प्रमाणित सुरक्षा तथा गुणस्तर प्रणाली",
            body: "प्रत्येक काममा QA/QC अभ्यास, सुरक्षा प्रोटोकल, र अनुपालन दस्तावेज।",
          },
        ]
      : [
          {
            title: "Decades of Construction Experience",
            body: "Government, healthcare, and institutional projects delivered with disciplined execution since 1978.",
          },
          {
            title: "Skilled Technical Team & Equipment",
            body: "Skilled engineers, site teams, and equipment matched to complex terrain and scope.",
          },
          {
            title: "Proven Safety & Quality Systems",
            body: "Audited QA/QC practices, safety protocols, and compliance documentation on every job.",
          },
        ];

  const ctaTitle =
    locale === "np" ? "निर्माण परियोजना योजना गर्दै हुनुहुन्छ?" : "Planning a construction project?";
  const ctaText =
    locale === "np"
      ? "गुणस्तर र कार्यान्वयनमा विश्वसनीय निर्माण साझेदारसँग काम गर्नुहोस्।"
      : "Engage a construction partner trusted for quality and execution.";
  const ctaButton =
    locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team";
  const equipmentSupportTitle =
    locale === "np" ? "उपकरण भाडा सहयोग" : "Equipment Rental Support";
  const equipmentSupportText =
    locale === "np"
      ? "निर्माण सेवासँगै परियोजना-आधारित भाडा सहयोगका लागि चयनित उपकरणहरू पनि उपलब्ध छन्।"
      : "In addition to construction services, we also offer selected equipment for project-based rental support.";
  const equipmentSupportCta =
    locale === "np" ? "उपकरण भाडा हेर्नुहोस्" : "View Equipment Rental";
  const equipmentSupportItems = [
    {
      code: "GR",
      name: { en: "Grader", np: "ग्रेडर" },
      description: {
        en: "Road leveling and profile shaping support.",
        np: "सडक सम्याउने तथा प्रोफाइल मिलाउने सहयोग।",
      },
    },
    {
      code: "EX",
      name: { en: "Excavator", np: "एक्स्काभेटर" },
      description: {
        en: "Excavation and heavy earthmoving tasks.",
        np: "उत्खनन तथा भारी माटो सार्ने कार्यहरू।",
      },
    },
    {
      code: "BL",
      name: { en: "Backhoe Loader", np: "ब्याकहो लोडर" },
      description: {
        en: "Trenching and loading for site operations.",
        np: "साइट परिचालनका लागि ट्रेन्चिङ र लोडिङ।",
      },
    },
    {
      code: "TP",
      name: { en: "Tipper", np: "टिपर" },
      description: {
        en: "Bulk material transport across projects.",
        np: "परियोजनामा ठूलो परिमाणमा सामग्री ढुवानी।",
      },
    },
  ] as const;

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.services, path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Reveal delay={0}>
                <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                  {heroTitle}
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {heroIntro}
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="group">
              <div className="relative h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[360px]">
                <Image
                  src="/images/services/overview.webp"
                  alt={
                    locale === "np"
                      ? "सक्रिय निर्माण साइटको सेवा अवलोकन"
                      : "Service overview at an active construction site"
                  }
                  fill
                  priority
                  className="object-cover transition duration-700 ease-out motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:translate-y-0"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section title={coreServicesTitle}>
        <div className="space-y-10">
          {serviceBlocks.map((service, index) => (
            <Reveal key={service.id} delay={index * 80} className="group">
              <div
                className={`flex flex-col gap-8 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg md:p-8 lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-64 lg:h-[320px] lg:w-1/2">
                  <Image
                    src={service.image}
                    alt={service.alt[locale]}
                    fill
                    className="object-cover transition duration-700 ease-out motion-safe:scale-[1.05] motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:scale-100 motion-safe:group-[.opacity-100]:translate-y-0"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
                </div>
                <div className="space-y-4 lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title[locale]}
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/80">
                    {service.description[locale]}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80 md:text-base">
                    {service.bullets[locale].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={processTitle}>
        <div className="relative">
          <Reveal className="group absolute inset-x-6 top-6 hidden md:block">
            <div className="h-px origin-left scale-x-0 bg-border/80 transition duration-700 ease-out motion-safe:group-[.opacity-100]:scale-x-100" />
          </Reveal>
          <Reveal className="group absolute bottom-0 left-4 top-2 w-px md:hidden">
            <div className="h-full origin-top scale-y-0 bg-border/80 transition duration-700 ease-out motion-safe:group-[.opacity-100]:scale-y-100" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="relative pl-12 md:pl-0">
                  <span className="absolute left-4 top-2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-sm font-semibold text-brand md:left-1/2 md:top-0 md:-translate-x-1/2 md:-translate-y-1/2">
                    {index + 1}
                  </span>
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-5 pt-8 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg md:pt-10">
                    <h3 className="text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section title={trustTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {trustReasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4Z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={equipmentSupportTitle} description={equipmentSupportText}>
        <div className="grid gap-4 md:grid-cols-2">
          {equipmentSupportItems.map((item, index) => (
            <Reveal key={item.name.en} delay={index * 70}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-xs font-semibold text-brand">
                  {item.code}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.name[locale]}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {item.description[locale]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="pt-7">
          <Link
            href={`/${locale}/equipment-rental`}
            className="btn-secondary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
          >
            {equipmentSupportCta}
          </Link>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {ctaTitle}
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {ctaText}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
            >
              {ctaButton}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
