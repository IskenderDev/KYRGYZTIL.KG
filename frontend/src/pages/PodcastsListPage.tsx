import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Pagination } from "../components/common/Pagination";
import { Seo } from "../components/common/Seo";
import { PodcastCard } from "../components/cards/PodcastCard";
import { FilterBar } from "../components/navigation/FilterBar";
import { SearchInput } from "../components/navigation/SearchInput";
import { getPodcasts, podcastKeys, type PodcastParams } from "../lib/api/podcasts.api";
import { useListSearchParams } from "../hooks/useListSearchParams";

export default function PodcastsListPage() {
  const params = useListSearchParams(9);
  const queryParams: PodcastParams = {
    page: params.page,
    page_size: params.pageSize,
    search: params.search,
    ordering: params.ordering || "-published_at"
  };
  const query = useQuery({
    queryKey: podcastKeys.list(queryParams),
    queryFn: () => getPodcasts(queryParams)
  });

  return (
    <>
      <Seo title="Подкаст" description="Кыргыз тили боюнча подкасттар." canonicalPath="/podcasts" />
      <PageHeader
        title="Подкаст"
        description="Маектер, талкуулар жана аудио чыгарылыштар."
        breadcrumbs={[{ label: "Медиа", href: "/media" }, { label: "Подкаст" }]}
      />
      <Container className="py-10">
        <FilterBar>
          <SearchInput value={params.search} placeholder="Подкаст издөө" onSearch={(value) => params.updateParam("search", value)} />
        </FilterBar>
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState /> : null}
        {query.data && query.data.results.length > 0 ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {query.data.results.map((item) => (
                <PodcastCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination count={query.data.count} page={params.page} pageSize={params.pageSize} onPageChange={params.setPage} />
          </>
        ) : null}
      </Container>
    </>
  );
}
