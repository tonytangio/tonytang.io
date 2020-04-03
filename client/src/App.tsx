import Landing from './landing/landing';
import Navbar from './navbar/navbar';
import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
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

const Links = styled.div`
  margin-top: 15px;

  align-self: flex-end;

  & > * {
    margin-left: 15px;
  }
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Router>
        <Landing />
        <Navbar />
      </Router>
    </StyledApp>
  );
};

export default App;
