import React from "react";
import { Link } from "react-router-dom";
import "./payment-confirmation-container.scss";

const PaymentConfirmationContainer = () => (
  <div className="payment-confirmation-container">
    <div className="payment-confirmation-container__content">
      <div className="payment-confirmation-container__content-text">
        Thank you for your purchase!
      </div>
      <div className="payment-confirmation-container__content-link">
        <Link className="nav-link" to="/gallery">
          Back to Gallery
        </Link>
      </div>
    </div>
  </div>
);

export default PaymentConfirmationContainer;
