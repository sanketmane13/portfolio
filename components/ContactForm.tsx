"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${from ? ` (${from})` : ""}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
        action="https://formspree.io/f/mzebeboz"
        method="POST"
      >
      <div className="mb-4">
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted">
          name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-text placeholder:text-muted/60"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="from" className="mb-1.5 block font-mono text-xs text-muted">
          your email
        </label>
        <input
          id="from"
          type="email"
          name="email"
          required
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-text placeholder:text-muted/60"
          placeholder="you@example.com"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-text placeholder:text-muted/60"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send message <Send size={14} />
      </button>
      
    </form>
  );
}
