import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class GalleryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryItemId, imagePath, name } = this.props;
        return (
            <div className="gallery_list_item">
                <div className="gallery_list_item__image">
                    <img src={imagePath} />
                </div>
                <div className="gallery_list_item__content">
                    <div>
                        {name}
                    </div>
                    <Link
                        className="gallery_list_item__link"
                        to={`/gallery_piece/${galleryItemId}`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        );
    }
}

GalleryListItem.propTypes = {
    galleryItemId: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
