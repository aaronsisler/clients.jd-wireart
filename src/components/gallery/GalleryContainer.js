import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GalleryList from 'Gallery/GalleryList';
import { startSetGallery } from 'Actions/gallery';

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.handleRetrieveGallery();
    }

    handleRetrieveGallery = async () => {
        await this.props.startSetGallery();
        this.setState(() => ({ isLoading: false }));
    }

    render() {
        const { gallery } = this.props;
        return (
            <div className="gallery_container">
                <div className="gallery_container__title">
                    Gallery
                </div>
                {this.state.isLoading
                    && <div className="gallery_container__loading">Getting our lastest pieces</div>}
                {!this.state.isLoading && <GalleryList gallery={gallery} />}
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
