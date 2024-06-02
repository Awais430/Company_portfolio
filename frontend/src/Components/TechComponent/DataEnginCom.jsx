import React from "react";
import teamimage from "../../assets/teamimage-2.svg";
import hybrid from "../../assets/hybrid.svg";
import { imagePaths } from "../../IMAGES/image";

const technologies = [
  { image: imagePaths.bigquery, title: "BigQuery" },
  { image: imagePaths.quicksight, title: "Quicksight" },
  { image: imagePaths.redshift, title: "Redshift" },
  { image: imagePaths.awsathena, title: "AWS Athena" },
  { image: imagePaths.datastudio, title: "Data Studio" },
];

const DataEngCom = () => {
  return (
    <section className="pt-[6rem] block relative" style={{ padding: "8rem 0 5rem" }}>
      {/* site section header  */}
      <div className="sec-header">
        <div className="!w-[80%] px-[15px] !mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <h2 className="header-title text-[1.6rem]  md:block justify-center flex  !font-[600] !text-[#9c6dff]">
                Data Engineering
              </h2>
              <p className="text-[#0d264c] md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]" style={{ lineHeight: "1.9" }}>
                Hiding within those piles of data is knowledge that could change the life of an individual, or change the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* site section body */}
      <div className="sec-body">
        <div className="sm:w-[80%] w-[90%]  px[15px] mx-auto ">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <img src={teamimage} id="artWork-2" alt="" />
              {/* frontend service tech holder */}
              <div className="serviceTechHolder">
                <div className="serviceTechHolder-header mt-8">
                  <div className="title-holder !pb-1">
                    <img src={hybrid} alt="" id="icon" />
                    <h4 id="title">Technologies</h4>
                  </div>
                </div>
                <div className="serviceTechHolder-body">
                  <ul className="tech-list">
                    {technologies.map((tech, index) => (
                      <li className="list-item" key={index}>
                        <img src={tech.image} className="tech-icon" alt="" />
                        <p className="tech-title">{tech.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" mt-[50px]">
                  <a href="/client">
                    <button className="text-[20px] mt-8 border-[#9c6dff] py-[8px] text-[#9c6dff] hover:text-white hover:bg-[#9c6dff] border-[2px]  rounded-md  px-4">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngCom;
