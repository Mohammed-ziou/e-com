import React from "react";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
