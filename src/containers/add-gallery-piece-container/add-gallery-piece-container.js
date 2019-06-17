import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import { startAddGalleryPiece } from "../../actions";
import history from "../../tools/history";
import "./add-gallery-piece-container.scss";

class AddGalleryPieceContainer extends React.Component {
  handleSubmit = async galleryPiece => {
    const galleryPieceId = await this.props.startAddGalleryPiece(galleryPiece);

    return history.push(`/manager/${galleryPieceId}`);
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
    dispatch(startAddGalleryPiece(galleryPiece))
});

AddGalleryPieceContainer.propTypes = {
  startAddGalleryPiece: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddGalleryPieceContainer);
