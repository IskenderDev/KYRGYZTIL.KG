import { endpoints } from "./endpoints";
import { getList } from "./helpers";
import type { SearchParams } from "../../types/api";
import type { Partner } from "../../types/content";

export type PartnerParams = SearchParams;

export const partnerKeys = {
  all: ["partners"] as const,
  lists: () => [...partnerKeys.all, "list"] as const,
  list: (params: PartnerParams) => [...partnerKeys.lists(), params] as const
};

export function getPartners(params: PartnerParams = {}) {
  return getList<Partner>(endpoints.partners, params);
}
