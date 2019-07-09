import React from "react";
import PropTypes from "prop-types";
import ManagerListItem from "../manager-list-item";
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

ManagerList.propTypes = {
  gallery: PropTypes.array.isRequired
};

export default ManagerList;
