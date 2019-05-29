import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startSetGalleryCategoryFilter } from "../../actions";
import categories from "../../content/category";
import "./gallery-category-filter.scss";

export class GalleryCategoryFilter extends React.Component {
  handleCategoryFilterChange = e => {
    const category = e.target.value;
    this.props.startSetGalleryCategoryFilter(category);
  };

  render() {
    return (
      <div className="gallery-category-filter">
        <select
          className="gallery-category-filter__select"
          onChange={this.handleCategoryFilterChange}
          value={this.props.filters.category}
        >
          {categories.map(category => {
            const { key, value } = category;
            return (
              <option key={key} value={key}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => ({
  filters: state.filters.gallery
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  startSetGalleryCategoryFilter: category =>
    dispatch(startSetGalleryCategoryFilter(category))
});

GalleryCategoryFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  startSetGalleryCategoryFilter: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryCategoryFilter);
