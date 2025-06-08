import React from 'react';
import './Home.css'; // Import the new CSS file

// Import assets
import thumbsUpIcon from '../assets/thumbs-up.svg';
import veDucksLogo from '../assets/veducks-logo.png';
import xLogo from '../assets/X-logo-white.png';
import discordLogo from '../assets/discord-logo.png';
import '../styles.css';
import { FaCheck } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="view welcome-view active">
      <h1 className="welcome-title">Welcome!</h1>
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

      {/* VeDucks Promotion Card */}
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
            {/* The button was inside veducks-info in the original HTML, moved it outside to match structure of other cards if it was a typo, but here it is inside again to match provided HTML.*/}
             <a href="https://worldofv.art/business/claim/veducks" target="_blank" rel="noopener noreferrer" className="veducks-button">
                <span>Mint Your VeDucks NFT</span>
                <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default Home; 