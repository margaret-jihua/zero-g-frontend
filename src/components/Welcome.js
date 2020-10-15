import React from 'react';
import Timer from './Timer';

const Welcome = () => {
  return (
    <div>
      <h1>Zero-G</h1>
      <p>
        To avoid muscle atrophy in space travel, you must exercise for{' '}
        <strong>2 hours</strong> a day.
      </p>
      <Timer />
    </div>
  );
};

export default Welcome;
