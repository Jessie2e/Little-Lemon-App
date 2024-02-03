// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav({ totalItems }) {
  return (
    <nav className='grid-item'>
      <ul className='nav-list'>
        <li><img src='/logo_copy.png' alt="Little Lemon Logo"/></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/order">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* Cart icon and count */}
        <li>
          <Link to="/checkout">
            <div className="cart-icon">
              🛒
              <span className="cart-count">{totalItems}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
