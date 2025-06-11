import React from 'react';

// Import assets
const thumbsUpIcon = new URL('../assets/thumbs-up.svg', import.meta.url).href;

const SupportVoteCard = () => {
  return (
    <div className="action-card">
      <h2 className="section-title">Support & Vote Us</h2>
      <div className="vote-button">
        <span className="arrow left arrow-left"></span>
        <a href="https://governance.vebetterdao.org/rounds" target="_blank" rel="noopener noreferrer" className="vote-square">
          <img className="vote-icon" src={thumbsUpIcon} alt="Vote" />
        </a>
        <span className="arrow right"></span>
      </div>
    </div>
  );
};

export default SupportVoteCard; 