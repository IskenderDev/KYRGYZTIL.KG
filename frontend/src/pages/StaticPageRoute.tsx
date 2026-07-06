import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getStaticPage, pageKeys } from "../lib/api/pages.api";
import { AxiosError } from "axios";
import { ErrorState } from "../components/common/ErrorState";

interface StaticPageRouteProps {
  slug: string;
  fallbackTitle: string;
}

export default function StaticPageRoute({
  slug,
  fallbackTitle,
}: StaticPageRouteProps) {
  const query = useQuery({
    queryKey: pageKeys.detail(slug),
    queryFn: () => getStaticPage(slug),
    retry: false,
  });
  const title = query.data?.title || fallbackTitle;
  const description =
    query.data?.meta_description || `${fallbackTitle} баракчасы.`;

  const isNotFound =
    query.error instanceof AxiosError && query.error.response?.status === 404;
  return (
    <>
      <Seo title={title} description={description} canonicalPath={`/${slug}`} />
      <PageHeader
        title={title}
        description={query.data?.meta_description}
        breadcrumbs={[{ label: fallbackTitle }]}
      />
      <Container className="py-10">
        {query.isLoading ? <LoadingState variant="article" /> : null}
        {query.isError
          ? isNotFound && (
              <EmptyState
                title="Бул баракча азырынча жарыялана элек."
                description="Маалымат жарыяланганда ушул жерден окуй аласыз."
              />
            )
          : null}
        {query.isError && !isNotFound ? <ErrorState onRetry={() => void query.refetch()}/> : null}
        {query.data ? (
          <RichTextRenderer
            content={query.data.content}
            className="rich-text mx-auto max-w-3xl"
          />
        ) : null}
      </Container>
    </>
  );
}
