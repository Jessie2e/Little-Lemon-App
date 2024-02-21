import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const Specials = () => {
  const menuSpecials = [
    {
      id: 1,
      name: 'Greek Salad',
      image: '/greek_salad.jpg',
      description: 'Crisp cucumbers, juicy tomatoes, and tangy Kalamata olives tossed with feta cheese and our signature Greek dressing. A refreshing burst of Mediterranean flavors in every bite.',
    },
    {
      id: 2,
      name: 'Bruschetta',
      image: '/bread.png',
      description: 'Sliced baguette topped with a farm fresh medley of diced tomatoes, fresh basil, garlic, and extra virgin olive oil. A classic Italian appetizer that pairs perfectly with any White wine!',
    },
    {
      id: 3,
      name: 'Lemon Cake',
      image: '/lemon_dessert.jpg',
      description: 'Indulge in the zesty delight of our lemon cake. A buttery cake that cradles a velvety lemon custard, topped with a cloud of whipped cream. Sweet, tangy, and utterly irresistible.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className='menu-specials-section'>
      <h2>Menu Specials</h2>
      <div class="custom-carousel">
        <Slider {...settings}>
          {menuSpecials.map((special) => (
            <div key={special.id} className='menu-special'>
              <Link to={`/special/${special.name.toLowerCase().replace(/\s/g, '-')}`}>
                <img src={special.image} alt={special.name} className='menu-special-image' />
                <div className='menu-special-content'>
                  <h3>{special.name}</h3>
                  <p>{special.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <p></p>
      </div>
    </section>
  );
}

export default Specials;