from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework import status
from fitness.models import Workout, Exercise, WorkoutExercise

User = get_user_model()

class FitnessTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)
        self.exercise = Exercise.objects.create(
            name='Push-ups',
            description='Basic push-ups',
            muscle_group='Chest',
            difficulty='BEGINNER'
        )

    def test_create_workout(self):
        url = '/api/fitness/workouts/'
        data = {
            'type': 'STRENGTH',
            'duration': 45,
            'date': '2024-03-20',
            'notes': 'Test workout',
            'exercises': [{
                'exercise_id': self.exercise.id,
                'sets': 3,
                'reps': 10,
                'weight': 0
            }]
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Workout.objects.count(), 1)
        self.assertEqual(WorkoutExercise.objects.count(), 1)

    def test_get_workout_stats(self):
        Workout.objects.create(
            user=self.user,
            type='CARDIO',
            duration=30,
            date='2024-03-20'
        )
        url = '/api/fitness/workouts/stats/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['total_workouts'], 1)
        self.assertEqual(response.data['total_duration'], 30)

    def test_filter_exercises_by_difficulty(self):
        url = '/api/fitness/exercises/by_difficulty/?level=BEGINNER'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1) 