import React from 'react';
import ExerciseForm from './ExerciseForm';
import './App.css';

function WorkoutList({ workouts, deleteWorkout }) {
  return (
    <div className="workout-list">
      {workouts.map(workout => (
        <div key={workout.id} className="workout">
          <h3>{workout.title}</h3>
          <ul>
            {workout.exercises.map(exercise => (
              <li key={exercise.id}>{exercise.name} - {exercise.duration} minutes</li>
            ))}
          </ul>
          <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;
