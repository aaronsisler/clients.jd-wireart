import React from "react";
import Select from "react-select";
import "./dropdown.scss";
const options = [
  { value: "taco", label: "TACO" },
  { value: "more taco", label: "MORE TACO" }
];

const selectStyles = {
  container: base => ({
    ...base,
    zIndex: "999"
  })
};

const Dropdown = () => (
  <div className="dropdown">
    <Select
      styles={selectStyles}
      options={options}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  </div>
);

export default Dropdown;
