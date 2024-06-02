import * as React from "react";

import { client, urlFor } from "../../client";

const ActionAreaCard = ({ project }) => {
  return (
    <div className="Grid-item flex flex-col" style={{ flex: "1 0 auto" }}>
      <div className="Card Work_card overflow-hidden relative pb-4 mt-[3rem] card">
        <div className="Card-body p-0 flex flex-col">
        <a href={project.navigationLink} target="blank">
        <div className="Body-header">
            <img
              src={urlFor(project.imgUrl.asset._ref).url()}
              className=" w-full h-[320px]"
              style={{
                backgroundSize: "cover",
                backgroundColor: "rgba(247,247,247",
              }}
              alt=""
            />
          </div>
        </a>
          <div className="Body-content p-[1.25rem]">
            <div className="Card-title text-[1/25rem] font-[600] mb-[.5rem]">
              {project.Projectname || "hamza"}
            </div>
            <p className="text-[.875rem]">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionAreaCard;
