import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GalleryList from 'Gallery/GalleryList';
import GalleryListFilter from 'Gallery/GalleryListFilter';
import selectGallery from 'Selectors/gallery';

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery } = this.props;
        return (
            <div className="gallery_container">
                <div className="gallery_container__title">
                    Gallery
                </div>
                <GalleryListFilter />
                <GalleryList gallery={gallery} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gallery: selectGallery(state.gallery, state.filters.gallery),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);

GalleryContainer.propTypes = {
    gallery: PropTypes.array,
};
