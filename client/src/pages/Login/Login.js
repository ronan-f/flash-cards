import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Login.styles.scss';

const Login = () => (
  <Form className="login-form">
    <h1>
      <span className="font-weight-bold">FlashCards</span>.com
    </h1>
    <h2 className="text-center">Welcome</h2>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" placeholder="eg. john@smith.com" />
    </FormGroup>
    <FormGroup>
      <Label>Password</Label>
      <Input type="password" placeholder="Password" />
    </FormGroup>
  </Form>
);

export default Login;