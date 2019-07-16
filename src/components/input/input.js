import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./input.scss";

const Input = ({ hasError, label, name, onBlur, onChange, value }) => (
  <div className="input">
    <input
      className="input__input"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      required
      type="text"
      value={value}
    />
    <label
      htmlFor={name}
      className={cn("input__label", hasError ? "input__label--error" : "")}
    >
      <span className={cn("input__span", hasError ? "input__span--error" : "")}>
        {label}
      </span>
    </label>
  </div>
);

Input.propTypes = {
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
