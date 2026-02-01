"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "np"] as const;

type Locale = (typeof locales)[number];

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const current: Locale = segments[0] === "np" ? "np" : "en";
  const rest = segments.slice(1).join("/");
  const basePath = rest ? `/${rest}` : "";

  const handleSwitch = (locale: Locale) => {
    if (locale === current) return;
    router.push(`/${locale}${basePath}`);
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-background/70 p-1 text-xs font-medium uppercase tracking-wide"
      role="group"
      aria-label="Language switch"
    >
      {locales.map((locale) => {
        const isActive = locale === current;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleSwitch(locale)}
            className={`rounded-full px-2.5 py-1 transition ${
              isActive
                ? "bg-brand text-black"
                : "text-foreground/80 hover:text-brand"
            }`}
            aria-pressed={isActive}
            aria-label={`Switch language to ${locale.toUpperCase()}`}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
