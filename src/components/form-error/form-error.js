import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import "./form-error.scss";

const FormError = ({ error }) => (
  <div className="form-error">
    <FontAwesomeIcon
      className="form-error__icon"
      icon={faExclamationCircle}
      // size="lg"
      // color="red"
    />
    &nbsp;&nbsp;{error}
  </div>
);

FormError.propTypes = {
  error: PropTypes.string
};

export default FormError;
