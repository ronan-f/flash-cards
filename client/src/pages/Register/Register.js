import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ROUTE_SIGN_IN, ROUTE_FORGOT_PASSWORD } from '../../constants';

const Login = () => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  }
  const [state, updateState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({
      ...state,
      [name]: value
    })
    console.log(state);
  }

  return (
  <div className="vertical-center light-blue">
    <Form className="login-form shadow rounded">
      <h1 className="text-center">
        <span className="font-weight-bold">FlashCards</span>.com
      </h1>
      <h2 className="text-center">Register</h2>
      <FormGroup>
        <Label>Name</Label>
        <Input onChange={ handleChange } type="text" name="name" placeholder="eg. John Smith" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input onChange={ handleChange } type="email" name="email" placeholder="eg. john@smith.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input onChange={ handleChange } type="password" name="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Register</Button>
      <div className="text-center p-3">
        <Link to={ ROUTE_SIGN_IN }>Sign In</Link>
        <span className="p-2">|</span>
        <Link to={ ROUTE_FORGOT_PASSWORD }>Forgot Password</Link>
      </div>
    </Form>
  </div>
)};

export default Login;