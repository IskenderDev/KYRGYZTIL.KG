import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoadingState } from "../components/common/LoadingState";
import { Layout } from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const NewsListPage = lazy(() => import("../pages/NewsListPage"));
const NewsDetailPage = lazy(() => import("../pages/NewsDetailPage"));
const LessonsListPage = lazy(() => import("../pages/LessonsListPage"));
const LessonDetailPage = lazy(() => import("../pages/LessonDetailPage"));
const NewspapersListPage = lazy(() => import("../pages/NewspapersListPage"));
const NewspaperDetailPage = lazy(() => import("../pages/NewspaperDetailPage"));
const MediaPage = lazy(() => import("../pages/MediaPage"));
const PodcastsListPage = lazy(() => import("../pages/PodcastsListPage"));
const PodcastDetailPage = lazy(() => import("../pages/PodcastDetailPage"));
const VideosListPage = lazy(() => import("../pages/VideosListPage"));
const VideoDetailPage = lazy(() => import("../pages/VideoDetailPage"));
const PartnersPage = lazy(() => import("../pages/PartnersPage"));
const StaticPageRoute = lazy(() => import("../pages/StaticPageRoute"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export function AppRouter() {
  return (
    <Suspense fallback={<LoadingState variant="page" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="newspapers" element={<NewspapersListPage />} />
          <Route path="newspapers/:slug" element={<NewspaperDetailPage />} />
          <Route path="learn" element={<LessonsListPage />} />
          <Route path="learn/:slug" element={<LessonDetailPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="podcasts" element={<PodcastsListPage />} />
          <Route path="podcasts/:slug" element={<PodcastDetailPage />} />
          <Route path="videos" element={<VideosListPage />} />
          <Route path="videos/:slug" element={<VideoDetailPage />} />
          <Route path="news" element={<NewsListPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route
            path="language-policy"
            element={<StaticPageRoute slug="language-policy" fallbackTitle="Тил саясаты" />}
          />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="about" element={<StaticPageRoute slug="about" fallbackTitle="Биз жөнүндө" />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
