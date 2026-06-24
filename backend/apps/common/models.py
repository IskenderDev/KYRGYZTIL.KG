from django.db import models
from django.utils import timezone


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)
    updated_at = models.DateTimeField("Дата обновления", auto_now=True)

    class Meta:
        abstract = True


class PublishableModel(TimeStampedModel):
    title = models.CharField("Заголовок", max_length=255)
    slug = models.SlugField("Slug", max_length=255, unique=True)
    is_published = models.BooleanField("Опубликовано", default=False)
    published_at = models.DateTimeField("Дата публикации", null=True, blank=True)

    class Meta:
        abstract = True
        ordering = ["-published_at", "-created_at"]

    def save(self, *args, **kwargs):
        if self.is_published and self.published_at is None:
            self.published_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
