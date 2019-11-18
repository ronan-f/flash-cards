import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { ROUTE_SIGN_IN } from '../constants';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const cookieValue = cookies.get('token');

    if (!cookieValue) return <Redirect to={ROUTE_SIGN_IN} />;

    return (
      <React.Fragment>
        <NavBar />
        <Component {...props} />
      </React.Fragment>
    )
  }} />
)

export default PrivateRoute;