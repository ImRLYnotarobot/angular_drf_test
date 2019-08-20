from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from django.contrib.auth.decorators import login_required

from .models import Todo

from . import serializers
from .permissions import ReadOnly


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'app/index.html', context=None)


def some_view(request):
    print(request.headers)
    return HttpResponse('ok')


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = serializers.UserSerializer
#     permission_classes = (ReadOnly, )


class TodoPostViewSet(viewsets.ModelViewSet):
    # queryset = BlogPost.objects.all()
    serializer_class = serializers.TodoPostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def get_queryset(self):
        user = self.request.user
        queryset = Todo.objects.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
