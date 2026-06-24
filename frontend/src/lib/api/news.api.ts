import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { NewsItem } from "../../types/content";

export interface NewsParams extends SearchParams {
  published_after?: string;
  published_before?: string;
}

export const newsKeys = {
  all: ["news"] as const,
  lists: () => [...newsKeys.all, "list"] as const,
  list: (params: NewsParams) => [...newsKeys.lists(), params] as const,
  details: () => [...newsKeys.all, "detail"] as const,
  detail: (slug: string) => [...newsKeys.details(), slug] as const
};

export function getNews(params: NewsParams = {}) {
  return getList<NewsItem>(endpoints.news, params);
}

export function getNewsDetail(slug: string) {
  return getDetail<NewsItem>(endpoints.news, slug);
}
