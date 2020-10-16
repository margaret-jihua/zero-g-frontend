import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import WorkoutPreview from './WorkoutPreview';

import plannet from '../assets/profile/Home/Group 245.svg'
import workout from '../assets/profile/Home/Group 264.svg'
import menu from '../assets/profile/Group 253.png'


const Profile = (props) => {
  let [showMenu, setShowMenu] = useState('none')
  
  const handleMenu = () => {
    if (showMenu === 'none' ) {
      setShowMenu('block')
    } else {
      setShowMenu('none')
    }
  }


  const userData = props.user ? (
    <div className="profileDiv">
      <div>
        <a href="#" onClick={handleMenu}><img src={menu} className="menu"/></a>
        <div className="menu-items" style={{display: `${showMenu}`}}>
          <a href="/workouts">Workouts</a>
          <a href="#">Trips</a>
          <a href="#">Edit Profile</a>
          <a href="#" onClick={props.handleLogout}>Logout</a>
        </div>
      </div>
      <h1>Hello {props.user.name.split(" ")[0]}</h1>
      <div >
        <img src={plannet}/>
      </div>
      <div style={{position: 'relative'}}>
        <p> 57% Complete</p>
        <p>
          You're on <strong>DAY 1</strong> on your trip to <span className="plannetName">Saturn</span>!
        </p>

        <h3>Log your progress below</h3>
        <p style={{marginTop: '30px'}}><button className="btn">BMD</button><span style={{marginLeft: '30px'}}></span><button className="btn">MASS</button></p>
        <h3 style={{marginTop: '40px', marginBottom: '10px'}}>Your Next Workout</h3>
        <div className="workoutStatus">
            <div>
              <h4>Astronaut Run</h4>
              <p style={{ fontSize: '12px'}}> A hour intense run on the trademill perfect to achieve cardio goals.</p>
            </div>
              <div>
                  <img src={workout}/>
              </div>
              <button className="btn1" >Start Workout</button>
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
