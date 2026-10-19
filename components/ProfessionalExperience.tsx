
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Globe,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiBootstrap,
  SiCelery,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  duration?: string;
  type?: string;
  logo: string;
  logoImage?: string;
  website?: string;
  technologies?: Tech[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

const workExperience: TimelineItem[] = [
    {
    id: "thinkitive",
    title: "Thinkitive Technologies Private Limited",
    subtitle: "Software Engineer Intern",
    period: "September 2026 – Present",

    type: "INTERNSHIP",
    logo: "A",
    logoImage: "thinkitive.png",
    website: "https://www.thinkitive.com/",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3B82F6" },
      { name: "JavaScript", icon: SiJavascript, color: "#E3A008" },
      { name: "React.js", icon: SiReact, color: "#087EA4" },
      { name: "Django REST", icon: SiDjango, color: "#065F46" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#1D4ED8" },
      { name: "GitHub", icon: SiGithub, color: "#292929" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#9639ff" },
      { name: "celery", icon: SiCelery, color: "#3fc02e" },
    ],
    bullets: [
      "Building REST APIs using Django REST Framework with PostgreSQL database, JWT authentication, OTP verification, role-based permissions and Django ORM.",
      "Implementing responsive UI using React.js with Vite, TypeScript, Material UI, Zod validation and TanStack Query.",
      "Working with Celery and multi-tenant architecture for scalable application development."
    ],
  },
  {
    id: "repliq",
    title: "RepliQ Instagram Automations",
    subtitle: "Full-Stack Developer",
    period: "September 2026 - February 2026",
    type: "Gen AI Developer",
    logo: "repliq",
    logoImage: "repliq.png",
    website: "https://repliq.in",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#262626" },
      { name: "MongoDB", icon: SiMongodb, color: "#16845B" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#087EA4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#238636" },
    ],
    bullets: [
      "Contributed to an Instagram automation SaaS platform.",
      "Implemented authentication and subscription-related functionality.",
      "Worked on usage limits, payment integration, and automation workflows.",
      "Built full-stack features using Next.js, MongoDB, and Tailwind CSS.",
    ],
  },
];

const education: TimelineItem[] = [
  {
    id: "btech",
    title: "D. Y. Patil Technical Campus, Talsande",
    subtitle: "B.Tech in Computer Science & Engineering",
    period: "2022 – 2026",
    duration: "8 CGPA ",
    logo: "DYP",
    logoImage:"dyp.jpg",
    website: "https://foet.dypgroup.edu.in/",
  },
  {
    id: "hsc",
    title: "Higher Secondary Education",
    subtitle: "HSC – Science",
    period: "2020 – 2022",
    duration: "73%",
    logo: "12th",
  },
  {
    id: "ssc",
    title: "Secondary School Education",
    subtitle: "SSC",
    period: "Completed in 2020",
    duration: "90.20%",
    logo: "10th",
  },
];

function TechBadge({ tech }: { tech: Tech }) {
  const Icon = tech.icon;

  return (
    <div className="group relative">
      <div
        aria-label={tech.name}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 transition duration-200 hover:-translate-y-1 hover:border-white/50"
        style={{ backgroundColor: tech.color }}
      >
        <Icon className="tech-stack-logo h-5 w-5 text-white" />
      </div>

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-xs text-text opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {tech.name}
      </span>
    </div>
  );
}

function TimelineCard({
  item,
  last,
}: {
  item: TimelineItem;
  last: boolean;
}) {
  return (
    <article className="relative flex gap-4 sm:gap-6">
      {/* Timeline */}
      <div className="relative flex w-12 shrink-0 justify-center sm:w-14">
        {!last && (
          <div className="absolute bottom-0 top-12 w-px bg-line" />
        )}

        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface shadow-[0_0_0_5px_rgba(255,255,255,0.03)] sm:h-14 sm:w-14">
          
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-line bg-surface2 font-mono text-sm font-bold text-text">
                {item.logoImage ? (
                    <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.title} website`}
                    title={`Visit ${item.title} website`}
                    className="flex h-full w-full items-center justify-center"
                    >
                    <img
                        src={item.logoImage}
                        alt={`${item.title} logo`}
                        className="h-full w-full rounded-full object-contain "
                    />
                    </a>
                ) : (
                    item.logo
                )}
            </div>

        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pb-12 pt-0.5 sm:pb-14">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-text sm:text-2xl">
          {item.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-sm text-text/90 sm:text-base">
            {item.subtitle}
          </span>

          {item.type && (
            <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] font-bold text-text">
              {item.type}
            </span>
          )}

          <span className="font-mono text-xs text-muted sm:text-sm">
            {item.period}
            {item.duration ? ` · ${item.duration}` : ""}
          </span>
        </div>

        {item.technologies && item.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.technologies.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>
        )}

        {item.bullets && (
          <ul className="mt-5 space-y-2.5 text-sm leading-6 text-text/90 sm:text-base sm:leading-7">
            {item.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-0.5 text-muted">•</span>
                <span className="min-w-0">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {item.links && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs font-semibold text-text transition hover:border-amber hover:bg-surface2"
              >
                <Globe size={13} />
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProfessionalExperience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const items =
    activeTab === "work" ? workExperience : education;

  return (
    <section
      id="experience"
      className="w-full bg-black py-12 text-text sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-6 font-mono text-xl tracking-[0.12em] text-muted sm:text-2xl">
          PROFESSIONAL EXPERIENCE
        </h2>

        {/* Work / Education switch */}
        <div
          role="tablist"
          aria-label="Experience category"
          className="mb-12 flex rounded-2xl border border-line bg-surface p-1"
        >
          <button
            id="work-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "work"}
            aria-controls="experience-panel"
            onClick={() => setActiveTab("work")}
            className={`flex-1 rounded-xl px-2 py-1 font-mono text-sm font-semibold transition sm:text-base ${
              activeTab === "work"
                ? "border border-line bg-surface2 text-text"
                : "text-muted hover:text-text"
            }`}
          >
            Work
          </button>

          <button
            id="education-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === "education"}
            aria-controls="experience-panel"
            onClick={() => setActiveTab("education")}
            className={`flex-1 rounded-xl px-4 py-3 font-mono text-sm font-semibold transition sm:text-base ${
              activeTab === "education"
                ? "border border-line bg-surface2 text-text"
                : "text-muted hover:text-text"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline */}
        <div
          id="experience-panel"
          role="tabpanel"
          aria-labelledby={
            activeTab === "work" ? "work-tab" : "education-tab"
          }
          className="pl-0"
        >
          {items.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              last={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
