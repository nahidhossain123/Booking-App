import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="nav-container container">
        <span onClick={() => navigate("/")} className="logo">
          Pro<span>Boo</span>king
        </span>

        <div className="nav-items">
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="nav-btn"
          >
            Register
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="nav-btn"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
