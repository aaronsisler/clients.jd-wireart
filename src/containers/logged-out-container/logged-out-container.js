import React from "react";
import { Link } from "react-router-dom";
import "./logged-out-container.scss";

const LoggedOutContainer = () => (
  <div className="logged-out-container">
    <div className="logged-out-container__content">
      <div className="logged-out-container__content-text">
        You have been logged out.
      </div>
      <div className="logged-out-container__content-links">
        <Link className="nav-link" to="/manager">
          Back to Dashboard
        </Link>
        <Link className="nav-link" to="/gallery">
          Back to Gallery
        </Link>
      </div>
    </div>
  </div>
);

export default LoggedOutContainer;
