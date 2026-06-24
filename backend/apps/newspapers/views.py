from apps.common.viewsets import PublishedModelViewSet

from .filters import NewspaperIssueFilter
from .models import NewspaperIssue
from .serializers import NewspaperIssueSerializer


class NewspaperIssueViewSet(PublishedModelViewSet):
    queryset = NewspaperIssue.objects.all()
    serializer_class = NewspaperIssueSerializer
    filterset_class = NewspaperIssueFilter
    search_fields = ["title", "description"]
    ordering_fields = ["issue_number", "published_at", "created_at"]
