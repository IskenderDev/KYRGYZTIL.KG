from rest_framework import viewsets

from apps.common.permissions import ReadOnlyOrAdmin

from .filters import PartnerFilter
from .models import Partner
from .serializers import PartnerSerializer


class PartnerViewSet(viewsets.ModelViewSet):
    serializer_class = PartnerSerializer
    permission_classes = [ReadOnlyOrAdmin]
    filterset_class = PartnerFilter
    search_fields = ["name", "description"]
    ordering_fields = ["ordering", "name", "created_at"]

    def get_queryset(self):
        queryset = Partner.objects.all()
        if self.request.user.is_staff:
            return queryset
        return queryset.filter(is_active=True)
