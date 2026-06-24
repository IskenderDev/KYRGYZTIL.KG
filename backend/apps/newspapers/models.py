from django.db import models

from apps.common.models import PublishableModel


class NewspaperIssue(PublishableModel):
    issue_number = models.PositiveIntegerField("Номер выпуска")
    description = models.TextField("Описание", blank=True)
    cover_image = models.ImageField("Обложка", upload_to="newspapers/covers/", blank=True, null=True)
    pdf_file = models.FileField("PDF", upload_to="newspapers/pdf/")

    class Meta(PublishableModel.Meta):
        verbose_name = "Выпуск газеты"
        verbose_name_plural = "Выпуски газеты"
        ordering = ["-issue_number", "-published_at"]
