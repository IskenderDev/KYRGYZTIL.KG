from django.db import models

from apps.common.models import PublishableModel


class News(PublishableModel):
    excerpt = models.TextField("Краткое описание", blank=True)
    content = models.TextField("Текст")
    cover_image = models.ImageField("Обложка", upload_to="news/", blank=True, null=True)

    class Meta(PublishableModel.Meta):
        verbose_name = "Новость"
        verbose_name_plural = "Новости"
