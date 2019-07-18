import React from "react";
import PropTypes from "prop-types";
import GalleryListItem from "../gallery-list-item";
import "./gallery-list.scss";

const GalleryList = ({ gallery }) => {
  if (gallery.length === 0) {
    return (
      <div className="gallery-list gallery-list--empty">No available items</div>
    );
  }

  return (
    <div className="gallery-list">
      {gallery.map(galleryItem => (
        <GalleryListItem key={galleryItem.galleryPieceId} {...galleryItem} />
      ))}
    </div>
  );
};

GalleryList.propTypes = {
  gallery: PropTypes.array
};

export default GalleryList;
