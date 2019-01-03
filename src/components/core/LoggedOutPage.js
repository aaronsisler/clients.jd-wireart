import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutPage = () => (
    <div className="logged_out_page">
        <div className="logged_out_page__content">
            You have been logged out.
        </div>
        <div className="logged_out_page__link">
            <Link className="nav_link" to="/login">Back to Login</Link>
            <Link className="nav_link" to="/gallery">Back to Gallery</Link>
        </div>
    </div>
);

export default LoggedOutPage;
