from django.conf import settings
from django.core.mail import send_mail
from rest_framework import serializers

from .models import ContactRequest


class ContactRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "subject",
            "message",
            "is_processed",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "is_processed", "created_at", "updated_at"]

    def create(self, validated_data):
        instance = super().create(validated_data)
        send_mail(
            subject=f"Новая заявка KYRGYZTIL.KG: {instance.subject or instance.name}",
            message=instance.message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=True,
        )
        return instance
