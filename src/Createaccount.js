import React, { useState } from 'react';
import './App.css';

const Createaccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your authentication logic here
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please enter email, password, and confirm password.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else if (!isValidPassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
    } else {
      setError('');
      // Here you can perform further authentication actions, like making an API call
      console.log('Registration successful! Username:', username, 'Password:', password);
    }
  };

  // Function to validate password
  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Become A Little Lemon Member!</h2>
        <div className="login-form-group">
          <label htmlFor="login-username">Email:</label>
          <input
            type="password"
            id="login-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="login-password">Create Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Register</button>
        {error && <div className="login-error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Createaccount;