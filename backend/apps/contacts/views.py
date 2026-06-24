from rest_framework import mixins, viewsets

from apps.common.permissions import CreateOnlyOrAdmin

from .filters import ContactRequestFilter
from .models import ContactRequest
from .serializers import ContactRequestSerializer


class ContactRequestViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer
    permission_classes = [CreateOnlyOrAdmin]
    filterset_class = ContactRequestFilter
    search_fields = ["name", "email", "subject", "message"]
    ordering_fields = ["created_at", "is_processed"]

    def get_queryset(self):
        if self.request.user.is_staff:
            return super().get_queryset()
        return ContactRequest.objects.none()
