from rest_framework import mixins, viewsets

from apps.common.permissions import CreateOnlyOrAdmin

from .filters import EmailSubscriptionFilter
from .models import EmailSubscription
from .serializers import EmailSubscriptionSerializer


class EmailSubscriptionViewSet(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = EmailSubscription.objects.all()
    serializer_class = EmailSubscriptionSerializer
    permission_classes = [CreateOnlyOrAdmin]
    filterset_class = EmailSubscriptionFilter
    search_fields = ["email"]
    ordering_fields = ["created_at", "email"]

    def get_queryset(self):
        if self.request.user.is_staff:
            return super().get_queryset()
        return EmailSubscription.objects.none()
