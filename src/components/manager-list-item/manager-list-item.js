import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./manager-list-item.scss";

const ManagerListItem = ({ galleryPieceId, name }) => (
  <Link to={`/manager/${galleryPieceId}`} className="no-style-link">
    <div className="manager-list-item">{name}</div>
  </Link>
);

ManagerListItem.propTypes = {
  galleryPieceId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ManagerListItem;
