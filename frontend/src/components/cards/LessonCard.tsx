import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../common/Card";
import { ContentMeta } from "../common/ContentMeta";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Tag } from "../common/Tag";
import { materialTypeLabels } from "../../lib/constants/materialTypes";
import type { EducationalMaterial } from "../../types/content";

interface LessonCardProps {
  item: EducationalMaterial;
}

export function LessonCard({ item }: LessonCardProps) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-brand">
      <ImageWithFallback
        src={item.cover_image}
        alt={item.title}
        fallbackLabel={materialTypeLabels[item.material_type]}
        className="aspect-[16/9]"
      />
      <div className="flex min-h-60 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{materialTypeLabels[item.material_type]}</Tag>
          {item.attachment ? (
            <Tag tone="muted">
              <FileText aria-hidden className="mr-1 h-3.5 w-3.5" />
              Файл
            </Tag>
          ) : null}
        </div>
        <h2 className="mt-4 text-xl font-semibold leading-snug text-ink group-hover:text-brand">
          <Link className="focus-ring rounded-sm" to={`/learn/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        {item.excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">{item.excerpt}</p> : null}
        <div className="mt-auto pt-5">
          <ContentMeta date={item.published_at} />
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
            Өтүү
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Card>
  );
}
