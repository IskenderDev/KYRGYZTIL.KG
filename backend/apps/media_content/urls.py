from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import PodcastViewSet, VideoSurveyViewSet


router = DefaultRouter()
router.register("podcasts", PodcastViewSet, basename="podcasts")
router.register("video-surveys", VideoSurveyViewSet, basename="video-surveys")

urlpatterns = [
    path("", include(router.urls)),
]
