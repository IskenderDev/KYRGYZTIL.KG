from django.db import models

from apps.common.models import PublishableModel


class Podcast(PublishableModel):
    description = models.TextField("Описание", blank=True)
    audio_url = models.URLField("Ссылка на аудио", blank=True)
    audio_file = models.FileField("Аудиофайл", upload_to="podcasts/", blank=True, null=True)
    cover_image = models.ImageField("Обложка", upload_to="podcasts/covers/", blank=True, null=True)

    class Meta(PublishableModel.Meta):
        verbose_name = "Подкаст"
        verbose_name_plural = "Подкасты"


class VideoSurvey(PublishableModel):
    description = models.TextField("Описание", blank=True)
    video_url = models.URLField("Ссылка на видео")
    thumbnail = models.ImageField("Превью", upload_to="video_surveys/", blank=True, null=True)

    class Meta(PublishableModel.Meta):
        verbose_name = "Видеоопрос"
        verbose_name_plural = "Видеоопросы"
