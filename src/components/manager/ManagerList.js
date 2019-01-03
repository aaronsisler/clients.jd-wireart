import React from 'react';
import PropTypes from 'prop-types';
import ManagerListItem from 'Manager/ManagerListItem';

export default class ManagerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery } = this.props;
        if (gallery.length === 0) {
            return (
                <div className="manager_list_empty">
                    No available items
                </div>
            );
        }

        return (
            <div className="manager_list">
                {
                    gallery.map((galleryItem) =>
                        <ManagerListItem
                            key={galleryItem.galleryPieceId}
                            {...galleryItem}
                        />)
                }
            </div>
        );
    }
}

ManagerList.propTypes = {
    gallery: PropTypes.array,
};
