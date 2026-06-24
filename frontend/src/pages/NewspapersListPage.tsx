import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Pagination } from "../components/common/Pagination";
import { Seo } from "../components/common/Seo";
import { NewspaperCard } from "../components/cards/NewspaperCard";
import { FilterBar } from "../components/navigation/FilterBar";
import { SearchInput } from "../components/navigation/SearchInput";
import { getNewspapers, newspaperKeys, type NewspaperParams } from "../lib/api/newspapers.api";
import { useListSearchParams } from "../hooks/useListSearchParams";

export default function NewspapersListPage() {
  const params = useListSearchParams(8);
  const queryParams: NewspaperParams = {
    page: params.page,
    page_size: params.pageSize,
    search: params.search,
    ordering: params.ordering || "-issue_number"
  };
  const query = useQuery({
    queryKey: newspaperKeys.list(queryParams),
    queryFn: () => getNewspapers(queryParams)
  });

  return (
    <>
      <Seo title="Кыргыз тили гезити" description="Кыргыз тили гезитинин PDF чыгарылыштары." canonicalPath="/newspapers" />
      <PageHeader
        title="Кыргыз тили гезити"
        description="Гезиттин чыгарылыштары, номерлери жана PDF файлдары."
        breadcrumbs={[{ label: "Кыргыз тили гезити" }]}
      />
      <Container className="py-10">
        <FilterBar>
          <SearchInput value={params.search} placeholder="Чыгарылыш издөө" onSearch={(value) => params.updateParam("search", value)} />
        </FilterBar>
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState /> : null}
        {query.data && query.data.results.length > 0 ? (
          <>
            <div className="grid gap-5 lg:grid-cols-2">
              {query.data.results.map((item) => (
                <NewspaperCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination count={query.data.count} page={params.page} pageSize={params.pageSize} onPageChange={params.setPage} />
          </>
        ) : null}
      </Container>
    </>
  );
}
