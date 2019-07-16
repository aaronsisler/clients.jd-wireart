import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetGalleryTextFilter } from "../../actions";
import Input from "../input";
import "./gallery-text-filter.scss";

export class GalleryTextFilter extends React.Component {
  handleTextChange = e => {
    this.props.startSetGalleryTextFilter(e.target.value);
  };

  render() {
    return (
      <div className="gallery-text-filter">
        <Input
          name="gallery-text-filter"
          label="Search gallery by name"
          onChange={this.handleTextChange}
          value={this.props.filters.text}
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
