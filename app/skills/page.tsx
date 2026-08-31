import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { skillGroups, nowLearning } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills — Sanket Mane",
  description: "Technical skill set across full-stack development and generative AI engineering.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionLabel>skills/</SectionLabel>
      <p className="mb-12 max-w-2xl text-muted">
        Organized the way I'd organize a codebase by role, not by
        buzzword density.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <p className="mb-1 font-mono text-xs text-teal">{group.eyebrow} </p>
            
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-line bg-ink px-2.5 py-1 font-mono text-xs text-text/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
}
