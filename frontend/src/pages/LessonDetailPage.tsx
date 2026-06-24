import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Download } from "lucide-react";
import { useParams } from "react-router-dom";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { ContentMeta } from "../components/common/ContentMeta";
import { ErrorState } from "../components/common/ErrorState";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { Tag } from "../components/common/Tag";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getLessonDetail, lessonKeys } from "../lib/api/lessons.api";
import { resolveMediaUrl } from "../lib/api/helpers";
import { materialTypeLabels } from "../lib/constants/materialTypes";

export default function LessonDetailPage() {
  const { slug = "" } = useParams();
  const query = useQuery({
    queryKey: lessonKeys.detail(slug),
    queryFn: () => getLessonDetail(slug),
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
  const attachment = resolveMediaUrl(item.attachment);

  return (
    <>
      <Seo title={item.title} description={item.excerpt || "Окуу материалы"} canonicalPath={`/learn/${item.slug}`} />
      <PageHeader
        title={item.title}
        description={item.excerpt}
        breadcrumbs={[{ label: "Окуу борбору", href: "/learn" }, { label: item.title }]}
        eyebrow="Окуу материалы"
      />
      <Container className="py-10">
        <article className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <Tag>{materialTypeLabels[item.material_type]}</Tag>
            <ContentMeta date={item.published_at} />
          </div>
          <ImageWithFallback
            src={item.cover_image}
            alt={item.title}
            priority
            fallbackLabel={materialTypeLabels[item.material_type]}
            className="mt-6 aspect-[16/8] rounded-lg"
          />
          <RichTextRenderer content={item.content} className="rich-text mx-auto mt-8 max-w-3xl" />
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6">
            <ButtonLink to="/learn" variant="secondary" icon={<ArrowLeft aria-hidden className="h-4 w-4" />}>
              Тизмеге кайтуу
            </ButtonLink>
            {attachment ? (
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-brand bg-brand px-4 text-sm font-semibold text-white transition-colors hover:border-brand-hover hover:bg-brand-hover"
                href={attachment}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Download aria-hidden className="h-4 w-4" />
                Файлды ачуу
              </a>
            ) : null}
          </div>
        </article>
      </Container>
    </>
  );
}
