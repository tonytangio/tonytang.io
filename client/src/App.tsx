import Landing from './components/landing';
import Login from './components/login';
import Navbar from './components/navbar';
import React from 'react';
import Signup from './components/signup';
import styled from 'styled-components';
import Secret from './components/secret'
import {
  HashRouter as Router,
  Route,
  Switch,
  } from 'react-router-dom';
import { PrivateRoute } from './components/common/PrivateRoute';

const StyledApp = styled.div`
  /* Span app across entire page */
  box-sizing: border-box;
  height: 100vh;
  width: 60vw;
  margin: auto;

  /* Colours */
  background-color: #ffffff;

  /* Flexbox */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Text */
  text-align: center;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <Landing />
        <Navbar />
        <Switch>
          <PrivateRoute exact path = '/post' component={Signup}/>
          <PrivateRoute exact path='/secret' component={Secret}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </StyledApp>
  );
};

export default App;
