import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./../CollectionPreview/CollectionPreview";

import { selectCollectionForPreview } from "./../../redux/shop/shop.selector";

import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((coll) => (
      <CollectionPreview key={coll.id} title={coll.title} items={coll.items} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
