// Main.js
import React from 'react';
import './App.css';

function Main() {
  return (
    <main className='grid-item'>
      {/* Hero Section */}
      <section className='hero-section'>
        <div>
          <h1>The Little Lemon</h1>
          <p>We serve delicious Mediterranean cuisine with a modern twist.</p>
          <button className='reserve-button'>Reserve A Table</button>
        </div>
        <img src='/restauranfood.jpg' alt='Bread Appetizers' />
      </section>

      {/* Menu Specials Section */}
      <section className='menu-specials-section'>
        <h2>Menu Specials</h2>
        <div className='menu-specials'>
          {/* Placeholder content for menu specials */}
          <div className='menu-special'>
            <img src='/greek_salad.jpg' alt='Special 1' />
            <h3>Greek Salad</h3>
            <p>Crisp cucumbers, juicy tomatoes, and tangy Kalamata olives tossed with feta cheese and our signature Greek dressing. A refreshing burst of Mediterranean flavors in every bite.</p>
          </div>
          <div className='menu-special'>
            <img src='/bread.png' alt='Special 2' />
            <h3>Bruschetta</h3>
            <p>Sliced baguette topped with a medley of diced tomatoes, fresh basil, garlic, and extra virgin olive oil. A classic Italian appetizer that's light, flavorful, and perfect for sharing.</p>
          </div>
          <div className='menu-special'>
            <img src='/lemon_dessert.jpg' alt='Special 1' />
            <h3>Lemon Cake</h3>
            <p>Indulge in the zesty delight of our lemon cake. A buttery cake that cradles a velvety lemon custard, topped with a cloud of whipped cream. Sweet, tangy, and utterly irresistible.</p>
          </div>
          {/* Add more menu specials as needed */}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className='testimonials-section'>
        <h2>Customer Testimonials</h2>
        <div className='testimonials'>
          <div className='testimonial'>
            <p>"Great food and excellent service! Will definitely come back."</p>
            <cite>John Doe</cite>
          </div>
          <div className='testimonial'>
            <p>"The flavors are amazing! A must-try for Mediterranean cuisine lovers."</p>
            <cite>Jane Smith</cite>
          </div>
          <div className='testimonial'>
            <p>"Hummus to DIE for!"</p>
            <cite>Sally Jones</cite>
          </div>
          <div className='testimonial'>
            <p>"Everything is just so fresh, I always leave feeling healthier!"</p>
            <cite>Katelyn Baker</cite>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

{/* About Little Lemon Section */}
<section className='aboutrestaurant'>
  <div className='about-content'>
    <div className='text-content'>
      <h1>The Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className='image-content'>
      <img className='image1' src='/restaurant.jpg' alt='The Little Lemon Exterior' />
      <img className='image2' src='/MarioandAdrian.jpg' alt='Two Little Lemon Employees' />
    </div>
  </div>
</section>
</main>
);
}

export default Main;
