// src/pages/AdminDashboard.js
import React, { useState, useEffect } from "react";

function AdminDashboard() {
  // Dummy data for appointments and users
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);

  // Simulate fetching data when the component mounts
  useEffect(() => {
    const dummyAppointments = [
      { id: 1, dateTime: "2025-05-02T09:00", doctor: "Dr. Smith", patient: "John Doe" },
      { id: 2, dateTime: "2025-05-03T11:30", doctor: "Dr. Johnson", patient: "Jane Smith" }
    ];
    const dummyUsers = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Patient" },
      { id: 2, name: "Dr. Smith", email: "dr.smith@example.com", role: "Doctor" },
      { id: 3, name: "Jane Smith", email: "jane@example.com", role: "Patient" }
    ];
    setAppointments(dummyAppointments);
    setUsers(dummyUsers);
  }, []);

  // Function to handle deletion of a user
  const handleDeleteUser = (userId) => {
    console.log("Deleting user with id:", userId);
    // For now, simulate deletion by filtering out the user from the dummy data.
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      
      {/* Section: All Appointments */}
      <section style={{ marginBottom: "30px" }}>
        <h3>All Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date/Time</th>
                <th>Doctor</th>
                <th>Patient</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.id}</td>
                  <td>{new Date(appt.dateTime).toLocaleString()}</td>
                  <td>{appt.doctor}</td>
                  <td>{appt.patient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Section: User Management */}
      <section>
        <h3>User Management</h3>
        {users.length === 0 ? (
          <p>No users to display.</p>
        ) : (
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;
