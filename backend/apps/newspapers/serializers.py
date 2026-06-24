from rest_framework import serializers

from .models import NewspaperIssue


class NewspaperIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewspaperIssue
        fields = [
            "id",
            "title",
            "slug",
            "issue_number",
            "description",
            "cover_image",
            "pdf_file",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["created_at", "updated_at"]
