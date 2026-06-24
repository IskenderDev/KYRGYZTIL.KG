import { useSearchParams } from "react-router-dom";

export function useListSearchParams(defaultPageSize: number) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page") || "1") || 1);
  const search = searchParams.get("search") || "";
  const ordering = searchParams.get("ordering") || "";

  function updateParam(key: string, value?: string | number | null) {
    const next = new URLSearchParams(searchParams);

    if (value === undefined || value === null || value === "") {
      next.delete(key);
    } else {
      next.set(key, String(value));
    }

    if (key !== "page") {
      next.delete("page");
    }

    setSearchParams(next);
  }

  return {
    page,
    pageSize: defaultPageSize,
    search,
    ordering,
    searchParams,
    updateParam,
    setPage: (nextPage: number) => updateParam("page", nextPage)
  };
}
