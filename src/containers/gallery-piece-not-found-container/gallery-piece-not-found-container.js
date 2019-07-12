import React from "react";
import NavLink from "../../components/nav-link";
import "./gallery-piece-not-found-container.scss";

const GalleryPieceNotFoundContainer = () => (
  <div className="gallery-piece-not-found-container">
    <div className="gallery-piece-not-found-container__content">
      <div className="gallery-piece-not-found-container__content-text">
        We're sorry. The gallery piece cannot be found.
      </div>
      <div className="gallery-piece-not-found-container__content-link">
        <NavLink linkText="Back to gallery" to="gallery" />
      </div>
    </div>
  </div>
);

export default GalleryPieceNotFoundContainer;
