from .models import (
    ExecutiveEmployee,
    Event, Project, News,
    NonExecutiveEmployee,
    EmployeeBase, HomeGallery
)

from rest_framework import serializers


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class EmployeeBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeBase
        fields = '__all__'
        abstract = True


class ExecutiveSerializer(EmployeeBaseSerializer):
    class Meta:
        model = ExecutiveEmployee
        fields = '__all__'


class NonExecutiveSerializer(EmployeeBaseSerializer):
    class Meta:
        model = NonExecutiveEmployee
        fields = '__all__'


class AboutUsSerializer(serializers.Serializer):
    executive = ExecutiveSerializer(many=True)
    non_executive = NonExecutiveSerializer(many=True)


class HomeGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeGallery
        fields = '__all__'
