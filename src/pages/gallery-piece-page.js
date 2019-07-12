import React from "react";
import GalleryPieceContainer from "../containers/gallery-piece-container";

const GalleryPiecePage = props => (
  <main className="gallery-piece-page">
    <GalleryPieceContainer {...props} />
  </main>
);

export default GalleryPiecePage;
