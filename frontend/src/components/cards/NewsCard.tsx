import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../common/Card";
import { ContentMeta } from "../common/ContentMeta";
import { ImageWithFallback } from "../common/ImageWithFallback";
import type { NewsItem } from "../../types/content";
import { cn } from "../../lib/utils/cn";

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export function NewsCard({ item, featured = false }: NewsCardProps) {
  return (
    <Card className={cn("group overflow-hidden transition-colors hover:border-brand", featured && "md:grid md:grid-cols-[1.1fr_0.9fr]")}>
      <ImageWithFallback
        src={item.cover_image}
        alt={item.title}
        priority={featured}
        fallbackLabel={item.title}
        className={cn("aspect-[16/10]", featured && "md:aspect-auto md:h-full")}
      />
      <div className="flex min-h-56 flex-col p-5">
        <ContentMeta date={item.published_at} />
        <h2 className={cn("mt-3 font-semibold leading-snug text-ink group-hover:text-brand", featured ? "text-2xl" : "text-xl")}>
          <Link className="focus-ring rounded-sm" to={`/news/${item.slug}`}>
            {item.title}
          </Link>
        </h2>
        {item.excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">{item.excerpt}</p> : null}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand">
          Окуу
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Card>
  );
}
