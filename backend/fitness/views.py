from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Sum
from django.db import models
from fitness.models import Workout, Exercise, WorkoutExercise
from fitness.serializers import WorkoutSerializer, ExerciseSerializer, WorkoutExerciseSerializer
from rest_framework.pagination import PageNumberPagination
from drf_spectacular.utils import extend_schema

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

    @extend_schema(summary="Workout stats", description="Get statistics for the user's workouts.")
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

    @extend_schema(summary="List workouts", description="List all workouts for the authenticated user.")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @extend_schema(summary="Create workout", description="Create a new workout for the authenticated user.")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(summary="Retrieve workout", description="Get details of a specific workout.")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @extend_schema(summary="Update workout", description="Update a specific workout.")
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @extend_schema(summary="Delete workout", description="Delete a specific workout.")
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'muscle_group', 'description']
    ordering_fields = ['name', 'difficulty']

    @extend_schema(summary="List exercises", description="List all exercises.")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @extend_schema(summary="Create exercise", description="Create a new exercise.")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(summary="Retrieve exercise", description="Get details of a specific exercise.")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @extend_schema(summary="Update exercise", description="Update a specific exercise.")
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @extend_schema(summary="Delete exercise", description="Delete a specific exercise.")
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    @extend_schema(summary="Filter exercises by difficulty", description="List exercises filtered by difficulty level.")
    @action(detail=False, methods=['get'])
    def by_difficulty(self, request):
        exercises = self.get_queryset()
        difficulty_level = request.query_params.get('level', 'BEGINNER')
        exercises = exercises.filter(difficulty=difficulty_level)
        serializer = self.get_serializer(exercises, many=True)
        return Response(serializer.data) 