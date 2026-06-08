import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-3 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "aurora-fill text-white shadow-[0_8px_30px_-8px_rgba(255,45,155,0.5)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-border text-fg hover:border-border-strong hover:bg-elevated",
};

/** Aurora-filled (primary) or outlined (ghost) button. */
export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
