# KYRGYZTIL.KG Backend

Django REST API для информационно-образовательного портала KYRGYZTIL.KG.

## Что уже подключено

- Django + Django REST Framework
- Swagger/OpenAPI через `drf-spectacular`
- CORS для будущего React frontend
- разделение настроек на `base`, `development`, `production`
- SQLite для локальной разработки без Docker
- PostgreSQL через `DATABASE_URL`
- загрузка media/static
- Django Admin
- health endpoint
- приложения: новости, газета, образование, медиа, партнёры, страницы, обратная связь, подписки

## Локальный запуск без Docker

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements/development.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Админка: http://127.0.0.1:8000/admin/

Swagger: http://127.0.0.1:8000/api/docs/

OpenAPI schema: http://127.0.0.1:8000/api/schema/

Health check: http://127.0.0.1:8000/api/health/

## Локальный запуск через Docker

```bash
cd backend
cp .env.example .env
docker compose up --build
```

В другом терминале:

```bash
docker compose exec backend python manage.py migrate
docker compose exec backend python manage.py createsuperuser
```

При запуске через этот compose также поднимается frontend:

Frontend: http://localhost:5173

## Основные API endpoints

- `GET /api/v1/news/`
- `GET /api/v1/newspapers/`
- `GET /api/v1/education/`
- `GET /api/v1/media/podcasts/`
- `GET /api/v1/media/video-surveys/`
- `GET /api/v1/partners/`
- `GET /api/v1/pages/`
- `POST /api/v1/contacts/`
- `POST /api/v1/subscriptions/`

Публичные списки показывают только опубликованные или активные материалы. Staff-пользователи видят полный список через API и Django Admin.
