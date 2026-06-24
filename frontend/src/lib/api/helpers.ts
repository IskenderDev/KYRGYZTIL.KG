import type { AxiosRequestConfig } from "axios";

import { apiClient } from "./client";
import type { PaginatedResponse, SearchParams } from "../../types/api";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNullableString(value: unknown): value is string | null {
  return typeof value === "string" || value === null;
}

function isPaginatedResponse<T>(value: unknown): value is PaginatedResponse<T> {
  return (
    isRecord(value) &&
    typeof value.count === "number" &&
    isNullableString(value.next) &&
    isNullableString(value.previous) &&
    Array.isArray(value.results)
  );
}

function assertPaginatedResponse<T>(
  value: unknown,
  endpoint: string
): PaginatedResponse<T> {
  if (isPaginatedResponse<T>(value)) {
    return value;
  }

  throw new Error(
    `Invalid API response for ${endpoint}. Check VITE_API_BASE_URL.`
  );
}

export function cleanParams(params?: object) {
  const cleaned: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined && value !== null && value !== "") {
      cleaned[key] = value;
    }
  }

  return cleaned;
}

export async function getList<T>(
  endpoint: string,
  params?: SearchParams | Record<string, unknown>
) {
  const response = await apiClient.get<unknown>(endpoint, {
    params: cleanParams(params)
  });

  return assertPaginatedResponse<T>(response.data, endpoint);
}

export async function getDetail<T>(endpoint: string, slug: string) {
  const response = await apiClient.get<T>(`${endpoint}${slug}/`);
  return response.data;
}

export async function postResource<Response, Payload>(
  endpoint: string,
  payload: Payload,
  config?: AxiosRequestConfig
) {
  const response = await apiClient.post<Response>(endpoint, payload, config);
  return response.data;
}

export function absoluteUrl(path?: string | null) {
  if (!path) {
    return null;
  }

  try {
    return new URL(path).toString();
  } catch {
    return path;
  }
}

export function resolveMediaUrl(path?: string | null) {
  if (!path) {
    return null;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (path.startsWith("/media/")) {
    const mediaBase = import.meta.env.VITE_MEDIA_BASE_URL || "/django-media";
    return `${mediaBase}${path.slice("/media".length)}`;
  }

  return path.startsWith("/") ? path : `/${path}`;
}
