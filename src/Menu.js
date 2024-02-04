// Menu.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';

const Menu = () => {
  // Dummy menu data
  const menuItems = [
    {
      id: 1,
      category: 'Breakfast',
      title: 'Greek Omelette',
      cost: '9.99',
      description: 'Fluffy omelette with feta cheese, tomatoes, and olives.',
      image: 'restaurant.jpg',
    },
    {
      id: 2,
      category: 'Breakfast',
      title: 'Yogurt Parfait',
      cost: '7.99',
      description: 'Greek yogurt with honey, granola, and fresh berries.',
      image: 'lemon_dessert.jpg',
    },
    {
      id: 3,
      category: 'Lunch',
      title: 'Hummus Platter',
      cost: '11.99',
      description: 'Creamy hummus served with pita bread, olives, and cucumbers.',
      image: 'bread.png',
    },
    {
      id: 4,
      category: 'Lunch',
      title: 'Greek Salad',
      cost: '10.99',
      description: 'Delight in the crisp and refreshing combination of cucumbers, tomatoes, Kalamata olives, and creamy feta cheese with our authentic Greek Salad.',
      image: 'greek_salad.jpg',
    },
    {
      id: 5,
      category: 'Dinner',
      title: 'Bruschetta Chicken',
      cost: '14.99',
      description: 'Grilled chicken breast topped with tomato bruschetta and feta.',
      image: 'bread.png',
    },
    {
      id: 6,
      category: 'Dinner',
      title: 'Lemon Herb Salmon',
      cost: '16.99',
      description: 'Salmon fillet marinated in lemon and herbs, served with roasted vegetables.',
      image: 'greek_salad.jpg',
    },
    {
      id: 7,
      category: 'Dessert',
      title: 'Lemon Dessert',
      cost: '8.50',
      description: 'Indulge in the zesty delight of our lemon cake. A buttery cake that cradles a velvety lemon custard, topped with a cloud of whipped cream.',
      image: 'lemon_dessert.jpg',
    },
    {
      id: 8,
      category: 'Dessert',
      title: 'Baklava',
      cost: '6.99',
      description: 'Layers of phyllo dough, chopped nuts, and sweet honey, baked to perfection.',
      image: 'bread.png',
    },
  ];
   // State to track the quantity for each menu item
   const [itemQuantity, setItemQuantity] = useState({});

   // State to track the selected category
   const [selectedCategory, setSelectedCategory] = useState('All');
 
   // Function to handle incrementing the quantity
   const handleIncrement = (itemId) => {
     setItemQuantity((prevQuantity) => ({
       ...prevQuantity,
       [itemId]: (prevQuantity[itemId] || 0) + 1,
     }));
   };
 
   // Function to handle decrementing the quantity
   const handleDecrement = (itemId) => {
     setItemQuantity((prevQuantity) => ({
       ...prevQuantity,
       [itemId]: Math.max((prevQuantity[itemId] || 0) - 1, 0),
     }));
   };
 
   // Calculate total items in the cart
   const totalItems = Object.values(itemQuantity).reduce((total, quantity) => total + quantity, 0);
 
   // Function to update totalItems in Nav.js
   const updateTotalItems = () => {
     if (window.updateTotalItems) {
       window.updateTotalItems(totalItems);
     }
   };
 
   // useEffect to update totalItems when the component mounts or itemQuantity changes
   useEffect(() => {
     updateTotalItems();
   }, [itemQuantity]);
 
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
       {filteredMenu.map((item) => (
         <div key={item.id} className="menu-card">
           <div className="menu-card-content">
             <img src={item.image} alt={item.title} className="menu-image" />
             <div className="menu-details">
               <h3>{item.title}</h3>
               <p>{item.cost}</p>
               <p>{item.description}</p>
               {/* Add to cart functionality */}
               <div className="cart-actions">
                 <button onClick={() => handleIncrement(item.id)}>Add to Cart</button>
                 <div className="counter">
                   <button onClick={() => handleDecrement(item.id)}>-</button>
                   <span>{itemQuantity[item.id] || 0}</span>
                   <button onClick={() => handleIncrement(item.id)}>+</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ))}
     </div>

     {/* Checkout button */}
     <div className="checkout-button-container">
       <Link
         to={{
           pathname: "/checkout",
           state: {
             cartItems: Object.entries(itemQuantity).map(([id, quantity]) => {
               const menuItem = menuItems.find(item => item.id === parseInt(id));
               return { id, quantity, image: menuItem?.image || '', ...menuItem };
             })
           }
         }}
       >
         <button className="checkout-button">Checkout ({totalItems} items)</button>
       </Link>
     </div>

     {/* Render the Checkout component with cartItems prop */}
     <Checkout
       cartItems={Object.entries(itemQuantity).map(([id, quantity]) => {
         const menuItem = menuItems.find(item => item.id === parseInt(id));
         return { id, quantity, ...menuItem };
       })}
     />
   </div>
 );
};

export default Menu;