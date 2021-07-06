from .models import (
    ExecutiveEmployee,
    Event, Project, News,
    NonExecutiveEmployee,
    HomeGallery
)

from .serializers import (
    EventSerializer, ProjectSerializer,
    NewsSerializer, AboutUsSerializer,
    HomeGallerySerializer
)

from collections import namedtuple
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination


class EventsPagination(PageNumberPagination):
    ''' A pagination class for events '''

    page_size = 3
    page_size_query_param = 'page_size'


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    pagination_class = EventsPagination

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AboutUsViewSet(viewsets.ViewSet):
    # A custom viewset for listing all employees
    # ----------------------------------------------------
    # I wanted to merge non-executive and executive into
    # one JSON response, thus I didn't use ModelViewSet.
    # Instead, I created a base serializer (because there's
    # a base model in use), made it the parent class of
    # exec/nonexec-employee, and created a custom serailizer
    # composing both (the one which is used here).

    def list(self, request):
        about_us_def = namedtuple('about_us', ('executive', 'non_executive'))

        about_us_obj = about_us_def(
            executive=ExecutiveEmployee.objects.all(),
            non_executive=NonExecutiveEmployee.objects.all()
        )

        # When you make a custom serializer, make sure to pass in the request as
        # context, especially to obtain absolute file/image file paths
        serializer = AboutUsSerializer(
            about_us_obj, context={"request": request})

        return Response(serializer.data)


class HomeGalleryViewSet(viewsets.ModelViewSet):
    queryset = HomeGallery.objects.all()
    serializer_class = HomeGallerySerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
