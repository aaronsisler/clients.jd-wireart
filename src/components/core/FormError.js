import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'


const FormError = ({ error }) => (
    <div className="form_error">
        <FontAwesomeIcon icon={faExclamationCircle} size='lg' color='red' />&nbsp;&nbsp;{error}
    </div>
);

export default FormError;

FormError.propTypes = {
    error: PropTypes.string,
};
