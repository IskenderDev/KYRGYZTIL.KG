import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Headphones,
  MessageCircle,
  Newspaper,
  PlayCircle,
  SearchCheck,
  Video
} from "lucide-react";
import { Link } from "react-router-dom";

import { ButtonLink } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { EmptyState } from "../components/common/EmptyState";
import { ErrorState } from "../components/common/ErrorState";
import { LoadingState } from "../components/common/LoadingState";
import { Section } from "../components/common/Section";
import { Seo } from "../components/common/Seo";
import { LessonCard } from "../components/cards/LessonCard";
import { NewsCard } from "../components/cards/NewsCard";
import { NewspaperCard } from "../components/cards/NewspaperCard";
import { PodcastCard } from "../components/cards/PodcastCard";
import { VideoCard } from "../components/cards/VideoCard";
import { NewsletterForm } from "../components/forms/NewsletterForm";
import { HomeHeroVisual } from "../features/home/components/HomeHeroVisual";
import { homeKeys, getHomeSummary } from "../lib/api/home.api";

const quickLinks = [
  {
    title: "Окуу борбору",
    description: "Сабактар, макалалар жана методикалык материалдар.",
    href: "/learn",
    icon: GraduationCap,
    image: "/images/illustrations/learn.svg",
    action: "Сабактарды көрүү",
    tone: "bg-brand"
  },
  {
    title: "Кыргыз тили гезити",
    description: "Чыгарылыштарды окуп, PDF катары жүктөп алыңыз.",
    href: "/newspapers",
    icon: Newspaper,
    image: "/images/illustrations/newspaper.svg",
    action: "Газетаны ачуу",
    tone: "bg-accent-red"
  },
  {
    title: "Медиа",
    description: "Подкаст, видео жана сурамжылоолор аркылуу үйрөнүңүз.",
    href: "/media",
    icon: Video,
    image: "/images/illustrations/media.svg",
    action: "Медианы көрүү",
    tone: "bg-ink"
  },
  {
    title: "Байланыш",
    description: "Суроо, сунуш же кайрылууңузду тез жөнөтүңүз.",
    href: "/contact",
    icon: MessageCircle,
    image: "/images/illustrations/contact.svg",
    action: "Кайрылуу жазуу",
    tone: "bg-accent-sky"
  }
];

const learningSteps = [
  {
    title: "Издеңиз",
    text: "Керектүү теманы жаңылыктардан же окуу материалдарынан табыңыз.",
    icon: SearchCheck
  },
  {
    title: "Окуңуз",
    text: "Макала, сабак же методикалык материалды ыңгайлуу форматта окуңуз.",
    icon: BookOpen
  },
  {
    title: "Угуңуз",
    text: "Подкаст жана медиа аркылуу тил темасын жеңил кабыл алыңыз.",
    icon: Headphones
  },
  {
    title: "Сактаңыз",
    text: "Газета чыгарылыштарын жана тиркемелерди PDF катары ачыңыз.",
    icon: FileText
  }
];

export default function HomePage() {
  const query = useQuery({
    queryKey: homeKeys.summary(),
    queryFn: getHomeSummary
  });

  if (query.isLoading) {
    return <LoadingState variant="page" />;
  }

  if (query.isError) {
    return (
      <Container className="py-10">
        <ErrorState onRetry={() => void query.refetch()} />
      </Container>
    );
  }

  if (!query.data) {
    return (
      <Container className="py-10">
        <ErrorState onRetry={() => void query.refetch()} />
      </Container>
    );
  }

  const summary = query.data;
  const news = Array.isArray(summary.news) ? summary.news : [];
  const newspapers = Array.isArray(summary.newspapers) ? summary.newspapers : [];
  const lessons = Array.isArray(summary.lessons) ? summary.lessons : [];
  const podcasts = Array.isArray(summary.podcasts) ? summary.podcasts : [];
  const videos = Array.isArray(summary.videos) ? summary.videos : [];
  const newspaper = newspapers[0];
  const podcast = podcasts[0];
  const video = videos[0];

  return (
    <>
      <Seo
        title="KYRGYZTIL.KG"
        description="Кыргыз тили боюнча жаңылыктар, билим берүү материалдары, медиа жана гезит бирдиктүү платформада."
      />
      <section className="overflow-hidden border-b border-border bg-white">
        <Container className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-extrabold text-brand">
              <GraduationCap aria-hidden className="h-4 w-4" />
              Кыргыз тилин үйрөнүү үчүн бирдиктүү сервис
            </p>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-[56px]">
              Окуу, жаңылык, медиа жана газета — баары түшүнүктүү бир жерде
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
              KYRGYZTIL.KG кыргыз тили боюнча материалдарды тез табууга, окууга, угууга жана колдонууга жардам берет. Башташыңыз үчүн негизги бөлүмдөр дароо көрүнүп турат.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink to="/learn" size="lg" icon={<BookOpen aria-hidden className="h-5 w-5" />}>
                Окууну баштоо
              </ButtonLink>
              <ButtonLink to="/media" variant="secondary" size="lg" icon={<PlayCircle aria-hidden className="h-5 w-5" />}>
                Медиа көрүү
              </ButtonLink>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-lg border border-border bg-white p-3 sm:p-4">
                <p className="text-xl font-extrabold text-brand sm:text-2xl">4</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-ink-soft sm:text-sm">бөлүм</p>
              </div>
              <div className="rounded-lg border border-border bg-white p-3 sm:p-4">
                <p className="text-xl font-extrabold text-accent-red sm:text-2xl">PDF</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-ink-soft sm:text-sm">газета</p>
              </div>
              <div className="rounded-lg border border-border bg-white p-3 sm:p-4">
                <p className="text-xl font-extrabold text-accent-sky sm:text-2xl">Media</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-ink-soft sm:text-sm">видео</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <HomeHeroVisual />
          </div>
        </Container>
      </section>

      <Section className="py-10 sm:py-14">
        <Container>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase text-brand">Каяктан баштайсыз?</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">Негизги бөлүмдөр</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink-soft">
              Ар бир бөлүм өз милдетин аткарат: окуу, жаңылык, медиа же байланыш.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  className="focus-ring group overflow-hidden rounded-lg border border-border bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-menu"
                  key={item.href}
                  to={item.href}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                    <img src={item.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" decoding="async" />
                    <span className={`absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-lg ${item.tone} text-white shadow-menu`}>
                      <Icon aria-hidden className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex min-h-48 flex-col p-5">
                    <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{item.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-brand">
                      {item.action}
                      <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section muted className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase text-brand">Жөнөкөй жол</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">Портал кандай иштейт?</h2>
              <p className="mt-3 text-sm leading-6 text-ink-soft">
                Максат — колдонуучу биринчи киргенде эле кайсы бөлүмгө өтөрүн түшүнүшү керек.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {learningSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="rounded-lg border border-border bg-white p-5" key={step.title}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-extrabold text-accent-red">0{index + 1}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-light text-brand">
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-brand">Жаңылыктар</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Акыркы жарыяланган материалдар</h2>
            </div>
            <ButtonLink to="/news" variant="secondary">
              Баарын көрүү
            </ButtonLink>
          </div>
          {news.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <NewsCard item={news[0]} featured />
              <div className="grid gap-5">
                {news.slice(1, 4).map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <EmptyState />
          )}
        </Container>
      </Section>

      <Section muted>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-ink">Медиа</h2>
                <ButtonLink to="/media" variant="secondary" size="sm">
                  Баруу
                </ButtonLink>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {podcast ? <PodcastCard item={podcast} /> : <EmptyState title="Подкаст жок." />}
                {video ? <VideoCard item={video} /> : <EmptyState title="Видео жок." />}
              </div>
            </div>
            <div>
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-3xl font-bold text-ink">Газета</h2>
                <ButtonLink to="/newspapers" variant="secondary" size="sm">
                  Чыгарылыштар
                </ButtonLink>
              </div>
              {newspaper ? <NewspaperCard item={newspaper} /> : <EmptyState title="Газета чыгарылыштары жок." />}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-brand">Окуу борбору</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Тандалган окуу материалдары</h2>
            </div>
            <ButtonLink to="/learn" variant="secondary">
              Бардык материалдар
            </ButtonLink>
          </div>
          {lessons.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {lessons.map((item) => (
                <LessonCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </Container>
      </Section>

      <Section muted>
        <Container className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-brand">Кабардар болуу</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">Жаңы материалдар боюнча билдирме алыңыз</h2>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Жаңылыктар жана окуу материалдары боюнча кыска билдирмелерди email аркылуу алыңыз.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </Section>
    </>
  );
}
