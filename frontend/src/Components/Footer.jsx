import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white pt-14 pb-8  md:px-4 ">
      <div className=" w-full mr-auto ml-auto md:px-[15px] max-w-[1140px]">
        <div className="sm:flex md:flex block  md:-mx-[-15px]">
          <div className=" flex flex-col pl-5 sm:pl-0 md:pl-0 lg:pl-0   justify-start min-w-[16.6%]">
            <img
              src="https://squareboat.com/images/gptw-logo.png"
              alt=""
              width="85rem"
            />
          </div>
          <div className=" sm:w-[55%] flex justify-between flex-row pl-3 pt-10 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
            <div className=" sm:flex-1 flex ">
              <div className="flex flex-col gap-3">
                <div className="">Clients</div>
                <div className="">Tech stack</div>
                <div className="">Our Team</div>
                <div className="">Contact us</div>
              </div>
            </div>
            <div className=" lg:flex-1">
              <div className="flex flex-col gap-3">
                <div className="">Open Source</div>
                <div className="">Blog</div>
                <div className="">Privay policy</div>
                <div className="">Term and conditions</div>
              </div>
            </div>
            <div className=" md:flex-1"></div>
          </div>
          <div className=" md:w-[30%] w-[80%] pl-8 sm:pl-0 pt-10 md:pt-0 lg:pt-0 xl:pt-0">
            <div className=" mb-[0.8rem] text-[25px] text-[#ffffff] flex justify-center">
              Our Other Brands
            </div>
            <div className=" flex flex-row justify-between mx-auto">
              <div className=" ml-6">
                <img
                  src="https://squareboat.com/images/Grid-design-logo.svg"
                  alt=""
                  width="103rem"
                />
              </div>
              <div className="">
                <img
                  className=" bg-transparent"
                  src="https://squareboat.com/images/creawmate_logo.svg"
                  width="130rem"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mr-auto ml-auto pr-[15px] pl-[15px] max-w-[1140px] mt-[30px]">
        <h1 className=" flex justify-end pr-[3.8rem]  text-[1.3rem] mb-[.5px] font-sans font-[500]">
          Follow us
        </h1>
        <div className="w-full border-b border-solid border-white border-opacity-60 "></div>
        <div className=" flex justify-between items-end pt-2">
          <div className=" md:block hidden">
            <p className=" text-[0.90rem] font-[400] opacity-50 ">
              © Squareboat Solutions Private Limited 2024
            </p>
          </div>

          {/* <div className=" text-[1.3rem] mb-[0.65rem]">Follow Us</div> */}
          <div className=" flex flex-row justify-center  gap-3">
            <div className="">
              <FaYoutube size={20} />
            </div>
            <div className="">
              <FaLinkedin size={20} />
            </div>
            <div className=" ">
              <FaFacebook size={20} />
            </div>
            <div className="">
              <FaInstagram size={20} />
            </div>
            <div className="">
              <FaTwitter size={20} />
            </div>
          </div>
        </div>
        <div className="sm:flex justify-center items-center pt-6 w-[80%] mx-auto md:hidden lg:hidden">
          <p className="text-[0.90rem] font-[400] opacity-50">
            © Squareboat Solutions Private Limited 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
