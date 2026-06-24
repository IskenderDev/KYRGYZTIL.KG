from rest_framework import viewsets

from .permissions import ReadOnlyOrAdmin


class PublishedModelViewSet(viewsets.ModelViewSet):
    lookup_field = "slug"
    permission_classes = [ReadOnlyOrAdmin]

    def get_queryset(self):
        queryset = super().get_queryset()
        if self.request.user.is_staff:
            return queryset
        return queryset.filter(is_published=True)
