import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetGalleryTextFilter } from 'Actions/gallery';

export class GalleryListFilter extends React.Component {
    onTextChange = (e) => {
        this.props.startSetGalleryTextFilter(e.target.value);
    }

    render() {
        return (
            <div className="gallery_list_filter">
                <input
                    type="text"
                    className="gallery_list_filter__input"
                    placeholder="Search gallery by name"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
            </div>
        );
    }
}

/* istanbul ignore next */
const mapStateToProps = (state) => ({
    filters: state.filters.gallery
});

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startSetGalleryTextFilter: (text) => dispatch(startSetGalleryTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryListFilter);

GalleryListFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    startSetGalleryTextFilter: PropTypes.func.isRequired,
};

