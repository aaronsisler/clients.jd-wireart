import React from 'react';
import PropTypes from 'prop-types';
import { convertPrice } from 'Tools/price';

const GalleryPieceDetailsContent = ({ ...props }) => {
    const { description, height, length, name, price, width } = props;

    return (
        <div className="gallery_piece_details_content">
            <div className="gallery_piece_details_content__name">{name}</div>
            <div className="gallery_piece_details_content__price">${convertPrice(price)}</div>
            {length &&
                <div className="gallery_piece_details_content__dimensions">
                    <div className="gallery_piece_details_content__dimensions_title">Dimensions</div>
                    <div className="gallery_piece_details_content__dimensions_values">
                        <div>Length<br />{length}&nbsp;in.</div>
                        <div>Width<br />{width}&nbsp;in.</div>
                        <div>Height<br />{height}&nbsp;in.</div>
                    </div>
                </div>
            }
            {description &&
                <div className="gallery_piece_details_content__description">
                    <div className="gallery_piece_details_content__description_title">
                        Description
                    </div>
                    <div className="gallery_piece_details_content__description_value">
                        {description}
                    </div>
                </div>
            }
        </div>
    );
}

export default GalleryPieceDetailsContent;

GalleryPieceDetailsContent.propTypes = {
    description: PropTypes.string,
    height: PropTypes.string,
    length: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    width: PropTypes.string,
};

