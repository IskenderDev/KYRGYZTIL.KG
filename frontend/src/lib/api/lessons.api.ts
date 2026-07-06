import { endpoints } from "./endpoints";
import { getDetail, getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { EducationalMaterial, EducationalMaterialType } from "../../types/content";

export interface LessonParams extends SearchParams {
  material_type?: EducationalMaterialType;
}

export const lessonKeys = {
  all: ["education"] as const,
  lists: () => [...lessonKeys.all, "list"] as const,
  list: (params: LessonParams) => [...lessonKeys.lists(), params] as const,
  details: () => [...lessonKeys.all, "detail"] as const,
  detail: (slug: string) => [...lessonKeys.details(), slug] as const
};

export function getLessons(params: LessonParams = {}) {
  return getList<EducationalMaterial>(endpoints.education, params);
}

export function getLessonDetail(slug: string) {
  return getDetail<EducationalMaterial>(endpoints.education, slug);
}

export function getLessonDownloadUrl(slug: string) {
  return `/api/v1${endpoints.education}${slug}/download/`;
}
