import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetGalleryTextFilter } from "../../actions";
import "./gallery-text-filter.scss";

export class GalleryTextFilter extends React.Component {
  handleTextChange = e => {
    this.props.startSetGalleryTextFilter(e.target.value);
  };

  render() {
    return (
      <div className="gallery-text-filter">
        <input
          type="text"
          className="gallery-text-filter__input"
          placeholder="Search gallery by name"
          value={this.props.filters.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters.gallery
});

const mapDispatchToProps = dispatch => ({
  startSetGalleryTextFilter: text => dispatch(startSetGalleryTextFilter(text))
});

GalleryTextFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  startSetGalleryTextFilter: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryTextFilter);
