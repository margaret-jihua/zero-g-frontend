import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutPreview from './WorkoutPreview';

import plannet1 from '../imgs/Group 239.png'
import plannet1_cir from '../imgs/Ellipse 78.png'
import plannet1_cir2 from '../imgs/Ellipse 79.png'
import circle from '../imgs/Card/Vector.png'

const Profile = (props) => {
  const userData = props.user ? (
    <div className="profileDiv">
      <h1>Hello {props.user.name}</h1>
      <div >
        <img src={plannet1}/>
        {/* <img src={plannet1_cir} style={{position: 'absolute', zIndex: '2'}}/>
        <img src={plannet1_cir2} style={{position: 'absolute', zIndex: '3'}}/> */}
      </div>
      <div style={{position: 'relative'}}>
        <p> 57% Complete</p>
        <p>
          You're on <strong>DAY 1</strong> on your trip to <span style={{ color: 'linear-gradient(#EB0000, #FFDB80)'}}>Saturn</span>!
        </p>

        <h3>Log your progress below</h3>
        <p><button className="btn">BMD</button><span style={{marginLeft: '30px'}}></span><button className="btn">MASS</button></p>
        <h3>Your Next Workout</h3>
        <div className="workoutStatus">
            <div>
              <h4>Astronaut Run</h4>
              <p> A hour intense run on the trademill perfect to achieve cardio goals.</p>
            </div>
              <div>
                  <img src={circle} />
              </div>
              <a>Start Workout</a>
              <p>
                 60% Completed
              </p>

        </div>
      </div>

      {/* {props.user.exercises ? (
        <>
          <h3>Your Next Workout</h3>
          <WorkoutPreview exercise={props.user.exercises[0]} />
        </>
      ) : (
        ''
      )} */}
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
