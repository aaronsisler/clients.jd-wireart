import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PaypalCodeValidation from 'Paypal/PaypalCodeValidation';
import { convertPrice } from 'Tools/price';

const GalleryPieceDetails = ({ galleryPieceId, isPaypalActive, name, price }) => (
    <div className="gallery_piece_details">
        <div className="gallery_piece_details__content">
            <div className="gallery_piece_details__name">{name}</div>
            <div className="gallery_piece_details__price">${convertPrice(price)}</div>
        </div>
        <div className="gallery_piece_details__contact">
            {isPaypalActive
                ? <PaypalCodeValidation price={price} />
                :
                <Link
                    className="gallery_piece_details__link nav_link"
                    to={`/contact_us/${galleryPieceId}`}
                >
                    Click to Purchase
                </Link>
            }
        </div>
    </div>
);

export default GalleryPieceDetails;

GalleryPieceDetails.propTypes = {
    galleryPieceId: PropTypes.string,
    isPaypalActive: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.number,
};
