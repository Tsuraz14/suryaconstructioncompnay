import type { Lang } from "@/lib/i18n";

export const SITE_NAME = "Surya Construction Company Pvt. Ltd.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://suryaconstructioncompany.com";

export const DEFAULT_OG = {
  title: SITE_NAME,
  description:
    "Civil construction, contracting, and project management across Nepal with a focus on quality and safety.",
};

export const CONTACT = {
  phones: ["+977-9856021612", "061-461129"],
  email: "surya_cco@yahoo.com",
  addresses: [
    {
      label: "Registered office",
      streetAddress: "Pokhara-26, Kaski",
      addressLocality: "Pokhara",
      addressRegion: "Gandaki Province",
      addressCountry: "NP",
    },
    {
      label: "City office",
      streetAddress: "Mustang Chowk, Pokhara-7, Kaski",
      addressLocality: "Pokhara",
      addressRegion: "Gandaki Province",
      addressCountry: "NP",
    },
  ],
};

export function getAlternates(lang: Lang, path: string) {
  return {
    canonical: `${SITE_URL}/${lang}${path}`,
    languages: {
      en: `${SITE_URL}/en${path}`,
      ne: `${SITE_URL}/np${path}`,
    },
  };
}

export function buildBreadcrumbs(
  lang: Lang,
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/${lang}${item.path}`,
    })),
  };
}
