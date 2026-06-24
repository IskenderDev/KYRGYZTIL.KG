export function formatDate(value?: string | null) {
  if (!value) {
    return "Дата көрсөтүлгөн эмес";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Дата көрсөтүлгөн эмес";
  }

  return new Intl.DateTimeFormat("ky-KG", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}
