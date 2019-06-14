import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import { startEditGalleryPiece } from "../../actions";
import "./edit-gallery-piece-details-container.scss";

const EditGalleryPieceDetailsContainer = ({
  galleryPiece,
  startEditGalleryPiece
}) => (
  <div className="edit-gallery-piece-details-container">
    <GalleryPieceForm
      galleryPiece={galleryPiece}
      onSubmit={startEditGalleryPiece}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startEditGalleryPiece: (galleryPieceId, galleryPiece) =>
    dispatch(startEditGalleryPiece(galleryPieceId, galleryPiece))
});

EditGalleryPieceDetailsContainer.propTypes = {
  galleryPiece: PropTypes.object.isRequired,
  startEditGalleryPiece: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(EditGalleryPieceDetailsContainer);
