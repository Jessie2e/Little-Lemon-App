// Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>The Little Lemon</h1>
        <p>We serve delicious Mediterranean cuisine with a modern twist.</p>
        {/* Use Link component and style it as a button */}
        <Link to='/reservation' className='reserve-button'>Reserve A Table</Link>
      </div>
      <img src='/restauranfood.jpg' alt='Bread Appetizers' className='hero-image' />
    </section>
  );
}

export default Hero;
