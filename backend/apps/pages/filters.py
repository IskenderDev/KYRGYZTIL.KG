import django_filters

from .models import StaticPage


class StaticPageFilter(django_filters.FilterSet):
    class Meta:
        model = StaticPage
        fields = ["is_published"]
