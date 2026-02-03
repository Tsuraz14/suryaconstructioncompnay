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

  const heading =
    locale === "np"
      ? "१९७८ देखि अनुभवी निर्माण सेवा"
      : "Construction Services Delivered Since 1978";
  const intro =
    locale === "np"
      ? "कडाइका QA/QC, सुरक्षा प्रणाली, र उत्तरदायी साइट व्यवस्थापनसहित समग्र निर्माण तथा पूर्वाधार डेलिभरी।"
      : "End-to-end construction and infrastructure delivery backed by strict QA/QC, safety systems, and accountable site management.";

  const servicesIntro =
    locale === "np"
      ? "योजना देखि हस्तान्तरणसम्म अनुशासित कार्यान्वयन—सार्वजनिक तथा निजी क्षेत्रका ग्राहकहरूका लागि।"
      : "Disciplined execution from planning to handover for public and private sector clients.";

  const serviceItems = [
    {
      id: "building",
      title: {
        en: "Building Construction",
        np: "भवन निर्माण",
      },
      description: {
        en: "Hospitals, hotels, schools, and industrial buildings delivered by experienced RCC teams and strict QA/QC.",
        np: "अस्पताल, होटल, विद्यालय, र औद्योगिक भवन—अनुभवी RCC टोली र कडाइका QA/QC सहित।",
      },
      bullets: {
        en: [
          "RCC & structural works",
          "Turnkey project delivery",
          "Residential & commercial buildings",
        ],
        np: [
          "RCC तथा संरचनात्मक काम",
          "टर्नकी परियोजना वितरण",
          "आवासीय तथा व्यावसायिक भवन",
        ],
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M7 21V7l5-3 5 3v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      id: "roads",
      title: {
        en: "Roads & Infrastructure",
        np: "सडक तथा पूर्वाधार",
      },
      description: {
        en: "Road construction and upgrading with terrain-led design, drainage, and safety-led execution.",
        np: "सडक निर्माण तथा स्तरोन्नति—भू-आकृतिअनुसार डिजाइन, निकास, र सुरक्षा-केन्द्रित कार्यान्वयन।",
      },
      bullets: {
        en: [
          "Road upgrading & blacktopping",
          "Drainage & earthworks",
          "Urban & rural roads",
        ],
        np: [
          "सडक स्तरोन्नति तथा कालोपत्रे",
          "निकास तथा अर्थवर्क",
          "शहरी तथा ग्रामीण सडक",
        ],
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l4-18h10l4 18" />
          <path d="M12 5v4" />
          <path d="M12 13v4" />
        </svg>
      ),
    },
    {
      id: "bridges",
      title: {
        en: "Bridges & Civil Structures",
        np: "पुल तथा सिभिल संरचना",
      },
      description: {
        en: "Durable bridges and civil structures built to approved standards with certified workmanship.",
        np: "स्वीकृत मापदण्डअनुसार दिगो पुल तथा सिभिल संरचना—प्रमाणित कार्यसम्पादनसहित।",
      },
      bullets: {
        en: [
          "RCC & steel structures",
          "Foundation and substructure works",
          "Safety-compliant execution",
        ],
        np: [
          "RCC तथा स्टिल संरचना",
          "फाउन्डेशन र सबस्ट्रक्चर काम",
          "सुरक्षा मापदण्डअनुसार कार्यान्वयन",
        ],
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18h18" />
          <path d="M5 18v-3a7 7 0 0 1 14 0v3" />
          <path d="M8 15v-2" />
          <path d="M16 15v-2" />
        </svg>
      ),
    },
    {
      id: "hydropower",
      title: {
        en: "Hydropower & Tunnel Works",
        np: "जलविद्युत तथा टनेल काम",
      },
      description: {
        en: "Tunnel, intake, and powerhouse civil works with controlled excavation and compliance oversight.",
        np: "नियन्त्रित उत्खनन र अनुपालन निगरानीसहित टनेल, इन्टेक, र पावरहाउस सिभिल काम।",
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V12a8 8 0 0 1 16 0v8" />
          <path d="M9 20v-4a3 3 0 0 1 6 0v4" />
          <path d="M8 10h8" />
        </svg>
      ),
    },
    {
      id: "maintenance",
      title: {
        en: "Maintenance & Rehabilitation",
        np: "मर्मत तथा पुनःस्थापना",
      },
      description: {
        en: "Retrofitting and rehabilitation guided by site assessments to extend asset life safely.",
        np: "साइट मूल्याङ्कनमा आधारित रेट्रोफिटिङ र पुनःस्थापना—संरचनाको आयु सुरक्षित रूपमा बढाउन।",
      },
      bullets: {
        en: [
          "Structural strengthening",
          "Renovation & repair works",
          "Safety and compliance upgrades",
        ],
        np: [
          "संरचनात्मक सुदृढीकरण",
          "नवीकरण तथा मर्मत काम",
          "सुरक्षा तथा अनुपालन सुधार",
        ],
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 6l4 4" />
          <path d="M7 18l7-7" />
          <path d="M5 19l-1-4 4 1 10-10-3-3L5 13" />
        </svg>
      ),
    },
    {
      id: "management",
      title: {
        en: "Project Management & Supervision",
        np: "परियोजना व्यवस्थापन तथा सुपरभिजन",
      },
      description: {
        en: "Planning, supervision, and QA/QC reporting that keeps schedule, cost, and quality aligned.",
        np: "तालिका, लागत, र गुणस्तर मिलाउन परियोजना योजना, सुपरभिजन, र QA/QC रिपोर्टिङ।",
      },
      bullets: {
        en: [
          "Scheduling & coordination",
          "QA/QC monitoring",
          "Cost & progress control",
        ],
        np: [
          "तालिकाकरण तथा समन्वय",
          "QA/QC निगरानी",
          "लागत तथा प्रगति नियन्त्रण",
        ],
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6l1 2h4v16H4V5h4l1-2Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const processSteps =
    locale === "np"
      ? [
          {
            title: "परामर्श र योजना",
            body: "परियोजना आवश्यकताहरू, सम्भाव्यता र योजनाबारे बुझाइ।",
          },
          {
            title: "डिजाइन र परिचालन",
            body: "इन्जिनियरिङ समन्वय, स्रोत योजना, र साइट परिचालन।",
          },
          {
            title: "कार्यान्वयन र गुणस्तर नियन्त्रण",
            body: "कडाइका सुरक्षा तथा गुणस्तर जाँचसहित नियन्त्रित कार्यान्वयन।",
          },
          {
            title: "हस्तान्तरण र समर्थन",
            body: "दस्तावेजसहित समयमै हस्तान्तरण र पछि आवश्यक सहयोग।",
          },
        ]
      : [
          {
            title: "Consultation & Planning",
            body: "Understanding project requirements, feasibility, and planning.",
          },
          {
            title: "Design & Mobilization",
            body: "Engineering coordination, resource planning, and site mobilization.",
          },
          {
            title: "Execution & Quality Control",
            body: "Controlled execution with strict safety and quality checks.",
          },
          {
            title: "Handover & Support",
            body: "Timely handover with documentation and post-completion support.",
          },
        ];

  const whyChoose =
    locale === "np"
      ? [
          {
            title: "दशकौँको अनुभव",
            body: "विभिन्न भूगोल र जटिल परियोजनामा सिद्ध अनुभव।",
          },
          {
            title: "बलियो प्राविधिक टोली र उपकरण",
            body: "प्रशिक्षित इन्जिनियर, साइट टोली, र आधुनिक उपकरण।",
          },
          {
            title: "संस्थागत परियोजनामा विश्वासिलो ट्र्याक रेकर्ड",
            body: "स्वास्थ्य, शिक्षा, पूर्वाधार लगायतका परियोजनामा प्रभावकारी डेलिभरी।",
          },
        ]
      : [
          {
            title: "Decades of Experience",
            body: "Proven delivery across diverse terrain and complex scopes.",
          },
          {
            title: "Strong Technical Team & Equipment",
            body: "Skilled engineers, site teams, and reliable modern equipment.",
          },
          {
            title: "Proven Track Record with Institutions",
            body: "Trusted delivery for healthcare, education, and infrastructure clients.",
          },
        ];

  const ctaTitle =
    locale === "np" ? "परियोजना सुरु गर्न चाहनुहुन्छ?" : "Have a project in mind?";
  const ctaText =
    locale === "np"
      ? "परियोजना दायरा र समयरेखा साझा गर्नुहोस्—हाम्रो इन्जिनियर टोलीले छिटो प्रतिक्रिया र स्पष्ट डेलिभरी योजना दिन्छ।"
      : "Share the scope and timeline—our engineers respond promptly with a clear delivery plan.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.services, path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section align="center">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-12 md:px-12">
          <div className="absolute inset-0">
            <Image
              src="/images/nivix.webp"
              alt={
                locale === "np"
                  ? "संरचना र उपकरण देखिने सक्रिय निर्माण साइट"
                  : "Active construction site with structural works and machinery"
              }
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {labels.nav.services}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                {heading}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {intro}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "मुख्य सेवा" : "Core Services"}
        title={locale === "np" ? "निर्माण सेवाहरूको गहिराइ" : "Depth of Services"}
        description={servicesIntro}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((service, index) => (
            <Reveal key={service.id} delay={index * 70}>
              <article className="card-surface card-hover group h-full p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-muted/60 text-brand transition duration-300 group-hover:scale-105">
                    <span className="h-6 w-6">{service.icon}</span>
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight text-foreground">
                      {service.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {service.bullets[locale].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "प्रक्रिया" : "Process"}
        title={
          locale === "np" ? "हाम्रो निर्माण प्रक्रिया" : "Our Construction Process"
        }
        description={
          locale === "np"
            ? "समयमै डेलिभरीका लागि व्यवस्थित चरणहरू र स्पष्ट जिम्मेवारी।"
            : "Structured phases with clear responsibility for timely delivery."
        }
      >
        <div className="relative md:pt-8">
          <div className="absolute left-4 top-6 bottom-6 w-px bg-border md:hidden" />
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-border md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="relative pl-10 md:pl-0">
                  <span className="absolute left-4 top-6 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-brand md:left-1/2 md:top-4 md:-translate-x-1/2 md:-translate-y-1/2">
                    {index + 1}
                  </span>
                  <div className="card-surface p-6 md:pt-10">
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

      <Section
        eyebrow={locale === "np" ? "हामी किन" : "Why Us"}
        title={
          locale === "np"
            ? "सुरक्षा, गुणस्तर, र अनुभवमा आधारित सेवा"
            : "Service Delivery Built on Safety, Quality, and Experience"
        }
        description={
          locale === "np"
            ? "परियोजनालाई समय, बजेट, र गुणस्तरमा मिलाउने विश्वसनीय अभ्यास।"
            : "Reliable practices that align schedule, budget, and quality."
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          {whyChoose.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="card-surface card-hover p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand" />
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
              className="btn-primary px-7 py-3"
            >
              {locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team"}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
