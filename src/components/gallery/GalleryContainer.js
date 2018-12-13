import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="gallery_container">
                Gallery Container
            </div>
        )
    }
}

GalleryContainer.propTypes = {};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
