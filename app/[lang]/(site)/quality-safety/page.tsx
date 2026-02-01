import { t, type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import JsonLd from "@/components/seo/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const title = locale === "np" ? labels.nav.qualitySafety : "Quality & Safety";
  const description =
    locale === "np"
      ? "PPE, सुरक्षा अधिकृत, QA/QC परीक्षण, र बीमा कभरेजमार्फत सुरक्षित र गुणस्तरीय निर्माण।"
      : "PPE, safety officers, QA/QC checks, and insurance coverage to ensure disciplined, quality construction.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/quality-safety"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type QualitySafetyPageProps = {
  params: Promise<{ lang: string }>;
};

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12l4 4L19 6" />
      </svg>
    </span>
  );
}

export default async function QualitySafetyPage({
  params,
}: QualitySafetyPageProps) {
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "हरेक चरणमा गुणस्तर र सुरक्षा।"
      : "Quality and safety at every phase.";
  const intro =
    locale === "np"
      ? "सुरक्षा अनुशासन, प्रमाणित प्रक्रिया, र QA/QC परीक्षणमार्फत हामी जोखिम कम गर्दै परिणाम सुनिश्चित गर्छौं।"
      : "We minimize risk through disciplined safety practices, certified processes, and consistent QA/QC checks.";

  const safetyItems =
    locale === "np"
      ? [
          "PPE प्रयोग र साइट सुरक्षा अनुशासन",
          "समर्पित सुरक्षा अधिकृतको निगरानी",
          "कर्मचारी बीमा र जोखिम नियन्त्रण",
          "दैनिक सुरक्षा ब्रीफिङ र जोखिम मूल्याङ्कन",
        ]
      : [
          "Mandatory PPE and site discipline",
          "Dedicated safety officer oversight",
          "Worker insurance and risk controls",
          "Daily safety briefings and risk reviews",
        ];

  const qualityItems =
    locale === "np"
      ? [
          "QA/QC परीक्षण र मापदण्ड पालना",
          "सामग्री परीक्षण र अनुमोदित आपूर्ति",
          "साइट निरीक्षण र नियमित रिपोर्टिङ",
          "ड्रइङ, स्पेसिफिकेसन, र रेकर्ड व्यवस्थापन",
        ]
      : [
          "QA/QC checks aligned with standards",
          "Material testing and approved sourcing",
          "Site inspections and regular reporting",
          "Drawings, specifications, and record control",
        ];

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.qualitySafety, path: "/quality-safety" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section
        eyebrow={labels.nav.qualitySafety}
        title={heading}
        description={intro}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {locale === "np" ? "सुरक्षा" : "Safety"}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {safetyItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {locale === "np" ? "गुणस्तर" : "Quality"}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {qualityItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
