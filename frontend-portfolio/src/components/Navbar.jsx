import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from 'react-icons/fa';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 pe-4" style={{ background: "rgb(127, 52, 18)" }}>
      <Link className="navbar-brand fw-bold" to="/" style={{ color: "#e74c3c" }}>
        Boundless Moments
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="d-flex align-items-center access-btn">
          <Link
            className="fw-bold text-white"
            to="/login"
            style={{ fontSize: '0.85rem', textDecoration: 'none' }}
          >
            <FaShieldAlt className="me-2" />
            Admin Access
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;