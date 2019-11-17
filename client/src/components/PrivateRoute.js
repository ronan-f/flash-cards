import React from 'react';
import { ROUTE_SIGN_IN } from '../constants';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
    document.cookie.includes("token")
      ? <Component {...props} />
      : <Redirect to={ ROUTE_SIGN_IN } />
  )}} />
)

export default PrivateRoute;