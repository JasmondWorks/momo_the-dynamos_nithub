from rest_framework import serializers
from .models import Workout, Exercise, WorkoutExercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class WorkoutExerciseSerializer(serializers.ModelSerializer):
    exercise = ExerciseSerializer(read_only=True)
    exercise_id = serializers.PrimaryKeyRelatedField(
        queryset=Exercise.objects.all(),
        write_only=True,
        source='exercise'
    )

    class Meta:
        model = WorkoutExercise
        fields = ['id', 'exercise', 'exercise_id', 'sets', 'reps', 'weight', 'duration']

class WorkoutSerializer(serializers.ModelSerializer):
    exercises = WorkoutExerciseSerializer(many=True, required=False)
    user = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Workout
        fields = ['id', 'user', 'type', 'duration', 'date', 'notes', 'exercises', 'created_at']
        read_only_fields = ['user', 'created_at']

    def create(self, validated_data):
        exercises_data = validated_data.pop('exercises', [])
        workout = Workout.objects.create(**validated_data)
        
        for exercise_data in exercises_data:
            WorkoutExercise.objects.create(workout=workout, **exercise_data)
        
        return workout

    def update(self, instance, validated_data):
        exercises_data = validated_data.pop('exercises', [])
        instance = super().update(instance, validated_data)
        
        if exercises_data:
            instance.exercises.all().delete()
            for exercise_data in exercises_data:
                WorkoutExercise.objects.create(workout=instance, **exercise_data)
        
        return instance 