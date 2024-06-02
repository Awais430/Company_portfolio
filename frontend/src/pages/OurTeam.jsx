import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import team from "../assets/team-1.jpg";
import YouTube from "react-youtube";
import "./OurTeam.css";
import FooterCTASection from "../Components/FooterCTASection.jsx";
import TeamGrid from "../Components/OurTeamComponents/TeamGrid.jsx";

const OurTeam = () => {
  const [videoId, setVideoId] = useState("YQZzEEc3-JM");

  const opts = {
    height: window.innerWidth > 560 ? "315" : "200", // Adjust height based on screen width
    width: window.innerWidth > 560 ? "560" : "100%", // Adjust width based on screen width
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="block">
        <main
          style={{ overflow: "hidden", minHeight: "calc(100vh - 20.7rem)" }}
        >
          {/* hero section */}
          <section
            className=" sm:w-[80%] w-[95%]"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              margin: "auto",
              // position: "relative",
              backgroundImage:
                "url(https://squareboat.com/images/pattern-6.svg?c27134f856ba7d4a716e0575b015ebee)",
              backgroundPosition: "center",
              backgroundSize: "102%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" w-full sm:px-[15px] mx-auto ">
              <div
                style={{
                  textAlign: "center",
                  padding: "5.8rem 0 7rem",
                  display: "block",
                }}
              >
                <div className=" sm:flex block w-full flex-wrap sm:-mx-[-15px]">
                  <div
                    className=""
                    style={{ flexBasis: 0, flexGrow: 1, maxWidth: "100%" }}
                  >
                    <h1
                      className=" mb-0 font-[600] text-[2.6rem]"
                      style={{ lineHeight: "1.35" }}
                    >
                      Meet our team
                    </h1>
                    <p
                      className="mt-[.45rem] mb-0 font-[400] opacity-100 text-[1.1rem] sm:max-w-[60%] mx-auto"
                      style={{
                        lineHeight: "1.6",
                        letterSpacing: "0.02em",
                        color: "#333",
                      }}
                    >
                      We are a bunch of dreamers, designers, and futurists. We
                      are high on collaboration, low on ego, and take our happy
                      hours seriously. We take out time to celebrate our team's
                      successes–and we celebrate often.
                    </p>
                  </div>
                </div>
                {/* pic and content */}
                <div className="team-unity mt-[6.3rem]">
                  <div className="row flex flex-wrap -mx-[15px]">
                    <div
                      className="col-sm sm:max-w-[100%] max-w-[95%] mx-auto"
                      style={{ flex: "0 0 100%" }}
                    >
                      <div
                        className="img-style-1 "
                        style={{
                          margin: "0 1rem",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={team}
                          className="img-group"
                          style={{
                            verticalAlign: "middle",
                            borderStyle: "none",
                          }}
                          alt=""
                        />
                        <div className="blending-overlay" id="animation"></div>
                        <div
                          className="blend"
                          data-bend-color="rgba(255,0,0,0.5)"
                        ></div>
                      </div>
                      <div
                        className="header-title mt-[5rem] font-[600] text-[1.85rem] text-center mb-0"
                        style={{
                          lineHeight: "1.6",
                          latterSpacing: "0.05rem",
                          color: "#2d94f3",
                        }}
                      >
                        Individually, we're a drop. Together, we're an ocean.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* team info partials */}
          <section className="sitesection  pt-[25rem] -mt-[27rem] relative block">
            <div className=" bggradit absolute top-0 left-0 w-full h-full"></div>
            <div className="sitesectionbody">
              <div className="container w-full px-[15px] mx-auto sm:max-w-[80%]">
                <div className=" flex flex-col sm:flex-row  gap-3   flex-wrap -mx-[15px]">
                  <div className=" flex-1">
                    <div className="client-status-number">
                      <div className="heder-title">100+</div>
                      <div className=" header-discription dis-col">
                        Team members or, say team players
                      </div>
                    </div>
                  </div>
                  <div className=" flex-1">
                    <div className="client-status-number">
                      <div className="heder-title">100+</div>
                      <div className=" header-discription dis-col">
                        Cups of coffee every week
                      </div>
                    </div>
                  </div>
                  <div className=" flex-1">
                    <div className="client-status-number">
                      <div className="heder-title">😄</div>
                      <div className=" header-discription dis-col">
                        Countless moments & jokes shared every day
                      </div>
                    </div>
                  </div>
                  <div className=" flex-1">
                    <div className="client-status-number">
                      <div className="heder-title">100K+</div>
                      <div className=" header-discription dis-col">
                        Lines of code pushed every week
                      </div>
                    </div>
                  </div>
                </div>
                <div className="office-info mt-[8rem]">
                  <div className="row flex flex-wrap -mx-[15px]">
                    <div className="col-12">
                      <div
                        className="title text-primary text-[1.25rem] font-[600] mb-[1rem]"
                        color="#0d264c"
                      >
                        Our office and culture? It's Awesome! 🙌
                      </div>
                      <p
                        className="text-secardry mb-[5px]"
                        color="rgba(13,38,76,71)"
                      >
                        It’s why we’re here. It’s why we come to work every day
                        (well, it’s that and our epic office).
                      </p>
                      <p
                        className="text-secardry  mb-[5px]"
                        color="rgba(13,38,76,71)"
                      >
                        This company depends on the incredibly talented people
                        you’ll find in every team: from developers to
                        customer-experience, the designers on their Macs to the
                        brand ambassadors on the ground.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* new video section */}
          <section className="site-section block mt-[80px] pb-[10rem] relative box-border">
            <div className="container w-full px-[15px] mx-auto sm:max-w-[80%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                <div className="video-content-main">
                  <div className="video-content">
                    <h3 className="title">Why join Squareboat?</h3>
                    <p className="text-secandory">
                      Meaningful and cutting edge work, constant learning,
                      brilliant people, and a team guided by core values that
                      promotes creativity and opportunity in everything we do.
                      We listen and learn from the world around us and create
                      life-changing products that impact millions of lives
                      around the world for good.
                    </p>
                  </div>
                </div>
                <div className="video-content-main">
                  <div className="video-box">
                    <div className="video-thumbnail">
                      <YouTube videoId={videoId} opts={opts} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* continue later on */}
          {/* team card photos */}
          <section className="site-section-team !relative !pb-[4rem]">
            <div className=" bg-gradient-custom"></div>
            <div className="site-section-body box-border">
              <div className="container w-full px-[15px] mx-auto sm:max-w-[80%]">
                <div className="row flex flex-wrap -mx-[15px]  ">
                  <div className="col-12">
                    <div
                      className="header-title mt-[5rem] font-[600] text-[1.85rem]  mb-0"
                      style={{
                        lineHeight: "1.6",
                        latterSpacing: "0.05rem",
                        color: "#2d94f3",
                      }}
                    >
                      The team Squareboat 🔥
                    </div>
                  </div>
                </div>

                <TeamGrid />
              </div>
            </div>
          </section>
          <FooterCTASection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
