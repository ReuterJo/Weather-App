from rest_framework import serializers

from .models import City, UserId

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name', 'state', 'country')

class UserIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserId
        fields = ('id', 'userId', 'cities')