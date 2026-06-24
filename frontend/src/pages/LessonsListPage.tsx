import { useQuery } from "@tanstack/react-query";

import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { PageHeader } from "../components/common/PageHeader";
import { Pagination } from "../components/common/Pagination";
import { Seo } from "../components/common/Seo";
import { Tabs } from "../components/common/Tabs";
import { LessonCard } from "../components/cards/LessonCard";
import { FilterBar } from "../components/navigation/FilterBar";
import { SearchInput } from "../components/navigation/SearchInput";
import { getLessons, lessonKeys, type LessonParams } from "../lib/api/lessons.api";
import { materialTypeTabs } from "../lib/constants/materialTypes";
import { useListSearchParams } from "../hooks/useListSearchParams";
import type { EducationalMaterialType } from "../types/content";

type MaterialTabValue = (typeof materialTypeTabs)[number]["value"];

export default function LessonsListPage() {
  const params = useListSearchParams(9);
  const selectedType = (params.searchParams.get("material_type") || "all") as MaterialTabValue;
  const queryParams: LessonParams = {
    page: params.page,
    page_size: params.pageSize,
    search: params.search,
    ordering: params.ordering || "-published_at",
    material_type: selectedType === "all" ? undefined : (selectedType as EducationalMaterialType)
  };
  const query = useQuery({
    queryKey: lessonKeys.list(queryParams),
    queryFn: () => getLessons(queryParams)
  });

  return (
    <>
      <Seo title="Окуу борбору" description="Кыргыз тили боюнча окуу материалдары." canonicalPath="/learn" />
      <PageHeader
        title="Окуу борбору"
        description="Макалалар, сабактар жана методикалык материалдар кыргыз тили боюнча өз алдынча окууга ылайыкташтырылган."
        breadcrumbs={[{ label: "Окуу борбору" }]}
      />
      <Container className="py-10">
        <FilterBar>
          <SearchInput value={params.search} placeholder="Материал издөө" onSearch={(value) => params.updateParam("search", value)} />
          <Tabs
            label="Материал түрү"
            items={materialTypeTabs}
            value={selectedType}
            onChange={(value) => params.updateParam("material_type", value === "all" ? "" : value)}
          />
        </FilterBar>
        {query.isLoading ? <LoadingState /> : null}
        {query.isError ? <ErrorState onRetry={() => void query.refetch()} /> : null}
        {query.data && query.data.results.length === 0 ? <EmptyState /> : null}
        {query.data && query.data.results.length > 0 ? (
          <>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {query.data.results.map((item) => (
                <LessonCard key={item.id} item={item} />
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
