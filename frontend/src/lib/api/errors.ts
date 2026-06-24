import axios from "axios";

import type { FieldErrors, NormalizedApiError } from "../../types/api";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toMessageList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  if (typeof value === "string") {
    return [value];
  }

  return [];
}

export function normalizeApiError(error: unknown): NormalizedApiError {
  if (!axios.isAxiosError(error)) {
    return {
      message: "Күтүлбөгөн ката кетти.",
      fields: {}
    };
  }

  const status = error.response?.status;
  const data = error.response?.data;
  const fields: FieldErrors = {};
  let message = "Сурамды аткаруу мүмкүн болгон жок.";

  if (isRecord(data)) {
    for (const [key, value] of Object.entries(data)) {
      const messages = toMessageList(value);

      if (messages.length > 0) {
        fields[key] = messages;
      }
    }

    const detail = data.detail || data.non_field_errors;
    const detailMessages = toMessageList(detail);
    if (detailMessages.length > 0) {
      message = detailMessages.join(" ");
    } else if (Object.keys(fields).length > 0) {
      message = "Формадагы маалыматтарды текшериңиз.";
    }
  } else if (typeof data === "string") {
    message = data;
  } else if (error.message) {
    message = error.message;
  }

  if (status === 429) {
    message = "Өтө көп сурам жөнөтүлдү. Бир аздан кийин кайталап көрүңүз.";
  }

  if (status && status >= 500) {
    message = "Сервер убактылуу жеткиликсиз.";
  }

  return { message, status, fields };
}
