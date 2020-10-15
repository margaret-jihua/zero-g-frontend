import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = (props) => {
  let defaultTime = props.defaultTime || 10;
  const [seconds, setSeconds] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [done, setDone] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    setSeconds(props.defaultTime);
  }, [props]);

  useEffect(() => {
    let interval = null;
    // if (seconds === 0) toggle();
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      setDone(true);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className='d-flex align-items-center flex-column'>
      {/* <div className='time'>{seconds}s</div>
       */}
      <CircularProgressbar
        value={(1 - seconds / defaultTime) * 100}
        text={seconds > 0 ? `${seconds}s` : `Done!`}
      />
      <div className='row'>
        {done ? (
          <button onClick={() => console.log('Redirect')}>Next Workout!</button>
        ) : (
          <button
            className={`button button-primary button-primary-${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={toggle}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
