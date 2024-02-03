// Hero.js
import React from 'react';
import './App.css'; // Update the import to match your CSS file name

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>The Little Lemon</h1>
        <p>We serve delicious Mediterranean cuisine with a modern twist.</p>
        <button className='reserve-button'>Reserve A Table</button>
      </div>
      <img src='/restauranfood.jpg' alt='Bread Appetizers' className='hero-image' />
    </section>
  );
}

export default Hero;
