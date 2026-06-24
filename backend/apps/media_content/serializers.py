from rest_framework import serializers

from .models import Podcast, VideoSurvey


class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcast
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "audio_url",
            "audio_file",
            "cover_image",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]


class VideoSurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoSurvey
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "video_url",
            "thumbnail",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
