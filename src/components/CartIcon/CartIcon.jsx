import React from "react";
import { connect } from "react-redux";

import { toggleCartDisplay } from "./../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg";
import "./CartIcon.scss";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartDisplay, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDisplay}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
