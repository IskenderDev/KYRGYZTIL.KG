import { cn } from "../../lib/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({ children, className, muted = false }: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", muted && "bg-surface-muted", className)}>
      {children}
    </section>
  );
}
