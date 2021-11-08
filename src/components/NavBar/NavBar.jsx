import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./NavBar.scss";

const NavBar = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <NavLink className="option" to="/signin">
            Sign in
          </NavLink>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavBar);
