import { Download, ExternalLink } from "lucide-react";
import { ButtonLink } from "../common/Button";
import { resolveMediaUrl } from "../../lib/api/helpers";
interface PdfViewerProps {
  file: string | null;
  title: string;
}
export function PdfViewer({ file, title }: PdfViewerProps) {
  const url = file ? resolveMediaUrl(file) : null;
  return (
    <div className="rounded-lg border border-border bg-white">
      <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-ink">PDF</h2>
        {url && (
          <div className="flex flex-wrap gap-2">
            <ButtonLink
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<ExternalLink aria-hidden className="h-4 w-4" />}
            >
              Ачуу
            </ButtonLink>
            <ButtonLink
              to={url}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Download aria-hidden className="h-4 w-4" />}
            >
              PDF жүктөө
            </ButtonLink>
          </div>
        )}
      </div>
      {url ? (
        <>
          <object
            aria-label={`${title} PDF`}
            className={`hidden w-full md:block ${url ? "h-[760px]" : "h-auto"}`}
            data={url}
            type="application/pdf"
          >
            <div className="p-5 text-sm text-ink-soft">
              Бул браузер PDF көрүүнү колдобойт. Файлды жүктөп же жаңы өтмөктө ачыңыз.
            </div>
          </object>
          <div className="p-5 text-sm text-ink-soft md:hidden">
            Мобилдик түзмөктө PDF жаңы өтмөктө же жүктөө аркылуу ыңгайлуу ачылат.
          </div>
        </>
      ) : (
        <div className="p-5 text-sm text-ink-soft">
          PDF файл азырынча жеткиликтүү эмес.
        </div>
      )}
    </div>
  );
} 