import { useNavigate } from "react-router-dom";
import "../styles/FrontPage.css"; // We will create this file next

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="front-wrapper">
      <div className="front-container">
        <h1 className="front-title">Welcome</h1>
        <p className="front-subtitle">Welcome to Mail App</p>
        
        <div className="button-group">
          <button 
            className="front-btn btn-primary" 
            onClick={() => navigate("/register")}
          >
            Register New User
          </button>
          
          <button 
            className="front-btn btn-secondary" 
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}