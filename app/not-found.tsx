import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-5 py-16 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber">
        error
      </p>
      <h1 className="mb-3 font-display text-3xl font-semibold">
        404: route not found
      </h1>
      <p className="mb-8 text-muted">
        No handler matches this path. It may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink"
      >
        Back
      </Link>
    </div>
  );
}
