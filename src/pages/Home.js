// src/pages/Home.js
import React from 'react';
import './Home.css'; // Make sure this file exists in the same folder

function Home() {
  return (
    <div className="container home-container">
      <div className="home-content">
        <h1>Welcome to the Hospital Appointment System</h1>
        <p>
          Manage your health effortlessly with our innovative appointment scheduling system.
          Book, manage, and track your appointments with ease.
        </p>
        <button className="cta-button">Book an Appointment</button>
      </div>
    </div>
  );
}

export default Home;
