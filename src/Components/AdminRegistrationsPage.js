import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminRegistrationPage = () => {
  const [name, setName] = useState("Saddam ");
  const [email, setEmail] = useState("saddam@yopmail.com");
  const [password, setPassword] = useState("Freedom@10");
  const [adminType, setAdminType] = useState("subAdmin");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://q64g08xm-8080.inc1.devtunnels.ms/api/v1/admin/create-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            adminType,
          }),
        }
      );
      if (response.ok) {
        navigate("/registaretion-success");
        console.log("Admin registration successful");
      } else {
        console.error("Admin registration failed");
      }
    } catch (error) {
      console.error("Error registering admin:", error);
    }
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Admin Type:</label>
          <select
            value={adminType}
            onChange={(e) => setAdminType(e.target.value)}
            required
          >
            <option value="">Select Admin Type</option>
            <option value="superAdmin">Super Admin</option>
            <option value="subAdmin">Sub Admin</option>
            <option value="employeeAsAdmin">Employee as Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegistrationPage;
