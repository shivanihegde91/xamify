import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service, { Service } from '../../appwrite/cong'; // This is your fake user service
import './SignUp.css';

const UserSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userAccount = await service.manageUser(
        '', // name not collected in this form
        formData.email,
        formData.password
      );

      if (userAccount) {
        navigate('/userdashboard');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during account creation.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignUp;
