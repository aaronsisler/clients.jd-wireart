import React from "react";
import { Link } from "react-router-dom";

const LoggedOutPage = () => (
  <main className="logged-out-page">
    <div className="logged_out_page__content">You have been logged out.</div>
    <div className="logged_out_page__link">
      <Link className="nav_link" to="/manager">
        Back to Dashboard
      </Link>
      <Link className="nav_link" to="/gallery">
        Back to Gallery
      </Link>
    </div>
  </main>
);

export default LoggedOutPage;
