import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class GalleryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPieceId, imagePath, name } = this.props;
        return (
            <div className="gallery_list_item">
                <div className="gallery_list_item__image">
                    <img src={imagePath} />
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
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
