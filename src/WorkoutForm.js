import React, { useState } from 'react';
import './App.css';

function WorkoutForm({ addWorkout }) {
  const [title, setTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDuration, setExerciseDuration] = useState('');

  const handleAddExercise = () => {
    if (exerciseName.trim() === '' || exerciseDuration.trim() === '') return;
    const newExercise = {
      id: exercises.length + 1,
      name: exerciseName,
      duration: exerciseDuration
    };
    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setExerciseDuration('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || exercises.length === 0) return;
    const newWorkout = {
      id: Date.now(),
      title: title,
      exercises: exercises
    };
    addWorkout(newWorkout);
    setTitle('');
    setExercises([]);
  };

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <input
        type="text"
        placeholder="Workout Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name} - {exercise.duration} minutes</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Exercise Duration (minutes)"
          value={exerciseDuration}
          onChange={(e) => setExerciseDuration(e.target.value)}
        />
        <button type="button" onClick={handleAddExercise}>Add Exercise</button>
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
