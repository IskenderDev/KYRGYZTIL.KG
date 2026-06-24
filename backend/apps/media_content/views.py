from apps.common.viewsets import PublishedModelViewSet

from .filters import PodcastFilter, VideoSurveyFilter
from .models import Podcast, VideoSurvey
from .serializers import PodcastSerializer, VideoSurveySerializer


class PodcastViewSet(PublishedModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
    filterset_class = PodcastFilter
    search_fields = ["title", "description"]
    ordering_fields = ["published_at", "created_at", "title"]


class VideoSurveyViewSet(PublishedModelViewSet):
    queryset = VideoSurvey.objects.all()
    serializer_class = VideoSurveySerializer
    filterset_class = VideoSurveyFilter
    search_fields = ["title", "description"]
    ordering_fields = ["published_at", "created_at", "title"]
