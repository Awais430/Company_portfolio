import React from "react";
import next from "../../assets/lmda.png";
import DevOpsImage from "../../assets/devops.svg";
import DevOpsSideImage from "../../assets/devops-side-image.svg";
import { imagePaths } from "../../IMAGES/image";

const techData = [
  { image: imagePaths.maualtest, title: "Manual Testing" },
  { image: imagePaths.slenium, title: "Selenium" },
  { image: imagePaths.appium, title: "Appium" },
  { image: imagePaths.awsdevic, title: "AWS Device Farm" },
  { image: imagePaths.browserstack, title: "Browserstack" },
];

const QAComp = () => {
  return (
    <section
      className="pt-[6rem] block relative"
      style={{
        padding: "8rem 0 5rem",
        background: "linear-gradient(#eaf4ff, rgb(255, 253, 253))",
      }}
    >
      {/* site section header  */}
      <div className="sec-header">
        <div className="!w-[80%] px-[15px] !mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <h2 className="header-title md:block justify-center flex text-[1.6rem] text-primary !font-[600]">
                QA / Testing
              </h2>
              <p
                className="text-[#0d264c] md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]"
                style={{ lineHeight: "1.9" }}
              >
                Quality is never an accident; it is always the result of
                intelligent effort.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* site section body */}
      <div className="sec-body">
        <div className="sm:w-[80%] w-[90%] px[15px] mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <img src={DevOpsSideImage} id="artWork-3" alt="" />
              {/* frontend service tech holder */}

              <div className="serviceTechHolder">
                <div className="serviceTechHolder-header mt-8">
                  <div className="title-holder !pb-1">
                    <img src={DevOpsImage} alt="" id="icon" />
                    <h4 id="title">Technologies</h4>
                  </div>
                </div>
                <div className="serviceTechHolder-body">
                  <ul className="tech-list">
                    {techData.map((tech, index) => (
                      <li className="list-item" key={index}>
                        <img src={tech.image} className="tech-icon" alt="" />
                        <p className="tech-title">{tech.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" mt-[50px]">
                  <a href="/client">
                    <button className="text-[20px] mt-8 border-blue-400 py-[8px] text-blue-500 hover:text-white hover:bg-blue-600 border-[2px]  rounded-md  px-4">
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

export default QAComp;
