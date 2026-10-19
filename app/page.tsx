import ProfessionalExperience from "@/components/ProfessionalExperience";
import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import TechStack from "@/components/Techstack";
import { contact, projects } from "@/lib/data";
import { ArrowUpRight, Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const featured = projects.filter((p) =>
    ["waypoint", "rag-ai-agent", "ml-orchestrator"].includes(p.slug)
  );

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="border-b border-line bg-dot-grid">
        <div className="mx-auto max-w-6xl px-5  sm:px-8 sm:py-5">
          <section className=" bg-black px-5 py-5 text-white sm:px-8 sm:py-16 lg:px-5 lg:py-5">
            <div className="mx-auto w-full max-w-6xl">

              {/* Profile image */}
              <div className="mb-8">
                <img
                  src="/profile.jpeg"
                  alt="Sanket Mane"
                  className="h-32 w-32 rounded-full border border-white/20 object-cover sm:h-36 sm:w-36"
                />
              </div>

              {/* Name */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Sanket Mane
              </h1>

              {/* Designation */}
              <h2 className="mt-2 text-l text-neutral-400 sm:text-xl">
                Software Engineer | Gen AI Engineer
              </h2>

              {/* Introduction */}
              <p className="mt-7 max-w-5xl text-lg leading-relaxed text-neutral-300 sm:text-2xl sm:leading-relaxed">
                I build full-stack systems, ship products, engineer backends,
                and experiment with AI. Reach me at{" "}
                <a
                  href="mailto:sanketmane0407@gmail.com"
                  className="font-semibold text-white underline decoration-neutral-400 underline-offset-4 break-all hover:decoration-white"
                >
                  sanketmane0407@gmail.com
                </a>
              </p>

              {/* Social links and resume */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">

                <a
                  href="https://www.linkedin.com/in/sanket-mane-94b9113aa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-400 transition hover:text-white"
                >
                  <Linkedin size={23} />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-400 pt-1 transition hover:text-white"
                >
                  <Github size={25} />
                </a>

                <a
                  href="https://leetcode.com/u/dXFDofZXm5/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode"
                  className="text-neutral-400 transition hover:text-white"
                >
                  <Code size={24} />
                </a>

                <a
                  href="/sanket mane resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:px-6 sm:text-base"
                >
                  Resume
                  <ArrowUpRight size={19} />
                </a>

              </div>

            </div>
            
          </section>
          
        </div>
      </section>

      <TechStack/>
      <ProfessionalExperience />
     

      {/* Featured projects */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="mb-6 font-mono text-xl tracking-[0.12em] text-muted sm:text-2xl">
                FEATURED PROJECTS
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden shrink-0 font-mono text-sm   sm:inline-flex sm:items-center sm:gap-1"
            >
              ALL PROJECTS <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-1 font-mono text-sm text-teal hover:text-amber sm:hidden"
          >
            all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
