import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./manager-details.scss";

const ManagerDetails = ({ galleryPiece }) => {
  if (!galleryPiece) {
    return (
      <div className="manager-details inbox__details-empty inbox-mobile">
        Please select an item to view
      </div>
    );
  }
  return (
    <div className="manager-details inbox__details">
      <Link className="nav-link">Back to list</Link>
      ManagerDetails
    </div>
  );
};

ManagerDetails.propTypes = {
  galleryPiece: PropTypes.object
};

export default ManagerDetails;
