import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import { startEditGalleryPiece } from "../../actions";
import "./edit-gallery-piece-container.scss";

const EditGalleryPieceContainer = ({ galleryPiece, startEditGalleryPiece }) => (
  <div className="edit-gallery-piece-container">
    <div className="edit-gallery-piece-container__title">
      Edit Gallery Piece
    </div>
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

EditGalleryPieceContainer.propTypes = {
  galleryPiece: PropTypes.object.isRequired,
  startEditGalleryPiece: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(EditGalleryPieceContainer);
