import { cn } from "@/lib/cn";

/**
 * Decorative blurred aurora blob. Position and size it with `className`
 * (e.g. "h-[40rem] w-[40rem] -top-40 left-1/2 -translate-x-1/2").
 */
export function Glow({
  className,
  drift = false,
}: {
  className?: string;
  drift?: boolean;
}) {
  return (
    <div aria-hidden className={cn("glow", drift && "glow-drift", className)} />
  );
}
