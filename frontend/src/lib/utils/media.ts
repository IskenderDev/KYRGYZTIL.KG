export interface EmbedInfo {
  provider: "youtube" | "vimeo";
  src: string;
}

export function getVideoEmbedInfo(url: string): EmbedInfo | null {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = parsed.searchParams.get("v");
      return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}` } : null;
    }

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? { provider: "youtube", src: `https://www.youtube.com/embed/${id}` } : null;
    }

    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? { provider: "vimeo", src: `https://player.vimeo.com/video/${id}` } : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function getInitials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
