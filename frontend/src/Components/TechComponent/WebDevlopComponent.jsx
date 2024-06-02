import React from "react";

// BACKEND IMAGE IMPORT
import { imagePaths } from "../../IMAGES/image";
import FrontEndTechnologies from "../Technologies/FrontEndTechnologies";
import BackendTech from "../Technologies/BackendTech";
const frontendTech = [
  { name: "NextJS", image: imagePaths.next },
  { name: "HTML5", image: imagePaths.html },
  { name: "Vue.js", image: imagePaths.veu },
  { name: "TailwindCss", image: imagePaths.TailwindCss },
  { name: "SASS", image: imagePaths.saas },
  { name: "BootSrap", image: imagePaths.boootstrap },
  { name: "React", image: imagePaths.react },
  { name: "JavaScript", image: imagePaths.js },
  { name: "Css3", image: imagePaths.cs },
];
const backendTech = [
  { name: "Node JS", image: imagePaths.NODE },
  { name: "Laraval", image: imagePaths.laravalPostgress },
  { name: "Python", image: imagePaths.python },
  { name: "MySQL", image: imagePaths.MYSQL },
  { name: "MongoDb", image: imagePaths.MONGODB },
  { name: "AWS", image: imagePaths.aws },
  { name: "Radis", image: imagePaths.radis },
  { name: "Firebase", image: imagePaths.FIREBASE },
  { name: "Elasticsearch", image: imagePaths.elastic },
  { name: "Laravel Nova", image: imagePaths.LARAVAL },
  { name: "Goland", image: imagePaths.GOLAND },
];

const WebDevlopComponent = () => {
  return (
    <section className=" !pt-18 block" style={{ padding: "8rem 0 5rem" }}>
      {/* site section header  */}
      <div className="sec-header">
        <div className=" !w-[80%] px-[15px] !mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <h2 className="header-title text-[1.6rem] md:block justify-center flex  text-primary !font-[600]">
                Web Development
              </h2>
              <p
                className=" text-[#0d264c]  md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]"
                style={{ lineHeight: "1.9" }}
              >
                At Squareboat, we design and develop websites and web apps that
                can make sure you’re seen and heard in the right circles.
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
              <img src={imagePaths.teamimage} id="artWork" alt="" />
              <FrontEndTechnologies frontendTech={frontendTech} />
              <BackendTech backendTech={backendTech} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevlopComponent;
