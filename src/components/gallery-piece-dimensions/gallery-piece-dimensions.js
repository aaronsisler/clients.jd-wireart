import React from "react";
import PropTypes from "prop-types";
import "./gallery-piece-dimensions.scss";

const GalleryPieceDimensions = ({ height, length, width }) => (
  <div className="gallery-piece-dimensions">
    <div className="gallery-piece-dimensions__title">Dimensions</div>
    <div className="gallery-piece-dimensions__values">
      <div className="gallery-piece-dimensions__values-length">
        Length
        <br />
        {length}&nbsp;in.
      </div>
      <div className="gallery-piece-dimensions__values-width">
        Width
        <br />
        {width}&nbsp;in.
      </div>
      <div className="gallery-piece-dimensions__values-height">
        Height
        <br />
        {height}&nbsp;in.
      </div>
    </div>
  </div>
);

GalleryPieceDimensions.propTypes = {
  height: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default GalleryPieceDimensions;
