import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getJWT } from '../../utilities/getJWT';
import FlashCard from '../../components/FlashCard/FlashCard';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ViewCards.styles.scss';

const ViewCards = ({ me }) => {
  const [cards, updateCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsRes = await axios.get(`http://localhost:3000/cards`, getJWT());
      const cards = cardsRes.data;

      updateCards(cards);
    }
    getCards();
  }, []);

  const usersCards = cards.map(card => (
    <div className="d-flex p-3">
      <FlashCard isFirstCard key={card.id} card={ card } />
      <div className="d-flex flex-column justify-content-center p-3">
        <FontAwesomeIcon color="grey" size="2x" className="font-weight-bold m-3 icon" icon={faPencilAlt} />
        <FontAwesomeIcon color="grey" size="2x" className="font-weight-bold m-3 icon" icon={faTrash} />
      </div>
    </div>
  ))

  return (
    <div className="pt-3 view-cards-container light-blue">
      <div className="w-75 m-3 d-flex justify-content-end">
        <Button className="font-weight-bold" color="success">+</Button>
      </div>
      { usersCards }
    </div>
  )
};

export default ViewCards;