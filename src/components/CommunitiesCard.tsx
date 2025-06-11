import React from 'react';

// Import assets
const xLogo = new URL('../assets/X-logo-white.png', import.meta.url).href;
const discordLogo = new URL('../assets/discord-logo.png', import.meta.url).href;

const CommunitiesCard = () => {
  return (
    <div className="communities-card">
      <h2 className="section-title">Join Our Communities</h2>
      <a href="#" id="x-social-link" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={xLogo} alt="X Logo" className="social-icon" />
        <span className="x-handle" id="x-handle-text">@Twitter</span>
      </a>
      <a href="#" id="discord-social-link" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={discordLogo} alt="Discord Logo" className="discord-icon" />
        <span id="discord-text">Discord Group</span>
      </a>
    </div>
  );
};

export default CommunitiesCard; 