import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="landing_page">
        <div className="landing_page__background_image" ></div>
        <div className="landing_page_content">
            <div className="landing_page_content__spacer" />
            <div className="landing_page_content__company_name">
                JD Wire Art
            </div>
            <div className="landing_page_content__spacer" />
            <div className="landing_page_content__gallery">
                <Link
                    className="landing_page_content__nav_link-action"
                    to="/gallery"
                >
                    Browse our collection
                </Link>
                <Link
                    className="landing_page_content__nav_link-secondary"
                    to="/about"
                >
                    Learn more about us
                </Link>
            </div>
        </div>
    </div>
)

export default LandingPage;
