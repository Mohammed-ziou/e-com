import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/svg/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import CartDropDown from "../CartDropDown/CartDropDown";
import CartIcon from "../CartIcon/CartIcon";
import { selectCurrenUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

import "./NavBar.scss";

const NavBar = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(NavBar);
