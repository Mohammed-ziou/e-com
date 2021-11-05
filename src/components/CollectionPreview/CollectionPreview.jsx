import React from "react";

import "./CollectionPreview.scss";
import CollectionItem from "./../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((i, idx) => idx < 4)
          .map(({ id, ...itemsProps }) => (
            <CollectionItem key={id} {...itemsProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
