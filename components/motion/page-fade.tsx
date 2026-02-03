"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

type PageFadeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageFade({ children, className }: PageFadeProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
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
      setMounted(true);
      return;
    }

    setMounted(false);
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, [pathname, reduceMotion]);

  return (
    <div
      className={`${
        reduceMotion
          ? ""
          : "transition duration-[450ms] ease-out will-change-transform"
      } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"} ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
