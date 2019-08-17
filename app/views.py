from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'app/index.html', context=None)
