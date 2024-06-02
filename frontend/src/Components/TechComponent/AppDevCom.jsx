import React from "react";
import teamimage from "../../assets/teamimage-2.svg";
import native from "../../assets/native.svg";
import hybrid from "../../assets/hybrid.svg";
import Android from "../../assets/andriod.svg";
import ios from "../../assets/ios.svg";
import react from "../../assets/reactjs.svg";
import flutter from "../../assets/flutter.webp";
import pwa from "../../assets/pwa.svg";
import ionic from "../../assets/iconic.svg";

const techData = [
  {
    title: "Native App",
    image: native,
    items: [
      { icon: Android, title: "nativeJS" },
      { icon: ios, title: "nativeJS" },
    ],
  },
  {
    title: "Hybrid App",
    image: hybrid,
    items: [
      { icon: flutter, title: "Flutter" },
      { icon: react, title: "React Native" },
      { icon: pwa, title: "PWA" },
      { icon: ionic, title: "Ionic" },
    ],
  },
];

const AppDevComponent = () => {
  return (
    <section className="pt-[6rem] block relative" style={{ padding: "8rem 0 5rem" }}>
      <div className="sec-header">
        <div className="!w-[80%] px-[15px] !mx-auto">
          <div className="row flex flex-wrap justify-center -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <h2 className="header-title text-[1.6rem] md:block justify-center flex !font-[600] !text-[#9c6dff]">
                App Development
              </h2>
              <p className="text-[#0d264c] md:max-w-[100%] lg:max-w-[60%] mb-0 mt-[0.45rem] opacity-[0.71] font-[400]" style={{ lineHeight: "1.9" }}>
                If you’ve been considering app development to take your business forward, Squareboat is the service provider you should place your trust in. We provide end-to-end development services for mobile apps for Android as well as iOS platforms as that are in line with your organizational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-body">
        <div className="sm:w-[80%] w-[90%] px[15px] mx-auto">
          <div className="row flex flex-wrap -mx-[15px]">
            <div className="col max-w-full flex-grow-[1]">
              <img src={teamimage} id="artWork-2" alt="" />
              {techData.map((tech, index) => (
                <div className="serviceTechHolder" key={index}>
                  <div className="serviceTechHolder-header mt-8">
                    <div className="title-holder !pb-1">
                      <img src={tech.image} alt="" id="icon" />
                      <h4 id="title">{tech.title}</h4>
                    </div>
                  </div>
                  <div className="serviceTechHolder-body">
                    <ul className="tech-list">
                      {tech.items.map((item, idx) => (
                        <li className="list-item" key={idx}>
                          <img src={item.icon} className="tech-icon" alt="" />
                          <p className="tech-title">{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-[50px]">
                    <a href="/client">
                      <button className="text-[20px] mt-0 border-[#9c6dff] py-[8px] text-[#9c6dff] hover:text-white hover:bg-[#9c6dff] border-[2px] rounded-md px-4">
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevComponent;
