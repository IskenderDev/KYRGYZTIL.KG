from rest_framework.routers import DefaultRouter

from .views import EmailSubscriptionViewSet


router = DefaultRouter()
router.register("", EmailSubscriptionViewSet, basename="subscriptions")

urlpatterns = router.urls
