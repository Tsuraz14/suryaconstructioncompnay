import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "muted" | "brand";
};

export function Badge({ children, tone = "muted" }: BadgeProps) {
  const toneClass =
    tone === "brand"
      ? "bg-brand/10 text-brand"
      : "bg-muted text-foreground/70";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${toneClass}`}
    >
      {children}
    </span>
  );
}
