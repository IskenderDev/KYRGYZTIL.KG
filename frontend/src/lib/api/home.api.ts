import { getLessons } from "./lessons.api";
import { getNews } from "./news.api";
import { getNewspapers } from "./newspapers.api";
import { getPartners } from "./partners.api";
import { getPodcasts } from "./podcasts.api";
import { getSurveyVideos } from "./surveyVideos.api";
import { mockHomeSummary } from "./home.mock";
import type { HomeSummary } from "../../types/content";

export const homeKeys = {
  all: ["home"] as const,
  summary: () => [...homeKeys.all, "summary"] as const
};

export async function getHomeSummary(): Promise<HomeSummary> {
  try {
    const [news, newspapers, lessons, podcasts, videos, partners] = await Promise.all([
      getNews({ page_size: 4, ordering: "-published_at" }),
      getNewspapers({ page_size: 1, ordering: "-issue_number" }),
      getLessons({ page_size: 4, ordering: "-published_at" }),
      getPodcasts({ page_size: 1, ordering: "-published_at" }),
      getSurveyVideos({ page_size: 1, ordering: "-published_at" }),
      getPartners({ page_size: 6, ordering: "ordering" })
    ]);

    return {
      news: news.results,
      newspapers: newspapers.results,
      lessons: lessons.results,
      podcasts: podcasts.results,
      videos: videos.results,
      partners: partners.results
    };
  } catch {
    return mockHomeSummary;
  }
}
