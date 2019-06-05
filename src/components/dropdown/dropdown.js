import React from "react";
import Select from "react-select";
import "./dropdown.scss";
const options = [
  { value: "taco", label: "taco" },
  { value: "more taco", label: "more taco" }
];

const selectStyles = {
  container: (base, state) => ({
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
