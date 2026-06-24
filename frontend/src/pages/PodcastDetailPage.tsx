import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams } from "react-router-dom";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { ContentMeta } from "../components/common/ContentMeta";
import { ErrorState } from "../components/common/ErrorState";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getPodcastDetail, podcastKeys } from "../lib/api/podcasts.api";
import { resolveMediaUrl } from "../lib/api/helpers";

export default function PodcastDetailPage() {
  const { slug = "" } = useParams();
  const query = useQuery({
    queryKey: podcastKeys.detail(slug),
    queryFn: () => getPodcastDetail(slug),
    enabled: Boolean(slug)
  });

  if (query.isLoading) {
    return <LoadingState variant="article" />;
  }

  if (query.isError || !query.data) {
    return (
      <Container className="py-10">
        <ErrorState onRetry={() => void query.refetch()} />
      </Container>
    );
  }

  const item = query.data;
  const audio = resolveMediaUrl(item.audio_file) || item.audio_url;

  return (
    <>
      <Seo title={item.title} description={item.description || "Подкаст"} canonicalPath={`/podcasts/${item.slug}`} />
      <PageHeader
        title={item.title}
        description={item.description}
        breadcrumbs={[{ label: "Медиа", href: "/media" }, { label: "Подкаст", href: "/podcasts" }, { label: item.title }]}
        eyebrow="Подкаст"
      />
      <Container className="py-10">
        <article className="grid gap-8 lg:grid-cols-[340px_1fr] lg:items-start">
          <aside>
            <ImageWithFallback src={item.cover_image} alt={item.title} priority fallbackLabel="Подкаст" className="aspect-square rounded-lg" />
            <ContentMeta className="mt-4" date={item.published_at} />
          </aside>
          <div>
            {audio ? (
              <div className="rounded-lg border border-border bg-white p-5">
                {resolveMediaUrl(item.audio_file) ? (
                  <audio className="w-full" controls src={audio} />
                ) : (
                  <a
                    className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-brand bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-hover"
                    href={audio}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink aria-hidden className="h-4 w-4" />
                    Аудио ачуу
                  </a>
                )}
              </div>
            ) : null}
            <RichTextRenderer content={item.description} className="rich-text mt-8 max-w-3xl" />
            <div className="mt-10 border-t border-border pt-6">
              <ButtonLink to="/podcasts" variant="secondary" icon={<ArrowLeft aria-hidden className="h-4 w-4" />}>
                Подкасттарга кайтуу
              </ButtonLink>
            </div>
          </div>
        </article>
      </Container>
    </>
  );
}
