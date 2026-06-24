from django.contrib import admin

from .models import EmailSubscription


@admin.register(EmailSubscription)
class EmailSubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "is_active", "created_at")
    list_filter = ("is_active", "created_at")
    search_fields = ("email",)
    readonly_fields = ("created_at", "updated_at")
