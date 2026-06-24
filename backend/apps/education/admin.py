from django.contrib import admin

from .models import EducationalMaterial


@admin.register(EducationalMaterial)
class EducationalMaterialAdmin(admin.ModelAdmin):
    list_display = ("title", "material_type", "is_published", "published_at")
    list_filter = ("material_type", "is_published", "published_at")
    search_fields = ("title", "excerpt", "content")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at")
