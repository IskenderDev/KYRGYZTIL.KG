import { cn } from "../../lib/utils/cn";
import { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, id, className, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <textarea
        id={inputId}
        className={cn(
          "focus-ring min-h-36 w-full resize-y rounded-md border-border bg-white text-ink placeholder:text-ink-muted",
          error && "border-error focus-visible:outline-error",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        ref={ref}
        {...props}
      />
      {error ? (
        <span id={`${inputId}-error`} className="mt-2 block text-sm text-error">
          {error}
        </span>
      ) : null}
    </label>
  );
});
