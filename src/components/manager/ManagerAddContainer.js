import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import GalleryPieceForm from 'GalleryPiece/GalleryPieceForm';
import { startAddGalleryPiece } from 'Actions/galleryPiece';

class ManagerAddContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (galleryPiece) => {
        this.props.startAddGalleryPiece(galleryPiece);
        history.push(`/manager`);
    }

    render() {
        return (
            <div className="manager_add_container">
                <div className="manager_add_container__title">
                    Add New Gallery Piece
                </div>
                <GalleryPieceForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    startAddGalleryPiece: (galleryPiece) => dispatch(startAddGalleryPiece(galleryPiece)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerAddContainer);

ManagerAddContainer.propTypes = {
    startAddGalleryPiece: PropTypes.func.isRequired,
};
