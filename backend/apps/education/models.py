from django.db import models

from apps.common.models import PublishableModel


class EducationalMaterial(PublishableModel):
    class MaterialType(models.TextChoices):
        ARTICLE = "article", "Статья"
        LESSON = "lesson", "Урок"
        METHODICAL = "methodical", "Методический материал"

    material_type = models.CharField("Тип", max_length=32, choices=MaterialType.choices)
    excerpt = models.TextField("Краткое описание", blank=True)
    content = models.TextField("Контент")
    cover_image = models.ImageField("Обложка", upload_to="education/", blank=True, null=True)
    attachment = models.FileField("Файл", upload_to="education/files/", blank=True, null=True)

    class Meta(PublishableModel.Meta):
        verbose_name = "Образовательный материал"
        verbose_name_plural = "Образовательные материалы"
