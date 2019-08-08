import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gallery-list-item.scss";

const GalleryListItem = ({ galleryPieceId, imageSrc, name }) => (
  <div className="gallery-list-item">
    <Link className="no-style-link" to={`/gallery_piece/${galleryPieceId}`}>
      <img src={imageSrc} alt={name} className="gallery-list-item__image" />
    </Link>
  </div>
);

GalleryListItem.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default GalleryListItem;
