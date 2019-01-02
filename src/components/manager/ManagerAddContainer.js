import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'Tools/history';
import GalleryPieceForm from 'Gallery/GalleryPieceForm';
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
