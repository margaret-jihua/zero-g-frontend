import React from 'react';
// import { Link } from 'react-router-dom';

const WorkoutPreview = ({ exercise }) => {
  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <button>Start Workout</button>
    </div>
  );
};

export default WorkoutPreview;
