import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { ContentMeta } from "../components/common/ContentMeta";
import { ErrorState } from "../components/common/ErrorState";
import { ImageWithFallback } from "../components/common/ImageWithFallback";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { ShareActions } from "../components/common/ShareActions";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getNewsDetail, newsKeys } from "../lib/api/news.api";

export default function NewsDetailPage() {
  const { slug = "" } = useParams();
  const query = useQuery({
    queryKey: newsKeys.detail(slug),
    queryFn: () => getNewsDetail(slug),
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
      <Seo title={item.title} description={item.excerpt || "Жаңылык"} canonicalPath={`/news/${item.slug}`} />
      <PageHeader
        title={item.title}
        description={item.excerpt}
        breadcrumbs={[{ label: "Жаңылыктар", href: "/news" }, { label: item.title }]}
        eyebrow="Жаңылык"
      />
      <Container className="py-10">
        <article className="mx-auto max-w-5xl">
          <ContentMeta date={item.published_at} />
          <ImageWithFallback
            src={item.cover_image}
            alt={item.title}
            priority
            fallbackLabel={item.title}
            className="mt-6 aspect-[16/8] rounded-lg"
          />
          <RichTextRenderer content={item.content} className="rich-text mx-auto mt-8 max-w-3xl" />
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6">
            <ButtonLink to="/news" variant="secondary" icon={<ArrowLeft aria-hidden className="h-4 w-4" />}>
              Жаңылыктарга кайтуу
            </ButtonLink>
            <ShareActions title="Шилтемени көчүрүү" />
          </div>
        </article>
      </Container>
    </>
  );
}
