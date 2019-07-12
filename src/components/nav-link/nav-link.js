import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./nav-link.scss";

const NavLink = ({ linkText, to }) => (
  <Link className="nav-link" to={`/${to}`}>
    {linkText}
  </Link>
);

NavLink.propTypes = {
  linkText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLink;
