from django.conf import settings
from django.core.mail import send_mail
from rest_framework import serializers

from .models import EmailSubscription


class EmailSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubscription
        fields = ["id", "email", "is_active", "created_at", "updated_at"]
        read_only_fields = ["id", "is_active", "created_at", "updated_at"]

    def validate_email(self, value):
        normalized = value.lower()
        if EmailSubscription.objects.filter(email=normalized, is_active=True).exists():
            raise serializers.ValidationError("Этот email уже подписан.")
        return normalized

    def create(self, validated_data):
        instance, _ = EmailSubscription.objects.update_or_create(
            email=validated_data["email"],
            defaults={"is_active": True},
        )
        send_mail(
            subject="Новая подписка KYRGYZTIL.KG",
            message=f"Новый подписчик: {instance.email}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=True,
        )
        return instance
