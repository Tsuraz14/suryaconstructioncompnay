import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import JsonLd from "@/components/seo/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "np" }>;
}) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const title = locale === "np" ? labels.nav.contact : "Contact";
  const description =
    locale === "np"
      ? "परामर्श, परियोजना योजना, र समन्वयका लागि सम्पर्क गर्नुहोस्।"
      : "Reach out for consultations, project planning, and coordination.";

  return {
    title,
    description,
    alternates: getAlternates(locale, "/contact"),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const lang = (await params)?.lang ?? "en";
  const locale: Lang = lang === "np" ? "np" : "en";
  const labels = t(locale);

  const heading =
    locale === "np"
      ? "अर्को निर्माण योजनाबारे कुरा गरौं।"
      : "Let’s plan your next build.";
  const intro =
    locale === "np"
      ? "परियोजनाको दायरा, स्थान, र समयरेखा साझेदारी गर्नुहोस्। हामी स्पष्ट योजना सहित प्रतिक्रिया दिनेछौं।"
      : "Share your scope, location, and timeline. We'll respond with a clear plan and next steps.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.contact, path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section eyebrow={labels.nav.contact} title={heading} description={intro} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              {locale === "np" ? "दर्ता कार्यालय" : "Registered office"}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Pokhara-26, Kaski, Gandaki Province, Nepal
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">
              {locale === "np" ? "शहर कार्यालय" : "City office"}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Mustang Chowk, Pokhara-7, Kaski
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border border-border bg-card p-6 text-sm text-foreground/70 md:grid-cols-2">
          <div className="space-y-2">
            <p>
              {locale === "np" ? "फोन" : "Phone"}: {" "}
              <Link
                href="tel:+9779856021612"
                className="text-foreground transition hover:text-brand"
              >
                +977-9856021612
              </Link>
            </p>
            <p>
              {locale === "np" ? "फोन" : "Phone"}: {" "}
              <Link
                href="tel:+97761461129"
                className="text-foreground transition hover:text-brand"
              >
                061-461129
              </Link>
            </p>
          </div>
          <div className="space-y-2">
            <p>
              {locale === "np" ? "इमेल" : "Email"}: {" "}
              <Link
                href="mailto:surya_cco@yahoo.com"
                className="text-foreground transition hover:text-brand"
              >
                surya_cco@yahoo.com
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "अनुरोध" : "Inquiry"}
        title={
          locale === "np"
            ? "परियोजनाबारे जानकारी पठाउनुहोस्"
            : "Send us your project details"
        }
        description={
          locale === "np"
            ? "हामी तपाईंलाई अर्को चरणसँग प्रतिक्रिया दिनेछौं।"
            : "We will respond with next steps."
        }
      >
        <form className="grid gap-4 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {locale === "np" ? "नाम" : "Name"}
            </label>
            <input
              type="text"
              placeholder={locale === "np" ? "तपाईंको नाम" : "Your name"}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {locale === "np" ? "फोन" : "Phone"}
            </label>
            <input
              type="tel"
              placeholder={locale === "np" ? "फोन नम्बर" : "Phone number"}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {locale === "np" ? "इमेल" : "Email"}
            </label>
            <input
              type="email"
              placeholder={locale === "np" ? "इमेल ठेगाना" : "Email address"}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              {locale === "np" ? "सन्देश" : "Message"}
            </label>
            <textarea
              rows={4}
              placeholder={locale === "np" ? "परियोजना विवरण" : "Project details"}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
            >
              {labels.cta}
            </button>
          </div>
        </form>
      </Section>
    </>
  );
}
