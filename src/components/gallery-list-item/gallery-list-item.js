import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gallery-list-item.scss";

const GalleryListItem = ({ galleryPieceId, imageSrc, name }) => (
  <div className="gallery-list-item">
    <div className="gallery-list-item__image">
      {imageSrc ? (
        <img src={imageSrc} alt={name} />
      ) : (
        <img src="/images/site/no_image_available.svg" alt="not available" />
      )}
    </div>
    <div className="gallery-list-item__content">
      <div className="gallery-list-item__content-name">{name}</div>
      <div className="gallery-list-item__content-link">
        <Link className="nav_link" to={`/gallery_piece/${galleryPieceId}`}>
          View Details
        </Link>
      </div>
    </div>
  </div>
);

GalleryListItem.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default GalleryListItem;
