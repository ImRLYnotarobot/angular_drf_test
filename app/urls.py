from django.urls import include, path
from rest_framework import routers

from .views import HomePageView, BlogPostViewSet, UserViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', BlogPostViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', HomePageView.as_view(), name='home_page'),
    path('api/', include(router.urls)),
]
