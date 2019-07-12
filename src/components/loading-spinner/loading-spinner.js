import React from "react";
import "./loading-spinner.scss";

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <svg
      className="loading-spinner__svg"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="loading-spinner__circle"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  </div>
);

export default LoadingSpinner;
