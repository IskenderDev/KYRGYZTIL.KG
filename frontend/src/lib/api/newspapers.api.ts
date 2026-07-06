import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { NewspaperIssue } from "../../types/content";

export interface NewspaperParams extends SearchParams {
  issue_from?: number;
  issue_to?: number;
}

export const newspaperKeys = {
  all: ["newspapers"] as const,
  lists: () => [...newspaperKeys.all, "list"] as const,
  list: (params: NewspaperParams) => [...newspaperKeys.lists(), params] as const,
  details: () => [...newspaperKeys.all, "detail"] as const,
  detail: (slug: string) => [...newspaperKeys.details(), slug] as const
};

export function getNewspapers(params: NewspaperParams = {}) {
  return getList<NewspaperIssue>(endpoints.newspapers, params);
}

export function getNewspaperDetail(slug: string) {
  return getDetail<NewspaperIssue>(endpoints.newspapers, slug);
}

export function getNewspaperDownloadUrl(slug: string) {
  return `/api/v1${endpoints.newspapers}${slug}/download/`;
}
