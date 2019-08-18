from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class BlogPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    body = models.CharField(default='', max_length=1000)

    def __str__(self):
        return self.body[:40]
