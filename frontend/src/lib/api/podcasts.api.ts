import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { Podcast } from "../../types/content";

export type PodcastParams = SearchParams;

export const podcastKeys = {
  all: ["podcasts"] as const,
  lists: () => [...podcastKeys.all, "list"] as const,
  list: (params: PodcastParams) => [...podcastKeys.lists(), params] as const,
  details: () => [...podcastKeys.all, "detail"] as const,
  detail: (slug: string) => [...podcastKeys.details(), slug] as const
};

export function getPodcasts(params: PodcastParams = {}) {
  return getList<Podcast>(endpoints.podcasts, params);
}

export function getPodcastDetail(slug: string) {
  return getDetail<Podcast>(endpoints.podcasts, slug);
}
