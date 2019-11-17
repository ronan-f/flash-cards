import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import NavBar from '../../components/NavBar/NavBar';
import FlashCard from '../../components/FlashCard/FlashCard';
import { getJWT } from '../../utilities/getJWT';
import './Dashboard.styles.scss';
const initialState = {
  isFirstCard: true,
  loading: true,
  user: {
    name: ""
  },
  card: {
    word: ""
  }
};
const initialCardState = {
  name: "",
  image_url: "",
  description: ""
}

const Dashboard = () => {

  const [state, updateState] = useState(initialState);
  const [currentCard, updateCard] = useState(initialCardState);
  const [isFirstCard, updateIsFirstCard] = useState(true);
  const [noMoreCards, updateNoMoreCards] = useState(false);

  const changeCard = (option) => {
    const { cards } = state;
    const options = {
      next: 1,
      previous: -1
    };

    const amountToAdjust = options[option];
    const currentCardIndex = cards.indexOf(currentCard);

    const nextCardIndex = currentCardIndex + amountToAdjust;

    if(nextCardIndex === 0) {
      updateIsFirstCard(true);
    } else if(isFirstCard) {
      updateIsFirstCard(false);
    }

    if(nextCardIndex > cards.length -1) {
      return updateNoMoreCards(true);
    }

    return updateCard(cards[nextCardIndex])
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3000/user", getJWT());
      const cardsRes = await axios.get("http://localhost:3000/cards", getJWT());

      const user = res.data;
      const cards = cardsRes.data;

      updateState((currentState) => {
        return {
          ...currentState,
          loading: false,
          user,
          cards
        }
      })

      updateCard(cards[0]);
    }
    getUser();
  }, []);

  const { user, loading } = state;

  if(loading) return <LoadingIndicator />

  return (
  <div className="dashboard light-blue">
    <NavBar />
    <h1 className="text-center p-5">Hi {user.name} Welcome to FlashCards.com</h1>
    <div className="mt-3 flash-card-container">
      <FlashCard card={ currentCard } isFirstCard={ isFirstCard } changeCard={ changeCard } noMoreCards={ noMoreCards } />
    </div>
  </div>
)}

export default Dashboard;
