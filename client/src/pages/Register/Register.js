import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import CustomAlert from '../../components/CustomAlert';
import { ROUTE_SIGN_IN, ROUTE_FORGOT_PASSWORD, ROUTE_DASHBOARD } from '../../constants';
import { isEmailValid } from '../../utilities/validator';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Login = ({ history }) => {
  const initialState = {
    name: "",
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

  const isInputValid = (name, email, password) => {
    if(!name || !isEmailValid(email) || password.length < 8) {
      return updateState({
        ...state,
        error: "Oops! Input is invalid/incorrect. Try again."
      })
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = state;

    if(isInputValid(name, email, password)) {
      try {
        const res = await axios.post("http://localhost:3000/signup", state);
        if(res.data.token) {
          updateState(initialState);
          cookies.set('token', res.data.token, { path: '/' });
          history.push(ROUTE_DASHBOARD);
        }
      } catch(e) {
        updateState({
          ...state,
          error: e.response.data
        })
      }
    }

  };

  const { error, emailError, passwordError, nameError } = state;

  return (
  <div className="vertical-center light-blue">
    <Form className="login-form form-width shadow rounded">
      <h1 className="text-center">
        <span className="font-weight-bold">FlashCards</span>.com
      </h1>
      <h2 className="text-center">Register</h2>
      { error && <CustomAlert message={ error } /> }
      <FormGroup>
        <Label>Name</Label>
        <Input invalid={ nameError } onChange={ handleChange } type="text" name="name" placeholder="eg. John Smith" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input invalid={ emailError } onChange={ handleChange } type="email" name="email" placeholder="eg. john@smith.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input invalid={ passwordError }onChange={ handleChange } type="password" name="password" placeholder="Password" />
        <FormText className="text-center">Passwords must be at least 8 characters long</FormText>
      </FormGroup>
      <Button onClick={ handleSubmit } type="submit" className="btn-lg btn-dark btn-block">Register</Button>
      <div className="text-center p-3">
        <Link to={ ROUTE_SIGN_IN }>Sign In</Link>
        <span className="p-2">|</span>
        <Link to={ ROUTE_FORGOT_PASSWORD }>Forgot Password</Link>
      </div>
    </Form>
  </div>
)};

export default withRouter(Login);