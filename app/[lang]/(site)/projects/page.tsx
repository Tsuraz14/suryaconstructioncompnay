import { t, type Lang } from "@/lib/i18n";
import { projects } from "@/lib/content";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import ProjectsFilter from "@/components/projects-filter";
import JsonLd from "@/components/seo/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const title = locale === "np" ? labels.nav.projects : "Projects";
  const description =
    locale === "np"
      ? "अस्पताल, सडक, जलविद्युत्, र सार्वजनिक संरचनाहरू—स्पष्ट माइलस्टोन र गुणस्तरीय कार्यान्वयन।"
      : "Hospitals, roads, hydropower, and public facilities delivered with clear milestones and quality execution.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/projects"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type ProjectsPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "विश्वासका साथ सम्पन्न परियोजनाहरू।"
      : "Projects delivered with accountability.";
  const intro =
    locale === "np"
      ? "आवासीय, व्यावसायिक, र पूर्वाधार परियोजनाहरूमा स्पष्ट माइलस्टोन र नियमित रिपोर्टिङ।"
      : "Clear milestones and consistent reporting across residential, commercial, and infrastructure work.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.projects, path: "/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section eyebrow={labels.nav.projects} title={heading} description={intro}>
        <ProjectsFilter projects={projects} lang={locale} />
      </Section>
    </>
  );
}
