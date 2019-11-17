import React, { useState } from 'react';
import {
  Card, CardBody, Button
} from 'reactstrap';
import './FlashCard.styles.scss';

const ORIENTATION_FRONT = "front";
const ORIENTATION_BACK = "back";
const OPTION_NEXT = "next";
const OPTION_PREVIOUS = "previous";

const FlashCard = ({ card: { image_url, description, word }, changeCard, isFirstCard, noMoreCards }) => {

  const [cardOrientation, changeOrientation] = useState("front");

  const flipCard = () => {
    const newOrientation = cardOrientation === ORIENTATION_FRONT ? ORIENTATION_BACK : ORIENTATION_FRONT;
    changeOrientation(newOrientation);
  }

  if(noMoreCards) return <h1>No more cards to review</h1>

  return (
    <div >
      <Card className="shadow rounded text-center">
        <CardBody className="flash-card-body">
          <div className={ `${isFirstCard ? 'flash-card-options-first': 'flash-card-front-options' } ` }>
            {!isFirstCard && <Button onClick={ () => changeCard(OPTION_PREVIOUS) } color="warning">&larr;</Button>}
            <Button onClick={ flipCard } className="btn-dark">&#8635;</Button>
          </div>
          { image_url && <img className="mb-5" width="40%" height="30%" src={image_url} alt="Placeholder" />}
          {
            cardOrientation === "front"
            ? <h4 className="font-weight-bold">{ description }</h4>
            : <h4 className="font-weight-bold">{ word }</h4>
          }
          <div className="flash-card-buttons p-3">
            <Button onClick={ () => changeCard(OPTION_NEXT) } color="danger">Hard</Button>
            <Button onClick={ () => changeCard(OPTION_NEXT) } color="primary">Normal</Button>
            <Button onClick={ () => changeCard(OPTION_NEXT) } color="success">Easy</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}


export default FlashCard;
