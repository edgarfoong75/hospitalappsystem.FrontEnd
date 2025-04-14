// src/pages/AppointmentScheduling.js
import React, { useState, useEffect } from "react";

function AppointmentScheduling() {
  // Dummy data: List of doctors
  const doctors = [
    { id: "doc1", name: "Dr. Smith" },
    { id: "doc2", name: "Dr. Johnson" }
  ];

  // State to hold available slots and user selections
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  // useEffect hook to simulate fetching available slots on component mount
  useEffect(() => {
    // Simulated data (you would eventually fetch this from an API)
    setAvailableSlots([
      { id: 1, dateTime: "2025-05-01T09:00" },
      { id: 2, dateTime: "2025-05-01T10:00" }
    ]);
  }, []);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply log the appointment details
    console.log("Scheduling appointment for doctor:", selectedDoctor, "at", selectedDateTime);
    // Future step: integrate an API call using axios to save the appointment in the backend
  };

  return (
    <div className="container">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="doctorSelect">Doctor/Department: </label>
          <select
            id="doctorSelect"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="dateTime">Select Date & Time: </label>
          <input
            type="datetime-local"
            id="dateTime"
            value={selectedDateTime}
            onChange={(e) => setSelectedDateTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>

      <h3>Available Appointment Slots</h3>
      <ul>
        {availableSlots.map((slot) => (
          <li key={slot.id}>
            {new Date(slot.dateTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentScheduling;
