from django.core.management.base import BaseCommand
from fitness.models import Exercise

class Command(BaseCommand):
    help = 'Seed the exercise library'

    def handle(self, *args, **kwargs):
        exercises = [
            {"name": "Push-up", "description": "A basic push-up.", "muscle_group": "Chest", "difficulty": "BEGINNER"},
            {"name": "Squat", "description": "A basic squat.", "muscle_group": "Legs", "difficulty": "BEGINNER"},
            {"name": "Pull-up", "description": "A basic pull-up.", "muscle_group": "Back", "difficulty": "INTERMEDIATE"},
        ]
        for ex in exercises:
            Exercise.objects.get_or_create(**ex)
        self.stdout.write(self.style.SUCCESS('Seeded exercises.'))
