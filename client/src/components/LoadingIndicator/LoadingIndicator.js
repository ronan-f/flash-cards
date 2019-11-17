import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingIndicator = () => (
  <div className="vertical-center light-blue">
    <Spinner color="primary" className="mx-auto"/>
  </div>
)

export default LoadingIndicator;