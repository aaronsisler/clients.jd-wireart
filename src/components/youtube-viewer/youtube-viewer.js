import React from "react";
import PropTypes from "prop-types";
import "./youtube-viewer.scss";

const YoutubeViewer = ({ src }) => (
  <div className="youtube-viewer">
    <iframe src={src} title="youtube player" width="100%" frameBorder="0" />
  </div>
);

export default YoutubeViewer;

YoutubeViewer.propTypes = {
  src: PropTypes.string
};
