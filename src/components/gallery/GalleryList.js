import React from 'react';
import PropTypes from 'prop-types';
import GalleryListItem from './GalleryListItem';

export default class GalleryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.gallery.length === 0) {
            return (
                <div className="gallery_list_empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="gallery_list">
                {
                    this.props.gallery.map((galleryItem) =>
                        <GalleryListItem
                            key={galleryItem.galleryPieceId}
                            {...galleryItem}
                        />)
                }
            </div>
        );
    }
}

GalleryList.propTypes = {
    gallery: PropTypes.array,
};
