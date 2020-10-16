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
  let [tripStarted, setTripStarted] = useState()

  let [redirect, setRedirct] = useState('');
  let [formIdx, setFormIdx] = useState(0);

  var today = new Date().toISOString().split('T')[0];


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

  const handleTripStarted = (e) => {
    setTripStarted(e.target.value)
  }

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
          name: 'tripStartDate',
          value: tripStarted,
          onChange: handleTripStarted,
          type: 'date',
          max: today,
        }
      ]
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
          tripStarted
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
          <div id="carouselExampleCaptions" class="carousel slide text-center" data-ride="carousel">
            {/* <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> */}
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={moon} alt="moon"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Moon</h5>
                  <p>3 days</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={earth} alt="earth"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Earth</h5>
                  <p>4 days</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={mars} alt="mars"/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mars</h5>
                  <p>7 months</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          {/* <img src={moon} alt="moon"/>
          <img src={earth} alt="earth"/>
          <img src={mars} alt="mars"/>
          <img src={saturn} alt="saturn"/> */}
          <h5>Which date you started this journey?</h5>
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
