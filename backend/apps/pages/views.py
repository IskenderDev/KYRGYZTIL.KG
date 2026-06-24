from apps.common.viewsets import PublishedModelViewSet

from .filters import StaticPageFilter
from .models import StaticPage
from .serializers import StaticPageSerializer


class StaticPageViewSet(PublishedModelViewSet):
    queryset = StaticPage.objects.all()
    serializer_class = StaticPageSerializer
    filterset_class = StaticPageFilter
    search_fields = ["title", "content"]
    ordering_fields = ["published_at", "created_at", "title"]
