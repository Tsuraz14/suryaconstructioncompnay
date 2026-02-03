import Image from "next/image";
import Link from "next/link";
import { type Lang } from "@/lib/i18n";
import { services, projects } from "@/lib/content";
import { CONTACT, SITE_NAME, SITE_URL, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import Reveal from "@/components/motion/reveal";
import JsonLd from "@/components/seo/jsonld";
import { Badge } from "@/components/badges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";

  const title = locale === "np" ? "गृहपृष्ठ" : "Home";
  const description =
    locale === "np"
      ? "नेपालभरि सिभिल निर्माण, ठेक्का, र परियोजना व्यवस्थापन—गुणस्तर, सुरक्षा, र उत्तरदायी कार्यान्वयनमा केन्द्रित।"
      : "Civil construction, contracting, and project management across Nepal with a focus on quality, safety, and accountable delivery.";

  return {
    title,
    description,
    alternates: getAlternates(locale, ""),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";

  const heroEyebrow =
    locale === "np"
      ? "१९७८ देखि · विश्वासिलो निर्माण साझेदार"
      : "Since 1978 · Trusted Construction Partner";
  const heroHeading =
    locale === "np"
      ? "बलियो र सटीक निर्माणमार्फत नेपालको पूर्वाधार निर्माण"
      : "Building Nepal’s Infrastructure with Strength & Precision";
  const heroSubtext =
    locale === "np"
      ? "अस्पताल र व्यावसायिक भवनदेखि सडक, पुल, र जलविद्युत् सिभिल कामसम्म — हामी गुणस्तर, सुरक्षा, र दीर्घकालीन मूल्यसँग परियोजना सम्पन्न गर्छौं।"
      : "From hospitals and commercial buildings to roads, bridges, and hydropower civil works — we deliver projects with quality, safety, and long-term value.";
  const heroPrimaryLabel =
    locale === "np" ? "परामर्श अनुरोध" : "Request Consultation";
  const heroSecondaryLabel =
    locale === "np" ? "हाम्रा परियोजनाहरू हेर्नुहोस्" : "View Our Projects";

  const trustItems = [
    {
      label: locale === "np" ? "स्थापना" : "Established",
      value: locale === "np" ? "१९७८" : "1978",
    },
    {
      label: locale === "np" ? "२००२ देखि प्रा. लि." : "Pvt. Ltd. Since",
      value: locale === "np" ? "२००२" : "2002",
    },
    {
      label:
        locale === "np"
          ? "औसत वार्षिक टर्नओभर"
          : "Avg. Annual Turnover",
      value: "NPR 460M+",
    },
    {
      label:
        locale === "np" ? "सेवा क्षेत्र" : "Serving",
      value:
        locale === "np"
          ? "सार्वजनिक तथा निजी क्षेत्र"
          : "Public & Private Sectors",
    },
  ];

  const serviceHighlights = [
    {
      id: "building-construction",
      image: "/images/home/service-building.webp",
      alt: {
        en: "Modern multi-storey building construction",
        np: "आधुनिक बहु-तले भवन निर्माण",
      },
    },
    {
      id: "roads-infrastructure",
      image: "/images/home/service-roads.webp",
      alt: {
        en: "Road and infrastructure development",
        np: "सडक तथा पूर्वाधार विकास",
      },
    },
    {
      id: "bridges-structures",
      image: "/images/home/service-bridges.webp",
      alt: {
        en: "Bridge and civil structure works",
        np: "पुल तथा सिभिल संरचना काम",
      },
    },
    {
      id: "tunnels-hydropower",
      image: "/images/home/service-hydropower.webp",
      alt: {
        en: "Hydropower and tunnel civil works",
        np: "जलविद्युत् तथा टनेल सिभिल काम",
      },
    },
  ];

  const featuredServices = serviceHighlights.map((item) => ({
    ...item,
    service: services.find((service) => service.id === item.id)!,
  }));

  const projectHighlights = [
    {
      id: "charak-memorial-hospital",
      image: "/images/home/project-hospital.webp",
      alt: {
        en: "Hospital project construction",
        np: "अस्पताल निर्माण परियोजना",
      },
    },
    {
      id: "gandaki-medical-college",
      image: "/images/home/project-institutional.webp",
      alt: {
        en: "Institutional construction project",
        np: "शैक्षिक संस्था निर्माण परियोजना",
      },
    },
    {
      id: "nayapul-road-upgrading",
      image: "/images/home/project-infrastructure.webp",
      alt: {
        en: "Infrastructure road upgrading works",
        np: "पूर्वाधार सडक स्तरोन्नति काम",
      },
    },
  ];

  const featuredProjects = projectHighlights.map((item) => ({
    ...item,
    project: projects.find((project) => project.id === item.id)!,
  }));

  const statusLabels = {
    en: {
      completed: "Completed",
      ongoing: "Ongoing",
    },
    np: {
      completed: "सम्पन्न",
      ongoing: "जारी",
    },
  } as const;

  const servicesTitle =
    locale === "np" ? "हामी के निर्माण गर्छौं" : "What We Build";
  const projectsTitle =
    locale === "np"
      ? "हाम्रो क्षमतालाई परिभाषित गर्ने परियोजनाहरू"
      : "Projects That Define Our Capability";
  const projectsDescription =
    locale === "np"
      ? "अस्पताल, शैक्षिक संस्था, र पूर्वाधार परियोजनाहरूमा प्रमाणित कार्यान्वयन।"
      : "Demonstrated delivery across hospital, institutional, and infrastructure projects.";
  const viewAllServicesLabel =
    locale === "np" ? "सबै सेवाहरू हेर्नुहोस्" : "Explore All Services";
  const viewAllProjectsLabel =
    locale === "np" ? "सबै परियोजनाहरू हेर्नुहोस्" : "View All Projects";

  const qualityHeading =
    locale === "np"
      ? "हरेक चरणमा गुणस्तर र सुरक्षा"
      : "Quality & Safety at Every Stage";
  const qualityPoints =
    locale === "np"
      ? [
        "समर्पित सुरक्षा अधिकृत तथा PPE",
        "प्रत्येक माइलस्टोनमा QA/QC",
        "बीमा तथा अनुपालन मापदण्ड",
        "संरचित रिपोर्टिङ तथा सुपरभिजन",
      ]
      : [
        "Dedicated safety officers & PPE",
        "QA/QC at every milestone",
        "Insurance & compliance standards",
        "Structured reporting & supervision",
      ];
  const qualityCtaLabel =
    locale === "np" ? "हाम्रो गुणस्तर मापदण्ड" : "Our Quality Standards";

  const finalCtaTitle =
    locale === "np"
      ? "समयको कसौटीमा टिक्ने पूर्वाधार निर्माण गरौं।"
      : "Let’s build infrastructure that stands the test of time.";
  const finalCtaText =
    locale === "np"
      ? "१९७८ देखि विश्वासिलो, अनुभवी निर्माण कम्पनीसँग साझेदारी गर्नुहोस्।"
      : "Partner with an experienced construction company trusted since 1978.";
  const finalCtaButton =
    locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    foundingDate: "1978",
    email: CONTACT.email,
    telephone: CONTACT.phones,
    address: CONTACT.addresses.map((address) => ({
      "@type": "PostalAddress",
      name: address.label,
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    })),
    areaServed: "Nepal",
    sameAs: [],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ["en", "ne"],
  };

  return (
    <>
      <JsonLd data={[orgSchema, websiteSchema]} />

      <section className="relative grid min-h-[90vh]">
        <div className="col-start-1 row-start-1">
          <div className="sticky top-0 h-[90vh] w-full motion-reduce:static">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/home/hero.webp"
                alt={
                  locale === "np"
                    ? "नेपालमा ठूलो स्तरको निर्माण साइट"
                    : "Large-scale construction site in Nepal"
                }
                fill
                priority
                className="object-cover object-center transition-transform duration-[900ms] ease-out motion-safe:scale-[1.06] md:motion-safe:-translate-y-4"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/25"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="col-start-1 row-start-1 z-10 flex min-h-[90vh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-6 text-center text-white lg:text-left">
              <Reveal delay={0}>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                  {heroEyebrow}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {heroHeading}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-base leading-relaxed text-white/80 md:text-lg">
                  {heroSubtext}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Link
                    href={`/${locale}/contact`}
                    className="btn-primary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {heroPrimaryLabel}
                  </Link>
                  <Link
                    href={`/${locale}/projects`}
                    className="btn-secondary !border-white/50 !text-white hover:!bg-white/10 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {heroSecondaryLabel}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-muted/40" align="center">
        <div className="grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-5 shadow-sm backdrop-blur transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                <p className="text-2xl font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title={servicesTitle}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt[locale]}
                    fill
                    className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.service.title[locale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {item.service.description[locale]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="pt-8">
          <Link
            href={`/${locale}/services`}
            className="btn-secondary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
          >
            {viewAllServicesLabel}
          </Link>
        </div>
      </Section>

      <Section title={projectsTitle} description={projectsDescription}>
        <div className="relative group/carousel">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-background via-background/70 to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-background via-background/70 to-transparent md:block" />
          <div className="absolute inset-y-0 left-2 hidden items-center md:flex">
            <a
              href="#home-projects-start"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 opacity-0 transition duration-200 hover:text-foreground focus-visible:opacity-100 group-hover/carousel:opacity-100"
              aria-label={
                locale === "np"
                  ? "सुरुका परियोजनाहरूमा जानुहोस्"
                  : "Scroll to first projects"
              }
            >
              ←
            </a>
          </div>
          <div className="absolute inset-y-0 right-2 hidden items-center md:flex">
            <a
              href="#home-projects-end"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 opacity-0 transition duration-200 hover:text-foreground focus-visible:opacity-100 group-hover/carousel:opacity-100"
              aria-label={
                locale === "np"
                  ? "अन्तिम परियोजनाहरूमा जानुहोस्"
                  : "Scroll to last projects"
              }
            >
              →
            </a>
          </div>
          <div
            className="flex gap-6 overflow-x-auto pb-4 pt-2 motion-safe:scroll-smooth snap-x snap-mandatory"
            role="list"
            aria-label={
              locale === "np" ? "विशेष परियोजनाहरू" : "Featured projects"
            }
          >
            <span id="home-projects-start" className="sr-only" />
            {featuredProjects.map((item, index) => {
              const statusLabel = statusLabels[locale][item.project.status];
              const statusTone =
                item.project.status === "ongoing" ? "brand" : "muted";

              return (
                <Reveal
                  key={item.project.id}
                  delay={index * 100}
                  className="min-w-[82%] snap-start sm:min-w-[58%] lg:min-w-[32%]"
                >
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
                    role="listitem"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt[locale]}
                        fill
                        className="object-cover transition duration-700 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 60vw, 90vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4">
                        <Badge tone={statusTone}>{statusLabel}</Badge>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/60">
                        {item.project.location[locale]}
                      </p>
                      <h3 className="text-base font-semibold text-foreground">
                        {item.project.title[locale]}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              );
            })}
            <span id="home-projects-end" className="sr-only" />
          </div>
        </div>
        <div className="pt-6">
          <Link
            href={`/${locale}/projects`}
            className="btn-secondary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
          >
            {viewAllProjectsLabel}
          </Link>
        </div>
      </Section>

      <Section title={qualityHeading}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative h-[300px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[380px]">
              <Image
                src="/images/home/quality-safety.webp"
                alt={
                  locale === "np"
                    ? "PPE सहित साइट सुपरभिजन गर्दै निर्माण टोली"
                    : "Construction team supervising site with PPE"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5">
              <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
                {qualityPoints.map((item) => (
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
                  {qualityCtaLabel}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-brand/15 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {finalCtaTitle}
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {finalCtaText}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
            >
              {finalCtaButton}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
