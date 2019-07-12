import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import {
  startAddGalleryPiece,
  startSetErrorNotification,
  startSetSuccessNotification
} from "../../actions";
import history from "../../tools/history";
import "./add-gallery-piece-container.scss";

class AddGalleryPieceContainer extends React.Component {
  handleSubmit = async galleryPiece => {
    try {
      const galleryPieceId = await this.props.startAddGalleryPiece(
        galleryPiece
      );
      await this.props.startSetSuccessNotification("Gallery piece added");
      return history.push(`/manager/${galleryPieceId}`);
    } catch (error) {
      this.props.startSetErrorNotification(
        "Adding gallery piece failed. Please try again."
      );
    }
  };

  render() {
    return (
      <div className="add-gallery-piece-container">
        <div className="add-gallery-piece-container__form">
          <div className="add-gallery-piece-container__form-title">
            Add Gallery Piece
          </div>
          <GalleryPieceForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddGalleryPiece: galleryPiece =>
    dispatch(startAddGalleryPiece(galleryPiece)),
  startSetErrorNotification: notification =>
    dispatch(startSetErrorNotification(notification)),
  startSetSuccessNotification: notification =>
    dispatch(startSetSuccessNotification(notification))
});

AddGalleryPieceContainer.propTypes = {
  startAddGalleryPiece: PropTypes.func.isRequired,
  startSetErrorNotification: PropTypes.func.isRequired,
  startSetSuccessNotification: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddGalleryPieceContainer);
