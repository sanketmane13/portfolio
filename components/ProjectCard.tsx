import PipelineDiagram from "@/components/PipelineDiagram";
import type { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-xl border border-line bg-surface transition-colors">
      <div className="relative aspect-video overflow-hidden bg-[#0d1115]">
        <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center justify-between border-b border-white/10 bg-[#11171d] px-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#ef6a5b]" />
            <span className="h-2 w-2 rounded-full bg-[#e9bd4f]" />
            <span className="h-2 w-2 rounded-full bg-[#62c554]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            Workflow preview
          </span>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.name} details`}
            className="flex items-center justify-center text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex h-full items-center px-3 pt-8 sm:px-4">
          <div className="w-full min-w-0 overflow-x-auto">
            <PipelineDiagram nodes={project.pipeline} compact />
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="mb-2 break-words  text-xl font-semibold leading-tight text-text sm:text-2xl">
          {project.name}
        </h3>

        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted sm:text-base">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="max-w-full break-words rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-[11px] font-semibold text-muted sm:text-xs"
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
        >
          View project
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}