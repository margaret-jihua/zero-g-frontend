/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import React from 'react';

export const ProfileIcon = () => (
  <svg
    css={css`
      position: absolute;
      width: 35px;
      left: 0;
      right: -4px;
      top: 55px;
      margin-left: auto;
      margin-right: auto;
    `}
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5 35.8333L5.49881 32.6267C5.70739 31.2858 6.58019 30.1425 7.86189 29.6968C10.3976 28.815 15.0147 27.5 20 27.5C24.9853 27.5 29.6024 28.815 32.1381 29.6968C33.4198 30.1425 34.2926 31.2858 34.5012 32.6267L35 35.8333'
      stroke='white'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M20.0001 19.9999C24.6025 19.9999 28.3334 16.269 28.3334 11.6666C28.3334 7.06421 24.6025 3.33325 20.0001 3.33325C15.3977 3.33325 11.6667 7.06421 11.6667 11.6666C11.6667 16.269 15.3977 19.9999 20.0001 19.9999Z'
      stroke='white'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);
