import { Play } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../common/Card";
import { ContentMeta } from "../common/ContentMeta";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Tag } from "../common/Tag";
import type { VideoSurvey } from "../../types/content";

interface VideoCardProps {
  item: VideoSurvey;
}

export function VideoCard({ item }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden transition-colors hover:border-brand">
      <Link to={`/videos/${item.slug}`} className="relative">
        <ImageWithFallback
          src={item.thumbnail}
          alt={item.title}
          fallbackLabel="Видео"
          className="aspect-video"
        />
        <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
          <Play aria-hidden className="h-5 w-5 fill-current" />
        </span>
      </Link>
      <div className="flex min-h-48 flex-col p-5">
        <Tag>Сурамжылоо / Видео</Tag>
        <h2 className="mt-4 text-xl font-semibold leading-snug text-ink group-hover:text-brand">
          <Link className="focus-ring rounded-sm" to={`/videos/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        {item.description ? (
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink-soft">
            {item.description}
          </p>
        ) : null}
        <ContentMeta className="mt-auto pt-5" date={item.published_at} />
      </div>
    </Card>
  );
}
