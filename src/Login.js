import React, { useState } from 'react';

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    timeframe: '',
    numberOfGuests: '',
    occasion: '',
    otherOccasion: '',
    email: '',
    // add more fields as needed
  });

  const occasions = ['Birthday', 'Anniversary', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
  };

  const renderStepOne = () => (
    <>
      <h2>Reserve Your Table With Us</h2>
      <form onSubmit={() => setStep(2)}>
        {/* Step One Inputs */}
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
        {/* Additional Step One Inputs... */}
        <button type="submit">Next</button>
      </form>
    </>
  );

  const renderStepTwo = () => (
    <>
      <h2>Select Timeframe</h2>
      <form onSubmit={() => setStep(3)}>
        {/* Step Two Inputs */}
        {/* Similar to Step One, but adjust based on selected timeframe */}
        <button type="submit">Next</button>
      </form>
    </>
  );

  const renderStepThree = () => (
    <>
      <h2>Confirmation</h2>
      <div>
        <p>Date: {formData.date}</p>
        {/* Recap other form questions and responses */}
      </div>
      {/* Button to submit the final reservation */}
      <button type="submit">Confirm Reservation</button>
    </>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderStepOne();
      case 2:
        return renderStepTwo();
      case 3:
        return renderStepThree();
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default ReservationForm;
