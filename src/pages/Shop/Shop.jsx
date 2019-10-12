import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
