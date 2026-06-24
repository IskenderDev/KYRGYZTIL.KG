import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="focus-ring rounded-sm hover:text-brand" to="/">
            Башкы бет
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={`${item.href || item.label}`}>
            <ChevronRight aria-hidden className="h-4 w-4" />
            {item.href ? (
              <Link className="focus-ring rounded-sm hover:text-brand" to={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
