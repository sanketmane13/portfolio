import type { Metadata } from "next";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact - Sanket Mane",
  description: "Get in touch with Sanket Mane about full-stack or generative AI engineering roles and projects.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl bg-black px-5 py-16 sm:px-8">
    
      <h1 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">
        Let's talk
      </h1>
      <p className="mb-12 max-w-xl text-muted">
        Open to Full-Stack Developer and Generative AI Engineer roles, and
        to interesting problems in between. The fastest way to reach me
        is email.
      </p>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-amber/50"
          >
            <Mail size={18} className="shrink-0 text-amber" />
            <div>
              <p className="text-xs text-muted">email</p>
              <p className="font-mono text-sm">{contact.email}</p>
            </div>
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-amber/50"
          >
            <Phone size={18} className="shrink-0 text-teal" />
            <div>
              <p className="text-xs text-muted">phone</p>
              <p className="font-mono text-sm">{contact.phone}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4">
            <MapPin size={18} className="shrink-0 text-muted" />
            <div>
              <p className="text-xs text-muted">based in</p>
              <p className="font-mono text-sm">{contact.location}</p>
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <a
              href={contact.socials[0].href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={contact.socials[1].href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
            >
              <Linkedin size={14} /> LinkedIn
            </a>

            <a
              href={contact.socials[1].href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal"
            >
              <Code size={14} /> Leetcode
            </a>
          </div>
        </div>

        <ContactForm email={contact.email} />
      </div>
    </div>
  );
}
