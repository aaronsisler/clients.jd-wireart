import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GalleryPieceContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="gallery_piece_container">
                Gallery Piece Id: {this.props.galleryPieceId}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    galleryPieceId: props.match.params.id
});


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPieceContainer);

GalleryPieceContainer.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
};
