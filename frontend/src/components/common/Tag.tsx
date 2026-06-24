import { cn } from "../../lib/utils/cn";

interface TagProps {
  children: React.ReactNode;
  tone?: "blue" | "dark" | "muted" | "success";
  className?: string;
}

const toneClasses = {
  blue: "border-brand/20 bg-brand-light text-brand",
  dark: "border-ink/15 bg-ink text-white",
  muted: "border-border bg-surface-muted text-ink-soft",
  success: "border-success/20 bg-green-50 text-success"
};

export function Tag({ children, tone = "blue", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded border px-2.5 text-xs font-semibold uppercase tracking-normal",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
