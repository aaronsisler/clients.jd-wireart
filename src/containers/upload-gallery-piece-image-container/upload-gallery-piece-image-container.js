import React from "react";
import PropTypes from "prop-types";
import GalleryPieceImageUpload from "../../components/gallery-piece-image-upload";
import GalleryPieceImage from "../../components/gallery-piece-image";
import "./upload-gallery-piece-image-container.scss";

const UploadGalleryPieceImageContainer = ({
  galleryPieceId,
  imageSrc,
  name
}) => (
  <div className="upload-gallery-piece-image-container">
    <div className="upload-gallery-piece-image-container__upload">
      <GalleryPieceImageUpload galleryPieceId={galleryPieceId} />
    </div>
    <div className="upload-gallery-piece-image-container__image">
      <GalleryPieceImage imageSrc={imageSrc} name={name} />
    </div>
  </div>
);

UploadGalleryPieceImageContainer.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default UploadGalleryPieceImageContainer;
