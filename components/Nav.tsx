"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/blog", label: "blog" },
  { href: "/contact", label: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm text-text"
          onClick={() => setOpen(false)}
        >
          <Terminal size={16} className="text-amber" />
          <span>
            sanket<span className="text-amber"></span>mane
          </span>
        </Link>

        <nav className="hidden items-center gap-1 font-mono text-sm sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-surface2 text-amber"
                    : "text-muted hover:text-text"
                }`}
              >
                ./{link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="sm:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-ink font-mono text-sm sm:hidden">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 px-5 py-3 ${
                  active ? "text-amber" : "text-muted"
                }`}
              >
                ./{link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
