import React from 'react';
import PropTypes from 'prop-types';
import PaypalCodeValidation from 'Paypal/PaypalCodeValidation';
import GalleryPieceAvailable from 'Gallery/GalleryPieceAvailable';
import { convertPrice } from 'Tools/price';

const GalleryPieceDetails = ({ galleryPieceId, isPaypalActive, isSold, name, price }) => (
    <div className="gallery_piece_details">
        <div className="gallery_piece_details__content">
            <div className="gallery_piece_details__name">{name}</div>
            <div className="gallery_piece_details__price">${convertPrice(price)}</div>
        </div>
        <div className="gallery_piece_details__contact">
            {isPaypalActive
                ? <PaypalCodeValidation galleryPieceId={galleryPieceId} name={name} price={price} />
                : <GalleryPieceAvailable galleryPieceId={galleryPieceId} isSold={isSold} />
            }
        </div>
    </div>
);

export default GalleryPieceDetails;

GalleryPieceDetails.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    isPaypalActive: PropTypes.bool,
    isSold: PropTypes.bool,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
