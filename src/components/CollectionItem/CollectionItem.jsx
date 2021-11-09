import React from "react";
import { connect } from "react-redux";

import "./CollectionItem.scss";
import Button from "./../Button/Button";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => {
          addItem(item);
        }}
        black
      >
        Add To Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(null, mapDispatchToProps)(CollectionItem);
