import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryTextFilter from "../../components/gallery-text-filter";
import GalleryCategoryFilter from "../../components/gallery-category-filter";
import selectGallery from "../../selectors/gallery";
import ManagerList from "../../components/manager-list";
import ManagerDetails from "../../components/manager-details";
import NavLink from "../../components/nav-link";

import "./manager-container.scss";

const ManagerContainer = ({ gallery, galleryPiece, galleryPieceId }) => {
  const inboxMobileClassname = galleryPieceId ? "inbox__mobile" : "";
  return (
    <div className="manager-container">
      <div className="inbox">
        <div className={`inbox__sidebar ${inboxMobileClassname}`}>
          <div className="inbox__sidebar-controls">
            <NavLink linkText="Add Gallery Piece" to="manager_add" />
            <GalleryTextFilter />
            <GalleryCategoryFilter />
          </div>
          <div className="inbox__sidebar-list">
            {/* <ManagerList gallery={gallery.slice(0, 5)} /> */}
            <ManagerList gallery={gallery} />
          </div>
        </div>
        <ManagerDetails
          galleryPiece={galleryPiece}
          galleryPieceId={galleryPieceId}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { galleryPieceId } = props.match.params;
  const galleryPiece = galleryPieceId
    ? state.gallery.find(
        stateGalleryPiece => stateGalleryPiece.galleryPieceId === galleryPieceId
      )
    : undefined;

  return {
    gallery: selectGallery(state.gallery, state.filters.gallery),
    galleryPiece,
    galleryPieceId
  };
};

ManagerContainer.propTypes = {
  gallery: PropTypes.array,
  galleryPiece: PropTypes.object
};

export default connect(mapStateToProps)(ManagerContainer);
