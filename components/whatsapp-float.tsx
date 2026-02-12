"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "9779856014022";

const COPY = {
  en: {
    message: "Hello, I would like to inquire about a construction project.",
    tooltip: "Chat with us on WhatsApp",
    aria: "Chat on WhatsApp",
  },
  np: {
    message: "नमस्ते, म निर्माण परियोजनाबारे जानकारी लिन चाहन्छु।",
    tooltip: "हामीसँग WhatsApp मा कुरा गर्नुहोस्",
    aria: "WhatsApp मा कुरा गर्नुहोस्",
  },
} as const;

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
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
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setVisible(true), 800);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  const lang = pathname?.split("/")[1] === "np" ? "np" : "en";
  const copy = COPY[lang];
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    copy.message,
  )}`;

  return (
    <div className="pointer-events-none fixed z-40 bottom-[calc(theme(spacing.4)+env(safe-area-inset-bottom))] right-[calc(theme(spacing.4)+env(safe-area-inset-right))] md:bottom-[calc(theme(spacing.6)+env(safe-area-inset-bottom))] md:right-[calc(theme(spacing.6)+env(safe-area-inset-right))]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={copy.aria}
        className={`pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-1 ring-black/5 transition motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-16 md:w-16 ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3"
          } ${reduceMotion ? "" : "motion-safe:duration-300 motion-safe:ease-out"} ${
            visible && !reduceMotion
              ? "motion-safe:animate-[pulse_1.2s_ease-in-out_1]"
              : ""
          } hover:scale-[1.05] hover:shadow-xl hover:shadow-black/30 active:scale-[0.98]`}
      >
        <span className="sr-only">{copy.aria}</span>
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 md:h-8 md:w-8"
          fill="currentColor"
        >
          <path d="M16.001 4.8c-6.2 0-11.2 4.6-11.2 10.3 0 1.8.6 3.6 1.7 5.2L4.8 27.2l7.2-1.7c1.2.6 2.6.9 4 .9 6.2 0 11.2-4.6 11.2-10.3S22.2 4.8 16.001 4.8zm6.4 14.4c-.3.9-1.6 1.7-2.3 1.8-.6.1-1.3.2-2.1 0-.5-.1-1.1-.3-1.8-.6-3.3-1.4-5.5-4.8-5.7-5.1-.2-.2-1.3-1.6-1.3-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.7-.4.9-.4h.7c.2 0 .6-.1.9.6.3.7 1 2.5 1.1 2.7.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.7 2.1 2.8 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.8 0 .2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2.3.1 2.1 1 2.4 1.2.3.2.6.3.7.4.1.1.1.6-.2 1.5z" />
        </svg>

        <span className="pointer-events-none absolute right-full top-1/2 hidden -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground/80 shadow-md shadow-black/10 opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 md:block">
          {copy.tooltip}
        </span>
      </a>
    </div>
  );
}
