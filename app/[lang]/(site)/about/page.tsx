import { t, type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
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
      ? "विश्वासमा आधारित, नेपालका लागि निर्माण।"
      : "Rooted in trust, built for Nepal.";
  const intro =
    locale === "np"
      ? "हामीले दशकौँदेखि सार्वजनिक तथा निजी परियोजनाहरूमा गुणस्तरीय निर्माण सेवा प्रदान गर्दै आएका छौं।"
      : "For decades, we have delivered quality construction services across public and private projects.";

  const timeline =
    locale === "np"
      ? [
          {
            year: "1978",
            title: "Amrit Construction Firm",
            body: "निर्माण सेवाको सुरुवात र स्थानीय अनुभवको आधार निर्माण।",
          },
          {
            year: "2002",
            title: "Surya Construction Company Pvt. Ltd.",
            body: "औपचारिक स्तरोन्नति, संरचित व्यवस्थापन र क्षमता विस्तार।",
          },
        ]
      : [
          {
            year: "1978",
            title: "Amrit Construction Firm",
            body: "Origins in local construction services and on-site expertise.",
          },
          {
            year: "2002",
            title: "Surya Construction Company Pvt. Ltd.",
            body: "Formal upgrade with structured management and expanded capacity.",
          },
        ];

  const capabilities =
    locale === "np"
      ? [
          "अनुभवी इन्जिनियरिङ र साइट टोली",
          "उपकरण, सप्लाइ, र सब-कन्ट्र्याक्टर समन्वय",
          "सुरक्षा, गुणस्तर, र समयपालनमा केन्द्रित संस्कृति",
        ]
      : [
          "Experienced engineering and site teams",
          "Equipment, supply, and subcontractor coordination",
          "A culture focused on safety, quality, and schedule",
        ];

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.about, path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section eyebrow={labels.nav.about} title={heading} description={intro} />

      <Section
        eyebrow={locale === "np" ? "इतिहास" : "Timeline"}
        title={locale === "np" ? "यात्रा र विकास" : "Our journey"}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {item.year}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "नेतृत्व" : "Leadership"}
        title={
          locale === "np"
            ? "व्यवस्थापन निर्देश" : "Managing Director"
        }
      >
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            {labels.companyName}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">
            Surya Narayan Baral
          </h3>
          <p className="mt-2 text-sm text-foreground/70">
            {locale === "np"
              ? "निर्माण क्षेत्रमा दीर्घकालीन अनुभवसहित, परियोजना अनुशासन र टीम नेतृत्वमा केन्द्रित।"
              : "Focused on project discipline and team leadership with extensive construction experience."}
          </p>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "क्षमता" : "Capabilities"}
        title={
          locale === "np" ? "सम्पादन क्षमता" : "Execution strengths"
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card p-6 text-sm text-foreground/80"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
