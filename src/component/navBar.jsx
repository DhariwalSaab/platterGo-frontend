import React, { useState } from "react";
import "./navBar.css";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router";

const NavBar = () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);

  const [IsLogin, setIsLogin] = useState(!!accessToken);
  console.log(IsLogin);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1 className="logo">platterGo</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#explore-menu">Menu</a>
          </li>
          <li
          // onClick={() => setMenu("Order")}
          // className={menu === "Order" ? "active" : " "}
          >
            <NavLink to="/orders">Order</NavLink>
          </li>
          <li
          // onClick={() => setMenu("About-Us")}
          // className={menu === "About-Us" ? "active" : " "}
          >
            <NavLink to="/about">About-us</NavLink>
          </li>
        </ul>
        <div className="nav-right">
          <img src={assets.search_icon} />
          <div className="nav-search-icon">
            <NavLink to="/cart">
              <img src={assets.basket_icon} />
              <div className="dot"></div>
            </NavLink>
          </div>
          <button>
            {!IsLogin ? (
              <NavLink to="/login">SignIn</NavLink>
            ) : (
              <NavLink
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  setIsLogin(false);
                }}
              >
                logout
              </NavLink>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
