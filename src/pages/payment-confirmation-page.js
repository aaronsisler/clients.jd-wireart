import React from "react";
import { Link } from "react-router-dom";

const PaymentConfirmationPage = () => (
  <div className="payment_confirmation_page">
    <div className="payment_confirmation_page__message">
      Thank you for your purchase!
    </div>
    <div className="payment_confirmation_page__link">
      <Link className="nav_link" to="/gallery">
        Back to Gallery
      </Link>
    </div>
  </div>
);

export default PaymentConfirmationPage;
