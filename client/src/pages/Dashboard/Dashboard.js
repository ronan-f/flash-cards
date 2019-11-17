import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import NavBar from '../../components/NavBar/NavBar';
import FlashCard from '../../components/FlashCard/FlashCard';
import { getJWT } from '../../utilities/getJWT';
import './Dashboard.styles.scss';

const Dashboard = () => {
  const initialState = {
    loading: true,
    user: {
      name: ""
    },
    card: {
      word: ""
    }
  };

  const [state, updateState] = useState(initialState);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3000/user", getJWT());
      const cardsRes = await axios.get("http://localhost:3000/cards", getJWT());

      const user = res.data;
      const card = cardsRes.data[cardsRes.data.length - 1];

      updateState((currentState) => {
        return {
          ...currentState,
          loading: false,
          user,
          card
        }
      })
    }
    getUser();
  }, []);

  const { user, loading, card } = state;

  if(loading) return <LoadingIndicator />

  return (
  <div className="dashboard light-blue">
    <NavBar />
    <h1 className="text-center p-5">Hi {user.name} Welcome to FlashCards.com</h1>
    <div className="mt-3 flash-card-container">
      <FlashCard card={ card } />
    </div>
  </div>
)}

export default Dashboard;
