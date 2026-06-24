import { CalendarDays } from "lucide-react";

import { formatDate } from "../../lib/formatting/date";
import { cn } from "../../lib/utils/cn";

interface ContentMetaProps {
  date?: string | null;
  extra?: React.ReactNode;
  className?: string;
}

export function ContentMeta({ date, extra, className }: ContentMetaProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 text-sm text-ink-muted", className)}>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays aria-hidden className="h-4 w-4" />
        {formatDate(date)}
      </span>
      {extra}
    </div>
  );
}
