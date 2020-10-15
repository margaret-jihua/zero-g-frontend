import React, { useState } from 'react';
import Timer from './Timer';
import Form from './Form';

const Workout = (props) => {
  const [update, setUpdate] = useState(false);
  const [workoutName, setWorkoutName] = useState(
    props.workoutName || 'Workout Name'
  );
  const [workoutTime, setWorkoutTime] = useState(props.workoutTime || 10);

  const handleWorkoutName = (e) => {
    setWorkoutName(e.target.value);
  };
  const handleWorkoutTime = (e) => {
    setWorkoutTime(e.target.value);
  };

  const handleUpdate = () => {
    //   PUT REQUEST
    console.log('updated');
    setUpdate(false);
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
    <div>
      <h1>{workoutName}</h1>
      {update ? (
        <>
          <h3>Too easy or hard? Update your workout!</h3>
          <Form inputs={formInputs.inputs} onSubmit={handleUpdate} />
        </>
      ) : (
        <>
          <Timer defaultTime={workoutTime} />
          <button onClick={() => setUpdate(true)}>Update Workout</button>
        </>
      )}
    </div>
  );
};

export default Workout;
