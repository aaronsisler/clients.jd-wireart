import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GalleryPieceDetails from 'Gallery/GalleryPieceDetails';
import GalleryPieceImage from 'Gallery/GalleryPieceImage';

class GalleryPieceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPiece = {} } = this.props;
        return (
            <div className="gallery_piece_container">
                <GalleryPieceDetails {...galleryPiece} />
                <GalleryPieceImage {...galleryPiece} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    galleryPiece: state.gallery.find((galleryPiece) => galleryPiece.galleryPieceId === props.match.params.id),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPieceContainer);

GalleryPieceContainer.propTypes = {
    galleryPiece: PropTypes.object,
};
