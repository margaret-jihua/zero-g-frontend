import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from './Form';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
  /**
   * state = {
   *   name: '',
   *  password: ''
   * }
   */

  //  this.setState({
  //          name: e.target.value
  // })
  // setState(e.target.value)
  //   Form Fields
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [mass, setMass] = useState('');
  let [height, setHeight] = useState('');
  let [age, setAge] = useState('');
  let [boneDensity, setBoneDensity] = useState('');

  let [redirect, setRedirct] = useState('');
  let [formIdx, setFormIdx] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleBoneDensity = (e) => {
    setBoneDensity(e.target.value);
  };
  //   const fieldHandler = (e, setState) => {
  //       setState(e.target.value)
  //   }

  const handleMass = (e) => {
    setMass(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const formData = [
    {
      inputs: [
        {
          name: 'Name',
          value: name,
          onChange: handleName,
          type: 'text',
        },
        {
          name: 'Email',
          value: email,
          onChange: handleEmail,
          type: 'email',
        },
        {
          name: 'Password',
          value: password,
          onChange: handlePassword,
          type: 'password',
        },
        {
          name: 'Confirm Password',
          value: confirmPassword,
          onChange: handleConfirmPassword,
          type: 'password',
        },
      ],
    },
    {
      inputs: [
        {
          name: 'Mass',
          value: mass,
          onChange: handleMass,
          type: 'range',
        },
        {
          name: 'Height',
          value: height,
          onChange: handleHeight,
          type: 'range',
        },
        {
          name: 'Age',
          value: age,
          onChange: handleAge,
          type: 'range',
        },
        {
          name: 'Bone Density',
          value: boneDensity,
          onChange: handleBoneDensity,
          type: 'range',
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIdx >= 1) {
      if (password === confirmPassword) {
        const newUser = { name, email, password, confirmPassword };

        axios
          .post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
          .then((response) => {
            console.log(response);
            setRedirct(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setFormIdx(formIdx + 1);
    }
  };

  if (redirect) return <Redirect to='/login' />;

  return (
    <div className='row mt-4'>
      <div className='col-md-7 offset-md-3'>
        <div className='card card-body'>
          <h2 className='py-2'>Signup</h2>
          <Form inputs={formData[formIdx].inputs} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
