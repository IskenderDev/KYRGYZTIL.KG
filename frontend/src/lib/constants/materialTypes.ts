import type { EducationalMaterialType } from "../../types/content";

export const materialTypeLabels: Record<EducationalMaterialType, string> = {
  article: "Макала",
  lesson: "Сабак",
  methodical: "Методикалык материал"
};

export const materialTypeTabs = [
  { label: "Баары", value: "all" },
  { label: materialTypeLabels.article, value: "article" },
  { label: materialTypeLabels.lesson, value: "lesson" },
  { label: materialTypeLabels.methodical, value: "methodical" }
] as const;
