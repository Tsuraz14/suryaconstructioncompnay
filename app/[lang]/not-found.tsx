import Link from "next/link";
import type { Lang } from "@/lib/i18n";

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";

  const title = locale === "np" ? "पृष्ठ फेला परेन" : "Page not found";
  const body =
    locale === "np"
      ? "तपाईंले खोजेको पृष्ठ भेटिएन। कृपया गृहपृष्ठमा फर्कनुहोस् वा हामीसँग सम्पर्क गर्नुहोस्।"
      : "The page you are looking for doesn't exist. Please return home or contact us for help.";

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {body}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}`}
            className="btn-primary"
          >
            {locale === "np" ? "गृहपृष्ठ" : "Back to home"}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="btn-secondary"
          >
            {locale === "np" ? "सम्पर्क" : "Contact"}
          </Link>
        </div>
      </div>
    </div>
  );
}
