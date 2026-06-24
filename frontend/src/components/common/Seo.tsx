import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function Seo({ title, description, canonicalPath }: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || "http://localhost:5173";
  const canonical = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
  const fullTitle = title === "KYRGYZTIL.KG" ? title : `${title} | KYRGYZTIL.KG`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
}
