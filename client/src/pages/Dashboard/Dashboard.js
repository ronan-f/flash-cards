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
    }
  };

  const [state, updateState] = useState(initialState);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3000/user", getJWT());

      const user = res.data;

      updateState((currentState) => {
        return {
          ...currentState,
          loading: false,
          user
        }
      })
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
      <FlashCard />
    </div>
  </div>
)}

export default Dashboard;
