import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../auth/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

export default ProtectedRoute;
