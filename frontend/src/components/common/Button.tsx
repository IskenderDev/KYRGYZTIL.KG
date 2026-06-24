import { Link, type LinkProps } from "react-router-dom";

import { cn } from "../../lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-brand bg-brand text-white hover:border-brand-hover hover:bg-brand-hover",
  secondary: "border-border bg-white text-ink hover:border-brand hover:text-brand",
  ghost: "border-transparent bg-transparent text-ink hover:bg-brand-light hover:text-brand",
  dark: "border-ink bg-ink text-white hover:border-brand-hover hover:bg-brand-hover"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base"
};

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
}

type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

type ButtonLinkProps = BaseButtonProps & LinkProps;

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}
