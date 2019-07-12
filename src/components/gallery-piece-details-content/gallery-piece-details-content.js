import React from "react";
import PropTypes from "prop-types";
import GalleryPieceDimensions from "../gallery-piece-dimensions";
import { galleryPieceShape } from "../../prop-shapes";
import { convertPriceFromDatabase } from "../../tools/price";
import "./gallery-piece-details-content.scss";

const GalleryPieceDetailsContent = ({ galleryPiece }) => {
  const { description, height, length, name, price, width } = galleryPiece;

  return (
    <div className="gallery-piece-details-content">
      <div className="gallery-piece-details-content__name">{name}</div>
      <div className="gallery-piece-details-content__price">
        ${convertPriceFromDatabase(price)}
      </div>
      {length && (
        <GalleryPieceDimensions
          className="gallery-piece-details-content__dimensions"
          height={height}
          length={length}
          width={width}
        />
      )}
      {description && (
        <div className="gallery-piece-details-content__description">
          <div className="gallery-piece-details-content__description-title">
            Description
          </div>
          <div className="gallery-piece-details-content__description-value">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

GalleryPieceDetailsContent.propTypes = {
  galleryPiece: PropTypes.shape(galleryPieceShape).isRequired
};

export default GalleryPieceDetailsContent;
