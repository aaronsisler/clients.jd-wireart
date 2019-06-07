import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ManagerListItem from "../manager-list-item";
import selectGallery from "../../selectors/gallery";
import "./manager-list.scss";

const ManagerList = ({ gallery }) => {
  if (gallery.length === 0) {
    return <div className="manager-list__empty">No available items</div>;
  }

  return (
    <div className="manager-list">
      {gallery.map(galleryItem => (
        <ManagerListItem
          key={galleryItem.galleryPieceId}
          galleryPieceId={galleryItem.galleryPieceId}
          name={galleryItem.name}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  gallery: selectGallery(state.gallery, state.filters.gallery)
});

ManagerList.propTypes = {
  gallery: PropTypes.array
};

export default connect(mapStateToProps)(ManagerList);
