import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getJWT } from '../../utilities/getJWT';
import FlashCard from '../../components/FlashCard/FlashCard';
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
    <FlashCard isFirstCard key={card.id} card={ card } />
  ))

  return (
    <div className="pt-3 view-cards-container light-blue">
      { usersCards }
    </div>
  )
};

export default ViewCards;