import Link from "next/link";
import { Glow } from "@/components/ui/glow";
import { GradientText } from "@/components/ui/gradient-text";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Glow
        drift
        className="-top-24 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 opacity-25"
      />
      <div className="relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          404
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          <GradientText>Lost</GradientText> in space.
        </h1>
        <p className="mt-4 text-muted">This page drifted off the grid.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-fg underline-offset-8 transition-colors hover:text-aurora-2 hover:underline"
        >
          Back home →
        </Link>
      </div>
    </main>
  );
}
