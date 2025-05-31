import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-text">allbirds</div> {/* Stylish text logo */}

        <h2>Log in</h2>
        <p>Choose how you'd like to log in</p>

        <button className="shop-btn">Sign in with shop</button>

        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <input type="email" placeholder="Email" className="email-input" />
        <button className="continue-btn" disabled>Continue</button>

        <p className="privacy-text">Privacy</p>
      </div>
    </div>
  );
};

export default Login;
