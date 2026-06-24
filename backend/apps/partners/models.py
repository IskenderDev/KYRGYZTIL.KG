from django.db import models

from apps.common.models import TimeStampedModel


class Partner(TimeStampedModel):
    name = models.CharField("Название", max_length=255)
    description = models.TextField("Описание", blank=True)
    website_url = models.URLField("Сайт", blank=True)
    logo = models.ImageField("Логотип", upload_to="partners/", blank=True, null=True)
    is_active = models.BooleanField("Активен", default=True)
    ordering = models.PositiveIntegerField("Порядок", default=0)

    class Meta:
        verbose_name = "Партнёр"
        verbose_name_plural = "Партнёры"
        ordering = ["ordering", "name"]

    def __str__(self) -> str:
        return self.name
