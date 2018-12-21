import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'


const ContactFormError = ({ error }) => (
    <div className="contact_form_error">
        <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />&nbsp;&nbsp;{error}
    </div>
);

export default ContactFormError;

ContactFormError.propTypes = {
    error: PropTypes.string,
};
