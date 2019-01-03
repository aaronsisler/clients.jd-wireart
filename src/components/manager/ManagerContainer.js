import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ManagerList from 'Manager/ManagerList';
import ManagerDetails from 'Manager/ManagerDetails';

class ManagerContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery, galleryPiece } = this.props;
        return (
            <div className="inbox_container">
                <div className="inbox_widget">
                    <div className="inbox_list">
                        <Link className="nav_link" to="/manager_add">Add Gallery Piece</Link>
                        <ManagerList gallery={gallery} />
                    </div>
                    <ManagerDetails galleryPiece={galleryPiece} {...this.props} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { id: galleryPieceId } = props.match.params;
    const galleryPiece = galleryPieceId
        ? state.gallery.find((stateGalleryPiece) => stateGalleryPiece.galleryPieceId == galleryPieceId)
        : undefined;

    return ({
        gallery: state.gallery,
        galleryPiece,
    });
};


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerContainer);

ManagerContainer.propTypes = {
    gallery: PropTypes.array,
    galleryPiece: PropTypes.object,
};
