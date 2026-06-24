import django_filters

from .models import EmailSubscription


class EmailSubscriptionFilter(django_filters.FilterSet):
    class Meta:
        model = EmailSubscription
        fields = ["is_active"]
