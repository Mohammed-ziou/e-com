import React from "react";

import "./CartItem.scss";

const CartItem = ({ item: { id, imageUrl, price, name, quantity } }) => {
  return (
    <div key={id} className="cart-item">
      <img src={imageUrl} alt="displaying the choosen product" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price"> {quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
