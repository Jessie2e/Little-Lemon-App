import React from 'react';

function Footer() {
  return (
    <footer className='grid-item' aria-label="Footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src='/logo_copy.png' alt="Little Lemon Logo"/>
          {/* Add any additional logo-related content */}
        </div>
        <div className="footer-section">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/" aria-label="Home">Home</a></li>
            <li><a href="/menu" aria-label="Menu">Menu</a></li>
            <li><a href="/reservation" aria-label="Reservation">Reservation</a></li>
            {/* Add more navigation links based on your needs */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://facebook.com" aria-label="Facebook">Facebook</a></li>
            <li><a href="https://twitter.com" aria-label="Twitter">Twitter</a></li>
            <li><a href="https://instagram.com" aria-label="Instagram">Instagram</a></li>
            {/* Add more social media links based on your presence */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
           <li><a href="mailto:info@littlelemon.com" aria-label="Email">info@littlelemon.com</a></li>
           <li><a href="tel:+1234567890" aria-label="Phone">(123) 456-7890</a></li>
           <li><a href="/contact" aria-label="Contact Form">Contact Form</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
