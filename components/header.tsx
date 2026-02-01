"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import LangSwitch from "@/components/lang-switch";
import { t, type Lang } from "@/lib/i18n";

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "qualitySafety", href: "/quality-safety" },
  { key: "contact", href: "/contact" },
] as const;

type HeaderProps = {
  lang: Lang;
};

export default function Header({ lang }: HeaderProps) {
  const labels = t(lang);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const normalizedPath = (pathname || "/").replace(/\/$/, "") || "/";
  const buildHref = (href: string) => (href ? `/${lang}${href}` : `/${lang}`);
  const isActive = (href: string) => normalizedPath === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="rounded-full border border-border bg-card p-1">
              <Image
                src="/logo.svg"
                alt={labels.companyName}
                width={32}
                height={32}
                sizes="32px"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNGMzhBMTUiLz48L3N2Zz4="
              />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                {labels.companyName}
              </span>
              <span className="block text-xs text-foreground/70">
                {labels.companyTagline}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => {
              const href = buildHref(item.href);
              const active = isActive(href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap transition ${
                    active
                      ? "text-brand after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand after:content-['']"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {labels.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={buildHref("/contact")}
              className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-hover"
            >
              {labels.cta}
            </Link>
            <LangSwitch />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangSwitch />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:text-brand"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current" />
                <span className="absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current" />
                <span className="absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="container pb-4">
          <div
            id="mobile-nav"
            className="rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <nav className="flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => {
                const href = buildHref(item.href);
                const active = isActive(href);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 transition ${
                      active
                        ? "bg-muted text-brand"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {labels.nav[item.key]}
                  </Link>
                );
              })}
            </nav>
            <Link
              href={buildHref("/contact")}
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-hover"
            >
              {labels.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
