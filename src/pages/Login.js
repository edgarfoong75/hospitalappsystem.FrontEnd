// src/pages/Login.js
import React, { useState } from "react";

function Login() {
  // Removed setError since it's not used
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    
    // Placeholder for API call or error handling
    // For example:
    // try {
    //   const response = await axios.post("/api/login", { email, password });
    // } catch (err) {
    //   setError("Login failed. Please check your credentials.");
    // }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
