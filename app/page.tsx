import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import { contact, projects } from "@/lib/data";
import { ArrowUpRight, Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const featured = projects.filter((p) =>
    ["waypoint", "rag-ai-agent", "ml-orchestrator"].includes(p.slug)
  );

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-dot-grid">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">

            {/* LEFT — CONTENT */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-amber">
                Pune, India · Open to work
              </p>

              <h1 className="text-glow font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.2rem]">
                I build systems that let language models{" "}
                <span className="text-amber">
                  actually do things
                </span>{" "}
                - not just answer questions.
              </h1>

              <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
                Full-stack developer and generative AI engineer. I ship
                RAG pipelines, MCP tool servers, and agent orchestration
                on top of Next.js, FastAPI, and LangChain from empty
                repo to production.
              </p>

              <div className="flex gap-3 pt-8">
                <a
                  href={contact.socials[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  <Github size={14} />
                  GitHub
                </a>

                <a
                  href={contact.socials[1].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>

                <a
                  href={contact.socials[3].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
                >
                  <Code size={14} />
                  Leetcode
                </a>
              </div>
            </div>

            {/* RIGHT — PROFILE IMAGE */}
            <div className="relative flex min-w-0 w-full min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[480px] lg:min-h-[460px]">

              {/* Main amber ambient light */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/20 blur-[100px] sm:h-80 sm:w-80" />

              {/* Secondary teal light */}
              <div className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-teal/20 blur-[90px] sm:h-56 sm:w-56" />

              {/* Image + decorations */}
              <div className="relative flex w-full min-w-0 max-w-[330px] items-center justify-center sm:max-w-[390px] lg:max-w-[430px]">

                {/* Image glow */}
                <div className="pointer-events-none absolute inset-4 rounded-full bg-amber/10 blur-2xl" />

                {/* Profile Image */}
                <div className="relative z-10 w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[390px]">
                  <img
                    src="/profile.png"
                    alt="Sanket Mane"
                    className="block h-auto w-full max-w-full object-contain grayscale"
                  />

                  {/* Fade at bottom */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />

                  {/* Amber light hitting image */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber/30 blur-[70px]" />

                  {/* Teal light */}
                  <div className="pointer-events-none absolute right-0 top-1/3 h-32 w-24 rounded-full bg-teal/20 blur-[70px]" />
                </div>

                {/* Decorative left line */}
                <div className="pointer-events-none absolute left-1 top-12 h-20 w-px bg-gradient-to-b from-transparent via-amber to-transparent sm:left-0" />

                {/* Decorative right line */}
                <div className="pointer-events-none absolute right-1 bottom-16 h-24 w-px bg-gradient-to-b from-transparent via-teal to-transparent sm:right-0" />

                {/* Developer label */}
                <div className="absolute bottom-6 left-2 z-20 rounded-md border border-line bg-ink/80 px-2.5 py-1.5 font-mono text-[9px] text-muted backdrop-blur sm:bottom-8 sm:left-0 sm:px-3 sm:py-2 sm:text-[10px]">
                  &lt;developer /&gt;
                </div>

                {/* Software engineer label */}
                <div className="absolute right-2 top-6 z-20 max-w-[150px] truncate rounded-md border border-line bg-ink/80 px-2.5 py-1.5 font-mono text-[9px] text-amber backdrop-blur sm:right-0 sm:top-8 sm:max-w-none sm:px-3 sm:py-2 sm:text-[10px]">
                  SOFTWARE_ENGINEER
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionLabel>./ABOUT_ME</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-text/90">
              <p>
                I'm a Computer Science graduate (B.Tech, 2022–2026,
                CGPA 7.5) who spent the last year building production
                software instead of waiting to graduate to start.
              </p>
              <p>
                As a Full-Stack GenAI Developer at RepliQ
                Automations, I took a SaaS platform from concept to
                production on Next.js and MongoDB including Instagram
                Graph API automation that cut response time from 10
                minutes to under 30 seconds across 200+ daily
                conversations, and Razorpay-based recurring billing.
              </p>
              <p>
                Outside of that, I build things I actually use: a RAG
                agent for reading my own PDFs, an order-tracking assistant
                with real MCP tool calls, and currently working on a LangGraph-based job-search
                orchestrator that will automate part of my own search.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="mb-1 font-mono text-xs text-teal">Experience</p>
                <p className="font-display text-lg font-semibold">
                  Full-Stack GenAI Developer
                </p>
                <p className="text-sm text-muted">
                  <a href="https://repliq.in/" target="_blank" rel="noreferrer noopener" className="text-teal hover:text-amber">
                    RepliQ Automations
                  </a>{" "}
                  · Sep 2025 – Feb 2026
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="mb-1 font-mono text-xs text-teal">Education</p>
                <p className="font-display text-lg font-semibold">
                  B.Tech, Computer Science
                </p>
                <p className="text-sm text-muted">
                  D. Y. Patil Technical Campus, Kolhapur · 2022–2026 ·
                  CGPA 7.5
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="mb-1 font-mono text-xs text-teal">Certifications</p>
                <p className="text-sm text-text/90">
                  <span className="font-bold">Generative AI</span> - PW Skills × Microsoft
                </p>
                <p className="text-sm text-text/90">
                  <span className="font-bold">Agentic AI</span> - Hitesh Choudhary &amp; Piyush Garg (Udemy)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <SectionLabel>./Projects</SectionLabel>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                A few systems worth a closer look
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden shrink-0 font-mono text-sm text-teal hover:text-amber sm:inline-flex sm:items-center sm:gap-1"
            >
              all projects <ArrowUpRight size={14} />
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
