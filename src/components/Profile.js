import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutPreview from './WorkoutPreview';

const Profile = (props) => {
  const userData = props.user ? (
    <div>
      <h1>Hello {props.user.name}</h1>
      <p>
        You're on <strong>DAY 1</strong> on your trip to <span>Saturn</span>!
      </p>

      {props.user.exercises ? (
        <>
          <h3>Your Next Workout</h3>
          <WorkoutPreview exercise={props.user.exercises[0]} />
        </>
      ) : (
        ''
      )}
      {/* <p>
        <strong>Name: </strong>
        {props.user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {props.user.email}
      </p>
      <p>
        <strong>ID: </strong>
        {props.user.id}
      </p> */}
    </div>
  ) : (
    <h4>Loading...</h4>
  );

  const errorDiv = () => {
    return (
      <div className='text-center pt-4'>
        <h3>
          Please <Link to='/login'>login</Link> to view this page
        </h3>
      </div>
    );
  };

  return <div>{props.user ? userData : errorDiv()}</div>;
};

export default Profile;
