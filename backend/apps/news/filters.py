import django_filters

from .models import News


class NewsFilter(django_filters.FilterSet):
    published_after = django_filters.DateTimeFilter(field_name="published_at", lookup_expr="gte")
    published_before = django_filters.DateTimeFilter(field_name="published_at", lookup_expr="lte")

    class Meta:
        model = News
        fields = ["is_published", "published_after", "published_before"]
