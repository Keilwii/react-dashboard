import React from 'react';
import { FaCheck, FaLink } from 'react-icons/fa';

// Import assets
const veDucksLogo = new URL('../assets/veducks-logo.png', import.meta.url).href;

const VeDucksCard = () => {
  return (
    <div className="action-card veducks-card">
      <h2 className="section-title">Boost Your Rewards with VeDucks!</h2>
      <div className="veducks-content">
        <div className="veducks-image">
          <img src={veDucksLogo} alt="VeDucks NFT" className="veducks-logo" />
        </div>
        <div className="veducks-info">
          <p>Get up to <span className="highlight">5x reward multiplier</span> with our exclusive NFT collection!</p>
          <ul className="veducks-benefits">
            <li><FaCheck className="check-icon" /> <strong>2x multiplier</strong>&nbsp;for all VeDucks NFTs</li>
            <li><FaCheck className="check-icon" /> <strong>5x multiplier</strong>&nbsp;for all rank 1 NFTs</li>
          </ul>
          <a href="https://worldofv.art/business/claim/veducks" target="_blank" rel="noopener noreferrer" className="veducks-button">
            <span>Mint Your VeDucks NFT <FaLink /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VeDucksCard; 