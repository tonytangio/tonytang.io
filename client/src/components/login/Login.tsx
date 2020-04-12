import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {loginUser} from '../../services/auth'

const StyledLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledForm = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 15px;
    }
`;

const Login: React.FC = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        error: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // https://reactjs.org/docs/events.html#event-pooling
        event.persist(); 
        setState(prevState => ({ 
            ...prevState, 
            [event.target.id]: event.target.value
        }));
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            username: state.username,
            password: state.password
        };

        try {
            const response = await loginUser(user);
            console.log(JSON.stringify(response));
        } catch (error) {
            console.log(`Error obj: ${JSON.stringify(error)}`);
            setState(prevState => ({
                ...prevState,
                error: error.response.data.error
            }))
        }
    }

    return (
        <StyledLogin>
            <h1>Login</h1>
            <StyledForm onSubmit={handleSubmit}>
                {state.error && <Alert severity="error">{state.error}</Alert>}
                <TextField
                    id="username"
                    type="username"
                    label="Username"
                    value={state.username}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit"> Login </Button>
            </StyledForm>
        </StyledLogin>
    );
};

export default Login;