import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "./Button";

interface PaginationProps {
  count: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ count, page, pageSize, onPageChange }: PaginationProps) {
  const pages = Math.max(1, Math.ceil(count / pageSize));

  if (pages <= 1) {
    return null;
  }

  return (
    <nav aria-label="Pagination" className="mt-10 flex flex-col items-start gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-ink-muted">
        {page} / {pages} бет
      </p>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          disabled={page <= 1}
          icon={<ChevronLeft aria-hidden className="h-4 w-4" />}
          onClick={() => onPageChange(page - 1)}
        >
          Артка
        </Button>
        <Button
          variant="secondary"
          disabled={page >= pages}
          onClick={() => onPageChange(page + 1)}
        >
          Кийинки
          <ChevronRight aria-hidden className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
}
