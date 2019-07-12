import React from "react";
import LoadingSpinner from "../../components/loading-spinner";
import "./loading-container.scss";

const LoadingContainer = () => (
  <div className="loading-container">
    <div className="loading-container__text">Loading</div>
    <div className="loading-container__spinner">
      <LoadingSpinner />
    </div>
  </div>
);

export default LoadingContainer;
