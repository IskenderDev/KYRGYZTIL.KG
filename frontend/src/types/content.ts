export interface PublishableContent {
  id: number;
  title: string;
  slug: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewsItem extends PublishableContent {
  excerpt: string;
  content: string;
  cover_image: string | null;
}

export interface NewspaperIssue extends PublishableContent {
  issue_number: number;
  description: string;
  cover_image: string | null;
  pdf_file: string;
}

export type EducationalMaterialType = "article" | "lesson" | "methodical";

export interface EducationalMaterial extends PublishableContent {
  material_type: EducationalMaterialType;
  excerpt: string;
  content: string;
  cover_image: string | null;
  attachment: string | null;
}

export interface Podcast extends PublishableContent {
  description: string;
  audio_url: string;
  audio_file: string | null;
  cover_image: string | null;
}

export interface VideoSurvey extends PublishableContent {
  description: string;
  video_url: string;
  thumbnail: string | null;
}

export interface Partner {
  id: number;
  name: string;
  description: string;
  website_url: string;
  logo: string | null;
  is_active: boolean;
  ordering: number;
  created_at: string;
  updated_at: string;
}

export interface StaticPage extends PublishableContent {
  content: string;
  meta_title: string;
  meta_description: string;
}

export interface ContactRequestPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactRequest extends ContactRequestPayload {
  id: number;
  is_processed: boolean;
  created_at: string;
  updated_at: string;
}

export interface EmailSubscriptionPayload {
  email: string;
}

export interface EmailSubscription {
  id: number;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface HomeSummary {
  news: NewsItem[];
  newspapers: NewspaperIssue[];
  lessons: EducationalMaterial[];
  podcasts: Podcast[];
  videos: VideoSurvey[];
  partners: Partner[];
}
