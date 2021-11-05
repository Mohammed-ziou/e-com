import React from "react";

import SHOP_DATA from "./2.2 shop.data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import "./Shop.scss";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  componentDidMount = () => {
    console.log(this.state.collections.items);
  };

  render() {
    return (
      <div>
        <h1>Shop page</h1>
        {this.state.collections.map((coll) => (
          <CollectionPreview
            key={coll.id}
            title={coll.title}
            items={coll.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
