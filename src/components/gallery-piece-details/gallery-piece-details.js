import React from "react";
import PropTypes from "prop-types";
import { galleryPieceShape } from "../../prop-shapes";
import PaypalCodeValidation from "../paypal-code-validation";
import GalleryPieceAvailable from "../gallery-piece-available";
import GalleryPieceDetailsContent from "../gallery-piece-details-content";
import "./gallery-piece-details.scss";

const GalleryPieceDetails = ({ galleryPiece }) => {
  const { galleryPieceId, isPaypalActive, isSold, name, price } = galleryPiece;
  return (
    <div className="gallery-piece-details">
      <div className="gallery-piece-details__content">
        <GalleryPieceDetailsContent galleryPiece={galleryPiece} />
        <div className="gallery-piece-details__content-process">
          {isPaypalActive ? (
            <PaypalCodeValidation
              galleryPieceId={galleryPieceId}
              name={name}
              price={price}
            />
          ) : (
            <GalleryPieceAvailable
              galleryPieceId={galleryPieceId}
              isSold={isSold}
            />
          )}
        </div>
      </div>
    </div>
  );
};

GalleryPieceDetails.propTypes = {
  galleryPiece: PropTypes.shape(galleryPieceShape).isRequired
};

export default GalleryPieceDetails;
