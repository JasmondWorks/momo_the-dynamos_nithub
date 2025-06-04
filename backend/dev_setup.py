import os
import subprocess

def run(cmd):
    print(f"Running: {cmd}")
    subprocess.run(cmd, shell=True, check=True)

if __name__ == "__main__":
    # Install dependencies
    run("pip install -r requirements.txt")
    # Make migrations
    run("python manage.py makemigrations users chat fitness")
    # Apply migrations
    run("python manage.py migrate")
    # Seed exercises
    run("python manage.py seed_exercises")
    # Run tests
    run("python manage.py test chat")
    run("python manage.py test fitness")
    print("\nSetup complete. You can now run the server with:\npython manage.py runserver")