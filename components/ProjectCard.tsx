import PipelineDiagram from "@/components/PipelineDiagram";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group min-w-0 overflow-hidden rounded-lg border border-line bg-surface p-4 transition-colors hover:border-amber/50 sm:p-6 md:p-7">
      {/* Header */}
      <div className="mb-4 flex min-w-0 items-start gap-3">
        {/* Project information */}
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="min-w-0 break-words font-display text-base font-semibold leading-tight text-text sm:text-lg md:text-xl">
              {project.name}
            </h3>

            <span
              className={`shrink-0 whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide sm:text-[10px] ${
                project.status === "shipped"
                  ? "border-teal/40 text-teal"
                  : "border-amber/40 text-amber"
              }`}
            >
              {project.status === "shipped" ? "shipped" : "in progress"}
            </span>
          </div>

          <p className="break-words text-xs leading-relaxed text-muted sm:text-sm">
            {project.tagline}
          </p>
        </div>

        {/* Project link */}
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name} details`}
          className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-line p-1.5 text-muted transition-colors group-hover:border-amber group-hover:text-amber sm:p-2"
        >
          <ArrowUpRight size={15} className="sm:h-4 sm:w-4" />
        </Link>
      </div>

      {/* Pipeline */}
      <div className="mb-5 w-full min-w-0 overflow-hidden rounded-md border border-line/70 bg-ink/60 px-2 py-3 sm:px-3">
        <div className="w-full min-w-0 overflow-x-auto">
          <PipelineDiagram nodes={project.pipeline} compact />
        </div>
      </div>

      {/* Points */}
      <ul className="mb-5 space-y-2 text-xs leading-relaxed text-text/90 sm:text-sm">
        {project.points.slice(0, 2).map((p, i) => (
          <li key={i} className="flex min-w-0 gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
            <span className="min-w-0 break-words">{p}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="max-w-full break-words rounded border border-line bg-ink px-2 py-1 font-mono text-[10px] text-muted sm:text-[11px]"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}