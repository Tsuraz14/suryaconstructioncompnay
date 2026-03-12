import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Lang } from "@/lib/i18n";
import { SITE_URL, buildBreadcrumbs, getAlternates } from "@/lib/site";
import { getBlogBySlug, getBlogsSorted, getLocalizedBlogDate } from "@/lib/blogs";
import Reveal from "@/components/motion/reveal";
import JsonLd from "@/components/seo/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogsSorted().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np"; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";
  const blog = getBlogBySlug(slug);

  if (!blog) {
    const fallbackTitle = locale === "np" ? "स्रोतहरू" : "Resources";
    const fallbackDescription =
      locale === "np"
        ? "निर्माण सम्बन्धी जानकारी र स्रोतहरू।"
        : "Construction insights and resources.";

    return {
      title: fallbackTitle,
      description: fallbackDescription,
      alternates: getAlternates(locale, "/resources"),
      openGraph: {
        title: fallbackTitle,
        description: fallbackDescription,
        type: "website",
      },
    };
  }

  const title = `${blog.title[locale]} | Surya Construction`;
  const description = blog.excerpt[locale];
  const path = `/resources/${blog.slug}`;

  return {
    title,
    description,
    alternates: getAlternates(locale, path),
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: `${SITE_URL}${blog.image}`,
        },
      ],
    },
  };
}

type ResourceArticlePageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export default async function ResourceArticlePage({
  params,
}: ResourceArticlePageProps) {
  const { lang, slug } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";

  const blog = getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content[locale]
    .split("\n\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const pageUrl = `${SITE_URL}/${locale}/resources/${blog.slug}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: locale === "np" ? "स्रोतहरू" : "Resources", path: "/resources" },
    { name: blog.title[locale], path: `/resources/${blog.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {blog.category}
              </p>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
                {blog.title[locale]}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm text-foreground/70">
                {getLocalizedBlogDate(blog.date, locale)} · {blog.author}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative h-[280px] overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm md:h-[420px]">
              <Image
                src={blog.image}
                alt={blog.title[locale]}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 70vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <article className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-4">
              <span className="text-sm font-medium text-foreground/80">
                {locale === "np" ? "यो लेख सेयर गर्नुहोस्:" : "Share this article:"}
              </span>
              <a
                href={facebookShare}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !rounded-lg px-4 py-2 text-sm"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !rounded-lg px-4 py-2 text-sm"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border/70 bg-gradient-to-r from-brand/12 via-brand/5 to-transparent p-6 md:p-8">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {locale === "np"
                  ? "तपाईंको निर्माण परियोजनाका लागि सहयोग चाहिन्छ?"
                  : "Need help with your construction project? Contact our team."}
              </h2>
              <div className="pt-5">
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary px-7 py-3 transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 active:translate-y-0"
                >
                  {locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team"}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
