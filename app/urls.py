from django.urls import include, path
from rest_framework import routers

from .views import TodoPostViewSet, HomePageView, some_view

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'todos', TodoPostViewSet, basename='todo-list')
# router.register(r'users', UserViewSet)

urlpatterns = [
    path('', HomePageView.as_view(), name='home_page'),
    path('some_view', some_view),
    path('api/', include(router.urls)),
]
