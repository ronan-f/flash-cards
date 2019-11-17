import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import ViewCards from './pages/ViewCards/ViewCards';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTE_REGISTER, ROUTE_SIGN_IN, ROUTE_FORGOT_PASSWORD, ROUTE_DASHBOARD, ROUTE_VIEW_CARDS } from './constants';

const App = () => (
  <Router>
    <Switch>
      <Route path={ ROUTE_SIGN_IN } component={ Login } />
      <Route path={ ROUTE_REGISTER } component={ Register } />
      <Route path={ ROUTE_FORGOT_PASSWORD } component={ ForgotPassword } />
      <PrivateRoute exact path={ ROUTE_DASHBOARD } component={ Dashboard } />
      <PrivateRoute path={ ROUTE_VIEW_CARDS } component={ ViewCards } />
      <Route component={ NotFound } />
    </Switch>
  </Router>

);

export default App;
