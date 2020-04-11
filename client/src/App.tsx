import Landing from './landing';
import Login from './login';
import Navbar from './navbar';
import React from 'react';
import Signup from './signup';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Route,
  Switch,
  } from 'react-router-dom';

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
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/secret'>
            hunter2
          </Route>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </StyledApp>
  );
};

export default App;
