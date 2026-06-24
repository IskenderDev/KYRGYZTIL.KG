import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Seo } from "../components/common/Seo";
import { RichTextRenderer } from "../components/media/RichTextRenderer";
import { getStaticPage, pageKeys } from "../lib/api/pages.api";

interface StaticPageRouteProps {
  slug: string;
  fallbackTitle: string;
}

export default function StaticPageRoute({ slug, fallbackTitle }: StaticPageRouteProps) {
  const query = useQuery({
    queryKey: pageKeys.detail(slug),
    queryFn: () => getStaticPage(slug),
    retry: false
  });
  const title = query.data?.title || fallbackTitle;
  const description = query.data?.meta_description || `${fallbackTitle} баракчасы.`;

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
        {query.isError ? (
          <EmptyState title="Бул баракча азырынча жарыялана элек." description="Маалымат жарыяланганда ушул жерден окуй аласыз." />
        ) : null}
        {query.data ? <RichTextRenderer content={query.data.content} className="rich-text mx-auto max-w-3xl" /> : null}
      </Container>
    </>
  );
}
