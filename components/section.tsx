import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const maxWidthClass = align === "center" ? "mx-auto" : "";

  return (
    <section className={`py-14 sm:py-16 md:py-20 lg:py-24 ${className ?? ""}`}>
      <div
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${alignClass}`}
      >
        {(eyebrow || title || description) && (
          <div className={`mb-10 md:mb-12 ${maxWidthClass} max-w-3xl`}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mb-6 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
