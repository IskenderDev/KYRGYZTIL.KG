from rest_framework.routers import DefaultRouter

from .views import ContactRequestViewSet


router = DefaultRouter()
router.register("", ContactRequestViewSet, basename="contacts")

urlpatterns = router.urls
