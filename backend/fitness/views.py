from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Sum
from django.db import models
from .models import Workout, Exercise, WorkoutExercise
from .serializers import WorkoutSerializer, ExerciseSerializer, WorkoutExerciseSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    serializer_class = WorkoutSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['type', 'notes']
    ordering_fields = ['date', 'duration', 'created_at']

    def get_queryset(self):
        return Workout.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def stats(self, request):
        workouts = self.get_queryset()
        total_workouts = workouts.count()
        total_duration = workouts.aggregate(Sum('duration'))['duration__sum'] or 0
        
        workout_types = workouts.values('type').annotate(count=models.Count('id'))
        
        return Response({
            'total_workouts': total_workouts,
            'total_duration': total_duration,
            'workout_types': workout_types
        })

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'muscle_group', 'description']
    ordering_fields = ['name', 'difficulty']

    @action(detail=False, methods=['get'])
    def by_difficulty(self, request):
        exercises = self.get_queryset()
        difficulty_level = request.query_params.get('level', 'BEGINNER')
        exercises = exercises.filter(difficulty=difficulty_level)
        serializer = self.get_serializer(exercises, many=True)
        return Response(serializer.data) 