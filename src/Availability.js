import React, { useState, useEffect } from 'react';

const Availability = () => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 2;

  const handleMemberCheckboxChange = (e) => {
    setShowPasswordFields(e.target.checked);
  };

  const updateProgressBar = () => {
    const progressWidth = (currentStep / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
  };

  // Call the updateProgressBar function whenever currentStep changes
useEffect(() => {
  const updateProgressBar = () => {
      const progressWidth = (currentStep / totalSteps) * 100;
      // Check if the element with id 'progress' exists in the DOM
      const progressBar = document.getElementById('progress');
      if (progressBar) {
          // Check if the 'style' property exists before accessing 'width'
          if (progressBar.style) {
              progressBar.style.width = `${progressWidth}%`;
          } else {
              console.error("The 'style' property is null or undefined");
              // Handle the case when progressBar.style is null or undefined
          }
      } else {
          console.error("Element with id 'progress' not found");
          // Handle the case when the element with id 'progress' is not found
      }
  };

  updateProgressBar();
}, [currentStep, totalSteps]);
  return (
    <div>
      <h2>Choose Availability</h2>
      {/* Two columns of buttons with availability times */}
      <div className='avail-items'>
        {/* Buttons with availability times */}
        <div className='avail-card'>
          <button className='avail-buttons'>11:30 AM</button>
          <button className='avail-buttons'>12:30 PM</button>
          <button className='avail-buttons'>11:50 AM</button>
          <button className='avail-buttons'>12:30 PM</button>
          <button className='avail-buttons'>1:30 PM</button>
          <button className='avail-buttons'>2:50 PM</button>
        </div>
      </div>
      {/* Email input */}
      <div className='avail-inputs'>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        {/* Checkboxes */}
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleMemberCheckboxChange}
            />{' '}
            Become a little lemon member
          </label>
          <label>
            <input type="checkbox" /> Continue as guest
          </label>
        </div>
        {/* Password input (visible only when "Become a little lemon member" is checked) */}
        {showPasswordFields && (
          <div>
            <label>Create a password:</label>
            <input type="password" />
            <label>Confirm password:</label>
            <input type="password" />
          </div>
        )}
      </div>
      {/* Reserve the Table button */}
      <button className='reserve-button'>Reserve the Table</button>
    </div>
  );
};

export default Availability;
