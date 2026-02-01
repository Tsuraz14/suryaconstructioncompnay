"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const lang = params?.lang === "np" ? "np" : "en";

  const title = lang === "np" ? "केही समस्या भयो।" : "Something went wrong.";
  const body =
    lang === "np"
      ? "कृपया पुनः प्रयास गर्नुहोस् वा गृहपृष्ठमा फर्कनुहोस्।"
      : "Please try again or return to the homepage.";

  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-16">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="text-sm text-foreground/70 md:text-base">{body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
          >
            {lang === "np" ? "पुनः प्रयास" : "Retry"}
          </button>
          <Link
            href={`/${lang}`}
            className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
          >
            {lang === "np" ? "गृहपृष्ठ" : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
