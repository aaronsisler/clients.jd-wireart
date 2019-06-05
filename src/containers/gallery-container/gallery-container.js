import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import selectGallery from "../../selectors/gallery";
import GalleryList from "../../components/gallery-list";
import GalleryTextFilter from "../../components/gallery-text-filter";
// import GalleryCategoryFilter from "../../components/gallery-category-filter";
import GalleryCategoryFilter from "../../components/dropdown";
import "./gallery-container.scss";

class GalleryContainer extends React.Component {
  render() {
    const { gallery } = this.props;
    return (
      <div className="gallery-container">
        <div className="gallery-container__header">
          <div className="gallery-container__header-title">Gallery</div>
          <div className="gallery-container__header-filters">
            <GalleryTextFilter />
            <GalleryCategoryFilter />
          </div>
        </div>
        <div className="gallery-container__content">
          <GalleryList gallery={gallery} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gallery: selectGallery(state.gallery, state.filters.gallery)
});

GalleryContainer.propTypes = {
  gallery: PropTypes.array
};

export default connect(mapStateToProps)(GalleryContainer);
