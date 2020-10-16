/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TimerButton = styled.button`
  background-color: ${(props) => props.color};
  width: 131px;
  height: 131px;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  border: none;
`;

const Timer = (props) => {
  const [buttonColorStates] = useState(['#00BA88', '#F15025', '#FFA3FD']);

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
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        height: 70vh;
      `}
    >
      {/* <div className='time'>{seconds}s</div>
       */}
      <CircularProgressbar
        styles={buildStyles({
          textColor: 'white',
          pathColor: '#FD58FF',
          //   trailColor: 'gold',
        })}
        value={(1 - seconds / defaultTime) * 100}
        text={seconds > 0 ? `${seconds}s` : `Done!`}
      />
      <div className='row'>
        {done ? (
          <TimerButton
            color={buttonColorStates[2]}
            onClick={() => console.log('Redirect')}
          >
            Return to Home
          </TimerButton>
        ) : (
          <TimerButton
            color={isActive ? buttonColorStates[1] : buttonColorStates[0]}
            className={`button button-primary button-primary-${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={toggle}
          >
            {isActive ? 'End Workout' : 'Start Workout'}
          </TimerButton>
        )}
      </div>
    </div>
  );
};

export default Timer;
