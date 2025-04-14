// src/pages/PatientProfile.js
import React, { useState } from "react";

function PatientProfile() {
  // Dummy data to simulate fetched profile details
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main Street",
    medicalHistory: "No known allergies."
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handler to update state when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving profile changes:", profile);
    // Here you would integrate an API call to save the updated profile,
    // for example: axios.put("/api/profile", profile) then update state accordingly.
    setIsEditing(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Patient Profile</h2>
      <form onSubmit={handleSave}>
        {/* Name Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>
        {/* Email Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>
        {/* Phone Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>
        {/* Address Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {/* Medical History */}
        <div style={{ marginBottom: "10px" }}>
          <label>Medical History: </label>
          <textarea
            name="medicalHistory"
            value={profile.medicalHistory}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        {/* Edit/Save Button */}
        {isEditing ? (
          <button type="submit">Save Changes</button>
        ) : (
          <button type="button" onClick={handleEditToggle}>
            Edit Profile
          </button>
        )}
      </form>
    </div>
  );
}

export default PatientProfile;
