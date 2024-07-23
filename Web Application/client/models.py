from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Player(models.Model):
    
    id_player = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    number = models.IntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    age = models.IntegerField()
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Player : {self.name} - {self.number}"
    
class PlayerData(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    height = models.FloatField()
    weight = models.FloatField()
    humidity = models.FloatField()
    temperature = models.FloatField()
    heartbeat = models.IntegerField()