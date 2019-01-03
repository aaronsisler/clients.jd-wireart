import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GalleryPieceDetails = ({ galleryPieceId, name, price }) => (
    <div className="gallery_piece_details">
        <div className="gallery_piece_details__content">
            <div className="gallery_piece_details__name">{name}</div>
            <div className="gallery_piece_details__price">${(price / 100).toString()}</div>
        </div>
        <div className="gallery_piece_details__contact">
            <Link
                className="gallery_piece_details__link nav_link"
                to={`/contact_us/${galleryPieceId}`}
            >
                Click to Purchase
            </Link>
        </div>
    </div>
);

export default GalleryPieceDetails;

GalleryPieceDetails.propTypes = {
    galleryPieceId: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
};
