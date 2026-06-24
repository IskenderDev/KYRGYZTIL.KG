import { cn } from "../../lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <article className={cn("rounded-lg border border-border bg-white", className)}>{children}</article>;
}
