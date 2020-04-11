import React from 'react';
import styled from 'styled-components';
import { FormControl, TextField } from '@material-ui/core';

const StyledLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Login: React.FC = () => {
    return (
        <StyledLogin>
            <h1>Login</h1>
            <FormControl>
                <TextField label="Username"/>
                <TextField label="Password"/>
            </FormControl>
        </StyledLogin>
    );
};

export default Login;