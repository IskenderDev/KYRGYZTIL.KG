import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { ContentMeta } from "../components/common/ContentMeta";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { VideoEmbed } from "../components/media/VideoEmbed";
import { getSurveyVideoDetail, videoKeys } from "../lib/api/surveyVideos.api";

export default function VideoDetailPage() {
  const { slug = "" } = useParams();
  const query = useQuery({
    queryKey: videoKeys.detail(slug),
    queryFn: () => getSurveyVideoDetail(slug),
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

  return (
    <>
      <Seo title={item.title} description={item.description || "Видео"} canonicalPath={`/videos/${item.slug}`} />
      <PageHeader
        title={item.title}
        description={item.description}
        breadcrumbs={[{ label: "Медиа", href: "/media" }, { label: "Сурамжылоо / Видео", href: "/videos" }, { label: item.title }]}
        eyebrow="Видео"
      />
      <Container className="py-10">
        <article className="mx-auto max-w-5xl">
          <ContentMeta date={item.published_at} />
          <div className="mt-6">
            <VideoEmbed url={item.video_url} title={item.title} thumbnail={item.thumbnail} />
          </div>
          <RichTextRenderer content={item.description} className="rich-text mx-auto mt-8 max-w-3xl" />
          <div className="mt-10 border-t border-border pt-6">
            <ButtonLink to="/videos" variant="secondary" icon={<ArrowLeft aria-hidden className="h-4 w-4" />}>
              Видеолорго кайтуу
            </ButtonLink>
          </div>
        </article>
      </Container>
    </>
  );
}
