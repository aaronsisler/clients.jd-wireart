import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GalleryList from 'Gallery/GalleryList';
import { startSetGallery } from 'Actions/gallery';

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props)
        props.startSetGallery();
    }

    render() {
        return (
            <div className="gallery_container">
                <h2>
                    Gallery Container
                </h2>
                <GalleryList gallery={this.props.gallery} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gallery: state.gallery,
});

const mapDispatchToProps = (dispatch) => ({
    startSetGallery: () => dispatch(startSetGallery()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);

GalleryContainer.propTypes = {
    gallery: PropTypes.array,
    startSetGallery: PropTypes.func.isRequired,
};
