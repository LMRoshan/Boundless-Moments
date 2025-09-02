import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-content">
              <h3>Boundless Moments</h3>
              <p>
                Professional photography services specializing in portrait,
                event, and commercial photography.
              </p>
              <div className="social-links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="footer-content">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-content">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Street Photography</a>
                </li>
                <li>
                  <a href="#">Wedding Photography</a>
                </li>
                <li>
                  <a href="#">Photo Editing</a>
                </li>
                <li>
                  <a href="#">Landscape Photography</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2023 Boundless Moments. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
