import React from "react";
import { connect } from "react-redux";

import toggleCartDisplay from "./../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartDisplay }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDisplay}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">3</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
