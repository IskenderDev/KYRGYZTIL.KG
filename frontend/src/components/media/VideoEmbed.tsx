import { Play } from "lucide-react";
import { useState } from "react";

import { Button } from "../common/Button";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { getVideoEmbedInfo } from "../../lib/utils/media";

interface VideoEmbedProps {
  url: string;
  title: string;
  thumbnail?: string | null;
}

export function VideoEmbed({ url, title, thumbnail }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embed = getVideoEmbedInfo(url);

  if (!embed) {
    return (
      <div className="rounded-lg border border-border bg-white p-5">
        <p className="text-sm text-ink-soft">Видео шилтемеси тышкы платформада ачылат.</p>
        <a className="mt-3 inline-flex font-semibold text-brand hover:text-brand-hover" href={url} rel="noopener noreferrer" target="_blank">
          Видеону ачуу
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-black">
      <div className="relative aspect-video">
        {isLoaded ? (
          <iframe
            className="h-full w-full"
            src={embed.src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <ImageWithFallback
              src={thumbnail}
              alt={title}
              className="h-full w-full"
              fallbackLabel={title}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
              <Button
                className="rounded-full"
                icon={<Play aria-hidden className="h-5 w-5 fill-current" />}
                onClick={() => setIsLoaded(true)}
              >
                Көрүү
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
