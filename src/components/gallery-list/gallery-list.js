import React from "react";
import GalleryListItem from "../gallery-list-item";
import PropTypes from "prop-types";
import "./gallery-list.scss";

class GalleryList extends React.Component {
  render() {
    if (this.props.gallery.length === 0) {
      return <div className="gallery-list empty">No available items</div>;
    }

    return (
      <div className="gallery-list">
        {this.props.gallery.map(galleryItem => (
          <GalleryListItem key={galleryItem.galleryPieceId} {...galleryItem} />
        ))}
      </div>
    );
  }
}

GalleryList.propTypes = {
  gallery: PropTypes.array
};

export default GalleryList;
