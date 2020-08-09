import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import axios from 'axios';

const StyledNewBlog = styled.div`
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

const NewBlog: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
    success: ''
  });
  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // https://reactjs.org/docs/events.html#event-pooling
    event.persist(); 
    setState(prevState => ({ 
      ...prevState, 
      [event.target.id]: event.target.value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost = {
      title: state.title,
      content: state.content
    };

    const response = await axios.post('api/makeBlog', newPost);
    setState(prevState => ({
      ...prevState,
      success: response.data
    }));
    setTimeout(() => history.push('/'), 2000);
  };

  return (
    <StyledNewBlog>
      <h1>Write a new Blog!</h1>
      <StyledForm onSubmit={handleSubmit}>
        {
          state.success 
                    && <>
                      <Alert severity="success">
                        {`${state.success} Redirecting you back to Home.`}
                      </Alert>
                      <CircularProgress/>
                    </>
        }
        <TextField
          id="title"
          type="title"
          label="Title"
          value={state.title}
          onChange={handleChange}
        />
        <TextField
          multiline
          id="content"
          type="content"
          label="Content"
          value={state.content}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit"> Submit Blog </Button>
      </StyledForm>
    </StyledNewBlog>
  );
};

export default NewBlog;