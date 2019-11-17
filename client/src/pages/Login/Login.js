import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { ROUTE_REGISTER, ROUTE_FORGOT_PASSWORD, ROUTE_DASHBOARD } from '../../constants';
import CustomAlert from '../../components/CustomAlert';
import { isEmailValid } from '../../utilities/validator';
import Cookies from 'universal-cookie';
import './Login.styles.scss';

const cookies = new Cookies();

const Login = ({ history }) => {
  const initialState = {
    email: "",
    password: "",
    error: ""
  }
  const [state, updateState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({
      ...state,
      [name]: value
    })
  }

  const isInputValid = (email, password) => {
    if(!isEmailValid(email) || password.length < 8) {
      return updateState({
        ...state,
        error: "Oops! Input is invalid/incorrect. Try again."
      })
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if(isInputValid(email, password)) {
      try {
        const res = await axios.post("http://localhost:3000/signin", state);
        if (res.data.token) {
          updateState(initialState);
          cookies.set('token', res.data.token, { path: '/' });
          history.push(ROUTE_DASHBOARD);
        }
      } catch (e) {
        updateState({
          ...state,
          error: e.response.data,
        })
      }
    }
  };

  const { error } = state;

  return (
    <div className="vertical-center light-blue">
      <Form className="login-form form-width shadow rounded">
        <h1 className="text-center">
          <span className="font-weight-bold">FlashCards</span>.com
      </h1>
        <h2 className="text-center">Welcome</h2>
        { error && <CustomAlert message={ error }/>}
        <FormGroup>
          <Label>Email</Label>
          <Input onChange={handleChange} type="email" name="email" placeholder="eg. john@smith.com" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input onChange={handleChange} type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Button type="submit" onClick={handleSubmit} className="btn-lg btn-dark btn-block">Sign In</Button>
        <div className="text-center p-3">
          <Link to={ROUTE_REGISTER}>Register</Link>
          <span className="p-2">|</span>
          <Link to={ROUTE_FORGOT_PASSWORD}>Forgot Password</Link>
        </div>
      </Form>
    </div>
  )
};

export default withRouter(Login);