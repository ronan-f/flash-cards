import React from 'react';
import './NotFound.styles.scss';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { ROUTE_DASHBOARD } from '../../constants';

const NotFound = ({ history }) => (
  <div className="vertical-center not-found text-center light-blue">
    <div className="shadow rounded white form-width">
      <h1>Oops! Something went wrong</h1>
      <h1 className="font-weight-bold p-3">4<span className="text-primary">0</span>4 Not Found</h1>
      <p>An error has occurred and your requested page has not been found.</p>
      <div className="p-3">
        <Button onClick={() => history.push( ROUTE_DASHBOARD )} color="primary" className="btn-lg btn-block">Return Home</Button>
      </div>
    </div>
  </div>
)

export default withRouter(NotFound);