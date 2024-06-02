import React from "react";

const TechHeroSection = () => {
  return (
    <>
      {/* <div className="w-full">
    <div className="w-[80% px-[15px] mx-auto">
        <div className="pt-[5.8rem]">
          <div className=" flex flex-wrap -mx-[15px]">
            <div className=" flex-grow-[1] max-w-full ">
              <h1 className=" font-[600] text-[2.6rem] text-gray-900" style={{lineHeight:'2.35rem'}}>
                IT Services You Can Count On
              </h1>
              <p className=" pt-[2rem] text-[1rem ] text-blue-400 m-[1rem]" style={{lineHeight:"1.5rem"}}>
                TRUSTED WEB & MOBILE APP DEVELOPMENT SERVICES
              </p>
              <p className="px-2 flex justify-center pt-3 text-[1.1rem] mt-4 text-[#575757] max-w-full " style={{lineHeight:"1.9rem"}}>
                Squareboat is a leading IT services provider which has
                established a name in the industry by delivering great bespoke
                web and mobile applications. Our premium clientele can vouch for
                our quality of work and they trust us for all their critical
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <section
        className=" sm:w-[80%] w-[90%]  sm:px-0"
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
        <div className=" w-full sm:px-[15px] sm:mx-auto">
          <div
            style={{
              textAlign: "center",
              padding: "5.8rem 0 7rem",
              paddingBottom:"0",
              display: "block",
            }}
          >
            <div className=" sm:flex block w-full flex-wrap -mx-[15px]">
              <div
                className=" mt-8"
                style={{ flexBasis: 0, flexGrow: 1, maxWidth: "100%" }}
              >
                <h1
                  className=" mb-0 font-[600] text-[2.6rem]"
                  style={{ lineHeight: "1.35" }}
                >
                  IT Services You Can Count On
                </h1>
                <p
                  className="  text-[1rem ] text-blue-400 m-[1rem]"
                  style={{ lineHeight: "1.5rem" }}
                >
                  TRUSTED WEB & MOBILE APP DEVELOPMENT SERVICES
                </p>
                <p
                  className=" mb-0 font-[400] opacity-100 text-[1.1rem]  mx-auto"
                  style={{
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  Squareboat is a leading IT services provider which has
                  established a name in the industry by delivering great bespoke
                  web and mobile applications. Our premium clientele can vouch
                  for our quality of work and they trust us for all their
                  critical projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechHeroSection;
