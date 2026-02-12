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
        eyebrow={locale === "np" ? "छिटो सम्पर्क" : "Quick Contact"}
        title={locale === "np" ? "छिटो सम्पर्क" : "Quick Contact"}
        description={
          locale === "np"
            ? "WhatsApp वा इमेलमार्फत छिटो सम्पर्क गर्नुहोस्। हामी छिट्टै प्रतिक्रिया दिन्छौं।"
            : "Reach us instantly on WhatsApp or email. We respond promptly."
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-surface group flex h-full flex-col justify-between rounded-xl border border-border/70 bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M16.001 4.8c-6.2 0-11.2 4.6-11.2 10.3 0 1.8.6 3.6 1.7 5.2L4.8 27.2l7.2-1.7c1.2.6 2.6.9 4 .9 6.2 0 11.2-4.6 11.2-10.3S22.2 4.8 16.001 4.8zm6.4 14.4c-.3.9-1.6 1.7-2.3 1.8-.6.1-1.3.2-2.1 0-.5-.1-1.1-.3-1.8-.6-3.3-1.4-5.5-4.8-5.7-5.1-.2-.2-1.3-1.6-1.3-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.7-.4.9-.4h.7c.2 0 .6-.1.9.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.7 2.1 2.8 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.8 0 .2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2.3.1 2.1 1 2.4 1.2.3.2.6.3.7.4.1.1.1.6-.2 1.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {locale === "np" ? "WhatsApp मा कुरा गर्नुहोस्" : "Chat on WhatsApp"}
                </h3>
                <p className="mt-2 text-sm text-foreground/80">
                  {locale === "np" ? "+९७७ ९८५६०१४०२२" : "+977 9856014022"}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={`https://wa.me/9779856014022?text=${encodeURIComponent(
                    locale === "np"
                      ? "नमस्ते, म निर्माण परियोजनाबारे जानकारी लिन चाहन्छु।"
                      : "Hello, I would like to inquire about a construction project.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    locale === "np" ? "WhatsApp खोल्नुहोस्" : "Open WhatsApp"
                  }
                  className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {locale === "np" ? "WhatsApp खोल्नुहोस्" : "Open WhatsApp"}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-surface group flex h-full flex-col justify-between rounded-xl border border-border/70 bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8.24l7.4 4.44a1 1 0 0 0 1.2 0L20 8.24V18H4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {locale === "np" ? "इमेल पठाउनुहोस्" : "Send an Email"}
                </h3>
                <p className="mt-2 text-sm text-foreground/80">
                  surya_cco@yahoo.com
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={`mailto:surya_cco@yahoo.com?subject=${encodeURIComponent(
                    locale === "np"
                      ? "परियोजना सम्बन्धी जानकारी"
                      : "Project Inquiry",
                  )}&body=${encodeURIComponent(
                    locale === "np"
                      ? "नमस्ते, म निर्माण परियोजनाबारे छलफल गर्न चाहन्छु।"
                      : "Hello, I would like to discuss a construction project.",
                  )}`}
                  aria-label={locale === "np" ? "इमेल गर्नुहोस्" : "Email Us"}
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {locale === "np" ? "इमेल गर्नुहोस्" : "Email Us"}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 space-y-3">
              <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {locale === "np" ? "हाम्रो कार्यालयको स्थान" : "Our Office Location"}
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {locale === "np"
                  ? "पोखरा, गण्डकी प्रदेशमा रहेको हाम्रो कार्यालयमा भ्रमण गर्नुहोस्।"
                  : "Visit our office in Pokhara, Gandaki Province."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-neutral-900">
              <div className="aspect-video">
                <iframe
                  title="Surya Construction Company Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.740845818175!2d83.97166947570501!3d28.198594475904503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959509d70669d1%3A0x5146cc057a46bf2b!2sSurya%20Construction%20Company%20Pvt.%20Ltd!5e1!3m2!1sen!2snp!4v1770862935094!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
