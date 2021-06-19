from .views import (
    EventViewSet, ProjectViewSet,
    NewsViewSet, AboutUsViewSet,
    HomeGalleryViewSet
)

from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'news', NewsViewSet)
router.register(r'about_us', AboutUsViewSet, basename='about_us')
router.register(r'gallery', HomeGalleryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
