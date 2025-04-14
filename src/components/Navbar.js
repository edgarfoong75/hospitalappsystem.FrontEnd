// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ userRole }) {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
      {/* Always visible: Home */}
      <Link
        to="/"
        style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
      >
        Home
      </Link>

      {/* Navigation for Patient */}
      {userRole === 'patient' && (
        <>
          <Link
            to="/schedule"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Schedule Appointment
          </Link>
          <Link
            to="/manage-appointments"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            My Appointments
          </Link>
          <Link
            to="/profile"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Profile
          </Link>
        </>
      )}

      {/* Navigation for Doctor */}
      {userRole === 'doctor' && (
        <>
          <Link
            to="/doctor"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Doctor Dashboard
          </Link>
          <Link
            to="/profile"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Profile
          </Link>
        </>
      )}

      {/* Navigation for Admin */}
      {userRole === 'admin' && (
        <>
          <Link
            to="/admin"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Admin Dashboard
          </Link>
          <Link
            to="/profile"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Profile
          </Link>
        </>
      )}

      {/* If the user is not authenticated */}
      {(!userRole || userRole === '') && (
        <>
          <Link
            to="/login"
            style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}
          >
            Login
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
