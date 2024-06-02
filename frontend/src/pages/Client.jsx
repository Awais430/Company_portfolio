import React from "react";

import { IoDownloadSharp } from "react-icons/io5";
import { RiFolderVideoFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProjectList from "../Components/ClientComponents/ProjectList";
import FooterCTASection from "../Components/FooterCTASection";

const ClientPage = () => {
  return (
    <div className="w-[100%] block">
      <Header />

      {/* Place the div here */}
      <div className="text-center">
        <h1 className="font-bold text-[30px] text-blue-600 ">
          <Typewriter
            options={{
              strings: ["Designs Work Apps"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
          <span className="text-black">We are proud of.</span>
        </h1>
        <p>Choose what you like to see! 🤠</p>
      </div>
      <div className=" mt-[8rem]">
        <ProjectList />
      </div>

      <div className="w-full h-[40vh] bg-slate-300 mt-24">
        <FooterCTASection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ClientPage;
