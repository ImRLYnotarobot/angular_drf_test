from django.urls import path
from django.contrib.auth import views as auth_views

from .views import CreateUserView


urlpatterns = [
    # path('login/', auth_views.LoginView.as_view(), name='login_url'),
    path('register/', CreateUserView.as_view(), name='register'),

]
