from django.db import models
<<<<<<< HEAD

# Create your models here.
=======
from users.models import User

class Medication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    dosage = models.CharField(max_length=50)
    time_1 = models.TimeField()
    time_2 = models.TimeField(null=True, blank=True)
    time_3 = models.TimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} for {self.user.username}"

class MedicationLog(models.Model):
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    taken_at = models.DateTimeField(auto_now_add=True)
    was_taken = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['-taken_at']
>>>>>>> backend
