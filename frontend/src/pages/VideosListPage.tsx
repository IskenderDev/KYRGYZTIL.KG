import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Pagination } from "../components/common/Pagination";
import { Seo } from "../components/common/Seo";
import { VideoCard } from "../components/cards/VideoCard";
import { FilterBar } from "../components/navigation/FilterBar";
import { SearchInput } from "../components/navigation/SearchInput";
import { getSurveyVideos, videoKeys, type VideoSurveyParams } from "../lib/api/surveyVideos.api";
import { useListSearchParams } from "../hooks/useListSearchParams";

export default function VideosListPage() {
  const params = useListSearchParams(9);
  const queryParams: VideoSurveyParams = {
    page: params.page,
    page_size: params.pageSize,
    search: params.search,
    ordering: params.ordering || "-published_at"
  };
  const query = useQuery({
    queryKey: videoKeys.list(queryParams),
    queryFn: () => getSurveyVideos(queryParams)
  });

  return (
    <>
      <Seo title="Сурамжылоо / Видео" description="Кыргыз тили боюнча видео сурамжылоолор." canonicalPath="/videos" />
      <PageHeader
        title="Сурамжылоо / Видео"
        description="Коомдук пикир, кыска видеолор жана сурамжылоолор."
        breadcrumbs={[{ label: "Медиа", href: "/media" }, { label: "Сурамжылоо / Видео" }]}
      />
      <Container className="py-10">
        <FilterBar>
          <SearchInput value={params.search} placeholder="Видео издөө" onSearch={(value) => params.updateParam("search", value)} />
        </FilterBar>
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState /> : null}
        {query.data && query.data.results.length > 0 ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {query.data.results.map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination count={query.data.count} page={params.page} pageSize={params.pageSize} onPageChange={params.setPage} />
          </>
        ) : null}
      </Container>
    </>
  );
}
