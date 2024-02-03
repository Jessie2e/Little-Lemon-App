// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className='grid-item'>
      <div className="footer-content">
        <div className="footer-section">
          <img src='/logo_copy.png' alt="Little Lemon Logo"/>
          {/* Add any additional logo-related content */}
        </div>
        <div className="footer-section">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            {/* Add more navigation links based on your needs */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            {/* Add more social media links based on your presence */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us at: <br />
            Email: info@littlelemon.com <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
