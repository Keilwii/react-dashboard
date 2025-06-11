import React from 'react';
import './Home.css'; // Import the new CSS file
import '../styles.css';
import SupportVoteCard from '../components/SupportVoteCard';
import VeDucksCard from '../components/VeDucksCard';
import CommunitiesCard from '../components/CommunitiesCard';

const Home = () => {
  return (
    <section className="view welcome-view active">
      <h1 className="welcome-title">Welcome!</h1>
    </section>
  );
};

export default Home; 