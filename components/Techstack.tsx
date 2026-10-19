
"use client";

import { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiKubernetes,

  SiGithub,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiMysql,

  SiLangchain,
  SiShopify,
  SiSupabase,
  SiLanggraph,
  SiFlask,
  SiCelery,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: Technology[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F59E0B" },
  { name: "TypeScript", icon: SiTypescript, color: "#2563EB" },
  { name: "Python", icon: SiPython, color: "#3B82F6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#16A34A" },
  { name: "Next.js", icon: SiNextdotjs, color: "#18181B" },
  { name: "Express.js", icon: SiExpress, color: "#27272A" },
  { name: "MongoDB", icon: SiMongodb, color: "#164E4A" },
  { name: "Django", icon: SiDjango, color: "#065F46" },
  { name: "FastAPI", icon: SiFastapi, color: "#047857" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#1D4ED8" },
  { name: "GitHub", icon: SiGithub, color: "#18181B" },
  { name: "React.js", icon: SiReact, color: "#0284C7" },
  { name: "Vite", icon: SiVite, color: "#7C3AED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0E7490" },
  { name: "MySQL", icon: SiMysql, color: "#075985" },
  { name: "celery", icon: SiCelery, color: "#4dd82a" },
  { name: "LangChain", icon: SiLangchain, color: "#33a13e" },
  { name: "Flask", icon: SiFlask, color: "#292524" },
];

export default function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full bg-black py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-6 font-mono text-xl tracking-wider text-neutral-500 sm:text-2xl">
          TECH STACK
        </h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            const isActive = active === tech.name;
            const tooltipId = `tech-tooltip-${tech.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`;

            return (
              <button
                key={tech.name}
                type="button"
                aria-label={tech.name}
                aria-describedby={isActive ? tooltipId : undefined}
                onClick={() =>
                  setActive(isActive ? null : tech.name)
                }
                onMouseEnter={() => setActive(tech.name)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(tech.name)}
                onBlur={() => setActive(null)}
                className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                style={{ backgroundColor: tech.color }}
              >
                <Icon className="tech-stack-logo h-7 w-7 text-white" />

                <span
                  id={tooltipId}
                  role="tooltip"
                  className={`pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs text-text shadow-xl transition-opacity duration-150 ${
                    isActive
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  {tech.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
