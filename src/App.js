import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Welcome from './components/Welcome';
import About from './components/About';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Workout from './components/Workout';
import MyWorkouts from './containers/MyWorkouts';
import Activity from './components/Activity';
import './App.scss';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

function App() {
  let [currentUser, setCurrentUser] = useState('');
  let [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      console.log(token);
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is working...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <div className='App'>
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      {/* <div className='container mt-5'> */}
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route
          path='/login'
          render={(props) => (
            <Login
              {...props}
              nowCurrentUser={nowCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
              user={currentUser}
            />
          )}
        />
        <Route path='/about' component={About} />
        <PrivateRoute path='/profile' component={Profile} user={currentUser} handleLogout={handleLogout}/>
        <PrivateRoute
          path='/activity'
          component={Activity}
          user={currentUser}
        />
        <PrivateRoute
          path='/workouts'
          component={MyWorkouts}
          user={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <PrivateRoute
          path='/workout/:id'
          component={Workout}
          user={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Route exact path='/' component={Welcome} />
      </Switch>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
