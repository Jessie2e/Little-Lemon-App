import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

console.log("Checkout.js file loaded!");

const Checkout = ({ cartItems }) => {
  const location = useLocation();
  const cartItemsFromState = location.state?.cartItems || [];

  const [quantity, setQuantity] = useState(cartItemsFromState.map(item => ({ id: item.id, quantity: item.quantity })));

  const increaseQuantity = (id) => {
    setQuantity(prevQuantity =>
      prevQuantity.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setQuantity(prevQuantity =>
      prevQuantity.map(item =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const formatCost = (cost) => (typeof cost === 'number' ? cost.toFixed(2) : 'N/A');

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {(cartItemsFromState || [])
          .filter((item) => item && item.quantity > 0)
          .map((item) => (
            <li key={item.id}>
              <p>
                {item.title} - Quantity: {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                Total: ${formatCost(item.quantity * item.cost)}
              </p>
            </li>
          ))}
      </ul>
      {/* Calculate and display total price */}
      <p>Total Price: ${(cartItemsFromState || []).reduce((total, item) => total + (item?.quantity || 0) * (item?.cost || 0), 0).toFixed(2)}</p>
      {/* Add total price, proceed to payment, etc. as needed */}
    </div>
  );
};

export default Checkout;
