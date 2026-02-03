import type { Service } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

const iconMap = {
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M7 21V7l5-3 5 3v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  road: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l4-18h10l4 18" />
      <path d="M12 5v4" />
      <path d="M12 13v4" />
    </svg>
  ),
  bridge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18h18" />
      <path d="M5 18v-3a7 7 0 0 1 14 0v3" />
      <path d="M8 15v-2" />
      <path d="M16 15v-2" />
    </svg>
  ),
  tunnel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V12a8 8 0 0 1 16 0v8" />
      <path d="M9 20v-4a3 3 0 0 1 6 0v4" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 6l4 4" />
      <path d="M7 18l7-7" />
      <path d="M5 19l-1-4 4 1 10-10-3-3L5 13" />
    </svg>
  ),
} as const;

type ServiceCardProps = {
  service: Service;
  lang: Lang;
};

export default function ServiceCard({ service, lang }: ServiceCardProps) {
  return (
    <article className="card-surface card-hover group p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <h3 className="text-base font-semibold leading-tight text-foreground">
            {service.title[lang]}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
            {service.description[lang]}
          </p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-muted/60 text-brand transition duration-300 group-hover:scale-105">
          <span className="h-5 w-5">{iconMap[service.icon]}</span>
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-foreground/80">
        {service.bullets[lang].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
