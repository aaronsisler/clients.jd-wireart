import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ManagerList from "../../components/manager-list";
import ManagerDetails from "../../components/manager-details";

import "./manager-container.scss";

const ManagerContainer = ({ gallery, galleryPiece, galleryPieceId }) => (
  <div className="manager-container">
    <div className="inbox">
      <div className={`inbox__list ${galleryPieceId ? "inbox__mobile" : ""}`}>
        <Link className="nav-link" to="/manager_add">
          Add Gallery Piece
        </Link>
        <ManagerList gallery={gallery} />
      </div>
      <ManagerDetails
        galleryPiece={galleryPiece}
        galleryPieceId={galleryPieceId}
      />
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const { galleryPieceId } = props.match.params;
  const galleryPiece = galleryPieceId
    ? state.gallery.find(
        stateGalleryPiece => stateGalleryPiece.galleryPieceId === galleryPieceId
      )
    : undefined;

  return {
    gallery: state.gallery,
    galleryPiece,
    galleryPieceId
  };
};

ManagerContainer.propTypes = {
  gallery: PropTypes.array,
  galleryPiece: PropTypes.object
};

export default connect(mapStateToProps)(ManagerContainer);
