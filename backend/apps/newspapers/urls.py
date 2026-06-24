from rest_framework.routers import DefaultRouter

from .views import NewspaperIssueViewSet


router = DefaultRouter()
router.register("", NewspaperIssueViewSet, basename="newspapers")

urlpatterns = router.urls
