import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

console.log("Checkout.js file loaded!");

const Checkout = ({ cartItems: propCartItems }) => {
  const location = useLocation();
  const cartItemsFromState = location.state?.cartItems || [];

  const [cartItems, setCartItems] = useState(cartItemsFromState);
  const [deliveryOption, setDeliveryOption] = useState('delivery'); // Default to delivery
  const [tip, setTip] = useState(0); // Initialize tip to 0

  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showMemberFields, setShowMemberFields] = useState(false);
  const [alreadyMember, setAlreadyMember] = useState(false);

  const handleMemberCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setAlreadyMember(false); // Reset already member state
    setShowPasswordFields(isChecked);
    setShowMemberFields(isChecked);
  };

  const handleAlreadyMemberCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setShowMemberFields(isChecked);
    setShowPasswordFields(false); // Reset password fields if already member checkbox is checked
  };

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

  const handleTipChange = (e) => {
    const newTip = parseFloat(e.target.value);
    setTip(isNaN(newTip) ? 0 : newTip); // If the entered value is not a valid number, set tip to 0
  };

  const formatCost = (cost) => (typeof cost === 'number' ? cost.toFixed(2) : 'N/A');

  // Function to generate random time
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
    const minutes = Math.floor(Math.random() * 60); // Random number between 0 and 59
    return `${hours} hours ${minutes} minutes`;
  };

  // Calculate total price including tip
  const totalPriceWithTip = (cartItems || []).reduce((total, item) => total + (item?.quantity || 0) * (item?.cost || 0), 0) + tip;

  return (
    <div className="checkout-containerr">
      <h2>Your Cart</h2>
      {/* Display estimated time for delivery and pick-up */}
      <p>Estimated Time for Delivery: {getRandomTime()}</p>
      <p>Estimated Time for Pick-up: {getRandomTime()}</p>

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
                    <br />
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    {item.quantity}
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* Display options for order delivery or order pickup */}
      <div>
        <input
          type="radio"
          id="delivery"
          name="deliveryOption"
          value="delivery"
          checked={deliveryOption === 'delivery'}
          onChange={() => setDeliveryOption('delivery')}
        />
        <label htmlFor="delivery">Order Delivery</label>
<p></p>
        <input
          type="radio"
          id="pickup"
          name="deliveryOption"
          value="pickup"
          checked={deliveryOption === 'pickup'}
          onChange={() => setDeliveryOption('pickup')}
        />
        <label htmlFor="pickup">Order Pickup</label>
      </div>


      <p className='total-price'>Little Lemon Members Earn Discounts and Rewards!</p>

      {/* Checkboxes for member options */}
      <div>
        <div>
          <label>
            <input type="checkbox" onChange={handleMemberCheckboxChange} />
            Become a Little Lemon Member
          </label>
        </div>
        <br />
        <div>
          <label>
            <input type="checkbox" onChange={handleAlreadyMemberCheckboxChange} />
            Already a Little Lemon Member
          </label>
        </div>
        <br />
        <div>
          <label>
            <input type="checkbox" /> Continue as Guest
          </label>
        </div>
      </div>

      {/* Input fields for becoming a Little Lemon Member */}
      {showPasswordFields && (
        <div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <br />
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
        </div>
      )}

      {/* Input fields for already a Little Lemon Member */}
      {showMemberFields && (
        <div className='cbox'>
          <div>
            <label htmlFor="memberEmail">Member Email:</label>
            <input type="email" id="memberEmail" name="memberEmail" />
          </div>
          <br />
          <div>
            <label htmlFor="memberPassword">Member Password:</label>
            <input type="password" id="memberPassword" name="memberPassword" />
          </div>
        </div>
      )}
      <br></br>
  {/* Input field for tip */}
  <div className='tip-section'>
        <label htmlFor="tip">Enter Tip ($):</label>
        <input
          type="number"
          id="tip"
          name="tip"
          value={tip}
          onChange={handleTipChange}
        />
        {/* Display total price including tip */}
      <p className="total-price">Total Price (including tip): ${totalPriceWithTip.toFixed(2)}</p>
      </div>

      {/* Reserve button */}
      <button className='orderfood' type="submit">Checkout Order</button>
    </div>
  );
};

export default Checkout;
