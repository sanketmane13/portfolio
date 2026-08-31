import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono">
          © {new Date().getFullYear()} Sanket Mane —{" "}
          
        </p>
        <div className="flex gap-5 font-mono">
          <a href={`mailto:${contact.email}`} className="hover:text-amber">
            {contact.email}
          </a>
          <span className="text-line">|</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
