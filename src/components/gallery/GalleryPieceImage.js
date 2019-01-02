import React from 'react';
import PropTypes from 'prop-types';

const GalleryPieceImage = ({ imageURL }) => (
    <div className="gallery_piece_image">
        {!imageURL && <img src="/images/no_image_available.svg" />}
        {imageURL && <img src={imageURL} />}
    </div>
);

export default GalleryPieceImage;

GalleryPieceImage.propTypes = {
    imageURL: PropTypes.string,
};
