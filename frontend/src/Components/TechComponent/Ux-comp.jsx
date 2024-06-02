import React from "react";
import teamimage from "../../assets/teamimage3.svg";
import next from "../../assets/lmda.png";
import illustrater from "../../assets/ilustrater.svg";

import { imagePaths } from "../../IMAGES/image";

const techData = [
  {
    title: "Animation",
    items: [
      { image: imagePaths.afterEffect, title: "After Effects" },
      { image: imagePaths.prememiumpro, title: "Premiere Pro" },
      { image: imagePaths.lottie, title: "Lottie" },
      { image: imagePaths.blender, title: "Blender" },
    ],
  },
  {
    title: "UI Design",
    items: [
      { image: imagePaths.figma, title: "Figma" },
      { image: imagePaths.illustrater, title: "Illustrator" },
      { image: imagePaths.photoshop, title: "Photoshop" },
      { image: imagePaths.framer, title: "Framer" },
      { image: imagePaths.marvel, title: "Marvel" },
    ],
  },
  {
    title: "UX Design",
    items: [
      { image: imagePaths.balsamic, title: "Balsamiq" },
      { image: imagePaths.invision, title: "Invision" },
      { image: imagePaths.adobxd, title: "Adobe XD" },
      { image: imagePaths.adobecreative, title: "Adobe Create Suite" },
    ],
  },
];

const UiComponent = () => {
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
                UI/UX Design
              </h2>
              <p
                className="text-[#0d264c] md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]"
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
        <div className="sm:w-[80%] w-[90%] px[15px] mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <img src={teamimage} id="artWork-3" alt="" />
              {techData.map((category, index) => (
                <div className="serviceTechHolder" key={index}>
                  <div className="serviceTechHolder-header mt-8">
                    <div className="title-holder !pb-1">
                      <img
                        src={imagePaths.littleIcon1}
                        alt=""
                        id="icon"
                      />
                      <h4 id="title">{category.title}</h4>
                    </div>
                  </div>
                  <div className="serviceTechHolder-body">
                    <ul className="tech-list">
                      {category.items.map((item, idx) => (
                        <li className="list-item" key={idx}>
                          <img
                            src={item.image}
                            className="tech-icon"
                            alt=""
                          />
                          <p className="tech-title">{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="mt-[50px]">
                <a href="/client">
                  <button className="text-[20px] mt-8 border-blue-400 py-[8px] text-blue-500 hover:text-white hover:bg-blue-600 border-[2px] rounded-md px-4">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiComponent;
