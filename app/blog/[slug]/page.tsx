import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sanket Mane`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-teal"
      >
        <ArrowLeft size={14} /> back to writing
      </Link>

      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-muted">
        <time>{formatDate(post.date)}</time>
        <span className="text-line">·</span>
        <span>{post.readTime} read</span>
      </div>
      <h1 className="mb-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {post.title}
      </h1>
      <div className="mb-10 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-teal"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-5 text-base leading-relaxed text-text/90">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <Link
          href="/blog"
          className="font-mono text-sm text-teal hover:text-amber"
        >
          ← all posts
        </Link>
      </div>
    </article>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
