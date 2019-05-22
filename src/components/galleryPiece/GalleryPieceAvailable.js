import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GalleryPieceAvailable = ({ galleryPieceId, isSold }) => (
    <div className="gallery_piece_available">
        {
            isSold
                ?
                <div className="gallery_piece_available__sold">
                    Sold Out
                    <br />
                    <br />
                    <Link
                        className="gallery_piece_available__link nav_link"
                        to={`/contact_us/${galleryPieceId}/?custom`}
                    >
                        Click to Custom Order
                    </Link>
                </div>
                :
                <Link
                    className="gallery_piece_available__link nav_link"
                    to={`/contact_us/${galleryPieceId}`}
                >
                    Click to Purchase
                </Link>
        }
    </div>
);

export default GalleryPieceAvailable;

GalleryPieceAvailable.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    isSold: PropTypes.bool,
};
