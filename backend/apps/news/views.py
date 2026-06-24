from apps.common.viewsets import PublishedModelViewSet

from .filters import NewsFilter
from .models import News
from .serializers import NewsSerializer


class NewsViewSet(PublishedModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    filterset_class = NewsFilter
    search_fields = ["title", "excerpt", "content"]
    ordering_fields = ["published_at", "created_at", "title"]
