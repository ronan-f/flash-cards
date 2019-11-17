import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './FlashCard.styles.scss';

const FlashCard = () => (
  <div >
    <Card className="flash-card shadow rounded text-center">
      <CardBody className="flash-card-body">
        <h1>
          <CardTitle className="font-weight-bold">Card title</CardTitle>
        </h1>
        <img className="mb-3" width="50%" height="40%" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Placeholder" />
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <div className="flash-card-buttons">
          <Button color="danger">Hard</Button>
          <Button color="primary">Normal</Button>
          <Button color="success">Easy</Button>
        </div>
      </CardBody>
    </Card>
  </div>
)

export default FlashCard;
