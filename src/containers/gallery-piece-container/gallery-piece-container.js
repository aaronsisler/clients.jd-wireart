import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import history from "../../tools/history";
import GalleryPieceDetails from "../../components/gallery-piece-details";
import GalleryPieceImage from "../../components/gallery-piece-image";

import "./gallery-piece-container.scss";

class GalleryPieceContainer extends React.Component {
  componentDidMount() {
    if (!this.props.galleryPiece) {
      history.push("/gallery_piece_not_found");
    }
  }

  render() {
    const { galleryPiece } = this.props;
    return (
      <div className="gallery-piece-container">
        {galleryPiece && <GalleryPieceDetails galleryPiece={galleryPiece} />}
        {galleryPiece && <GalleryPieceImage galleryPiece={galleryPiece} />}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  galleryPiece: state.gallery.find(
    galleryPiece => galleryPiece.galleryPieceId === props.match.params.id
  )
});

GalleryPieceContainer.propTypes = {
  galleryPiece: PropTypes.object
};

export default connect(mapStateToProps)(GalleryPieceContainer);
