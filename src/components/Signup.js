import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Form from './Form';
import moon from '../assets/moon.png';
import earth from '../assets/earth.png';
import mars from '../assets/mars.png';
import saturn from '../assets/saturn.png';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || "https://z-gero.herokuapp.com";
console.log(REACT_APP_SERVER_URL);

const Signup = () => {
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
  let [tripStarted, setTripStarted] = useState();
  let [days, setDays] = useState('')
  let [planet, setPlanet] = useState('');
  let [scale, setScale] = useState()

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

  const handleMass = (e) => {
    setMass(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleTripStarted = (e) => {
    setTripStarted(e.target.value)
  }

  const handleDestination = (planet, day) => {
    setPlanet(planet);
    setDays(day)
    if (!scale) {
      setScale('scale(1.7)')
    } else {
      setScale('')
    }
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
          tripStarted,
          days,
          planet,
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
        <div>
          <h5>Where are you going?</h5>
          <p>choose your planet:</p>
          <div id="carouselExampleCaptions" class="carousel" data-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active" onClick={()=>handleDestination('moon','3')}>
                <h6>Moon: 3 days</h6> 
                <img src={moon} alt="moon" style={{transform: `${scale}`, margin: '30px auto'}}/>
              </div>
              <div class="carousel-item" onClick={()=>handleDestination('earth','4')}>
                <h6>Earth: 4 days</h6>
                <img src={earth} alt="earth" style={{transform: `${scale}`, margin: '30px auto'}}/>
              </div>
              <div class="carousel-item" onClick={()=>handleDestination('mars','410')}>
                <h6>Mars: 7 months</h6>
                <img src={mars} alt="mars" style={{transform: `${scale}`, margin: '30px auto'}}/>
              </div>
              <div class="carousel-item" onClick={()=>handleDestination('saturn','1095')}>
                <h6>Saturn: 3 years</h6>
                <img src={saturn} alt="saturn" style={{transform: `${scale}`, margin: '30px auto'}}/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" onClick={()=>setScale('')}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" onClick={()=>setScale('')}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
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
