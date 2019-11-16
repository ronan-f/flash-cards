import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { ROUTE_SIGN_IN, ROUTE_FORGOT_PASSWORD, ROUTE_DASHBOARD } from '../../constants';

const Login = ({ history }) => {
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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/signup", state);
    if(res.data.token) {
      history.push(ROUTE_DASHBOARD);
    }
  };

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