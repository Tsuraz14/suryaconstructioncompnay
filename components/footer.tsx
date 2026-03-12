import Image from "next/image";
import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";

const footerCopy = {
  en: {
    registered: "Registered office",
    city: "City office",
    phone: "Phone",
    email: "Email",
    quickLinks: "Quick Links",
    trustHeading: "Trust & Compliance",
    trustCopy:
      "Safety, quality, and accountability are embedded into every stage of delivery.",
    trustBullets: [
      "Dedicated safety officers & PPE",
      "QA/QC checks at every milestone",
      "Insurance & compliance standards",
    ],
    contactHeading: "Contact",
  },
  np: {
    registered: "दर्ता कार्यालय",
    city: "शहर कार्यालय",
    phone: "फोन",
    email: "इमेल",
    quickLinks: "छिटो पहुँच",
    trustHeading: "विश्वास र अनुपालन",
    trustCopy:
      "सुरक्षा, गुणस्तर, र उत्तरदायित्व हाम्रो कामको प्रत्येक चरणमा समावेश हुन्छ।",
    trustBullets: [
      "समर्पित सुरक्षा अधिकृत तथा PPE",
      "प्रत्येक माइलस्टोनमा QA/QC जाँच",
      "बीमा तथा अनुपालन मापदण्ड",
    ],
    contactHeading: "सम्पर्क",
  },
} as const;

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "equipmentRental", href: "/equipment-rental" },
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
    <footer className="border-t border-border/70 bg-card/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.95fr]">
          <div className="space-y-6">
            <Link href={buildHref("")} className="flex items-center gap-3">
              <div className="rounded-full border border-border bg-background p-1.5">
                <Image
                  src="/logo/logo.webp"
                  alt={labels.companyName}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="h-10 w-10 md:h-12 md:w-12"
                />
              </div>
              <div className="leading-tight">
                <p className="text-base font-semibold text-foreground">
                  {labels.companyName}
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/60">
                  {labels.companyTagline}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/suryaconstructioncompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-neutral-700 dark:text-neutral-300 transition duration-200 ease-out hover:text-brand hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M13.5 8.5V6.7c0-.7.5-1.2 1.2-1.2H16V2.6h-2.2A3.6 3.6 0 0 0 10.2 6v2.5H8v2.9h2.2v8.1h3.3v-8.1h2.4l.4-2.9h-2.8Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@suryaconstructioncompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our TikTok profile"
                className="text-neutral-700 dark:text-neutral-300 transition duration-200 ease-out hover:text-brand hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M16.8 3c.3 1.6 1.2 2.7 2.9 2.8v2.3c-1.3 0-2.5-.4-3.5-1.1v6.2a5.2 5.2 0 1 1-5.2-5.2c.3 0 .7 0 1 .1v2.4a2.9 2.9 0 1 0 1.8 2.7V3h3Z" />
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                {copy.trustHeading}
              </p>
              <p className="text-sm leading-relaxed text-foreground/80">
                {copy.trustCopy}
              </p>
              <ul className="grid gap-2 text-sm text-foreground/80">
                {copy.trustBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={buildHref("/contact")}
              className="btn-primary !rounded-lg w-fit px-4 py-2 text-sm"
            >
              {labels.cta}
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
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
              <Link
                href={buildHref("/resources")}
                className="transition hover:text-foreground"
              >
                {lang === "np" ? "स्रोतहरू" : "Resources"}
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              {copy.contactHeading}
            </p>
            <div className="space-y-2 text-sm leading-relaxed text-foreground/80">
              <p>
                <span className="font-medium text-foreground">
                  {copy.registered}:
                </span>{" "}
                Pokhara-26, Kaski, Gandaki Province, Nepal
              </p>
              <p>
                <span className="font-medium text-foreground">
                  {copy.city}:
                </span>{" "}
                Mustang Chowk, Pokhara-7, Kaski
              </p>
              <p>
                <span className="font-medium text-foreground">
                  {copy.phone}:
                </span>{" "}
                <a
                  href="tel:+9779856021612"
                  className="transition hover:text-foreground"
                >
                  +977-9856021612
                </a>
                ,{" "}
                <a
                  href="tel:061461129"
                  className="transition hover:text-foreground"
                >
                  061-461129
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">
                  {copy.email}:
                </span>{" "}
                <a
                  href="mailto:surya_cco@yahoo.com"
                  className="transition hover:text-foreground"
                >
                  surya_cco@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-foreground/60 sm:px-6 lg:px-8">
          © {year} Surya Construction Company Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
