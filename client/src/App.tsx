import React from "react";
import styled from "styled-components";

import Landing from "./components/landing/landing";

const StyledApp = styled.div`
  /* Span app across entire page */
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;

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
      <Landing />
    </StyledApp>
  );
};

export default App;
