import React, { useState } from 'react';
import './App.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your authentication logic here
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password.');
    } else {
      setError('');
      // Here you can perform further authentication actions, like making an API call
      console.log('Login successful! Username:', username, 'Password:', password);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        {error && <div className="login-error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;