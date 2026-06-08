import { Glow } from "@/components/ui/glow";
import { Reveal } from "@/components/ui/reveal";

export function Approach() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-24 overflow-hidden border-t border-border"
    >
      <Glow className="-bottom-48 left-1/2 h-[32rem] w-[42rem] -translate-x-1/2 opacity-20" />

      <Reveal className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          How we work
        </p>
        <p className="mx-auto mt-6 text-3xl font-semibold leading-snug tracking-tight sm:text-4xl md:text-5xl">
          Small team. Senior hands.{" "}
          <span className="text-muted">No middlemen.</span>
        </p>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
          You talk to the people doing the work. We scope tightly, ship in weeks
          not quarters, and treat your launch like our own.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-fg underline-offset-8 transition-colors hover:text-aurora-2 hover:underline"
        >
          Start a project →
        </a>
      </Reveal>
    </section>
  );
}
