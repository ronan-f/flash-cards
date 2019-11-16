import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ROUTE_SIGN_IN } from '../../constants';

const Login = () => (
  <div className="vertical-center light-blue">
    <Form className="login-form shadow rounded">
      <h1 className="text-center">
        <span className="font-weight-bold">FlashCards</span>.com
      </h1>
      <h2 className="text-center">Register</h2>
      <FormGroup>
        <Label>Name</Label>
        <Input type="email" placeholder="eg. John Smith" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="eg. john@smith.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Login</Button>
      <div className="text-center p-3">
        <Link to={ ROUTE_SIGN_IN }>Login</Link>
        <span className="p-2">|</span>
        <a href="/signup">Forgot Password</a>
      </div>
    </Form>
  </div>
);

export default Login;