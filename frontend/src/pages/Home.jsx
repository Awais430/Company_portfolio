import React, { useState } from "react";
// import { GoDownload } from "react-icons/go";
import images from "../assets/images/images.jpeg";
import damac from "../assets/images/damac.jpg";
import reddy from "../assets/images/reddys.png";
import chegg from "../assets/images/chegg.jpg";
import jubli from "../assets/images/jubilant-home.svg";
import paisa from "../assets/images/paisabazaar-home.svg";
import pvr from "../assets/images/pvr.png";
import unozo from "../assets/images/unozo-home.png";
import elevation from "../assets/images/elevation-home.png";
import hudle from "../assets/images/hudle-home.svg";
import lbb from "../assets/images/lbb-home.svg";
import max from "../assets/images/max-estates-home.svg";
import inlunga from "../assets/images/inlingua-home.svg";
import jam from "../assets/images/jamboree-home.svg";
import pat from "../assets/images/pet.png";
import insta from "../assets/images/instamojo-home.png";
import pala from "../assets/images/plakshauni-home.png";
import aws from "../assets/images/awfis-home.png";
import acc from "../assets/images/accacia-home.svg";
import a91 from "../assets/images/a91-home.svg";
import kyor from "../assets/images/Kyor-home.svg";
import niyo from "../assets/images/niyo-home.png";
import star from "../assets/images/star-worldwide-full-home.svg";
import valu from "../assets/images/value_360-home.png";
import hire from "../assets/images/harabmoor-home.png";
import acadru from "../assets/images/acadru.png";
import mingle from "../assets/images/edmingle-home.png";
import miko from "../assets/images/Miko-home.png";
import isango from "../assets/images/isango-home.webp";
import health from "../assets/images/Yubi-Healthy-home.png";
import consulta from "../assets/images/consulta.png";
import luck from "../assets/images/lucideus-home.png";
import shacoin from "../assets/images/sahicoin.png";
import siso from "../assets/images/siso-home.png";
import asima from "../assets/images/aiisma.png";
import neopay from "../assets/images/neopay-lhome.png";
import family from "../assets/images/Familyfirst-home.png";
import oxfo from "../assets/images/oxford-v.svg";
import qubi from "../assets/images/QYUBIC-logo-home.svg";
import jug from "../assets/images/juggernaut-home.svg";
import silk from "../assets/images/Silkhaus-home.png";
import solar from "../assets/images/amplus-home.png";
import trip from "../assets/images/freadom-home.png";
import free from "../assets/images/freedom.png";
import ced from "../assets/images/cedarwood-home.png";
import fine from "../assets/images/finemake-full-home.svg";
import hyr from "../assets/images/logo-hyrr-home.svg";
import ads from "../assets/images/adsight-home.png";
import kid from "../assets/images/kidstir-home.png";
import sta from "../assets/images/star-worldwide-full-home.svg";
import croft from "../assets/images/croftr-home.png";
import uah from "../assets/images/uah-home.png";
import loco from "../assets/images/locofast-home.png";
import gos from "../assets/images/gostops-logo-home.svg";
import ata from "../assets/images/Atadel-home.svg";
import aud from "../assets/images/Auditors-desk-home.svg";
import estro from "../assets/images/Astrojudge-home.svg";
import next from "../assets/images/Edunext-home.svg";
import agro from "../assets/images/Agrowave-home.svg";
import hopp from "../assets/images/hoopr-home.svg";
import vid from "../assets/images/Viden.io-home.svg";
import learn from "../assets/images/LearnEngg-home.svg";
import nav from "../assets/images/navigator-home.png";
import arri from "../assets/images/ArisInfra-home.svg";
import deli from "../assets/images/Delicut-home.svg";
import fifth from "../assets/images/Fifthtry-home.svg";
import yarnip from "../assets/images/Yarnit-home.svg";
import zoop from "../assets/images/Zooper-home.svg";
import sama from "../assets/images/samagra-home.png";
import param from "../assets/images/Param-seva-home.svg";
import idc from "../assets/images/IDC-home.svg";
import hero from "../assets/images/Hero-vired-home.svg";
import ana from "../assets/images/Analytics-Vidhya-home.svg";
import emoha from "../assets/images/emoha-home.png";
import vegg from "../assets/images/VegEase-home.png";
import better from "../assets/images/better.png";
import nala from "../assets/images/Nalanda-home.svg";
import third from "../assets/images/thirdwave.png";
import ven from "../assets/images/ventura-home.png";
import teal from "../assets/images/Tealbox-home.png";
import siri from "../assets/images/siso.jpeg";
import gin from "../assets/images/Ginesys-home.svg";
import ampli from "../assets/images/amplicomm-home.png";
import ong from "../assets/images/ongrid-home.svg";
// import bbb from "../assets/images/zooper";
// import ali from "../assets/images/ali.png";
import owner from "../assets/images/owner-squarboat.webp";
import partener from "../assets/images/partner-with-us.svg";
import cat from "../assets/images/cat.jpg";
// import down from "../assets/images/download.webp"
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import Header from ".././Components/Header";
import Footer from ".././Components/Footer";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [active, setActive] = useState(false);

  const handelClose = (e) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };
  return (
    <div className="w-full relative h-screen">
      <Header />

      <div className="block lg:flex lg:ml-36 text-center">
        <div className="block lg:w-[40%] w-full">
          <h1 className="lg:font-bold font-bold text-[20px] lg:text-[35px]">
            Design driven Success.
          </h1>
          <h1 className="mt-4">
            We're a design focused software development <br />
            company.
          </h1>
          <div className="lg:flex lg:mt-6 items-center mt-6">
            <a href="/" alt="">
              <button
                className="text-[20px]  border-blue-600 text-white
              border-[2px]  rounded-md bg-blue-500 w-[170px] h-[40px]"
              >
                Company Deck
              </button>
            </a>
            <a href="/client" alt="">
              <button
                className="text-[20px]  border-blue-600 text-blue-500 hover:text-white hover:bg-blue-600 ml-10
              border-[2px]  rounded-md  w-[170px] h-[40px]"
              >
                See Our Work
              </button>
            </a>
          </div>
        </div>
        <img
          className="w-[70vh] h-[70vh] lg:ml-24 items-center ml-12 mt-8"
          src={images}
          alt=""
        />
      </div>

      <div className="w-full bg-gray-100 mt-20">
        <h1 className="w-full text-[75px] ml-6 font-extrabold text-blue-200 ">
          GREAT SOFTWARE EXPERIWNCES
        </h1>
        <div className="text-center ">
          <h1 className="text-blue-600 font-bold text-[20px] mt-16">
            Our clients
          </h1>
          <p>
            More than 100+ business have trusted squareboat to grow <br /> using
            design and technology expertise
          </p>
        </div>

        <div className="w-[85%] text-center flex m-auto hidden sm:flex mt-10">
          <div className="flex justify-between mt-10 ">
            <h1 className="font-bold text-[40px] text-black mt-6 px-6">
              DAMAC
            </h1>{" "}
            <img
              height={100}
              width={300}
              className="ml-20 w-[45vh] h-[6vh] mt-8 px-6"
              src={reddy}
              alt=""
            />
            <h1 className="font-bold text-[40px] text-orange-600 mt-6 ml-16 px-6">
              Chegg
            </h1>
            <div className=" flex bg-slate-100 h-[18vh] w-[40vh] ml-4">
              <img
                height={140}
                width={200}
                className="ml-14 w-[40vh] h-[18vh] px-6"
                src={jubli}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="!w-[85%] hidden sm:flex mt-4">
          <div className="flex flex-row justify-between mt-10 ml-[100px]">
            <img className="h-[10vh] w-[35vh] px-6" src={paisa} alt="" />
            <div className="block">
              <h1 className="font-bold text-[40px] text-yellow-600  ml-16 px-6">
                PVR
              </h1>
              <h1 className="text-yellow-600 ml-24">CINEMAS</h1>
            </div>
            <img
              className=" ml-32 h-[10vh] w-[35vh] px-12"
              src={unozo}
              alt=""
            />
            <img
              className="ml-16 h-[10vh] w-[35vh] px-12"
              src={elevation}
              alt=""
            />
          </div>
        </div>
        <div className="bg-gray-100 w-full hidden sm:flex ">
          <div className="!w-[85%]">
            <div className="flex flex-row justify-between mt-10 ml-[80px]">
              <img className="h-[10vh] w-[35vh] px-10" src={hudle} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-12" src={lbb} alt="" />
              <img
                className=" ml-24 h-[10vh] w-[35vh] px-12"
                src={max}
                alt=""
              />
              <img
                className="ml-16 h-[15vh] w-[35vh] px-12"
                src={inlunga}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-10 ml-[100px]">
              <img className="h-[15vh] w-[35vh] px-6" src={jam} alt="" />
              <img className="ml-20 h-[10vh] w-[45vh] px-12" src={pat} alt="" />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-10"
                src={insta}
                alt=""
              />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-10"
                src={pala}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-10 ml-[100px]">
              <img className="h-[10vh] w-[20vh] px-6" src={aws} alt="" />
              <img className="ml-20 h-[15vh] w-[30vh] px-8" src={acc} alt="" />
              <img className=" ml-20 h-[15vh] w-[30vh] px-8" src={a91} alt="" />
              <img className="ml-20 h-[10vh] w-[40vh] px-8" src={trip} alt="" />
            </div>
            <div className="flex flex-row !justify-between mt-10 ml-[100px]">
              <img className="h-[10vh] w-[40vh] px-6" src={niyo} alt="" />
              <img
                className="ml-20 h-[15vh] w-[35vh] px-10"
                src={star}
                alt=""
              />
              <img
                className=" ml-20 h-[15vh] w-[35vh] px-10"
                src={valu}
                alt=""
              />
              <img
                className="ml-12 h-[7vh] w-[40vh] px- mt-2 px-10"
                src={hire}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] px-6" src={acadru} alt="" />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={mingle}
                alt=""
              />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-6"
                src={miko}
                alt=""
              />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={isango}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[15vh] w-[35vh] px-6" src={health} alt="" />
              <img
                className="ml-20 h-[15vh] w-[35vh] px-6"
                src={consulta}
                alt=""
              />
              <img
                className=" ml-20 h-[15vh] w-[35vh] px-6"
                src={luck}
                alt=""
              />
              <img
                className="ml-20 h-[15vh] w-[35vh] px-6"
                src={shacoin}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[15vh] w-[30vh] px-6" src={siso} alt="" />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={asima}
                alt=""
              />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-6"
                src={neopay}
                alt=""
              />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={family}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[15vh] w-[30vh] px-6" src={oxfo} alt="" />
              <img className="ml-20 h-[15vh] w-[30vh] px-6" src={qubi} alt="" />
              <img className=" ml-20 h-[15vh] w-[30vh] px-6" src={jug} alt="" />
              <img className="ml-20 h-[15vh] w-[40vh] px-6" src={silk} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] px-6" src={solar} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={trip} alt="" />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-6"
                src={free}
                alt=""
              />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={ced} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] px-6" src={fine} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={hyr} alt="" />
              <img className=" ml-20 h-[10vh] w-[35vh] px-6" src={ads} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={kid} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] px-6 " src={sta} alt="" />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={croft}
                alt=""
              />
              <img className=" ml-20 h-[10vh] w-[35vh] px-6" src={uah} alt="" />
              <img className="ml-20 h-[10vh] w-[45vh] px-6" src={loco} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <h1 className="font-extrabold text-[30px] px-6">woobly</h1>
              <h1 className="font-extrabold text-[30px] ml-20 px-6">
                HUBSCRIBE
              </h1>
              <h1 className="text-gray-400 font-extrabold text-[30px] ml-20 px-6">
                Ad
                <span className="text-green-300 font-extrabold px-6">MINT</span>
              </h1>
              <img className="ml-20 h-[10vh] w-[35vh]" src={gos} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <h1 className="font-normal text-[30px] mt-6 ml-4">eZ Recs</h1>
              <h1 className="text-[30px] font-medium text-green-800 ml-28">
                bharat <br />
                <span className="text-green-600">Cattle</span>
              </h1>
              <img className=" ml-28 h-[10vh] w-[3v5h]" src={ata} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] " src={aud} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] " src={estro} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={next} alt="" />
              <img className=" h-[10vh] w-[40vh] px-6" src={agro} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={hopp} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <img className="h-[10vh] w-[35vh] px-6" src={sta} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={vid} alt="" />
              <img
                className=" ml-16 h-[10vh] w-[35vh] px-6"
                src={learn}
                alt=""
              />
              <h1 className="text-[30px] font-medium text-red-400  px-6">
                Mav<span className="text-orange-300">Berry</span>
              </h1>
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[100px]">
              <h1 className="text-[30px] font-medium text-blue-400   px-6">
                Plastic<span className="text-blue-600">Mandi</span>
              </h1>
              <img className="ml-20 h-[8vh] w-[35vh]  px-6" src={nav} alt="" />
              <img className=" ml-20 h-[10vh] w-[35vh]" src={arri} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] " src={deli} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[20px]">
              <img
                className="ml-20 h-[10vh] w-[35vh]  px-6"
                src={fifth}
                alt=""
              />
              <img
                className="ml-20 h-[10vh] w-[35vh]  px-6"
                src={yarnip}
                alt=""
              />
              <img className=" ml-20 h-[10vh] w-[35vh]" src={zoop} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] " src={sama} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[20px]">
              <img
                className="ml-20 h-[10vh] w-[35vh]  px-6"
                src={param}
                alt=""
              />
              <img className="ml-20 h-[10vh] w-[35vh]  px-6" src={idc} alt="" />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-6"
                src={hero}
                alt=""
              />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={ana} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[20px]">
              <img
                className="ml-20 h-[10vh] w-[35vh]  px-6"
                src={emoha}
                alt=""
              />
              <h1 className="font-extrabold text-[30px] ml-20 px-6">
                HUBSCRIBE
              </h1>
              <img
                className=" ml-20 h-[10vh] w-[35vh]  px-6"
                src={vegg}
                alt=""
              />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={better}
                alt=""
              />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[20px]">
              <img className="ml-20 h-[7vh] w-[35vh]  px-6" src={nala} alt="" />
              <img
                className="ml-20 h-[10vh] w-[35vh] px-6"
                src={third}
                alt=""
              />
              <img className=" ml-20 h-[7vh] w-[35vh] px-6" src={ven} alt="" />
              <img className="ml-20 h-[10vh] w-[35vh] px-6" src={teal} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[20px] bg-gray-100">
              <img
                className="ml-20 h-[10vh] w-[35vh]  px-6"
                src={siri}
                alt=""
              />
              <img className="ml-20 h-[10vh] w-[35vh]  px-6" src={gin} alt="" />
              <img
                className=" ml-20 h-[10vh] w-[35vh] px-6"
                src={ampli}
                alt=""
              />
              <img className="ml-20  h-[10vh] w-[35vh] px-6" src={ong} alt="" />
            </div>
            <div className="flex flex-row justify-between mt-16 ml-[40px]">
              <img className="ml-20 h-[10vh] w-[20vh] " src={gin} alt="" />
            </div>

            <div className="flex flex-row justify-between mt-10 ml-[80px] text-center">
              <a href="/client">
                <button
                  className="text-[20px] hover:text-white hover:bg-blue-600 ml-[500px] mt-15 border-blue-400 text-blue-600 
              border-[2px] p-4 rounded-full"
                >
                  show more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="!text-center mt-20 p-4 mr-10 m-auto block w-[90%]">
        <h1 className="text-[40px] font-semibold text-blue-700">
          Our range of services
        </h1>
        <p>
          we pride ourselves on building successfull, end to end web and <br />{" "}
          mobile applications
        </p>
      </div>
      <div class="mt-[30px] w-[85%] text-center  flex flex-wrap lg:flex-nowrap ml-6 overflow-hidden lg:ml-28 lg:mt-6">
        <div class="w-full lg:w-1/3 lg:block flex justify-center items-center">
          <div class="block text-">
            <h1 class="text-2xl font-bold">Web & App Development</h1>
            <p class="mt-6">
              We build beautiful, responsive and feature-rich websites and
              applications that solve real customer problems
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 lg:ml-6 mt-6 lg:mt-0 flex justify-center items-center">
          <div class="block text-center">
            <h1 class="text-2xl font-bold">UI / UX design</h1>
            <p class="mt-6">
              Grid Design Studio is known for crafting experiences through the
              power of UI/UX design.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3 lg:ml-6 mt-6 lg:mt-0 flex justify-center items-center">
          <div class="block text-center">
            <h1 class="text-2xl font-bold">AI and ML</h1>
            <p class="mt-6">
              Revolutionizing IT solutions with cutting-edge AI services.
              Enhancing efficiency and driving innovation for your business
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row text-center items-center justify-center mt-20 lg:ml-44">
        <div class="w-full lg:w-1/2 lg:block flex justify-center lg:justify-center">
          <div class="block w-full lg:w-[75%]">
            <h1 class="text-2xl font-bold">DevOps</h1>
            <p class="mt-4">
              We've worked on websites handling more than 10 million hits/day.
              We can scale your products too.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:block mt-6 lg:mt-0 flex justify-center lg:justify-center">
          <div class="block w-full lg:w-[75%] ml-0 lg:ml-6">
            <h1 class="text-2xl font-bold">Staff Augmentation</h1>
            <p class="mt-4">
              With Crewmate, you can instantly onboard our exceptional team of
              developers and designers in less than 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-center mt-10 lg:ml-[80px] text-center lg:mt-20">
        <a href="/tech-stack">
          <button
            class="text-lg lg:text-xl hover:text-white hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-4 lg:mt-15 border-blue-400
     text-blue-600 border-[2px] lg:border-[2px] p-4 lg:px-6 rounded-full"
          >
            View our portfolio
          </button>
        </a>
      </div>

      <div class="w-full bg-blue-100  lg:h-[130vh] h-[280vh]">
        <div class="w-[95%] lg:w-[85%] m-auto p-14 mt-10 flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/2 block text-center lg:text-left mb-8 lg:mb-0">
            <h1 class="text-blue-600 text-2xl lg:text-4xl font-bold">
              Meet the Captain
            </h1>
            <p class="mt-6">
              Gaurav has over{" "}
              <span class="font-bold bg-blue-200">18+ years of experience</span>{" "}
              in developing and maintaining{" "}
              <span class="font-bold bg-blue-200">
                large and scalable web and mobile
              </span>{" "}
              applications end-to-end including product conceptualization,
              design, backend and frontend development, deployment, server
              management, uptime, reliability, performance and scalability.
            </p>
          </div>
          <div class="w-full lg:w-1/2 block text-center lg:text-left">
            <img
              class="h-auto lg:h-[40vh] w-[40vh] mx-auto lg:ml-24"
              src={owner}
              alt=""
            />
            <h1 class="text-gray-600 mt-6 lg:ml-24">
              <span class="text-gray-600 font-semibold">Gaurav Gupta</span>,
              Captain
            </h1>
            <ImLinkedin class="ml-24 mt-4 lg:ml-24" />
          </div>
        </div>
        <h1 class="text-center font-semibold mt-16">
          Our work seems to get a lot of press attention 😎
        </h1>
        <div class="flex flex-col lg:flex-row justify-center items-center mt-12 lg:ml-24 ">
          <div class="w-[90%] lg:w-[25%] h-auto lg:h-[30vh] block bg-slate-50 mb-6 lg:mb-0 lg:mr-6">
            <h1 class="text-gray-700 font-bold ml-4 text-2xl">
              THE ECONOMIC TIMES
            </h1>
            <p class="ml-4">
              Squareboat: App maker's tool deal corner helps clients monitor
              web, server health
            </p>
            <button class="text-blue-500 ml-6 mt-3">Read More</button>
          </div>
          <div class="w-[90%] lg:w-[25%] h-auto lg:h-[30vh] block bg-slate-50 mb-6 lg:mb-0 lg:mr-6 mt-10 lg:ml-10">
            <div class="flex">
              <div class="block text-red-600 font-bold ml-6 mt-2">
                <h1>YOUR</h1>
                <h1>STORY</h1>
              </div>
              <div class="block text-gray-700 ml-2">
                <h1>INSPIRE</h1>
                <h1>INOVATIVE</h1>
                <h1>IGNITE</h1>
              </div>
            </div>
            <p class="ml-6">
              Former SlideShare and Naukri developer launches Hackr.io, an
              online education community
            </p>
            <button class="text-blue-500 ml-6 mt-3">Read More</button>
          </div>
          <div class="w-[90%] lg:w-[25%] h-auto lg:h-[30vh] block bg-slate-50 lg:mb-0 lg:ml-10">
            <img src={cat} alt="" class="w-[10vh] h-[10vh] ml-2" />
            <p class="ml-4 mt-2">
              Product Hunt for Online Programming Courses & Tutorials
            </p>
            <button class="text-blue-500 ml-6 mt-3">Read More</button>
          </div>
        </div>
      </div>

      <div class="text-center mt-44">
        <h1 class="text-blue-600 font-bold text-2xl lg:text-3xl">
          Real words by real people
        </h1>
        <p class="mt-6">
          It's great to get a pat on your back for a job well done. See
          <br /> what our clients have to say about us.
        </p>
      </div>

      <div class="bg-slate-100 h-auto lg:h-[50vh] mt-16">
        <div class="flex flex-col lg:flex-row items-center lg:ml-12 mt-6">
          <div class="w-full lg:w-[45%] block text-center lg:text-left">
            <h1 class="text-blue-600 font-bold text-2xl lg:text-3xl">
              Partner with a Reliable & Experienced Studio
            </h1>
            <h1 class="mt-6">Let's get in touch. The coffee is on us!</h1>
            <a href="/contact">
              <button
                class="text-lg font-semibold bg-blue-600 text-white w-40 lg:w-[150px] h-10 lg:h-[40px] mt-10 border-2
             rounded-md hover:bg-blue-800"
              >
                Contact Us
              </button>
            </a>
          </div>
          <div class="w-full lg:w-auto mt-6 lg:mt-0">
            <img
              src={partener}
              alt=""
              class="h-auto lg:h-[60vh] px-4 lg:w-[200vh]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
