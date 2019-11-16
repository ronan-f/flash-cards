import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTE_REGISTER, ROUTE_SIGN_IN } from './constants';

const App = () => (
  <Router>
    <Route path={ ROUTE_SIGN_IN } component={ Login } />
    <Route path={ ROUTE_REGISTER } component={ Register } />
  </Router>

);

export default App;
