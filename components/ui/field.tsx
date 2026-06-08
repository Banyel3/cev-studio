import { cn } from "@/lib/cn";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  className?: string;
};

const control =
  "w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-fg placeholder:text-faint transition-colors duration-200 focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-aurora-3/60";

const labelCls =
  "block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-faint";

/** Labelled text input. Set `multiline` for a textarea. */
export function Field({
  label,
  name,
  error,
  className,
  multiline,
  ...rest
}: BaseProps &
  (
    | ({ multiline?: false } & React.InputHTMLAttributes<HTMLInputElement>)
    | ({ multiline: true } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  )) {
  const describedBy = error ? `${name}-error` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={name} className={labelCls}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(control, "min-h-32 resize-y")}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={control}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error ? (
        <p id={describedBy} className="text-xs text-aurora-1">
          {error}
        </p>
      ) : null}
    </div>
  );
}
