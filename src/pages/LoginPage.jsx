import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../services/AuthService";
import "../styles/auth.css"; 

// Imported the clean back arrow icon component
import { IoArrowBack } from "react-icons/io5";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

const handleSubmit = async (e) => {

    e.preventDefault();

    try 
    {

        const response = await loginUser({
            email,
            password
        });

       if(response.data.success)
        {
            localStorage.setItem(
            "email",
            response.data.email
        );

        localStorage.setItem(
        "token",
            response.data.token
        );

        navigate("/dashboard/inbox");
        }
    }
    catch(error)
    {
        alert(
            error.response?.data?.message ||
            "Invalid email or password"
        );
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
          <h1 className="auth-title">Sign in</h1>
          <p className="auth-subtitle">to continue to your account</p>
        </div>

        {/* The onSubmit event handles everything smoothly when the button is clicked */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
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
            Next
          </button>
        </form>
      </div>
    </div>
  );
}