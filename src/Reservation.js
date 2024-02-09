import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css'; // Import your CSS file

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: '',
    timeframe: '',
    numberOfGuests: '',
    occasion: '',
    otherOccasion: '', // New state for other occasion
  });

  const occasions = ['Work Event', 'Birthday', 'Anniversary', 'Date Night', 'Other'];
  const history = useHistory(); // Initialize useHistory

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Changed to 3 steps
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(formData.date);
    const today = new Date();

    if (selectedDate < today) {
      setErrorMessage('Please select a date on or after today.');
      return; // Stop form submission if date is before today
    }

    console.log('Form submitted:', formData);
    // Reset error message
    setErrorMessage('');

    // Update the current step and navigate to the next page
    setCurrentStep(currentStep + 1); // Move to the next step
    history.push({
      pathname: '/availability',
      state: {
        formData: {
          ...formData, // Include all form data
        },
        date: formData.date,
        timeframe: formData.timeframe,
        numberOfGuests: formData.numberOfGuests,
        occasion: formData.occasion,
      },
    });
  };

  useEffect(() => {
    const progressWidth = (currentStep / totalSteps) * 100;
    document.getElementById('progress').style.width = `${progressWidth}%`;
  }, [currentStep, totalSteps]);

  return (
    <div className='reservation-container'>
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <h2>Reserve Your Table With Us</h2>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
        {formData.occasion === 'Other' && (
          <div className='form-input'>
            <label>Other Occasion:</label>
            <br />
            <input
              type="text"
              name="otherOccasion"
              value={formData.otherOccasion}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button className='reserve-button' type="submit">View Availability</button>
      </form>
    </div>
  );
};

export default Reservation;