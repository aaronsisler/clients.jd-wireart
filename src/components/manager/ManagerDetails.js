import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ManagerDetails = ({ galleryPieceId }) => (
    <div className="inbox_details">
        <Link
            className="inbox_details__link nav_link"
            to={`/manager_edit/${galleryPieceId}`}
        >
            Click to Edit
        </Link>
    </div>
);

export default ManagerDetails;

ManagerDetails.propTypes = {
    galleryPieceId: PropTypes.string,
};
