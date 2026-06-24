from rest_framework import serializers

from .models import StaticPage


class StaticPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaticPage
        fields = [
            "id",
            "title",
            "slug",
            "content",
            "meta_title",
            "meta_description",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
