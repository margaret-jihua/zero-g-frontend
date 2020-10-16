import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Login = (props) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => [setPassword(e.target.value)];

  let handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log('handle submit for user login');

    axios
      .post(`${REACT_APP_SERVER_URL}/api/users/login`, userData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        props.nowCurrentUser(decoded);
      })
      .catch((error) => console.log(`Login error`, error));
  };

  if (props.user) return <Redirect to='/profile' user={props.user} />;

  return (
    <div className='container sign-in'>
      <h2 className='py-2'>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleEmail}
            className='form-control'
            placeholder='email'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
            className='form-control'
            placeholder='password'
            required
          />
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
        <p>Don't have account yet?</p><a href="/signup">Create an account</a>
      </form>    
    </div>
  );
};

export default Login;
