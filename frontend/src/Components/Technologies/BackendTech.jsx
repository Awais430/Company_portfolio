import React from "react";
import { imagePaths } from "../../IMAGES/image.js";

const BackendTech = ({backendTech}) => {
  return (
    <div className="serviceTechHolder">
    <div className="serviceTechHolder-header mt-8">
      <div className="title-holder !pb-1">
        <img src={imagePaths.littleIcon} alt="" id="icon" />
        <h4 id="title">Backend Development</h4>
      </div>
    </div>
    <div className="serviceTechHolder-body">
      <ul className="tech-list">
        {backendTech.map((tech, index) => (
          <li className="list-item" key={index}>
            <img src={tech.image} className="tech-icon" alt="" />
            <p className="tech-title">{tech.name}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className=" mt-[50px]">
      <a href="/client">
        <button className="text-[20px] mt-8 border-blue-400 py-[8px] text-blue-500 hover:text-white hover:bg-blue-600 border-[2px] rounded-md px-4">
          View Project
        </button>
      </a>
    </div>
  </div>
  );
};

export default BackendTech;
