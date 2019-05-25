import React from "react";
import { Link } from "react-router-dom";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <div className="landing-container__content">
      <div className="landing-container__content-name">JD Wire Art Studio</div>
      <div className="landing-container__content-gallery">
        <Link className="nav_link" to="/gallery">
          Browse our gallery
        </Link>
      </div>
      <div className="landing-container__content-about">
        <Link className="nav_link" to="/about">
          Learn more about us
        </Link>
      </div>
    </div>
  </div>
);

export default LandingContainer;
