import { cn } from "@/lib/cn";

/** Renders its children with the aurora gradient applied to the text. */
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("aurora-text", className)}>{children}</span>;
}
