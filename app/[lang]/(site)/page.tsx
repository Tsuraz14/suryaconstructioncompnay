import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { services, projects } from "@/lib/content";
import { CONTACT, SITE_NAME, SITE_URL, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import CTA from "@/components/cta";
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
  const labels = t(locale);

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

  const heroHeading =
    locale === "np"
      ? "नेपालभरि विश्वासिलो भविष्य निर्माण गर्दै।"
      : "Building confident futures across Nepal.";
  const heroSubtext =
    locale === "np"
      ? "हामी सिभिल निर्माण, ठेक्का, र परियोजना व्यवस्थापनलाई गुणस्तर र सुरक्षा मापदण्डसहित अघि बढाउँछौं।"
      : "We deliver civil construction, contracting, and project management with a sharp focus on quality and safety.";

  const focusItems =
    locale === "np"
      ? [
          "आवासीय तथा व्यावसायिक निर्माण",
          "पूर्वाधार तथा साइट विकास",
          "नवीकरण, फिनिसिङ, र पुनःस्थापना",
        ]
      : [
          "Residential and commercial construction",
          "Infrastructure and site development",
          "Renovation, finishing, and rehabilitation",
        ];

  const stats = [
    {
      label: locale === "np" ? "स्थापना" : "Established",
      value: "1978",
    },
    {
      label: locale === "np" ? "प्रा. लि. स्तरोन्नति" : "Upgraded",
      value: locale === "np" ? "2002 (प्रा. लि.)" : "2002 (Pvt. Ltd.)",
    },
    {
      label: locale === "np" ? "औसत वार्षिक टर्नओभर" : "Avg. Annual Turnover",
      value: "NPR 460M+",
      note:
        locale === "np"
          ? "अन्तिम १० वर्षका उत्कृष्ट ३ वर्षको आधारमा"
          : "Based on best 3 years (last 10)",
    },
  ];

  const featuredProjects = [projects[0], projects[4], projects[6]];
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
      <Section className="pt-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              {labels.companyName}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {heroHeading}
            </h1>
            <p className="text-sm text-foreground/70 md:text-lg">
              {heroSubtext}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
              >
                {labels.cta}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
              >
                {labels.nav.services}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-muted/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                {stat.note && (
                  <p className="mt-1 text-xs text-foreground/60">{stat.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow={labels.nav.services}
        title={
          locale === "np"
            ? "हाम्रो मुख्य फोकस"
            : "Core focus areas"
        }
        description={
          locale === "np"
            ? "समय, बजेट, र गुणस्तरलाई एकै दिशामा राख्ने समन्वित निर्माण सेवा।"
            : "Integrated construction services that keep schedule, budget, and quality aligned."
        }
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {focusItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-6 text-sm text-foreground/80"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={labels.nav.services}
        title={
          locale === "np"
            ? "नेपालको भूगोलअनुसार सेवा"
            : "Services built for Nepal’s terrain"
        }
        description={
          locale === "np"
            ? "प्रमुख निर्माण सेवाहरूको छोटो झलक।"
            : "A quick look at our core construction capabilities."
        }
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} lang={locale} />
            ))}
          </div>
          <div className="pt-6">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
            >
              {locale === "np" ? "सबै सेवाहरू" : "All services"}
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={labels.nav.projects}
        title={
          locale === "np"
            ? "विश्वासका साथ सम्पन्न परियोजना"
            : "Projects delivered with confidence"
        }
        description={
          locale === "np"
            ? "नियमित रिपोर्टिङ र स्पष्ट माइलस्टोनसहितका प्रमुख परियोजनाहरू।"
            : "Highlights from our portfolio with clear milestones and reporting."
        }
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} lang={locale} />
            ))}
          </div>
          <div className="pt-6">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
            >
              {locale === "np" ? "परियोजनाहरू हेर्नुहोस्" : "View projects"}
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={labels.nav.qualitySafety}
        title={
          locale === "np"
            ? "सुरक्षा र गुणस्तर हाम्रो आधार"
            : "Safety and quality at the core"
        }
        description={
          locale === "np"
            ? "PPE, सुरक्षा अधिकृत, QA/QC परीक्षण, र बीमा कभरेजमार्फत हामी साइट अनुशासन र मापदण्ड सुनिश्चित गर्छौं।"
            : "With PPE, safety officers, QA/QC checks, and insurance coverage, we enforce disciplined, standards-driven sites."
        }
      >
        <Reveal>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/quality-safety`}
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
            >
              {labels.nav.qualitySafety}
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CTA
            title={locale === "np" ? "सँगै निर्माण गरौं।" : "Let’s build together."}
            text={
              locale === "np"
                ? "परियोजनाको दायरा, स्थान, र समयरेखा बताउनुहोस्। हामी स्पष्ट योजना सहित प्रतिक्रिया दिनेछौं।"
                : "Share your scope, location, and timeline. We'll respond with a clear plan and next steps."
            }
            primaryLabel={labels.cta}
            primaryHref={`/${locale}/contact`}
            secondaryLabel={labels.nav.projects}
            secondaryHref={`/${locale}/projects`}
          />
        </Reveal>
      </Section>
    </>
  );
}
