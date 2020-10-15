import React from 'react';
import Timer from './Timer';

const Workout = ({ workoutName }) => {
  return (
    <div>
      <h1>{workoutName}</h1>
      <Timer />
    </div>
  );
};

export default Workout;
