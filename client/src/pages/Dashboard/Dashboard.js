import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import FlashCard from '../../components/FlashCard/FlashCard';
import { getJWT } from '../../utilities/getJWT';
import './Dashboard.styles.scss';

const Dashboard = ({ me }) => {
  const initialState = {
    isFirstCard: true,
    loading: true,
    user: me,
    currentCard: {}
  };

  const [state, updateState] = useState(initialState);
  const [isFirstCard, updateIsFirstCard] = useState(true);
  const [noMoreCards, updateNoMoreCards] = useState(false);

  const changeCard = (option) => {
    const { cards, currentCard } = state;
    const options = {
      next: 1,
      previous: -1
    };

    const amountToAdjust = options[option];
    const currentCardIndex = cards.indexOf(currentCard);

    const nextCardIndex = currentCardIndex + amountToAdjust;

    if (nextCardIndex === 0) {
      updateIsFirstCard(true);
    } else if (isFirstCard) {
      updateIsFirstCard(false);
    }

    if (nextCardIndex > cards.length - 1) {
      return updateNoMoreCards(true);
    }

    return updateState({
      ...state,
      currentCard: cards[nextCardIndex]
    })
  }

  useEffect(() => {
    const getCards = async () => {
      const cardsRes = await axios.get(`http://localhost:3000/cards`, getJWT());

      const cards = cardsRes.data;

      updateState((currentState) => {
        return {
          ...currentState,
          loading: false,
          cards,
          currentCard: cards[0]
        }
      })
    }
    getCards();
  }, [me.id]);

  const { user, loading, currentCard } = state;

  if (loading) return <LoadingIndicator />

  return (
    <div className="dashboard light-blue">
      <h1 className="text-center p-5">Hi {user.name}! Here are your cards to review:</h1>
      <div className="mt-3 flash-card-container">
        <FlashCard card={currentCard} isFirstCard={isFirstCard} changeCard={changeCard} noMoreCards={noMoreCards} />
      </div>
    </div>
  )
}

export default Dashboard;
