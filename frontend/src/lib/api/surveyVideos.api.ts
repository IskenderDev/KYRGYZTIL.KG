import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { VideoSurvey } from "../../types/content";

export type VideoSurveyParams = SearchParams;

export const videoKeys = {
  all: ["video-surveys"] as const,
  lists: () => [...videoKeys.all, "list"] as const,
  list: (params: VideoSurveyParams) => [...videoKeys.lists(), params] as const,
  details: () => [...videoKeys.all, "detail"] as const,
  detail: (slug: string) => [...videoKeys.details(), slug] as const
};

export function getSurveyVideos(params: VideoSurveyParams = {}) {
  return getList<VideoSurvey>(endpoints.videos, params);
}

export function getSurveyVideoDetail(slug: string) {
  return getDetail<VideoSurvey>(endpoints.videos, slug);
}
