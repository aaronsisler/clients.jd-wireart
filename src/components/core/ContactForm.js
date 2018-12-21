import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact_form">
            GalleryPieceId: {this.props.galleryPieceId}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    galleryPieceId: props.match.params.id,
});


const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    galleryPieceId: PropTypes.string,
};
