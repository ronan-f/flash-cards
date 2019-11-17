import React from 'react';
import { ROUTE_SIGN_IN } from '../constants';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const cookieValue = cookies.get('token');
    return (
    cookieValue
      ? <Component {...props} />
      : <Redirect to={ ROUTE_SIGN_IN } />
  )}} />
)

export default PrivateRoute;