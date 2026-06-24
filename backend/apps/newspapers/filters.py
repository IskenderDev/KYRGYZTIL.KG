import django_filters

from .models import NewspaperIssue


class NewspaperIssueFilter(django_filters.FilterSet):
    issue_from = django_filters.NumberFilter(field_name="issue_number", lookup_expr="gte")
    issue_to = django_filters.NumberFilter(field_name="issue_number", lookup_expr="lte")

    class Meta:
        model = NewspaperIssue
        fields = ["is_published", "issue_from", "issue_to"]
