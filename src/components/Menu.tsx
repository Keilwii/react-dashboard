import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUser, FaPlus, FaCoins } from 'react-icons/fa';
import './Menu.css'; // Import the new CSS file

const Menu = () => {
    return (
        <nav className="menu-container">
            {/* Link to Submission Page (The central plus button) */}
            <NavLink to="/submission" className="submission-link" title="Create Submission">
                <FaPlus className="submission-icon" />
            </NavLink>

            {/* Regular Navigation Links */}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')} end>
                <FaHome className="menu-icon" />
                <span>Home</span>
            </NavLink>
            
            <NavLink to="/docs" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                <FaBook className="menu-icon" />
                <span>Docs</span>
            </NavLink>
            
            <NavLink to="/rewards" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                <FaCoins className="menu-icon" />
                <span>Rewards</span>
            </NavLink>

            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
                <FaUser className="menu-icon" />
                <span>Profile</span>
            </NavLink>
        </nav>
    );
};

export default Menu; 