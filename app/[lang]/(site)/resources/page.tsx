import Image from "next/image";
import Link from "next/link";
import { type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import { getBlogsSorted, getLocalizedBlogDate } from "@/lib/blogs";
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
      ? "निर्माण सम्बन्धी जानकारी र स्रोतहरू"
      : "Construction Insights & Resources";
  const description =
    locale === "np"
      ? "निर्माण योजना, लागत, गुणस्तर, र कार्यान्वयन सम्बन्धी उपयोगी लेख तथा व्यावहारिक जानकारी।"
      : "Practical resources on construction planning, cost estimation, quality control, and project execution.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/resources"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type ResourcesPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";

  const blogs = getBlogsSorted();
  const heading =
    locale === "np"
      ? "निर्माण सम्बन्धी जानकारी र स्रोतहरू"
      : "Construction Insights & Resources";
  const intro =
    locale === "np"
      ? "परियोजना योजना, कार्यान्वयन, र गुणस्तर सुधारका लागि उपयोगी व्यावहारिक सामग्री।"
      : "Practical articles to support better project planning, execution, and quality outcomes.";
  const readMoreLabel = locale === "np" ? "थप पढ्नुहोस्" : "Read More";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    {
      name:
        locale === "np"
          ? "निर्माण सम्बन्धी जानकारी र स्रोतहरू"
          : "Construction Insights & Resources",
      path: "/resources",
    },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {locale === "np" ? "स्रोतहरू" : "Resources"}
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                {heading}
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <Reveal key={blog.slug} delay={index * 70}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg">
                  <Link
                    href={`/${locale}/resources/${blog.slug}`}
                    className="relative block h-52 w-full overflow-hidden"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title[locale]}
                      fill
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </Link>
                  <div className="space-y-3 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                      {getLocalizedBlogDate(blog.date, locale)}
                    </p>
                    <h2 className="text-lg font-semibold leading-snug text-foreground">
                      <Link href={`/${locale}/resources/${blog.slug}`}>
                        {blog.title[locale]}
                      </Link>
                    </h2>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {blog.excerpt[locale]}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/${locale}/resources/${blog.slug}`}
                        className="btn-secondary !rounded-lg px-4 py-2 text-sm"
                      >
                        {readMoreLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
