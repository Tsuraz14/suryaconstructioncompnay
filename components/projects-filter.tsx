"use client";

import * as React from "react";
import type { Project } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import ProjectCard from "@/components/cards/project-card";

type Filter = "all" | "completed" | "ongoing";

const filterCopy = {
  en: {
    all: "All",
    completed: "Completed",
    ongoing: "Ongoing",
  },
  np: {
    all: "सबै",
    completed: "सम्पन्न",
    ongoing: "जारी",
  },
} as const;

type ProjectsFilterProps = {
  projects: Project[];
  lang: Lang;
};

export default function ProjectsFilter({ projects, lang }: ProjectsFilterProps) {
  const [filter, setFilter] = React.useState<Filter>("all");

  const filtered = React.useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.status === filter);
  }, [filter, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(filterCopy.en) as Filter[]).map((key) => {
          const isActive = filter === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                isActive
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border text-foreground/70 hover:border-brand hover:text-foreground"
              }`}
            >
              {filterCopy[lang][key]}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} lang={lang} />
        ))}
      </div>
    </div>
  );
}
