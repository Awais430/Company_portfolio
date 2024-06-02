import React from "react";
import techImage from "../../assets/techimgae.svg";
import { imagePaths } from "../../IMAGES/image.js";

const FrontEndTechnologies = ({frontendTech}) => {
  return (
    <div className="serviceTechHolder">
      <div className="serviceTechHolder-header mt-8">
        <div className="title-holder !pb-1">
          <img src={imagePaths.littleIcon} alt="" id="icon" />
          <h4 id="title">Frontend Development</h4>
        </div>
      </div>
      <div className="serviceTechHolder-body">
        <ul className="tech-list">
          {frontendTech.map((tech, index) => (
            <li className="list-item" key={index}>
              <img src={tech.image} className="tech-icon" alt="" />
              <p className="tech-title">{tech.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FrontEndTechnologies;
