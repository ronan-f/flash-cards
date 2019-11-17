import React from 'react';
import {
  Card, CardBody, Button
} from 'reactstrap';
import './FlashCardFront.styles.scss';

const FlashCard = ({ card: { image_url, description } }) => (
  <div >
    <Card className="shadow rounded text-center">
      <CardBody className="flash-card-body">
        <div className="flash-card-front-options">
          <Button color="warning">&larr;</Button>
          <Button className="btn-dark">&#8635;</Button>
        </div>
        <img className="mb-5" width="40%" height="30%" src={ image_url } alt="Placeholder" />
        <h4 className="font-weight-bold">{ description }</h4>
        <div className="flash-card-buttons p-3">
          <Button color="danger">Hard</Button>
          <Button color="primary">Normal</Button>
          <Button color="success">Easy</Button>
        </div>
      </CardBody>
    </Card>
  </div>
)

export default FlashCard;
