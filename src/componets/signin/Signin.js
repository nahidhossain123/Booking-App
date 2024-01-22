import React from "react";
import "./signin.css";
export default function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-items">
        <div className="animated-item">
          <div className="title">
            <p>Sign in or create an account</p>
          </div>
          <form>
            <div>
              <label>
                <span>Email addres</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your email address"
              />
            </div>
            <div>
              <label>
                <span>Password</span>
              </label>
              <input
                type="password"
                name="new_passowrd"
                placeholder="new password"
              />
            </div>
            <div>
              <button>
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
