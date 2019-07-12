import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./form-input.scss";

const FormInput = ({ hasError, label, name, onBlur, onChange, value }) => (
  <div className="form-input">
    <input
      className="form-input__input"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required
      type="text"
      value={value}
    />
    <label
      htmlFor={name}
      className={cn(
        "form-input__label",
        hasError ? "form-input__label--error" : ""
      )}
    >
      <span
        className={cn(
          "form-input__span",
          hasError ? "form-input__span--error" : ""
        )}
      >
        {label}
      </span>
    </label>
  </div>
);

FormInput.propTypes = {
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FormInput;
