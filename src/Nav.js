import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  const [totalItems, setTotalItems] = useState(0);

  const updateTotalItems = (newTotalItems) => {
    setTotalItems(newTotalItems);
  };

  useEffect(() => {
    window.updateTotalItems = updateTotalItems;
  }, []);

  return (
    <nav className='grid-item' aria-label="Main Navigation">
      <ul className='nav-list'>
        <li><img src='/logo_copy.png' alt="Little Lemon Logo" /></li>
        <li><Link to="/" aria-label="Home">Home</Link></li>
        <li><Link to="/aboutus" aria-label="About">About</Link></li>
        <li><Link to="/menu" aria-label="Menu">Menu</Link></li>
        <li><Link to="/reservation" aria-label="Reservation">Reservation</Link></li>
        <li className="dropdown">
          <a className="dropbtn" aria-label="Login">Sign In &#9662;</a>
          <div className="dropdown-content">
            <Link to="/login">Sign In</Link>
            <Link to="/createaccount">Create Member Account</Link>
          </div>
        </li>
        <li className="cart-link">
          <Link to="/checkout" aria-label="Shopping Cart">
            <div className="cart-icon">
              <img src='/Basket.svg' alt="Cart" />
              <span className="cart-count" aria-live="polite" aria-label="Number of Items in Cart">{totalItems}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
