import React from 'react';

const Welcome = () => {
  return (
    <div className="text-center welcome">
      <h1>Welcome to Zero-G</h1>
      <h5><strong>If you don't use it,<br /> you lose it</strong></h5>
      <p>
        When you’re in space, you muscular density decreases by 11-16%. Zero-G is here to help you maintain a healthy body on your multi-planetary travels.
      </p>
      <a href="/login" className='btn btn-primary'>Sign In</a>
      <a href="/signup" className='link'>Create an account</a>
    </div>
  );
};

export default Welcome;
