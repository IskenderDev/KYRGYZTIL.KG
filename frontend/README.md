# KYRGYZTIL.KG Frontend

React + TypeScript frontend для портала KYRGYZTIL.KG.

## Стек

- Vite
- React Router
- Tailwind CSS
- Axios
- TanStack Query
- React Hook Form + Zod
- DOMPurify
- Lucide React
- react-helmet-async

## Локальный запуск

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend: http://localhost:5173

По умолчанию Vite проксирует:

- `/api` -> `http://localhost:8000`
- `/django-media/...` -> `http://localhost:8000/media/...`

Если backend запущен на другом адресе, измените `VITE_PROXY_TARGET` в `.env`.
Для production можно выставить `VITE_MEDIA_BASE_URL=/media`, если frontend и backend обслуживаются с одного домена.

## Production build

```bash
cd frontend
npm run lint
npm run typecheck
npm run build
```

Сборка создаётся в `frontend/dist/`.

## Реальные backend endpoint

Frontend подключён к фактическим endpoint Django REST Framework:

- `GET /api/v1/news/`
- `GET /api/v1/news/:slug/`
- `GET /api/v1/newspapers/`
- `GET /api/v1/newspapers/:slug/`
- `GET /api/v1/education/`
- `GET /api/v1/education/:slug/`
- `GET /api/v1/media/podcasts/`
- `GET /api/v1/media/podcasts/:slug/`
- `GET /api/v1/media/video-surveys/`
- `GET /api/v1/media/video-surveys/:slug/`
- `GET /api/v1/partners/`
- `GET /api/v1/pages/`
- `GET /api/v1/pages/:slug/`
- `POST /api/v1/contacts/`
- `POST /api/v1/subscriptions/`

Swagger доступен на `http://localhost:8000/api/docs/`.
Health check backend доступен на `http://localhost:8000/api/health/`.

## Маршруты frontend

- `/`
- `/newspapers`
- `/newspapers/:slug`
- `/learn`
- `/learn/:slug`
- `/media`
- `/podcasts`
- `/podcasts/:slug`
- `/videos`
- `/videos/:slug`
- `/news`
- `/news/:slug`
- `/language-policy`
- `/partners`
- `/about`
- `/contact`
- `/404`

## Особенности интеграции

- Для главной страницы отдельного `/api/v1/home/` в backend нет, поэтому используются параллельные запросы к существующим публичным спискам.
- Предварительный endpoint `/api/v1/lessons/` отсутствует; учебные материалы находятся в `/api/v1/education/`.
- Предварительный endpoint `/api/v1/contact-requests/` отсутствует; форма отправляется в `/api/v1/contacts/`.
- Backend не содержит категорий новостей, поэтому фильтр категорий не отображается.
- Backend contact model требует `email`; frontend валидирует email как обязательное поле.
- Статичные страницы открываются по slug из `/api/v1/pages/:slug/`. Если slug ещё не опубликован, показывается нейтральное empty state.
