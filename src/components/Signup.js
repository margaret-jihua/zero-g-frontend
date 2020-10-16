import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Form from './Form';
import moon from '../assets/moon.png';
import earth from '../assets/earth.png';
import mars from '../assets/mars.png';
import saturn from '../assets/saturn.png';

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
  let [heading, setHeading] = useState('Create an Account');
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [mass, setMass] = useState(30);
  let [height, setHeight] = useState(60);
  let [age, setAge] = useState(20);
  let [boneDensity, setBoneDensity] = useState(100);
  let [day, setDay] = useState(10);

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

  const handleDay = (e) => {
    setDay(e.target.value);
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
          name: 'Age',
          value: age,
          onChange: handleAge,
          type: 'range',
        },
        {
          name: 'Height',
          value: height,
          onChange: handleHeight,
          type: 'range',
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
          name: 'Bone Density',
          value: boneDensity,
          onChange: handleBoneDensity,
          type: 'range',
        },
      ],
    },
    {
      inputs: [
        {
          name: 'Day',
          value: day,
          onChange: handleDay,
          type: 'range',
        },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIdx >= 3) {
      if (password === confirmPassword) {
        const newUser = {
          name,
          email,
          password,
          confirmPassword,
          mass,
          height,
          age,
          boneDensity,
          day,
        };

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
    } else if (formIdx >= 2) {
      setFormIdx(formIdx + 1);
      setHeading('Your trip');
    } else {
      setFormIdx(formIdx + 1);
      setHeading('Tell us more');
    }
  };

  if (redirect) return <Redirect to='/login' />;

  return (
    <div className='container sigup'>
      <h2 className='py-2'>{heading}</h2>
      {formIdx === 3 ? (
        <div className='text-left'>
          <h5>Where are you going?</h5>
          <img src={moon} />
          <img src={earth} />
          <img src={mars} />
          <img src={saturn} />
          <h5>Which day are you on your journey?</h5>
        </div>
      ) : (
        ''
      )}
      <Form inputs={formData[formIdx].inputs} onSubmit={handleSubmit} />
      <p>Already have an account?</p>
      <Link to='/login'>Sign In</Link>
    </div>
  );
};

export default Signup;
