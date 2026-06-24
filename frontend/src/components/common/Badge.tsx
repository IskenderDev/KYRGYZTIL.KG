import { cn } from "../../lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-sm border border-border bg-white px-2 text-xs font-medium text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
