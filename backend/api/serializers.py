from .models import (
    ExecutiveEmployee,
    Event, Project, News,
    NonExecutiveEmployee
)

from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
