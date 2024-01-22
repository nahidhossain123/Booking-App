import React from "react";
import "./signup.css";
export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-items">
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
              <label>
                <span>Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="confirm password"
              />
            </div>
            <div>
              <button>
                <span>Signup</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
