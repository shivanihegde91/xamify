/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const loggedIn = await authService.checkIfLoggedIn();

      if (loggedIn) {
        const userData = await authService.getCurrentUser();
        const isAdmin = userData.prefs?.isAdmin === true || userData.prefs?.isAdmin === "true";
        dispatch(login({ userData, userId: userData.$id, isAdmin }));
        navigate(isAdmin ? "/admindashboard" : "/userdashboard");
        return;
      }

      // Perform login
      await authService.login({
        email: formData.email,
        password: formData.password,
      });

      const userData = await authService.getCurrentUser();
      const isAdmin = userData.prefs?.isAdmin === true || userData.prefs?.isAdmin === "true";
      dispatch(login({ userData, userId: userData.$id, isAdmin }));
      navigate(isAdmin ? "/admindashboard" : "/entry");

    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Perform login
      await authService.login({
        email: formData.email,
        password: formData.password,
      });

      const userData = await authService.getCurrentUser();
      const isAdmin = userData.prefs?.isAdmin === true || userData.prefs?.isAdmin === "true";
      dispatch(login({ userData, userId: userData.$id, isAdmin }));

      if(isAdmin){
      navigate("/admindashboard");
      }
      else{
        navigate("/userdashboard")
      }

    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;


