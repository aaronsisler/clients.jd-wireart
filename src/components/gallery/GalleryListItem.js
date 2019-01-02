import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class GalleryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPieceId, imageURL, name } = this.props;
        return (
            <div className="gallery_list_item">
                <div className="gallery_list_item__image">
                    {!imageURL && <img src="/images/no_image_available.svg" />}
                    {imageURL && <img src={imageURL} />}
                </div>
                <div className="gallery_list_item__content">
                    {name}
                    <Link
                        className="gallery_list_item__link nav_link"
                        to={`/gallery_piece/${galleryPieceId}`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        );
    }
}

GalleryListItem.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    name: PropTypes.string.isRequired,
};
