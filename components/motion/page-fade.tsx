"use client";

import * as React from "react";

type PageFadeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageFade({ children, className }: PageFadeProps) {
  const [mounted, setMounted] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(media.matches);
    }
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`transition duration-300 ease-out will-change-transform ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
