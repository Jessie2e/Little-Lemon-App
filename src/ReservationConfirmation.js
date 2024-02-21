import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const ReservationConfirmation = ({ location }) => {
  const history = useHistory();
  const { formDataFromReservation, currentStep, totalSteps } = location.state || {};
  const { formData, timeSlot } = formDataFromReservation || {};

  const confirmationNumber = Math.floor(Math.random() * 1000000);

  const handleBack = () => {
    history.goBack();
  };

  const handleViewMenu = () => {
    history.push('/menu');
  };

  const progressWidth = (currentStep / totalSteps) * 100;

  return (
    <div className="reservation-container">
      <div className='progress-bar' role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div className='progress' style={{ width: `${progressWidth}%` }}></div>
      </div>
      <div className='finalform-input'>
        <h2>Thank You, {formData?.firstName}!</h2>
        <p>We are looking forward to serving you on {formDataFromReservation?.date} at {formData?.timeSlot}!</p>
        <p>We have sent a copy of the reservation details below to {formData?.email}. Please make sure to have your Confirmation Number handy upon arrival!</p>
        <div className="confirmation-details">
          <p><strong>Date of Reservation:</strong> {formDataFromReservation?.date}</p>
          <p><strong>Time of Day (Menu):</strong> {formDataFromReservation?.timeframe}</p>
          <p><strong>Time of Reservation:</strong> {formData?.timeSlot}</p>
          <p><strong>Occasion:</strong> {formDataFromReservation?.occasion}</p>
          <p><strong>Number of Guests:</strong> {formDataFromReservation?.numberOfGuests}</p>
          <p><strong>Confirmation Number:</strong> {confirmationNumber}</p>
        </div>
        <button className='avail-buttons' onClick={handleBack}>Back</button>
        <button className='avail-buttons' onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
