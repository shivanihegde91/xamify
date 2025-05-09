// src/Components/Admin/ManageUser.jsx

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../../appwrite/auth";
import service from "../../../appwrite/cong";

import "./ManageUser.css";

const ManageUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher",
    phone: "", // Optional: if needed, include a phone field
  });

  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "teacher",
      phone: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const userAccount = await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone || "",
      });

      if (userAccount) {
        // Store user in your backend as well
        const res = await service.manageUser(
          formData.name,
          formData.email,
          formData.password,
          formData.role
        );

        setSuccess("User account created successfully!");
        setUsers((prevUsers) => [...prevUsers, { ...formData, id: res.$id }]);
        resetForm();

      } else {
        setError("Failed to create account. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred during account creation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-teacher-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          onChange={handleChange}
          value={formData.phone}
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>

      {success && <p className="success-msg">{success}</p>}
      {error && <p className="error-msg">{error}</p>}

      <div className="users-table">
        <h3>Users List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
