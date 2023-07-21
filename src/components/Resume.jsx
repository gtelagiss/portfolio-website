import React from "react";
import resume from "../assets/WebsiteResume.png";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="center-content">
        <img src={resume} alt="Resume" className="experience-image" />
      </div>
    </div>
  );
};

export default Resume;
