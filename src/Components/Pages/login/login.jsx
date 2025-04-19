import React from "react";
import "./Style.css"; // Make sure this path matches your project structure

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <h3>LOGIN</h3>

        <form>
          <div className="input-wrapper">
            <i className="ri-user-line"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-wrapper">
            <i className="ri-lock-line"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login Now</button>
        </form>

        <p>
          <b>Login</b> With Others
        </p>

        <div className="login-btn">
          <img src="/src/assets/icons/google.jpg" alt="google-logo" height="30" />
          <span>
            Login With <b>Google</b>
          </span>
        </div>
        <div className="login-btn">
          <img src="/src/assets/icons/facebook-logo.png" alt="facebook-logo" height="25" />
          <span>
            Login With <b>Facebook</b>
          </span>
        </div>
      </div>

      <div className="login-image">
        <img src="/src/assets/icons/bg-lines.png" alt="bg-lines" id="background-lines" />
        <div className="hero-image">
          <img src="/src/assets/icons/hero-image.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
