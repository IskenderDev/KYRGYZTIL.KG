import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../common/Card";
import { ContentMeta } from "../common/ContentMeta";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Tag } from "../common/Tag";
import type { Podcast } from "../../types/content";

interface PodcastCardProps {
  item: Podcast;
}

export function PodcastCard({ item }: PodcastCardProps) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-brand">
      <ImageWithFallback src={item.cover_image} alt={item.title} fallbackLabel="Подкаст" className="aspect-square" />
      <div className="flex min-h-52 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <Tag tone="dark">Подкаст</Tag>
          <Headphones aria-hidden className="h-5 w-5 text-brand" />
        </div>
        <h2 className="mt-4 text-xl font-semibold leading-snug text-ink group-hover:text-brand">
          <Link className="focus-ring rounded-sm" to={`/podcasts/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        {item.description ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">{item.description}</p> : null}
        <ContentMeta className="mt-auto pt-5" date={item.published_at} />
      </div>
    </Card>
  );
}
