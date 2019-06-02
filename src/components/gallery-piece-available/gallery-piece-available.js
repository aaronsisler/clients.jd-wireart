import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./gallery-piece-available.scss";

const GalleryPieceAvailable = ({ galleryPieceId, isSold }) => (
  <div className="gallery-piece-available">
    {isSold ? (
      <div className="gallery_piece_available__sold">
        Sold Out
        <br />
        <br />
        <Link
          className="gallery_piece_available__link nav_link"
          to={`/contact/${galleryPieceId}/?custom`}
        >
          Click to Custom Order
        </Link>
      </div>
    ) : (
      <Link
        className="gallery_piece_available__link nav_link"
        to={`/contact/${galleryPieceId}`}
      >
        Click to Purchase
      </Link>
    )}
  </div>
);

GalleryPieceAvailable.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  isSold: PropTypes.bool
};

export default GalleryPieceAvailable;
