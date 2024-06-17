import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter(workout => workout.id !== id);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
