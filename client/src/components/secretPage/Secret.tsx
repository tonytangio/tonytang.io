import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import { getAuthHeader } from '../../services/data';
import Alert from '@material-ui/lab/Alert';

const StyledSecret = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Secret: React.FC = () => {
  const [state, setState] = useState({
    secret: '',
    error: ''
  });

  useEffect(() => {
    const getSecret = async() => {
      try {
        const response = await axios.get('api/secret', {
          headers: getAuthHeader() 
        });
        console.log(`Secret response: ${JSON.stringify(response)}`);
        setState(prevState => ({
          ...prevState,
          secret: response.data
        }));
      } catch (error) {
        console.log(`Secret Error obj: ${JSON.stringify(error.response)}`);
        setState(prevState => ({
          ...prevState,
          error: error.response.data
        }));
      }
    };
        
    getSecret();
  }, []);

  return (
    <StyledSecret>
      {state.error && <Alert severity="error">{state.error}</Alert>}
      <h1>{state.secret}</h1>
    </StyledSecret>
  );
};

export default Secret;