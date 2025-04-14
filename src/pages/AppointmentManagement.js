// src/pages/AppointmentManagement.js
import React, { useState, useEffect } from "react";

function AppointmentManagement() {
  // For now, we use dummy data to simulate appointments
  const [appointments, setAppointments] = useState([]);

  // Simulate fetching appointments from your API on component mount
  useEffect(() => {
    // Dummy appointments data
    const dummyAppointments = [
      { id: 1, dateTime: "2025-05-02T10:00", doctor: "Dr. Smith" },
      { id: 2, dateTime: "2025-05-03T14:30", doctor: "Dr. Johnson" }
    ];
    setAppointments(dummyAppointments);
  }, []);

  // Handler for cancelling an appointment
  const handleCancel = (appointmentId) => {
    // For now, simply log the cancellation action to the console.
    console.log("Cancelling appointment with id:", appointmentId);
    
    // To simulate cancellation, filter out the appointment from the dummy data.
    setAppointments(appointments.filter(appt => appt.id !== appointmentId));
  };

  return (
    <div className="container">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id} style={{ marginBottom: "10px" }}>
              <strong>Date/Time: </strong>
              {new Date(appt.dateTime).toLocaleString()} &nbsp;
              <strong>Doctor: </strong>
              {appt.doctor} &nbsp;
              <button onClick={() => handleCancel(appt.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentManagement;
