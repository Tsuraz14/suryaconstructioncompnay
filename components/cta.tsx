import Link from "next/link";

type CTAProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 md:text-base">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-hover"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground/80 transition hover:border-brand hover:text-brand"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
