type ClassValue = string | false | null | undefined;

/** Tiny classnames joiner — filters falsy values. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
