from django.urls import include, path

from .views import HomePageView

urlpatterns = [
    path('index/', HomePageView.as_view(), name='home_page'),
]
