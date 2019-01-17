import React from 'react';
import PropTypes from 'prop-types';

const YouTubeViewer = ({ src }) => (
    <div className="youtube_viewer">
        <iframe
            src={src}
            width="100%"
            frameBorder="0"
        />
    </div>
)

export default YouTubeViewer;

YouTubeViewer.propTypes = {
    src: PropTypes.string,
};
