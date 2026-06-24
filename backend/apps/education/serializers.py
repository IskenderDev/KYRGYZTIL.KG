from rest_framework import serializers

from .models import EducationalMaterial


class EducationalMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationalMaterial
        fields = [
            "id",
            "title",
            "slug",
            "material_type",
            "excerpt",
            "content",
            "cover_image",
            "attachment",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
