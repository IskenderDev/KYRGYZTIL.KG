import { cn } from "../../lib/utils/cn";
import { resolveMediaUrl } from "../../lib/api/helpers";
import { getInitials } from "../../lib/utils/media";

interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  fallbackLabel
}: ImageWithFallbackProps) {
  const resolved = resolveMediaUrl(src);

  return (
    <div className={cn("brand-radial relative overflow-hidden bg-surface-muted", className)}>
      {resolved ? (
        <img
          src={resolved}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          className={cn("h-full w-full object-cover", imageClassName)}
        />
      ) : (
        <div className="learning-pattern flex h-full min-h-32 w-full items-center justify-center p-5 text-center">
          <span className="absolute -right-8 -top-4 h-20 w-28 rotate-12 rounded-lg bg-accent-red/15" />
          <span className="absolute -bottom-6 -left-8 h-20 w-32 -rotate-12 rounded-lg bg-accent-sky/15" />
          <span className="relative rounded-md bg-white/95 px-4 py-3 text-sm font-extrabold text-brand shadow-menu ring-1 ring-border">
            {getInitials(fallbackLabel || alt) || "KT"}
          </span>
        </div>
      )}
    </div>
  );
}
