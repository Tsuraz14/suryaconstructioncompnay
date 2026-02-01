import Link from "next/link";
import type { Lang } from "@/lib/i18n";

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Lang = lang === "np" ? "np" : "en";

  const title = locale === "np" ? "पृष्ठ फेला परेन" : "Page not found";
  const body =
    locale === "np"
      ? "तपाईंले खोजेको पृष्ठ भेटिएन। कृपया गृहपृष्ठमा फर्कनुहोस् वा हामीसँग सम्पर्क गर्नुहोस्।"
      : "The page you are looking for doesn't exist. Please return home or contact us for help.";

  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-16">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-foreground/70 md:text-base">{body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}`}
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
          >
            {locale === "np" ? "गृहपृष्ठ" : "Back to home"}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
          >
            {locale === "np" ? "सम्पर्क" : "Contact"}
          </Link>
        </div>
      </div>
    </div>
  );
}
