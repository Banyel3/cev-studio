import { Wordmark } from "@/components/ui/wordmark";
import { CONTACT_EMAIL } from "@/lib/content";

const socials = [
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Wordmark />
          <p className="text-sm text-muted">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-fg"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-xs tracking-tight text-faint">
            © 2026 cev.studio · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
