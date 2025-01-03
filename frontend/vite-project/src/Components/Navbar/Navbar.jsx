import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import LoginPopup from '../LoginPopup/LoginPopup'; // Import the LoginPopup component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to toggle the LoginPopup visibility
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when the menu is open
  };

  const handleSignInClick = () => {
    setShowLogin(true); // Show the LoginPopup when Sign in is clicked
  };

  const goToCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  const goHome = () => {
    navigate('/'); // Navigate to Home page
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" onClick={goHome} /> {/* Click logo to navigate to home */}

      <ul className="navbar-menu">
        <div className="oder-noti-cart">
          <button className="Home" onClick={goHome}>
            <img src={assets.home} alt="Home" />
          </button>
        </div>

        <button className="menu" onClick={toggleMenu}>
          <img src={assets.menu} alt="Menu" />
        </button>

        <div className="oder-noti-noti">
          <button className="notification">
            <img src={assets.notification} alt="Notification" />
          </button>
          <div className="dot-noti"></div>
        </div>

        <div className="oder-noti-cart">
          {/* Updated cart button to navigate to the cart page */}
          <button className="cart" onClick={goToCart}>
            <img src={assets.cart} alt="Cart" />
          </button>
          <div className="dot-cart"></div>
        </div>

        <button className="location">
          <img src={assets.location} alt="Location" />
        </button>

        {/* Sign in button to show the LoginPopup */}
        <button className="login" onClick={handleSignInClick}>
          Sign in
        </button>
      </ul>

      {isMenuOpen && (
        <>
          {/* Dimmed overlay */}
          <div className="overlay" onClick={toggleMenu}></div>

          {/* Popup menu */}
          <div className="menu-popup">
            <ul>
              <li><a href="/option1">Join Us</a></li>
              <li><a href="/option2">Our Services</a></li>
              <li><a href="/option3">Recycling</a></li>
              <li><a href="/option4">Contact Us</a></li>
              <li><a href="/option5">Career</a></li>
              <li><a href="/option6">Life at GBin</a></li>
            </ul>
            <button className="close-btn" onClick={toggleMenu}>×</button>
          </div>
        </>
      )}

      {/* Display the LoginPopup if showLogin is true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Navbar;
