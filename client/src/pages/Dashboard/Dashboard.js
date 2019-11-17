import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import NavBar from '../../components/NavBar/NavBar';
import FlashCard from '../../components/FlashCard/FlashCard';
import './Dashboard.styles.scss';

const cookies = new Cookies();

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
      const res = await axios.get("http://localhost:3000/user", {
        headers: {
          "Authorization": `Bearer ${cookies.get('token')}`
        }
      });

      const user = res.data;
      updateState({
        ...state,
        loading: false,
        user
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
