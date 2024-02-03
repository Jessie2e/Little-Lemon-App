import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const testimonialsData = [
    {
      text: "Great food and excellent service! Will definitely come back.",
      author: "John Doe",
    },
    {
      text: "The flavors are amazing! A must-try for Mediterranean cuisine lovers.",
      author: "Jane Smith",
    },
    {
      text: "Hummus to DIE for!",
      author: "Sally Jones",
    },
    {
      text: "Everything is just so fresh, I always leave feeling healthier!",
      author: "Katelyn Baker",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className='testimonials-section'>
      <h2>Customer Testimonials</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='testimonial'>
            <p>{testimonial.text}</p>
            <span>{testimonial.author}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
