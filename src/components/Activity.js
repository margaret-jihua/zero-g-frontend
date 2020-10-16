/** @jsx jsx */

import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { Images, ActivityButton } from '../assets';

const Activity = () => {
  const [val1] = useState(Math.floor(Math.random() * 100));
  const [val2] = useState(Math.floor(Math.random() * 100));
  const [val3] = useState(Math.floor(Math.random() * 100));

  return (
    <div
      css={css`
        background-image: url('${Images.ActivityBackground}');
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 20px;
      `}
    >
      <h2
        css={css`
          color: white;
        `}
      >
        Activity
      </h2>
      <h4
        css={css`
          color: white;
        `}
      >
        Week of {new Date(Date.now()).toDateString()}
      </h4>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80vw;
          `}
        >
          <div style={{ width: '200px', padding: '15px 25px' }}>
            <CircularProgressbarWithChildren
              value={val1}
              styles={buildStyles({
                //   textColor: 'red',
                pathColor: '#FD58FF',
                //   trailColor: 'gold',
              })}
              width={'200px'}
            >
              <h3
                css={css`
                  color: white;
                `}
              >
                {' '}
                {val1}% <br /> Run
              </h3>
            </CircularProgressbarWithChildren>
          </div>
          <Link to='/workout/run'>
            <ActivityButton />
          </Link>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80vw;
          `}
        >
          <div style={{ width: '200px', padding: '15px 25px' }}>
            <CircularProgressbarWithChildren
              styles={buildStyles({
                //   textColor: 'red',
                pathColor: '#3887A1',
                //   trailColor: 'gold',
              })}
              value={val2}
              width={'200px'}
            >
              <h3
                css={css`
                  color: white;
                `}
              >
                {' '}
                {val2}% <br /> Row
              </h3>
            </CircularProgressbarWithChildren>
          </div>
          <Link to='/workout/row'>
            <ActivityButton />
          </Link>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80vw;
          `}
        >
          <div style={{ width: '200px', padding: '15px 25px' }}>
            <CircularProgressbarWithChildren
              styles={buildStyles({
                //   textColor: 'red',
                pathColor: '#00BA88',
                //   trailColor: 'gold',
              })}
              value={val3}
              width={'200px'}
            >
              <h3
                css={css`
                  color: white;
                `}
              >
                {' '}
                {val3}% <br /> Bike
              </h3>
            </CircularProgressbarWithChildren>
          </div>
          <Link to='/workout/bike'>
            <ActivityButton />
          </Link>
        </div>
        <p
          css={css`
            color: white;
            padding: 25px;
            text-align: center;
          `}
        >
          Astronauts on the FalconX station exercise 6 out of 7 days a week for
          2.5 hours each day.
        </p>
      </section>
    </div>
  );
};

export default Activity;
