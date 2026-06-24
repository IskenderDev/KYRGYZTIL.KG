import { Download, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

import { ButtonLink } from "../common/Button";
import { Card } from "../common/Card";
import { ContentMeta } from "../common/ContentMeta";
import { ImageWithFallback } from "../common/ImageWithFallback";
import type { NewspaperIssue } from "../../types/content";
import { resolveMediaUrl } from "../../lib/api/helpers";

interface NewspaperCardProps {
  item: NewspaperIssue;
}

export function NewspaperCard({ item }: NewspaperCardProps) {
  const pdfUrl = resolveMediaUrl(item.pdf_file);

  return (
    <Card className="grid gap-5 overflow-hidden p-4 sm:grid-cols-[150px_1fr]">
      <ImageWithFallback
        src={item.cover_image}
        alt={item.title}
        fallbackLabel={`#${item.issue_number}`}
        className="aspect-[3/4] rounded-md"
      />
      <div className="flex flex-col">
        <ContentMeta date={item.published_at} extra={<span>№ {item.issue_number}</span>} />
        <h2 className="mt-3 text-xl font-semibold leading-snug text-ink">
          <Link className="focus-ring rounded-sm hover:text-brand" to={`/newspapers/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        {item.description ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">{item.description}</p> : null}
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <ButtonLink to={`/newspapers/${item.slug}`} variant="secondary" icon={<Newspaper aria-hidden className="h-4 w-4" />}>
            Окуу
          </ButtonLink>
          {pdfUrl ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 text-sm font-semibold text-white transition-colors hover:border-brand-hover hover:bg-brand-hover"
              href={pdfUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Download aria-hidden className="h-4 w-4" />
              PDF жүктөө
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
