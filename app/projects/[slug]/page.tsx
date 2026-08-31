import PipelineDiagram from "@/components/PipelineDiagram";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Sanket Mane`,
    description: project.tagline,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-teal"
      >
        <ArrowLeft size={14} /> back to projects
      </Link>

      <div className="mb-2 flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
            project.status === "shipped"
              ? "border-teal/40 text-teal"
              : "border-amber/40 text-amber"
          }`}
        >
          {project.status === "shipped" ? "shipped" : "in progress"}
        </span>
      </div>
      <h1 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">
        {project.name}
      </h1>
      <p className="mb-10 max-w-2xl text-lg text-muted">{project.tagline}</p>

      <SectionLabel>Project Pipeline - {project.slug}</SectionLabel>
      <div className="mb-10 overflow-hidden rounded-lg border border-line bg-surface px-3 py-7">
        <PipelineDiagram nodes={project.pipeline} />
      </div>

      <SectionLabel>About project</SectionLabel>
      <ul className="mb-10 space-y-4">
        {project.points.map((point, i) => (
          <li key={i} className="flex gap-3 text-text/90">
            <span className="mt-1 shrink-0 font-mono text-xs text-teal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      <SectionLabel>Tech stack</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
