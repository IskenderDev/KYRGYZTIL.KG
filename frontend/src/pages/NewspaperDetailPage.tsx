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
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { PdfViewer } from "../components/media/PdfViewer";
import { getNewspaperDetail, getNewspaperDownloadUrl, newspaperKeys } from "../lib/api/newspapers.api";

export default function NewspaperDetailPage() {
  const { slug = "" } = useParams();
  const query = useQuery({
    queryKey: newspaperKeys.detail(slug),
    queryFn: () => getNewspaperDetail(slug),
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
      <Seo title={item.title} description={item.description || "Кыргыз тили гезити"} canonicalPath={`/newspapers/${item.slug}`} />
      <PageHeader
        title={item.title}
        description={item.description}
        breadcrumbs={[{ label: "Кыргыз тили гезити", href: "/newspapers" }, { label: item.title }]}
        eyebrow={`№ ${item.issue_number}`}
      />
      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside>
            <ImageWithFallback
              src={item.cover_image}
              alt={item.title}
              priority
              fallbackLabel={`#${item.issue_number}`}
              className="aspect-[3/4] rounded-lg"
            />
            <ContentMeta className="mt-4" date={item.published_at} extra={<span>№ {item.issue_number}</span>} />
          </aside>
          <div className="grid gap-8">
            {item.description ? <RichTextRenderer content={item.description} className="rich-text max-w-3xl" /> : null}
            <PdfViewer file={item.pdf_file} downloadUrl={getNewspaperDownloadUrl(item.slug)} title={item.title} />
            <ButtonLink to="/newspapers" variant="secondary" icon={<ArrowLeft aria-hidden className="h-4 w-4" />}>
              Чыгарылыштарга кайтуу
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
