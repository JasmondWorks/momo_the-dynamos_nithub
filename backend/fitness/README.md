# Fitness Module

## Overview
The fitness module provides workout tracking and exercise management functionality. It allows users to log workouts, track exercises, and monitor their fitness progress.

## Features
- Create and manage workouts
- Track exercises with sets, reps, and weights
- View workout statistics
- Filter exercises by difficulty level
- Search and sort workouts and exercises

## API Endpoints

### Workouts
- `GET /api/fitness/workouts/` - List user's workouts
- `POST /api/fitness/workouts/` - Create new workout
- `GET /api/fitness/workouts/{id}/` - Get workout details
- `PUT /api/fitness/workouts/{id}/` - Update workout
- `DELETE /api/fitness/workouts/{id}/` - Delete workout
- `GET /api/fitness/workouts/stats/` - Get workout statistics

### Exercises
- `GET /api/fitness/exercises/` - List exercises
- `POST /api/fitness/exercises/` - Create new exercise
- `GET /api/fitness/exercises/{id}/` - Get exercise details
- `PUT /api/fitness/exercises/{id}/` - Update exercise
- `DELETE /api/fitness/exercises/{id}/` - Delete exercise
- `GET /api/fitness/exercises/by_difficulty/` - Filter exercises by difficulty

## Models
- `Workout`: Represents a workout session
- `Exercise`: Represents an exercise with details
- `WorkoutExercise`: Links workouts with exercises and tracks performance

## Authentication
All endpoints require JWT authentication.

## Query Parameters
- Search: `?search=query`
- Ordering: `?ordering=field`
- Difficulty: `?level=BEGINNER|INTERMEDIATE|ADVANCED`
