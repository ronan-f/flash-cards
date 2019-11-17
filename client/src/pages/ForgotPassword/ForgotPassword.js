import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ROUTE_REGISTER, ROUTE_SIGN_IN } from '../../constants';

const ForgotPassword = () => (
  <div className="vertical-center light-blue">
    <Form className="login-form form-width shadow rounded">
      <h1 className="text-center">
        <span className="font-weight-bold">FlashCards</span>.com
      </h1>
      <h2 className="text-center">Forgot Password</h2>
      <p className="text-center pt-3">Enter your email below to get instructions for resetting your password</p>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="eg. john@smith.com" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Submit</Button>
      <div className="text-center p-3">
        <Link to={ ROUTE_SIGN_IN }>Sign In</Link>
        <span className="p-2">|</span>
        <Link to={ ROUTE_REGISTER }>Register</Link>

      </div>
    </Form>
  </div>
);

export default ForgotPassword;