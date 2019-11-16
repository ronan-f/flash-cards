import React from 'react';
import { Alert } from 'reactstrap';

const CustomAlert = ({ message }) => (
  <Alert className="text-center mt-3" color="danger">
    { message }
  </Alert>
);

export default CustomAlert;

