# KYRGYZTIL.KG

Проект разделён на две зоны:

- `backend/` — Django REST API, Django Admin, Swagger/OpenAPI.
- `frontend/` — React + TypeScript приложение на Vite.

## Локальный запуск без Docker

Backend:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements/development.txt
DJANGO_SETTINGS_MODULE=config.settings.development python manage.py migrate
DJANGO_SETTINGS_MODULE=config.settings.development python manage.py runserver
```

Frontend:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Адреса:

- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Swagger: http://localhost:8000/api/docs/
- Django Admin: http://localhost:8000/admin/
- Health check: http://localhost:8000/api/health/

## Запуск через Docker Compose

```bash
cd backend
cp .env.example .env
docker compose up --build
```

После первого запуска примените миграции:

```bash
docker compose exec backend python manage.py migrate
```

Frontend будет доступен на http://localhost:5173.

## Проверки

Backend:

```bash
cd backend
DJANGO_SETTINGS_MODULE=config.settings.development python manage.py check
DJANGO_SETTINGS_MODULE=config.settings.development python manage.py migrate
DJANGO_SETTINGS_MODULE=config.settings.development python manage.py test
```

Frontend:

```bash
cd frontend
npm run lint
npm run typecheck
npm run build
```

Подробности по backend находятся в `backend/README.md`, по frontend — в `frontend/README.md`.
