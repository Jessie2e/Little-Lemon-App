// Nav.js
import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav className='grid-item'>
      <ul className='nav-list'>
        <li><img src='/logo_copy.png' alt="Little Lemon Logo"/></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
