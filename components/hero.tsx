import { Glow } from "@/components/ui/glow";
import { GradientText } from "@/components/ui/gradient-text";
import { ContactForm } from "@/components/contact-form";
import { SERVICES } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <Glow drift className="-top-40 -left-32 h-[38rem] w-[38rem] opacity-40" />
      <Glow drift className="top-32 -right-24 h-[28rem] w-[28rem] opacity-25" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Pitch */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            A digital studio
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            We design, build &amp; render{" "}
            <GradientText>what&apos;s next.</GradientText>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            cev.studio is a small studio making web apps, mobile products, brand
            identities and 3D worlds. Tell us what you&apos;re making.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-xs tracking-tight text-muted"
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form — the hero */}
        <div id="contact" className="scroll-mt-28">
          <div className="rounded-2xl border border-border bg-surface/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm md:p-8">
            <h2 className="text-xl font-semibold tracking-tight">
              Start a project
            </h2>
            <p className="mt-1 text-sm text-muted">
              Tell us what you&apos;re making — we reply within 48 hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
