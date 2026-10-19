
"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-black/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2  text-sm text-text"
          onClick={() => setOpen(false)}
        >
          <span>
            sanket mane
          </span>
        </Link>

        
        <nav className="hidden items-center gap-1 text-sm sm:ml-auto sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-1.5 transition-colors ${active ? "bg-surface2 text-text" : "text-muted hover:text-text"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:ml-4">
          <button
            type="button"
            className="text-text sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            className="theme-toggle inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-amber transition-colors hover:bg-surface2 focus-visible:outline-amber"
          >
            <span className="sr-only">{theme === "dark" ? "Light" : "Dark"} mode</span>
            <span className="relative h-[18px] w-[18px]" aria-hidden="true">
              <Moon
                size={18}
                className={`absolute inset-0 transition-all duration-300 ease-out ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"
                }`}
              />
              <Sun
                size={18}
                className={`absolute inset-0 transition-all duration-300 ease-out ${
                  theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-50 flex flex-col border-b border-line border-t border-line bg-ink font-mono text-sm shadow-xl sm:hidden"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 px-5 py-3 transition-colors ${
                  active
                    ? "text-amber"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
