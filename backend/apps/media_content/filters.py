import django_filters

from .models import Podcast, VideoSurvey


class PodcastFilter(django_filters.FilterSet):
    class Meta:
        model = Podcast
        fields = ["is_published"]


class VideoSurveyFilter(django_filters.FilterSet):
    class Meta:
        model = VideoSurvey
        fields = ["is_published"]
