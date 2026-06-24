from django.contrib import admin

from .models import NewspaperIssue


@admin.register(NewspaperIssue)
class NewspaperIssueAdmin(admin.ModelAdmin):
    list_display = ("title", "issue_number", "is_published", "published_at")
    list_filter = ("is_published", "published_at")
    search_fields = ("title", "description")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at", "updated_at")
