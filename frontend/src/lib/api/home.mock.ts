import type { HomeSummary } from "../../types/content";

const now = "2026-01-15T09:00:00+06:00";

export const mockHomeSummary: HomeSummary = {
  news: [
    {
      id: 9001,
      title: "Кыргыз тили боюнча жаңы окуу материалдары жарыяланды",
      slug: "demo-news-learning-materials",
      excerpt:
        "Порталда мектеп окуучулары, мугалимдер жана өз алдынча окугандар үчүн түшүнүктүү материалдардын демо жыйнагы көрсөтүлөт.",
      content: "",
      cover_image: null,
      is_published: true,
      published_at: "2026-01-15T09:00:00+06:00",
      created_at: now,
      updated_at: now
    },
    // {
    //   id: 9002,
    //   title: "Тил маданиятын өнүктүрүү боюнча демилгелер",
    //   slug: "demo-news-language-culture",
    //   excerpt:
    //     "Коомдук иш-чаралар, маектер жана тилди күнүмдүк колдонуу боюнча сунуштар бир платформада топтолот.",
    //   content: "",
    //   cover_image: null,
    //   is_published: true,
    //   published_at: "2026-01-12T10:30:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // },
    // {
    //   id: 9003,
    //   title: "Мугалимдер үчүн методикалык колдоо",
    //   slug: "demo-news-teacher-support",
    //   excerpt:
    //     "Сабак планы, көнүгүүлөр жана класста колдонууга ылайыктуу мисалдар демо режимде көрсөтүлөт.",
    //   content: "",
    //   cover_image: null,
    //   is_published: true,
    //   published_at: "2026-01-09T14:15:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // },
    // {
    //   id: 9004,
    //   title: "Медиа бөлүмүндө подкаст жана видео үлгүлөрү",
    //   slug: "demo-news-media-examples",
    //   excerpt:
    //     "Колдонуучу backend иштебей турган учурда да порталдын негизги көрүнүшүн алдын ала көрө алат.",
    //   content: "",
    //   cover_image: null,
    //   is_published: true,
    //   published_at: "2026-01-05T11:00:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // }
  ],
  newspapers: [
    {
      id: 9101,
      title: "Кыргыз тили гезити. Демо чыгарылыш",
      slug: "demo-newspaper-issue",
      issue_number: 128,
      description:
        "Гезит карточкасынын көрүнүшүн текшерүү үчүн кошулган демо чыгарылыш.",
      cover_image: null,
      pdf_file: "",
      is_published: true,
      published_at: "2026-01-10T09:00:00+06:00",
      created_at: now,
      updated_at: now
    }
  ],
  lessons: [
    {
      id: 9201,
      title: "Күнүмдүк сүйлөшүүдөгү туура сөз айкаштары",
      slug: "demo-lesson-daily-phrases",
      material_type: "lesson",
      excerpt:
        "Кыска түшүндүрмөлөр жана практикалык мисалдар аркылуу сүйлөө көндүмүн бекемдөө.",
      content: "",
      cover_image: null,
      attachment: null,
      is_published: true,
      published_at: "2026-01-14T08:30:00+06:00",
      created_at: now,
      updated_at: now
    },
    // {
    //   id: 9202,
    //   title: "Орфография: көп колдонулган эрежелер",
    //   slug: "demo-lesson-orthography",
    //   material_type: "article",
    //   excerpt:
    //     "Жазууда көп кездешкен суроолорго жөнөкөй жооптор жана мисалдар.",
    //   content: "",
    //   cover_image: null,
    //   attachment: null,
    //   is_published: true,
    //   published_at: "2026-01-11T12:00:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // },
    // {
    //   id: 9203,
    //   title: "Сабакта колдонулуучу интерактивдүү тапшырмалар",
    //   slug: "demo-lesson-classroom-tasks",
    //   material_type: "methodical",
    //   excerpt:
    //     "Мугалимдер үчүн окуучуларды активдүү катыштырууга жардам берген тапшырмалар.",
    //   content: "",
    //   cover_image: null,
    //   attachment: null,
    //   is_published: true,
    //   published_at: "2026-01-08T15:00:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // },
    // {
    //   id: 9204,
    //   title: "Окуу текстин талдоо ыкмалары",
    //   slug: "demo-lesson-reading-analysis",
    //   material_type: "lesson",
    //   excerpt:
    //     "Текст менен иштөө, негизги ойду табуу жана суроо түзүү боюнча демо материал.",
    //   content: "",
    //   cover_image: null,
    //   attachment: null,
    //   is_published: true,
    //   published_at: "2026-01-06T10:45:00+06:00",
    //   created_at: now,
    //   updated_at: now
    // }
  ],
  podcasts: [
    {
      id: 9301,
      title: "Кыргыз тилин үйрөнүүнү кантип адатка айлантабыз?",
      slug: "demo-podcast-learning-habit",
      description:
        "Кыска подкаст карточкасынын үлгүсү: мотивация, практика жана күнүмдүк тил чөйрөсү.",
      audio_url: "",
      audio_file: null,
      cover_image: null,
      is_published: true,
      published_at: "2026-01-13T16:00:00+06:00",
      created_at: now,
      updated_at: now
    }
  ],
  videos: [
    {
      id: 9401,
      title: "Кыска видео: сөз байлыгын кеңейтүү",
      slug: "demo-video-vocabulary",
      description:
        "Видео бөлүмүнүн карточкасы backend жок учурда да кандай көрүнөрүн көрсөтөт.",
      video_url: "",
      thumbnail: null,
      is_published: true,
      published_at: "2026-01-13T18:00:00+06:00",
      created_at: now,
      updated_at: now
    }
  ],
  partners: []
};
