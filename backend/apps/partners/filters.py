import django_filters

from .models import Partner


class PartnerFilter(django_filters.FilterSet):
    class Meta:
        model = Partner
        fields = ["is_active"]
