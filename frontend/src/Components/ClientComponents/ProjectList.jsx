import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client.js";
import ActionAreaCard from "./ActionAreaCard.jsx";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
console.log(projects)
  useEffect(() => {
    const query = '*[_type=="Project"]';
    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        console.log("projects", data);
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);
  return (
    <div className=" w-[80%] flex justify-center items-center mx-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ActionAreaCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
