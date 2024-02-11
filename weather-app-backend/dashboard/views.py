from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CitySerializer, UserIdSerializer
from .models import City, UserId
from django.http import Http404, JsonResponse

# Create your views here.
class CityView(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()

class UserIdView(viewsets.ModelViewSet):
    serializer_class = UserIdSerializer
    queryset = UserId.objects.all()

def getUserByUserId(request, user_id):
    try:
        user = UserId.objects.get(userId=user_id)
    except UserId.DoesNotExist:
        raise Http404("User Id not found.")
    return JsonResponse({"id": user.pk})