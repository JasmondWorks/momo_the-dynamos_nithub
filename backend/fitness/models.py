from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Workout(models.Model):
    WORKOUT_TYPES = [
        ('CARDIO', 'Cardio'),
        ('STRENGTH', 'Strength Training'),
        ('FLEXIBILITY', 'Flexibility'),
        ('HIIT', 'High Intensity Interval Training'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='workouts')
    type = models.CharField(max_length=20, choices=WORKOUT_TYPES)
    duration = models.IntegerField(help_text='Duration in minutes')
    date = models.DateField()
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date', '-created_at']

    def __str__(self):
        return f"{self.user.username}'s {self.type} workout on {self.date}"

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    muscle_group = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=20, choices=[
        ('BEGINNER', 'Beginner'),
        ('INTERMEDIATE', 'Intermediate'),
        ('ADVANCED', 'Advanced'),
    ])

    def __str__(self):
        return self.name

class WorkoutExercise(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, related_name='exercises')
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.FloatField(null=True, blank=True)
    duration = models.IntegerField(null=True, blank=True, help_text='Duration in seconds')

    class Meta:
        unique_together = ['workout', 'exercise'] 