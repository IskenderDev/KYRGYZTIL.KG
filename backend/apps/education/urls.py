from rest_framework.routers import DefaultRouter

from .views import EducationalMaterialViewSet


router = DefaultRouter()
router.register("", EducationalMaterialViewSet, basename="education")

urlpatterns = router.urls
