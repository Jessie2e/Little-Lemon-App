import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

console.log("Checkout.js file loaded!");

const Checkout = ({ cartItems: propCartItems }) => {
  const location = useLocation();
  const cartItemsFromState = location.state?.cartItems || [];

  const [cartItems, setCartItems] = useState(cartItemsFromState);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const formatCost = (cost) => (typeof cost === 'number' ? cost.toFixed(2) : 'N/A');

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className='checkout-card'>
        <ul>
            {(cartItems || [])
              .filter((item) => item && item.quantity > 0)
              .map((item) => (
                <li className='checkout-list' key={item.id}>
                  <div className="checkout-item">
                    <p className="checkout-image-container">
                      <img src={item.image} alt={item.title} className="checkout-image" />
                    </p>
                    <p className="checkout-details">
                      {item.title} - ${formatCost(item.quantity * item.cost)}
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                      {item.quantity}
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    </p>
                  </div>
                </li>
              ))}
        </ul>

        </div>
           <p className="total-price">Total Price: ${(cartItems || []).reduce((total, item) => total + (item?.quantity || 0) * (item?.cost || 0), 0).toFixed(2)}</p>
            {/* Add total price, proceed to payment, etc. as needed */}
        </div>
  );
};

export default Checkout;
