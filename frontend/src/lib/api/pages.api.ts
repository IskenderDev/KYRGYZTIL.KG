import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { StaticPage } from "../../types/content";

export type StaticPageParams = SearchParams;

export const pageKeys = {
  all: ["pages"] as const,
  lists: () => [...pageKeys.all, "list"] as const,
  list: (params: StaticPageParams) => [...pageKeys.lists(), params] as const,
  details: () => [...pageKeys.all, "detail"] as const,
  detail: (slug: string) => [...pageKeys.details(), slug] as const
};

export function getStaticPages(params: StaticPageParams = {}) {
  return getList<StaticPage>(endpoints.pages, params);
}

export function getStaticPage(slug: string) {
  return getDetail<StaticPage>(endpoints.pages, slug);
}
