import React from 'react';
import PropTypes from 'prop-types';

const GalleryPieceImage = ({ imagePath }) => (
    <div className="gallery_piece_image">
        {!imagePath && <img src="/images/no_image_available.svg" />}
        {imagePath && <img src={imagePath} />}
    </div>
);

export default GalleryPieceImage;

GalleryPieceImage.propTypes = {
    imagePath: PropTypes.string,
};
