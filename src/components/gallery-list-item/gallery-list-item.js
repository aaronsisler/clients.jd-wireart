import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gallery-list-item.scss";

const GalleryListItem = ({ galleryPieceId, imageSrc, name }) => (
  <div className="gallery-list-item">
    {imageSrc ? (
      <img src={imageSrc} alt={name} className="gallery-list-item__image" />
    ) : (
      <img
        src="/images/site/no_image_available.svg"
        alt="not available"
        className="gallery-list-item__image"
      />
    )}
    <div className="gallery-list-item__content">
      <div className="gallery-list-item__content-name">{name}</div>
      <Link className="nav-link" to={`/gallery_piece/${galleryPieceId}`}>
        View Details
      </Link>
    </div>
  </div>
);

GalleryListItem.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default GalleryListItem;
