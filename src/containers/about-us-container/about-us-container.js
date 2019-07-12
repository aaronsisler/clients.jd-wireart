import React from "react";
import VideoPlayer from "../../components/video-player";
import AboutUs from "../../components/about-us";
import "./about-us-container.scss";

const AboutUsContainer = () => (
  <div className="about-us-container">
    <div className="about-us-container__player">
      <VideoPlayer src="https://www.youtube.com/embed/3jv-q_Nexgg" />
    </div>
    <div className="about-us-container__content">
      <AboutUs />
    </div>
  </div>
);

export default AboutUsContainer;
