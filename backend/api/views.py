from .models import (
    ExecutiveEmployee,
    Event, Project, News,
    NonExecutiveEmployee
)

from .serializers import (
    EventSerializer
)

from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
