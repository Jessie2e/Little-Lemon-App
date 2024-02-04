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
    <nav className='grid-item'>
      <ul className='nav-list'>
        <li><img src='/logo_copy.png' alt="Little Lemon Logo"/></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li className="cart-link">
          <Link to="/checkout">
            <div className="cart-icon">
              <img src='/cart.svg' alt="Cart" />
              <span className="cart-count">{totalItems}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;