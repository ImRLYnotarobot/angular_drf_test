from django.contrib import admin
from django.urls import path, include
from rest_framework import generics, permissions, serializers
from rest_framework.response import Response
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from django.contrib.auth.models import User, Group


from django.http import HttpResponse

urlpatterns = [
    path('', include('app.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
]


admin.autodiscover()


# first we define the serializers
# class UserSerializer(serializers.ModelSerializer):
    
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = User
#         fields = ('username', 'email', "first_name", "last_name", "password")

# class GroupSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Group
#         fields = ("name", )

# # Create the API views
# class UserList(generics.ListCreateAPIView):
#     permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserDetails(generics.RetrieveAPIView):
#     permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class GroupList(generics.ListAPIView):
#     permission_classes = [permissions.IsAuthenticated, TokenHasScope]
#     required_scopes = ['groups']
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

# def test(request):
#     from django.http import HttpResponse
#     print(request)
#     print(request.user)
#     # print(dir(request))
#     print(request.POST)
#     print(request.GET)
#     print(request.COOKIES)
#     print(request.headers)
#     print(request.body)
#     return HttpResponse('ok')


# from rest_framework.decorators import parser_classes, api_view, permission_classes
# from rest_framework.permissions import AllowAny
# from rest_framework.parsers import JSONParser

# # @api_view(['POST'])
# # @parser_classes([JSONParser])
# # @permission_classes([AllowAny])
# def test(request, format=None):
#     print(request.headers)
#     print(request.GET)
#     print(request.POST)
#     return HttpResponse('ok')
#     # return Response({'received data': 'data'})

# # Setup the URLs and include login URLs for the browsable API.
# urlpatterns += [
#     path('users/', UserList.as_view()),
#     path('users/<pk>/', UserDetails.as_view()),
#     path('groups/', GroupList.as_view()),
#     path('test/', test)
# ]
