// Reservation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    timeframe: '',
    numberOfGuests: '',
    occasion: '',
  });

  const occasions = ['Work Event', 'Birthday', 'Anniversary', 'Date Night', 'Other'];

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);

    // Update the current step and navigate to the next page
    setCurrentStep(currentStep + 1);
    navigate('/availability');
  };

  const updateProgressBar = () => {
    const progressWidth = (currentStep / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
  };

  // Call the updateProgressBar function whenever currentStep changes
  React.useEffect(() => {
    updateProgressBar();
  }, [currentStep]);

  return (
    <div className='reservation-container'>
      <h2>Reserve Your Table With Us</h2>
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>Date:</label>
          <br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-input'>
          <label>Select Timeframe:</label>
          <br />
          <select
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            required
          >
            <option value="">Select Timeframe</option>
            <option value="Breakfast">Breakfast (8:00 am - 11:30 am)</option>
            <option value="Lunch">Lunch (11:30 am - 4:00 pm)</option>
            <option value="HappyHour">Happy Hour (4:00 pm - 5:00 pm)</option>
            <option value="Dinner">Dinner (5:00 pm - 10:00 pm)</option>
          </select>
        </div>
        <div className='form-input'>
          <label>Number of Guests:</label>
          <br />
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            max="12"
            required
          />
        </div>
        <div className='form-input'>
          <label>Occasion:</label>
          <br />
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select Occasion</option>
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
        <button className='reserve-button' type="submit">View Availability</button>
      </form>
    </div>
  );
};

export default Reservation;
