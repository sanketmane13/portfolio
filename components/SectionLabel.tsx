export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xl uppercase tracking-[0.18em] text-teal">
      {children}
    </p>
  );
}
