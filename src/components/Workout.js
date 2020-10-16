/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Images } from '../assets';
import Timer from './Timer';
import Form from './Form';

const Workout = (props) => {
  //   const workoutID = window.location.pathname.split('/')[2];
  //   const workout =
  //     props.user.exercises &&
  //     props.user.exercises.find((el) => el._id === workoutID);

  //   const [update, setUpdate] = useState(false);
  const [workoutName, setWorkoutName] = useState('Workout Name');
  //   const [workoutTime, setWorkoutTime] = useState(10);

  //   const handleWorkoutName = (e) => {
  //     setWorkoutName(e.target.value);
  //   };
  //   const handleWorkoutTime = (e) => {
  //     setWorkoutTime(e.target.value);
  //   };

  //   const handleUpdate = () => {
  //     //   PUT REQUEST
  //     console.log('updated');
  //     setUpdate(false);
  //   };

  //   const formInputs = {
  //     inputs: [
  //       {
  //         name: 'Workout Name',
  //         value: workoutName,
  //         onChange: handleWorkoutName,
  //         type: 'text',
  //       },
  //       {
  //         name: 'Time (seconds)',
  //         value: workoutTime,
  //         onChange: handleWorkoutTime,
  //         type: 'number',
  //       },
  //     ],
  //   };

  useEffect(() => {
    // if (props.user) {
    const workout = window.location.pathname.split('/')[2];
    switch (workout) {
      case 'run':
        setWorkoutName('Astronaut Run');
        break;
      case 'row':
        setWorkoutName('Space Row');
        break;
      case 'yoga':
        setWorkoutName('Space Yoga');
        break;
      case 'bike':
        setWorkoutName('Meteor Bike');
        break;
      default:
        setWorkoutName('Galaxy Squat');
        break;
    }
    //   const workout = props.user.exercises.find((el) => el._id === workoutID);
    //   console.log(workout);
    // setWorkoutName(workout);
    //   setWorkoutTime(parseInt(workout.time));
    // }
  }, []);

  return (
    // <div>
    //   <h1>{workoutName}</h1>
    //   {update ? (
    //     <>
    //       <h3>Too easy or hard? Update your workout!</h3>
    //       {/* <Form inputs={formInputs.inputs} onSubmit={handleUpdate} /> */}
    //     </>
    //   ) : (
    //     <>
    //       <Timer defaultTime={workoutTime} />
    //       <button onClick={() => setUpdate(true)}>Update Workout</button>
    //     </>
    //   )}
    // </div>
    <div
      css={css`
        background-image: url('${Images.TimerBackground}');
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        // padding-top: 20px;
        padding-top: 50px;
      `}
    >
      <h1
        css={css`
          padding-top: 25px;
        `}
      >
        {workoutName}
      </h1>
      <Timer defaultTime={3600} />
    </div>
  );
};

export default Workout;
