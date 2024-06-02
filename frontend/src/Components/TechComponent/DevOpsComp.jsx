import React from "react";
import next from "../../assets/lmda.png";
import DevOpsImage from "../../assets/devops.svg";
import DevOpsSideImage from "../../assets/devops-side-image.svg";
import { devpopsImages } from "../../IMAGES/image";

const technologies = [
  { image: devpopsImages.spectrum, title: "Spectrum" },
  { image: devpopsImages.aws, title: "AWS" },
  { image: devpopsImages.BitBucket, title: "Bitbucket" },
  { image: devpopsImages.Docker, title: "Docker" },
  { image: devpopsImages.slenium, title: "Selenium" },
  { image: devpopsImages.npm, title: "NPM" },
  { image: devpopsImages.browserstack, title: "Browerstack" },
  { image: devpopsImages.gitlab, title: "Gitlab" },
  { image: devpopsImages.github, title: "Github" },
  { image: devpopsImages.googlecloude, title: "Google Cloud" },
  { image: devpopsImages.azure, title: "Azure" },
  { image: devpopsImages.ansible, title: "Ansible" },
];

const DevOps = () => {
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
              <h2 className="header-title text-[1.6rem] md:block justify-center flex text-primary !font-[600]">
                DevOps Services
              </h2>
              <p
                className="text-[#0d264c]  md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]"
                style={{ lineHeight: "1.9" }}
              >
                Bringing in a company-wide acceptance of following CI/CD
                pipelines, Configuration Management Systems, Continuous Testing,
                and more can take a toll on your organization’s day to day
                routine. Why not introduce the transformation in gradual stages
                with our scalable DevOps solutions? Squareboat's cloud
                architects focus on providing cloud-based, end-to-end DevOps
                services and solutions that can integrate seamlessly with your
                existing infrastructure.
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
                    {technologies.map((tech, index) => (
                      <li className="list-item" key={index}>
                        <img src={tech.image} className="tech-icon" alt="" />
                        <p className="tech-title">{tech.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[50px]">
                  <a href="/client">
                    <button
                      className="text-[20px] mt-8 border-blue-400 py-[8px] text-blue-500 hover:text-white hover:bg-blue-600
          border-[2px]  rounded-md  px-4"
                    >
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

export default DevOps;
