import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

const Availability = ({ location }) => {
  const history = useHistory();
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showMemberFields, setShowMemberFields] = useState(false);
  const [alreadyMember, setAlreadyMember] = useState(false);
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 3;

  const { date, timeframe, numberOfGuests, occasion, formDataFromReservation } = location.state || {};

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

  const handleMemberCheckboxChange = (e) => {
    setShowPasswordFields(e.target.checked && !alreadyMember);
    setShowMemberFields(e.target.checked && alreadyMember);
  };

  const handleAlreadyMemberCheckboxChange = (e) => {
    setAlreadyMember(e.target.checked);
    setShowMemberFields(e.target.checked && !showPasswordFields)  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);

    history.push({
      pathname: '/ReservationConfirmation',
      state: {
        formData: formData,
        date: date,
        timeframe: timeframe,
        numberOfGuests: numberOfGuests,
        occasion: occasion,
        formDataFromReservation: {
          formData: formData,
          date: date,
          timeframe: timeframe,
          numberOfGuests: numberOfGuests,
          occasion: occasion,
        },
      },
    });
  };

  const progressWidth = (currentStep / totalSteps) * 100;

  return (
    <div className='reservation-container'>
        <div className='progress-bar' role="progressbar" aria-valuemin="0" aria-valuemax="100">
          <div className='progress' style={{ width: `${progressWidth}%` }}></div>
        </div>
        <h2>Choose Availability</h2>

      <div className='avail-items'>
        <div className='avail-card'>
          {availableTimeSlots.map((timeSlot) => (
             <button
             key={timeSlot}
             className={`avail-buttons ${formData.timeSlot === timeSlot ? 'clicked' : ''}`}
             onClick={() => handleChange({ target: { name: 'timeSlot', value: timeSlot } })}
             aria-pressed={formData.timeSlot === timeSlot ? 'true' : 'false'}
           >
                {timeSlot}
              </button>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className='form-input'>
        <div className='name'>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className='name'>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className='email'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className='cb'>
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
        {showPasswordFields && (
          <div>
            <label htmlFor="password">Create a password:</label>
            <input type="password" id="password" />
            <p></p>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input type="password" id="confirmPassword" />
          </div>
        )}
        {showMemberFields && (
          <div>
            <label htmlFor="memberEmail">Member Email:</label>
            <input type="email" id="memberEmail" name="memberEmail" value={formData.memberEmail} onChange={handleChange} />
            <p></p>
            <label htmlFor="memberPassword">Member Password:</label>
            <input type="password" id="memberPassword" name="memberPassword" value={formData.memberPassword} onChange={handleChange} />
          </div>
        )}
      </div>
      <button className='reserve-button' type="submit">Reserve Your Table</button>
      </form>
    </div>
  );
};

export default Availability;