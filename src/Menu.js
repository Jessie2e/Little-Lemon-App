// Menu.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Menu = () => {
  // Dummy menu data
  const menuItems = [
    {
      id: 1,
      category: 'Breakfast',
      title: 'Greek Omelette',
      cost: '$9.99',
      description: 'Fluffy omelette with feta cheese, tomatoes, and olives.',
      image: 'restaurant.jpg',
    },
    {
      id: 2,
      category: 'Breakfast',
      title: 'Yogurt Parfait',
      cost: '$7.99',
      description: 'Greek yogurt with honey, granola, and fresh berries.',
      image: 'lemon_dessert.jpg',
    },
    {
      id: 3,
      category: 'Lunch',
      title: 'Hummus Platter',
      cost: '$11.99',
      description: 'Creamy hummus served with pita bread, olives, and cucumbers.',
      image: 'bread.png',
    },
    {
      id: 4,
      category: 'Lunch',
      title: 'Greek Salad',
      cost: '$10.99',
      description: 'Delight in the crisp and refreshing combination of cucumbers, tomatoes, Kalamata olives, and creamy feta cheese with our authentic Greek Salad.',
      image: 'greek_salad.jpg',
    },
    {
      id: 5,
      category: 'Dinner',
      title: 'Bruschetta Chicken',
      cost: '$14.99',
      description: 'Grilled chicken breast topped with tomato bruschetta and feta.',
      image: 'bread.png',
    },
    {
      id: 6,
      category: 'Dinner',
      title: 'Lemon Herb Salmon',
      cost: '$16.99',
      description: 'Salmon fillet marinated in lemon and herbs, served with roasted vegetables.',
      image: 'greek_salad.jpg',
    },
    {
      id: 7,
      category: 'Dessert',
      title: 'Lemon Dessert',
      cost: '$8.50',
      description: 'Indulge in the zesty delight of our lemon cake. A buttery cake that cradles a velvety lemon custard, topped with a cloud of whipped cream.',
      image: 'lemon_dessert.jpg',
    },
    {
      id: 8,
      category: 'Dessert',
      title: 'Baklava',
      cost: '$6.99',
      description: 'Layers of phyllo dough, chopped nuts, and sweet honey, baked to perfection.',
      image: 'bread.png',
    },
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter menu items based on the selected category
  const filteredMenu = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      {/* Category buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Breakfast')}>Breakfast</button>
        <button onClick={() => setSelectedCategory('Lunch')}>Lunch</button>
        <button onClick={() => setSelectedCategory('Dinner')}>Dinner</button>
        <button onClick={() => setSelectedCategory('Dessert')}>Dessert</button>
      </div>

        {/* Menu items */}
        <div className="menu-card-container">
        {filteredMenu.map(item => (
          <div key={item.id} className="menu-card">
            <div className="menu-card-content">
              <img src={item.image} alt={item.title} className="menu-image" />
              <div className="menu-details">
                <h3>{item.title}</h3>
                <p>{item.cost}</p>
                <p>{item.description}</p>
                {/* Add to cart functionality */}
                <div className="cart-actions">
                  <button>Add to Cart</button>
                  <div className="counter">
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;