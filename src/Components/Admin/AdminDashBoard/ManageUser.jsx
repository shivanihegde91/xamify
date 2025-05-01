// src/Components/Admin/ManageUser.jsx
// src/Components/Admin/ManageUser.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
//import { Service } from "../../../appwrite/cong";
import { Service as service } from "../../../appwrite/cong";
import "./ManageUser.css";

const ManageUser = () => {
  const userId = useSelector((state) => state.auth.userId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "teacher", // Default role
  });
  const [users, setUsers] = useState([]); // State to store the list of users
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    // Optional: simple password length check
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const res = await service.manageUser(
        formData.name,
        formData.email,
        formData.password,
        formData.role
      );
      setSuccess("User account created successfully!");
      setFormData({ name: "", email: "", password: "", role: "teacher" }); // Clear form
      setUsers((prevUsers) => [...prevUsers, { ...formData, id: res.$id }]); // Add new user to the list
      console.log(res);
    } catch (err) {
      setError("Error creating user: " + err.message);
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
          type="text"
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
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="teacher">Teacher</option>
          <option value="student">Clear</option>
          <option value="admin">academic adviser</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
      {success && <p className="success-msg">{success}</p>}
      {error && <p className="error-msg">{error}</p>}

      {/* Users Table */}
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