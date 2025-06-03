import React from "react";
import "./Footer.css";
import { NavLink } from "react-router";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>platterGo</h2>
          <p>
            Pre-order your favorite meals for dine-in or takeaway—quick,
            convenient, and personalized just for you.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>
              <NavLink to="/about">About-us</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help & Support</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-123-567-8901</li>
            <li>platterGo@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2025 © PlatterGo.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
