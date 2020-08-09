import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

const StyledBlog = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Blog: React.FC = () => {
  const [state, setState] = useState({
    title: 'No blog to show',
    content: 'No blog to show',
    date: ''
  });

  useEffect(() => {
    const getBlog = async() => {
      const response = await axios.get('api/getBlog');
      console.log(`Secret response: ${JSON.stringify(response)}`);
      setState(prevState => ({
        ...prevState,
        ...response.data,
      }));
    };
        
    getBlog();
  }, []);

  return (
    <StyledBlog>
      <h1>Latest Blog</h1>
      <i>{state.date}</i>
      <h2>{state.title}</h2>
      <div dangerouslySetInnerHTML={{
        __html: state.content 
      }}/>
      <script>alert("This doesn't actually work")</script>
    </StyledBlog>
  );
};

export default Blog;