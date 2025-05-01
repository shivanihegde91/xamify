// src/Components/SignUp.jsx
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'admin', // Default role to admin
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
    setError('');
    try {
      const userAccount = await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone,
        role: formData.role, // Pass the role to the auth service
      });

      if (userAccount) {
        navigate(`/${formData.role}dashboard`); // Redirect based on role
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during account creation.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-selector">
        <button onClick={() => setFormData((prev) => ({ ...prev, role: 'admin' }))}>
          Admin
        </button>
        <button onClick={() => setFormData((prev) => ({ ...prev, role: 'user' }), navigate('/usersignup'))}>
          User
        </button>
      </div>
      <form onSubmit={handleSignUp}>
        {formData.role === 'admin' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
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
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}
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

export default SignUp;*/
// src/Components/SignUp.jsx



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'admin', // Default role to admin
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const UserDashBoard=(e)=>{
    if(formData.password=="user123"){
      navigate("/userdashboard")
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userAccount = await authService.createAccount({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        phone: formData.phone, // Pass the role to the auth service
      });

      if (userAccount) {
        navigate(`/${formData.role}dashboard`); // Redirect based on role
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during account creation.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-selector">
        <button onClick={() => setFormData((prev) => ({ ...prev, role: 'admin' }))}>
          Admin
        </button>
        <button onClick={() => setFormData((prev) => ({ ...prev, role: 'user' }))}>
          User
        </button>
      </div>
      <form onSubmit={handleSignUp}>
        {formData.role === 'admin' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
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
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}
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
        <button type="submit" onClick={UserDashBoard}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;