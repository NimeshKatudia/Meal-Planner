import React, { useState } from "react";
import axios from "axios";
import Udata from "./LoginSignUp.js";
const RegistrationLogin = () => {
  const [formData, setFormData] = useState({
    name: Udata.name,
    email: Udata.name,
    password: Udata.password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/loginSignUp", formData);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/login", formData);
      console.log("Login successful");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  console.log(Udata);
  return (
    <div>
      <h1>Registration & Login</h1>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default RegistrationLogin;
