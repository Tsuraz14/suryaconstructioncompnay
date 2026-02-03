import Image from "next/image";
import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { services, projects } from "@/lib/content";
import { CONTACT, SITE_NAME, SITE_URL, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import ServiceCard from "@/components/cards/service-card";
import ProjectCard from "@/components/cards/project-card";
import Reveal from "@/components/motion/reveal";
import JsonLd from "@/components/seo/jsonld";

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
  const labels = t(locale);

  const heroEyebrow =
    locale === "np"
      ? "सूर्य कन्स्ट्रक्सन कम्पनी प्रा.लि."
      : "Surya Construction Company Pvt. Ltd.";
  const heroHeading =
    locale === "np"
      ? "नेपालभरि भरपर्दो पूर्वाधार निर्माण गर्दै।"
      : "Building reliable infrastructure across Nepal.";
  const heroSubtext =
    locale === "np"
      ? "अस्पताल, व्यावसायिक भवन, सडक, पुल र जलविद्युत सिभिल काम — कडाइका सुरक्षा र QA/QC सहित।"
      : "Hospitals, commercial buildings, roads, bridges, and hydropower civil works—delivered with strict safety and QA/QC.";
  const heroPrimaryLabel =
    locale === "np" ? "परामर्श अनुरोध" : "Request a Consultation";
  const heroSecondaryLabel =
    locale === "np" ? "हाम्रा सेवाहरू" : "Our Services";

  const trustItems = [
    {
      label: locale === "np" ? "स्थापना" : "Established",
      value: locale === "np" ? "१९७८" : "1978",
    },
    {
      label: locale === "np" ? "प्रा.लि. स्तरोन्नति" : "Upgraded to Pvt. Ltd.",
      value: locale === "np" ? "२००२" : "2002",
    },
    {
      label: locale === "np" ? "औसत वार्षिक टर्नओभर" : "Avg. Annual Turnover",
      value: "NPR 460M+",
    },
  ];

  const coreServices = services.slice(0, 4);
  const projectShowcase = [
    {
      project: projects[0],
      image: "/images/projects/charak-memorial-hospital.webp",
    },
    {
      project: projects[4],
      image: "/images/projects/nayapul-road-upgrading.webp",
    },
    {
      project: projects[6],
      image: "/images/projects/pokhara-university-hospital.webp",
    },
  ];

  const viewDetailsLabel =
    locale === "np" ? "विवरण हेर्नुहोस्" : "View details";
  const viewAllServicesLabel =
    locale === "np" ? "सबै सेवाहरू" : "View all services";
  const viewAllProjectsLabel =
    locale === "np" ? "सबै परियोजनाहरू" : "View all projects";
  const qualityHeading =
    locale === "np"
      ? "सुरक्षा र गुणस्तर हाम्रो आधार"
      : "Safety and quality at the core";
  const qualityCopy =
    locale === "np"
      ? "सुरक्षा र गुणस्तर हाम्रो कामको प्रत्येक चरणमा समावेश हुन्छ — योजना, कार्यान्वयन, र हस्तान्तरणसम्म।"
      : "Safety and quality are embedded in every stage of our work — from planning to execution and handover.";
  const qualityBullets =
    locale === "np"
      ? [
          "समर्पित सुरक्षा अधिकृत तथा PPE",
          "प्रत्येक माइलस्टोनमा QA/QC जाँच",
          "बीमा तथा अनुपालन मापदण्ड",
        ]
      : [
          "Dedicated safety officers & PPE",
          "QA/QC checks at every milestone",
          "Insurance & compliance standards",
        ];
  const finalCtaTitle =
    locale === "np"
      ? "आउनुहोस्, दीर्घकालीन संरचना निर्माण गरौं।"
      : "Let’s build something that lasts.";
  const finalCtaText =
    locale === "np"
      ? "तपाईंको आगामी निर्माण परियोजनाका लागि हाम्रो टोलीसँग कुरा गर्नुहोस्।"
      : "Talk to our team about your next construction project.";
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: CONTACT.email,
    telephone: CONTACT.phones,
    address: CONTACT.addresses.map((address) => ({
      "@type": "PostalAddress",
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
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Reveal delay={0}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {heroEyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                {heroHeading}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {heroSubtext}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary"
                >
                  {heroPrimaryLabel}
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="btn-secondary"
                >
                  {heroSecondaryLabel}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm md:h-[420px]">
              <Image
                src="/images/chitwanhospital.webp"
                alt={
                  locale === "np"
                    ? "नेपालमा सूर्य कन्स्ट्रक्सन कम्पनीद्वारा सम्पन्न ठूलो स्तरको अस्पताल निर्माण साइट"
                    : "Large-scale hospital construction site executed by Surya Construction Company in Nepal"
                }
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted/40" align="center">
        <Reveal>
          <div className="grid gap-4 text-left md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="card-surface flex items-center gap-4 p-4"
              >
                <span className="h-10 w-1 rounded-full bg-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={labels.nav.services}
        title={locale === "np" ? "निर्माण सेवाहरूको गहिराइ" : "Depth of Services"}
        description={
          locale === "np"
            ? "योजना देखि हस्तान्तरणसम्म अनुशासित कार्यान्वयन—सार्वजनिक तथा निजी क्षेत्रका ग्राहकहरूका लागि।"
            : "Disciplined execution from planning to handover for public and private sector clients."
        }
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <div className="card-surface card-hover group flex h-full flex-col p-6 [&>article]:border-0 [&>article]:bg-transparent [&>article]:p-0 [&>article]:shadow-none [&>article]:rounded-none [&>article]:transition-none [&>article]:hover:translate-y-0">
                <ServiceCard service={service} lang={locale} />
                <Link
                  href={`/${locale}/services`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition group-hover:text-brand hover:underline"
                >
                  {viewDetailsLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="pt-6">
          <Link
            href={`/${locale}/services`}
            className="btn-secondary"
          >
            {viewAllServicesLabel}
          </Link>
        </div>
      </Section>

      <Section
        eyebrow={labels.nav.projects}
        title={locale === "np" ? "चयन गरिएका परियोजनाहरू" : "Selected Projects"}
        description={
          locale === "np"
            ? "१९७८ देखि नेपालभरि जटिल निर्माण तथा पूर्वाधार परियोजनाहरू अनुशासित QA/QC सहित कार्यान्वयन गर्दै आएका छौं।"
            : "Since 1978, we have delivered complex construction and infrastructure projects across Nepal with disciplined QA/QC."
        }
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectShowcase.map((item, index) => (
            <Reveal key={item.project.id} delay={index * 90}>
              <div className="card-surface card-hover group flex h-full flex-col overflow-hidden [&>article]:border-0 [&>article]:bg-transparent [&>article]:p-6 [&>article]:shadow-none [&>article]:rounded-none [&>article]:transition-none [&>article]:hover:translate-y-0">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={
                      locale === "np"
                        ? `${item.project.location[locale]} मा ${item.project.title[locale]} निर्माण परियोजना`
                        : `${item.project.title[locale]} construction project in ${item.project.location[locale]}`
                    }
                    fill
                    className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <ProjectCard project={item.project} lang={locale} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="pt-6">
          <Link
            href={`/${locale}/projects`}
            className="btn-secondary"
          >
            {viewAllProjectsLabel}
          </Link>
        </div>
      </Section>

      <Section eyebrow={labels.nav.qualitySafety} title={qualityHeading}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm md:h-[360px]">
              <Image
                src="/images/globalcollege.webp"
                alt={
                  locale === "np"
                    ? "सुरक्षा उपकरणसहित साइट निरीक्षण गर्दै निर्माण टोली"
                    : "Construction team conducting safety checks with PPE on site"
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
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {qualityCopy}
              </p>
              <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
                {qualityBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href={`/${locale}/quality-safety`}
                  className="btn-primary"
                >
                  {labels.nav.qualitySafety}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent">
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
