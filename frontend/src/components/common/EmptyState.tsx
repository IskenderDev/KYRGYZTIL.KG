import { BookOpen, FileText } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "Азырынча материалдар жок.",
  description = "Маалымат жарыяланганда бул жерде көрүнөт."
}: EmptyStateProps) {
  return (
    <div className="brand-radial overflow-hidden rounded-lg border border-border bg-white p-6 text-center sm:p-8">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-lg bg-white shadow-menu ring-1 ring-border">
        <BookOpen aria-hidden className="h-9 w-9 text-brand" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-muted">{description}</p>
      <FileText aria-hidden className="mx-auto mt-5 h-5 w-5 text-accent-red" />
    </div>
  );
}
