import React from "react";
import image from "../assets/reactappimage.png";
import lockimage from "../assets/lockimage.png";
import "./Main.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="h2">Experience</h1>
      <div className="paragraph-container">
        <div>
          <h2 className="h4">Associate Software Engineer at CDK Global</h2>{" "}
          <p>
            – Developed React (16.13.0) organizer widgets
            <br />– Assisted in rewrite of asp pages to remove Ember framework{" "}
            <br />– Resolved and patched software defects on React, ASP, .NET,
            JavaScript, VBScript, <br />
            -Business Objects (C#) in CRM application <br />– Worked with Agile
            project management tools (JIRA), and CI/CD pipelines (Bitbucket){" "}
            <br />– Worked with Black Duck scan (Synopsys) on Azure DevOps.
          </p>
        </div>
        <img src={image} alt="Experience" className="experience-image" />
      </div>
      <div className="paragraph-container">
        <div>
          <h2 className="h4">Web developer at Allstar Heating and AC </h2>{" "}
          <p>
            – Improving website’s position in search results pages <br />–
            Increasing SEO traffic with WordPress <br />– Created website with
            WordPress <br />– Website maintenance
          </p>
        </div>
        <img src={lockimage} alt="Experience" className="experience-image" />
      </div>
    </div>
  );
};

export default Experience;
