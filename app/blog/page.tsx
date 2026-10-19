import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog - Sanket Mane",
  description: "Notes on RAG, MCP, and building AI systems in production.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl bg-black px-5 py-16 sm:px-8">
      <SectionLabel>BLOGS</SectionLabel>
      <p className="mb-12 max-w-2xl text-muted">
        Short, practical notes from actually building chunking, tool
        calling, and the parts of shipping AI systems that don't make it
        into the tutorial.
      </p>

      <div className="space-y-1">
        {posts
          .slice()
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-line py-6 first:pt-0"
            >
              <div className="mb-2 flex items-center gap-3 font-mono text-xs text-muted">
                <time>{formatDate(post.date)}</time>
                <span className="text-line">·</span>
                <span>{post.readTime} read</span>
              </div>
              <h2 className="mb-2 flex items-center gap-2 font-display text-xl font-semibold text-text group-hover:text-amber sm:text-2xl">
                {post.title}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </h2>
              <p className="mb-3 text-sm text-muted">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
