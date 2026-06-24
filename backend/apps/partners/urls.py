from rest_framework.routers import DefaultRouter

from .views import PartnerViewSet


router = DefaultRouter()
router.register("", PartnerViewSet, basename="partners")

urlpatterns = router.urls
