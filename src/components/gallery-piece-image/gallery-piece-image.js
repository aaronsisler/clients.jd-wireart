import React from "react";
import "./gallery-piece-image.scss";

const GalleryPieceImage = ({ imageSrc, name }) => (
  <div className="gallery-piece-image">
    {imageSrc ? (
      <img src={imageSrc} alt={name} />
    ) : (
      <img src="/images/site/no_image_available.svg" alt="None uploaded" />
    )}
  </div>
);

export default GalleryPieceImage;
