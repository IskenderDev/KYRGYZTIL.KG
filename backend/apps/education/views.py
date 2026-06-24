from apps.common.viewsets import PublishedModelViewSet

from .filters import EducationalMaterialFilter
from .models import EducationalMaterial
from .serializers import EducationalMaterialSerializer


class EducationalMaterialViewSet(PublishedModelViewSet):
    queryset = EducationalMaterial.objects.all()
    serializer_class = EducationalMaterialSerializer
    filterset_class = EducationalMaterialFilter
    search_fields = ["title", "excerpt", "content"]
    ordering_fields = ["published_at", "created_at", "title"]
