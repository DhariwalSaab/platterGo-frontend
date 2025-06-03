import React, { useRef } from "react-dom/client";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <div className="container navbar">
        <div className="logo">
          <p>PlatterGo</p>
        </div>
        <div className="nav">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/Offers">Offers</NavLink>
              </li>
              <li>
                <NavLink to="/about">About-us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <p>login</p>
          <p>
            <NavLink to="/register">Signup</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
