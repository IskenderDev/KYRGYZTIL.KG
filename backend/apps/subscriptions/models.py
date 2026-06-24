from django.db import models

from apps.common.models import TimeStampedModel


class EmailSubscription(TimeStampedModel):
    email = models.EmailField("Email", unique=True)
    is_active = models.BooleanField("Активна", default=True)

    class Meta:
        verbose_name = "Email-подписка"
        verbose_name_plural = "Email-подписки"
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return self.email
