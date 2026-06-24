import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/auth.css"; 

// Imported the clean back arrow icon component
import { IoArrowBack } from "react-icons/io5";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ email, password });
      alert(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data || error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      {/* Swapped the <img> for the React Icon component */}
      <IoArrowBack 
        onClick={() => navigate("/")} 
        className="leftarrow-icon" 
        size={28} 
      />
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Create account</h1>
          <p className="auth-subtitle">Enter your details to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <p className="mailLabel">Email</p>
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}