import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutPreview = ({ exercise }) => {
  return (
    <div>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <Link to={`workout/${exercise._id}`}>
        <button>Start Workout</button>
      </Link>
    </div>
  );
};

export default WorkoutPreview;
