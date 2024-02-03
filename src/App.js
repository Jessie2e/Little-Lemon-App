// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import Homepage from './Homepage';
import Footer from './Footer';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import Reservation from './Reservation';
import About from './About';
import Availability from './Availability';

function App() {
  return (
    <Router>
      <Nav />
      {/* Replace Switch with Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/availability" element={<Availability />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
