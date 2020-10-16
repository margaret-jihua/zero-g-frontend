/** @jsx jsx */

import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Images } from '../assets';

const Activity = () => {
  const [val1] = useState(Math.floor(Math.random() * 100));
  const [val2] = useState(Math.floor(Math.random() * 100));
  const [val3] = useState(Math.floor(Math.random() * 100));

  return (
    <div
      css={css`
        background-image: url('${Images.ActivityBackground}');
        width: 100vw;
        height: 90vh;
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
        <div style={{ width: '200px', padding: '15px' }}>
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
        <div style={{ width: '200px', padding: '15px' }}>
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
        <div style={{ width: '200px', padding: '15px' }}>
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
      </section>
    </div>
  );
};

export default Activity;
