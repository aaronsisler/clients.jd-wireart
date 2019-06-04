import React from "react";
import PropTypes from "prop-types";
import "./video-player.scss";

const VideoPlayer = ({ src }) => (
  <div className="video-player">
    <iframe src={src} title="video player" width="100%" frameBorder="0" />
  </div>
);

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default VideoPlayer;
