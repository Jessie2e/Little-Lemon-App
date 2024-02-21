import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: '',
    timeframe: '',
    numberOfGuests: '',
    occasion: '',
    otherOccasion: '',
  });

  const occasions = ['Work Event', 'Birthday', 'Anniversary', 'Date Night', 'Other'];
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
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
      return;
    }

    setErrorMessage('');

    setCurrentStep(currentStep + 1);
    history.push({
      pathname: '/availability',
      state: {
        formData: {
          ...formData,
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
      <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div className="progress" id="progress"></div>
      </div>
      <h2>Reserve Your Table With Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor="date">Date:</label>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        {errorMessage && <p className="error-message" role="alert">{errorMessage}</p>}
        <div className='form-input'>
          <label htmlFor="timeframe">Select Timeframe:</label>
          <br />
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            required
            aria-required="true"
          >
            <option value="">Select Timeframe</option>
            <option value="Breakfast">Breakfast (8:00 am - 11:30 am)</option>
            <option value="Lunch">Lunch (11:30 am - 4:00 pm)</option>
            <option value="HappyHour">Happy Hour (4:00 pm - 5:00 pm)</option>
            <option value="Dinner">Dinner (5:00 pm - 10:00 pm)</option>
          </select>
        </div>
        <div className='form-input'>
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <br />
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            min="1"
            max="12"
            required
            aria-required="true"
          />
        </div>
        <div className='form-input'>
          <label htmlFor="occasion">Occasion:</label>
          <br />
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
            aria-required="true"
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
            <label htmlFor="otherOccasion">Other Occasion:</label>
            <br />
            <input
              type="text"
              id="otherOccasion"
              name="otherOccasion"
              value={formData.otherOccasion}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
        )}
        <button className='reserve-button' type="submit">View Availability</button>
      </form>
    </div>
  );
};

export default Reservation;
