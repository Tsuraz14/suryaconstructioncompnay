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

type ProjectItem = {
  id: string;
  status: "completed" | "ongoing";
  category: "Hospital" | "Infrastructure" | "Road" | "Hydropower";
  title: Record<Lang, string>;
  location: Record<Lang, string>;
  image: string;
  shortDescription: Record<Lang, string>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "नेपालभरि सम्पन्न तथा निर्माणाधीन परियोजनाहरू"
      : "Our Projects Across Nepal";
  const intro =
    locale === "np"
      ? "दशकौँको अवधिमा हामी सार्वजनिक तथा निजी क्षेत्रका लागि जटिल निर्माण तथा पूर्वाधार परियोजनाहरू सम्पन्न गर्दै आएका छौं।"
      : "Over decades, we have delivered complex construction and infrastructure projects for public and private sector clients.";

  const projectItems: ProjectItem[] = [
    {
      id: "charak-memorial-hospital",
      status: "completed",
      category: "Hospital",
      title: {
        en: "Charak Memorial Hospital",
        np: "चरक मेमोरियल अस्पताल",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/charak-memorial-hospital.webp",
      shortDescription: {
        en: "Multi-storey hospital building with integrated civil and finishing works.",
        np: "समन्वित सिभिल तथा फिनिसिङ कामसहित बहु-तले अस्पताल भवन।",
      },
    },
    {
      id: "gandaki-medical-college",
      status: "completed",
      category: "Hospital",
      title: {
        en: "Gandaki Medical College",
        np: "गण्डकी मेडिकल कलेज",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/gandaki-medical-college.webp",
      shortDescription: {
        en: "Academic and clinical blocks delivered with durable RCC structure.",
        np: "दिगो RCC संरचनासहित शैक्षिक तथा क्लिनिकल ब्लकहरू।",
      },
    },
    {
      id: "hotel-annapurna-view",
      status: "completed",
      category: "Infrastructure",
      title: {
        en: "Hotel Annapurna View",
        np: "होटेल अन्नपूर्णा भ्यू",
      },
      location: {
        en: "Sarangkot, Pokhara",
        np: "साराङकोट, पोखरा",
      },
      image: "/images/projects/hotel-annapurna-view.webp",
      shortDescription: {
        en: "Hospitality facility with premium guest spaces and site development.",
        np: "प्रिमियम अतिथि क्षेत्र र साइट विकाससहितको आतिथ्य भवन।",
      },
    },
    {
      id: "singati-khola-tunnel",
      status: "completed",
      category: "Hydropower",
      title: {
        en: "Singati Khola Hydropower Tunnel Civil Works",
        np: "सिङ्गाटी खोला जलविद्युत् टनेल सिभिल काम",
      },
      location: {
        en: "Dolakha",
        np: "दोलखा",
      },
      image: "/images/projects/singati-khola-tunnel.webp",
      shortDescription: {
        en: "Tunnel excavation, lining, and hydropower civil structures.",
        np: "टनेल उत्खनन, लाइनिङ, र जलविद्युत् सिभिल संरचनाहरू।",
      },
    },
    {
      id: "nayapul-road-upgrading",
      status: "completed",
      category: "Road",
      title: {
        en: "Nayapul–Birethanti–Ghandruk Road Upgrading",
        np: "नयाँपुल–बिरेठाँटी–घान्द्रुक सडक स्तरोन्नति",
      },
      location: {
        en: "Kaski",
        np: "कास्की",
      },
      image: "/images/projects/nayapul-road-upgrading.webp",
      shortDescription: {
        en: "Road upgrade with drainage, retaining, and slope protection.",
        np: "निकास, रिटेनिङ, र ढलान संरक्षणसहित सडक स्तरोन्नति।",
      },
    },
    {
      id: "pokhara-pharma-factory",
      status: "completed",
      category: "Infrastructure",
      title: {
        en: "Pokhara Pharmaceuticals Factory",
        np: "पोखरा फर्मास्युटिकल्स कारखाना",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/pokhara-pharma-factory.webp",
      shortDescription: {
        en: "Industrial facility with compliant production areas and utilities.",
        np: "अनुरूप उत्पादन क्षेत्र र युटिलिटीसहितको औद्योगिक भवन।",
      },
    },
    {
      id: "pokhara-university-hospital",
      status: "completed",
      category: "Hospital",
      title: {
        en: "100-Bedded Hospital (Pokhara University)",
        np: "१०० शय्याको अस्पताल (पोखरा विश्वविद्यालय)",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/pokhara-university-hospital.webp",
      shortDescription: {
        en: "Phased hospital construction with strict quality oversight.",
        np: "कडाइका गुणस्तर मापदण्डसहित चरणबद्ध अस्पताल निर्माण।",
      },
    },
    {
      id: "pokhara-event-centre",
      status: "completed",
      category: "Infrastructure",
      title: {
        en: "Pokhara Event Centre",
        np: "पोखरा इभेन्ट सेन्टर",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/pokhara-event-centre.webp",
      shortDescription: {
        en: "Large-span public venue with integrated services.",
        np: "एकीकृत सेवासहित ठूलो स्प्यान सार्वजनिक स्थल।",
      },
    },
    {
      id: "5story-school-building",
      status: "ongoing",
      category: "Infrastructure",
      title: {
        en: "School Building Global College",
        np: "विद्यालय भवन ग्लोबल कलेज",
      },
      location: {
        en: "Pokhara",
        np: "पोखरा",
      },
      image: "/images/projects/5story-school-building.webp",
      shortDescription: {
        en: "Large-span public venue with integrated services.",
        np: "एकीकृत सेवासहित ठूलो स्प्यान सार्वजनिक स्थल।",
      },
    },
  ];

  const filterLabels = {
    all: locale === "np" ? "सबै परियोजनाहरू" : "All Projects",
    completed: locale === "np" ? "सम्पन्न परियोजनाहरू" : "Completed Projects",
    ongoing: locale === "np" ? "निर्माणाधीन परियोजनाहरू" : "Ongoing Projects",
  } as const;

  const statusLabels = {
    completed: locale === "np" ? "सम्पन्न" : "Completed",
    ongoing: locale === "np" ? "निर्माणाधीन" : "Ongoing",
  } as const;

  const categoryLabels = {
    Hospital: {
      en: "Hospital",
      np: "अस्पताल",
    },
    Infrastructure: {
      en: "Infrastructure",
      np: "पूर्वाधार",
    },
    Road: {
      en: "Road",
      np: "सडक",
    },
    Hydropower: {
      en: "Hydropower",
      np: "जलविद्युत्",
    },
  } as const;

  const projectAltText = (project: ProjectItem) =>
    locale === "np"
      ? `${project.location[locale]} मा ${project.title[locale]} निर्माण परियोजना`
      : `${project.title[locale]} project in ${project.location[locale]}`;

  const completedProjects = projectItems.filter(
    (project) => project.status === "completed"
  );
  const ongoingProjects = projectItems.filter(
    (project) => project.status === "ongoing"
  );

  const featuredTitle =
    locale === "np"
      ? "प्रमुख संस्थागत परियोजनाहरू"
      : "Key Institutional Projects";
  const featuredProjects = projectItems.filter((project) =>
    [
      "charak-memorial-hospital",
      "gandaki-medical-college",
      "pokhara-university-hospital",
      "pokhara-event-centre",
    ].includes(project.id)
  );

  const qualityNote =
    locale === "np"
      ? "प्रत्येक परियोजना व्यवस्थित योजना, कडा सुरक्षा प्रोटोकल, र निरन्तर गुणस्तर निगरानीसहित कार्यान्वयन गरिन्छ।"
      : "Every project is executed with structured planning, strict safety protocols, and continuous quality monitoring.";

  const ctaTitle =
    locale === "np"
      ? "विश्वसनीय निर्माण साझेदार खोज्दै हुनुहुन्छ?"
      : "Looking for a reliable construction partner?";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.projects, path: "/projects" },
  ]);

  const renderProjectCard = (project: ProjectItem, index: number) => {
    const statusClass =
      project.status === "ongoing"
        ? "bg-brand text-white"
        : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200";
    const categoryLabel = categoryLabels[project.category][locale];

    return (
      <Reveal key={project.id} delay={index * 60}>
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
          <div className="relative h-56 w-full overflow-hidden md:h-64">
            <Image
              src={project.image}
              alt={projectAltText(project)}
              fill
              className="object-cover transition duration-700 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition duration-300 group-hover:from-black/80" />
            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusClass}`}
              >
                {statusLabels[project.status]}
              </span>
              <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                {categoryLabel}
              </span>
            </div>
          </div>
          <div className="space-y-2 p-5 transition duration-300 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {project.location[locale]}
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              {project.title[locale]}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              {project.shortDescription[locale]}
            </p>
          </div>
        </article>
      </Reveal>
    );
  };

  const renderProjectGrid = (items: ProjectItem[]) => (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((project, index) => renderProjectCard(project, index))}
    </div>
  );

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {heading}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              {intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-16">
          <div
            className="flex flex-wrap items-center gap-4"
            role="tablist"
            aria-label={
              locale === "np" ? "परियोजना फिल्टर" : "Project filters"
            }
          >
            <input
              id="filter-all"
              name="project-filter"
              type="radio"
              defaultChecked
              className="peer/all sr-only"
            />
            <input
              id="filter-completed"
              name="project-filter"
              type="radio"
              className="peer/completed sr-only"
            />
            <input
              id="filter-ongoing"
              name="project-filter"
              type="radio"
              className="peer/ongoing sr-only"
            />
            <label
              htmlFor="filter-all"
              className="relative cursor-pointer rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground after:absolute after:-bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 peer-checked/all:border-brand peer-checked/all:text-foreground peer-checked/all:after:scale-x-100 md:sticky md:top-24 md:z-20 md:bg-background/80 md:backdrop-blur"
              role="tab"
            >
              {filterLabels.all}
            </label>
            <label
              htmlFor="filter-completed"
              className="relative cursor-pointer rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground after:absolute after:-bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 peer-checked/completed:border-brand peer-checked/completed:text-foreground peer-checked/completed:after:scale-x-100 md:sticky md:top-24 md:z-20 md:bg-background/80 md:backdrop-blur"
              role="tab"
            >
              {filterLabels.completed}
            </label>
            <label
              htmlFor="filter-ongoing"
              className="relative cursor-pointer rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 transition hover:border-brand hover:text-foreground after:absolute after:-bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 peer-checked/ongoing:border-brand peer-checked/ongoing:text-foreground peer-checked/ongoing:after:scale-x-100 md:sticky md:top-24 md:z-20 md:bg-background/80 md:backdrop-blur"
              role="tab"
            >
              {filterLabels.ongoing}
            </label>

            <div className="w-full peer-checked/completed:hidden peer-checked/ongoing:hidden">
              {renderProjectGrid(projectItems)}
            </div>
            <div className="hidden w-full peer-checked/completed:block">
              {renderProjectGrid(completedProjects)}
            </div>
            <div className="hidden w-full peer-checked/ongoing:block">
              {renderProjectGrid(ongoingProjects)}
            </div>
          </div>
        </div>
      </section>

      <Section title={featuredTitle}>
        <div className="relative group/carousel">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-background via-background/70 to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-background via-background/70 to-transparent md:block" />
          <div className="absolute inset-y-0 left-2 hidden items-center md:flex">
            <a
              href="#projects-featured-start"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 opacity-0 transition duration-200 hover:text-foreground focus-visible:opacity-100 group-hover/carousel:opacity-100"
              aria-label={
                locale === "np"
                  ? "सुरुका परियोजनाहरूमा जानुहोस्"
                  : "Scroll to first featured projects"
              }
            >
              ←
            </a>
          </div>
          <div className="absolute inset-y-0 right-2 hidden items-center md:flex">
            <a
              href="#projects-featured-end"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/70 opacity-0 transition duration-200 hover:text-foreground focus-visible:opacity-100 group-hover/carousel:opacity-100"
              aria-label={
                locale === "np"
                  ? "अन्तिम परियोजनाहरूमा जानुहोस्"
                  : "Scroll to last featured projects"
              }
            >
              →
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 pt-2 motion-safe:scroll-smooth snap-x snap-mandatory">
            <span id="projects-featured-start" className="sr-only" />
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 90}
                className="min-w-[82%] snap-start sm:min-w-[48%] lg:min-w-[32%]"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={projectAltText(project)}
                      fill
                      className="object-cover transition duration-700 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-[1.03]"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 60vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-300 group-hover:from-black/80" />
                  </div>
                  <div className="space-y-2 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {project.location[locale]}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title[locale]}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.shortDescription[locale]}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <span id="projects-featured-end" className="sr-only" />
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
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
              className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
            >
              {locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team"}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
