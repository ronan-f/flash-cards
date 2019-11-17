import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import FlashCard from '../../components/FlashCard/FlashCard';
import './Dashboard.styles.scss';

const Dashboard = () => (
  <div className="dashboard light-blue">
    <NavBar />
    <h1 className="text-center p-5">Hi Name! Welcome to FlashCards.com</h1>
    <div className="mt-3 flash-card-container">
      <FlashCard />
    </div>
  </div>
)

export default Dashboard;
