import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GalleryList from 'Gallery/GalleryList';
import GalleryTextFilter from 'Gallery/GalleryTextFilter';
import GalleryCategoryFilter from 'Gallery/GalleryCategoryFilter';
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
                <div className="gallery_container__filters">
                    <GalleryTextFilter />
                    <GalleryCategoryFilter />
                </div>
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
