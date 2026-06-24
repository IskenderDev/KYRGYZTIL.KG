import DOMPurify from "dompurify";

interface RichTextRendererProps {
  content?: string | null;
  className?: string;
}

function plainTextToHtml(content: string) {
  return content
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
  if (!content) {
    return null;
  }

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(content);
  const html = DOMPurify.sanitize(hasHtml ? content : plainTextToHtml(content));

  return <div className={className || "rich-text"} dangerouslySetInnerHTML={{ __html: html }} />;
}
