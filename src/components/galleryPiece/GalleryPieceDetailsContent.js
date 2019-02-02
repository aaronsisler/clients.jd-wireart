import React from 'react';
import PropTypes from 'prop-types';
import { convertPrice } from 'Tools/price';

const GalleryPieceDetailsContent = ({ ...props }) => {
    const { height, length, name, price, width } = props;

    return (
        <div className="gallery_piece_details_content">
            <div className="gallery_piece_details_content__name">{name}</div>
            <div className="gallery_piece_details_content__price">${convertPrice(price)}</div>
            <div className="gallery_piece_details_content__dimensions">
                <div className="gallery_piece_details_content__dimensions_title">Dimensions</div>
                <div className="gallery_piece_details_content__dimensions_values">
                    <div>Length<br />{length}&nbsp;in.</div>
                    <div>Width<br />{width}&nbsp;in.</div>
                    <div>Height<br />{height}&nbsp;in.</div>
                </div>
            </div>
        </div>
    );
}

export default GalleryPieceDetailsContent;

GalleryPieceDetailsContent.propTypes = {
    height: PropTypes.string,
    length: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    width: PropTypes.string,
};

