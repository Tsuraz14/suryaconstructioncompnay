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
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "हाम्रा निर्माण परियोजनाहरू"
      : "Our Construction Projects";
  const intro =
    locale === "np"
      ? "१९७८ देखि नेपालभरि जटिल निर्माण तथा पूर्वाधार परियोजनाहरू अनुशासित QA/QC सहित कार्यान्वयन गर्दै आएका छौं।"
      : "Since 1978, we have delivered complex construction and infrastructure projects across Nepal with disciplined QA/QC.";

  type ProjectItem = {
    id: string;
    status: "completed" | "ongoing";
    title: Record<Lang, string>;
    location: Record<Lang, string>;
    summary: Record<Lang, string>;
    image: string;
  };

  const projectItems: ProjectItem[] = [
    {
      id: "charak-memorial-hospital",
      status: "completed",
      title: {
        en: "Charak Memorial Hospital Building",
        np: "चरक मेमोरियल अस्पताल भवन",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      summary: {
        en: "Multi-storey hospital facility with coordinated civil and finishing works.",
        np: "समन्वित सिभिल तथा फिनिसिङ कामसहित बहु-तले अस्पताल सुविधा।",
      },
      image: "/images/projects/charak-memorial-hospital.webp",
    },
    {
      id: "gandaki-medical-college",
      status: "completed",
      title: {
        en: "Gandaki Medical College Buildings",
        np: "गण्डकी मेडिकल कलेज भवनहरू",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      summary: {
        en: "Academic and clinical blocks delivered with durable RCC structure.",
        np: "दिगो RCC संरचनासहित शैक्षिक तथा क्लिनिकल ब्लकहरू।",
      },
      image: "/images/projects/gandaki-medical-college.webp",
    },
    {
      id: "pokhara-university-hospital",
      status: "completed",
      title: {
        en: "100-Bedded Hospital (Pokhara University)",
        np: "१०० शय्याको अस्पताल (पोखरा विश्वविद्यालय)",
      },
      location: {
        en: "Kaski",
        np: "कास्की",
      },
      summary: {
        en: "Phased hospital project with strict quality oversight.",
        np: "चरणबद्ध निर्माण र कडाइका गुणस्तर मापदण्डसहित अस्पताल।",
      },
      image: "/images/projects/pokhara-university-hospital.webp",
    },
    {
      id: "singati-khola-tunnel",
      status: "completed",
      title: {
        en: "Singati Khola Hydropower Tunnel Civil Works",
        np: "सिङ्गाटी खोला जलविद्युत् टनेल सिभिल काम",
      },
      location: {
        en: "Dolakha",
        np: "दोलखा",
      },
      summary: {
        en: "Tunnel excavation, lining, and associated civil structures.",
        np: "टनेल उत्खनन, लाइनिङ, र सम्बन्धित सिभिल संरचना।",
      },
      image: "/images/projects/singati-khola-tunnel.webp",
    },
    {
      id: "nayapul-road-upgrading",
      status: "completed",
      title: {
        en: "Nayapul–Birethanti–Ghandruk Road Upgrading",
        np: "नयाँपुल–बिरेठाँटी–घान्द्रुक सडक स्तरोन्नति",
      },
      location: {
        en: "Kaski",
        np: "कास्की",
      },
      summary: {
        en: "Road upgrade with drainage, retaining, and slope protection.",
        np: "निकास, रिटेनिङ, र ढलान संरक्षणसहित सडक सुधार।",
      },
      image: "/images/projects/nayapul-road-upgrading.webp",
    },
    {
      id: "pokhara-pharma-factory",
      status: "completed",
      title: {
        en: "Pokhara Pharmaceuticals Factory Building",
        np: "पोखरा फर्मास्युटिकल्स कारखाना भवन",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      summary: {
        en: "Industrial facility with compliant production areas and utilities.",
        np: "अनुरूप उत्पादन क्षेत्र र युटिलिटीसहितको औद्योगिक भवन।",
      },
      image: "/images/projects/pokhara-pharma-factory.webp",
    },
    {
      id: "pokhara-event-centre",
      status: "completed",
      title: {
        en: "Pokhara Event Centre",
        np: "पोखरा इभेन्ट सेन्टर",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      summary: {
        en: "Large-span public venue with integrated services and site works.",
        np: "ठूलो स्प्यान सार्वजनिक स्थल र एकीकृत सेवासहितको स्थल विकास।",
      },
      image: "/images/projects/pokhara-event-centre.webp",
    },
    {
      id: "global-collegiate-school",
      status: "ongoing",
      title: {
        en: "Construction of 5 Story Building - Global Collegiate School",
        np: "ग्लोबल कलेजिएट स्कूलको ५ तले भवन निर्माण",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      summary: {
        en: "School building under construction with structural and finishing works.",
        np: "संरचनात्मक तथा फिनिसिङ कामसहित निर्माणाधीन विद्यालय भवन।",
      },
      image: "/images/projects/global-collegiate-school.webp",
    },
    {
      id: "hotel-annapurna-view",
      status: "completed",
      title: {
        en: "Hotel Annapurna View",
        np: "होटेल अन्नपूर्णा भ्यू",
      },
      location: {
        en: "Sarangkot, Pokhara",
        np: "साराङकोट, पोखरा",
      },
      summary: {
        en: "Hospitality building with premium guest spaces and site works.",
        np: "प्रिमियम अतिथि क्षेत्र र साइट कामसहितको आतिथ्य भवन।",
      },
      image: "/images/projects/hotel-annapurna-view.webp",
    },
  ];

  const filterLabels = {
    all: locale === "np" ? "सबै" : "All",
    completed: locale === "np" ? "सम्पन्न" : "Completed",
    ongoing: locale === "np" ? "निर्माणाधीन" : "Ongoing",
  } as const;

  const statusLabels = {
    completed: locale === "np" ? "सम्पन्न" : "Completed",
    ongoing: locale === "np" ? "निर्माणाधीन" : "Ongoing",
  } as const;

  const projectAltText = (project: ProjectItem) =>
    locale === "np"
      ? `${project.location[locale]} मा ${project.title[locale]} निर्माण परियोजना`
      : `${project.title[locale]} construction project in ${project.location[locale]}`;

  const completedProjects = projectItems.filter(
    (project) => project.status === "completed"
  );
  const ongoingProjects = projectItems.filter(
    (project) => project.status === "ongoing"
  );

  const qualityNote =
    locale === "np"
      ? "सबै परियोजनाहरू कडा सुरक्षा, गुणस्तर नियन्त्रण, र अनुपालन मापदण्डअनुसार कार्यान्वयन गरिन्छ—सार्वजनिक तथा निजी क्षेत्रका लागि।"
      : "All projects are executed with strict safety, quality control, and compliance standards for public and private sector clients.";

  const ctaTitle =
    locale === "np"
      ? "निर्माण परियोजना योजना गर्दै हुनुहुन्छ?"
      : "Planning a construction project?";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.projects, path: "/projects" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section align="center">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-12 md:px-12">
          <div className="absolute inset-0">
            <Image
              src="/images/projects/project-hero.webp"
              alt={
                locale === "np"
                  ? "नेपालभरि ठूलो स्तरका निर्माण र पूर्वाधार परियोजनाहरू"
                  : "Large-scale construction and infrastructure projects across Nepal"
              }
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/95" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {labels.nav.projects}
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
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div
            className="flex flex-wrap items-center justify-center gap-2 md:justify-start"
            role="tablist"
            aria-label={locale === "np" ? "परियोजना फिल्टर" : "Project filters"}
          >
            <input
              id="filter-all"
              name="project-filter"
              type="radio"
              defaultChecked
              className="peer/all sr-only"
            />
            <label
              htmlFor="filter-all"
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground peer-checked/all:border-brand peer-checked/all:bg-brand/10 peer-checked/all:text-brand"
              role="tab"
            >
              {filterLabels.all}
            </label>
            <input
              id="filter-completed"
              name="project-filter"
              type="radio"
              className="peer/completed sr-only"
            />
            <label
              htmlFor="filter-completed"
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground peer-checked/completed:border-brand peer-checked/completed:bg-brand/10 peer-checked/completed:text-brand"
              role="tab"
            >
              {filterLabels.completed}
            </label>
            <input
              id="filter-ongoing"
              name="project-filter"
              type="radio"
              className="peer/ongoing sr-only"
            />
            <label
              htmlFor="filter-ongoing"
              className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground peer-checked/ongoing:border-brand peer-checked/ongoing:bg-brand/10 peer-checked/ongoing:text-brand"
              role="tab"
            >
              {filterLabels.ongoing}
            </label>
          </div>

          <div
            id="projects-grid-all"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 peer-checked/completed:hidden peer-checked/ongoing:hidden"
          >
            {projectItems.map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <article className="card-surface card-hover group h-full overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={projectAltText(project)}
                      fill
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "ongoing"
                          ? "bg-brand/15 text-brand"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
                      }`}
                    >
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {project.location[locale]}
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.summary[locale]}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div
            id="projects-grid-completed"
            className="hidden grid gap-6 md:grid-cols-2 lg:grid-cols-3 peer-checked/completed:grid"
          >
            {completedProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <article className="card-surface card-hover group h-full overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={projectAltText(project)}
                      fill
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                      {statusLabels.completed}
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {project.location[locale]}
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.summary[locale]}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div
            id="projects-grid-ongoing"
            className="hidden grid gap-6 md:grid-cols-2 lg:grid-cols-3 peer-checked/ongoing:grid"
          >
            {ongoingProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <article className="card-surface card-hover group h-full overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={projectAltText(project)}
                      fill
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
                      {statusLabels.ongoing}
                    </span>
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {project.location[locale]}
                    </p>
                    <h3 className="text-base font-semibold text-foreground">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.summary[locale]}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-xl border border-border/70 bg-muted/40 p-5 text-base leading-relaxed text-foreground/80">
            {qualityNote}
          </div>
        </Reveal>
      </Section>

      <Section className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {ctaTitle}
              </h2>
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
