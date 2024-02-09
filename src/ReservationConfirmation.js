import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const ReservationConfirmation = ({ location }) => {
  console.log('Location state:', location.state); // Log the location.state object
  const history = useHistory();
  const { formDataFromReservation } = location.state || {};
  const { formData, timeSlot } = formDataFromReservation || {}; // Access formData and timeSlot from formDataFromReservation

  // Generate a random confirmation number
  const confirmationNumber = Math.floor(Math.random() * 1000000);

  // Function to go back to the reservation page
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="confirmation-container">
      <h2>Thank you for reserving a table at The Little Lemon!</h2>
      <p>We are looking forward to serving you.</p>
      <p>We have sent a copy of this reservation to your email, and you will need it when you arrive!</p>
      <div className="confirmation-details">
        <p><strong>Email:</strong> {formData?.email}</p>
        <p><strong>Date of Reservation:</strong> {formDataFromReservation?.date}</p>
        <p><strong>Time of Day (Menu):</strong> {formDataFromReservation?.timeframe}</p>
        <p><strong>Time of Reservation:</strong> {formData?.timeSlot}</p>
        <p><strong>Occasion:</strong> {formDataFromReservation?.occasion}</p>
        <p><strong>Number of Guests:</strong> {formDataFromReservation?.numberOfGuests}</p>
        <p><strong>Confirmation Number:</strong> {confirmationNumber}</p>
      </div>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ReservationConfirmation;
