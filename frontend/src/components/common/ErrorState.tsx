import { AlertTriangle } from "lucide-react";

import { Button } from "./Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Маалыматты жүктөө мүмкүн болгон жок.",
  message = "Серверге туташууда ката кетти.",
  onRetry
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-error/25 bg-red-50 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <AlertTriangle aria-hidden className="h-7 w-7 shrink-0 text-error" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{message}</p>
          {onRetry ? (
            <Button className="mt-4" variant="secondary" onClick={onRetry}>
              Кайталап көрүү
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
