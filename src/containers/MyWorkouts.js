import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const MyWorkouts = ({ user }) => {
  const [add, toggleAdd] = useState(false);
  const [workoutName, setWorkoutName] = useState('Workout Name');
  const [workoutTime, setWorkoutTime] = useState(60);

  const handleWorkoutName = (e) => {
    setWorkoutName(e.target.value);
  };
  const handleWorkoutTime = (e) => {
    setWorkoutTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const formInputs = {
    inputs: [
      {
        name: 'Workout Name',
        value: workoutName,
        onChange: handleWorkoutName,
        type: 'text',
      },
      {
        name: 'Time (seconds)',
        value: workoutTime,
        onChange: handleWorkoutTime,
        type: 'number',
      },
    ],
  };
  return (
    <>
      <h1>My Workouts</h1>
      {add ? (
        <>
          <p>Create a new exercise</p>
          <Form inputs={formInputs.inputs} onSubmit={handleSubmit} />
        </>
      ) : (
        <>
          {user.workouts.map((workout, idx) => {
            return (
              <div class='card w-75' key={idx}>
                <div class='card-body'>
                  <h5 class='card-title'>{workout.title}</h5>
                  <p class='card-text'>{workout.description}</p>
                  <Link to={`workout/${workout._id}`} class='btn btn-primary'>
                    Workout!
                  </Link>
                </div>
              </div>
            );
          })}
          <button onClick={() => toggleAdd(true)}>Create Exercise</button>
        </>
      )}
    </>
  );
};

export default MyWorkouts;
