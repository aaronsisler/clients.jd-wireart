import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import GalleryPieceForm from 'Gallery/GalleryPieceForm';
import { startEditGalleryPiece } from 'Actions/galleryPiece';

class ManagerEditContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (galleryPiece) => {
        this.props.startEditGalleryPiece(this.props.galleryPieceId, galleryPiece);
        history.push(`/manager/${this.props.galleryPieceId}`);
    }

    render() {
        return (
            <div className="manager_edit_container">
                <Link className="nav_link" to={`/manager/${this.props.galleryPieceId}`}>Back to Dashboard</Link>
                <GalleryPieceForm galleryPiece={this.props.galleryPiece} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    galleryPieceId: props.match.params.id,
    galleryPiece: state.gallery.find((stateGalleryPiece) => stateGalleryPiece.galleryPieceId == props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditGalleryPiece: (galleryPieceId, galleryPiece) => dispatch(startEditGalleryPiece(galleryPieceId, galleryPiece)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerEditContainer);

ManagerEditContainer.propTypes = {
    galleryPiece: PropTypes.object.isRequired,
    galleryPieceId: PropTypes.string.isRequired,
    startEditGalleryPiece: PropTypes.func.isRequired,
};
