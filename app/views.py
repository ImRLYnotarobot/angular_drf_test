from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions

from .models import BlogPost

from . import serializers
from .permissions import ReadOnly


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'app/index.html', context=None)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (ReadOnly, )


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = serializers.BlogPostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=request.user)
