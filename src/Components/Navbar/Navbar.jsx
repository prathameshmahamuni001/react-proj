import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link
            style={{ fontSize: "13px", textDecoration: "none", color: "black" }}
            to="/"
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            style={{ fontSize: "13px", textDecoration: "none", color: "black" }}
            to="/mens"
          >
            Men
          </Link>
        </li>

        <li>
          <Link
            style={{ fontSize: "13px", textDecoration: "none", color: "black" }}
            to="/womens"
          >
            Women
          </Link>
        </li>

        <li>
          <Link
            style={{ fontSize: "13px", textDecoration: "none", color: "black" }}
            to="/kids"
          >
            Kids
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
