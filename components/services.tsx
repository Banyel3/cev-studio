import { Reveal } from "@/components/ui/reveal";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          What we do
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Four disciplines, one team.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.08}
              className="group bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-10"
            >
              <span className="aurora-text font-mono text-sm font-medium">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
