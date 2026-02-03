import type { ReactNode } from "react";
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

  const title = locale === "np" ? labels.nav.about : "About";
  const description =
    locale === "np"
      ? "१९७८ देखि निर्माण अनुभव—सिभिल र भवन परियोजनामा पारदर्शी समन्वय र उत्तरदायी कार्यान्वयन।"
      : "Since 1978, delivering civil and building projects with transparent coordination and accountable execution.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/about"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

type Pillar = {
  title: string;
  body: string;
  icon: ReactNode;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heroEyebrow = locale === "np" ? "१९७८ देखि" : "Since 1978";
  const heroTitle =
    locale === "np"
      ? "नेपालमा विश्वासिलो निर्माणको विरासत"
      : "A Legacy of Trusted Construction in Nepal";
  const heroIntro =
    locale === "np"
      ? "सूर्य कन्स्ट्रक्सन कम्पनी प्रा.लि. ले स्थानीय निर्माण फर्मबाट नेपालभरि संस्थागत, व्यावसायिक, र पूर्वाधार परियोजनाका लागि विश्वासिलो साझेदारको रूपमा विकास गरेको छ।"
      : "Surya Construction Company Pvt. Ltd. has grown from a local construction firm into a trusted partner for institutional, commercial, and infrastructure projects across Nepal.";

  const timeline: TimelineItem[] =
    locale === "np"
      ? [
          {
            year: "१९७८",
            title: "स्थापना",
            body: "पोखरामा अमृत कन्स्ट्रक्सन फर्मका रूपमा स्थापना भई प्रारम्भिक निर्माण काममा केन्द्रित।",
          },
          {
            year: "२००२",
            title: "स्तरोन्नति",
            body: "सूर्य कन्स्ट्रक्सन कम्पनी प्रा.लि.का रूपमा दर्ता भई जनशक्ति, क्षमता, र उपकरण विस्तार।",
          },
          {
            year: "आज",
            title: "आधुनिक डेलिभरी",
            body: "भवन, सडक, पुल, र जलविद्युत् सिभिल काममा संरचित सुरक्षा र गुणस्तर प्रणालीसहित डेलिभरी।",
          },
        ]
      : [
          {
            year: "1978",
            title: "Established",
            body: "Established in Pokhara as Amrit Construction Firm, delivering early construction works with a focus on workmanship.",
          },
          {
            year: "2002",
            title: "Upgraded",
            body: "Upgraded and registered as Surya Construction Company Pvt. Ltd., expanding capacity, manpower, and machinery.",
          },
          {
            year: "Today",
            title: "Institutional Delivery",
            body: "Delivering complex buildings, roads, bridges, and hydropower civil works with structured safety and quality systems.",
          },
        ];

  const leadershipTitle = locale === "np" ? "नेतृत्व" : "Leadership";
  const leadershipRole =
    locale === "np" ? "प्रबन्ध निर्देशक" : "Managing Director";
  const leadershipBody =
    locale === "np"
      ? "जिम्मेवारी, अनुशासित कार्यान्वयन, र दीर्घकालीन ग्राहक विश्वासमा आधारित नेतृत्व।"
      : "Leadership grounded in responsibility, disciplined execution, and long-term client trust.";

  const pillars: Pillar[] =
    locale === "np"
      ? [
          {
            title: "भवन निर्माण",
            body: "अस्पताल, होटल, व्यावसायिक तथा संस्थागत भवन निर्माण।",
            icon: (
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
                <path d="M3 21h18" />
                <path d="M7 21V7l5-3 5 3v14" />
                <path d="M9 21v-6h6v6" />
              </svg>
            ),
          },
          {
            title: "सडक तथा पूर्वाधार",
            body: "सडक निर्माण, स्तरोन्नति, र पूर्वाधार विकास।",
            icon: (
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
                <path d="M3 21l4-18h10l4 18" />
                <path d="M12 5v4" />
                <path d="M12 13v4" />
              </svg>
            ),
          },
          {
            title: "पुल तथा सिभिल संरचना",
            body: "पुल, RCC तथा स्टिल संरचना, र जटिल सिभिल काम।",
            icon: (
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
                <path d="M3 18h18" />
                <path d="M5 18v-3a7 7 0 0 1 14 0v3" />
                <path d="M8 15v-2" />
                <path d="M16 15v-2" />
              </svg>
            ),
          },
          {
            title: "जलविद्युत् तथा टनेल सिभिल काम",
            body: "टनेल, जलमार्ग, र पावरहाउस सिभिल संरचना।",
            icon: (
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
                <path d="M4 20V12a8 8 0 0 1 16 0v8" />
                <path d="M9 20v-4a3 3 0 0 1 6 0v4" />
              </svg>
            ),
          },
        ]
      : [
          {
            title: "Buildings",
            body: "Hospitals, hotels, commercial, and institutional buildings.",
            icon: (
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
                <path d="M3 21h18" />
                <path d="M7 21V7l5-3 5 3v14" />
                <path d="M9 21v-6h6v6" />
              </svg>
            ),
          },
          {
            title: "Roads & Infrastructure",
            body: "Road construction, upgrading, and infrastructure development.",
            icon: (
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
                <path d="M3 21l4-18h10l4 18" />
                <path d="M12 5v4" />
                <path d="M12 13v4" />
              </svg>
            ),
          },
          {
            title: "Bridges & Civil Structures",
            body: "Bridges, RCC and steel structures, and complex civil works.",
            icon: (
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
                <path d="M3 18h18" />
                <path d="M5 18v-3a7 7 0 0 1 14 0v3" />
                <path d="M8 15v-2" />
                <path d="M16 15v-2" />
              </svg>
            ),
          },
          {
            title: "Hydropower & Tunnel Civil Works",
            body: "Tunnels, waterways, and powerhouse civil structures.",
            icon: (
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
                <path d="M4 20V12a8 8 0 0 1 16 0v8" />
                <path d="M9 20v-4a3 3 0 0 1 6 0v4" />
              </svg>
            ),
          },
        ];

  const safetyTitle = locale === "np" ? "गुणस्तर र सुरक्षा संस्कृति" : "Quality & Safety Culture";
  const safetyCopy =
    locale === "np"
      ? "सुरक्षा र गुणस्तर योजना, परिचालन, कार्यान्वयन, रिपोर्टिङ, र हस्तान्तरणसम्म प्रत्येक चरणमा समावेश छ।"
      : "Safety and quality are built into every stage — from planning and mobilization to execution, reporting, and handover.";
  const safetyBullets =
    locale === "np"
      ? [
          "PPE अनुपालन र समर्पित सुरक्षा निगरानी",
          "मुख्य माइलस्टोनमा QA/QC जाँच",
          "संरचित सुपरभिजन र रिपोर्टिङ",
          "अनुपालन-केन्द्रित साइट अनुशासन",
        ]
      : [
          "PPE compliance and dedicated safety oversight",
          "QA/QC checkpoints at key milestones",
          "Structured supervision and reporting",
          "Compliance-focused site discipline",
        ];
  const safetyCta =
    locale === "np" ? "गुणस्तर र सुरक्षा मापदण्ड" : "Quality & Safety Standards";

  const trustIndicators =
    locale === "np"
      ? [
          "सार्वजनिक तथा निजी क्षेत्र अनुभव",
          "बहु-क्षेत्रीय पोर्टफोलियो",
          "सुरक्षा तथा गुणस्तर-केन्द्रित डेलिभरी",
          "१९७८ देखि विश्वासिलो",
        ]
      : [
          "Public & Private Sector Experience",
          "Multi-sector Portfolio",
          "Safety & Quality Driven Delivery",
          "Trusted Since 1978",
        ];

  const ctaTitle =
    locale === "np"
      ? "विश्वास गर्न सकिने साझेदारसँग निर्माण गर्नुहोस्।"
      : "Build with a partner you can rely on.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.about, path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                {heroEyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                {heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {heroIntro}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link
                  href={`/${locale}/projects`}
                  className="btn-secondary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                >
                  {locale === "np" ? "परियोजनाहरू हेर्नुहोस्" : "View Projects"}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="group">
            <div className="relative h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[380px]">
              <Image
                src="/images/about/about-hero.webp"
                alt={
                  locale === "np"
                    ? "ठूलो परियोजनामा कार्यरत निर्माण टोली"
                    : "Construction team working on a large-scale project"
                }
                fill
                priority
                className="object-cover transition duration-700 ease-out motion-safe:scale-[1.03] motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:translate-y-0"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section title={locale === "np" ? "हाम्रो यात्रा" : "Our Journey"}>
        <div className="relative">
          <div className="absolute left-4 top-6 bottom-6 w-px bg-border md:hidden" />
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-border md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 80}>
                <div className="relative pl-10 md:pl-0">
                  <span className="absolute left-4 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xs font-semibold text-brand md:left-1/2 md:top-4 md:-translate-x-1/2 md:-translate-y-1/2">
                    {item.year}
                  </span>
                  <div className="rounded-2xl border border-border/70 bg-card/70 p-6 pt-10 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section title={leadershipTitle}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="group">
            <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[320px]">
              <Image
                src="/images/about/leadership.webp"
                alt={
                  locale === "np"
                    ? "प्रबन्ध निर्देशक तथा नेतृत्व टोली"
                    : "Managing director and leadership team"
                }
                fill
                className="object-cover transition duration-700 ease-out motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:translate-y-0"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {labels.companyName}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                Surya Narayan Baral
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                {leadershipRole}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {leadershipBody}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section title={locale === "np" ? "हामी के प्रदान गर्छौं" : "What We Deliver"}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <div className="group rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand transition duration-200 motion-safe:group-hover:scale-105">
                  {pillar.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={safetyTitle}>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {safetyCopy}
              </p>
              <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
                {safetyBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href={`/${locale}/quality-safety`}
                  className="btn-primary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                >
                  {safetyCta}
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="group">
            <div className="relative h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[340px]">
              <Image
                src="/images/about/safety.webp"
                alt={
                  locale === "np"
                    ? "साइटमा सुरक्षा निरीक्षण गर्दै टोली"
                    : "Site team conducting safety supervision"
                }
                fill
                className="object-cover transition duration-700 ease-out motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:translate-y-0"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <div className="rounded-2xl border border-border/70 bg-card/70 p-6 text-sm text-foreground/80 transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                <span className="mb-4 block h-1 w-10 rounded-full bg-brand" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
              {ctaTitle}
            </h2>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
            >
              {locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team"}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
