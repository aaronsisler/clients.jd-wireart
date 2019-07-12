import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import {
  startEditGalleryPiece,
  startSetErrorNotification,
  startSetSuccessNotification
} from "../../actions";
import "./edit-gallery-piece-details-container.scss";

class EditGalleryPieceDetailsContainer extends React.Component {
  handleSubmit = async galleryPiece => {
    const { galleryPieceId } = this.props.galleryPiece;
    try {
      await this.props.startEditGalleryPiece(galleryPieceId, galleryPiece);
      this.props.startSetSuccessNotification("Gallery piece updated");
    } catch (error) {
      this.props.startSetErrorNotification(
        "Gallery piece update failed. Please try again."
      );
    }
  };

  render() {
    return (
      <div className="edit-gallery-piece-details-container">
        <GalleryPieceForm
          galleryPiece={this.props.galleryPiece}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditGalleryPiece: (galleryPieceId, galleryPiece) =>
    dispatch(startEditGalleryPiece(galleryPieceId, galleryPiece)),
  startSetErrorNotification: notification =>
    dispatch(startSetErrorNotification(notification)),
  startSetSuccessNotification: notification =>
    dispatch(startSetSuccessNotification(notification))
});

EditGalleryPieceDetailsContainer.propTypes = {
  galleryPiece: PropTypes.object.isRequired,
  startEditGalleryPiece: PropTypes.func.isRequired,
  startSetErrorNotification: PropTypes.func.isRequired,
  startSetSuccessNotification: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(EditGalleryPieceDetailsContainer);
