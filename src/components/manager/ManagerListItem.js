import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ManagerListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPieceId, name } = this.props;
        return (
            <div className="manager_list_item">
                <div className="manager_list_item__content">
                    {name}
                    <Link
                        className="manager_list_item__link nav_link"
                        to={`/gallery_piece/${galleryPieceId}`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        );
    }
}

ManagerListItem.propTypes = {
    galleryPieceId: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
