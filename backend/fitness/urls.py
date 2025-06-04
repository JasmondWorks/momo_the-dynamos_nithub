from django.urls import path, include
from rest_framework.routers import DefaultRouter
from fitness.views import WorkoutViewSet, ExerciseViewSet

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet, basename='workout')
router.register(r'exercises', ExerciseViewSet, basename='exercise')

urlpatterns = [
    path('', include(router.urls)),
] 