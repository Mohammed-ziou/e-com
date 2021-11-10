import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "./../../components/CollectionsOverview/CollectionsOverview";
import Collection from "./../Collection/Collection";

import "./Shop.scss";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
