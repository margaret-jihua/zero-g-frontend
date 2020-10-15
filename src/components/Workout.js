import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Form from './Form';

const Workout = (props) => {
  //   const workoutID = window.location.pathname.split('/')[2];
  //   const workout =
  //     props.user.exercises &&
  //     props.user.exercises.find((el) => el._id === workoutID);

  const [update, setUpdate] = useState(false);
  const [workoutName, setWorkoutName] = useState('Workout Name');
  const [workoutTime, setWorkoutTime] = useState(10);

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

  useEffect(() => {
    if (props.user) {
      const workoutID = window.location.pathname.split('/')[2];
      const workout = props.user.exercises.find((el) => el._id === workoutID);
      //   console.log(workout);
      setWorkoutName(workout.name);
      setWorkoutTime(parseInt(workout.time));
    }
  }, [props]);

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
