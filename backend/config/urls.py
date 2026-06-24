from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView


def health_check(request):
    return JsonResponse({"status": "ok", "service": "kyrgyztil-backend"})


api_patterns = [
    path("news/", include("apps.news.urls")),
    path("newspapers/", include("apps.newspapers.urls")),
    path("education/", include("apps.education.urls")),
    path("media/", include("apps.media_content.urls")),
    path("partners/", include("apps.partners.urls")),
    path("pages/", include("apps.pages.urls")),
    path("contacts/", include("apps.contacts.urls")),
    path("subscriptions/", include("apps.subscriptions.urls")),
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health_check, name="health-check"),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
    path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
    path("api/v1/", include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
