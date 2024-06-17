import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

// Import your fitness logo
import fitnessLogo from './fitness-logo.png';

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
      <header>
        <img src={fitnessLogo} alt="Fitness Logo" className="logo" />
        <h1>Fitness Tracker</h1>
      </header>
      <main>
        <div className="center-content">
          <WorkoutForm addWorkout={addWorkout} />
          <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
        </div>
      </main>
    </div>
  );
}

export default App;
