// components/Login.jsx
import React from "react";

export default function Login({ navigate }) {
  const [userType, setUserType] = React.useState("student");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // SAME credentials as original project
    if (userType === "admin" && username === "admin" && password === "admin123") {
      navigate("admin");
    } else if (userType === "student" && username === "STU1001" && password === "student123") {
      navigate("student");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          <h1>Student <span>Tracker</span></h1>
        </div>

        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>Sign in to access your student dashboard and track your academic progress with our comprehensive attendance and grade tracking system.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-header">
          <h2 id="formTitle">{userType === "admin" ? "Admin Login" : "Student Login"}</h2>
          <p id="formSubtitle">{userType === "admin" ? "Enter your credentials to access the admin dashboard" : "Enter your credentials to access the student dashboard"}</p>
        </div>

        <div className="user-type-selector">
          <div className={`user-type ${userType === "student" ? "active" : ""}`} data-type="student" onClick={() => setUserType("student")}>
            <i className="fas fa-user-graduate"></i>
            <span>Student</span>
          </div>
          <div className={`user-type ${userType === "admin" ? "active" : ""}`} data-type="admin" onClick={() => setUserType("admin")}>
            <i className="fas fa-user-shield"></i>
            <span>Administrator</span>
          </div>
        </div>

        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" id="usernameLabel">{userType === "admin" ? "Username" : "Student ID"}</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input type="text" id="username" className="form-control" placeholder={userType === "admin" ? "Enter your username" : "Enter your Student ID"} value={username} onChange={(e)=>setUsername(e.target.value)} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
          </div>

          <div className="remember-forgot">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}
