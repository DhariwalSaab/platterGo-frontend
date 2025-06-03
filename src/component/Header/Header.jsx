import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = ({ onViewMenuClick }) => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Your Food. Your Time. Zero Waiting.</h2>
        <p>Pre-order meals in seconds with PlatterGo.</p>
        <button onClick={onViewMenuClick}>View Menu</button>
      </div>
      <div className="header-img">
        <img src={assets.main} alt="Main Dish" />
      </div>
    </div>
  );
};

export default Header;
