from django.urls import path
from .views import ServeView

# Let React Router handle all routes by only serving the index page in each URL
urlpatterns = [
    path('', ServeView.as_view(), name='index'),
    path('about/', ServeView.as_view()),
    path('news/<news_id>/', ServeView.as_view()),
    path('events/', ServeView.as_view()),
    path('projects/', ServeView.as_view()),
]