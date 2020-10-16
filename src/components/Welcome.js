import React from 'react';
import { Forward } from '../assets';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <div className='text-center welcome'>
      <h1>Welcome to Zero-G</h1>
      <h5>
        <strong>
          If you don't use it,
          <br /> you lose it
        </strong>
      </h5>
      <p>
        When you’re in space, you muscular density decreases by 11-16%. Zero-G
        is here to help you maintain a healthy body on your multi-planetary
        travels.
      </p>
      <Link to='/login' className='btn'>
        <span>Sign In</span>
        <Forward />
      </Link>
      <Link to='/signup' className='link'>
        Create an account
      </Link>
    </div>
  );
};

export default Welcome;
