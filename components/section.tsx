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

  return (
    <section className={`py-12 md:py-16 ${className ?? ""}`}>
      <div className={`container space-y-6 ${alignClass}`}>
        {(eyebrow || title || description) && (
          <div className="space-y-3">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm text-foreground/70 md:text-base">
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
