from django.db import models

from apps.common.models import PublishableModel


class StaticPage(PublishableModel):
    content = models.TextField("Контент")
    meta_title = models.CharField("SEO title", max_length=255, blank=True)
    meta_description = models.TextField("SEO description", blank=True)

    class Meta(PublishableModel.Meta):
        verbose_name = "Страница"
        verbose_name_plural = "Страницы"
