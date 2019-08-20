from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model

from app.serializers import UserSerializer


User = get_user_model()


class CreateUserView(CreateAPIView):

    model = User
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
