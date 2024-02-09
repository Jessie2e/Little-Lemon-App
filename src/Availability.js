import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const Availability = ({ location }) => {
  const history = useHistory();
  console.log('Location state:', location.state); // Log the location.state object

  const { date, timeframe, formDataFromReservation } = location.state; // Extracting date, timeframe, and formDataFromReservation from location state
  console.log('Location props in Availability:', location);

  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [formData, setFormData] = useState({

    ...formDataFromReservation // Spread formDataFromReservation to include any additional data passed from Reservation.js
  });
  console.log('FormData from Reservation:', formDataFromReservation);

  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 3; // Changed to 3 steps

  const handleMemberCheckboxChange = (e) => {
    setShowPasswordFields(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Field Name:', name);
    console.log('Field Value:', value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Date:', date);
    console.log('Timeframe:', timeframe);
    console.log('Email:', formData.email);
    console.log('Number of Guests:', formData.numberOfGuests); // Access numberOfGuests from formData
    console.log('Occasion:', formData.occasion); // Access occasion from formData
    console.log('Other Occasion:', formData.otherOccasion);
    console.log('Time Slot:', timeframe);
    console.log('Form submitted:', formData);
  
    // Update the current step
    setCurrentStep(currentStep + 1);
  
    // Navigate to ReservationConfirmation page after form submission
    history.push({
      pathname: '/ReservationConfirmation',
      state: {
        formData: formData,
        date: date,
        timeframe: timeframe,
        numberOfGuests: formData.numberOfGuests, // Access numberOfGuests from formData
        occasion: formData.occasion, // Access occasion from formData
        formDataFromReservation: {
          formData: formData,
          date: date,
          timeframe: timeframe,
          numberOfGuests: formData.numberOfGuests, // Access numberOfGuests from formData
          occasion: formData.occasion, // Access occasion from formData
        },
      },
    });
  };

  // Calculate the progress width based on the current step and total steps
  const progressWidth = (currentStep / totalSteps) * 100;

  // Define available time slots based on the selected date and timeframe
  useEffect(() => {
    let slots = [];
    if (timeframe === 'Breakfast') {
      slots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'];
    } else if (timeframe === 'Lunch') {
      slots = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
    } else if (timeframe === 'Happy Hour') {
      slots = ['4:00 PM', '5:00 PM'];
    } else if (timeframe === 'Dinner') {
      slots = ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
    }
    setAvailableTimeSlots(slots);
  }, [date, timeframe]);

  return (
    <div>
      <h2>Choose Availability</h2>
      <div className='reservation-container'>
        <div className='progress-bar'>
          <div className='progress' style={{ width: `${progressWidth}%` }}></div>
        </div>
      </div>
      <div className='avail-items'>
        <div className='avail-card'>
          {availableTimeSlots.map((timeSlot) => (
            <button key={timeSlot} className='avail-buttons' onClick={() => handleChange({ target: { name: 'timeSlot', value: timeSlot } })}>{timeSlot}</button>
          ))}
        </div>
      </div>
      <div className='avail-inputs'>
        <div className='email'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='cb'>
          <label>
            <input type="checkbox" onChange={handleMemberCheckboxChange} />
            Become a little lemon member
          </label>
          <br />
          <label>
            <input type="checkbox" /> Continue as guest
          </label>
        </div>
        {showPasswordFields && (
          <div>
            <label>Create a password:</label>
            <input type="password" />
            <label>Confirm password:</label>
            <input type="password" />
          </div>
        )}
      </div>
      <button className='reserve-button' onClick={handleSubmit}>Reserve the Table</button>
    </div>
  );
};

export default Availability;