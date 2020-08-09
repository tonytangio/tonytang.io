import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={
      (props) => (getCurrentUser()) ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login'/>
      )
    }
  />
);