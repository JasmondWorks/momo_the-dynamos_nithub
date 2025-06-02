from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    momo_points = models.PositiveIntegerField(default=0)
    momo_coins = models.PositiveIntegerField(default=0)
    health_conditions = models.TextField(blank=True)
    
    def __str__(self):
        return self.email
