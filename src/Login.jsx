import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();
  const handleLogin = () => {
  const isRegistered = localStorage.getItem("isRegistered");
  const role = localStorage.getItem("role");

  if (!isRegistered) {
    alert("Please register first ❌");
    return;
  }

  // ✅ login success
  localStorage.setItem("isLoggedIn", "true");

  // 🔀 redirect based on role
  if (role === "teacher") {
    navigate("/teacher_profile");
  } else {
    navigate("/student_profile");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Image Section */}
        <div className="card-left">
          <img
            src="/images/loginProfile.png"
            alt="profile"
            className="profile-img"
          />
        </div>

        {/* Right Form Section */}
        <div className="card-right">
          <h1 className="title">Have An Account?</h1>
          <input
            type="text"
            placeholder="Username"
            className="input"
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
          />

          <button className="login-btn" onClick={handleLogin} >Login</button>

          <p className="register-text">
            Not a user? <Link to="/register">Register</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
