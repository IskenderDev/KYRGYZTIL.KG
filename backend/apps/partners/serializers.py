from rest_framework import serializers

from .models import Partner


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = [
            "id",
            "name",
            "description",
            "website_url",
            "logo",
            "is_active",
            "ordering",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
