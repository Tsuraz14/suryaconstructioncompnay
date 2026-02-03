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
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-4 text-center">
        <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {body}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            {lang === "np" ? "पुनः प्रयास" : "Retry"}
          </button>
          <Link href={`/${lang}`} className="btn-secondary">
            {lang === "np" ? "गृहपृष्ठ" : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
