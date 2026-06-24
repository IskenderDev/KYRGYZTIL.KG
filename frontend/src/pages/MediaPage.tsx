import { useQuery } from "@tanstack/react-query";
import { Headphones, Video } from "lucide-react";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { Section } from "../components/common/Section";
import { PodcastCard } from "../components/cards/PodcastCard";
import { VideoCard } from "../components/cards/VideoCard";
import { getPodcasts, podcastKeys } from "../lib/api/podcasts.api";
import { getSurveyVideos, videoKeys } from "../lib/api/surveyVideos.api";

export default function MediaPage() {
  const podcasts = useQuery({
    queryKey: podcastKeys.list({ page_size: 3, ordering: "-published_at" }),
    queryFn: () => getPodcasts({ page_size: 3, ordering: "-published_at" })
  });
  const videos = useQuery({
    queryKey: videoKeys.list({ page_size: 3, ordering: "-published_at" }),
    queryFn: () => getSurveyVideos({ page_size: 3, ordering: "-published_at" })
  });
  const isLoading = podcasts.isLoading || videos.isLoading;
  const isError = podcasts.isError || videos.isError;

  return (
    <>
      <Seo title="Медиа" description="Подкасттар жана видео сурамжылоолор." canonicalPath="/media" />
      <PageHeader
        title="Медиа"
        description="Кыргыз тили боюнча подкасттар, маектер жана видео сурамжылоолор."
        breadcrumbs={[{ label: "Медиа" }]}
      />
      <Section>
        <Container>
          {isLoading ? <LoadingState /> : null}
          {isError ? (
            <ErrorState
              onRetry={() => {
                void podcasts.refetch();
                void videos.refetch();
              }}
            />
          ) : null}
          {!isLoading && !isError ? (
            <div className="grid gap-8 lg:grid-cols-2">
              <section>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-ink">
                    <Headphones aria-hidden className="h-6 w-6 text-brand" />
                    Подкаст
                  </h2>
                  <ButtonLink to="/podcasts" variant="secondary" size="sm">
                    Баары
                  </ButtonLink>
                </div>
                {podcasts.data && podcasts.data.results.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {podcasts.data.results.map((item) => (
                      <PodcastCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <EmptyState title="Подкаст жок." />
                )}
              </section>
              <section>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-ink">
                    <Video aria-hidden className="h-6 w-6 text-brand" />
                    Сурамжылоо / Видео
                  </h2>
                  <ButtonLink to="/videos" variant="secondary" size="sm">
                    Баары
                  </ButtonLink>
                </div>
                {videos.data && videos.data.results.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {videos.data.results.map((item) => (
                      <VideoCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <EmptyState title="Видео жок." />
                )}
              </section>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
