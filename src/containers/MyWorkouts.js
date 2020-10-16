/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Images } from '../assets';
// import Form from '../components/Form';

// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const WorkoutButton = styled(Link)`
  width: 305px;
  height: 135px;
  background: linear-gradient(
    108.63deg,
    rgba(82, 131, 244, 0.78) 47.92%,
    rgba(82, 131, 244, 0) 117.86%
  );
  border: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;

  &:hover,
  &:active,
  &:focus {
    color: white;
    text-decoration: none;
    background: linear-gradient(
      105.51deg,
      #044cfa 62.47%,
      rgba(82, 131, 244, 0) 97.51%
    );
  }
`;

const MyWorkouts = ({ user, setCurrentUser }) => {
  // const [add, toggleAdd] = useState(false);
  // const [workoutName, setWorkoutName] = useState('Workout Name');
  // const [workoutTime, setWorkoutTime] = useState(60);

  // const handleWorkoutName = (e) => {
  //   setWorkoutName(e.target.value);
  // };
  // const handleWorkoutTime = (e) => {
  //   setWorkoutTime(e.target.value);
  // };

  // //   Currently broken
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // POST
  //   axios
  //     .post(`${REACT_APP_SERVER_URL}/api/users/exercises/add`, {
  //       name: workoutName,
  //       time: workoutTime,
  //       email: user.email,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       axios
  //         .get(`${REACT_APP_SERVER_URL}/api/users/${user.id}`)
  //         .then((res) => {
  //           console.log(res);
  //           setCurrentUser(res.data);
  //           toggleAdd(false);
  //         })
  //         .catch((err) => {
  //           console.log('error retrieving user', err);
  //         });
  //       // console.log(user);
  //       // toggleAdd(false);
  //       // setCurrentUser({ ...user, ...response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const formInputs = {
  //   inputs: [
  //     {
  //       name: 'Workout Name',
  //       value: workoutName,
  //       onChange: handleWorkoutName,
  //       type: 'text',
  //     },
  //     {
  //       name: 'Time (seconds)',
  //       value: workoutTime,
  //       onChange: handleWorkoutTime,
  //       type: 'number',
  //     },
  //   ],
  // };
  return (
    <div
      css={css`
        background-image: url('${Images.WorkoutBackground}');
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 20px;
      `}
    >
      {/* <h1>My Workouts</h1> */}
      <WorkoutButton to={`workout/run`}>
        <div>
          <h4>Astronaut Run</h4>
          <p>An intense sprint</p>
        </div>
        <h2>1HR</h2>
      </WorkoutButton>
      <WorkoutButton to={`workout/row`}>
        <div>
          <h4>Space Row</h4>
          <p>Intergalactic row</p>
        </div>
        <h2>1HR</h2>
      </WorkoutButton>
      <WorkoutButton to={`workout/yoga`}>
        <div>
          <h4>Gravity Yoga</h4>
          <p>Inhale the space</p>
        </div>
        <h2>1HR</h2>
      </WorkoutButton>
      <WorkoutButton to={`workout/bike`}>
        <div>
          <h4>Meteor Bike</h4>
          <p>Riding the stars</p>
        </div>
        <h2>1HR</h2>
      </WorkoutButton>
      {/* {add ? (
        <>
          <p>Create a new exercise</p>
          <Form inputs={formInputs.inputs} onSubmit={handleSubmit} />
        </>
      ) : (
        <>
          {user.exercises &&
            user.exercises.map((workout, idx) => {
              return (
                <div class='card w-75' key={idx}>
                  <div class='card-body'>
                    <h5 class='card-title'>{workout.name}</h5>
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
      )} */}
    </div>
  );
};

export default MyWorkouts;
