import React from "react";
import { Link } from "react-router-dom";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <div className="landing-container__splash">
      <div className="landing-container__splash-name">JD Wire Art Studio</div>
      <div className="landing-container__splash-link">
        <Link to="/gallery" className="nav_link">
          Browse our gallery
        </Link>
      </div>
      <div className="landing-container__splash-link">
        <Link to="/about" className="nav_link">
          Learn more about us
        </Link>
      </div>
    </div>
  </div>
);

export default LandingContainer;
