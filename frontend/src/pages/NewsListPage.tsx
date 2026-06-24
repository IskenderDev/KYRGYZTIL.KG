import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Pagination } from "../components/common/Pagination";
import { Seo } from "../components/common/Seo";
import { Tabs } from "../components/common/Tabs";
import { NewsCard } from "../components/cards/NewsCard";
import { FilterBar } from "../components/navigation/FilterBar";
import { SearchInput } from "../components/navigation/SearchInput";
import { getNews, newsKeys, type NewsParams } from "../lib/api/news.api";
import { useListSearchParams } from "../hooks/useListSearchParams";

const orderingTabs = [
  { label: "Жаңы", value: "-published_at" },
  { label: "Эски", value: "published_at" },
  { label: "Аталышы", value: "title" }
] as const;

export default function NewsListPage() {
  const params = useListSearchParams(9);
  const ordering = params.ordering || "-published_at";
  const queryParams: NewsParams = {
    page: params.page,
    page_size: params.pageSize,
    search: params.search,
    ordering
  };
  const query = useQuery({
    queryKey: newsKeys.list(queryParams),
    queryFn: () => getNews(queryParams)
  });

  return (
    <>
      <Seo title="Жаңылыктар" description="Кыргыз тили боюнча акыркы жаңылыктар." canonicalPath="/news" />
      <PageHeader
        title="Жаңылыктар"
        description="Кыргыз тилинин өнүгүүсү, тил саясаты жана коомдук демилгелер тууралуу жаңылыктар."
        breadcrumbs={[{ label: "Жаңылыктар" }]}
      />
      <Container className="py-10">
        <FilterBar>
          <SearchInput value={params.search} placeholder="Жаңылык издөө" onSearch={(value) => params.updateParam("search", value)} />
          <Tabs
            label="Сорттоо"
            items={orderingTabs}
            value={ordering as (typeof orderingTabs)[number]["value"]}
            onChange={(value) => params.updateParam("ordering", value)}
          />
        </FilterBar>
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState /> : null}
        {query.data && query.data.results.length > 0 ? (
          <>
            <div className="grid gap-5 lg:grid-cols-3">
              {query.data.results.map((item, index) => (
                <div className={index === 0 ? "lg:col-span-2" : undefined} key={item.id}>
                  <NewsCard item={item} featured={index === 0} />
                </div>
              ))}
            </div>
            <Pagination
              count={query.data.count}
              page={params.page}
              pageSize={params.pageSize}
              onPageChange={params.setPage}
            />
          </>
        ) : null}
      </Container>
    </>
  );
}
