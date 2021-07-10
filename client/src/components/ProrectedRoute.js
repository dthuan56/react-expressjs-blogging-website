import React from 'react';
import { Route } from 'react-router-dom'

export const ProrectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    // localStorage.getItem("user")
      <Component {...props} />
      // : <Redirect to="/login" />
  )} />
)


