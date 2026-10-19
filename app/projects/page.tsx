import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Sanket Mane",
  description: "RAG systems, MCP agent pipelines, and full-stack SaaS projects by Sanket Mane.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl bg-black px-5 py-16 sm:px-8">
      <SectionLabel> PROJECTS</SectionLabel>

      <p className="mb-10 max-w-2xl text-muted">
        Three systems, all built to run not just demo. Each card traces
        the actual request path through the pipeline.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
