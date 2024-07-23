from rest_framework import serializers
from .models import PlayerData

class PlayerDataSerializer(serializers.ModelSerializer):
     class Meta:
        model = PlayerData
        fields = '__all__'