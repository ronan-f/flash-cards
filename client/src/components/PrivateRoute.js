import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import { getJWT } from '../utilities/getJWT';
import { ROUTE_SIGN_IN } from '../constants';
import { Route, withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator';

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, history, ...rest }) => {
  const [loggedInUser, updateLoggedInUser] = useState({});
  const [loading, updateLoading] = useState(true);

  const cookieValue = cookies.get('token');

  useEffect(() => {
    if (!cookieValue) return history.push(ROUTE_SIGN_IN);

    const getUser = async () => {
      const res = await axios.get("http://localhost:3000/user", getJWT());
      const user = res.data;

      updateLoggedInUser(user);
      updateLoading(false);
    }

    getUser();

  }, [cookieValue, loading, history]);

  if (loading) return <LoadingIndicator />;

  return (
    <Route {...rest} render={(props) => (
      <React.Fragment>
        <NavBar me={loggedInUser} />
        <Component me={loggedInUser} {...props} />
      </React.Fragment>
    )} />
  )
}

export default withRouter(PrivateRoute);