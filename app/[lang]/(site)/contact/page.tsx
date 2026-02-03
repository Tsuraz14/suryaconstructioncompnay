import Link from "next/link";
import { t, type Lang } from "@/lib/i18n";
import { buildBreadcrumbs, getAlternates } from "@/lib/site";
import Section from "@/components/section";
import Reveal from "@/components/motion/reveal";
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
      ? "सूर्य कन्स्ट्रक्सन कम्पनीसँग सम्पर्क गर्नुहोस्"
      : "Contact Surya Construction Company";
  const intro =
    locale === "np"
      ? "परियोजना दायरा र समयरेखा साझा गर्नुहोस्। हामी छिटो प्रतिक्रिया दिन्छौं र बाध्यकारी नभएको छलफल गर्छौं।"
      : "Share your project scope and timeline. We respond promptly with a no-obligation discussion.";

  const trustMessage =
    locale === "np"
      ? "हामी छिटो प्रतिक्रिया दिन्छौं। कुनै बाध्यकारी छैन—परियोजनाबारे सहज छलफल।"
      : "We respond promptly. No-obligation discussion with our team.";

  const formNote =
    locale === "np"
      ? "हामी विवरण समीक्षा गरी अर्को चरणबारे सम्पर्क गर्नेछौं।"
      : "We will review the details and contact you with next steps.";

  const mapText =
    locale === "np"
      ? "यहाँ नक्सा स्थान उपलब्ध हुनेछ।"
      : "Map location will be available here.";

  const ctaTitle =
    locale === "np"
      ? "तपाईंको आगामी निर्माण परियोजनाबारे छलफल गरौं।"
      : "Let’s discuss your next construction project.";
  const ctaSubtext =
    locale === "np"
      ? "आजै सम्पर्क गर्नुहोस्—कुनै बाध्यकारी बिना छलफल।"
      : "Reach out today for a no-obligation discussion.";

  const breadcrumbs = buildBreadcrumbs(locale, [
    { name: locale === "np" ? "गृहपृष्ठ" : "Home", path: "" },
    { name: labels.nav.contact, path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Section align="center">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              {labels.nav.contact}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {heading}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              {intro}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="card-surface p-6 shadow-sm">
              <span className="mb-4 block h-1 w-10 rounded-full bg-brand" />
              <h3 className="text-base font-semibold text-foreground">
                {locale === "np" ? "दर्ता कार्यालय" : "Registered Office"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {locale === "np"
                  ? "पोखरा-२६, कास्की, गण्डकी प्रदेश, नेपाल"
                  : "Pokhara-26, Kaski, Gandaki Province, Nepal"}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-surface p-6 shadow-sm">
              <span className="mb-4 block h-1 w-10 rounded-full bg-brand" />
              <h3 className="text-base font-semibold text-foreground">
                {locale === "np" ? "शहर कार्यालय" : "City Office"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {locale === "np"
                  ? "मुस्ताङ चोक, पोखरा-७, कास्की"
                  : "Mustang Chowk, Pokhara-7, Kaski"}
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card-surface p-6 shadow-sm">
              <span className="mb-4 block h-1 w-10 rounded-full bg-brand" />
              <h3 className="text-base font-semibold text-foreground">
                {locale === "np" ? "सम्पर्क विवरण" : "Contact Details"}
              </h3>
              <div className="mt-3 space-y-3 text-sm text-foreground/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                    {locale === "np" ? "फोन" : "Phone"}
                  </p>
                  <div className="mt-2 space-y-1">
                    <Link
                      href="tel:+9779856021612"
                      className="block text-foreground transition hover:text-brand"
                    >
                      +977-9856021612
                    </Link>
                    <Link
                      href="tel:+97761461129"
                      className="block text-foreground transition hover:text-brand"
                    >
                      061-461129
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                    {locale === "np" ? "इमेल" : "Email"}
                  </p>
                  <Link
                    href="mailto:surya_cco@yahoo.com"
                    className="mt-2 block text-foreground transition hover:text-brand"
                  >
                    surya_cco@yahoo.com
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
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
            ? "हामी छिटो प्रतिक्रिया दिई अर्को चरण स्पष्ट गर्नेछौं।"
            : "We respond promptly and outline the next steps."
        }
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="card-surface p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                {locale === "np" ? "हामी यहाँ छौं" : "We’re here to help"}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">
                {trustMessage}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form className="card-surface grid gap-4 p-6 md:grid-cols-2 md:p-8">
              <div className="space-y-2">
                <label
                  htmlFor="full-name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  {locale === "np" ? "पुरा नाम" : "Full Name"}{" "}
                  <span className="text-brand">*</span>
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  required
                  placeholder={locale === "np" ? "तपाईंको नाम" : "Your name"}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground transition focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone-number"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  {locale === "np" ? "फोन नम्बर" : "Phone Number"}{" "}
                  <span className="text-brand">*</span>
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  required
                  placeholder={locale === "np" ? "फोन नम्बर" : "Phone number"}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground transition focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="email-address"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  {locale === "np" ? "इमेल ठेगाना" : "Email Address"}{" "}
                  <span className="text-brand">*</span>
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  required
                  placeholder={locale === "np" ? "इमेल ठेगाना" : "Email address"}
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground transition focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="project-location"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  {locale === "np"
                    ? "परियोजना स्थान (ऐच्छिक)"
                    : "Project Location (optional)"}
                </label>
                <input
                  id="project-location"
                  name="project-location"
                  type="text"
                  placeholder={
                    locale === "np" ? "परियोजना स्थान" : "Project location"
                  }
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground transition focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  {locale === "np" ? "सन्देश" : "Message"}{" "}
                  <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={
                    locale === "np" ? "परियोजना विवरण" : "Project details"
                  }
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground transition focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                />
              </div>
              <div className="md:col-span-2">
                <button type="button" className="btn-primary">
                  {locale === "np" ? "परामर्श अनुरोध" : "Request a Consultation"}
                </button>
                <p className="mt-3 text-sm text-foreground/60">{formNote}</p>
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow={locale === "np" ? "स्थान" : "Location"}
        title={locale === "np" ? "नक्सा" : "Map"}
      >
        <Reveal>
          <div className="rounded-xl border border-border/70 bg-muted/40 p-8 text-sm leading-relaxed text-foreground/80">
            {mapText}
          </div>
        </Reveal>
      </Section>

      <Section className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {ctaTitle}
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {ctaSubtext}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary px-7 py-3"
            >
              {locale === "np" ? "हाम्रो टोलीसँग सम्पर्क" : "Contact Our Team"}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
