import type { Project } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { Badge } from "@/components/badges";

const statusCopy = {
  en: {
    completed: "Completed",
    ongoing: "Ongoing",
  },
  np: {
    completed: "सम्पन्न",
    ongoing: "जारी",
  },
} as const;

type ProjectCardProps = {
  project: Project;
  lang: Lang;
};

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const statusLabel = statusCopy[lang][project.status];
  const statusTone = project.status === "ongoing" ? "brand" : "muted";

  return (
    <article className="card-surface card-hover p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge tone={statusTone}>{statusLabel}</Badge>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
          {project.location[lang]}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-tight text-foreground">
        {project.title[lang]}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">
        {project.summary[lang]}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
