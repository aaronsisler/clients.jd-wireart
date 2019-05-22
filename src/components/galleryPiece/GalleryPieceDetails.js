import React from 'react';
import PropTypes from 'prop-types';
import PaypalCodeValidation from 'Paypal/PaypalCodeValidation';
import GalleryPieceAvailable from 'GalleryPiece/GalleryPieceAvailable';
import GalleryPieceDetailsContent from 'GalleryPiece/GalleryPieceDetailsContent';

const GalleryPieceDetails = ({ ...props }) => {
    const { galleryPieceId, isPaypalActive, isSold, name, price } = props;

    return (
        <div className="gallery_piece_details">
            <GalleryPieceDetailsContent {...props} />
            <div className="gallery_piece_details__contact">
                {isPaypalActive
                    ? <PaypalCodeValidation galleryPieceId={galleryPieceId} name={name} price={price} />
                    : <GalleryPieceAvailable galleryPieceId={galleryPieceId} isSold={isSold} />
                }
            </div>
        </div>
    )
};

export default GalleryPieceDetails;

GalleryPieceDetails.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    isPaypalActive: PropTypes.bool,
    isSold: PropTypes.bool,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
