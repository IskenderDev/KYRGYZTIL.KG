from django.db import models

from apps.common.models import TimeStampedModel


class ContactRequest(TimeStampedModel):
    name = models.CharField("Имя", max_length=255)
    email = models.EmailField("Email")
    phone = models.CharField("Телефон", max_length=64, blank=True)
    subject = models.CharField("Тема", max_length=255, blank=True)
    message = models.TextField("Сообщение")
    is_processed = models.BooleanField("Обработано", default=False)

    class Meta:
        verbose_name = "Заявка обратной связи"
        verbose_name_plural = "Заявки обратной связи"
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return f"{self.name} <{self.email}>"
