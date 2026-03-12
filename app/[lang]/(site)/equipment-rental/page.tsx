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

  const title =
    locale === "np"
      ? "उपकरण भाडा | सूर्य कन्स्ट्रक्सन कम्पनी प्रा. लि."
      : "Equipment Rental | Surya Construction Company Pvt. Ltd.";
  const description =
    locale === "np"
      ? "एक्स्काभेटर, ग्रेडर, रोलर, ब्याकहो लोडर, टिपर, वाटर ट्यांकर लगायत निर्माण उपकरण भाडामा उपलब्ध।"
      : "Construction equipment available for rent including excavator, grader, roller, backhoe loader, tipper, water tanker, and more.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/equipment-rental"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type EquipmentRentalPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function EquipmentRentalPage({
  params,
}: EquipmentRentalPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heroTitle =
    locale === "np"
      ? "निर्माण उपकरण भाडामा उपलब्ध"
      : "Construction Equipment Available for Rent";
  const heroIntro =
    locale === "np"
      ? "पूर्वाधार, साइट विकास, सडक निर्माण, उत्खनन तथा सिभिल निर्माण परियोजनाका लागि सूर्य कन्स्ट्रक्सन कम्पनीले विभिन्न निर्माण उपकरण भाडामा उपलब्ध गराउँछ।"
      : "Surya Construction Company provides a range of construction equipment for rental to support infrastructure, site development, roadwork, excavation, and civil construction projects.";
  const heroCta = locale === "np" ? "उपलब्धताका लागि सम्पर्क गर्नुहोस्" : "Contact for Availability";
  const heroWhatsApp =
    locale === "np" ? "WhatsApp मा छिटो सम्पर्क" : "Quick WhatsApp Contact";

  const equipmentTitle = locale === "np" ? "उपलब्ध उपकरण सूची" : "Available Equipment Fleet";
  const equipmentDescription =
    locale === "np"
      ? "परियोजनाको दायरा, स्थल अवस्था, र कार्यतालिका अनुसार उपकरण उपलब्ध गराइन्छ।"
      : "Equipment is available based on project scope, site conditions, and required timeline.";

  const equipmentItems = [
    {
      code: "GR",
      name: { en: "Grader", np: "ग्रेडर" },
      description: {
        en: "Road leveling, surface shaping, and fine grading support.",
        np: "सडक सम्याउने, सतह प्रोफाइल मिलाउने, र फिनिस ग्रेडिङका लागि उपयुक्त।",
      },
    },
    {
      code: "RC",
      name: { en: "Roller Compactor", np: "रोलर कम्प्याक्टर" },
      description: {
        en: "Compaction for subgrade, base layers, and pavement works.",
        np: "सबग्रेड, बेस लेयर, र पेभमेन्ट कम्प्याक्सन कार्यका लागि उपयुक्त।",
      },
    },
    {
      code: "EX",
      name: { en: "Excavator", np: "एक्स्काभेटर" },
      description: {
        en: "Ideal for excavation, earthmoving, and heavy civil works.",
        np: "उत्खनन, माटो सार्ने काम तथा भारी सिभिल कार्यका लागि उपयुक्त।",
      },
    },
    {
      code: "BL",
      name: { en: "Backhoe Loader", np: "ब्याकहो लोडर" },
      description: {
        en: "Versatile machine for trenching, loading, and utility works.",
        np: "ट्रेन्चिङ, लोडिङ, र युटिलिटी कार्यका लागि बहुउपयोगी उपकरण।",
      },
    },
    {
      code: "TR",
      name: { en: "Tractor", np: "ट्र्याक्टर" },
      description: {
        en: "Efficient support for hauling and light site mobilization.",
        np: "हाउलिङ र हल्का साइट परिचालनका लागि प्रभावकारी सहयोग।",
      },
    },
    {
      code: "TP",
      name: { en: "Tipper", np: "टिपर" },
      description: {
        en: "Bulk material transport for earthworks and road projects.",
        np: "अर्थवर्क र सडक परियोजनाका लागि ठूलो परिमाणमा सामग्री ढुवानी।",
      },
    },
    {
      code: "WT",
      name: { en: "Water Tanker", np: "वाटर ट्यांकर" },
      description: {
        en: "Water supply for dust control and compaction requirements.",
        np: "धुलो नियन्त्रण तथा कम्प्याक्सन आवश्यकताका लागि पानी आपूर्ति।",
      },
    },
    {
      code: "BS",
      name: { en: "Bitumen Sprayer", np: "बिटुमेन स्प्रेयर" },
      description: {
        en: "Uniform bitumen spraying for roadway surfacing operations.",
        np: "सडक सतह कार्यका लागि समान रूपमा बिटुमेन स्प्रे गर्ने उपकरण।",
      },
    },
    {
      code: "GM",
      name: { en: "Groomer", np: "ग्रुमर" },
      description: {
        en: "Surface finishing support for grading and maintenance works.",
        np: "ग्रेडिङ तथा मर्मत कार्यका लागि सतह फिनिसिङ सहयोग।",
      },
    },
    {
      code: "CP",
      name: { en: "Compressors", np: "कम्प्रेसरहरू" },
      description: {
        en: "Reliable compressed-air support for on-site tools and tasks.",
        np: "साइटमा प्रयोग हुने उपकरण तथा कार्यका लागि भरपर्दो कम्प्रेस्ड एयर।",
      },
    },
    {
      code: "CS",
      name: { en: "Chip Spreader", np: "चिप स्प्रेडर" },
      description: {
        en: "Controlled aggregate spreading for road surface treatment.",
        np: "सडक सतह उपचारका लागि नियन्त्रित एग्रिगेट छर्ने उपकरण।",
      },
    },
    {
      code: "BC",
      name: { en: "Backhoe Loader Compactor", np: "ब्याकहो लोडर कम्प्याक्टर" },
      description: {
        en: "Combined loading and compaction support for mixed tasks.",
        np: "मिश्रित कार्यका लागि लोडिङ तथा कम्प्याक्सनको संयुक्त सहयोग।",
      },
    },
    {
      code: "BR",
      name: { en: "Breaker", np: "ब्रेकर" },
      description: {
        en: "Concrete and hard rock breaking for demolition and excavation.",
        np: "डेमोलिसन र उत्खननका लागि कंक्रिट तथा कडा चट्टान तोड्ने उपकरण।",
      },
    },
    {
      code: "+",
      name: {
        en: "And Many More Construction Equipments",
        np: "र अन्य धेरै निर्माण उपकरणहरू",
      },
      description: {
        en: "Additional equipment can be arranged as per project requirements.",
        np: "परियोजनाको आवश्यकता अनुसार थप उपकरणहरू पनि व्यवस्थापन गरिन्छ।",
      },
    },
  ] as const;

  const whyTitle = locale === "np" ? "हामीबाट भाडामा किन?" : "Why Rent from Us";
  const whyPoints =
    locale === "np"
      ? [
          {
            title: "भरपर्दो उपकरण समर्थन",
            body: "साइट आवश्यकताअनुसार प्रयोगयोग्य र प्राविधिक रूपमा समन्वयित उपकरण उपलब्धता।",
          },
          {
            title: "पूर्वाधार तथा सिभिल कार्यका लागि उपयुक्त",
            body: "सडक, उत्खनन, साइट विकास, र भारी सिभिल कामका लागि लक्षित उपकरणहरू।",
          },
          {
            title: "कार्यान्वयन अनुभवद्वारा समर्थित",
            body: "निर्माण क्षेत्रमा दशकौँको व्यावहारिक अनुभवले समर्थित परिचालन प्रक्रिया।",
          },
          {
            title: "लचिलो भाडा सहयोग",
            body: "परियोजनाको समयतालिका, परिमाण, र चरणअनुसार भाडा समर्थन।",
          },
        ]
      : [
          {
            title: "Reliable equipment support",
            body: "Ready-to-deploy machines coordinated around your site and schedule.",
          },
          {
            title: "Suitable for infrastructure and civil works",
            body: "Fleet options aligned for roadwork, excavation, and site development.",
          },
          {
            title: "Backed by execution experience",
            body: "Operational support shaped by decades of practical construction delivery.",
          },
          {
            title: "Flexible rental support",
            body: "Rental arrangements matched to project timelines, phases, and scope.",
          },
        ];

  const rentalCtaTitle =
    locale === "np"
      ? "तपाईंको परियोजनाका लागि उपकरण चाहिन्छ?"
      : "Need equipment for your project?";
  const rentalCtaText =
    locale === "np"
      ? "उपलब्धता, परियोजना समर्थन, र भाडा विवरणका लागि हाम्रो टोलीसँग सम्पर्क गर्नुहोस्।"
      : "Contact our team for availability, project support, and rental details.";
  const rentalCtaContact = locale === "np" ? "सम्पर्क गर्नुहोस्" : "Contact Us";
  const rentalCtaWhatsapp = locale === "np" ? "WhatsApp" : "WhatsApp";

  const whatsappHref = `https://wa.me/9779856014022?text=${encodeURIComponent(
    locale === "np"
      ? "नमस्ते, निर्माण उपकरण भाडा उपलब्धताबारे जानकारी चाहियो।"
      : "Hello, I would like to check equipment rental availability.",
  )}`;

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.equipmentRental, path: "/equipment-rental" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  {labels.nav.equipmentRental}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                  {heroTitle}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {heroIntro}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Link
                    href={`/${locale}/contact`}
                    className="btn-primary transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {heroCta}
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/10"
                  >
                    {heroWhatsApp}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="group">
              <div className="relative h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[380px]">
                <Image
                  src="/images/equipment/equipment-hero.webp"
                  alt={
                    locale === "np"
                      ? "साइटमा परिचालनका लागि तयारी अवस्थामा निर्माण उपकरण"
                      : "Construction equipment ready for site operations"
                  }
                  fill
                  priority
                  className="object-cover transition duration-700 ease-out motion-safe:scale-[1.04] motion-safe:translate-y-3 motion-safe:group-[.opacity-100]:scale-100 motion-safe:group-[.opacity-100]:translate-y-0"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/15 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section title={equipmentTitle} description={equipmentDescription}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {equipmentItems.map((item, index) => {
            const featured = item.code === "+";

            return (
              <Reveal key={item.name.en} delay={index * 45}>
                <article
                  className={`group h-full rounded-2xl border p-5 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg ${
                    featured
                      ? "border-brand/40 bg-brand/5"
                      : "border-border/70 bg-card/70"
                  }`}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-sm font-semibold text-brand">
                    {item.code}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.name[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {item.description[locale]}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section title={whyTitle}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
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
                    <path d="M3 12h5l2 4 4-8 2 4h5" />
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-brand/12 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {rentalCtaTitle}
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {rentalCtaText}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
              >
                {rentalCtaContact}
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#25D366]/60 px-7 py-3 text-sm font-semibold text-[#25D366] transition-all duration-200 hover:bg-[#25D366]/10 hover:no-underline motion-safe:hover:-translate-y-0.5 active:translate-y-0"
              >
                {rentalCtaWhatsapp}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
