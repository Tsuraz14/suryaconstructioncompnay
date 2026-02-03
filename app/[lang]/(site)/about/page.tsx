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

export default async function AboutPage({ params }: AboutPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "सूर्य कन्स्ट्रक्सन कम्पनीको परिचय"
      : "About Surya Construction Company";
  const intro =
    locale === "np"
      ? "१९७८ देखि सूर्य कन्स्ट्रक्सन कम्पनी प्रा.लि. ले नेपालभरि सिभिल तथा भवन परियोजना अनुशासित QA/QC र उत्तरदायी कार्यान्वयनसहित सम्पन्न गर्दै आएको छ।"
      : "Since 1978, Surya Construction Company Pvt. Ltd. has delivered civil and building projects across Nepal with disciplined QA/QC and accountable execution.";

  const timeline =
    locale === "np"
      ? [
          {
            year: "1978",
            title: "Amrit Construction Firm",
            body: "पोखरामा अमृत कन्स्ट्रक्सन फर्मका रूपमा स्थापना भई स्थानीय निर्माण परियोजनाबाट सुरुवात।",
          },
          {
            year: "2002",
            title: "Surya Construction Company Pvt. Ltd.",
            body: "सूर्य कन्स्ट्रक्सन कम्पनी प्रा.लि. का रूपमा स्तरोन्नति र दर्ता भई क्षमता तथा परियोजना विस्तार।",
          },
          {
            year: locale === "np" ? "१९७८–हालसम्म" : "1978–Present",
            title: locale === "np" ? "राष्ट्रिय स्तरको डेलिभरी" : "Nationwide Delivery",
            body: "नेपालभरि सार्वजनिक तथा निजी क्षेत्रका भवन, पूर्वाधार, र जलविद्युत् सिभिल काममा निरन्तर डेलिभरी।",
          },
        ]
      : [
          {
            year: "1978",
            title: "Amrit Construction Firm",
            body: "Established as Amrit Construction Firm in Pokhara, beginning with local construction projects.",
          },
          {
            year: "2002",
            title: "Surya Construction Company Pvt. Ltd.",
            body: "Upgraded and registered as Surya Construction Company Pvt. Ltd., expanding capacity and project scale.",
          },
          {
            year: "1978–Present",
            title: "Nationwide Delivery",
            body: "Ongoing delivery of buildings, infrastructure, and hydropower civil works for public and private sector clients across Nepal.",
          },
        ];

  const leadershipTitle =
    locale === "np" ? "नेतृत्व" : "Leadership";
  const leadershipRole =
    locale === "np" ? "प्रबन्ध निर्देशक" : "Managing Director";
  const leadershipBody =
    locale === "np"
      ? "नेतृत्वले सुरक्षा, QA/QC, र पारदर्शी रिपोर्टिङलाई प्राथमिकता दिँदै दीर्घकालीन प्रदर्शनमा केन्द्रित कार्यान्वयन गर्छ।"
      : "Leadership prioritizes safety, QA/QC, and transparent reporting to keep delivery aligned with long-term performance.";

  const values =
    locale === "np"
      ? [
          {
            title: "गुणस्तर र सुरक्षा पहिलो",
            body: "प्रत्येक चरणमा सुरक्षा नेतृत्व र कडाइका QA/QC।",
          },
          {
            title: "निष्ठा र उत्तरदायित्व",
            body: "पारदर्शी डेलिभरी, स्पष्ट रिपोर्टिङ, र जिम्मेवार कार्यान्वयन।",
          },
          {
            title: "प्राविधिक उत्कृष्टता",
            body: "दक्ष इन्जिनियर, प्रमाणित विधि, र आधुनिक उपकरण।",
          },
          {
            title: "ग्राहक सन्तुष्टि",
            body: "समयमै डेलिभरी र दीर्घकालीन प्रदर्शनमा ध्यान।",
          },
        ]
      : [
          {
            title: "Quality & Safety First",
            body: "Safety-led planning and strict QA/QC at every milestone.",
          },
          {
            title: "Integrity & Accountability",
            body: "Transparent delivery, clear reporting, and responsible execution.",
          },
          {
            title: "Technical Excellence",
            body: "Skilled engineers, proven methods, and modern tools.",
          },
          {
            title: "Client Satisfaction",
            body: "On-time delivery with long-term performance in mind.",
          },
        ];

  const capabilitiesTitle =
    locale === "np" ? "हाम्रो क्षमता" : "Our Capabilities";
  const capabilitiesCopy =
    locale === "np"
      ? "अनुभवी जनशक्ति, प्रमाणित सुरक्षा अभ्यास, र अनुशासित कार्यान्वयनले हाम्रो डेलिभरी क्षमतालाई समर्थन गर्छ।"
      : "Experienced manpower, documented safety practices, and disciplined execution support our delivery capacity.";
  const capabilities =
    locale === "np"
      ? [
          "अनुभवी इन्जिनियर तथा प्राविधिक टोली",
          "समर्पित सुरक्षा अधिकृत तथा PPE अनुपालन",
          "प्रमाणित QA/QC प्रक्रिया",
          "जटिल परियोजना सम्हाल्ने क्षमता",
        ]
      : [
          "Experienced engineers and technical team",
          "Dedicated safety officers & PPE compliance",
          "Proven QA/QC procedures",
          "Capability to handle complex projects",
        ];

  const trustIndicators =
    locale === "np"
      ? [
          "दशकौँको अनुभव",
          "सरकारी तथा संस्थागत ग्राहक सेवा",
          "बहु-क्षेत्रीय परियोजना पोर्टफोलियो",
          "बलियो सुरक्षा तथा गुणस्तर रेकर्ड",
        ]
      : [
          "Decades of Experience",
          "Government & institutional clients served",
          "Multi-sector Project Portfolio",
          "Strong Safety & Quality Record",
        ];

  const ctaTitle =
    locale === "np"
      ? "विश्वासिलो साझेदारसँग निर्माण गर्नुहोस्।"
      : "Build with a partner you can trust.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.about, path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {labels.nav.about}
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
          <Reveal delay={120}>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm md:h-[380px]">
              <Image
                src="/images/about/about-hero.webp"
                alt={
                  locale === "np"
                    ? "परियोजना नेतृत्व टोलीले साइटमा योजना समीक्षा गर्दै"
                    : "Project leadership team reviewing site plans on location"
                }
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "इतिहास" : "Timeline"}
        title={locale === "np" ? "हाम्रो यात्रा" : "Our Journey"}
      >
        <div className="relative md:pt-8">
          <div className="absolute left-4 top-6 bottom-6 w-px bg-border md:hidden" />
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-border md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 80}>
                <div className="relative pl-10 md:pl-0">
                  <span className="absolute left-4 top-6 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-brand md:left-1/2 md:top-4 md:-translate-x-1/2 md:-translate-y-1/2">
                    {item.year}
                  </span>
                  <div className="card-surface p-6 md:pt-10">
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

      <Section eyebrow={leadershipTitle} title={leadershipRole}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative h-[260px] overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm md:h-[320px]">
              <Image
                src="/images/about/leadership.webp"
                alt={
                  locale === "np"
                    ? "प्रबन्ध निर्देशक तथा नेतृत्व टोली"
                    : "Managing director and leadership team"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface p-6 md:p-8">
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

      <Section
        eyebrow={locale === "np" ? "मूल्य" : "Values"}
        title={locale === "np" ? "हामी के मान्छौं" : "What We Stand For"}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="card-surface p-6 shadow-sm">
                <span className="mb-4 block h-1 w-12 rounded-full bg-brand" />
                <h3 className="text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "क्षमता" : "Capabilities"}
        title={capabilitiesTitle}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {capabilitiesCopy}
              </p>
              <ul className="space-y-3 text-sm text-foreground/80 md:text-base">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-[260px] overflow-hidden rounded-xl border border-border bg-muted/40 shadow-sm md:h-[320px]">
              <Image
                src="/images/about/about-execution.webp"
                alt={
                  locale === "np"
                    ? "साइट इन्जिनियरहरूले परियोजना कार्यान्वयन समन्वय गर्दै"
                    : "Site engineers coordinating execution on an active project"
                }
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "विश्वास संकेत" : "Trust Indicators"}
        title={locale === "np" ? "विश्वसनीयताको आधार" : "Signals of Trust"}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <div className="card-surface p-6 text-sm text-foreground/80">
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
