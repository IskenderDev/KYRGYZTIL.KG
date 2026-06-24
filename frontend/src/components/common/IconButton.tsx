import { cn } from "../../lib/utils/cn";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: React.ReactNode;
}

export function IconButton({ label, children, className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-white text-ink transition-colors hover:border-brand hover:text-brand",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
