"use client";

import { useEffect, useState } from "react";

const LINES: { cmd: string; out: string[] }[] = [
  {
    cmd: "whoami",
    out: ["Sanket Mane — Full-Stack Developer, Generative AI Engineer"],
  },
  {
    cmd: "cat focus.txt",
    out: [
      "Building RAG pipelines, MCP tool servers, and agent",
      "orchestration with Next.js, FastAPI, and LangGraph.",
    ],
  },
  {
    cmd: "status --current",
    out: ["Open to Full-Stack Developer & GenAI Engineer roles."],
  },
];

export default function TerminalIntro() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showOut, setShowOut] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }
    const cmd = LINES[lineIdx].cmd;
    if (charIdx < cmd.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 32);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setShowOut((s) => [...s, lineIdx]);
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  return (
    <div className="rounded-lg border border-line bg-surface font-mono text-[13px] leading-relaxed shadow-2xl shadow-black/40 sm:text-sm">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E86A5C]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E8A33D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3FA9A0]" />
        <span className="ml-2 text-xs text-muted">sanket@portfolio — zsh</span>
      </div>
      <div className="min-h-[210px] px-4 py-4 sm:min-h-[190px]">
        {LINES.slice(0, lineIdx).map((l, i) => (
          <div key={i} className="mb-3">
            <p>
              <span className="text-teal">➜</span>{" "}
              <span className="text-amber">~</span> {l.cmd}
            </p>
            {l.out.map((o, j) => (
              <p key={j} className="text-muted">
                {o}
              </p>
            ))}
          </div>
        ))}

        {lineIdx < LINES.length && (
          <p>
            <span className="text-teal">➜</span> <span className="text-amber">~</span>{" "}
            {LINES[lineIdx].cmd.slice(0, charIdx)}
            <span className="animate-pulse text-text">▍</span>
          </p>
        )}

        {done && (
          <p>
            <span className="text-teal">➜</span> <span className="text-amber">~</span>{" "}
            <span className="animate-pulse text-text">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}
