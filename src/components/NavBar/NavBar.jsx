import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/">
          Home
        </NavLink>
        <NavLink className="option" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
