import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";

const footerCopy = {
  en: {
    title: "Surya Construction Company Pvt. Ltd.",
    registered: "Registered office",
    city: "City office",
    phone: "Phone",
    email: "Email",
    quickLinks: "Quick Links",
  },
  np: {
    title: "सूर्य कन्स्ट्रक्सन कम्पनी प्रा. लि.",
    registered: "दर्ता कार्यालय",
    city: "शहर कार्यालय",
    phone: "फोन",
    email: "इमेल",
    quickLinks: "छिटो पहुँच",
  },
} as const;

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
] as const;

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const copy = footerCopy[lang] ?? footerCopy.en;
  const labels = t(lang);
  const year = new Date().getFullYear();

  const buildHref = (href: string) => (href ? `/${lang}${href}` : `/${lang}`);

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-foreground">{copy.title}</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {copy.registered}: Pokhara-26, Kaski, Gandaki Province, Nepal
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {copy.city}: Mustang Chowk, Pokhara-7, Kaski
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {copy.phone}: +977-9856021612, 061-461129
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {copy.email}: surya_cco@yahoo.com
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            {copy.quickLinks}
          </p>
          <nav className="grid gap-2 text-sm text-foreground/80">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={buildHref(item.href)}
                className="transition hover:text-foreground"
              >
                {labels.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            {labels.companyName}
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">
            {labels.cta}
          </p>
          <Link
            href={buildHref("/contact")}
            className="btn-primary w-fit px-4 py-2 text-sm"
          >
            {labels.nav.contact}
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-foreground/60 sm:px-6 lg:px-8">
          © {year} Surya Construction Company Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
