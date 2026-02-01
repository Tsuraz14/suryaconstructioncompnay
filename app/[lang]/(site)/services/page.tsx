import { t, type Lang } from "@/lib/i18n";
import { services } from "@/lib/content";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import ServiceCard from "@/components/cards/service-card";
import Reveal from "@/components/motion/reveal";
import JsonLd from "@/components/seo/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const { lang } = await params;
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
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "सम्पूर्ण निर्माण सेवाहरू।"
      : "Comprehensive construction services.";
  const intro =
    locale === "np"
      ? "नेपालको भूगोल र परियोजना आवश्यकताअनुसार डिजाइनदेखि कार्यान्वयनसम्म सुसंगत सेवा।"
      : "Aligned services from design support to execution, tailored to Nepal’s terrain and project needs.";

  const processSteps =
    locale === "np"
      ? [
          {
            title: "परामर्श",
            body: "आवश्यकता, दायरा, र सम्भाव्यता स्पष्ट गर्दै प्रारम्भिक परामर्श।",
          },
          {
            title: "योजना र परिचालन",
            body: "संसाधन, समयरेखा, र साइट तयारीको व्यवस्थित योजना।",
          },
          {
            title: "कार्यान्वयन र QA/QC",
            body: "सुरक्षा मापदण्डका साथ चरणबद्ध निर्माण र गुणस्तर परीक्षण।",
          },
          {
            title: "हस्तान्तरण र समर्थन",
            body: "दस्तावेजीकरण, ह्यान्डओभर, र आवश्यक सहयोग।",
          },
        ]
      : [
          {
            title: "Consultation",
            body: "Clarifying scope, requirements, and feasibility at the outset.",
          },
          {
            title: "Planning & Mobilization",
            body: "Structured planning for resources, schedule, and site setup.",
          },
          {
            title: "Execution & QA/QC",
            body: "Phased construction with safety standards and quality checks.",
          },
          {
            title: "Handover & Support",
            body: "Documentation, handover, and continued support as needed.",
          },
        ];

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.services, path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section eyebrow={labels.nav.services} title={heading} description={intro} />

      <Section>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} lang={locale} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow={locale === "np" ? "प्रक्रिया" : "Process"}
        title={
          locale === "np"
            ? "परियोजना कार्यान्वयन चरणहरू"
            : "Our delivery approach"
        }
        description={
          locale === "np"
            ? "स्पष्ट चरणहरू, अनुशासित कार्यान्वयन, र उत्तरदायी ह्यान्डओभर।"
            : "Clear phases, disciplined execution, and accountable handover."
        }
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
