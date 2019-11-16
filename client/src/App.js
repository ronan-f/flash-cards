import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTE_REGISTER, ROUTE_SIGN_IN, ROUTE_FORGOT_PASSWORD, ROUTE_DASHBOARD } from './constants';

const App = () => (
  <Router>
    <Route path={ ROUTE_SIGN_IN } component={ Login } />
    <Route path={ ROUTE_REGISTER } component={ Register } />
    <Route path={ ROUTE_FORGOT_PASSWORD } component={ ForgotPassword } />
    <Route path={ ROUTE_DASHBOARD } component={ Dashboard } />
  </Router>

);

export default App;
