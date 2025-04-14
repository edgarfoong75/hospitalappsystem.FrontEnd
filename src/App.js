// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppointmentScheduling from "./pages/AppointmentScheduling";
import AppointmentManagement from "./pages/AppointmentManagement";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PatientProfile from "./pages/PatientProfile";
import Navbar from "./components/Navbar";

function App() {
  // Simulate the user role ("patient" for this example)
  const userRole = "";

  return (
    <Router>
      <div>
        <Navbar userRole={userRole} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/schedule" element={<AppointmentScheduling />} />
          <Route path="/manage-appointments" element={<AppointmentManagement />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<PatientProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
