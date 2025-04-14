// src/pages/DoctorDashboard.js
import React, { useState, useEffect } from "react";

function DoctorDashboard() {
  // State for appointments
  const [appointments, setAppointments] = useState([]);
  
  // State for availability inputs: status, start time, and end time
  const [availabilityStatus, setAvailabilityStatus] = useState("Available");
  const [availabilityStart, setAvailabilityStart] = useState("");
  const [availabilityEnd, setAvailabilityEnd] = useState("");

  // Simulate fetching doctor's appointments on component mount
  useEffect(() => {
    const dummyAppointments = [
      { id: 1, dateTime: "2025-05-02T09:00", patientName: "John Doe" },
      { id: 2, dateTime: "2025-05-02T11:30", patientName: "Jane Smith" }
    ];
    setAppointments(dummyAppointments);
  }, []);

  // Handle the availability update form submission
  const handleAvailabilitySubmit = (e) => {
    e.preventDefault();
    console.log("Doctor availability updated:", {
      status: availabilityStatus,
      start: availabilityStart,
      end: availabilityEnd,
    });
    // Integrate API call here as needed

    // Clear form fields after submission
    setAvailabilityStatus("Available");
    setAvailabilityStart("");
    setAvailabilityEnd("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Doctor Dashboard</h2>
      
      {/* Appointment Schedule Section */}
      <section>
        <h3>Your Appointment Schedule</h3>
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          <ul>
            {appointments.map((appt) => (
              <li key={appt.id}>
                {new Date(appt.dateTime).toLocaleString()} with {appt.patientName}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Enhanced Availability Update Section */}
      <section style={{ marginTop: "20px" }}>
        <h3>Update Your Availability</h3>
        <form onSubmit={handleAvailabilitySubmit}>
          {/* Availability Status Dropdown */}
          <div style={{ marginBottom: "10px" }}>
            <label>
              Status:
              <select 
                value={availabilityStatus}
                onChange={(e) => setAvailabilityStatus(e.target.value)}
                style={{ marginLeft: "10px" }}
              >
                <option value="Available">Available</option>
                <option value="On Leave">On Leave</option>
              </select>
            </label>
          </div>
          {/* Start Time Input */}
          <div style={{ marginBottom: "10px" }}>
            <label>
              Start Time:
              <input
                type="datetime-local"
                value={availabilityStart}
                onChange={(e) => setAvailabilityStart(e.target.value)}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          {/* End Time Input */}
          <div style={{ marginBottom: "10px" }}>
            <label>
              End Time:
              <input
                type="datetime-local"
                value={availabilityEnd}
                onChange={(e) => setAvailabilityEnd(e.target.value)}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <button type="submit">Update Availability</button>
        </form>
      </section>
    </div>
  );
}

export default DoctorDashboard;
