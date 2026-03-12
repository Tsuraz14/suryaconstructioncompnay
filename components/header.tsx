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
  { key: "equipmentRental", href: "/equipment-rental" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

type HeaderProps = {
  lang: Lang;
};

export default function Header({ lang }: HeaderProps) {
  const labels = t(lang);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      setScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

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
  const entranceClass = reduceMotion
    ? "opacity-100 translate-y-0"
    : mounted
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-2";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 bg-background/70 ${scrolled
          ? "backdrop-blur-lg shadow-sm"
          : "shadow-none"
        } ${reduceMotion ? "" : "transition-all duration-300 ease-out"} ${entranceClass}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 ${scrolled ? "py-2.5 md:py-3" : "py-4 md:py-5"
            } ${reduceMotion ? "" : "transition-all duration-300 ease-out"}`}
        >
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="rounded-full border border-border bg-card p-1">
              <Image
                src="/logo/logo.webp"
                alt={labels.companyName}
                width={48}
                height={48}
                sizes="(max-width: 768px) 40px, 48px"
                className="h-10 w-10 md:h-12 md:w-12"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNGMzhBMTUiLz48L3N2Zz4="
              />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-semibold text-foreground md:text-base">
                {labels.companyName}
              </span>
              <span className="block text-xs uppercase tracking-[0.22em] text-foreground/60">
                {labels.companyTagline}
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium tracking-[0.08em] md:flex">
            {navItems.map((item) => {
              const href = buildHref(item.href);
              const active = isActive(href);

              return (
                <Link
                  key={item.key}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap text-[13px] font-medium no-underline transition-colors hover:no-underline after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:content-[''] motion-safe:after:transition-transform motion-safe:after:duration-300 motion-reduce:after:transition-none ${active
                      ? "text-foreground after:scale-x-100"
                      : "text-foreground/70 hover:text-foreground hover:after:scale-x-100"
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
              className="btn-primary !rounded-lg px-4 py-2 text-sm"
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

      <div className="md:hidden">
        <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div
            id="mobile-nav"
            className={`origin-top overflow-hidden ${menuOpen
                ? "max-h-[520px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
              } ${reduceMotion
                ? ""
                : "transition-all duration-300 ease-out motion-reduce:transition-none"
              }`}
          >
            <div className="card-surface p-4">
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
                      className={`flex items-center justify-between rounded-lg px-3 py-2 no-underline transition hover:no-underline ${active
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
                className="btn-primary !rounded-lg mt-4 w-full px-4 py-2 text-sm"
              >
                {labels.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
