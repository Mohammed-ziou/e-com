import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartDisplay } from "./../../redux/cart/cart.action";

import Button from "./../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropDown.scss";
import { createStructuredSelector } from "reselect";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.lenght !== 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-statment">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDisplay());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
