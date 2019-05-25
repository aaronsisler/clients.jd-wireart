import React from "react";
import GalleryPieceContainer from "../containers/gallery-piece-container";

const GalleryPiecePage = props => (
  <div className="gallery-piece-page">
    <GalleryPieceContainer {...props} />
  </div>
);

export default GalleryPiecePage;
