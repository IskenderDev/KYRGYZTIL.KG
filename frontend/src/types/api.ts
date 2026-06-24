export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface PaginationParams {
  page?: number;
  page_size?: number;
}

export interface SearchParams extends PaginationParams {
  search?: string;
  ordering?: string;
}

export type FieldErrors = Record<string, string[]>;

export interface NormalizedApiError {
  message: string;
  status?: number;
  fields: FieldErrors;
}
