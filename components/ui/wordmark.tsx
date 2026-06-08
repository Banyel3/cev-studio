import { cn } from "@/lib/cn";

/**
 * Typographic logo: `cev` + gradient dot + `studio`.
 * The whole mark is one tight, lowercase wordmark in the sans typeface.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-sans text-lg font-semibold tracking-tight text-fg select-none",
        className,
      )}
    >
      cev<span className="aurora-text font-bold">.</span>
      <span className="text-muted">studio</span>
    </span>
  );
}
